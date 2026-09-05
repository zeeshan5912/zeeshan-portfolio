"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Copy,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { Container } from "@/components/layout/Container";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { triggerConfetti } from "@/lib/confetti";
import { useClipboard } from "@/hooks/useClipboard";
import { Toast } from "@/components/ui/Toast";

export function ContactSection() {
  const { copied, copy } = useClipboard();
  const [toastMsg, setToastMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, label: string) => {
    copy(text);
    setToastMsg(`${label} copied to clipboard!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    triggerConfetti();
    setIsSubmitted(true);
    setToastMsg("Message prepared! Redirecting to email client...");

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Zeshan,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white text-[#13382f] relative">
      <Toast show={copied || isSubmitted} message={toastMsg} />

      <Container size="default">
        {/* Babun Bottom Centered CTA */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-2">
          {/* Logo with Green Dot (Babun Bottom Brand) */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3.5 h-3.5 rounded-full bg-[#13382f] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DFFF5E]" />
            </div>
            <span className="font-bold text-base sm:text-lg text-[#13382f] tracking-tight">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13382f] tracking-tight leading-tight mb-5 sm:mb-6">
            Let&apos;s Build an Exceptional Web Experience Together!
          </h2>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Hi%20Zeshan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20hire%20you!`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerConfetti}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#13382f] text-[#DFFF5E] font-medium text-sm uppercase tracking-wider hover:bg-black transition-all shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Start WhatsApp Chat</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Contact Form & Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-5xl mx-auto">
          {/* Direct Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Direct Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCopy(PERSONAL_INFO.email, "Email")}
              className="p-4 sm:p-5 rounded-3xl bg-slate-50 border-2 border-slate-200/80 hover:border-[#13382f] transition-all cursor-pointer flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-200 shrink-0 flex items-center justify-center text-[#13382f] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#13382f] truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <Copy className="w-4 h-4 text-slate-400 group-hover:text-[#13382f] shrink-0 transition-colors ml-2" />
            </motion.div>

            {/* Direct Phone */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCopy(PERSONAL_INFO.phone, "Phone")}
              className="p-4 sm:p-5 rounded-3xl bg-slate-50 border-2 border-slate-200/80 hover:border-[#13382f] transition-all cursor-pointer flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-slate-200 shrink-0 flex items-center justify-center text-[#13382f] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#13382f] truncate block">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>
              <Copy className="w-4 h-4 text-slate-400 group-hover:text-[#13382f] shrink-0 transition-colors ml-2" />
            </motion.div>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 border-2 border-slate-200/80 hover:border-[#13382f] transition-all cursor-pointer flex items-center justify-between group shadow-sm">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 shrink-0 flex items-center justify-center text-[#13382f] group-hover:scale-110 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                      LinkedIn Network
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#13382f] truncate block">
                      ch-zeeshan-akram
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#13382f] group-hover:translate-x-1 shrink-0 transition-transform ml-2" />
              </div>
            </motion.a>

            {/* Location Tag */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-emerald-800 shrink-0" />
              <div className="text-xs text-emerald-900 font-normal">
                <span className="font-medium block">Lahore, Pakistan</span>
                Available for local on-site, hybrid, and worldwide remote roles.
              </div>
            </div>
          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 border-2 border-slate-200/80 p-5 sm:p-8 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-[#13382f] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 font-normal">
                Leave a message and I&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#13382f] text-sm sm:text-base transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#13382f] text-sm sm:text-base transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Hiring Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#13382f] text-sm sm:text-base transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#13382f] text-sm sm:text-base transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#13382f] text-[#DFFF5E] font-medium text-sm uppercase tracking-wider hover:bg-black transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Submit Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
