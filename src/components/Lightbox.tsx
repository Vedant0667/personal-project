"use client";

import React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

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
