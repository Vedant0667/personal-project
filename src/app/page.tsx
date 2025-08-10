"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import shelteraidCheck from "@/app/assets/shelteraid-check.webp";
import rallyTrophy from "@/app/assets/rally-trophy.jpg";
import thinkclearFrames from "@/app/assets/thinkclear-frames.jpg";

/* ---------- Tag Styles ---------- */
const TAG_STYLES: Record<string, string> = {
  Nonprofit: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  Operations: "bg-amber-100 text-amber-800 ring-amber-200",
  Community: "bg-sky-100 text-sky-800 ring-sky-200",
  PHP: "bg-indigo-100 text-indigo-800 ring-indigo-200",
  HTML: "bg-fuchsia-100 text-fuchsia-800 ring-fuchsia-200",
  CSS: "bg-cyan-100 text-cyan-800 ring-cyan-200",
  Python: "bg-rose-100 text-rose-800 ring-rose-200",
  "Next.js": "bg-teal-100 text-teal-800 ring-teal-200",
  Economics: "bg-lime-100 text-lime-800 ring-lime-200",
  "Policy Analysis": "bg-orange-100 text-orange-800 ring-orange-200",
};

function Tag({ label }: { label: string }) {
  const cls = TAG_STYLES[label] || "bg-gray-100 text-gray-800 ring-gray-200";
  return <span className={`text-xs px-2 py-1 rounded-full ring-1 ${cls}`}>{label}</span>;
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        {title && (
          <header className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------- Lightbox (full-viewport + Fit/Fill toggle) ---------- */
function Lightbox({
  open,
  onClose,
  src,
  alt,
}: {
  open: boolean;
  onClose: () => void;
  src: StaticImageData | null;
  alt: string;
}) {
  const [mode, setMode] = React.useState<"fit" | "fill">("fill"); // default: fill to hide page margins

  // reset mode on open
  React.useEffect(() => {
    if (open) setMode("fill");
  }, [open]);

  // Lock body scroll while open
  React.useEffect(() => {
    if (!open) return;
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, [open]);

  // ESC to close
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Controls */}
      <div className="absolute top-3 right-3 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMode((m) => (m === "fit" ? "fill" : "fit"));
          }}
          className="rounded-full bg-white/95 text-gray-900 px-3 py-1 text-sm shadow"
        >
          {mode === "fit" ? "Fill" : "Fit"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="rounded-full bg-white/95 text-gray-900 px-3 py-1 text-sm shadow"
        >
          Close
        </button>
      </div>

      {/* Image area with extra transparent space at bottom */}
      <div
        className="w-screen h-screen flex items-center justify-center p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full pb-[5vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className={`${mode === "fit" ? "object-contain" : "object-cover"} rounded-lg`}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- Project Card (image height matches/clamped to text) ---------- */
function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  story,
  bullets = [],
  links = [],
  tags = [],
}: {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  story: string;
  bullets?: { strong?: string; text: string }[];
  links?: { href: string; label: string }[];
  tags?: string[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <article
        className="
          bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-5 sm:p-6 hover:shadow-md transition
          sm:flex sm:gap-5 sm:items-stretch
        "
      >
        {/* Image column — fills and clamps to keep parity with text column */}
        <div
          className="
            relative rounded-xl overflow-hidden
            sm:basis-1/2 sm:self-stretch
            w-full h-[220px] sm:h-auto
            sm:min-h-[260px] sm:max-h-[520px]
          "
          onClick={() => setOpen(true)}
          role="button"
          aria-label="Expand image"
          title="Click to expand"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        {/* Text column */}
        <div className="sm:basis-1/2 mt-4 sm:mt-0 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h3>

          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <Tag key={i} label={t} />
              ))}
            </div>
          )}

          <p className="mt-3 text-gray-700 leading-relaxed">{story}</p>

          {bullets.length > 0 && (
            <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700">
              {bullets.map((b, i) => (
                <li key={i}>
                  {b.strong && <span className="font-medium">{b.strong}: </span>}
                  {b.text}
                </li>
              ))}
            </ul>
          )}

          {links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ring-1 ring-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </article>

      <Lightbox open={open} onClose={() => setOpen(false)} src={imageSrc} alt={imageAlt} />
    </>
  );
}

/* ---------- Page ---------- */
export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero */}
      <section id="home" className="w-full">
        <div className="mx-auto max-w-3xl px-5 pt-20 pb-10 sm:pt-24 sm:pb-12 text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow ring-1 ring-gray-200 mx-auto mb-5 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Headshot</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-blue-700">
            Hi, I’m Vedant Subramanian
          </h1>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="What I built, why I started, and what happened.">
        <div className="space-y-8">
          {/* Shelter Aid TX */}
          <ProjectCard
            imageSrc={shelteraidCheck}
            imageAlt="Vedant Subramanian presenting $7,000 check for Shelter Aid TX"
            title="Shelter Aid TX"
            tags={["Nonprofit", "Operations", "Community"]}
            story={
              "Shelters kept telling me the same thing: they needed shoes. After cold-calling ~50 shelters across DFW and hearing that ~75% ranked shoes among the biggest needs, I started Shelter Aid TX. I designed a ‘shoe match’ system so donations aren’t random; the right pairs go to the right shelters. I run ops and partnerships, and I’m scoping an app to replace our Google Sheets tracking."
            }
            bullets={[
              { strong: "Impact", text: "1000+ shoes donated; 7+ shelters served" },
              {
                strong: "Partners",
                text:
                  "Fleet Feet Plano & Preston/Forest; CISV Dallas youth project; Greenhill annual drives; Prince of Peace Plano XC drive",
              },
              { strong: "Funding", text: "$7,000 from a school pitch competition" },
            ]}
            links={[
              { href: "https://shelteraidtx.org", label: "Website" },
              {
                href: "https://fliphtml5.com/mtkni/tcxh/Investing_in_Education_100624/",
                label: "Dallas Morning News feature (Pg 22)",
              },
            ]}
          />

          {/* Rally */}
          <ProjectCard
            imageSrc={rallyTrophy}
            imageAlt="3D-printed Rally app trophy"
            title="Rally"
            tags={["PHP", "HTML", "CSS"]}
            story={
              "Our athletics department wanted fuller stands, so in Advanced CS we built Rally. Students check in at games and earn more points for the less-attended ones. My favorite part was the redemption flow: our random code meant nothing — staff just checked the moving seconds bar to make sure it wasn’t a recording, then entered a preset code to deduct from the athletics budget."
            }
            bullets={[
              { strong: "Adoption", text: ">50% of the student body signed up" },
              { strong: "Perks", text: "Breakfast coupons, school store credits, skip-the-line pass" },
              { strong: "Culture", text: "Year-end ESPY-style awards; 3D powder-printed trophies" },
            ]}
          />

          {/* THINK Clear */}
          <ProjectCard
            imageSrc={thinkclearFrames}
            imageAlt="THIɅK Clear prototype glasses"
            title="THIɅK Clear"
            tags={["Python", "Next.js"]}
            story={
              "At UPenn’s M&TSI, our team kept circling one idea we loved: glasses that help with memory cues. We surveyed 60+ people and spoke with industry folks — including Raj Amin and a former Fort Worth VITAS Medical Director — plus a local nursing home director. We built sleek frames with bone conduction so names can be delivered even with some hearing loss, and a companion matching game to reinforce faces and objects. I led market research, financial modeling, and produced our marketing video."
            }
            bullets={[
              { strong: "Core flow", text: "See a person → name is sent via bone conduction" },
              { strong: "Companion app", text: "Matching faces→names and objects (objects mode inspired by VITAS Director)" },
            ]}
            links={[
              {
                href: "https://www.youtube.com/watch?v=kr45kQ00uWc&ab_channel=VedantSubramanian",
                label: "YouTube Demo",
              },
              { href: "https://devpost.com/software/thi-k-clear", label: "Devpost" },
            ]}
          />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Happy to connect.">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="mailto:vedant.subramanian@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm hover:bg-blue-700"
          >
            Email me
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          This page supplements my Common App. Links provide verification.
        </p>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Vedant Subramanian</p>
            <p className="text-gray-500">Built with Next.js + Tailwind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
