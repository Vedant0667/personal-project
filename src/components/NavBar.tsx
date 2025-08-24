"use client";

import React from "react";
import { MNav, MLink, MSpan } from "@/components/motion/Motion";

const LINKS = [
  { id: "home", label: "Hero" }, // Added to detect hero section
  { id: "timeline", label: "Timeline" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Recognition" },
  { id: "contact", label: "Contact" },
] as const;

export default function NavBar() {
  const [active, setActive] = React.useState<string>("");

  // Simple scroll spy
  React.useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter(e => e.isIntersecting);
        
        if (intersecting.length > 0) {
          const visible = intersecting.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          const detectedId = visible.target.id;
          
          // If we detect hero, don't highlight anything in navbar
          if (detectedId === 'home') {
            setActive('');
          } else {
            setActive(detectedId);
          }
        } else {
          // If no sections detected, we must be in timeline (between hero and projects)
          setActive('timeline');
        }
      },
      { rootMargin: "-60% 0px -50% 0px", threshold: [0, 0.5, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const linkCls = React.useCallback((id: string) =>
    [
      "text-sm rounded-full px-4 py-2 transition-all duration-200 font-medium",
      active === id
        ? "bg-gradient-to-r from-orange-100 to-amber-100 text-orange-900 ring-2 ring-orange-200 shadow-sm"
        : "text-slate-700 hover:text-orange-700 hover:bg-orange-50",
    ].join(" "), [active]);

  return (
    <MNav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 border-b border-amber-200/70 backdrop-blur-md shadow-sm"
      style={{ backgroundColor: "rgba(255, 253, 242, 0.95)" }}
    >
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <MLink 
          href="#" 
          className="inline-flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MSpan 
            className="font-display text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            VS
          </MSpan>
          <span className="sr-only">Vedant Subramanian</span>
        </MLink>

        <div className="hidden sm:flex items-center gap-6">
          {LINKS.filter(l => l.id !== 'home').map((l, index) => (
            <MLink 
              key={l.id} 
              href={`#${l.id}`} 
              className={linkCls(l.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3, duration: 0.5, type: "spring" }}
            >
              {l.label}
            </MLink>
          ))}
          <MLink
            href="mailto:vedant.subramanian@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 20px -5px rgba(249, 115, 22, 0.4)",
              y: -1
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          >
            Email
          </MLink>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <MLink
            href="mailto:vedant.subramanian@gmail.com"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 20px -5px rgba(249, 115, 22, 0.4)",
              y: -1
            }}
            whileTap={{ scale: 0.95 }}
          >
            Email
          </MLink>
        </div>
      </div>
    </MNav>
  );
}