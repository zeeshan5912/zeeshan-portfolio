"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Terminal,
  ArrowRight,
  ExternalLink,
  Code2,
  Database,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";
import { Container } from "@/components/layout/Container";
import { triggerConfetti } from "@/lib/confetti";

export function HeroSection() {
  const [activeMockupTab, setActiveMockupTab] = useState<number>(0);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    triggerConfetti();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const tickerItems = [
    "React.js",
    "Next.js (App Router)",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Framer Motion",
    "Server-Side Rendering (SSR)",
    "RESTful APIs",
    "Clean Architecture",
    "JavaScript (ES6+)",
  ];

  return (
    <section id="hero" className="relative bg-[#DFFF5E] text-[#13382f] pt-24 sm:pt-32 pb-0 overflow-hidden">
      {/* Corner Crosshair Decorations (+) */}
      <div className="absolute top-24 left-6 sm:left-10 text-2xl font-mono text-[#13382f]/30 select-none hidden md:block">
        +
      </div>
      <div className="absolute top-36 right-8 sm:right-14 text-2xl font-mono text-[#13382f]/30 select-none hidden md:block">
        +
      </div>

      <Container size="default">
        {/* Top Text & Headline */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-4 sm:pt-8 pb-10 sm:pb-12 px-2 sm:px-0">
          {/* Floating Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13382f]/10 border border-[#13382f]/20 text-xs font-bold text-[#13382f] uppercase tracking-wider mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[#13382f] animate-ping" />
            <span>MERN &amp; Frontend Engineer</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#13382f] leading-[1.12] mb-5 sm:mb-6 font-sans"
          >
            {PERSONAL_INFO.name} | Frontend &amp; MERN Stack Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-sm sm:text-base md:text-xl text-[#13382f]/85 font-medium max-w-2xl leading-relaxed mb-8 px-2 sm:px-4"
          >
            Building responsive, high-performance web applications using React.js, Next.js, Redux, Node.js &amp; MongoDB with component-driven clean architecture.
          </motion.p>

          {/* Action Buttons (Full width on mobile, inline on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto max-w-xs sm:max-w-none mb-3"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#13382f] text-[#DFFF5E] font-bold text-sm uppercase tracking-wider hover:bg-black transition-all shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border-2 border-[#13382f] text-[#13382f] font-bold text-sm uppercase tracking-wider hover:bg-[#13382f] hover:text-[#DFFF5E] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Availability Tagline */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[11px] sm:text-xs font-bold text-[#13382f]/70 uppercase tracking-widest mt-3 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span>Lahore, Pakistan · Open to Full-Time &amp; Remote Roles</span>
          </motion.span>
        </div>

        {/* Floating Overlapping Project Mockups Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-2 sm:mt-4 -mb-10 sm:-mb-16 z-20 max-w-5xl mx-auto px-2 sm:px-4"
        >
          {/* Mobile Mockup Switcher Tabs (For mobile users to preview all 3 cards) */}
          <div className="flex md:hidden items-center justify-center gap-1.5 mb-3 bg-[#13382f]/10 p-1 rounded-full max-w-xs mx-auto">
            {["POS System", "Influencer Hub", "Pak Booking"].map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveMockupTab(idx)}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all ${
                  activeMockupTab === idx
                    ? "bg-[#13382f] text-[#DFFF5E] shadow-xs"
                    : "text-[#13382f] hover:bg-black/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-end">
            {/* Left Card: Influencer Hub Admin Preview */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className={`md:col-span-3 transform md:-rotate-2 hover:rotate-0 transition-transform duration-300 ${
                activeMockupTab === 1 ? "block" : "hidden md:block"
              }`}
            >
              <div className="rounded-2xl bg-white p-4 shadow-2xl border border-black/10">
                <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-mono text-slate-400 ml-1 truncate">Admin Panel</span>
                </div>
                <div className="space-y-2">
                  <div className="h-20 sm:h-16 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-indigo-800 p-3 text-white flex flex-col justify-end">
                    <span className="text-xs sm:text-[10px] font-bold">Influencer Hub</span>
                    <span className="text-[10px] sm:text-[8px] opacity-80">Campaign Analytics &amp; ROI</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-semibold text-slate-700 pt-1">
                    <span>Performance</span>
                    <span className="text-emerald-600 font-bold">+94% ROI</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Main Card: POS System & Web Platform */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className={`md:col-span-6 z-20 ${
                activeMockupTab === 0 ? "block" : "hidden md:block"
              }`}
            >
              <div className="rounded-3xl bg-white p-4 sm:p-7 shadow-2xl border border-black/10 hover:shadow-3xl transition-all">
                <div className="flex items-center justify-between pb-3 mb-3 sm:mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-400 ml-1 sm:ml-2 truncate max-w-[140px] sm:max-w-none">
                      pos-system-architecture.app
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#DFFF5E] text-[#13382f] text-[10px] font-extrabold uppercase">
                    Live Demo
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="h-44 sm:h-52 rounded-2xl bg-gradient-to-br from-[#13382f] via-[#184439] to-[#0e2922] p-4 sm:p-6 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-[#DFFF5E]/15 rounded-full blur-2xl" />

                    <div>
                      <span className="text-[11px] sm:text-xs font-bold text-[#DFFF5E] uppercase tracking-wider block">
                        Production Application
                      </span>
                      <h3 className="text-lg sm:text-2xl font-extrabold tracking-tight mt-1 leading-snug">
                        High-Speed Retail POS &amp; Order Engine
                      </h3>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-3 sm:pt-4 border-t border-white/10">
                      <span className="font-mono text-slate-300 text-[11px] sm:text-xs">
                        Next.js · Tailwind · Redux
                      </span>
                      <span className="font-bold text-[#DFFF5E] flex items-center gap-1 text-[11px] sm:text-xs">
                        Sub-second Checkout <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Pak Booking Platform Preview */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className={`md:col-span-3 transform md:rotate-2 hover:rotate-0 transition-transform duration-300 ${
                activeMockupTab === 2 ? "block" : "hidden md:block"
              }`}
            >
              <div className="rounded-2xl bg-white p-4 shadow-2xl border border-black/10">
                <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-mono text-slate-400 ml-1 truncate">Pak Booking</span>
                </div>
                <div className="space-y-2">
                  <div className="h-20 sm:h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 p-3 text-white flex flex-col justify-end">
                    <span className="text-xs sm:text-[10px] font-bold">Pak Booking Landing</span>
                    <span className="text-[10px] sm:text-[8px] opacity-80">Next.js SSR · SEO 100</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-semibold text-slate-700 pt-1">
                    <span>SSR Response</span>
                    <span className="text-indigo-600 font-bold">120ms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Deep Forest Green Stats Bar & Marquee */}
      <div className="bg-[#13382f] text-white pt-20 sm:pt-28 pb-12 sm:pb-16 relative z-10 border-t border-emerald-900/50">
        <div className="absolute top-6 left-8 text-xl font-mono text-emerald-600/40 select-none hidden md:block">
          +
        </div>
        <div className="absolute bottom-6 right-8 text-xl font-mono text-emerald-600/40 select-none hidden md:block">
          +
        </div>

        {/* Continuous Animated Tech Marquee Ticker */}
        <div className="mb-12 border-y border-emerald-800/60 py-3 overflow-hidden whitespace-nowrap relative">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="inline-flex items-center gap-8 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#DFFF5E]"
          >
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={index} className="inline-flex items-center gap-3">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </span>
            ))}
          </motion.div>
        </div>

        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center p-3 rounded-2xl bg-white/5 md:bg-transparent border border-white/5 md:border-none"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#DFFF5E] tracking-tight font-sans mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-base font-bold text-white uppercase tracking-wider mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 max-w-[160px] leading-tight">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
