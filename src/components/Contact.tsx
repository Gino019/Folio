"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalData } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // WhatsApp clean URL
  const cleanPhone = personalData.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hola Eduardo Gino, vi tu portafolio y me gustaría ponerme en contacto contigo."
  )}`;

  const contactMethods = [
    {
      name: "Correo Electrónico",
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      icon: Mail,
      isCustomIcon: false,
      actionText: "Enviar mensaje",
      color: "from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-300",
    },
    {
      name: "WhatsApp Directo",
      value: personalData.phone,
      href: whatsappUrl,
      icon: MessageSquare,
      isCustomIcon: false,
      actionText: "Abrir chat",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
      external: true,
    },
    {
      name: "LinkedIn",
      value: "Gino Eduardo Flores Navarro",
      href: personalData.linkedin,
      icon: LinkedinIcon,
      isCustomIcon: true,
      actionText: "Ver perfil",
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-300",
      external: true,
    },
    {
      name: "GitHub",
      value: "github.com/Gino019",
      href: personalData.github,
      icon: GithubIcon,
      isCustomIcon: true,
      actionText: "Ver repositorios",
      color: "from-neutral-500/20 to-stone-500/10 border-neutral-500/30 text-neutral-300",
      external: true,
    },
  ];

  return (
    <footer id="contacto" className="relative bg-[#05050d] pt-24 pb-12 border-t border-white/5">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Send size={13} />
            Contacto & Conexión
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Construimos algo juntos?
          </h2>
          <p className="mt-3 text-neutral-400 text-base sm:text-lg">
            Estoy en búsqueda activa de oportunidades laborales, prácticas y proyectos desafiantes en desarrollo de software, arquitectura y cloud.
          </p>

          {/* Quick Copy Email Bar */}
          <div className="mt-6 inline-flex items-center gap-2 p-1.5 pl-4 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="text-xs sm:text-sm text-neutral-300 font-mono">
              {personalData.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="p-2 px-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
              aria-label="Copiar correo"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-300" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {contactMethods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border bg-[#0d0d1a] hover:scale-[1.02] transition-all duration-200 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/10 group-hover:bg-white/20 transition">
                      <Icon size={20} />
                    </div>
                    <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-white mt-1 truncate">
                    {item.value}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium text-neutral-300 group-hover:text-white">
                  <span>{item.actionText}</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center font-bold text-white text-[11px] shadow-sm">
              {personalData.initials}
            </div>
            <div>
              <span className="font-semibold text-neutral-300">{personalData.name}</span>
              <span className="mx-2">•</span>
              <span>{personalData.role}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-violet-400" />
            <span>{personalData.location}</span>
            <span className="mx-1">•</span>
            <span>Tacna, Perú © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
