"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeText: string;
  badgeVariant?: "primary" | "secondary" | "success" | "accent" | "cyan" | "purple";
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeVariant = "cyan",
  title,
  highlightedText,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex flex-col mb-14 md:mb-20",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      <Badge variant={badgeVariant} className="mb-4">
        {badgeText}
      </Badge>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
        {title}{" "}
        {highlightedText && (
          <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 bg-clip-text text-transparent">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      <div
        className={cn(
          "h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 mt-6",
          isCenter && "mx-auto"
        )}
      />
    </motion.div>
  );
}
