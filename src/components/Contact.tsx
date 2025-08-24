"use client";

import React from "react";
import Section from "@/components/Section";
import { MBox, MLink, MP } from "@/components/motion/Motion";

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

// Hoist variants to avoid inline objects
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring" as const,
      stiffness: 120,
      damping: 15,
      duration: 0.6
    },
  },
};

const emailHoverVariants = { 
  scale: 1.05, 
  boxShadow: "0 10px 25px -5px rgb(251 146 60 / 0.4), 0 4px 6px -2px rgb(251 146 60 / 0.05)"
};

const linkedinHoverVariants = { 
  scale: 1.05,
  boxShadow: "0 10px 25px -5px rgb(10 102 194 / 0.3), 0 4px 6px -2px rgb(10 102 194 / 0.05)"
};

const buttonTapVariants = { scale: 0.95 };

export default function Contact() {
  const email = "vedant.subramanian@gmail.com";
  const [copied, setCopied] = React.useState(false);

  const copy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* no-op */
    }
  }, [email]);

  return (
    <Section id="contact" title="Contact">
      <MBox
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl"
      >
        <MBox 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          {/* Email button */}
          <MLink
            href={`mailto:${email}`}
            whileHover={emailHoverVariants}
            whileTap={buttonTapVariants}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
          >
            <EmailIcon />
            Email me
          </MLink>

          {/* LinkedIn button */}
          <MLink
            href="https://www.linkedin.com/in/vedant-subramanian-762715300/"
            target="_blank"
            rel="noreferrer"
            whileHover={linkedinHoverVariants}
            whileTap={buttonTapVariants}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0A66C2] ring-2 ring-[#0A66C2]/20 hover:bg-[#0A66C2]/5 hover:ring-[#0A66C2]/40 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/30 transition-all duration-200 shadow-md hover:shadow-lg"
            aria-label="View my LinkedIn profile"
          >
            <LinkedInIcon />
            LinkedIn
          </MLink>
        </MBox>

        {/* Email address line with copy */}
        <MBox 
          variants={itemVariants}
          className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 ring-1 ring-amber-200/60 px-4 py-3 shadow-sm"
        >
          <span className="font-mono-var text-sm text-slate-800 font-medium">{email}</span>
          <MBox
            onClick={copy}
            whileHover={{ scale: 1.05 }}
            whileTap={buttonTapVariants}
            className={`text-xs rounded-full px-3 py-1.5 font-medium ring-1 transition-all duration-200 cursor-pointer ${
              copied 
                ? "bg-green-100 ring-green-300 text-green-800" 
                : "bg-white ring-amber-300 text-amber-800 hover:bg-amber-50 hover:ring-amber-400 shadow-sm hover:shadow-md"
            }`}
            aria-label="Copy email address"
            role="button"
            tabIndex={0}
          >
            {copied ? "Copied!" : "Copy"}
          </MBox>
        </MBox>

        <MP
          variants={itemVariants}
          className="mt-4 text-sm text-slate-600 leading-relaxed"
        >
          Let&apos;s connect! I&apos;m always excited to discuss new opportunities, collaborate on projects, or just chat about technology and entrepreneurship.
        </MP>
      </MBox>
    </Section>
  );
}