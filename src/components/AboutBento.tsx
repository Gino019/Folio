"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Code,
  Globe2,
  Award,
  Layers,
  Sparkles,
  Cpu,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import { personalData, certificationsDetailed } from "@/data/portfolioData";

export default function AboutBento() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement("textarea");
      textarea.value = personalData.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Principles with customized rotations and positions for Card 2
  const principleTags = [
    { name: "SOLID", tilt: "-rotate-6", color: "border-blue-500/40 text-blue-300 bg-blue-500/10" },
    { name: "POO", tilt: "rotate-3", color: "border-purple-500/40 text-purple-300 bg-purple-500/10" },
    { name: "Clean Code", tilt: "-rotate-2", color: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10" },
    { name: "Arquitectura Modular", tilt: "rotate-6", color: "border-amber-500/40 text-amber-300 bg-amber-500/10" },
    { name: "Scrum", tilt: "-rotate-3", color: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10" },
    { name: "SecOps", tilt: "rotate-2", color: "border-rose-500/40 text-rose-300 bg-rose-500/10" },
  ];

  return (
    <section id="sobre-mi" className="py-24 relative bg-[#070711]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            Perfil Profesional
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sobre Mí & Enfoque
          </h2>
          <p className="mt-3 text-neutral-400 max-w-2xl text-base sm:text-lg">
            Investigación continua, arquitectura sólida y desarrollo guiado por buenas prácticas de ingeniería.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ========================================================
              CARD 1: Code Window & Bio (Top-Left: 2 cols, 2 rows)
             ======================================================== */}
          <div className="lg:col-span-2 lg:row-span-2 bg-[#111122] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-violet-500/30 transition-all duration-300 shadow-xl">
            {/* Ambient background glow inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Upper part: Simulated code window in isometric / tilted perspective */}
            <div className="mb-8 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                  <Code size={14} className="text-violet-400" />
                  engineer.config.ts
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                  TypeScript 5.0
                </span>
              </div>

              {/* Tilted Code Container */}
              <div className="w-full bg-[#0a0a16] border border-white/10 rounded-xl p-4 sm:p-5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] transform -rotate-1 group-hover:rotate-0">
                {/* Window header dots */}
                <div className="flex items-center gap-1.5 pb-3 border-b border-white/5 mb-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-500">
                    ~/eduardo-flores/profile
                  </span>
                </div>

                {/* Code syntax */}
                <pre className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">engineer</span> = &#123;
                    {"\n"}  <span className="text-neutral-400">fullName:</span>{" "}
                    <span className="text-emerald-300">&quot;{personalData.name}&quot;</span>,
                    {"\n"}  <span className="text-neutral-400">cycle:</span>{" "}
                    <span className="text-amber-400">8</span>,{" "}
                    <span className="text-neutral-500">{"// Ingeniería de Sistemas"}</span>
                    {"\n"}  <span className="text-neutral-400">focus:</span> [
                    <span className="text-emerald-300">&quot;Software Architecture&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;SecOps&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Cloud & AI&quot;</span>],
                    {"\n"}  <span className="text-neutral-400">approach:</span>{" "}
                    <span className="text-emerald-300">&quot;Clean Code & SOLID&quot;</span>,
                    {"\n"}  <span className="text-purple-400">isAlwaysLearning:</span>{" "}
                    <span className="text-rose-400">true</span>,
                    {"\n"}&#125;;
                  </code>
                </pre>
              </div>
            </div>

            {/* Bottom part: Title and Bio */}
            <div className="relative z-10 pt-4 border-t border-white/5">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Hola, soy {personalData.name}
              </h3>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                {personalData.bio}
              </p>
            </div>
          </div>

          {/* ========================================================
              CARD 2: Principios y Arquitectura (Top-Right)
             ======================================================== */}
          <div className="bg-[#111122] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-violet-500/30 transition-all duration-300 shadow-xl min-h-[300px]">
            <div>
              <div className="flex items-center gap-2 mb-2 text-violet-400">
                <Layers size={18} />
                <h3 className="text-xl font-bold text-white">Principios y Arquitectura</h3>
              </div>
              <p className="text-xs text-neutral-400">
                Fundamentos clave aplicados en cada solución y módulo de software.
              </p>
            </div>

            {/* Floating Pills Canvas around central icon */}
            <div className="relative my-6 py-6 flex items-center justify-center min-h-[160px]">
              {/* Central Glowing Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/30 to-purple-800/40 border border-violet-400/30 flex items-center justify-center text-violet-300 shadow-lg shadow-purple-900/40">
                <Cpu size={30} className="text-violet-300 animate-pulse" />
              </div>

              {/* Floating Pills */}
              <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 pointer-events-none">
                {principleTags.map((p, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border backdrop-blur-md shadow-md transition-transform duration-300 ${p.tilt} ${p.color}`}
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-xs text-neutral-500 text-center font-mono">
              Modular • Desacoplado • Mantenible
            </div>
          </div>

          {/* ========================================================
              CARD 3: Zona Horaria (Middle-Right)
             ======================================================== */}
          <div className="bg-[#111122] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-violet-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="flex items-center gap-2 text-violet-400 mb-2">
                <Globe2 size={18} />
                <h3 className="text-xl font-bold text-white">Zona Horaria</h3>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                {personalData.timezoneText}
              </p>
            </div>

            {/* Luminous Globe CSS Graphic at Bottom Right */}
            <div className="relative mt-2 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                GMT-5 • Tacna, Perú
              </div>

              {/* Globe Visual Representation */}
              <div className="relative w-24 h-24 rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-900/40 via-purple-950/30 to-indigo-950/60 shadow-inner flex items-center justify-center overflow-hidden">
                {/* Meridian rings */}
                <div className="absolute inset-2 rounded-full border border-violet-400/20" />
                <div className="absolute inset-y-0 w-1/2 border-r border-violet-400/25 rounded-full" />
                <div className="absolute inset-x-0 h-1/2 border-b border-violet-400/25 rounded-full" />
                {/* Luminous location pulse dot (Peru) */}
                <div className="absolute top-[52%] left-[42%] flex items-center justify-center">
                  <span className="animate-ping absolute w-3 h-3 rounded-full bg-emerald-400 opacity-80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 4: Purple Card - Copiar Correo (Bottom-Left)
             ======================================================== */}
          <div className="bg-gradient-to-br from-violet-600 to-purple-700 border border-purple-400/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-xl hover:shadow-purple-700/30 transition-all duration-300">
            {/* Background sparkle effect */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              ¿Quieres mi correo?
            </h3>
            <p className="text-purple-100 text-sm mb-6 max-w-xs">
              Disponible para colaborar, conversar sobre proyectos o propuestas profesionales.
            </p>

            <button
              onClick={handleCopyEmail}
              className="bg-black hover:bg-neutral-900 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/10"
              aria-label="Copiar correo electrónico de Eduardo Gino"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">¡Correo copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={18} className="text-neutral-300" />
                  <span>{personalData.email}</span>
                </>
              )}
            </button>
          </div>

          {/* ========================================================
              CARD 5: Investigación & Certificaciones (Bottom-Right: 2 cols)
             ======================================================== */}
          <div className="lg:col-span-2 bg-[#111122] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-violet-500/30 transition-all duration-300 shadow-xl">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-violet-400">
                  <Award size={20} />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Investigación & Certificaciones
                  </h3>
                </div>
                {/* Floating Tech Badges */}
                <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-300">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    TS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Python
                  </span>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Java
                  </span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    AWS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    DB
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                Constante aprendizaje autodidacta y exploración profunda en Cloud Computing, Inteligencia Artificial,
                Seguridad de Datos y modelado NoSQL / Grafos.
              </p>
            </div>

            {/* Certifications List Badges with Modern Verified Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {certificationsDetailed.map((cert) => {
                const isNeo4j = cert.id === "neo4j-pro";
                return (
                  <div
                    key={cert.id}
                    className={`p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-200 group/cert flex flex-col justify-between ${
                      isNeo4j ? "md:col-span-2 bg-gradient-to-r from-violet-950/20 via-[#111122] to-indigo-950/20 border-violet-500/20" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30 shrink-0 group-hover/cert:bg-violet-600/30 group-hover/cert:scale-105 transition-all">
                        <BadgeCheck size={18} className="text-violet-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white group-hover/cert:text-violet-200 transition-colors leading-snug">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                      <span className="font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {cert.badgeLabel}
                      </span>
                      {cert.credentialId ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                          </span>
                          {cert.credentialId}
                        </span>
                      ) : (
                        <span className="text-neutral-400 font-mono text-[11px] flex items-center gap-1">
                          <CheckCircle2 size={12} className="text-emerald-400" /> Credencial Oficial
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
