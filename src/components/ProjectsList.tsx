"use client";

import React, { useState } from "react";
import { ArrowRight, FolderGit2 } from "lucide-react";
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
          {projectsData.map((project) => {
            const isLocalhost = project.status === "Funcionando en Localhost";

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="border-b border-white/10 py-8 group relative flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-colors duration-200 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
              >
                {/* Left Side: Title + Status Badge + Technologies */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        isLocalhost
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isLocalhost ? "bg-emerald-400" : "bg-amber-400"
                          }`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-2 w-2 ${
                            isLocalhost ? "bg-emerald-500" : "bg-amber-500"
                          }`}
                        />
                      </span>
                      <span>{project.status}</span>
                    </div>
                  </div>

                  {/* Short category */}
                  <p className="text-xs text-neutral-400 mt-1">
                    {project.category}
                  </p>

                  {/* Technologies in amber/orange lowercase font-mono */}
                  <div className="text-amber-500 font-mono text-sm flex flex-wrap gap-4 mt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech}>#{tech.toLowerCase()}</span>
                    ))}
                  </div>
                </div>

                {/* Right Side: "Ver más →" button */}
                <div className="flex items-center justify-start md:justify-end shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-neutral-400 group-hover:text-white font-medium text-base transition-all duration-200 group-hover:translate-x-2">
                    <span>Ver más</span>
                    <ArrowRight size={18} className="text-violet-400 group-hover:text-violet-300" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Preview Card on Hover (Desktop only) */}
      {hoveredProject && (
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
