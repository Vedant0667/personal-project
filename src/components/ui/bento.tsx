"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(300px,auto)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  year,
  story,
  bullets,
  links,
  tags,
  header,
  overlayHeight = "h-3/4",
}: {
  className?: string
  title?: string | ReactNode
  year?: string
  story?: string
  bullets?: Array<{ strong?: string; text: string }>
  links?: Array<{ href: string; label: string; kind?: string }>
  tags?: string[]
  header?: ReactNode
  overlayHeight?: string
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-xl group/bento transition duration-200 relative overflow-hidden border border-white/[0.08]",
        "hover:border-white/[0.15] min-h-[500px]",
        className
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background image - fills entire card */}
      {header}

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Gradient fade for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-20" />

      {/* Content - positioned at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-30 p-6 flex flex-col justify-end">
        {/* Title and Year */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-sans font-bold text-[#FFFBEB] text-lg">
            {title}
          </h3>
          {year && (
            <span className="text-xs px-2 py-1 rounded-full bg-[#FFFBEB]/10 text-[#FFFBEB] border border-[#FFFBEB]/20 shrink-0 ml-2 backdrop-blur-sm">
              {year}
            </span>
          )}
        </div>

        {/* Story */}
        {story && (
          <p className="font-sans text-neutral-300 text-sm mb-4 leading-relaxed">
            {story}
          </p>
        )}

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <ul className="space-y-2 mb-4">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="text-sm text-neutral-400">
                {bullet.strong && (
                  <span className="font-semibold text-neutral-300">{bullet.strong}: </span>
                )}
                {bullet.text}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-white/[0.1] text-neutral-300 border border-white/[0.15] backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.15]">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40 hover:bg-orange-500/30 hover:border-orange-500/60 transition-all duration-200 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
