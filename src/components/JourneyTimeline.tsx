"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, animate } from "framer-motion"
import Image from "next/image"
import { Timeline } from "@/components/ui/timeline"

const _MILESTONE_14 = 0.25
const _MILESTONE_17 = 0.6

const journeyData = [
  {
    title: "2017",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-2xl md:text-3xl mb-6 leading-relaxed">
          Started my first YouTube channel creating guitar tutorials, sparking my love for creating and sharing content.
        </p>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-2xl md:text-3xl mb-6 leading-relaxed">
          Discovered my passion for entrepreneurship and building products that solve real problems.
        </p>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-3xl md:text-4xl font-semibold mb-4">
          First Organization: Shelter Aid TX
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-2xl md:text-3xl mb-12 leading-relaxed">
          Founded Shelter Aid TX, a nonprofit matching shoe donations to shelters across DFW. Raised $7,000 and donated 1200+ shoes.
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-3xl md:text-4xl font-semibold mb-4">
          First Big Coding Project: Rally
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-2xl md:text-3xl leading-relaxed">
          Built Rally, a school attendance app with gamification. Over 50% of the student body signed up.
        </p>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-3xl md:text-4xl font-semibold mb-4">
          Innovation at M&TSI: THIɅK Clear
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-2xl md:text-3xl mb-12 leading-relaxed">
          Created bone-conduction memory glasses at UPenn's M&TSI program, combining hardware and software innovation.
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-3xl md:text-4xl font-semibold mb-4">
          Scaling Up: CampusLife & Content
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-2xl md:text-3xl leading-relaxed">
          Launched CampusLife app on the App Store and grew content creation channels to 600k+ combined views.
        </p>
      </div>
    ),
  },
]

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [displayAge, setDisplayAge] = useState(9)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Image opacity transforms for crossfading
  const opacity9 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    [1, 1, 0]
  )

  const opacity14 = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.55, 0.65],
    [0, 1, 1, 0]
  )

  const opacity17 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 1],
    [0, 1, 1]
  )

  // Count up animation - simple linear mapping from 9 to 17
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // Map scroll progress (0 to 1) directly to age (9 to 17)
      const age = 9 + (latest * 8)
      setDisplayAge(Math.floor(age))
    })
  }, [scrollYProgress])

  return (
    <div className="w-full font-sans pt-32 transition-colors bg-black dark:bg-[#FFF9F0]" ref={containerRef}>
      {/* Header */}
      <div className="w-full py-32 px-12 md:px-24 lg:px-32">
        <h2 className="text-5xl md:text-7xl mb-6 text-[#FFFBEB] dark:text-black font-bold">My Journey</h2>
        <p className="text-[#FFFBEB] dark:text-black text-xl md:text-3xl">From guitar tutorials to building products that matter.</p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left: Sticky photos with age counter */}
        <div className="lg:col-span-5">
          <div className="sticky top-40 flex flex-col items-center space-y-8 px-4">
            {/* Crossfading photos */}
            <div className="relative w-full max-w-md aspect-square">
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden border-2 border-[#FFFBEB]/20 dark:border-[#D4A574]/30"
                style={{ opacity: opacity9 }}
              >
                <Image
                  src="/age-9-photo.webp"
                  alt="Vedant at age 9"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden border-2 border-[#FFFBEB]/20 dark:border-[#D4A574]/30"
                style={{ opacity: opacity14 }}
              >
                <Image
                  src="/age-14-photo.webp"
                  alt="Vedant at age 14"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden border-2 border-[#FFFBEB]/20 dark:border-[#D4A574]/30"
                style={{ opacity: opacity17 }}
              >
                <Image
                  src="/age-17-photo.webp"
                  alt="Vedant at age 17"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Age counter below photos */}
            <div className="text-9xl md:text-[12rem] font-display font-light text-[#f5f5f5]/20 dark:text-black/20 tabular-nums">
              {displayAge}
            </div>
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="lg:col-span-7">
          <Timeline data={journeyData} />
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-96" />
    </div>
  )
}
