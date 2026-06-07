"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Sun, Moon, Github, Linkedin, ArrowDownRight } from "lucide-react";
import { useTheme } from "next-themes";

/* ----------------------------------------------------------------
   Word / letter blur-rise reveal. Runs once on mount.
   Enhances an already-laid-out heading; reduced-motion shows it whole.
---------------------------------------------------------------- */

interface RevealTextProps {
  text: string;
  as?: "span" | "p";
  delay?: number;
  step?: number;
  className?: string;
  style?: React.CSSProperties;
  by?: "words" | "letters";
}

const RevealText: React.FC<RevealTextProps> = ({
  text,
  as = "span",
  delay = 0,
  step = 60,
  className = "",
  style,
  by = "words",
}) => {
  const [shown, setShown] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, []);

  const segments = useMemo(
    () => (by === "words" ? text.split(" ") : text.split("")),
    [text, by]
  );

  const Tag = as;
  return (
    <Tag className={className} style={style}>
      {segments.map((seg, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            filter: shown || reduce.current ? "blur(0px)" : "blur(10px)",
            opacity: shown || reduce.current ? 1 : 0,
            transform:
              shown || reduce.current ? "translateY(0)" : "translateY(0.5em)",
            transition: reduce.current
              ? "none"
              : `filter 0.7s ease-out ${delay + i * step}ms, opacity 0.7s ease-out ${delay + i * step}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay + i * step}ms`,
          }}
        >
          {seg}
          {by === "words" && i < segments.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
};

/* ----------------------------------------------------------------
   "Now" — factual, present-tense lines. Not metrics, not hype.
---------------------------------------------------------------- */

const NOW: { label: string; value: string }[] = [
  { label: "Building", value: "Stowr, Montir" },
  { label: "Running", value: "Shelter Aid TX" },
  { label: "Shipped", value: "CampusLife, on the App Store" },
];

const NAV = [
  { href: "#projects", label: "Work" },
  { href: "#achievements", label: "Recognition" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="ml-1 h-9 w-9" aria-hidden />;
  }
  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink/70 transition-colors hover:border-hairline-strong hover:text-ink"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="h-[1.05rem] w-[1.05rem]" />
      ) : (
        <Moon className="h-[1.05rem] w-[1.05rem]" />
      )}
    </button>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex max-w-[78rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-[1.05rem] font-medium tracking-tight text-ink"
          aria-label="Vedant Subramanian, back to top"
        >
          Vedant Subramanian
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink sm:block"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default function PortfolioHero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-bg text-ink"
    >
      <SiteHeader />

      {/* faint column rules behind the masthead */}
      <div
        aria-hidden
        className="paper-rules pointer-events-none absolute inset-x-0 top-0 h-full opacity-50"
      />

      <main className="relative mx-auto flex min-h-screen max-w-[78rem] flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: editorial copy */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <RevealText
              as="p"
              text="Developer · Founder"
              by="letters"
              step={10}
              className="mb-7 inline-flex items-center text-[0.78rem] font-medium uppercase tracking-[0.24em] text-accent-ink"
            />

            <h1 className="display-soft text-[clamp(3rem,9.5vw,5.75rem)] font-light leading-[0.95] tracking-[-0.025em] text-ink">
              <RevealText text="Vedant" by="letters" step={26} delay={120} className="block" />
              <RevealText
                text="Subramanian"
                by="letters"
                step={20}
                delay={360}
                className="block italic"
                style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1, "opsz" 144' }}
              />
            </h1>

            <RevealText
              as="p"
              text="I'm an incoming finance freshman at UT Austin's McCombs School, and most of my free time still goes into building software. I also run Shelter Aid TX, a shoe-donation nonprofit in Dallas that's donated 1,700+ pairs of shoes."
              step={20}
              delay={760}
              className="mt-8 max-w-[34rem] text-lg leading-relaxed text-muted [text-wrap:pretty] md:text-[1.2rem]"
            />

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[0.95rem] font-medium text-accent-contrast transition-[transform,background-color] duration-300 hover:-translate-y-0.5"
              >
                See the work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-1">
                <a
                  href="/Vedant_Subramanian_resume.pdf"
                  download
                  className="rounded-full border border-hairline px-5 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:border-hairline-strong hover:bg-surface"
                >
                  Résumé
                </a>
                <a
                  href="https://github.com/Vedant0667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:text-ink"
                  aria-label="GitHub"
                >
                  <Github className="h-[1.15rem] w-[1.15rem]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vedant-subramanian-762715300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:text-ink"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-[1.15rem] w-[1.15rem]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <figure className="relative w-48 sm:w-60 lg:w-full lg:max-w-[20rem]">
              {/* oxblood offset frame */}
              <span
                aria-hidden
                className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.25rem] border border-accent/40"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-hairline bg-sunken shadow-editorial">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/headshot-vedant.webp"
                  alt="Vedant Subramanian"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </figure>
          </div>
        </div>

        {/* "Now" strip — quiet, factual, editorial */}
        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
          {NOW.map((item) => (
            <div key={item.label} className="bg-bg px-6 py-5">
              <dt className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-accent-ink">
                {item.label}
              </dt>
              <dd className="mt-1.5 font-display text-lg font-normal text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </main>
    </section>
  );
}
