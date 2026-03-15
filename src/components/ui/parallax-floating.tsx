"use client";

import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  CSSProperties,
} from "react";
import { useAnimationFrame } from "framer-motion";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

type FloatingContextType = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  mousePositionRef: React.RefObject<{ x: number; y: number }>;
  sensitivity: number;
};

const FloatingContext = createContext<FloatingContextType | null>(null);

export default function Floating({
  children,
  className = "",
  sensitivity = 1,
}: {
  children: ReactNode;
  className?: string;
  sensitivity?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useMousePositionRef();

  return (
    <FloatingContext.Provider
      value={{ containerRef, mousePositionRef, sensitivity }}
    >
      <div ref={containerRef} className={`absolute inset-0 ${className}`}>
        {children}
      </div>
    </FloatingContext.Provider>
  );
}

export function FloatingElement({
  children,
  depth = 0.5,
  className = "",
  easing = 0.05,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
  easing?: number;
}) {
  const context = useContext(FloatingContext);
  if (!context) {
    throw new Error("FloatingElement must be used within Floating");
  }

  const { containerRef, mousePositionRef, sensitivity } = context;
  const elementRef = useRef<HTMLDivElement>(null);
  const currentTransform = useRef({ x: 0, y: 0 });

  useAnimationFrame(() => {
    if (!elementRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = mousePositionRef.current.x;
    const mouseY = mousePositionRef.current.y;

    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const deltaX = (mouseX - centerX) * depth * sensitivity;
    const deltaY = (mouseY - centerY) * depth * sensitivity;

    currentTransform.current.x +=
      (deltaX - currentTransform.current.x) * easing;
    currentTransform.current.y +=
      (deltaY - currentTransform.current.y) * easing;

    elementRef.current.style.transform = `translate(${currentTransform.current.x}px, ${currentTransform.current.y}px)`;
  });

  return (
    <div
      ref={elementRef}
      className={`absolute pointer-events-none ${className}`}
      style={
        {
          "--depth": depth,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
