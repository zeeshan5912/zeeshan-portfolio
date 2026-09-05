"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "accent" | "outline" | "cyan" | "purple";
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Badge({
  children,
  className,
  variant = "primary",
  pulse = false,
  size = "md",
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm",
    secondary: "bg-slate-100 text-slate-700 border-slate-200 shadow-sm",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm",
    accent: "bg-amber-50 text-amber-800 border-amber-200 shadow-sm",
    cyan: "bg-sky-50 text-sky-700 border-sky-200 shadow-sm",
    purple: "bg-purple-50 text-purple-700 border-purple-200 shadow-sm",
    outline: "bg-transparent text-slate-700 border-slate-300 hover:border-slate-500",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1.5 font-medium",
    md: "text-xs md:text-sm px-3 py-1 gap-2 font-medium",
    lg: "text-sm px-4 py-1.5 gap-2.5 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border backdrop-blur-md transition-all duration-300",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
}
