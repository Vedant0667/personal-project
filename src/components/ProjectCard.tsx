"use client";

import React from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import Tag from "@/components/Tag";
import { motion } from "framer-motion";

type Bullet = { strong?: string; text: string };
type Link = { href: string; label: string };

export type ProjectProps = {
  imageSrc: string;   // served from /public
  imageAlt: string;
  title: string;
  story: string;
  bullets?: Bullet[];
  links?: Link[];
  tags?: string[];
};

const container = {
  hidden: { opacity: 0, y: 52, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      delayChildren: 0.05,
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
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
      <motion.article
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ 
          y: -5,
          scale: 1.02,
          boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
        }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl shadow-lg ring-1 ring-amber-200 p-6 sm:p-8 sm:flex sm:gap-6 sm:items-stretch group cursor-pointer"
        style={{ backgroundColor: "#FFFDF2" }}
      >
        {/* Image */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.03 }}
          className="relative rounded-2xl overflow-hidden cursor-zoom-in sm:basis-1/2 sm:self-stretch w-full h-[220px] sm:h-auto sm:min-h-[280px] sm:max-h-[520px] shadow-lg group-hover:shadow-xl transition-all duration-300"
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
            priority={false}
          />
        </motion.div>

        {/* Text */}
        <div className="sm:basis-1/2 mt-4 sm:mt-0 flex flex-col">
          <motion.h3 
            variants={item} 
            className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors duration-200"
          >
            {title}
          </motion.h3>

          {tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <motion.span key={i} variants={item} className="inline-block">
                  <Tag label={t} />
                </motion.span>
              ))}
            </div>
          )}

          <motion.p variants={item} className="mt-3 text-slate-700 leading-relaxed">
            {story}
          </motion.p>

          {bullets.length > 0 && (
            <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-700">
              {bullets.map((b, i) => (
                <motion.li key={i} variants={item}>
                  {b.strong && <span className="font-medium">{b.strong}: </span>}
                  {b.text}
                </motion.li>
              ))}
            </ul>
          )}

          {links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {links.map((l, i) => (
                <motion.a
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-2 ring-orange-200 text-orange-800 hover:bg-orange-50 hover:ring-orange-300 font-mono-var font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </motion.article>

      <Lightbox open={open} onClose={() => setOpen(false)} src={imageSrc} alt={imageAlt} />
    </>
  );
}
