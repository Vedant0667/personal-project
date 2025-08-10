"use client";

import React from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";

type Props = {
  open: boolean;
  onClose: () => void;
  src: StaticImageData | null;
  alt: string;
};

export default function Lightbox({ open, onClose, src, alt }: Props) {
  // lock body scroll
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // esc to close
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !src) return null;

  const natW = (src as StaticImageData).width;
  const natH = (src as StaticImageData).height;

  // never upscale; fit inside viewport minus padding
  const fitStyle: React.CSSProperties = {
    width: natW,
    height: "auto",
    maxWidth: "calc(100svw - 48px)",   // 24px left/right
    maxHeight: "calc(100svh - 112px)", // 56px top/bottom
    display: "block",
  };

  const overlay = (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* subtle blur layer */}
      <div className="fixed inset-0 backdrop-blur-sm pointer-events-none" />
      {/* soft tint, click to close */}
      <div
        className="fixed inset-0 bg-black/60 pointer-events-auto"
        onClick={onClose}
      />

      {/* Close button */}
      <div className="fixed top-3 right-3 pointer-events-auto">
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
          className="rounded-full bg-white/95 text-gray-900 px-3 py-1 text-sm shadow hover:bg-white"
          aria-label="Close"
        >
          Close
        </button>
      </div>

      {/* Centered content with safe padding; scrolls if needed */}
      <div
        className="fixed inset-0 flex items-center justify-center overflow-auto overscroll-contain pointer-events-none"
        style={{
          paddingTop: "max(56px, env(safe-area-inset-top))",
          paddingBottom: "max(56px, env(safe-area-inset-bottom))",
          paddingLeft: "max(24px, env(safe-area-inset-left))",
          paddingRight: "max(24px, env(safe-area-inset-right))",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* No rounding, no wrapper—just the image */}
        <div className="pointer-events-auto">
          <Image
            src={src}
            alt={alt}
            width={natW}
            height={natH}
            style={fitStyle}
            className="block object-contain select-none"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );

  // render in a portal so parent overflow/stacking can’t clip it
  return createPortal(overlay, document.body);
}
