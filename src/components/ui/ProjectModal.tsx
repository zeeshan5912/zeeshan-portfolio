"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { ProjectItem } from "@/types";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#13382f]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-3xl rounded-3xl bg-white border-2 border-slate-200 shadow-2xl overflow-hidden my-4 sm:my-8 z-10"
          >
            {/* Gradient Top Banner */}
            <div className={`h-36 sm:h-44 w-full bg-gradient-to-r ${project.gradient} relative p-5 sm:p-6 flex flex-col justify-end overflow-hidden`}>
              <div className="absolute inset-0 bg-black/15" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 transition-all shadow-md cursor-pointer flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-[#13382f] text-[#DFFF5E] text-[10px] font-extrabold uppercase tracking-wider mb-2 inline-block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 max-h-[65vh] sm:max-h-[70vh] overflow-y-auto custom-scrollbar">
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#13382f] mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#13382f]" /> Overview &amp; Purpose
                </h4>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                  {project.longDescription}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {project.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1"
                  >
                    <span className="text-[10px] font-bold text-[#13382f] uppercase">Feature 0{idx + 1}</span>
                    <span className="text-xs font-semibold text-slate-800">{h}</span>
                  </div>
                ))}
              </div>

              {/* Full Features Breakdown */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#13382f] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" /> Architectural Features &amp; Deliverables
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#13382f] mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#13382f] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-700" /> Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-[#13382f] border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-end">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto px-5 py-2.5 rounded-full border-2 border-[#13382f] text-[#13382f] hover:bg-[#13382f] hover:text-[#DFFF5E] transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer">
                      <GitHubIcon className="w-4 h-4" />
                      <span>View Code</span>
                    </button>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#13382f] text-[#DFFF5E] hover:bg-black transition-all font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer">
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
