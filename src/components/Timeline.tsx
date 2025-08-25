"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";

/**
 * === TUNING KNOBS ===
 * Milestones: where each age should be fully solid.
 * Crossfade widths: how wide the in/out ramps are around each milestone.
 * StickyOffset: vertical offset for the sticky panel from top of viewport.
 */
const _MILESTONE_9 = 0.20;
const _MILESTONE_14 = 0.50;
const _MILESTONE_17 = 0.83;

const _CROSS_IN = 0.18;   // how far before the milestone it fades IN
const _CROSS_OUT = 0.18;  // how far after the milestone it fades OUT

const STICKY_OFFSET_VH = 25; // sticky top offset in viewport height

const journeyData = [
  { id: 1, year: "2017", age: 9,  title: "First YouTube Channel",
    description: "Started creating guitar tutorials with my iPad mini and iMovie — the spark that started everything",
    color: "#ef4444" },
  { id: 2, year: "2020", age: 12, title: "Business Inspiration",
    description: "Watching my dad lead client calls and manage teams — I started understanding what real leadership looks like",
    color: "#f97316" },
  { id: 3, year: "2022", age: 14, title: "First Organization: Shelter Aid TX",
    description: "Founded my first nonprofit to donate shoes to shelters across DFW, inspired by my dad's approach to building relationships",
    color: "#22c55e" },
  { id: 4, year: "2022", age: 14, title: "First Big Coding Project: Rally",
    description: "Built school attendance app adopted by 50%+ of student body — my first taste of real product impact",
    color: "#3b82f6" },
  { id: 5, year: "2025", age: 17, title: "Innovation at M&TSI: THIɅK Clear",
    description: "Created memory-aid glasses with bone conduction at UPenn — learned how to turn crazy ideas into working prototypes",
    color: "#8b5cf6" },
  { id: 6, year: "2025", age: 17, title: "Scaling Up: CampusLife & Content",
    description: "Co-built family wellness app and grew content to 700k+ views — combining technical skills with audience building",
    color: "#f59e0b" },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress only for this section. Simple + fast.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Left path fill (optional but cheap)
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Number readout snaps at the same anchors you’ve been using
  const currentAge = useTransform(
    scrollYProgress,
    [0.2, 0.33, 0.5, 0.66, 0.83, 1],
    [9,    12,   14,  14,  17,   17],
    { clamp: true }
  );
  const currentYear = useTransform(
    scrollYProgress,
    [0.2, 0.33, 0.5, 0.66, 0.83, 1],
    [2017, 2020, 2022, 2022, 2025, 2025],
    { clamp: true }
  );

  /**
   * Overlapping crossfades that match the age/year number transitions:
   * Each image fades out as the next fades in at the exact same scroll position.
   */
  const age9Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2, 0.5],
    [0, 1,   1,    0]
  );
  const age14Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.5, 0.83],
    [0,    1,   1,    0]
  );
  const age17Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.83, 1],
    [0,    1,    1]
  );

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="w-full pt-20 pb-20 sm:pt-24 relative" // NOTE: no overflow-hidden; sticky needs visible overflow up the chain
      style={{
        backgroundColor: "#FFFBEB",
      }}
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">My Journey</h2>
            <p className="text-lg text-slate-600">From a 9-year-old creator to building solutions that impact thousands</p>
          </div>
        </Reveal>

        {/* Simple 2-col layout so sticky is painless */}
        <div className="grid grid-cols-12 gap-8">
          {/* LEFT: timeline */}
          <div className="col-span-12 lg:col-span-7 relative">
            {/* Vertical path (cheap) */}
            <div className="absolute left-0 top-0 w-0.5 h-full bg-slate-200 rounded-full">
              <motion.div
                className="w-full bg-amber-400 rounded-full"
                style={{ height: pathHeight }}
              />
            </div>

            {/* Cards with reveal animations */}
            <div className="ml-6 space-y-12">
              {journeyData.map((point, index) => (
                <Reveal key={point.id} delay={index * 0.1}>
                  <div className="relative">
                    {/* Dot */}
                    <div
                      className="absolute -left-3 w-4 h-4 rounded-full border-4 border-white shadow z-10"
                      style={{ backgroundColor: point.color }}
                    />
                    {/* Card */}
                    <div className="ml-6 rounded-2xl border border-amber-200 bg-[#FFFDF2] p-6 max-w-xl hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: point.color }} />
                        <span className="text-sm font-mono text-slate-600">{point.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{point.title}</h3>
                      <p className="text-slate-700">{point.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT: sticky panel (behaves fixed inside section, releases at bottom) */}
          <div
            className="col-span-12 lg:col-span-5 self-start"
            style={{ position: "sticky", top: `${STICKY_OFFSET_VH}vh` }}
          >
            {/* Age / Year - Desktop only */}
            <motion.div 
              className="hidden lg:block mb-8 text-center lg:text-right"
              style={{ 
                opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1])
              }}
            >
              <motion.span className="text-6xl font-bold text-orange-500">
                {useTransform(currentAge, (v) => Math.round(v))}
              </motion.span>
              <span className="text-5xl text-orange-500 mx-4">•</span>
              <motion.span className="text-5xl font-medium text-orange-500">
                {useTransform(currentYear, (v) => Math.round(v))}
              </motion.span>
            </motion.div>

            {/* Photos (stacked crossfade) - Desktop only */}
            <div className="hidden lg:block relative w-80 h-80 lg:ml-auto lg:mr-0 mx-auto">
              <motion.img
                src="/age-9-photo.jpg"
                alt="Age 9"
                className="absolute inset-0 w-80 h-80 rounded-2xl object-cover"
                style={{ opacity: age9Opacity }}
              />
              <motion.img
                src="/age-14-photo.jpg"
                alt="Age 14"
                className="absolute inset-0 w-80 h-80 rounded-2xl object-cover"
                style={{ opacity: age14Opacity }}
              />
              <motion.img
                src="/age-17-photo.jpg"
                alt="Age 17"
                className="absolute inset-0 w-80 h-80 rounded-2xl object-cover"
                style={{ opacity: age17Opacity }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { journeyData };
