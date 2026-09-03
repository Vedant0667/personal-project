# Todo

## Current

<!-- Tasks live here. Use checkboxes:
  - [ ] pending
  - [~] in progress
  - [x] done
Mark in-progress BEFORE starting; mark done IMMEDIATELY after. -->

- [ ] Optional polish (from QA, not yet done):
  - [ ] Dark-mode recognition/achievements body copy sits a touch low-contrast (muted gray on near-black) — bump contrast.
  - [ ] In-card mock screenshots (Stowr "#1 pricing tool", CampusLife) are small/hard to read at desktop scale.
- [ ] Optional cleanup: remove pre-existing dead components not in the render tree (About.tsx, Contact.tsx, NavBar.tsx, Section.tsx, SectionDivider.tsx, Reveal.tsx, ui/bento.tsx, ui/project-card.tsx).
- [ ] Restart Claude Code so the newly-installed hooks (load-lessons, detect-correction, typecheck) actually activate.

## Done

### 2026-09-03 - Resume re-upload (Sep 2026 v2)
- [x] Replaced `public/Vedant_Subramanian_resume.pdf` with the re-uploaded `~/Downloads/Vedant_Subramanian_Resume_Sep2026.pdf` (138KB, created Sep 3 18:07). `cmp` byte-identical.
- [x] Only text change vs the prior version: Shelter Aid TX title "Co-Founder & President" -> "Founder & Board Chair". Site card still says role "Founder" (accurate subset) - flagged to Vedant, not changed unilaterally.
- [x] NOTE: this version is 2 pages - the UPenn M&TSI bullet (2 lines) orphans onto page 2. Prior version was 1 page. Flagged to Vedant.

### 2026-09-03 - Reshuffle flagship vs supporting projects
- [x] Montir + CampusLife demoted `featured: true` -> `false` in `src/data/projects.ts`. Rendering is filter-driven (`ProjectsSection.tsx:19-20`), so no component changes were needed.
- [x] Main "What I'm working on now" rows are now Stowr (normal) then Shelter Aid TX (reversed) - the alternating layout still alternates. "Also worth a look" grid is Montir, CampusLife, PeopleNotes, THIAK Clear, Canary (5 cards in 2 cols, so the last one sits alone on its row).
- [x] Hero NOW stat `Building` "Stowr, Montir" -> "Stowr, Shelter Aid" (`portfolio-hero.tsx:78`).
- [x] Verified order + stat in the prerendered HTML by byte offset; tsc --noEmit clean, next build clean.

### 2026-09-02 — Sep 2026 resume + status/stat refresh
- [x] Replaced `public/Vedant_Subramanian_resume.pdf` with `~/Downloads/Vedant_Subramanian_Resume_Sep2026.pdf` (137KB, 1 page). Filename kept so both links keep working (ContactSection.tsx:82, portfolio-hero.tsx:199). `cmp` byte-identical. Only one resume asset on the site.
- [x] "Incoming" dropped + major finance -> business administration in all 5 copy sites: `src/app/layout.tsx` (SEO description, keywords, OG, Twitter) and `portfolio-hero.tsx:182` hero bio. ("Unspecified" is the McCombs concentration designation - kept on the resume, left out of prose where it reads as an error.)
- [x] Stowr: new first `Traction` bullet - "Live B2B SaaS for self-storage operators; $1.2K ARR" (`src/data/projects.ts`), matching Montir's traction-bullet pattern.
- [x] Shelter Aid: $7,000 de-attributed from the school pitch competition - story line and `Funding` bullet in `projects.ts`, plus hero NOW stat "$7,000 grant" -> "$7,000". `Achievements.ts` "$7,000 pitch grant" left untouched per request.
- [x] tsc --noEmit clean; next build clean.

### 2026-08-07 — Projects section headline
- [x] `ProjectsSection.tsx:102` headline "Six things worth / *showing.*" → "What I&apos;m working on / *now.*", keeping the two-line plain/italic split and the WONK font-variation on the second line. Incidentally kills a stale hardcoded count — there are 7 projects, not 6. Eyebrow above it still reads "Selected work" (left as-is; user asked only for the headline).
- [x] Verified in prerendered HTML: new headline present, "Six things worth" gone. tsc + next build clean.

### 2026-08-07 — Role bylines on project cards
- [x] New optional `role?: string` on `ProjectProps` (`src/components/ProjectCard.tsx`) — my title on each project.
- [x] Populated in `src/data/projects.ts`: Stowr "Founder", Montir "Co-Founder, CEO & CTO", Shelter Aid TX "Founder", CampusLife "Co-Founder". Supporting projects (PeopleNotes, THIɅK Clear, Canary) intentionally have none — field is optional so they render unchanged.
- [x] Rendered as an uppercase letterspaced eyebrow above the title (matches the existing "Selected work" eyebrow style, `text-accent-ink`) in three places: `FlagshipRow` + `SupportingCard` (`ProjectsSection.tsx`) and `ProjectModal` (`ui/project-modal.tsx`, new `role` prop threaded through from ProjectsSection).
- [x] Verified in the prerendered HTML: exactly 4 role bylines in card order, plus the 3 pre-existing section eyebrows. tsc + next build clean.

### 2026-08-07 — Stat refresh (Montir + Shelter Aid) + resume
- [x] Shelter Aid TX shoe count 1,700+ → 2,500+ in all 5 live copy sites: `src/data/projects.ts` (summary, story, Impact bullet), `src/components/ui/portfolio-hero.tsx:182` hero bio, `src/app/layout.tsx:12` SEO description. (Dead components About.tsx/Projects.tsx not in the render tree — left alone.)
- [x] Montir: added `Traction` bullet — "2,500+ movies and TV shows ranked by users since the App Store launch" — as the first bullet on its card in `src/data/projects.ts`.
- [x] Replaced `public/Vedant_Subramanian_resume.pdf` with `~/Downloads/Vedant_Subramanian_Early_Aug.pdf` (68KB). Filename kept so both links still work (ContactSection.tsx:82, portfolio-hero.tsx:199). Resume text independently confirms both stats ("donated 2,500+ shoes", "2,500+ movies & TV shows ranked by users") — site copy and resume agree.
- [x] `tsc --noEmit` clean; `next build` clean (7/7 static pages, pre-existing lint warnings only).

### 2026-07-27 — Resume refresh
- [x] Pulled latest on v2 (already up to date, f905201).
- [x] Replaced `public/Vedant_Subramanian_resume.pdf` with `~/Downloads/Vedant_Subramanian_resume-2.pdf` (68KB, 1 page, PDF-1.7). Kept the filename so the two existing links keep working: `src/components/ContactSection.tsx:82` and `src/components/ui/portfolio-hero.tsx:199`. Byte-for-byte verified via `cmp`. Not committed — awaiting review.

### 2026-06-11 — Montir App Store launch
- [x] Montir is live on the App Store — added `App Store` link (https://apps.apple.com/us/app/montir/id6776378113) to its card in src/data/projects.ts, same pattern as CampusLife. tsc --noEmit clean. Hero "Building: Stowr, Montir" left as-is (still accurate).
- [x] Merged + shipped: committed on v2 (f905201), Codex pre-ship audit NO BLOCKING FINDINGS, tsc + next build clean, merged v2 → main (208a610), pushed main and v2 to origin. Back on v2.

### 2026-06-07 — Add Stowr + Montir, full "Editorial Ivory" redesign
- [x] Installed standard repo scaffolding (.claude/hooks, tasks/) — activates next CC restart.
- [x] Brainstormed + wrote spec: docs/superpowers/specs/2026-06-07-add-stowr-montir-projects-design.md (committed).
- [x] Generated card images: public/stowr.webp (captured from stowr-landing hero), public/montir.webp (Kritic branded film-rankings panel).
- [x] Complete visual overhaul → "Editorial Ivory" (ivory/ink/oxblood; dark = warm near-black/cream/clay). Fonts: Fraunces (display) + Inter (body). Replaced old black/cream/amber theme site-wide via CSS-var tokens. Removed timeline + morphing-headshot.
- [x] Projects: featured/flagship rows + supporting cards. Final order: Stowr, Montir, Shelter Aid TX, CampusLife (flagship) → PeopleNotes, THIɅK Clear (supporting). Removed: Shelter Aid Portal, FTC Workbench, 2025 tariffs paper, Rally, Content Creation (YouTube).
- [x] Data fixes: Montir TMDB→Trakt + no links; Stowr→stowr.app; PeopleNotes→people-notes.vercel.app link; Shelter Aid 1,400→1,700 shoes.
- [x] Copy de-slopped: hero bio now "finance freshman at UT Austin / builds software / runs Shelter Aid TX"; removed corny section intro sentences; updated SEO metadata (no more "high school").
- [x] Added privacy policy at /privacy (discloses Google Analytics) + footer link.
- [x] Verified: tsc --noEmit clean, next build passes, QA screenshots light/dark/mobile all PASS.
- [x] Montir detail modal: added `modalImagePosition: object-[center_38%]` so the modal reveals the ranked list (card crop unchanged). Verified computed object-position 50% 38%.
- [x] Privacy policy page at /privacy (Google Analytics disclosure) + footer link.

### 2026-06-07 — Canary project + achievements + hook fix
- [x] Added Canary project (CHF hospital-at-home tool, 2nd place + $2,500 hackathon win) next to THIɅK Clear; screenshot captured to public/canary.webp (homecare monitoring view). No card link (no live demo).
- [x] Achievements: removed CSPA Silver Crown + FTC state qualifier; added "2nd place — Canary ($2,500)" with teammates (Tarik Syed/Duke, Aamir Tinwala/Stanford) and prod.spinsci.ai link.
- [x] Stowr link → stowr-landing.vercel.app (was stowr.app).
- [x] Fixed detect-correction.py Stop hook: mtime-based lesson detection (tasks/ is untracked so git diff failed), bracket-less date format, scans only latest user message, tightened patterns. Verified: non-correction → exit 0; correction with no fresh lesson → exit 2.
- [ ] NOT committed yet — working tree changes awaiting user review.
