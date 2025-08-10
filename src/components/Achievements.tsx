"use client";

import React from "react";
import Section from "@/components/Section";
import { achievements } from "@/data/Achievements";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.6
    },
  },
};

const line = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    } 
  },
};

const colorSchemes = [
  { bg: "#FFFDF2", text: "#1f2937", accent: "rgba(251, 146, 60, 0.1)", border: "#f59e0b" },
  { bg: "#FEF7F0", text: "#1f2937", accent: "rgba(236, 72, 153, 0.08)", border: "#ec4899" },
  { bg: "#F0F9FF", text: "#1f2937", accent: "rgba(59, 130, 246, 0.08)", border: "#3b82f6" },
  { bg: "#F0FDF4", text: "#1f2937", accent: "rgba(34, 197, 94, 0.08)", border: "#22c55e" },
];

export default function Achievements() {
  return (
    <Section id="achievements" title="Recognition">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center"
      >
        {achievements.map((a, index) => {
          const colorScheme = colorSchemes[index % colorSchemes.length];
          return (
            <motion.li
              key={a.title}
              variants={card}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ring-1"
              style={{ 
                backgroundColor: colorScheme.bg,
                borderColor: colorScheme.border + "30",
                transform: "perspective(1000px)"
              }}
            >
              <div className="p-6 relative h-full flex flex-col">
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-20"
                  style={{ background: colorScheme.accent, transform: 'translate(25%, -25%)' }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-10"
                  style={{ background: colorScheme.accent, transform: 'translate(-25%, 25%)' }}
                />
                
                <motion.span
                  variants={line}
                  className="font-mono-var inline-flex items-center rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wide font-medium mb-3 w-fit"
                  style={{ 
                    backgroundColor: colorScheme.accent,
                    color: colorScheme.border,
                    border: `1px solid ${colorScheme.border}30`
                  }}
                >
                  {a.kicker}
                </motion.span>

                <motion.div 
                  variants={line} 
                  className="font-display text-xl font-bold leading-tight text-slate-900"
                >
                  {a.title}
                </motion.div>

                {a.detail && (
                  <motion.p 
                    variants={line} 
                    className="mt-2 text-sm leading-relaxed text-slate-600"
                  >
                    {a.detail}
                  </motion.p>
                )}

                <div className="flex-grow" />
                {a.link && (
                  <motion.a
                    variants={line}
                    href={a.link.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center rounded-full px-2 py-1 text-[8px] font-medium uppercase tracking-wide self-start mt-4"
                    style={{
                      backgroundColor: colorScheme.accent,
                      color: colorScheme.border,
                      border: `1px solid ${colorScheme.border}30`
                    }}
                  >
                    source
                  </motion.a>
                )}
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
    </Section>
  );
}