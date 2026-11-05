"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  Download,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Project } from "@/data/portfolioData";
import ProjectImageRenderer from "./ProjectImageRenderer";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const images = project.images || [];
  const currentImage = images[currentImageIndex] || {
    url: "",
    caption: project.shortDescription,
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Dialog Window */}
      <div
        className="relative w-full max-w-4xl bg-[#0e0e1c] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141427]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
              {project.category}
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Main Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-neutral-400">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Carousel (si tiene imágenes) o Banner de Aplicación en Vivo (si no tiene imágenes) */}
          {images.length > 0 ? (
            <div className="relative rounded-xl border border-white/15 bg-black/40 overflow-hidden shadow-xl aspect-video w-full flex items-center justify-center">
              <ProjectImageRenderer
                src={currentImage.url}
                alt={`${project.title} - ${currentImage.caption}`}
                caption={currentImage.caption}
                projectTitle={project.title}
                technologies={project.technologies}
                className="w-full h-full"
              />

              {/* Navigation Arrows (if multiple images) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    aria-label="Imagen anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition shadow-lg cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    aria-label="Imagen siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition shadow-lg cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Pagination indicator */}
              {images.length > 1 && (
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 text-xs text-white border border-white/15 font-mono backdrop-blur-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          ) : project.liveUrl ? (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-violet-950/30 to-indigo-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Desplegado en Producción</span>
                </div>
                <h4 className="text-lg font-bold text-white">Aplicación disponible en la nube</h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                  Accede y prueba la solución en vivo con autenticación y panel de control.
                </p>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all shrink-0"
              >
                <span>Abrir Aplicación en Vivo</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ) : null}

          {/* Full Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
              <Layers size={16} className="text-violet-400" />
              Descripción de la Solución
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed bg-[#121224] p-4 rounded-xl border border-white/5">
              {project.fullDescription}
            </p>
          </div>

          {/* Achievements / Logros Técnicos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-violet-400" />
              Logros Técnicos & Principios Aplicados
            </h4>
            <div className="space-y-2">
              {project.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <CheckCircle2 size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Stack Tecnológico
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#141427] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 font-mono">
            ID: <span className="text-white">{project.id}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-violet-600/30 hover:bg-violet-600 text-violet-200 hover:text-white border border-violet-500/40 shadow-lg shadow-purple-900/30 transition hover:scale-105"
              >
                <Download size={16} />
                <span>{project.downloadLabel || "Descargar Sistema"}</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 transition hover:scale-105"
              >
                <span>Abrir Aplicación en Vivo</span>
                <ExternalLink size={14} />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition hover:scale-105"
            >
              <GithubIcon size={16} />
              <span>Ver Código en GitHub</span>
              <ExternalLink size={14} className="opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
