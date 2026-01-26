"use client";

import Hero from "@/components/Hero";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsSection from "@/components/ProjectsSection";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <JourneyTimeline />
      <ProjectsSection />
    </div>
  );
}