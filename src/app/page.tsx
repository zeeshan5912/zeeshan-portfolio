import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-[#13382f] overflow-x-hidden selection:bg-[#DFFF5E] selection:text-[#13382f]">
      {/* Navigation Header */}
      <Navbar />

      {/* Sections flowing in the Babun layout */}
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
