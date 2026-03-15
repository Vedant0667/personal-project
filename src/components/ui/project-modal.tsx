"use client"

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      role="button"
      tabIndex={0}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-[#FFF8EC]/80 p-4"
      onClick={onClose}
      onKeyDown={(e) => { if (e.key === "Escape") onClose(); }}
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={cn(
          "relative w-full max-w-6xl h-[90vh] overflow-hidden",
          "bg-black dark:bg-[#FFF8EC] border border-[#f5f5f5]/[0.08] dark:border-black/[0.08] rounded-xl shadow-2xl",
          "grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-2 lg:grid-rows-1"
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#f5f5f5]/50 hover:bg-[#f5f5f5]/70 dark:bg-black/50 dark:hover:bg-black/70 text-black dark:text-[#f5f5f5] transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Side: Image */}
        <div className="relative h-48 lg:h-full">
          <img
            src={imageUrl}
            alt={imageAlt}
            className={`absolute inset-0 w-full h-full object-cover ${imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent dark:from-[#FFF8EC]/50 dark:to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20 dark:lg:to-[#f5f5f5]/20"></div>
        </div>

        {/* Right Side: Content */}
        <div className="overflow-y-auto p-5 md:p-8 space-y-5 md:space-y-6 min-w-0 min-h-0">
          {/* Title and Tags */}
          <div>
            <h2 className="font-sans text-4xl font-bold text-[#f5f5f5] dark:text-black mb-3">{title}</h2>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-[#f5f5f5]/[0.1] dark:bg-black/[0.1] text-[#f5f5f5] dark:text-black border border-[#f5f5f5]/[0.15] dark:border-black/[0.15]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Story */}
          <div>
            <h3 className="font-sans text-lg font-semibold text-[#f5f5f5] dark:text-black mb-2">Story</h3>
            <p className="font-sans text-[#f5f5f5] dark:text-black text-sm leading-relaxed">{story}</p>
          </div>

          {/* Bullets */}
          {bullets && bullets.length > 0 && (
            <div>
              <h3 className="font-sans text-lg font-semibold text-[#f5f5f5] dark:text-black mb-2">Details</h3>
              <ul className="space-y-2">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="font-sans text-sm text-[#f5f5f5] dark:text-black">
                    {bullet.strong && (
                      <span className="font-semibold text-[#f5f5f5] dark:text-black">{bullet.strong}: </span>
                    )}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          {links && links.length > 0 && (
            <div>
              <h3 className="font-sans text-lg font-semibold text-[#f5f5f5] dark:text-black mb-3">Links</h3>
              <div className="flex flex-wrap gap-2">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-orange-500/20 text-[#f5f5f5] dark:text-black border border-orange-500/40 hover:bg-orange-500/30 hover:border-orange-500/60 transition-all duration-200"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
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
