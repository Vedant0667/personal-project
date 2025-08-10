"use client";

import React from "react";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <path d="m22 8-10 6L2 8" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path fill="#0A66C2" d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.44C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.21 0 22.23 0z"/>
    <path fill="#fff" d="M7.06 20.45H3.56V9h3.5v11.45zM5.31 7.52a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zM20.45 20.45h-3.49v-6.25c0-1.49-.53-2.5-1.85-2.5-1.01 0-1.61.68-1.87 1.34-.1.25-.12.6-.12.95v6.46h-3.49s.05-10.48 0-11.45h3.49v1.62c.46-.71 1.28-1.72 3.12-1.72 2.28 0 3.98 1.49 3.98 4.68v6.87z"/>
  </svg>
);

export default function Contact() {
  const email = "vedant.subramanian@gmail.com";
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* no-op */
    }
  };

  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Email button */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 text-white px-5 py-2.5 text-sm shadow hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            <EmailIcon />
            Email me
          </a>

          {/* LinkedIn button */}
          <a
            href="https://www.linkedin.com/in/vedant-subramanian-762715300/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-[#0A66C2] ring-1 ring-[#0A66C2]/30 hover:bg-[#0A66C2]/5 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/30"
            aria-label="View my LinkedIn profile"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        {/* Email address line with copy */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-amber-200 px-3 py-1.5">
          <span className="font-mono-var text-sm text-slate-900">{email}</span>
          <button
            onClick={copy}
            className="text-xs rounded-full px-2 py-1 ring-1 ring-amber-300 text-slate-700 hover:bg-amber-50"
            aria-label="Copy email address"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </motion.div>
    </Section>
  );
}
