"use client";

import React from "react";
import Section from "@/components/Section";
import { achievements } from "@/data/Achievements";

export default function Achievements() {
  return (
    <Section id="achievements" title="Highlights">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {achievements.map((a) => (
          <li
            key={a.title}
            className="rounded-2xl ring-1 ring-amber-200 shadow-sm transition hover:shadow-md hover:ring-2"
            style={{ backgroundColor: "#FFFDF2" }}
          >
            <div className="p-4">
              <span className="font-mono-var inline-flex items-center rounded-full px-2 py-0.5 text-[11px] uppercase tracking-wide ring-1 bg-amber-100 text-amber-900 ring-amber-200">
                {a.kicker}
              </span>

              <div className="font-display mt-2 text-[18px] font-semibold text-slate-900">
                {a.title}
              </div>

              {a.detail && (
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {a.detail}
                </p>
              )}

              {a.link && (
                <a
                  href={a.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center rounded-full px-3 py-1.5 text-sm text-orange-800 ring-1 ring-orange-200 hover:bg-orange-50"
                >
                  {a.link.label}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
