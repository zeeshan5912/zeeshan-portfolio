"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Code2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CERTIFICATIONS } from "@/data/portfolioData";

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative">
      {/* 1. Neon Lime Green Banner (Matching Babun Figma Banner) */}
      <div className="bg-[#d4f938] text-[#13382f] py-20 relative overflow-hidden">
        {/* Corner Plus Accents */}
        <div className="absolute top-6 left-8 text-2xl font-mono text-[#13382f]/30 select-none hidden md:block">
          +
        </div>
        <div className="absolute bottom-6 right-8 text-2xl font-mono text-[#13382f]/30 select-none hidden md:block">
          +
        </div>

        <Container size="default">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Center Circular Icon Disc */}
            <div className="w-16 h-16 rounded-full bg-white text-[#13382f] flex items-center justify-center shadow-lg mb-6 transform hover:scale-110 transition-transform">
              <Code2 className="w-8 h-8 text-[#13382f]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight leading-tight mb-3">
              Clean Architecture &amp; Reusable Components in Every Project.
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#13382f]/80 max-w-xl">
              Strict component separation, custom hook abstractions, and maintainable state logic.
            </p>
          </div>
        </Container>
      </div>

      {/* 2. Verified Certifications List */}
      <div className="bg-[#f8faf7] py-20 border-b border-slate-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
              Continuous Learning
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#13382f] tracking-tight">
              Verified Technical Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="rounded-3xl bg-white border-2 border-slate-200/80 p-6 shadow-sm hover:border-[#13382f] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {cert.issuer}
                    </span>
                    <Award className="w-5 h-5 text-[#13382f]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#13382f] mb-3">
                    {cert.title}
                  </h4>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-[11px] font-semibold text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Completion
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
