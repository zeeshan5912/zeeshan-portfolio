"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Star, Zap, Shield, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EXPERIENCES } from "@/data/portfolioData";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-28 sm:scroll-mt-36">
      {/* 1. Dark Forest Green Feature Banner with Circular Lime Badge (Matching Babun RTL Banner) */}
      <div className="bg-[#13382f] text-white py-20 relative overflow-hidden">
        {/* Corner Plus Accents */}
        <div className="absolute top-6 left-8 text-2xl font-mono text-emerald-600/40 select-none hidden md:block">
          +
        </div>
        <div className="absolute bottom-6 right-8 text-2xl font-mono text-emerald-600/40 select-none hidden md:block">
          +
        </div>

        <Container size="default">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Engineered with Modern{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#DFFF5E]">SSR &amp; MERN</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#DFFF5E]/20 -z-0 rounded-sm" />
              </span>
            </h2>

            {/* Overlapping Mockup Cards in Forest Green */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10 opacity-90">
              <div className="p-4 rounded-2xl bg-[#184439] border border-emerald-700/50 text-left">
                <span className="text-[#DFFF5E] font-medium text-sm block mb-1">Clean State</span>
                <p className="text-xs text-slate-300">Redux Toolkit with persistent hydration and actions.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#184439] border border-emerald-700/50 text-left">
                <span className="text-[#DFFF5E] font-medium text-sm block mb-1">SSR Performance</span>
                <p className="text-xs text-slate-300">Next.js App Router for instant load times and SEO.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#184439] border border-emerald-700/50 text-left">
                <span className="text-[#DFFF5E] font-medium text-sm block mb-1">MERN APIs</span>
                <p className="text-xs text-slate-300">Robust Node.js &amp; Express endpoints with MongoDB.</p>
              </div>
            </div>

            {/* Circular Neon Lime Accent Badge (Babun Center Badge) */}
            <div className="w-24 h-24 rounded-full bg-[#DFFF5E] text-[#13382f] flex flex-col items-center justify-center font-bold shadow-2xl border-4 border-[#13382f] transform hover:scale-110 transition-transform cursor-default">
              <span className="text-sm font-bold tracking-widest uppercase">MERN</span>
              <span className="text-[10px] font-medium tracking-tighter">Stack</span>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Fast Loading Time & Super Smooth Metrics Section (Matching Babun Metrics Row) */}
      <div className="bg-[#f8faf7] text-[#13382f] py-20 border-b border-slate-200/80">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-7">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight leading-tight">
                Fast Loading Time &amp;{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Super Smooth UX.</span>
                  <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#DFFF5E] -z-0 opacity-80 rounded-sm" />
                </span>
              </h3>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Writing clean, component-driven code optimized for 60 FPS animations, sub-second API responses, and 100/100 Lighthouse performance metrics.
              </p>
            </div>
          </div>

          {/* 3 Metric White Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1: 5.0 Rating */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-md text-center flex flex-col items-center">
              <div className="text-4xl font-bold text-[#13382f] mb-1 font-sans">
                5.00
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                Code Quality Score
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Card 2: 99% Speed */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-md text-center flex flex-col items-center">
              <div className="text-4xl font-bold text-[#13382f] mb-1 font-sans">
                99%
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                Performance &amp; SEO
              </div>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Lighthouse Verified
              </span>
            </div>

            {/* Card 3: 100% Modularity */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-md text-center flex flex-col items-center">
              <div className="text-4xl font-bold text-[#13382f] mb-1 font-sans">
                100%
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                Responsive Delivery
              </div>
              <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                All Screen Formats
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. Work Experience Details */}
      <div className="bg-white py-20">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 block">
              Career Journey
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight leading-tight mb-4">
              Work Experience &amp;{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Positions</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#DFFF5E] -z-0 opacity-80 rounded-sm" />
              </span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className="rounded-3xl bg-slate-50 border-2 border-slate-200/80 p-6 sm:p-8 hover:border-[#13382f] transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#13382f] text-[#DFFF5E] text-xs font-medium uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <span className="text-xs font-normal text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold text-[#13382f] mb-1">
                  {exp.role}
                </h4>
                <div className="text-sm font-medium text-slate-700 mb-5">
                  {exp.company}
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-normal">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#13382f] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-normal rounded-lg bg-white border border-slate-200 text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
