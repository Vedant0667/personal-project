"use client"

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageAlt: string;
  icon?: React.ReactNode;
  title: string;
  tags?: string[];
  summary?: string;
  story: string;
  onExpand: () => void;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imageUrl,
      imageAlt,
      icon,
      title,
      tags,
      summary,
      story,
      onExpand,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer",
          className
        )}
        onClick={onExpand}
        {...props}
      >
        {/* Inner wrapper with clipping and group */}
        <div className="group relative overflow-hidden rounded-xl shadow-lg">
          {/* Background Image Layer - Zoom on Hover */}
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110 transform-gpu [will-change:transform]">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Gradient Overlay Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none z-0"></div>

          {/* Content Wrapper */}
          <div className="relative flex h-full flex-col justify-between p-6 min-h-[500px] z-10">
            {/* Top Section: Icon */}
            <div className="flex h-40 items-start">
               {icon && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f5f5f5] bg-black/60 backdrop-blur-sm shadow-lg">
                     {icon}
                  </div>
               )}
            </div>

            {/* Middle Sliding Block - Slides Up on Hover */}
            <div className="space-y-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-16 transform-gpu [will-change:transform]">
              <div>
                <h3 className="text-3xl font-bold text-[#f5f5f5] font-sans mb-3">{title}</h3>
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-[#f5f5f5]/[0.1] text-[#f5f5f5] border border-[#f5f5f5]/[0.15] backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-[#f5f5f5] text-sm mb-2">OVERVIEW</h4>
                <p className="text-sm text-[#f5f5f5] leading-relaxed">
                  {summary || story}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Reveal Block - Absolutely Positioned, Slides Up from Bottom on Hover */}
          <div className="absolute left-0 w-full bottom-0 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 p-6 z-20 transform-gpu [will-change:opacity,transform] pointer-events-none group-hover:pointer-events-auto">
            <div className="flex items-end justify-end">
              <Button size="lg" className="bg-[#f5f5f5] text-black hover:bg-[#f5f5f5]/90 shadow-xl">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
