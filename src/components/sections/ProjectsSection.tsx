"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, CheckCircle2, Layers, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { Container } from "@/components/layout/Container";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectCategory, ProjectItem } from "@/types";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { cn } from "@/lib/utils";

const CATEGORIES: ProjectCategory[] = ["All", "Next.js", "React.js", "Full Stack", "UI & Admin"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === "All") return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 sm:py-32 bg-white text-[#13382f] relative scroll-mt-28 sm:scroll-mt-36">
      <Container size="default">
        {/* Section Header (Babun Demo Header) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 sm:mb-3 block">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13382f] tracking-tight leading-tight mb-4">
            06+ Production-Ready &amp;{" "}
            <span className="relative inline-block">
              <span className="relative z-10">High-Performance Projects</span>
              <span className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#DFFF5E] -z-0 opacity-80 rounded-sm" />
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Real-world MERN stack applications, responsive Next.js landing pages, and intuitive administrative control panels.
          </p>

          {/* Horizontally Scrollable Category Filter Pills on Mobile */}
          <div className="w-full max-w-full overflow-x-auto py-2 px-1 mt-6 flex sm:flex-wrap items-center sm:justify-center gap-2 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer uppercase tracking-wider whitespace-nowrap shrink-0",
                    isSelected
                      ? "bg-[#13382f] text-[#DFFF5E] shadow-md scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-black"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid (Babun 3-Column Showcase) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col"
              >
                {/* Mockup Card Container */}
                <div className="rounded-3xl bg-slate-50 border-2 border-slate-200/80 p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:border-[#13382f] transition-all duration-300 flex flex-col justify-between h-full">
                  {/* Browser Bar Mock */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-rose-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 font-normal uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Thumbnail / Visual Graphic Banner */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className={`h-48 sm:h-52 rounded-2xl bg-gradient-to-br ${project.gradient} p-5 text-white flex flex-col justify-between relative overflow-hidden cursor-pointer group-hover:brightness-105 transition-all`}
                  >
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="relative z-10 flex justify-between items-start">
                      <span className="px-2.5 py-1 rounded-full bg-[#13382f] text-[#DFFF5E] text-[10px] font-medium uppercase tracking-wide shadow-xs">
                        0{idx + 1} Demo
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Eye className="w-4 h-4 text-white" />
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-1.5">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/85 line-clamp-2 font-normal">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="py-3 px-1 space-y-1">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Meta & Actions */}
                  <div className="pt-3 px-1 border-t border-slate-200/80 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] sm:text-[11px] font-normal text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white hover:bg-[#13382f] text-slate-700 hover:text-[#DFFF5E] border border-slate-200 transition-colors"
                          aria-label="GitHub Code"
                          title="View Code"
                        >
                          <GitHubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="px-3 py-1.5 rounded-xl bg-[#13382f] text-[#DFFF5E] hover:bg-black transition-colors font-medium text-xs uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
