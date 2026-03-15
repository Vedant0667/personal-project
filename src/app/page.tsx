"use client";

import Hero from "@/components/Hero";
import JourneyTimeline from "@/components/JourneyTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import Achievements from "@/components/Achievements";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <JourneyTimeline />
      <ProjectsSection />
      <Achievements />
      <ContactSection />
    </div>
  );
}