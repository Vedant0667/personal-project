"use client";

import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { MBox, MLi, MUl } from "@/components/motion/Motion";

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
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 110, damping: 20 },
  },
};

function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <section
      id="achievements"
      className="w-full border-t border-hairline bg-bg px-5 py-24 sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto mb-14 flex max-w-[78rem] flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-accent-ink">
            Recognition
          </p>
          <h2 className="display-soft text-[clamp(2.5rem,6vw,4rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink">
            Awards and
            <br />
            <span
              className="italic"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1, "opsz" 144' }}
            >
              honors.
            </span>
          </h2>
        </div>
      </div>

      <MUl
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-[78rem] border-t border-hairline"
      >
        {achievements.map((a) => {
          const inner = (
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-[10rem_1fr_auto] md:items-baseline">
              <span className="text-[0.78rem] font-medium uppercase tracking-[0.16em] text-accent-ink">
                {a.kicker}
              </span>

              <div>
                <h3 className="font-display text-[1.4rem] font-normal leading-snug tracking-[-0.005em] text-ink md:text-[1.6rem]">
                  {a.title}
                </h3>
                {a.detail && (
                  <p className="mt-2 max-w-prose text-[0.92rem] leading-relaxed text-muted">
                    {a.detail}
                  </p>
                )}
                {a.link && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-muted transition-colors group-hover:text-accent-ink">
                    {a.link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>

              {a.link && (
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:block" />
              )}
            </div>
          );

          return (
            <MLi
              key={a.title}
              variants={itemVariants}
              className="group relative border-b border-hairline py-8 md:py-10"
            >
              <span
                aria-hidden
                className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-20"
              />
              {a.link ? (
                <a
                  href={a.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`${a.title}, ${a.link.label}`}
                >
                  {inner}
                </a>
              ) : (
                <MBox>{inner}</MBox>
              )}
            </MLi>
          );
        })}
      </MUl>
    </section>
  );
}

export default memo(AchievementsList);
