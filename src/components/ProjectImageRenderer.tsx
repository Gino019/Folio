"use client";

import React, { useState } from "react";
import { Activity, Laptop } from "lucide-react";

interface ProjectImageRendererProps {
  src: string;
  alt: string;
  caption?: string;
  projectTitle: string;
  technologies?: string[];
  className?: string;
  compact?: boolean;
}

export default function ProjectImageRenderer({
  src,
  alt,
  caption,
  projectTitle,
  technologies = [],
  className = "",
  compact = false,
}: ProjectImageRendererProps) {
  const [hasError, setHasError] = useState(false);

  // If image fails to load or hasn't been uploaded yet, render the intelligent mock
  if (hasError) {
    return (
      <div
        className={`w-full h-full bg-[#0d0d1a] border border-white/10 rounded-lg flex flex-col justify-between overflow-hidden relative select-none ${className}`}
      >
        {/* Mock Window Top Bar */}
        <div className="bg-[#15152a] px-3 py-2 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-neutral-400 truncate max-w-[200px] sm:max-w-xs">
              https://{projectTitle.toLowerCase().replace(/\s+/g, "-")}.app
            </span>
          </div>

          <span className="text-[10px] font-mono text-neutral-500">v1.0.0</span>
        </div>

        {/* Mock Application / Dashboard Canvas */}
        <div className="p-4 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-b from-[#0e0e1f] to-[#070714]">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#8b5cf6 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="relative z-10 max-w-sm px-2">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shadow-lg shadow-purple-900/30">
              <Laptop size={20} />
            </div>

            <h4 className="text-white font-bold text-sm sm:text-base tracking-tight mb-1">
              {projectTitle}
            </h4>

            {caption && (
              <p className="text-neutral-300 text-xs line-clamp-2 mb-3 font-normal leading-relaxed">
                {caption}
              </p>
            )}

            {!compact && technologies.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-amber-400 border border-amber-500/20"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer status bar */}
        <div className="bg-[#090914] px-3 py-1.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
          <span className="flex items-center gap-1 text-violet-400/80">
            <Activity size={11} /> Sistema Operativo • 200 OK
          </span>
          <span className="text-neutral-400 font-semibold">online</span>
        </div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover transition-opacity duration-300 ${className}`}
      loading="lazy"
    />
  );
}
