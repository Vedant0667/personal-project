import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Achievements from "@/components/Achievements";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Soft seam between hero and highlights */}
      <SectionDivider />

      <Achievements />

      <Section id="projects" title="Projects">
        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="mailto:vedant.subramanian@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 text-white px-5 py-2.5 text-sm hover:bg-orange-700"
          >
            Email me
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          This page supplements my Common App. Links provide verification.
        </p>
      </Section>

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
