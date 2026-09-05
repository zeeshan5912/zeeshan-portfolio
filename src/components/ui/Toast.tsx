"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  show: boolean;
  message: string;
  type?: "success" | "info" | "error";
  onClose?: () => void;
}

export function Toast({ show, message, type = "success" }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className={cn(
            "fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border border-slate-200 bg-white/95 text-slate-900"
          )}
        >
          {type === "success" ? (
            <div className="p-1 rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ) : (
            <div className="p-1 rounded-full bg-indigo-50 text-indigo-600">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {type === "success" ? "Notification" : "Notice"}
            </span>
            <span className="text-sm font-medium text-slate-800">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
