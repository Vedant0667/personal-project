"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectModal } from "@/components/ui/project-modal"
import { projects } from "@/data/projects"
import {
  ArrowUpRight,
  Smartphone,
  Globe,
  HeartHandshake,
  Cpu,
  type LucideIcon,
} from "lucide-react"

const indexed = projects.map((p, i) => ({ ...p, originalIndex: i }))
type IndexedProject = (typeof indexed)[number]

const flagships = indexed.filter((p) => p.featured)
const supporting = indexed.filter((p) => !p.featured)

const cardReveal = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 20 },
  },
}

function liveLabel(project: IndexedProject) {
  const store = project.links?.find((l) => /app store/i.test(l.label))
  if (store) return "On the App Store"
  const site = project.links?.find((l) => /website/i.test(l.label))
  if (site) return "Live"
  return null
}

// Medium-of-the-work symbols that sit beside the project name. Driven by the
// existing category field; an App Store link adds the store mark alongside the
// platform symbol (a shipped iOS app reads as phone + Apple).
type BadgeSymbol = { Icon: LucideIcon; label: string }

function typeBadges(project: IndexedProject): BadgeSymbol[] {
  switch (project.category) {
    case "Mobile":
      return [{ Icon: Smartphone, label: "iOS app" }]
    case "Web":
      return [{ Icon: Globe, label: "Web app" }]
    case "Nonprofit":
      return [{ Icon: HeartHandshake, label: "Nonprofit" }]
    case "Hardware":
      return [{ Icon: Cpu, label: "Hardware" }]
    default:
      return []
  }
}

function TypeBadge({ project, box = 30 }: { project: IndexedProject; box?: number }) {
  const symbols = typeBadges(project)
  if (symbols.length === 0) return null
  const icon = Math.round(box * 0.52)
  return (
    <span
      className="flex shrink-0 items-center gap-1.5"
      // Optical nudge: center the boxes on the display serif's cap height
      // rather than its taller line-box center.
      style={{ transform: `translateY(${box * 0.06}px)` }}
    >
      {symbols.map(({ Icon, label }) => (
        <span
          key={label}
          className="grid place-items-center rounded-[0.55rem] border border-hairline text-accent-ink"
          style={{ width: box, height: box }}
          role="img"
          aria-label={label}
        >
          <Icon style={{ width: icon, height: icon }} strokeWidth={1.75} aria-hidden>
            <title>{label}</title>
          </Icon>
        </span>
      ))}
    </span>
  )
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section
      id="projects"
      className="w-full border-t border-hairline bg-bg px-5 py-24 sm:px-8 md:py-32 lg:px-10"
    >
      {/* Section header */}
      <div className="mx-auto mb-14 flex max-w-[78rem] flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-accent-ink">
            Selected work
          </p>
          <h2 className="display-soft text-[clamp(2.5rem,6vw,4rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink">
            Six things worth
            <br />
            <span
              className="italic"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1, "opsz" 144' }}
            >
              showing.
            </span>
          </h2>
        </div>
      </div>

      {/* Flagship work — alternating editorial rows */}
      <div className="mx-auto flex max-w-[78rem] flex-col gap-16 md:gap-24">
        {flagships.map((project, i) => (
          <FlagshipRow
            key={project.title}
            project={project}
            index={i}
            reverse={i % 2 === 1}
            onOpen={() => setSelectedProject(project.originalIndex)}
          />
        ))}
      </div>

      {/* Supporting work */}
      {supporting.length > 0 && (
        <div className="mx-auto mt-24 max-w-[78rem] md:mt-32">
          <div className="mb-10 flex items-center gap-5">
            <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-muted">
              Also worth a look
            </h3>
            <div className="h-px flex-1 bg-hairline" />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {supporting.map((project) => (
              <SupportingCard
                key={project.title}
                project={project}
                onOpen={() => setSelectedProject(project.originalIndex)}
              />
            ))}
          </div>
        </div>
      )}

      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          imageUrl={projects[selectedProject].imageSrc}
          imageAlt={projects[selectedProject].imageAlt}
          title={projects[selectedProject].title}
          tags={projects[selectedProject].tags}
          story={projects[selectedProject].story}
          bullets={projects[selectedProject].bullets}
          links={projects[selectedProject].links}
          imagePosition={projects[selectedProject].modalImagePosition ?? projects[selectedProject].imagePosition}
        />
      )}
    </section>
  )
}

/* ---------------------------------------------------------------- */

function FlagshipRow({
  project,
  index,
  reverse,
  onOpen,
}: {
  project: IndexedProject
  index: number
  reverse?: boolean
  onOpen: () => void
}) {
  const live = liveLabel(project)

  return (
    <motion.article
      variants={cardReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${project.title}, view details`}
      className="group grid cursor-pointer grid-cols-1 items-center gap-7 rounded-[1.25rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:gap-12 lg:grid-cols-2"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-[1.25rem] border border-hairline bg-sunken shadow-editorial transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:shadow-editorial-lg ${
          reverse ? "lg:order-2" : ""
        }`}
      >
        <div className="relative aspect-[16/10] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover ${
              project.imagePosition ?? "object-center"
            } transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
        </div>
        {live && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface/90 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-accent-ink backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {live}
          </span>
        )}
      </div>

      {/* Copy */}
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-display text-[2rem] font-normal leading-tight tracking-[-0.01em] text-ink md:text-[2.5rem]">
              {project.title}
            </h3>
            <TypeBadge project={project} box={34} />
          </div>
          <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>

        <p className="mt-4 max-w-[34rem] text-[1.02rem] leading-relaxed text-muted">
          {project.summary ?? project.story}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
          {project.tags?.map((tag, ti) => (
            <span
              key={tag}
              className="text-[0.8rem] font-medium tracking-wide text-ink/55"
            >
              {ti > 0 && (
                <span className="mr-6 select-none text-hairline-strong" aria-hidden>
                  ·
                </span>
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function SupportingCard({
  project,
  onOpen,
}: {
  project: IndexedProject
  onOpen: () => void
}) {
  return (
    <motion.article
      variants={cardReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${project.title}, view details`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[1.25rem] border border-hairline bg-surface shadow-editorial transition-[transform,box-shadow,border-color] duration-400 hover:-translate-y-1 hover:border-hairline-strong hover:shadow-editorial-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sunken">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover ${
            project.imagePosition ?? "object-center"
          } transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <h3 className="font-display text-[1.6rem] font-normal leading-tight tracking-[-0.01em] text-ink">
              {project.title}
            </h3>
            <TypeBadge project={project} box={28} />
          </div>
          <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-muted transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          {project.summary ?? project.story}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
          {project.tags?.map((tag, ti) => (
            <span
              key={tag}
              className="text-[0.78rem] font-medium tracking-wide text-ink/55"
            >
              {ti > 0 && (
                <span className="mr-5 select-none text-hairline-strong" aria-hidden>
                  ·
                </span>
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
