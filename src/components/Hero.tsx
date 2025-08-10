"use client";

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      {/* Transparent; background comes from <body> */}
      <div className="relative mx-auto max-w-3xl px-5 pt-16 pb-16 sm:pt-24 sm:pb-20 text-center">
        <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-white/70 ring-1 ring-amber-200 shadow">
          <span className="text-slate-500 text-sm">Headshot</span>
        </div>

        <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-100/70 px-4 py-1.5 text-sm text-orange-900 font-mono-var">
          student @ Greenhill School
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
          Vedant Subramanian
        </h1>

        <div className="mt-8">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-orange-300 bg-orange-600 px-5 py-2.5 text-sm text-white shadow hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-200"
          >
            Explore my work
          </a>
        </div>
      </div>
    </section>
  );
}
