"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Send, Phone, Sparkles } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireClick = () => {
    triggerConfetti();
    setMobileMenuOpen(false);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "py-5 sm:py-7 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm"
            : "py-5 sm:py-7 bg-[#DFFF5E]"
        )}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2.5px] bg-[#13382f] z-50 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Custom Cyber Z Brand Logo */}
            <Logo
              isScrolled={isScrolled}
              onClick={(e) => handleNavClick(e, "#hero")}
            />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "text-sm font-semibold transition-all duration-200 relative py-1",
                      isScrolled
                        ? isActive
                          ? "text-[#13382f] font-bold"
                          : "text-slate-600 hover:text-[#13382f]"
                        : isActive
                        ? "text-[#13382f] font-bold"
                        : "text-[#13382f]/80 hover:text-[#13382f]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#13382f] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Button (Babun Pill Button) */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleHireClick}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 uppercase tracking-wider",
                  isScrolled
                    ? "bg-[#13382f] text-[#DFFF5E] hover:bg-black shadow-sm"
                    : "bg-transparent text-[#13382f] border-2 border-[#13382f] hover:bg-[#13382f] hover:text-[#DFFF5E]"
                )}
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "p-2.5 rounded-2xl transition-colors cursor-pointer flex items-center justify-center",
                  isScrolled
                    ? "text-[#13382f] bg-slate-100 hover:bg-slate-200"
                    : "text-[#13382f] bg-black/10 hover:bg-black/15"
                )}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-x-4 top-24 sm:top-28 bg-[#13382f] text-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4 border border-emerald-700/50 max-h-[85vh] overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-emerald-800/80">
                <Logo
                  size="sm"
                  theme="dark"
                  onClick={(e) => handleNavClick(e, "#hero")}
                />
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-emerald-700/50 text-[11px] text-[#DFFF5E] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFFF5E] animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              {/* Nav Items */}
              <div className="flex flex-col gap-1.5 py-1">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-4 py-3 rounded-2xl text-base font-semibold text-slate-100 hover:text-[#DFFF5E] hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </motion.a>
                ))}
              </div>

              {/* Action Buttons in drawer */}
              <div className="pt-3 border-t border-emerald-800/80 flex flex-col gap-2.5">
                <button
                  onClick={handleHireClick}
                  className="w-full py-3.5 rounded-full bg-[#DFFF5E] text-[#13382f] font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:bg-white transition-colors cursor-pointer"
                >
                  <span>Let&apos;s Connect</span>
                  <Send className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFFF5E]" />
                  <span>WhatsApp: {PERSONAL_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
