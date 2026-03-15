# Awards / Recognition Section Integration

Date: 2026-03-03
Status: Approved

## Summary

Integrate the existing but un-rendered `Achievements` component into the live site, restyled to match the dark aesthetic of the rest of the portfolio.

## Placement

Page flow after integration:

```
Hero → JourneyTimeline → ProjectsSection → Achievements (new)
```

## Visual Design

### Wrapper
- Full-width dark section: `bg-black dark:bg-[#FFF9F0]` with `py-20 px-4 md:px-8 lg:px-10`
- Section heading: `"Recognition"` in `font-sans text-lg md:text-4xl text-[#FFFBEB] dark:text-black`, matching `ProjectsSection`

### Cards
- Background: `rgba(255,251,235,0.04)` — near-transparent cream tint on black
- Border: `1px solid rgba(245,158,11,0.15)` — site amber accent (`--line` in globals.css)
- Hover border: `rgba(245,158,11,0.40)` brighten + subtle y-lift (`y: -4`)
- Remove 3D `rotateY` from hover — inconsistent with flat site aesthetic

### Typography
- Kicker badge: `text-[9px] uppercase tracking-wide` in amber text on amber-tinted bg
- Title: `#FFFBEB` (cream), `font-display`, bold
- Detail: `rgba(255,251,235,0.70)` — cream at 70% opacity
- Source link: amber pill matching kicker style

### Grid
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Remove `xl:grid-cols-5` (too cramped at wide breakpoints)

### Animation
- Keep framer-motion stagger (0.1s between cards, spring ease)
- Remove `rotateY: 5` from hover variants

## File Changes

| File | Change |
|---|---|
| `src/app/page.tsx` | Import `Achievements`, render after `<ProjectsSection />` |
| `src/components/AchievementsList.tsx` | Remove `Section` wrapper; add dark bg container; flip all color values to dark theme; fix hover variants |
| `src/components/Achievements.tsx` | No change |
| `src/data/Achievements.ts` | No change |

## Non-Goals

- No new data — existing 5 awards entries are complete
- No new files — restyle in-place only
- No changes to other sections
