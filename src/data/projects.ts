import type { ProjectProps } from "@/components/ProjectCard";

export const projects: ProjectProps[] = [
  {
    imageSrc: "/shelteraid-check.webp",
    imageAlt: "Vedant Subramanian presenting $7,000 check for Shelter Aid TX",
    title: "Shelter Aid TX",
    tags: ["Nonprofit", "Operations", "Community"],
    summary: "A nonprofit matching shoe donations to shelters across DFW. Raised $7,000 and donated 1400+ shoes to those in need.",
    story:
      "Shelter Aid TX is a nonprofit I founded to address the critical need for footwear among homeless individuals in the Dallas-Fort Worth area. The organization operates by matching shoe donations from running stores and community drives with shelters across DFW. What started as a simple idea grew into a significant community effort, raising $7,000 through a school pitch competition and donating over 1,400 pairs of shoes to those in need. We've partnered with Fleet Feet locations, CISV Dallas, and various schools to create sustainable donation pipelines that continue to serve multiple shelters throughout the region.",
    bullets: [
      { strong: "Impact", text: "1400+ shoes donated; 7+ shelters served" },
      {
        strong: "Partners",
        text:
          "Fleet Feet Plano & Preston/Forest; CISV Dallas youth project; Greenhill annual drives; Prince of Peace Plano XC drive",
      },
      { strong: "Funding", text: "$7,000 from a school pitch competition" },
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
    imageSrc: "/shelteraidtx-portal.png",
    imageAlt: "Shelter Aid TX Portal dashboard interface",
    title: "Shelter Aid TX Portal",
    tags: ["React", "Operations"],
    summary: "Custom operations portal centralizing donation tracking, partnership management, and organizational knowledge for seamless leadership transitions.",
    story:
      "To ensure Shelter Aid TX's sustainability as leadership transitions over time, I built a custom operations portal that centralizes all organizational knowledge and processes. The portal tracks shoe collection events, manages donation inventory (both incoming and outgoing), maintains partner and shelter relationships, and stores critical documents. This system enables new team members to quickly understand operations and maintains continuity of service to our shelter partners. Built with React, the portal demonstrates how technology can solve real operational challenges in nonprofit management.",
    bullets: [
      { strong: "Core Features", text: "Collection logging, donation tracking (in/out), partner & shelter management, document storage" },
      { strong: "Purpose", text: "Enable smooth leadership transitions and preserve institutional knowledge" },
      { strong: "Tech Stack", text: "React" },
    ],
  },
  {
    imageSrc: "/thinkclear-frames.webp",
    imageAlt: "THIɅK Clear prototype glasses",
    title: "THIɅK Clear",
    tags: ["Python", "Next.js"],
    summary: "Bone-conduction memory glasses built at UPenn's M&TSI. Surveyed 60+ people and created companion app to help with memory recall.",
    story:
      "THIɅK Clear is a bone-conduction memory assistance device I developed at UPenn's Management & Technology Summer Institute. The project addresses memory challenges through wearable technology—when you see a person, their name is transmitted via bone conduction to your mastoid bone, designed particularly to aid those with conductive hearing loss. After surveying over 60 people to validate the concept, I built both the hardware prototype and a companion app that matches faces with names and objects (the objects mode was inspired by feedback from the VITAS Director). The system combines computer vision, audio engineering, and mobile development to create a practical assistive device.",
    bullets: [
      { strong: "Core flow", text: "See a person - name is sent via bone conduction to mastoid bone, designed to aid those with conductive hearing loss" },
      { strong: "Companion app", text: "Matching faces-names and objects (objects mode inspired by VITAS Director)" },
    ],
    links: [
      { href: "https://thinkclear.net", label: "Website" },
      { href: "https://www.youtube.com/watch?v=kr45kQ00uWc&ab_channel=VedantSubramanian", label: "YouTube Demo" },
      { href: "https://devpost.com/software/thi-k-clear", label: "Devpost" },
      { href: "/thinkclear-financial-model.xlsx", label: "Financial Model" },
      { href: "/thinkclear-gtm-strategy.pdf", label: "Go-to-Market Strategy" },
    ],
  },
  {
    imageSrc: "/campus-life-new.webp",
    imageAlt: "CampusLife family wellness app interface",
    title: "CampusLife",
    tags: ["React Native", "Expo"],
    summary: "A gamified family wellness tracker keeping college students connected with parents. Live on the App Store with habit tracking and support features.",
    story:
      "CampusLife is a gamified family wellness app I built to help college students stay connected with their parents through health tracking. The app monitors sleep, meals, and exercise, turning these daily habits into a shared experience that keeps families connected despite physical distance. Students progress through levels (Freshman to Graduate), maintain streaks, earn achievements, and receive family support features that make wellness tracking feel less like a chore and more like a collaborative journey. Built with React Native and Expo, backed by Firebase/Firestore, the app is now live on the App Store and helps families maintain meaningful connections through everyday wellness.",
    bullets: [
      { strong: "Core Features", text: "Sleep, meal, exercise tracking with family connection features" },
      { strong: "Gamification", text: "Levels (Freshman - Graduate), streaks, achievements, and family support" },
      { strong: "Tech Stack", text: "React Native, Expo, Firebase/Firestore backend" },
    ],
    links: [
      { href: "https://www.campuslifeapp.com/", label: "Website" },
      { href: "https://apps.apple.com/us/app/campuslife-college-redefined/id6752628164", label: "App Store" },
    ],
  },
  {
    imageSrc: "/Screenshot 2025-12-02 000551.png",
    imageAlt: "FTC AI Workbench interface",
    title: "FTC AI Workbench",
    tags: ["Next.js", "RAG", "FTC"],
    summary: "An AI-powered coding assistant built specifically for FTC robotics. Uses RAG with cached FTC docs to prevent hallucinations and generate accurate robot code.",
    story:
      "After experiencing firsthand how mainstream AI models consistently hallucinate when generating code for FIRST Tech Challenge robotics, I built an AI-powered coding assistant specifically designed for FTC. The workbench uses Retrieval-Augmented Generation (RAG) with a cached database of official FTC documentation, preventing the hallucinations that plagued generic AI tools. Claude runs server-side over Server-Sent Events, while the RAG system uses BM25 search on a local FTC documentation cache initialized at startup. The interface includes robot configuration and framework toggles that feed context into the prompts, with localStorage managing sessions and preferences. Security features include server-side API key management, rate limiting, daily usage caps (using Redis or in-memory fallback), and optional API authentication.",
    bullets: [
      { strong: "Why", text: "Mainstream AI kept hallucinating FTC details; I wanted something reliable for robot code" },
      { strong: "How", text: "Claude runs server-side over SSE; RAG uses BM25 on a local FTC cache initialized at startup" },
      { strong: "Safety", text: "Keys stay server-side; rate/daily caps with Redis or in-memory fallback; optional API auth" },
      { strong: "UX", text: "Robot config + framework toggles feed the prompts; localStorage keeps sessions and prefs" },
    ],
    links: [
      { href: "https://ai-ftc.vercel.app/workbench", label: "Open Workbench" },
      { href: "https://github.com/Vedant0667/AI_FTC", label: "GitHub" },
    ],
  },
  {
    imageSrc: "/rally-trophy.webp",
    imageAlt: "3D-printed Rally app trophy",
    title: "Rally",
    tags: ["PHP", "HTML", "CSS"],
    summary: "A gamified attendance app boosting school spirit. Over 50% of students signed up to earn points at games and redeem rewards.",
    story:
      "Rally is a gamified attendance tracking app I created to boost school spirit at athletic events. Students earn points by attending games and can redeem those points for rewards like breakfast coupons, school store credits, and skip-the-line passes. The app was incredibly successful—over 50% of the student body signed up and actively participated. To celebrate engagement, we hosted year-end ESPY-style awards ceremonies and gave out custom 3D powder-printed trophies to top participants. Built with PHP, HTML, and CSS, Rally demonstrated how simple gamification mechanics can dramatically increase student engagement and create a more vibrant school community.",
    bullets: [
      { strong: "Adoption", text: ">50% of the student body signed up" },
      { strong: "Perks", text: "Breakfast coupons, school store credits, skip-the-line pass" },
      { strong: "Culture", text: "Year-end ESPY-style awards; 3D powder-printed trophies" },
    ],
  },
  {
    imageSrc: "/tariffs-paper-cover.webp",
    imageAlt: "US Tariffs Research Paper",
    title: "Macroeconomic Effects of 2025 US Tariffs",
    tags: ["Economics", "Research", "Policy Analysis"],
    summary: "Research on 2025 US tariff impacts under a former World Bank economist. Analyzed inflation, consumption, and reshoring patterns. Posted to SSRN.",
    story:
      "Under the mentorship of Professor Sanket Mohapatra (PhD Columbia, former World Bank Senior Economist), I conducted research analyzing the macroeconomic effects of proposed 2025 US tariffs. The research examines inflation dynamics, consumption patterns, reshoring effects, and substitution behaviors in response to the tariff policy changes. This work sources econometric models, reviews trade policy literature, and analyzes historical tariff implementations. The paper has been posted to SSRN.",
    bullets: [
      { strong: "Research Focus", text: "Inflation dynamics, consumption patterns, reshoring effects, and substitution in response to 2025 tariff policy" },
      { strong: "Advisor", text: "Prof. Sanket Mohapatra (PhD Columbia, former World Bank Senior Economist)" },
      { strong: "Publication", text: "Posted to SSRN" },
    ],
    links: [
      { href: "/tariffs-paper.pdf", label: "Research Paper (PDF)" },
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5438034", label: "SSRN" },
    ],
  },
  {
    imageSrc: "/peoplenotes.png",
    imageAlt: "PeopleNotes voice-first personal CRM",
    title: "PeopleNotes",
    tags: ["Next.js", "Claude AI", "Voice", "Google Calendar"],
    imagePosition: "object-top",
    summary: "A voice-first personal CRM that turns post-meeting voice notes into structured memories, then surfaces them as a briefing before your next conversation.",
    story:
      "My dad kept showing up to meetings without context on the people he was meeting with — he's in back-to-back conversations all day and there was no good way to keep track. PeopleNotes is built around a simple loop: record a quick voice note after a meeting, let Claude extract the relevant details, and get a briefing card before the next one. The app uses Google Speech-to-Text for transcription and Claude Haiku to pull out people, active projects, personal details, and suggested follow-ups. The home page shows recent meeting notes from the last 5 hours alongside an upcoming-meeting timeline for the next 24, pulling in calendar and contacts data from Google.",
    bullets: [
      { strong: "Core loop", text: "Capture via voice → Claude extracts relationship context → briefing card before next meeting" },
      { strong: "Extraction", text: "People, projects, personal details (family, hobbies, travel), and suggested follow-up prompts" },
      { strong: "Integrations", text: "Google Calendar + Google People for automatic meeting linking; Google Cloud Storage for audio" },
      { strong: "Tech Stack", text: "Next.js 15, React 19, TypeScript, Prisma, Claude Haiku, Google Speech-to-Text, Material UI" },
    ],
  },
  {
    imageSrc: "/vidrant-content.webp",
    imageAlt: "Vedant creating YouTube and TikTok content",
    title: "Content Creation",
    tags: ["YouTube", "TikTok", "Video Editing"],
    summary: "Video editing and content creation across YouTube and TikTok. Accumulated 600k+ combined views with channels focused on professional editing.",
    story:
      "My content creation journey has evolved significantly over the years—from early guitar tutorials to gaming streams, and eventually to professional video editing content. Across YouTube and TikTok under the Vidrant brand, I've accumulated over 600,000 combined views. The YouTube channel (Vidrant Prod) has reached 364.5k lifetime views, while on TikTok I maintain two channels: Vidrant Prod with 265k+ views and Vidrant Edits with 100k+ views. This experience taught me not just technical skills in video production and editing, but also audience development, content strategy, and the discipline required to consistently create and publish quality content.",
    bullets: [
      { strong: "YouTube", text: "Vidrant Prod: 364.5k lifetime views" },
      { strong: "TikTok", text: "Vidrant Prod: 265k+ views; Vidrant Edits: 100k+ views" },
      { strong: "Evolution", text: "Guitar tutorials to gaming streams to professional editing content" },
    ],
    links: [
      { href: "https://www.youtube.com/@vidrantprod/shorts", label: "YouTube Channel" },
      { href: "https://www.tiktok.com/@vidrantprod1", label: "TikTok Vidrant Prod" },
      { href: "https://www.tiktok.com/@vidrant.edits", label: "TikTok Vidrant Edits" },
    ],
  },
];
