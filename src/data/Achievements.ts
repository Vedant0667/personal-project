export type Achievement = {
  kicker: string;
  title: string;
  detail?: string;
  link?: { href: string; label: string };
};

export const achievements: Achievement[] = [
  {
    kicker: "SpinSci Hackathon",
    title: "2nd of 13 teams — Canary ($2,500)",
    detail: "Built Canary, a CHF hospital-at-home monitoring tool, with Tarik Syed (Duke) and Aamir Tinwala (Stanford); 2nd of 13 teams and a $2,500 prize. I led all technical development.",
    link: { href: "https://prod.spinsci.ai", label: "SpinSci hackathon" },
  },
  {
    kicker: "Funding",
    title: "$7,000 pitch grant",
    detail: "Largest award at school pitch night for ops & storage expansion.",
    link: {
      href: "https://issuu.com/greenhill_school/docs/ghs-thehill-2024-final-digital-reduced/46",
      label: "Greenhill Magazine (Pg 46)",
    },
  },
  {
    kicker: "UPenn M&TSI",
    title: "Selected (≈3% acceptance)",
    detail: "Built THIɅK Clear prototype with bone-conduction frames and companion webapp.",
    link: { href: "https://fisher.wharton.upenn.edu/management-technology-summer-institute/", label: "Program Info" },
  },
  {
    kicker: "Math",
    title: "Barbara Currier Doubler Award",
    detail: "Proficiency in two advanced math courses taken concurrently; awarded to 1-2 students annually.",
  },
];
