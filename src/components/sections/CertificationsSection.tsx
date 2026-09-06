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
  Copy,
  Check,
  FileCheck2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { CertificationItem } from "@/types";
import { useClipboard } from "@/hooks/useClipboard";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [zoomLevel, setZoomLevel] = useState<boolean>(false);
  const { copied, copy } = useClipboard(2000);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const closeModal = () => {
    setSelectedCert(null);
    setZoomLevel(false);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
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

  const handleCopy = (id: string, textToCopy: string) => {
    copy(textToCopy);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Filter options
  const filterOptions = ["All", "React.js", "Responsive Design", "CSS & Styling"];

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "React.js") return cert.skills.some((s) => s.toLowerCase().includes("react"));
    if (activeFilter === "Responsive Design")
      return cert.skills.some((s) => s.toLowerCase().includes("responsive") || s.toLowerCase().includes("accessibility"));
    if (activeFilter === "CSS & Styling")
      return cert.skills.some((s) => s.toLowerCase().includes("css") || s.toLowerCase().includes("styling"));
    return true;
  });

  return (
    <section id="certifications" className="relative scroll-mt-28 sm:scroll-mt-36">
      {/* 1. Neon Lime Green Banner (Babun Figma Clean Code Banner) */}
      <div className="bg-[#DFFF5E] text-[#13382f] py-20 relative overflow-hidden border-b border-black/5">
        {/* Decorative corner crosshairs */}
        <div className="absolute top-6 left-8 text-2xl font-mono text-[#13382f]/25 select-none hidden md:block">
          +
        </div>
        <div className="absolute bottom-6 right-8 text-2xl font-mono text-[#13382f]/25 select-none hidden md:block">
          +
        </div>

        <Container size="default">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Center Circular Disc */}
            <div className="w-16 h-16 rounded-full bg-white text-[#13382f] flex items-center justify-center shadow-lg mb-6 transform hover:scale-110 transition-transform">
              <Code2 className="w-8 h-8 text-[#13382f]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight leading-tight mb-3">
              Clean Architecture &amp;{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Reusable Components</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-white/70 -z-0 rounded-sm" />
              </span>{" "}
              in Every Project.
            </h2>
            <p className="text-sm sm:text-base font-normal text-[#13382f]/80 max-w-xl">
              Strict component separation, custom hook abstractions, and maintainable state logic.
            </p>
          </div>
        </Container>
      </div>

      {/* 2. Enhanced Verified Technical Certifications Section */}
      <div className="bg-[#f8faf7] py-20 sm:py-28 relative overflow-hidden border-b border-slate-200/80">
        {/* Subtle Background Radial Highlights & Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#13382f_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DFFF5E]/20 rounded-full blur-3xl pointer-events-none -z-0" />

        <Container size="default">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 relative z-10">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 sm:mb-3 block">
              Verified Qualifications
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight leading-tight mb-4">
              Verified Technical{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Certifications</span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#DFFF5E] -z-0 opacity-80 rounded-sm" />
              </span>
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-normal">
              Official accreditations validating real-world competencies in modern React.js architecture, responsive layout engineering, and accessible web systems.
            </p>

            {/* Quick Metrics Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] sm:text-xs font-medium text-slate-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#13382f]" />
                <span>4 Official Credentials</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] sm:text-xs font-medium text-slate-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>100% Online Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/90 text-[11px] sm:text-xs font-medium text-slate-700 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>React &amp; Web Standards</span>
              </div>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm ${
                    activeFilter === filter
                      ? "bg-[#13382f] text-[#DFFF5E] shadow-md scale-105"
                      : "bg-white text-slate-600 hover:text-[#13382f] hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Symmetrical 2-Column Luxury Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#13382f] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl flex flex-col justify-between relative"
                >
                  {/* Top Mac-style Certificate Frame Header */}
                  <div className="px-4 py-2.5 bg-slate-100/90 border-b border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="text-[10px] font-mono font-medium text-slate-500 ml-2 tracking-wide uppercase">
                        {cert.issuer}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Certificate Image Frame */}
                  {cert.image && (
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="relative aspect-[16/10] bg-slate-900/5 overflow-hidden cursor-pointer border-b border-slate-200/90 group/img"
                    >
                      {/* Image */}
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Frosted Hover Inspection Layer */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13382f]/90 via-[#13382f]/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="px-5 py-2.5 rounded-full bg-[#DFFF5E] text-[#13382f] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl transform translate-y-3 group-hover/img:translate-y-0 transition-transform duration-300">
                          <Eye className="w-4 h-4" />
                          <span>Inspect Full Certificate</span>
                        </div>
                      </div>

                      {/* Glowing Corner Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-md text-[#13382f] shadow-md border border-slate-200/90 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-emerald-700" />
                          <span>{cert.issuer}</span>
                        </span>
                      </div>

                      {/* Quick Expand Icon button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(cert);
                        }}
                        aria-label="Expand certificate"
                        className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors shadow-sm"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Card Body Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                    <div>
                      {/* Meta Info Row (Date & Credential ID with Copy) */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-2.5 font-normal">
                        {cert.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{cert.date}</span>
                          </span>
                        )}

                        {cert.credentialId && (
                          <button
                            type="button"
                            onClick={() => handleCopy(cert.id, cert.credentialId!)}
                            className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded border border-slate-200 transition-colors cursor-pointer"
                            title="Click to copy Credential ID"
                          >
                            <span>ID: {cert.credentialId.slice(0, 10)}...</span>
                            {copiedId === cert.id ? (
                              <Check className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Copy className="w-3 h-3 text-slate-400" />
                            )}
                          </button>
                        )}
                      </div>

                      {/* Certificate Title */}
                      <h4 className="text-lg sm:text-xl font-semibold text-[#13382f] tracking-tight leading-snug group-hover:text-emerald-800 transition-colors">
                        {cert.title}
                      </h4>

                      {/* Skills Covered Pills */}
                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-normal text-slate-600 bg-slate-50 hover:bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#13382f] text-slate-700 hover:text-[#DFFF5E] text-xs font-medium transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Certificate</span>
                      </button>

                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-950 transition-colors py-1"
                        >
                          <FileCheck2 className="w-3.5 h-3.5" />
                          <span>Online Credential</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-normal text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Certified</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </div>

      {/* Ultra-Premium Lightbox Modal for High-Resolution Certificate Viewing */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Frosted Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] border border-white/20"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between gap-3 bg-slate-50/90">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#13382f] text-[#DFFF5E] shrink-0">
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
                    onClick={closeModal}
                    className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Certificate Image Frame with Zoom Support */}
              <div
                onClick={() => setZoomLevel(!zoomLevel)}
                className="p-3 sm:p-6 overflow-auto max-h-[70vh] flex items-center justify-center bg-[#0d221c]/5 cursor-zoom-in"
                title="Click image to toggle zoom"
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className={`max-w-full h-auto object-contain rounded-xl shadow-xl border border-slate-300/80 transition-transform duration-300 ${
                    zoomLevel ? "scale-125 cursor-zoom-out" : "max-h-[65vh] scale-100"
                  }`}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  {selectedCert.date && (
                    <span className="font-semibold text-slate-700">Issued: {selectedCert.date}</span>
                  )}
                  {selectedCert.credentialId && (
                    <button
                      type="button"
                      onClick={() => handleCopy(selectedCert.id, selectedCert.credentialId!)}
                      className="inline-flex items-center gap-1 font-mono text-[11px] bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md border border-slate-200 transition-colors cursor-pointer"
                    >
                      <span>ID: {selectedCert.credentialId}</span>
                      {copiedId === selectedCert.id ? (
                        <span className="text-emerald-600 font-bold text-[10px]">Copied!</span>
                      ) : (
                        <Copy className="w-3 h-3 text-slate-400" />
                      )}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setZoomLevel(!zoomLevel)}
                    className="px-3.5 py-2 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    {zoomLevel ? "Zoom Out" : "Zoom In"}
                  </button>

                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-2 rounded-full bg-[#13382f] text-[#DFFF5E] font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>Full Resolution</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
