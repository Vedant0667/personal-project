"use client";

import React from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
};

export default function Reveal({ children, className, once = true, delay = 0 }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, margin: "0px 0px -10% 0px" });
  const controls = useAnimation();
  const prefersReduced = useReducedMotion();

  React.useEffect(() => {
    if (prefersReduced) {
      controls.set({ opacity: 1, y: 0, scale: 1 });
      return;
    }
    if (inView) controls.start("show");
    else if (!once) controls.start("hidden");
  }, [inView, once, prefersReduced, controls]);

  const variants = {
    hidden: { opacity: 0, y: 48, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 18, delay },
    },
  };

  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
}
