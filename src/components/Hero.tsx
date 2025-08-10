"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative mx-auto max-w-3xl px-5 pt-16 pb-16 sm:pt-24 sm:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Headshot */}
          <div className="mx-auto mb-4 relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-1 ring-amber-200 shadow">
            <Image
              src="/headshot-vedant.jpeg"
              alt="Vedant Subramanian headshot"
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>

          {/* Subtext pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-100/70 px-4 py-1.5 text-sm text-orange-900 font-mono-var"
          >
            student @ Greenhill School
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Vedant Subramanian
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.28 }}
            className="mt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-orange-300 bg-orange-600 px-5 py-2.5 text-sm text-white shadow hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200"
            >
              Explore my work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
