"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Shield,
  Layout,
  Server,
  Workflow,
  Globe2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { TiltCard } from "@/components/effects/TiltCard";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <Container>
        <SectionHeader
          badgeText="About Me"
          badgeVariant="primary"
          title="Engineering Modern"
          highlightedText="Digital Experiences"
          description="A look into my background, core development principles, and technical approach to frontend & full-stack development."
        />

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
            <TiltCard maxTilt={4} className="h-full">
              <div className="h-full rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-300 shadow-lg shadow-slate-200/40 transition-all">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-100/60 transition-all" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-6 shadow-xs">
                    <Layout className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                    Frontend Focused, Full-Stack Capable
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                    {PERSONAL_INFO.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Component-Driven Clean Architecture",
                      "Server-Side Rendering (SSR) & SEO",
                      "Redux Global State Management",
                      "High-Performance & Low-Latency UX",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Based in Lahore, Pakistan</span>
                  <span className="text-indigo-600 font-semibold">1+ Year Production Experience</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Clean Code & Architecture (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4"
          >
            <TiltCard maxTilt={4} className="h-full">
              <div className="h-full rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between group hover:border-sky-300 shadow-lg shadow-slate-200/40 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-6 shadow-xs">
                    <Shield className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    Clean Architecture
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Writing maintainable, modular, and self-documenting code with clear separation between state, presentation, and data-fetching layers.
                  </p>
                </div>

                <div className="space-y-2">
                  {["Reusable Hook Abstractions", "Predictable Data Flow", "Strict Error Boundaries"].map(
                    (point, i) => (
                      <div
                        key={i}
                        className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {point}
                      </div>
                    )
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 3: Backend & Data Management (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4"
          >
            <TiltCard maxTilt={4} className="h-full">
              <div className="h-full rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between group hover:border-emerald-300 shadow-lg shadow-slate-200/40 transition-all">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 shadow-xs">
                    <Server className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    MERN Backend
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Building resilient RESTful endpoints in Node.js and Express, coupled with MongoDB and Mongoose schemas for dependable data pipelines.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 4: Animation & User Delight (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-8"
          >
            <TiltCard maxTilt={4} className="h-full">
              <div className="h-full rounded-3xl bg-white/85 border border-slate-200/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between group hover:border-purple-300 shadow-lg shadow-slate-200/40 transition-all relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-100/60 transition-all" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-6 shadow-xs">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                    Micro-Interactions &amp; Fluid Motion
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                    I believe great software should feel alive. Leveraging Framer Motion and modern CSS, I craft meaningful transitions and physics-based gestures that elevate standard interfaces into memorable digital journeys.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {[
                    { label: "60 FPS", desc: "Smooth Renders" },
                    { label: "Gesture Ready", desc: "Touch & Drag" },
                    { label: "Responsive", desc: "All Screen Sizes" },
                    { label: "A11y First", desc: "Accessible UI" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{stat.label}</span>
                      <span className="text-[11px] text-slate-500">{stat.desc}</span>
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
