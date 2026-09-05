"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "emerald";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      icon,
      iconPosition = "right",
      glow = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none overflow-hidden group";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-105 active:scale-[0.98]",
      secondary:
        "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-sm hover:border-slate-300 active:scale-[0.98]",
      outline:
        "bg-transparent hover:bg-slate-100 text-slate-800 border border-slate-300 hover:border-indigo-400 active:scale-[0.98]",
      ghost:
        "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 active:scale-[0.98]",
      cyan: "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-105 active:scale-[0.98]",
      emerald:
        "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:brightness-105 active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
      icon: "p-2.5 text-base w-10 h-10",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          glow && "shadow-[0_0_20px_rgba(99,102,241,0.3)]",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {/* Subtle shine hover effect */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}

        <span>{children}</span>

        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
