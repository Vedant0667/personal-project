"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5 pt-16 pb-16 sm:pt-24 sm:pb-20 text-center">
        <div className="relative">
          {/* Floating background elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -top-5 -right-16 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"
            animate={{
              y: [10, -10, 10],
              x: [5, -5, 5],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-20 -left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 blur-lg"
            animate={{
              y: [5, -15, 5],
              x: [-3, 7, -3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100, damping: 15 }}
          >
            {/* Headshot */}
            <motion.div 
              className="mx-auto mb-4 relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-4 ring-amber-200 shadow-2xl"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/headshot-vedant.jpeg"
                alt="Vedant Subramanian headshot"
                fill
                className="object-cover"
                sizes="128px"
                priority
              />
            </motion.div>

            {/* Subtext pill */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="mx-auto mb-4 inline-flex items-center rounded-full border border-amber-200 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-1.5 text-sm text-orange-900 font-mono-var shadow-lg backdrop-blur-sm"
            >
              student @ Greenhill School
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4, type: "spring", stiffness: 80 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent"
            >
              Vedant Subramanian
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              className="mt-4 text-lg text-slate-600 max-w-lg mx-auto"
            >
              Creating innovative solutions and meaningful digital experiences
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="mt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)",
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center rounded-full border border-orange-300 bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 text-sm font-medium text-white shadow-xl hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
              >
                Explore my work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}