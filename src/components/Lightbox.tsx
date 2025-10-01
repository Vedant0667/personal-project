"use client";

import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    <path d="m22 8-10 6L2 8" />
  </svg>
);

export default function Lightbox({
  open,
  onClose,
  src,
  alt,
}: {
  open: boolean;
  onClose: () => void;
  src: string | null;
  alt: string;
}) {
  const [mounted, setMounted] = React.useState(false);
  const email = "vedant.subramanian@gmail.com";

  // mount flag (portals need the browser)
  React.useEffect(() => setMounted(true), []);

  // lock body scroll
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !src || !mounted) return null;

  const overlay = (
    <div
      className="fixed left-0 top-0 h-[100dvh] w-screen z-[1000] bg-black/75 backdrop-blur-sm
                 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-3 right-3 z-[1001] rounded-full bg-white/95 text-slate-900 px-3 py-1 text-sm shadow"
        aria-label="Close"
      >
        Close
      </button>

      {/* Email Button */}
      <a
        href={`mailto:${email}`}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-3 left-3 z-[1001] inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200 hover:scale-105"
      >
        <EmailIcon />
        Email me
      </a>

      {/* Overlay click area */}
      <button
        className="absolute inset-0 w-full h-full bg-transparent border-0 cursor-zoom-out"
        onClick={onClose}
        aria-label="Close lightbox"
      />
      
      {/* Image */}
      <div
        className="relative w-full max-w-[1200px] h-[min(90dvh,1200px)] z-10"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1200px) 96vw, 1200px"
          priority
        />
      </div>
    </div>
  );

  // Render above everything, outside any transformed ancestors
  return createPortal(overlay, document.body);
}
