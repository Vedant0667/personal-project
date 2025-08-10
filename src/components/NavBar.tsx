"use client";

import React from "react";
import { motion } from "framer-motion";

const LINKS = [
  { id: "achievements", label: "Highlights" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

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
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6, 1] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const linkCls = (id: string) =>
    [
      "text-sm rounded-full px-3 py-1 transition",
      active === id
        ? "bg-orange-100 text-orange-900 ring-1 ring-orange-200"
        : "text-slate-700 hover:text-slate-900",
    ].join(" ");

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-amber-200/70"
      style={{ backgroundColor: "#FFFDF2" }} // slightly lighter than body
    >
      <div className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="font-display text-lg font-semibold text-slate-900">VS</span>
          <span className="sr-only">Vedant Subramanian</span>
        </a>

        <div className="hidden sm:flex items-center gap-4">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={linkCls(l.id)}>
              {l.label}
            </a>
          ))}
          <a
            href="mailto:vedant.subramanian@gmail.com"
            className="inline-flex items-center rounded-full bg-orange-600 text-white px-3 py-1.5 text-sm hover:bg-orange-700"
          >
            Email
          </a>
        </div>

        {/* Mobile menu — keeps it simple */}
        <div className="sm:hidden">
          <a
            href="mailto:vedant.subramanian@gmail.com"
            className="inline-flex items-center rounded-full bg-orange-600 text-white px-3 py-1.5 text-sm hover:bg-orange-700"
          >
            Email
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
