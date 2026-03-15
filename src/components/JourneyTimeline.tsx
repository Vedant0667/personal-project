"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

// age 14 = (14-9)/8 = 0.625 along scroll progress
const AGE_14_SCROLL = 0.625

const journeyData = [
  {
    year: "2017",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-lg md:text-xl leading-relaxed">
          Started my first YouTube channel creating guitar tutorials, sparking my love for creating and sharing content.
        </p>
      </div>
    ),
  },
  {
    year: "2020",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-lg md:text-xl leading-relaxed">
          Discovered my passion for entrepreneurship and building products that solve real problems.
        </p>
      </div>
    ),
  },
  {
    year: "2022",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-xl font-semibold mb-2">
          First Organization: Shelter Aid TX
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-lg md:text-xl mb-8 leading-relaxed">
          Founded Shelter Aid TX, a nonprofit matching shoe donations to shelters across DFW. Raised $7,000 and donated 1400+ shoes.
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-xl font-semibold mb-2">
          First Big Coding Project: Rally
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-lg md:text-xl leading-relaxed">
          Built Rally, a school attendance app with gamification. Over 50% of the student body signed up.
        </p>
      </div>
    ),
  },
  {
    year: "2025",
    content: (
      <div>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-xl font-semibold mb-2">
          Innovation at M&amp;TSI: THIɅK Clear
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-lg md:text-xl mb-8 leading-relaxed">
          Created bone-conduction memory glasses at UPenn&apos;s M&amp;TSI program, combining hardware and software innovation.
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-xl font-semibold mb-2">
          Scaling Up: CampusLife &amp; Content
        </p>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-lg md:text-xl leading-relaxed">
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

  // Each photo is fully solid ONLY at its namesake age.
  // Transitions span the full duration between ages.
  const opacity9 = useTransform(scrollYProgress, [0, AGE_14_SCROLL], [1, 0])
  const opacity14 = useTransform(scrollYProgress, [0, AGE_14_SCROLL, 1], [0, 1, 0])
  const opacity17 = useTransform(scrollYProgress, [AGE_14_SCROLL, 1], [0, 1])

  // Amber vertical progress line
  const lineHeight = useTransform(scrollYProgress, [0.02, 0.9], ["0%", "100%"])
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setDisplayAge(Math.min(17, Math.floor(9 + latest * 8)))
    })
  }, [scrollYProgress])

  return (
    <div
      className="w-full font-sans transition-colors bg-black dark:bg-[#FFF9F0]"
      ref={containerRef}
    >
      {/* Header */}
      <div className="w-full pt-24 pb-16 px-8 md:px-16 lg:px-24">
        <p className="text-[10px] uppercase tracking-[0.2em] font-mono-var mb-3 text-amber-400 dark:text-amber-600">
          History
        </p>
        <h2 className="text-4xl md:text-6xl mb-3 text-[#FFFBEB] dark:text-black font-bold">
          My Journey
        </h2>
        <p className="text-[#FFFBEB]/55 dark:text-black/50 text-base md:text-lg max-w-lg">
          From guitar tutorials to building products that matter.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 px-8 md:px-16 lg:px-24">

        {/* Left: Compact sticky photo + age counter */}
        <div className="lg:col-span-3">
          <div className="sticky top-32 flex flex-col items-start space-y-5">

            {/* Photo — fills the column */}
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
              <motion.div
                className="absolute inset-0 border border-[#FFFBEB]/12 dark:border-black/10 rounded-xl overflow-hidden"
                style={{ opacity: opacity9 }}
              >
                <Image src="/age-9-photo.webp" alt="Vedant at age 9" fill className="object-cover object-top scale-[1.07] origin-top" />
              </motion.div>
              <motion.div
                className="absolute inset-0 border border-[#FFFBEB]/12 dark:border-black/10 rounded-xl overflow-hidden"
                style={{ opacity: opacity14 }}
              >
                <Image src="/age-14-photo.webp" alt="Vedant at age 14" fill className="object-cover object-top scale-[1.15] origin-top" />
              </motion.div>
              <motion.div
                className="absolute inset-0 border border-[#FFFBEB]/12 dark:border-black/10 rounded-xl overflow-hidden"
                style={{ opacity: opacity17 }}
              >
                <Image src="/age-17-photo.webp" alt="Vedant at age 17" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Age counter */}
            <div className="text-6xl font-display font-light tabular-nums leading-none select-none text-[#FFFBEB]/14 dark:text-black/10">
              {displayAge}
            </div>
          </div>
        </div>

        {/* Right: Editorial timeline */}
        <div className="lg:col-span-9 relative pb-32">

          {/* Vertical amber progress line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[rgba(245,158,11,0.12)] dark:bg-[rgba(245,158,11,0.20)]">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-400 via-amber-500/50 to-transparent"
              style={{ height: lineHeight, opacity: lineOpacity }}
            />
          </div>

          <div className="pl-8 md:pl-12">
            {journeyData.map((item, idx) => (
              <div key={item.year} className={idx > 0 ? "mt-20 md:mt-28" : ""}>

                {/* Year watermark — increased visibility */}
                <div
                  className="font-mono-var font-bold leading-none select-none pointer-events-none -mb-1 text-white/[0.12] dark:text-black/[0.06]"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
                >
                  {item.year}
                </div>

                {/* Content — amber left-border, no card */}
                <div className="border-l-2 border-[rgba(245,158,11,0.50)] dark:border-[rgba(245,158,11,0.65)] pl-6 md:pl-8 pt-1">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-32" />
    </div>
  )
}
