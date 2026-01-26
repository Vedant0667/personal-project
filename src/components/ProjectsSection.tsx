"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/ui/project-card"
import { ProjectModal } from "@/components/ui/project-modal"
import { projects } from "@/data/projects"
import { Building2, Code, Laptop, Smartphone, Brain, Trophy, BookOpen, Video } from "lucide-react"

const projectIcons: Record<number, React.ReactNode> = {
  0: <Building2 className="h-5 w-5 text-white" />,
  1: <Laptop className="h-5 w-5 text-white" />,
  2: <Brain className="h-5 w-5 text-white" />,
  3: <Smartphone className="h-5 w-5 text-white" />,
  4: <Code className="h-5 w-5 text-white" />,
  5: <Trophy className="h-5 w-5 text-orange-300" />,
  6: <BookOpen className="h-5 w-5 text-white" />,
  7: <Video className="h-5 w-5 text-orange-300" />,
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="w-full bg-black dark:bg-[#FFF9F0] py-20 px-4 md:px-8 lg:px-10 transition-colors">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="font-sans text-lg md:text-4xl mb-4 text-[#FFFBEB] dark:text-black max-w-4xl">
          Featured Projects
        </h2>
        <p className="font-sans text-[#FFFBEB] dark:text-black text-sm md:text-base max-w-2xl">
          From nonprofits to hardware prototypes, here's what I've been building.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            imageUrl={project.imageSrc}
            imageAlt={project.imageAlt}
            icon={projectIcons[index]}
            title={project.title}
            tags={project.tags}
            summary={project.summary}
            story={project.story}
            onExpand={() => setSelectedProject(index)}
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
        />
      )}
    </div>
  )
}
