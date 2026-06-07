"use client"

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { X, ExternalLink } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
  title: string;
  tags?: string[];
  story: string;
  bullets?: Array<{ strong?: string; text: string }>;
  links?: Array<{ href: string; label: string; kind?: string }>;
  imagePosition?: string;
}

export function ProjectModal({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
  title,
  tags,
  story,
  bullets,
  links,
  imagePosition = "object-center",
}: ProjectModalProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      role="button"
      tabIndex={0}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-md"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={cn(
          "relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-[1.25rem]",
          "border border-hairline bg-surface shadow-editorial-lg",
          "grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-2 lg:grid-rows-1"
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface/80 text-ink backdrop-blur transition-colors hover:bg-sunken"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Image */}
        <div className="relative h-48 bg-sunken lg:h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={imageAlt}
            className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
          />
        </div>

        {/* Content */}
        <div className="min-h-0 min-w-0 space-y-7 overflow-y-auto p-6 md:p-9">
          <div>
            <h2 className="font-display text-[2.25rem] font-normal leading-tight tracking-[-0.01em] text-ink">
              {title}
            </h2>
            {tags && tags.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[0.8rem] font-medium tracking-wide text-ink/55"
                  >
                    {idx > 0 && (
                      <span className="mr-4 text-hairline-strong" aria-hidden>
                        ·
                      </span>
                    )}
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="h-px w-full bg-hairline" />

          <p className="text-[0.97rem] leading-relaxed text-muted">{story}</p>

          {bullets && bullets.length > 0 && (
            <div>
              <h3 className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-accent-ink">
                Details
              </h3>
              <ul className="space-y-2.5">
                {bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-[0.92rem] leading-relaxed text-muted"
                  >
                    {bullet.strong && (
                      <span className="font-semibold text-ink">
                        {bullet.strong}.{" "}
                      </span>
                    )}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {links && links.length > 0 && (
            <div>
              <h3 className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-accent-ink">
                Links
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-4 py-2 text-[0.85rem] font-medium text-ink transition-colors hover:border-accent/50 hover:bg-accent/[0.06] hover:text-accent-ink"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
