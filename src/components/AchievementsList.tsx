"use client";

import { memo } from "react";
import { MBox, MLink, MSpan, MUl, MLi } from "@/components/motion/Motion";

interface Achievement {
  title: string;
  kicker: string;
  detail?: string;
  link?: { href: string; label: string };
}

interface AchievementsListProps {
  achievements: Achievement[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 18 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <div
      id="achievements"
      className="w-full bg-black dark:bg-[#FFF9F0] py-20 px-4 md:px-8 lg:px-10 transition-colors"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="font-sans text-lg md:text-4xl mb-4 text-[#f5f5f5] dark:text-black max-w-4xl">
          Awards &amp; Honors
        </h2>
        <p className="font-sans text-[#f5f5f5]/60 dark:text-black/60 text-sm md:text-base max-w-2xl">
          Programs, accolades, and recognition along the way.
        </p>
      </div>

      <MUl
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {achievements.map((a, index) => (
          <MLi
            key={a.title}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className={[
              "group relative rounded-xl overflow-hidden flex flex-col min-h-[200px]",
              "shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-default",
              // dark mode: dark card / light mode: off-white card
              "bg-[#1a1a1a] dark:bg-[#efefef]",
              "border border-[#f5f5f5]/[0.06] dark:border-black/[0.08]",
            ].join(" ")}
          >
            {/* Amber accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(90deg, rgba(245,158,11,0.9) 0%, rgba(251,191,36,0.5) 55%, transparent 100%)",
              }}
            />

            {/* Faded index number */}
            <span
              className="absolute bottom-2 right-4 font-mono-var font-bold select-none pointer-events-none tabular-nums text-[#f5f5f5]/[0.05] dark:text-black/[0.06]"
              style={{ fontSize: "5rem", lineHeight: 1, letterSpacing: "-0.05em" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative p-6 flex flex-col h-full">
              {/* Kicker pill */}
              <MSpan
                variants={lineVariants}
                className="font-sans text-xs font-medium mb-4 block w-fit rounded-full px-2 py-1 backdrop-blur-sm text-[#f5f5f5] bg-[#f5f5f5]/[0.1] border border-[#f5f5f5]/[0.15] dark:text-black dark:bg-black/[0.08] dark:border-black/[0.15]"
              >
                {a.kicker}
              </MSpan>

              {/* Title */}
              <MBox
                variants={lineVariants}
                className="font-sans text-xl font-bold leading-snug text-[#f5f5f5] dark:text-[#1a1a1a]"
              >
                {a.title}
              </MBox>

              {/* Detail */}
              {a.detail && (
                <MBox
                  variants={lineVariants}
                  className="mt-3 text-sm leading-relaxed text-[#f5f5f5]/60 dark:text-black/60"
                >
                  {a.detail}
                </MBox>
              )}

              <div className="flex-grow" />

              {/* Source link */}
              {a.link && (
                <MLink
                  variants={lineVariants}
                  href={a.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 mt-5 self-start text-xs font-medium rounded-full px-2.5 py-1 backdrop-blur-sm transition-colors duration-200 text-[#f5f5f5] bg-[#f5f5f5]/[0.08] border border-[#f5f5f5]/[0.15] hover:bg-[#f5f5f5]/[0.16] dark:text-black dark:bg-black/[0.06] dark:border-black/[0.15] dark:hover:bg-black/[0.12]"
                >
                  source ↗
                </MLink>
              )}
            </div>
          </MLi>
        ))}
      </MUl>
    </div>
  );
}

export default memo(AchievementsList);
