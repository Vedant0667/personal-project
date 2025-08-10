import type { ProjectProps } from "@/components/ProjectCard";

export const projects: ProjectProps[] = [
  {
    imageSrc: "/shelteraid-check.webp",
    imageAlt: "Vedant Subramanian presenting $7,000 check for Shelter Aid TX",
    title: "Shelter Aid TX",
    tags: ["Nonprofit", "Operations", "Community"],
    story:
      "Shelters kept telling me the same thing: they needed shoes. After cold-calling ~50 shelters across DFW and hearing that ~70% ranked shoes among the biggest needs, I started Shelter Aid TX with my brother and a friend. I designed a shoe match system so donations aren't random; the right pairs go to the right shelters. As president, I run ops and partnerships, and I'm scoping an app to replace our Google Sheets tracking.",
    bullets: [
      { strong: "Impact", text: "1000+ shoes donated; 7+ shelters served" },
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
    imageSrc: "/thinkclear-frames.jpg",
    imageAlt: "THIɅK Clear prototype glasses",
    title: "THIɅK Clear",
    tags: ["Python", "Next.js"],
    story:
      "At UPenn's M&TSI, our team kept circling one idea we loved: glasses that help with memory cues. We surveyed 60+ people and spoke with industry professionals including Raj Amin and a former Fort Worth VITAS Medical Director, plus a local nursing home director. We built sleek frames with bone conduction so names can be delivered even with some hearing loss, and a companion matching game to reinforce faces and objects. I co-led market research, financial modeling, and produced our marketing video.",
    bullets: [
      { strong: "Core flow", text: "See a person → name is sent via bone conduction" },
      { strong: "Companion app", text: "Matching faces→names and objects (objects mode inspired by VITAS Director)" },
    ],
    links: [
      { href: "https://www.youtube.com/watch?v=kr45kQ00uWc&ab_channel=VedantSubramanian", label: "YouTube Demo" },
      { href: "https://devpost.com/software/thi-k-clear", label: "Devpost" },
    ],
  },
  {
    imageSrc: "/campus-life-app.png",
    imageAlt: "CampusLife family wellness app interface",
    title: "CampusLife",
    tags: ["React Native", "Node.js", "Expo"],
    story:
      "I met Ronald at M&TSI and we instantly became best friends. After struggling through the program together, we knew we wanted to start something meaningful. We coded tirelessly in Node.js to create CampusLife, a family wellness tracker that focuses on connection over transactions. The app gamifies healthy habits while helping families stay connected through support messages, care packages, and wellness monitoring.",
    bullets: [
      { strong: "Core Features", text: "Sleep, meal, exercise tracking with family connection features" },
      { strong: "Gamification", text: "Levels (Freshman → Graduate), streaks, achievements, and family support" },
      { strong: "Tech Stack", text: "React Native, Expo, planned Supabase backend" },
    ],
    links: [
      { href: "https://github.com/kentsubra71/campus-life", label: "GitHub" },
    ],
  },
  {
    imageSrc: "/rally-trophy.jpg",
    imageAlt: "3D-printed Rally app trophy",
    title: "Rally",
    tags: ["PHP", "HTML", "CSS"],
    story:
      "Our athletics department wanted fuller stands, so in Advanced CS we built Rally. Students check in at games and earn more points for the less-attended ones. My favorite part was the redemption flow: our random code meant nothing. Staff just checked the moving seconds bar to make sure it wasn't a recording, then entered a preset code to deduct from the athletics budget.",
    bullets: [
      { strong: "Adoption", text: ">50% of the student body signed up" },
      { strong: "Perks", text: "Breakfast coupons, school store credits, skip-the-line pass" },
      { strong: "Culture", text: "Year-end ESPY-style awards; 3D powder-printed trophies" },
    ],
  },
];