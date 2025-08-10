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
    detail: "Largest award at school pitch night; used for ops & storage expansion.",
    link: {
      href: "https://fliphtml5.com/mtkni/tcxh/Investing_in_Education_100624/",
      label: "Dallas Morning News (Pg 22)",
    },
    color: "amber",
  },
  {
    kicker: "UPenn M&TSI",
    title: "Selected (≈3% acceptance)",
    detail: "Built THIɅK Clear prototype: bone-conduction frames + reinforcement app.",
    link: { href: "https://devpost.com/software/thi-k-clear", label: "Devpost" },
    color: "cream",
  },
  {
    kicker: "Robotics (FTC)",
    title: "State qualifier",
    detail: "Advanced to state in FIRST Tech Challenge.",
    color: "orange",
  },
  {
    kicker: "Math",
    title: "Doubler Award recipient",
    detail: "Recognized for high-level problem solving and growth.",
    color: "cream",
  },
];
