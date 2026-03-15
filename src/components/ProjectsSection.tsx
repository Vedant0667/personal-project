"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/ui/project-card"
import { ProjectModal } from "@/components/ui/project-modal"
import { projects } from "@/data/projects"
import { Building2, Code, Laptop, Smartphone, Brain, Trophy, BookOpen, Video, Mic } from "lucide-react"

const projectIcons: Record<number, React.ReactNode> = {
  0: <Building2 className="h-5 w-5 text-white" />,
  1: <Laptop className="h-5 w-5 text-white" />,
  2: <Brain className="h-5 w-5 text-white" />,
  3: <Smartphone className="h-5 w-5 text-white" />,
  4: <Code className="h-5 w-5 text-white" />,
  5: <Trophy className="h-5 w-5 text-orange-300" />,
  6: <BookOpen className="h-5 w-5 text-white" />,
  7: <Mic className="h-5 w-5 text-white" />,
  8: <Video className="h-5 w-5 text-orange-300" />,
}

type FilterCategory = "All" | "Web" | "Mobile" | "Nonprofit" | "Hardware" | "Research" | "Creative"

const projectCategories: Record<number, FilterCategory> = {
  0: "Nonprofit",
  1: "Web",
  2: "Hardware",
  3: "Mobile",
  4: "Web",
  5: "Web",
  6: "Research",
  7: "Web",
  8: "Creative",
}

const filterTabs: FilterCategory[] = ["All", "Web", "Mobile", "Nonprofit", "Hardware", "Research", "Creative"]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All")

  const visibleProjects = projects
    .map((p, i) => ({ ...p, originalIndex: i }))
    .filter((p) => activeFilter === "All" || projectCategories[p.originalIndex] === activeFilter)

  return (
    <div id="projects" className="w-full bg-black dark:bg-[#FFF9F0] py-20 px-4 md:px-8 lg:px-10 transition-colors">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="font-sans text-lg md:text-4xl mb-4 text-[#FFFBEB] dark:text-black max-w-4xl">
          Featured Projects
        </h2>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-sm md:text-base max-w-2xl mb-8">
          From nonprofits to hardware prototypes, here&apos;s what I&apos;ve been building.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                activeFilter === tab
                  ? "bg-amber-400 text-black"
                  : "border border-[#FFFBEB]/15 dark:border-black/15 text-[#FFFBEB]/50 dark:text-black/50 hover:border-[#FFFBEB]/40 dark:hover:border-black/40 hover:text-[#FFFBEB] dark:hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            imageUrl={project.imageSrc}
            imageAlt={project.imageAlt}
            icon={projectIcons[project.originalIndex]}
            title={project.title}
            tags={project.tags}
            summary={project.summary}
            story={project.story}
            onExpand={() => setSelectedProject(project.originalIndex)}
            imagePosition={project.imagePosition}
          />
        ))}
      </div>

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
          imagePosition={projects[selectedProject].imagePosition}
        />
      )}
    </div>
  )
}
