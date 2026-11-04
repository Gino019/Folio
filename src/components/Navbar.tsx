"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-[#070711]/80 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Initials */}
        <Link
          href="#inicio"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-900/40 border border-purple-400/30 group-hover:scale-105 transition-transform">
            {personalData.initials}
          </div>
          <span className="font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors hidden sm:inline-block">
            {personalData.name.split(" ")[0]} {personalData.name.split(" ")[2] || ""}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600 hover:text-white transition-all shadow-sm"
          >
            GitHub
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a1a] border-b border-white/10 px-4 pt-2 pb-5 space-y-1 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 rounded-lg text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 transition"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
