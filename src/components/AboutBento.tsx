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
  ExternalLink,
  Cloud,
  Code2,
  Database,
  Share2,
  Server,
} from "lucide-react";
import { personalData, certificationsData } from "@/data/portfolioData";

export default function AboutBento() {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const categories = [
    "Todas",
    "Cloud & AWS",
    "Python, Data & IA",
    "Bases de Datos & Backend",
  ] as const;

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

  const getCategoryCount = (cat: string) => {
    if (cat === "Todas") return certificationsData.length;
    return certificationsData.filter((c) => c.category === cat).length;
  };

  const filteredCertifications =
    selectedCategory === "Todas"
      ? certificationsData
      : certificationsData.filter((c) => c.category === selectedCategory);

  // Helper visual para asignar identidad, siglas y colores oficiales por entidad
  const getIssuerBadge = (issuer: string) => {
    if (issuer.includes("Amazon") || issuer.includes("AWS")) {
      return {
        label: "AWS",
        icon: Cloud,
        containerClass: "bg-amber-500/15 border-amber-500/40 text-amber-400",
      };
    }
    if (issuer.includes("DataCamp")) {
      return {
        label: "DC",
        icon: Code2,
        containerClass: "bg-emerald-500/15 border-emerald-500/40 text-emerald-400",
      };
    }
    if (issuer.includes("Oracle")) {
      return {
        label: "OCI",
        icon: Cpu,
        containerClass: "bg-red-500/15 border-red-500/40 text-red-400",
      };
    }
    if (issuer.includes("MongoDB")) {
      return {
        label: "MDB",
        icon: Database,
        containerClass: "bg-green-500/15 border-green-500/40 text-green-400",
      };
    }
    if (issuer.includes("Neo4j")) {
      return {
        label: "N4J",
        icon: Share2,
        containerClass: "bg-cyan-500/15 border-cyan-500/40 text-cyan-400",
      };
    }
    if (issuer.includes("Datadog")) {
      return {
        label: "DD",
        icon: Server,
        containerClass: "bg-purple-500/15 border-purple-500/40 text-purple-300",
      };
    }
    return {
      label: "CERT",
      icon: BadgeCheck,
      containerClass: "bg-violet-500/15 border-violet-500/40 text-violet-400",
    };
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
              CARD 4: Rediseño Premium - "¿Quieres mi correo?" (Bottom-Left)
             ======================================================== */}
          <div className="bg-gradient-to-b from-violet-600/90 via-indigo-900/95 to-[#0b0b1a] border border-violet-400/30 relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl group transition-all duration-300">
            {/* Subtle CSS Grid Pattern Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Ambient Radial Glows */}
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-violet-400/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />

            {/* Floating Watermark Code Symbols */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/[0.04] font-mono text-7xl font-bold select-none pointer-events-none">
              &#123;&nbsp;&#125;
            </div>
            <div className="absolute left-4 bottom-24 text-white/[0.03] font-mono text-5xl font-bold select-none pointer-events-none">
              &lt;&nbsp;/&gt;
            </div>

            {/* Top: Mini Editor / Terminal */}
            <div className="relative z-10 backdrop-blur-md bg-black/40 border border-white/15 rounded-xl p-3.5 font-mono text-xs shadow-lg mb-5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-neutral-400 font-sans">contact.ts</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">ready</span>
              </div>
              <div className="space-y-1 text-left leading-relaxed">
                <div>
                  <span className="text-purple-300">const</span>{" "}
                  <span className="text-blue-300">dev</span> ={" "}
                  <span className="text-emerald-300">&quot;Eduardo Flores&quot;</span>;
                </div>
                <div>
                  <span className="text-purple-300">const</span>{" "}
                  <span className="text-blue-300">status</span> ={" "}
                  <span className="text-amber-300">&quot;Open to Work 🚀&quot;</span>;
                </div>
                <div>
                  <span className="text-rose-300">await</span>{" "}
                  <span className="text-indigo-300">sendMail</span>(
                  <span className="text-emerald-300">&quot;{personalData.email}&quot;</span>);
                </div>
              </div>
            </div>

            {/* Center: Call to Action */}
            <div className="relative z-10 flex flex-col items-center text-center my-auto py-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-3 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Disponible para prácticas y proyectos</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                ¿Quieres mi correo?
              </h3>
              <p className="text-purple-100/90 text-xs sm:text-sm mb-5 max-w-xs leading-relaxed">
                Disponible para colaborar, conversar sobre proyectos o propuestas profesionales.
              </p>

              <button
                onClick={handleCopyEmail}
                className="bg-black hover:bg-neutral-900 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2.5 shadow-xl shadow-black/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/15 w-full justify-center group/btn"
                aria-label="Copiar correo electrónico"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-emerald-400" />
                    <span className="text-emerald-300 font-semibold text-sm">¡Correo copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-neutral-300 group-hover/btn:text-white transition-colors" />
                    <span className="font-mono text-xs sm:text-sm truncate">{personalData.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom: Summary of Backing Metrics */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/10 flex flex-col justify-center">
                <span className="text-base sm:text-lg font-black text-white leading-none">18</span>
                <span className="text-[10px] text-purple-200/90 font-medium mt-1 leading-tight">Certificaciones</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/10 flex flex-col justify-center">
                <span className="text-base sm:text-lg font-black text-white leading-none">6</span>
                <span className="text-[10px] text-purple-200/90 font-medium mt-1 leading-tight">Entidades</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/10 flex flex-col justify-center">
                <span className="text-xs sm:text-sm font-bold text-emerald-400 leading-none">GMT-5</span>
                <span className="text-[10px] text-purple-200/90 font-medium mt-1 leading-tight">Tacna (Remoto)</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 5: Investigación & Certificaciones (Bottom-Right: 2 cols)
             ======================================================== */}
          <div className="lg:col-span-2 bg-[#111122] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-violet-500/30 transition-all duration-300 shadow-xl">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-violet-400">
                  <Award size={22} />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Investigación & Certificaciones ({certificationsData.length})
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

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                Constante aprendizaje autodidacta y validación profesional en Cloud Computing, Inteligencia Artificial,
                Data Engineering y bases de datos NoSQL / Grafos.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-3 pt-1">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-violet-600 text-white shadow-md shadow-violet-900/30 border border-violet-400/40"
                          : "bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/5"
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-white/5 text-neutral-400"
                        }`}
                      >
                        {getCategoryCount(cat)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Row of Certifying Entities */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 pb-2 border-b border-white/5">
                <span className="text-[11px] font-mono text-neutral-400 flex items-center mr-1">
                  Entidades:
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-medium">
                  <Cloud size={11} /> AWS
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-[11px] font-mono font-medium">
                  <Cpu size={11} /> Oracle
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-medium">
                  <Code2 size={11} /> DataCamp
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] font-mono font-medium">
                  <Database size={11} /> MongoDB
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono font-medium">
                  <Share2 size={11} /> Neo4j
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-medium">
                  <Server size={11} /> Datadog
                </span>
              </div>
            </div>

            {/* Certifications Interactive Grid with Thin & Dark Scroll Container */}
            <div className="max-h-[460px] overflow-y-auto pr-1.5 space-y-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-violet-500/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-violet-500/70">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredCertifications.map((cert) => {
                  const issuerInfo = getIssuerBadge(cert.issuer);
                  const IssuerIcon = issuerInfo.icon;

                  return (
                    <a
                      key={cert.id}
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-violet-500/50 hover:bg-white/[0.05] transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-2.5">
                            {/* Insignia Cuadrada Diferenciada por Entidad */}
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border shrink-0 group-hover:scale-105 transition-all ${issuerInfo.containerClass}`}
                            >
                              <div className="flex flex-col items-center justify-center leading-none">
                                <IssuerIcon size={14} className="mb-0.5" />
                                <span className="text-[9px] font-mono font-extrabold">{issuerInfo.label}</span>
                              </div>
                            </div>
                            <span className="text-xs font-medium text-neutral-300">
                              {cert.issuer}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-neutral-500 shrink-0">
                            {cert.date}
                          </span>
                        </div>

                        <h4 className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors leading-snug">
                          {cert.title}
                        </h4>

                        {cert.credentialId && (
                          <div className="mt-2 inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            <span className="truncate max-w-[200px]">ID: {cert.credentialId}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          {cert.badgeText}
                        </span>
                        <span className="text-neutral-400 group-hover:text-violet-300 flex items-center gap-1 font-medium transition-colors text-[11px]">
                          Ver credencial en LinkedIn
                          <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
