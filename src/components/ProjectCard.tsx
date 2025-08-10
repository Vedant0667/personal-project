"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Lightbox from "@/components/Lightbox";
import Tag from "@/components/Tag";

type Bullet = { strong?: string; text: string };
type Link = { href: string; label: string };

export type ProjectProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  story: string;
  bullets?: Bullet[];
  links?: Link[];
  tags?: string[];
};

export default function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  story,
  bullets = [],
  links = [],
  tags = [],
}: ProjectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <article
        className="rounded-2xl shadow-sm ring-1 ring-amber-200 p-5 sm:p-6 hover:shadow-md transition sm:flex sm:gap-5 sm:items-stretch"
        style={{ backgroundColor: "#FFFDF2" }}
      >
        <div
          className="relative rounded-xl overflow-hidden cursor-zoom-in sm:basis-1/2 sm:self-stretch w-full h-[220px] sm:h-auto sm:min-h-[260px] sm:max-h-[520px]"
          style={{ aspectRatio: `${imageSrc.width}/${imageSrc.height}` }}
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

        <div className="sm:basis-1/2 mt-4 sm:mt-0 flex flex-col">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">
            {title}
          </h3>

          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t, i) => <Tag key={i} label={t} />)}
            </div>
          )}

          <p className="mt-3 text-slate-700 leading-relaxed">{story}</p>

          {bullets.length > 0 && (
            <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
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
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm ring-1 ring-orange-200 text-orange-800 hover:bg-orange-50 font-mono-var"
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
