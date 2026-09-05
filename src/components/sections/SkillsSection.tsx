"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Layout,
  Server,
  Sparkles,
  Zap,
  Wrench,
  CheckCircle2,
  Terminal,
  Cpu,
  Smartphone,
  ShieldCheck,
  Send,
  GitBranch,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

export function SkillsSection() {
  const coreFeatures = [
    { title: "React.js", desc: "Hooks & Modern SPA Architecture", icon: <Layers className="w-6 h-6 text-[#d4f938]" /> },
    { title: "Next.js (SSR)", desc: "Server Components & 100 SEO", icon: <Globe className="w-6 h-6 text-[#d4f938]" /> },
    { title: "JavaScript (ES6+)", desc: "Async/Await & Modern Syntax", icon: <Code2 className="w-6 h-6 text-[#d4f938]" /> },
    { title: "Redux State", desc: "Global Store & Hydration", icon: <Cpu className="w-6 h-6 text-[#d4f938]" /> },
    { title: "Tailwind CSS", desc: "Responsive & Modern Styling", icon: <Layout className="w-6 h-6 text-[#d4f938]" /> },
    { title: "Node.js & Express", desc: "Scalable REST APIs", icon: <Server className="w-6 h-6 text-[#d4f938]" /> },
    { title: "MongoDB Database", desc: "Mongoose & Data Models", icon: <Database className="w-6 h-6 text-[#d4f938]" /> },
    { title: "Mobile Responsive", desc: "100% Adaptive UI Layouts", icon: <Smartphone className="w-6 h-6 text-[#d4f938]" /> },
    { title: "Clean Architecture", desc: "Modular Reusable Code", icon: <ShieldCheck className="w-6 h-6 text-[#d4f938]" /> },
    { title: "Git & Versioning", desc: "Branching & Cloud Deploy", icon: <GitBranch className="w-6 h-6 text-[#d4f938]" /> },
  ];

  const toolsList = [
    "Postman API Testing",
    "Axios Client",
    "Framer Motion",
    "Vercel Deployment",
    "JWT Authentication",
    "Formik / Yup Validation",
    "Context API",
    "Chrome DevTools",
    "Component Optimization",
  ];

  return (
    <section id="skills" className="bg-[#13382f] text-white py-20 sm:py-32 relative overflow-hidden">
      {/* Corner Plus Accents */}
      <div className="absolute top-8 left-8 text-2xl font-mono text-emerald-600/40 select-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-8 right-8 text-2xl font-mono text-emerald-600/40 select-none hidden md:block">
        +
      </div>

      <Container size="default">
        {/* Title (Babun Core Features Header) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          <span className="text-xs font-bold text-[#d4f938] uppercase tracking-widest mb-2 sm:mb-3 block">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Core Features &amp; Capabilities
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-3 max-w-lg mx-auto">
            Full-stack engineering stack built on component-driven principles, fast render cycles, and clean patterns.
          </p>
        </div>

        {/* Babun Dark Green Rounded Pill Grid (Responsive 2 cols on mobile, 3 on tablet, 5 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-6">
          {coreFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#184439]/60 border border-emerald-700/50 hover:border-[#d4f938] hover:bg-[#184439] transition-all duration-300 flex flex-col items-center text-center group cursor-default shadow-sm hover:shadow-xl"
            >
              {/* Icon Container with subtle glow */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-black/25 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-black/40 transition-transform">
                {feat.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xs sm:text-base font-bold text-white mb-1 group-hover:text-[#d4f938] transition-colors leading-tight">
                {feat.title}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-300 leading-tight">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools Pill Cloud */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-emerald-800/60 flex flex-col items-center text-center">
          <span className="text-[11px] uppercase font-bold tracking-widest text-[#d4f938] mb-4">
            Complementary Tooling &amp; Libraries
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
            {toolsList.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-emerald-700/40 text-xs font-medium text-slate-200 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
