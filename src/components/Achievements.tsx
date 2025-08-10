"use client";

import React from "react";
import Section from "@/components/Section";
import { achievements } from "@/data/Achievements";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 48, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const line = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Achievements() {
  return (
    <Section id="achievements" title="Highlights">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {achievements.map((a) => (
          <motion.li
            key={a.title}
            variants={card}
            className="rounded-2xl ring-1 ring-amber-200 shadow-sm transition hover:shadow-md hover:ring-2"
            style={{ backgroundColor: "#FFFDF2" }}
          >
            <div className="p-4">
              <motion.span
                variants={line}
                className="font-mono-var inline-flex items-center rounded-full px-2 py-0.5 text-[11px] uppercase tracking-wide ring-1 bg-amber-100 text-amber-900 ring-amber-200"
              >
                {a.kicker}
              </motion.span>

              <motion.div variants={line} className="font-display mt-2 text-[18px] font-semibold text-slate-900">
                {a.title}
              </motion.div>

              {a.detail && (
                <motion.p variants={line} className="mt-1 text-sm leading-relaxed text-slate-700">
                  {a.detail}
                </motion.p>
              )}

              {a.link && (
                <motion.a
                  variants={line}
                  href={a.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center rounded-full px-3 py-1.5 text-sm text-orange-800 ring-1 ring-orange-200 hover:bg-orange-50"
                >
                  {a.link.label}
                </motion.a>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
