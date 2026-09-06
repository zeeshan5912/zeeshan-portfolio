"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Size variant */
  size?: "sm" | "md" | "lg" | "xl";
  /** Visual presentation mode */
  variant?: "full" | "compact" | "mark";
  /** Adaptive theme styling */
  theme?: "on-lime" | "scrolled" | "dark" | "auto";
  /** Whether the parent navbar is scrolled */
  isScrolled?: boolean;
  /** Optional click handler (defaults to smooth scroll #hero) */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Optional custom class */
  className?: string;
  /** Show live availability indicator dot */
  showLivePulse?: boolean;
}

export function LogoMark({
  size = "md",
  theme = "scrolled",
  className,
}: {
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "on-lime" | "scrolled" | "dark" | "auto";
  className?: string;
}) {
  const sizeMap = {
    sm: "w-7 h-7",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "relative rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 select-none",
        sizeMap[size],
        isDark
          ? "shadow-[0_0_15px_rgba(223,255,94,0.25)]"
          : "shadow-sm group-hover:shadow-[0_0_14px_rgba(19,56,47,0.2)]",
        className
      )}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
        aria-hidden="true"
      >
        <defs>
          {/* Neon Lime Theme Gradient */}
          <linearGradient id="cyberLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBFFBD" />
            <stop offset="45%" stopColor="#DFFF5E" />
            <stop offset="100%" stopColor="#B3E619" />
          </linearGradient>

          {/* Deep Dark Emerald Badge Gradient */}
          <linearGradient id="cyberDarkBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#164338" />
            <stop offset="50%" stopColor="#13382F" />
            <stop offset="100%" stopColor="#0B231D" />
          </linearGradient>

          {/* Glowing Border Stroke */}
          <linearGradient id="cyberBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFFF5E" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#256B59" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#DFFF5E" stopOpacity="0.3" />
          </linearGradient>

          {/* Radial Ambient Glow */}
          <radialGradient id="cyberGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DFFF5E" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#DFFF5E" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#DFFF5E" stopOpacity="0" />
          </radialGradient>

          {/* Soft Filter Glow */}
          <filter id="neonBloom" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Squircle Badge Container */}
        <rect
          x="1.5"
          y="1.5"
          width="45"
          height="45"
          rx="12"
          fill="url(#cyberDarkBg)"
          stroke="url(#cyberBorder)"
          strokeWidth="1.5"
        />

        {/* Ambient Lime Aura Inside Badge */}
        <circle cx="24" cy="24" r="15" fill="url(#cyberGlow)" />

        {/* Subtle Tech Circuit Etch Accent */}
        <path
          d="M 6 18 H 10 M 38 30 H 42 M 18 6 V 10 M 30 38 V 42"
          stroke="#DFFF5E"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />

        {/* --- BESPOKE GEOMETRIC Z MONOGRAM --- */}
        {/* Upper Wing Blade (Forward Angled Arrow) */}
        <path
          d="M 12 13 H 35.5 C 36.3 13 36.8 13.9 36.3 14.6 L 31.8 20.2 H 21.5 L 16.5 16.5 L 12 13 Z"
          fill="url(#cyberLimeGrad)"
          filter="url(#neonBloom)"
        />

        {/* Central Dynamic Energy Diagonal Slash */}
        <path
          d="M 32.5 17.5 L 16 31.5 H 20.5 L 36 17.5 H 32.5 Z"
          fill="#FBFFBD"
          opacity="0.95"
        />

        {/* Lower Wing Blade (Reverse Angled Arrow) */}
        <path
          d="M 36 35 H 12.5 C 11.7 35 11.2 34.1 11.7 33.4 L 16.2 27.8 H 26.5 L 31.5 31.5 L 36 35 Z"
          fill="url(#cyberLimeGrad)"
          filter="url(#neonBloom)"
        />

        {/* Accent Spark Node (.dev beacon) */}
        <circle
          cx="37"
          cy="11.5"
          r="2"
          fill="#DFFF5E"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
}

export function Logo({
  size = "md",
  variant = "full",
  theme = "auto",
  isScrolled = false,
  onClick,
  className,
  showLivePulse = true,
}: LogoProps) {
  // Resolve active theme based on scroll state if set to 'auto'
  const currentTheme =
    theme === "auto" ? (isScrolled ? "scrolled" : "on-lime") : theme;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }
    e.preventDefault();
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const textStyles = {
    "on-lime": {
      name: "text-[#13382f]",
      devBg: "bg-[#13382f]",
      devText: "text-[#DFFF5E]",
      devBorder: "border-[#13382f]",
      pulseColor: "bg-[#13382f]",
    },
    scrolled: {
      name: "text-[#13382f]",
      devBg: "bg-[#13382f]/10 hover:bg-[#13382f]/15",
      devText: "text-[#13382f]",
      devBorder: "border-[#13382f]/20",
      pulseColor: "bg-[#13382f]",
    },
    dark: {
      name: "text-white",
      devBg: "bg-[#DFFF5E]",
      devText: "text-[#13382f]",
      devBorder: "border-[#DFFF5E]",
      pulseColor: "bg-[#DFFF5E]",
    },
  }[currentTheme];

  return (
    <a
      href="#hero"
      onClick={handleLogoClick}
      aria-label="Zeshan Akram - Portfolio Home"
      className={cn(
        "group flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#13382f] rounded-2xl p-1 -m-1",
        className
      )}
    >
      {/* Brand Icon Mark */}
      <motion.div
        whileHover={{ scale: 1.06, rotate: -2 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <LogoMark size={size} theme={currentTheme} />
      </motion.div>

      {/* Logotype (Name + .dev Badge) */}
      {variant !== "mark" && (
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span
            className={cn(
              "font-extrabold tracking-tight transition-colors duration-200 font-sans",
              size === "sm" && "text-base sm:text-lg",
              size === "md" && "text-lg sm:text-xl md:text-2xl",
              size === "lg" && "text-2xl sm:text-3xl",
              size === "xl" && "text-3xl sm:text-4xl",
              textStyles.name
            )}
          >
            Zeshan
          </span>

          {variant === "full" && (
            <span
              className={cn(
                "inline-flex items-center gap-1 font-mono font-bold uppercase tracking-wider rounded-md border transition-all duration-200",
                size === "sm" && "text-[9px] px-1.5 py-0.5",
                size === "md" && "text-[10px] sm:text-xs px-2 py-0.5",
                size === "lg" && "text-xs sm:text-sm px-2.5 py-1",
                size === "xl" && "text-sm px-3 py-1",
                textStyles.devBg,
                textStyles.devText,
                textStyles.devBorder
              )}
            >
              <span>.dev</span>
              {showLivePulse && (
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full animate-pulse inline-block",
                    currentTheme === "dark" ? "bg-[#13382f]" : "bg-[#DFFF5E]"
                  )}
                />
              )}
            </span>
          )}
        </div>
      )}
    </a>
  );
}
