"use client";

import React, { memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Tag from "@/components/Tag";
import { MArticle, MBox, MSpan, MLink, MLi } from "@/components/motion/Motion";

const Lightbox = dynamic(() => import("@/components/Lightbox"), {
  ssr: false,
});

type Bullet = { strong?: string; text: string };
type Link = { href: string; label: string };

export interface ProjectProps {
  imageSrc: string;   // served from /public
  imageAlt: string;
  title: string;
  story: string;
  bullets?: Bullet[];
  links?: Link[];
  tags?: string[];
}

// Hoist animation variants to avoid inline objects
const containerVariants = {
  hidden: { opacity: 0, y: 52, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 18,
      delayChildren: 0.05,
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const hoverVariants = { 
  y: -5,
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
};

const imageHoverVariants = { scale: 1.03 };
const linkHoverVariants = { scale: 1.02, y: -1 };
const linkTapVariants = { scale: 0.95 };

function ProjectCard({
  imageSrc,
  imageAlt,
  title,
  story,
  bullets = [],
  links = [],
  tags = [],
}: ProjectProps) {
  const [open, setOpen] = React.useState(false);

  const handleImageClick = React.useCallback(() => setOpen(true), []);
  const handleLightboxClose = React.useCallback(() => setOpen(false), []);

  return (
    <>
      <MArticle
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={hoverVariants}
        transition={{ duration: 0.3 }}
        className="rounded-3xl shadow-lg ring-1 ring-amber-200 p-6 sm:p-8 sm:flex sm:gap-6 sm:items-stretch group cursor-pointer"
        style={{ backgroundColor: "#FFFDF2" }}
      >
        {/* Image */}
        <MBox
          variants={itemVariants}
          whileHover={imageHoverVariants}
          className="relative rounded-2xl overflow-hidden cursor-zoom-in sm:basis-1/2 sm:self-stretch w-full h-[220px] sm:h-auto sm:min-h-[280px] sm:max-h-[520px] shadow-lg group-hover:shadow-xl transition-all duration-300"
          onClick={handleImageClick}
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
            priority={false}
          />
        </MBox>

        {/* Text */}
        <div className="sm:basis-1/2 mt-4 sm:mt-0 flex flex-col">
          <MBox 
            variants={itemVariants} 
            className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors duration-200"
          >
            {title}
          </MBox>

          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <MSpan key={`tag-${i}`} variants={itemVariants} className="inline-block">
                  <Tag label={t} />
                </MSpan>
              ))}
            </div>
          )}

          <MBox variants={itemVariants} className="mt-3 text-slate-700 leading-relaxed">
            {story}
          </MBox>

          {bullets.length > 0 && (
            <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
              {bullets.map((b, i) => (
                <MLi key={`bullet-${i}`} variants={itemVariants}>
                  {b.strong && <span className="font-medium">{b.strong}: </span>}
                  {b.text}
                </MLi>
              ))}
            </ul>
          )}

          {links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {links.map((l, i) => (
                <MLink
                  key={`link-${i}`}
                  variants={itemVariants}
                  whileHover={linkHoverVariants}
                  whileTap={linkTapVariants}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-2 ring-orange-200 text-orange-800 hover:bg-orange-50 hover:ring-orange-300 font-mono-var font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {l.label}
                </MLink>
              ))}
            </div>
          )}
        </div>
      </MArticle>

      <Lightbox open={open} onClose={handleLightboxClose} src={imageSrc} alt={imageAlt} />
    </>
  );
}

export default memo(ProjectCard);