"use client";

import React, { useState } from "react";
import { ArrowRight, FolderGit2, Download, ExternalLink } from "lucide-react";
import { projectsData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import ProjectImageRenderer from "./ProjectImageRenderer";

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="proyectos"
      className="py-24 relative bg-[#070711] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 size={14} />
            Trabajo y Desarrollo
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mis proyectos
          </h2>
          <p className="mt-3 text-neutral-400 max-w-2xl text-base sm:text-lg">
            Sistemas construidos con arquitectura robusta, integraciones de pago, seguridad y herramientas de backend.
          </p>
        </div>

        {/* Vertical List of Interactive Project Rows */}
        <div className="border-t border-white/10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => {
                if (project.images && project.images.length > 0) {
                  setHoveredProject(project);
                } else {
                  setHoveredProject(null);
                }
              }}
              onMouseLeave={() => setHoveredProject(null)}
              className="border-b border-white/10 py-8 group relative flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-colors duration-200 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
            >
              {/* Left Side: Title + Short Description + Technologies */}
              <div className="flex-1">
                {/* 1. Nombre del proyecto */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                {/* 2. Descripción corta de la solución */}
                <p className="text-slate-300 text-base mt-1.5 max-w-2xl leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* 3. Tecnologías */}
                <div className="text-amber-500 font-mono text-sm flex flex-wrap gap-4 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech}>#{tech.toLowerCase()}</span>
                  ))}
                </div>
              </div>

              {/* Right Side: Download button, Live Demo button + "Ver más →" button */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {project.downloadUrl && (
                  <a
                    href={project.downloadUrl}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white border border-violet-500/30 transition-all shadow-sm group/dl"
                  >
                    <Download size={15} className="group-hover/dl:translate-y-0.5 transition-transform" />
                    <span>{project.downloadLabel || "Descargar Sistema"}</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 transition-all shadow-sm group/live"
                  >
                    <span>Ver Demo en Vivo</span>
                    <ExternalLink size={14} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                  </a>
                )}

                <span className="inline-flex items-center gap-1.5 text-neutral-400 group-hover:text-white font-medium text-base transition-all duration-200 group-hover:translate-x-1.5">
                  <span>Ver más</span>
                  <ArrowRight size={18} className="text-violet-400 group-hover:text-violet-300" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Preview Card on Hover (Desktop only, solo si tiene imágenes) */}
      {hoveredProject && hoveredProject.images && hoveredProject.images.length > 0 && (
        <div
          className="hidden lg:block fixed pointer-events-none z-30 transition-transform duration-75 ease-out"
          style={{
            top: `${mousePos.y - 120}px`,
            left: `${mousePos.x + 30}px`,
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <div className="w-80 h-48 rounded-lg shadow-2xl border border-white/20 overflow-hidden bg-[#0d0d1a] backdrop-blur-md">
            <ProjectImageRenderer
              src={hoveredProject.images[0]?.url || "/placeholder.png"}
              alt={hoveredProject.title}
              caption={hoveredProject.images[0]?.caption}
              projectTitle={hoveredProject.title}
              technologies={hoveredProject.technologies}
              compact={true}
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Detail / Evidence Modal */}
      <ProjectModal
        key={selectedProject?.id || "modal"}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
