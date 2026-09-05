"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Code2,
  ExternalLink,
  Eye,
  X,
  Maximize2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { CertificationItem } from "@/types";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="relative">
      {/* 1. Neon Lime Green Banner (Matching Babun Figma Banner) */}
      <div className="bg-[#DFFF5E] text-[#13382f] py-20 relative overflow-hidden">
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

      {/* 2. Verified Certifications List with Images */}
      <div className="bg-[#f8faf7] py-20 sm:py-28 border-b border-slate-200/80">
        <Container size="default">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">
              Continuous Learning &amp; Credentials
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight">
              Verified Technical Certifications
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 max-w-lg mx-auto">
              Industry-standard certifications validating expertise in React.js, Responsive Web Design, Accessibility, and Modern CSS.
            </p>
          </div>

          {/* 2x2 Grid of Certificate Cards with Visual Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-3xl bg-white border-2 border-slate-200/80 hover:border-[#13382f] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                {/* Certificate Image Frame */}
                {cert.image && (
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer border-b border-slate-200/80"
                  >
                    {/* Image */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient & Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13382f]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-white/95 text-[#13382f] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>

                    {/* Top Issuer Badge over image */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#13382f] shadow-sm border border-slate-200/80 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{cert.issuer}</span>
                      </span>
                    </div>

                    {/* Quick Expand Icon */}
                    <button
                      type="button"
                      aria-label="Expand certificate"
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2 font-medium">
                      {cert.date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{cert.date}</span>
                        </span>
                      )}
                      {cert.credentialId && (
                        <span className="font-mono text-[11px] text-slate-400 truncate max-w-[180px]">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#13382f] tracking-tight leading-snug group-hover:text-emerald-800 transition-colors">
                      {cert.title}
                    </h4>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-semibold text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#13382f] hover:text-emerald-700 transition-colors cursor-pointer py-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Image</span>
                    </button>

                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verify Online</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* Lightbox / Modal for High-Resolution Certificate Viewing */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50/80">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#13382f] text-[#DFFF5E]">
                    {selectedCert.issuer}
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#13382f] truncate">
                    {selectedCert.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {selectedCert.link && (
                    <a
                      href={selectedCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Certificate Full Image Display */}
              <div className="p-3 sm:p-6 overflow-auto max-h-[70vh] flex items-center justify-center bg-[#0d221c]/5">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[65vh] w-auto h-auto object-contain rounded-xl shadow-lg border border-slate-300/80"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  {selectedCert.date && (
                    <span className="font-medium">Issued: {selectedCert.date}</span>
                  )}
                  {selectedCert.credentialId && (
                    <span className="font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      ID: {selectedCert.credentialId}
                    </span>
                  )}
                </div>

                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#13382f] text-[#DFFF5E] font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
