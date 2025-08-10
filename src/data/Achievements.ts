export type Achievement = {
  kicker: string;
  title: string;
  detail?: string;
  link?: { href: string; label: string };
  color?: "amber" | "orange" | "cream";
};

export const achievements: Achievement[] = [
  {
    kicker: "Funding",
    title: "$7,000 pitch grant",
    detail: "Largest award at school pitch night for ops & storage expansion.",
    link: {
      href: "https://issuu.com/greenhill_school/docs/ghs-thehill-2024-final-digital-reduced/46",
      label: "Greenhill Magazine (Pg 46)",
    },
    color: "amber",
  },
  {
    kicker: "UPenn M&TSI",
    title: "Selected (≈3% acceptance)",
    detail: "Built THIɅK Clear prototype with bone-conduction frames and companion app.",
    link: { href: "https://fisher.wharton.upenn.edu/management-technology-summer-institute/", label: "Program Info" },
    color: "cream",
  },
  {
    kicker: "Robotics (FTC)",
    title: "State qualifier 2022-2023",
    detail: "Advanced to state in FIRST Tech Challenge.",
    link: { href: "https://ftc-events.firstinspires.org/team/9045", label: "Team Profile" },
    color: "orange",
  },
  {
    kicker: "Math",
    title: "Barbara Currier Doubler Award",
    detail: "Proficiency in two advanced math courses taken concurrently; awarded to 1-2 students annually.",
    color: "cream",
  },
  {
    kicker: "Journalism",
    title: "CSPA Silver Crown Award 2025",
    detail: "National recognition for overall excellence in high school print journalism.",
    link: { href: "https://precollege.sps.columbia.edu/news/announcing-2025-silver-and-gold-crown-awardees", label: "Crown Awards" },
    color: "orange",
  },
];
