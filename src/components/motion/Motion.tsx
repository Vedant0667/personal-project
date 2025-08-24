"use client";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { forwardRef } from "react";

// Hook to safely handle reduced motion preference
export function useReducedMotionSafe() {
  const shouldReduceMotion = useReducedMotion();
  return shouldReduceMotion ?? false;
}

// Create proper types for each component
type DivMotionProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;
type SpanMotionProps = MotionProps & React.HTMLAttributes<HTMLSpanElement>;
type AnchorMotionProps = MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ArticleMotionProps = MotionProps & React.HTMLAttributes<HTMLElement>;
type H1MotionProps = MotionProps & React.HTMLAttributes<HTMLHeadingElement>;
type PMotionProps = MotionProps & React.HTMLAttributes<HTMLParagraphElement>;
type NavMotionProps = MotionProps & React.HTMLAttributes<HTMLElement>;
type LiMotionProps = MotionProps & React.HTMLAttributes<HTMLLIElement>;
type UlMotionProps = MotionProps & React.HTMLAttributes<HTMLUListElement>;
type SectionMotionProps = MotionProps & React.HTMLAttributes<HTMLElement>;

// Motion.div wrapper
export const MBox = forwardRef<HTMLDivElement, DivMotionProps>(
  function MBox(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      // Render static div with final styles when motion is reduced
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <div ref={ref} {...staticProps} />;
    }
    
    return <motion.div ref={ref} {...props} />;
  }
);

// Motion.section wrapper
export const MSection = forwardRef<HTMLElement, SectionMotionProps>(
  function MSection(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <section ref={ref} {...staticProps} />;
    }
    
    return <motion.section ref={ref} {...props} />;
  }
);

// Motion.span wrapper
export const MSpan = forwardRef<HTMLSpanElement, SpanMotionProps>(
  function MSpan(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <span ref={ref} {...staticProps} />;
    }
    
    return <motion.span ref={ref} {...props} />;
  }
);

// Motion.a wrapper
export const MLink = forwardRef<HTMLAnchorElement, AnchorMotionProps>(
  function MLink(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <a ref={ref} {...staticProps} />;
    }
    
    return <motion.a ref={ref} {...props} />;
  }
);

// Motion.article wrapper
export const MArticle = forwardRef<HTMLElement, ArticleMotionProps>(
  function MArticle(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <article ref={ref} {...staticProps} />;
    }
    
    return <motion.article ref={ref} {...props} />;
  }
);

// Motion.h1 wrapper
export const MH1 = forwardRef<HTMLHeadingElement, H1MotionProps>(
  function MH1(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <h1 ref={ref} {...staticProps} />;
    }
    
    return <motion.h1 ref={ref} {...props} />;
  }
);

// Motion.p wrapper
export const MP = forwardRef<HTMLParagraphElement, PMotionProps>(
  function MP(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <p ref={ref} {...staticProps} />;
    }
    
    return <motion.p ref={ref} {...props} />;
  }
);

// Motion.nav wrapper
export const MNav = forwardRef<HTMLElement, NavMotionProps>(
  function MNav(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <nav ref={ref} {...staticProps} />;
    }
    
    return <motion.nav ref={ref} {...props} />;
  }
);

// Motion.li wrapper
export const MLi = forwardRef<HTMLLIElement, LiMotionProps>(
  function MLi(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <li ref={ref} {...staticProps} />;
    }
    
    return <motion.li ref={ref} {...props} />;
  }
);

// Motion.ul wrapper
export const MUl = forwardRef<HTMLUListElement, UlMotionProps>(
  function MUl(props, ref) {
    const shouldReduceMotion = useReducedMotionSafe();
    
    if (shouldReduceMotion) {
      const { animate, initial, whileHover, whileTap, variants, transition, ...staticProps } = props;
      return <ul ref={ref} {...staticProps} />;
    }
    
    return <motion.ul ref={ref} {...props} />;
  }
);

// Re-export useful framer-motion hooks and utilities
export { 
  useScroll, 
  useTransform, 
  useAnimation, 
  useInView,
  type MotionProps 
} from "framer-motion";