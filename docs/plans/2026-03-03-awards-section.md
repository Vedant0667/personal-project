# Awards Section Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate the existing but un-rendered `Achievements` component into the live portfolio page, restyled to match the site's dark aesthetic.

**Architecture:** The data and component tree already exist (`Achievements.ts` → `Achievements.tsx` → `AchievementsList.tsx`). Only two changes are needed: restyle `AchievementsList.tsx` to use dark colors/wrapper (removing the `Section` dependency), then import and render `<Achievements />` in `page.tsx` after `<ProjectsSection />`.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS v4, Framer Motion, TypeScript, Playwright (smoke tests)

---

### Task 1: Restyle `AchievementsList.tsx` to dark theme

**Files:**
- Modify: `src/components/AchievementsList.tsx`

**Context:**
The current component wraps everything in `<Section>` (light background) and uses multicolored card backgrounds. The rest of the site uses `bg-black dark:bg-[#FFF9F0]` with `#FFFBEB` (cream) text and amber (`rgba(245,158,11,...)`) accents. We need to match that.

Key color values to know:
- Dark bg: `bg-black dark:bg-[#FFF9F0]`
- Cream text: `#FFFBEB` in dark mode, `black` in light mode
- Amber accent: `rgba(245,158,11,0.15)` for borders, `rgba(245,158,11,0.08)` for bg fills
- Section heading pattern from `ProjectsSection.tsx`: `font-sans text-lg md:text-4xl text-[#FFFBEB] dark:text-black`

**Step 1: Open the file and understand the current structure**

Read: `src/components/AchievementsList.tsx`

The component currently:
- Wraps everything in `<Section id="achievements" title="Recognition">`
- Uses `colorSchemes` array with white/pink/blue/green card backgrounds
- Has `cardHoverVariants` with `rotateY: 5` (3D flip — remove this)
- Uses `colorScheme.bg`, `colorScheme.text`, `colorScheme.accent`, `colorScheme.border` for inline styles

**Step 2: Replace the entire file with the dark-themed version**

Replace `src/components/AchievementsList.tsx` with the following:

```tsx
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
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 15,
      duration: 0.6,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// Hover: lift + amber border brightens, no 3D rotation
const cardHoverVariants = {
  y: -4,
  transition: { duration: 0.2 },
};

const linkHoverVariants = { scale: 1.02 };

function AchievementsList({ achievements }: AchievementsListProps) {
  return (
    <div className="w-full bg-black dark:bg-[#FFF9F0] py-20 px-4 md:px-8 lg:px-10 transition-colors">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="font-sans text-lg md:text-4xl mb-4 text-[#FFFBEB] dark:text-black">
          Recognition
        </h2>
        <p className="font-sans text-[#FFFBEB]/70 dark:text-black/70 text-sm md:text-base max-w-2xl">
          Awards, programs, and honors along the way.
        </p>
      </div>

      <MUl
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {achievements.map((a) => (
          <MLi
            key={a.title}
            variants={cardVariants}
            whileHover={cardHoverVariants}
            className="rounded-2xl overflow-hidden cursor-default"
            style={{
              backgroundColor: "rgba(255,251,235,0.04)",
              border: "1px solid rgba(245,158,11,0.15)",
            }}
          >
            <div className="p-6 flex flex-col h-full">
              <MSpan
                variants={lineVariants}
                className="font-mono-var inline-flex items-center rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wide font-medium mb-3 w-fit"
                style={{
                  backgroundColor: "rgba(245,158,11,0.10)",
                  color: "rgb(251,191,36)",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                {a.kicker}
              </MSpan>

              <MBox
                variants={lineVariants}
                className="font-display text-xl font-bold leading-tight text-[#FFFBEB] dark:text-black"
              >
                {a.title}
              </MBox>

              {a.detail && (
                <MBox
                  variants={lineVariants}
                  className="mt-2 text-sm leading-relaxed text-[#FFFBEB]/70 dark:text-black/70"
                >
                  {a.detail}
                </MBox>
              )}

              <div className="flex-grow" />

              {a.link && (
                <MLink
                  variants={lineVariants}
                  href={a.link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={linkHoverVariants}
                  className="inline-flex items-center rounded-full px-2 py-1 text-[8px] font-medium uppercase tracking-wide self-start mt-4"
                  style={{
                    backgroundColor: "rgba(245,158,11,0.10)",
                    color: "rgb(251,191,36)",
                    border: "1px solid rgba(245,158,11,0.25)",
                  }}
                >
                  source
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
```

**Step 3: Verify the file looks correct**

Read `src/components/AchievementsList.tsx` and confirm:
- No `Section` import or usage
- No `colorSchemes` array
- No `rotateY` in hover variants
- Wrapper uses `bg-black dark:bg-[#FFF9F0]`
- Cards use amber rgba values

---

### Task 2: Wire `Achievements` into `page.tsx`

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Open the current page**

Read `src/app/page.tsx`. Current content:

```tsx
"use client";

import Hero from "@/components/Hero";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsSection from "@/components/ProjectsSection";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <JourneyTimeline />
      <ProjectsSection />
    </div>
  );
}
```

**Step 2: Add `Achievements` import and render it**

Edit `src/app/page.tsx` to add the import and component:

```tsx
"use client";

import Hero from "@/components/Hero";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import Achievements from "@/components/Achievements";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <JourneyTimeline />
      <ProjectsSection />
      <Achievements />
    </div>
  );
}
```

**Step 3: Build to confirm no TypeScript errors**

Run: `npm run build`
Expected: Build completes with no type errors. Warnings about `img` vs `Image` or other pre-existing issues are acceptable — only new errors matter.

---

### Task 3: Verify smoke tests pass

**Files:**
- Read: `tests/smoke.spec.ts` (reference only, do not modify)

**Context:**
`tests/smoke.spec.ts:33` already asserts `#achievements` is visible. This test was failing before this change because the section was never rendered. After Task 2, `AchievementsList` renders `<MUl>` inside a wrapper but the `id="achievements"` must be present for the test to pass.

**Step 1: Check that the `id` is on the section wrapper**

Open `src/components/AchievementsList.tsx` and confirm the outer `<div>` has `id="achievements"`:

```tsx
<div id="achievements" className="w-full bg-black dark:bg-[#FFF9F0] ...">
```

If the `id` is missing, add it to the outer `<div>` in `AchievementsList.tsx`.

**Step 2: Run the smoke tests**

Run: `npx playwright test --reporter=line`
Expected: All 4 tests pass, including `navigation sections exist` which checks `#achievements`.

If the webserver isn't running, Playwright's `webServer` config in `playwright.config.ts` will build and start it automatically (`npm run build && npm start -- -p 4173`).

**Step 3: Commit**

```bash
git add src/components/AchievementsList.tsx src/app/page.tsx
git commit -m "feat: integrate awards section with dark theme styling"
```
