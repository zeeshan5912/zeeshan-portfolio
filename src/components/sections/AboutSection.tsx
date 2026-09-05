"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Shield,
  Layout,
  Server,
  Terminal,
  Zap,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TiltCard } from "@/components/effects/TiltCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 bg-[#fbfdfb] text-[#13382f] relative scroll-mt-28 sm:scroll-mt-36 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Background Accent Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#DFFF5E]/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#13382f]/5 border border-[#13382f]/10 text-xs font-bold text-[#13382f] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#13382f]" />
            <span>About Me &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight leading-tight mb-4">
            Engineering High-Performance{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Digital Experiences</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#DFFF5E] -z-0 opacity-80 rounded-sm" />
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
            Frontend-focused MERN Stack engineer with a passion for clean UI, reusable component architectures, and silky smooth micro-interactions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Core Summary & Frontend Focus (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8"
          >
            <TiltCard maxTilt={3} className="h-full">
              <div className="h-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#13382f]/40 shadow-sm hover:shadow-xl transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#13382f] text-[#DFFF5E] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Layout className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#13382f] mb-4 tracking-tight">
                    Frontend Focused, Full-Stack Capable
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                    {PERSONAL_INFO.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Component-Driven Clean Architecture",
                      "Server-Side Rendering (SSR) & SEO",
                      "Redux Toolkit Global State Management",
                      "High-Performance & Low-Latency UX",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#13382f] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">📍 Based in Lahore, Pakistan</span>
                  <span className="px-3 py-1 rounded-full bg-[#13382f] text-[#DFFF5E] font-bold text-[11px] uppercase tracking-wider">
                    1+ Year Production
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Clean Architecture & Predictable State (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4"
          >
            <TiltCard maxTilt={3} className="h-full">
              <div className="h-full rounded-3xl bg-[#13382f] text-white border border-emerald-800 p-6 sm:p-8 flex flex-col justify-between group hover:border-[#DFFF5E] shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFFF5E]/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#DFFF5E] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <Shield className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Clean Architecture
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Writing maintainable, modular, and self-documenting code with clear separation between state, presentation, and data layers.
                  </p>
                </div>

                <div className="space-y-2">
                  {["Reusable Custom Hooks", "Predictable Data Flow", "Strict Error Boundaries"].map(
                    (point, i) => (
                      <div
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-white/5 border border-emerald-700/50 text-xs font-semibold text-[#DFFF5E]"
                      >
                        {point}
                      </div>
                    )
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 3: Backend & Data Pipelines (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4"
          >
            <TiltCard maxTilt={3} className="h-full">
              <div className="h-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between group hover:border-[#13382f]/40 shadow-sm hover:shadow-xl transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <Server className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#13382f] mb-3">
                    MERN Backend
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Building resilient RESTful endpoints in Node.js and Express, coupled with MongoDB schemas for dependable data pipelines.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-800 border border-slate-200 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 4: Animation & Micro-Interactions (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-8"
          >
            <TiltCard maxTilt={3} className="h-full">
              <div className="h-full rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between group hover:border-[#13382f]/40 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#DFFF5E]/25 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#DFFF5E] text-[#13382f] flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#13382f] mb-3 tracking-tight">
                    Micro-Interactions &amp; Fluid Motion
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                    Great software should feel responsive and alive. Leveraging Framer Motion and modern Tailwind styling, I craft meaningful transitions, layout shifts, and physics-based gestures that turn standard interfaces into memorable digital products.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { label: "60 FPS", desc: "Smooth Renders" },
                    { label: "Gesture Ready", desc: "Touch & Drag" },
                    { label: "Responsive", desc: "Adaptive Layouts" },
                    { label: "A11y First", desc: "Accessible UI" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col"
                    >
                      <span className="text-xs sm:text-sm font-extrabold text-[#13382f]">{stat.label}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{stat.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
