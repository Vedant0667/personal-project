"use client";

import React from "react";

export const TAG_STYLES: Record<string, string> = {
  Nonprofit: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  Operations: "bg-amber-100 text-amber-800 ring-amber-200",
  Community: "bg-sky-100 text-sky-800 ring-sky-200",
  PHP: "bg-indigo-100 text-indigo-800 ring-indigo-200",
  HTML: "bg-fuchsia-100 text-fuchsia-800 ring-fuchsia-200",
  CSS: "bg-cyan-100 text-cyan-800 ring-cyan-200",
  Python: "bg-rose-100 text-rose-800 ring-rose-200",
  "Next.js": "bg-teal-100 text-teal-800 ring-teal-200",
  "React Native": "bg-blue-100 text-blue-800 ring-blue-200",
  "Node.js": "bg-green-100 text-green-800 ring-green-200",
  "Expo": "bg-purple-100 text-purple-800 ring-purple-200",
  Economics: "bg-lime-100 text-lime-800 ring-lime-200",
  "Policy Analysis": "bg-orange-100 text-orange-800 ring-orange-200",
};

export default function Tag({ label }: { label: string }) {
  const cls = TAG_STYLES[label] || "bg-gray-100 text-gray-800 ring-gray-200";
  return <span className={`text-xs px-2 py-1 rounded-full ring-1 ${cls}`}>{label}</span>;
}
