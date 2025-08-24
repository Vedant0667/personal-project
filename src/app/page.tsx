import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Timeline from "@/components/ClientTimelineWrapper";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavBar />

      <Hero />

      <Timeline />

      <SectionDivider />

      <Section id="projects" title="Projects">
        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Achievements />

      <Contact />

      <footer className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-slate-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Vedant Subramanian</p>
            <p className="text-slate-500">Built with Next.js + Tailwind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}