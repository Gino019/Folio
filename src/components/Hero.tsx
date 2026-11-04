"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, MapPin, Sparkles, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalData } from "@/data/portfolioData";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasCv, setHasCv] = useState(false);

  useEffect(() => {
    fetch("/EduardoGinoFloresNavarro_CV.pdf", { method: "HEAD" })
      .then((res) => {
        if (res.ok) setHasCv(true);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const words = personalData.typewriterWords;
    const targetWord = words[currentWordIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < targetWord.length) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length + 1));
        }, 120);
      } else {
        // Word completed, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length - 1));
        }, 60);
      } else {
        // Deleted completely, move to next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  // Floating binary decorations with fixed deterministic coordinates
  const binaryElements = [
    { text: "01000101", top: "15%", left: "10%", delay: "0s", dur: "7s" },
    { text: "1", top: "22%", left: "80%", delay: "1s", dur: "9s" },
    { text: "0", top: "35%", left: "65%", delay: "2s", dur: "6s" },
    { text: "1101", top: "60%", left: "85%", delay: "0.5s", dur: "8s" },
    { text: "0", top: "75%", left: "12%", delay: "2.5s", dur: "10s" },
    { text: "1010", top: "82%", left: "70%", delay: "1.5s", dur: "7.5s" },
    { text: "1", top: "18%", left: "45%", delay: "3s", dur: "8.5s" },
    { text: "0011", top: "50%", left: "5%", delay: "1s", dur: "11s" },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#070711]"
    >
      {/* Space Background Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-right violet/indigo cosmic bloom */}
        <div
          className="absolute -top-[20%] right-[-10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-40"
          style={{
            background: "radial-gradient(circle, #3b0764 0%, #1e1b4b 60%, transparent 100%)",
          }}
        />
        {/* Center-left purple/deep blue ambient glow */}
        <div
          className="absolute top-[40%] -left-[15%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-35"
          style={{
            background: "radial-gradient(circle, #2e1065 0%, #172554 70%, transparent 100%)",
          }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Abstract CSS Asteroids / Glowing Celestial Spheres */}
      <div
        className="absolute top-28 right-[15%] w-32 h-32 rounded-full border border-purple-500/20 bg-gradient-to-tr from-purple-900/20 to-indigo-600/10 backdrop-blur-sm pointer-events-none animate-float hidden md:block"
        style={{ animationDuration: "14s" }}
      >
        <div className="absolute inset-2 rounded-full border border-purple-400/10" />
      </div>
      <div
        className="absolute bottom-20 right-[8%] w-16 h-16 rounded-full border border-violet-400/20 bg-violet-600/10 backdrop-blur-xs pointer-events-none animate-float hidden lg:block"
        style={{ animationDuration: "9s" }}
      />
      <div
        className="absolute top-1/2 left-[4%] w-24 h-24 rounded-full border border-blue-500/15 bg-blue-900/10 pointer-events-none animate-float hidden lg:block"
        style={{ animationDuration: "11s" }}
      />

      {/* Subtle Floating Binary Numbers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {binaryElements.map((item, idx) => (
          <span
            key={idx}
            className="absolute font-mono text-xs md:text-sm text-purple-300/15 animate-float font-semibold"
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.dur,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl text-left">
          {/* Badge: Location & Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 text-xs text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <MapPin size={13} className="text-violet-400" />
            <span>{personalData.location}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-violet-300 font-medium">Disponible para trabajar</span>
          </div>

          {/* Salutation */}
          <div className="flex items-center gap-2 text-2xl sm:text-3xl font-medium text-neutral-200 mb-2">
            <span>Hola</span>
            <span className="inline-block animate-bounce origin-bottom">👋</span>
          </div>

          {/* Name Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
            soy{" "}
            <span className="bg-gradient-to-r from-white via-neutral-100 to-purple-200 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>

          {/* Subtitle Role */}
          <p className="text-xl sm:text-2xl font-medium text-[#94a3b8] mb-4">
            {personalData.role}
          </p>

          {/* Portfolio Label */}
          <p className="text-lg sm:text-xl font-normal text-neutral-400 mb-6 flex items-center gap-2">
            <Sparkles size={18} className="text-violet-400" />
            <span>Este es mi Portafolio</span>
          </p>

          {/* Giant Typewriter Section */}
          <div className="mb-10 min-h-[4rem] sm:min-h-[5.5rem] flex items-center">
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white flex items-center font-mono">
              <span className="text-violet-400 mr-3">&gt;</span>
              <span className="bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-300 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="inline-block w-1 h-8 sm:h-12 lg:h-14 bg-violet-400 ml-1.5 animate-blink" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-purple-900/40 hover:shadow-purple-700/50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explorar Proyectos</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#sobre-mi"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-neutral-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all duration-200 hover:border-white/20"
            >
              <Terminal size={17} className="text-violet-400" />
              <span>Conóceme Más</span>
            </Link>

            {hasCv && (
              <a
                href="/EduardoGinoFloresNavarro_CV.pdf"
                download="EduardoGinoFloresNavarro_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-neutral-200 bg-violet-950/40 hover:bg-violet-900/50 border border-violet-500/30 transition-all duration-200 hover:border-violet-400/50 text-sm"
              >
                <FileDown size={17} className="text-violet-400" />
                <span>Descargar CV</span>
              </a>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-auto sm:ml-2 pt-2 sm:pt-0">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Eduardo Gino Flores Navarro"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Eduardo Gino Flores Navarro"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Correo de Eduardo Gino Flores Navarro"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-neutral-300 hover:text-white transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
