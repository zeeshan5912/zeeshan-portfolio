"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO, NAV_ITEMS } from "@/data/portfolioData";
import { Container } from "./Container";

export function Footer() {
  const [lahoreTime, setLahoreTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLahoreTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#13382f] text-white py-12 border-t border-emerald-900/60 relative">
      <Container size="default">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-emerald-800/60 text-center md:text-left">
          {/* Logo with Green Dot */}
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#d4f938] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13382f]" />
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#d4f938] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Live Lahore Time Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184439] border border-emerald-700/60 text-xs font-mono text-[#d4f938]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Lahore, PK: {lahoreTime || "PKT"}</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Clean Next.js Architecture.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#d4f938] transition-colors font-bold uppercase tracking-wider cursor-pointer py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
