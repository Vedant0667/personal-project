# Design: Add stowr & montir project cards

**Date:** 2026-06-07
**Goal:** Add two new project cards — **stowr** and **montir** — to the portfolio at `/Users/vedant/personal-project`.

## Context

Projects are an index-ordered array of `ProjectProps` in `src/data/projects.ts`. Two parallel
index-keyed maps in `src/components/ProjectsSection.tsx` assign each project an icon
(`projectIcons`) and a filter category (`projectCategories`). There are no detail pages — a card
opens a modal showing `story`, `bullets`, and `links`. Images are served from `/public`.

Current order (index → title): 0 Shelter Aid TX, 1 Portal, 2 THINK Clear, 3 CampusLife,
4 FTC AI Workbench, 5 Rally, 6 Tariffs Research, 7 PeopleNotes, 8 Content Creation.

## Decisions

- **Placement:** Insert stowr and montir immediately after PeopleNotes (index 7). New order:
  `… 7 PeopleNotes, 8 stowr, 9 montir, 10 Content Creation`. The `projectIcons` and
  `projectCategories` maps must be re-indexed so Content Creation moves from 8 → 10, and new
  entries are added at 8 (stowr) and 9 (montir).
- **stowr image:** Capture a hero screenshot of the `stowr-landing` marketing site
  (`/Users/vedant/stowr-landing`) run locally, save to `public/stowr.webp`.
- **montir image:** Use an existing polished store screenshot from
  `/Users/vedant/Kritic/assets/store/play/` (the rankings/core view), convert to
  `public/montir.webp`. Portrait phone screenshot — matches the existing portrait CampusLife card.

## Card content

### stowr (index 8)
- **Category:** `Web` · **Icon:** `Warehouse` (lucide-react)
- **tags:** `["Next.js 16", "Supabase", "Playwright", "Claude AI"]`
- **title:** `Stowr`
- **summary:** Competitive price intelligence for self-storage operators — automatically tracks
  competitor rates across nearby facilities every day.
- **story:** Self-storage operators have no easy way to know what competitors charge. Stowr
  automates it: on onboarding it discovers nearby facilities via Google Places, scrapes their
  pricing with a multi-stage AI pipeline, and seeds the data to Supabase. A daily GitHub Actions
  cron re-scrapes every competitor, and the dashboard surfaces market averages, 7-day price
  trends, and a filterable competitor table (standard vs. climate-controlled, REIT vs.
  independent). Admins can manage tracked competitors and hide outlier prices without losing
  history.
- **bullets:**
  - Scraper pipeline → 5 adaptive stages: static fetch → pricing-subpage probe → Playwright + API
    interception → Claude-generated parse functions → agentic Claude fallback
  - Auto-repair → failed daily scrapes trigger re-analysis and regeneration; failures logged for
    triage
  - Dashboard → market averages, 7-day trends, competitor table filterable by unit type and
    operator type
  - Tech Stack → Next.js 16, React 19, TypeScript, Supabase, Playwright, Claude (Haiku + Sonnet),
    Google Places
- **links:** GitHub — `https://github.com/Vedant0667/StorageCompAnalyzer`
  (live link added if stowr-landing is deployed; otherwise omitted)
- **imagePosition:** `object-top`

### montir (index 9)
- **Category:** `Mobile` · **Icon:** `Film` (lucide-react)
- **tags:** `["Expo", "React Native", "Supabase", "TMDB"]`
- **title:** `Montir`
- **summary:** A social film & TV ranking app that ditches star ratings for fast, forced
  head-to-head comparisons.
- **story:** Star ratings compress everything into a vague 3.5 — Montir replaces them with forced
  pairwise comparison. Search a title (TMDB-backed), pick a coarse tier (Liked it / Fine / Didn't
  like it), then place it exactly via 5–7 head-to-head matchups against titles you've already
  ranked. The result is a personal, ordered list with a 0–10 score per title. A social layer lets
  you follow friends, see their ranked lists, and spot "friends liked it" signals, with
  data-driven recommendations as the user base grows. The whole logging loop is built to take
  under 30 seconds.
- **bullets:**
  - Core mechanic → binary-insertion ranking: place a new title in ≤7 comparisons
  - Tiered scoring → coarse sentiment tiers gate placement so scores cluster realistically
  - Social → follow friends, view their ranked lists and per-title scores
  - Tech Stack → Expo (React Native), Expo Router, React 19, TypeScript, Supabase, TMDB, EAS
- **links:** GitHub — `https://github.com/Vedant0667/Montir`
- **imagePosition:** `object-top`

## Files changed

1. `src/data/projects.ts` — add two `ProjectProps` objects after the PeopleNotes entry.
2. `src/components/ProjectsSection.tsx` — re-index `projectIcons` and `projectCategories`; add
   `Warehouse` and `Film` to the lucide-react import.
3. `public/stowr.webp` — new (captured from stowr-landing).
4. `public/montir.webp` — new (converted from Kritic store screenshot).

## Verification

- Run `npm run dev`, load the page, confirm both new cards render in the right position with
  images, open each modal, and confirm filter tabs (Web shows stowr, Mobile shows montir) work.
- `npx tsc --noEmit` passes.

## Out of scope

- No detail-page routing, no changes to other cards, no new filter categories.
