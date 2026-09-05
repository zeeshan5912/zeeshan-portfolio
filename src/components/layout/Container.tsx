import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  const sizeStyles = {
    default: "max-w-7xl",
    narrow: "max-w-5xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
