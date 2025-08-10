"use client";

import React from "react";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="w-full">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        {title && (
          <header className="mb-6 sm:mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
