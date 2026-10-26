import type { ProjectProps } from "@/components/ProjectCard";

export const projects: ProjectProps[] = [
  {
    imageSrc: "/stowr.webp",
    imageAlt: "Stowr competitive price intelligence dashboard for self-storage operators",
    title: "Stowr",
    role: "Founder",
    tags: ["Next.js 16", "Supabase", "Playwright", "Claude AI"],
    imagePosition: "object-top",
    category: "Web",
    icon: "Warehouse",
    featured: true,
    summary:
      "Competitive price intelligence for self-storage operators. Tracks competitor rates across nearby facilities every day.",
    story:
      "Self-storage operators have no easy way to know what competitors charge. Stowr automates it: on onboarding it discovers nearby facilities via Google Places, scrapes their pricing with a multi-stage AI pipeline, and seeds the data to Supabase. A daily GitHub Actions cron re-scrapes every competitor, and the dashboard surfaces market averages, 7-day price trends, and a filterable competitor table (standard vs. climate-controlled, REIT vs. independent). Admins can manage tracked competitors and hide outlier prices without losing history.",
    bullets: [
      {
        strong: "Traction",
        text: "Live B2B SaaS for self-storage operators; $1.2K ARR",
      },
      {
        strong: "Scraper pipeline",
        text: "5 adaptive stages: static fetch, pricing-subpage probe, Playwright with API interception, Claude-generated parse functions, agentic Claude fallback",
      },
      {
        strong: "Auto-repair",
        text: "Failed daily scrapes trigger re-analysis and regeneration; failures logged for triage",
      },
      {
        strong: "Dashboard",
        text: "Market averages, 7-day trends, competitor table filterable by unit type and operator type",
      },
      {
        strong: "Tech Stack",
        text: "Next.js 16, React 19, TypeScript, Supabase, Playwright, Claude (Haiku + Sonnet), Google Places",
      },
    ],
    links: [
      { href: "https://landing.stowr.app", label: "Website" },
    ],
  },
  {
    imageSrc: "/canary.webp",
    imageAlt: "Canary CHF hospital-at-home monitoring dashboard",
    title: "Canary",
    tags: ["React", "TypeScript", "Claude AI", "FHIR"],
    category: "Web",
    icon: "Activity",
    featured: false,
    summary:
      "A CHF hospital-at-home tool that scores discharge readiness and catches deterioration from vitals trajectories, not single thresholds. 2nd of 13 teams at the SpinSci hackathon.",
    story:
      "Canary closes the gap between hospital discharge and home recovery for congestive heart failure patients. It runs a three-stage loop: an AI reads the discharge packet and a deterministic rules engine scores home-readiness (every number traceable on screen), the structured record is packaged as FHIR and handed to a second demo EHR, and a monitoring dashboard tracks daily vitals, firing a trajectory-based alert on day 4 before any single vital looks alarming. Accept and Override carry equal weight so the interface never nudges the clinical call, and it degrades gracefully — falling back to cached extractions when the API is unavailable. Two pieces are stubbed for the demo rather than fully built — the live EHR integration and real device ingestion — and stand in for where the product goes next (see Prototype scope below). I was the developer responsible for all technical work at the SpinSci hackathon, where Canary placed 2nd of 13 teams.",
    bullets: [
      { strong: "Readiness scoring", text: "A deterministic rules engine scores home-readiness from a live AI-extracted discharge packet; every number traces to a threshold on screen, and the same engine scores any pasted or generated note" },
      { strong: "FHIR hand-off", text: "The continuity record is serialized to correctly-shaped FHIR R4 resources and transferred into a second demo EHR so nothing is re-collected" },
      { strong: "Trajectory alerts", text: "A real trend engine escalates on converging multi-signal vitals before any single threshold is breached — the day-4 catch fires while each individual vital still reads normal" },
      { strong: "Prototype scope", text: "Genuinely built and running: the live Claude extraction, the scoring engine, the trend detection, and an Express + SQLite monitoring backend. Mocked for the demo and part of the broader product vision — a live EHR integration (the FHIR resources are real shapes, the hand-off between systems is simulated) and real device ingestion (the home-vitals series is scripted sample data the real engine runs on)" },
      { strong: "Team", text: "2nd of 13 teams and a $2,500 prize, built with Tarik Syed (Duke) and Aamir Tinwala (Stanford); I led all technical work" },
      { strong: "Tech Stack", text: "React 19, TypeScript, Vite, Express, SQLite, Claude (Anthropic SDK), FHIR" },
    ],
  },
  {
    imageSrc: "/outpacef1.webp",
    imageAlt: "OutpaceF1 logo",
    title: "OutpaceF1",
    tags: ["Next.js", "TypeScript", "Python", "Postgres"],
    category: "Web",
    icon: "Flag",
    featured: false,
    summary:
      "A race-night party game where friends make F1 pit calls from their phones and get scored on what actually happened. Built in under 24 hours at HackTX 2026.",
    story:
      "OutpaceF1 puts a group of friends on the pit wall during an F1 race. When a strategy moment comes up (a safety car, a rival pitting, an undercut window, worn tyres, rain), everyone calls \"box\" or \"stay out\" from their phone and records a voice note of up to 30 seconds saying why. At the flag, each call is scored against how comparable cars that made the other call finished, Muse Spark grades the reasoning, and a leaderboard ranks the group against a Python engine and the real F1 team. The demo replays real data from the 2025 Qatar and 2026 Singapore Grands Prix; running it lap by lap during live races is the next step. We built and deployed it in under 24 hours at HackTX 2026, and I was the developer responsible for all the technical work.",
    bullets: [
      { strong: "Decision moments", text: "A Python trigger script reads Jolpica F1 and OpenF1 data and prompts players on safety cars, nearby pit stops, undercut windows, tyre fade, and rain" },
      { strong: "Benchmark engine", text: "Makes its own call at each moment using only data available at that lap; across 81 decision points it was right about 54% of the time, the real teams about 58%" },
      { strong: "Scoring", text: "Calls stay hidden until the flag, and reasoning counts for more than the call, so a well-argued wrong call usually beats a lucky right one" },
      { strong: "Joining", text: "Friends join from their phones with a QR code or a 4-letter code, no app or account; AI spending caps and rate limits guard against misuse" },
      { strong: "Team", text: "Built at HackTX 2026 with Anika Gopal and Ekaksh Bansal; I did all the technical work" },
      { strong: "Tech Stack", text: "Next.js, TypeScript, Tailwind, Python, Neon Postgres, Muse Spark 1.3, Muse Voice Transcribe, Vercel" },
    ],
    links: [
      { href: "https://outpacef1.vercel.app", label: "Website" },
      { href: "https://github.com/Vedant0667/hacktx26", label: "GitHub" },
      { href: "https://devpost.com/software/outpacef1", label: "Devpost" },
    ],
  },
  {
    imageSrc: "/montir.webp",
    imageAlt: "Montir social film and TV ranking app",
    title: "Montir",
    tags: ["Expo", "React Native", "Supabase", "Trakt"],
    imagePosition: "object-top",
    category: "Mobile",
    icon: "Film",
    featured: false,
    modalImagePosition: "object-[center_38%]",
    summary:
      "A social film and TV ranking app that drops star ratings for fast, forced head-to-head comparisons.",
    story:
      "Star ratings compress everything into a vague 3.5. Montir replaces them with forced pairwise comparison. Search a title (Trakt-backed), pick a coarse tier (Liked it / Fine / Didn't like it), then place it exactly via 5 to 7 head-to-head matchups against titles you've already ranked. The result is a personal, ordered list with a 0 to 10 score per title. A social layer lets you follow friends, see their ranked lists, and spot \"friends liked it\" signals, with data-driven recommendations as the user base grows. The whole logging loop is built to take under 30 seconds.",
    bullets: [
      {
        strong: "Traction",
        text: "2,500+ movies and TV shows ranked by users since the App Store launch",
      },
      {
        strong: "Core mechanic",
        text: "Binary-insertion ranking: place a new title in 7 comparisons or fewer",
      },
      {
        strong: "Tiered scoring",
        text: "Coarse sentiment tiers gate placement so scores cluster realistically",
      },
      {
        strong: "Social",
        text: "Follow friends, view their ranked lists and per-title scores",
      },
      {
        strong: "Tech Stack",
        text: "Expo (React Native), Expo Router, React 19, TypeScript, Supabase, Trakt, EAS",
      },
    ],
    links: [
      { href: "https://apps.apple.com/us/app/montir/id6776378113", label: "App Store" },
    ],
  },
  {
    imageSrc: "/shelteraid-check.webp",
    imageAlt: "Vedant Subramanian presenting a $7,000 check for Shelter Aid TX",
    title: "Shelter Aid TX",
    role: "Founder & Board Chair",
    tags: ["Nonprofit", "Operations", "Community"],
    category: "Nonprofit",
    icon: "Building2",
    featured: true,
    summary:
      "A nonprofit I founded matching shoe donations to shelters across Dallas-Fort Worth. 8,000+ pairs of shoes collected for those in need, $7,000 raised.",
    story:
      "Shelter Aid TX is a nonprofit I founded to address the need for footwear among homeless individuals in the Dallas-Fort Worth area. It works by matching shoe donations from running stores and community drives with shelters across DFW. What started as a simple idea grew into a real community effort: $7,000 raised and over 8,000 pairs of shoes collected for those in need. We've partnered with Fleet Feet locations, CISV Dallas, and several schools to build donation pipelines that continue to serve shelters across the region.",
    bullets: [
      { strong: "Impact", text: "8,000+ pairs of shoes collected for those in need; 7+ shelters served" },
      {
        strong: "Partners",
        text:
          "Fleet Feet Plano and Preston/Forest; CISV Dallas youth project; Greenhill annual drives; Prince of Peace Plano XC drive",
      },
      { strong: "Funding", text: "$7,000 raised" },
    ],
    links: [
      { href: "https://shelteraidtx.org", label: "Website" },
      {
        href: "https://fliphtml5.com/mtkni/tcxh/Investing_in_Education_100624/",
        label: "Dallas Morning News feature (Pg 22)",
      },
      {
        href: "https://issuu.com/greenhill_school/docs/ghs-thehill-2024-final-digital-reduced",
        label: "Greenhill School magazine (Pg 46)",
      },
    ],
  },
  {
    imageSrc: "/campus-life-new.webp",
    imageAlt: "CampusLife family wellness app interface",
    title: "CampusLife",
    tags: ["React Native", "Expo", "Firebase"],
    category: "Mobile",
    icon: "Smartphone",
    featured: false,
    summary:
      "A family wellness tracker that keeps college students connected with parents. Live on the App Store.",
    story:
      "CampusLife is a family wellness app I built to help college students stay connected with their parents through health tracking. It monitors sleep, meals, and exercise, turning daily habits into a shared experience that keeps families connected despite distance. Students progress through levels (Freshman to Graduate), maintain streaks, earn achievements, and use family support features that make wellness tracking feel less like a chore. Built with React Native and Expo, backed by Firebase/Firestore, it's live on the App Store today.",
    bullets: [
      { strong: "Core features", text: "Sleep, meal, and exercise tracking with family connection features" },
      { strong: "Gamification", text: "Levels (Freshman to Graduate), streaks, achievements, and family support" },
      { strong: "Tech Stack", text: "React Native, Expo, Firebase/Firestore backend" },
    ],
    links: [
      { href: "https://www.campuslifeapp.com/", label: "Website" },
      { href: "https://apps.apple.com/us/app/campuslife-college-redefined/id6752628164", label: "App Store" },
    ],
  },
  {
    imageSrc: "/peoplenotes.png",
    imageAlt: "PeopleNotes voice-first personal CRM",
    title: "PeopleNotes",
    tags: ["Next.js", "Claude AI", "Voice", "Google Calendar"],
    imagePosition: "object-top",
    category: "Web",
    icon: "Mic",
    featured: false,
    summary:
      "A voice-first personal CRM. Turns post-meeting voice notes into structured memories, then surfaces them as a briefing before the next conversation.",
    story:
      "My dad kept showing up to meetings without context on the people he was meeting with. He's in back-to-back conversations all day and there was no good way to keep track. PeopleNotes is built around a simple loop: record a quick voice note after a meeting, let Claude extract the relevant details, and get a briefing card before the next one. The app uses Google Speech-to-Text for transcription and Claude Haiku to pull out people, active projects, personal details, and suggested follow-ups. The home page shows recent meeting notes from the last 5 hours alongside an upcoming-meeting timeline for the next 24, pulling in calendar and contacts data from Google.",
    bullets: [
      { strong: "Core loop", text: "Capture via voice, Claude extracts relationship context, briefing card before next meeting" },
      { strong: "Extraction", text: "People, projects, personal details (family, hobbies, travel), and suggested follow-up prompts" },
      { strong: "Integrations", text: "Google Calendar and Google People for automatic meeting linking; Google Cloud Storage for audio" },
      { strong: "Tech Stack", text: "Next.js 15, React 19, TypeScript, Prisma, Claude Haiku, Google Speech-to-Text, Material UI" },
    ],
    links: [
      { href: "https://people-notes.vercel.app/auth/signin?callbackUrl=%2F", label: "Website" },
    ],
  },
  {
    imageSrc: "/thinkclear-frames.webp",
    imageAlt: "THIɅK Clear prototype glasses",
    title: "THIɅK Clear",
    tags: ["Python", "Next.js", "Hardware"],
    category: "Hardware",
    icon: "Brain",
    featured: false,
    summary:
      "Bone-conduction memory glasses built at UPenn's M&TSI. Surveyed 60+ people, built the prototype and a companion app for name recall.",
    story:
      "THIɅK Clear is a bone-conduction memory assistance device I developed at UPenn's Management & Technology Summer Institute. It addresses memory challenges through wearable hardware: when you see a person, their name is transmitted via bone conduction to your mastoid bone, designed particularly to aid those with conductive hearing loss. After surveying over 60 people to validate the concept, I built both the hardware prototype and a companion app that matches faces with names and objects (the objects mode was inspired by feedback from the VITAS Director). The system combines computer vision, audio engineering, and mobile development into a practical assistive device.",
    bullets: [
      { strong: "Core flow", text: "See a person, name is sent via bone conduction to the mastoid bone, designed to aid those with conductive hearing loss" },
      { strong: "Companion app", text: "Matches faces to names and objects (objects mode inspired by the VITAS Director)" },
    ],
    links: [
      { href: "https://thinkclear.net", label: "Website" },
      { href: "https://www.youtube.com/watch?v=kr45kQ00uWc&ab_channel=VedantSubramanian", label: "Demo video" },
      { href: "https://devpost.com/software/thi-k-clear", label: "Devpost" },
      { href: "/thinkclear-financial-model.xlsx", label: "Financial Model" },
      { href: "/thinkclear-gtm-strategy.pdf", label: "Go-to-Market Strategy" },
    ],
  },
];
