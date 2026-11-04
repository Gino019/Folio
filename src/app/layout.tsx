import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Gino Flores Navarro | Portafolio Profesional",
  description: "Portafolio de Eduardo Gino Flores Navarro - Estudiante de Ingeniería de Sistemas y Junior Developer enfocado en Arquitectura de Software, Cloud Computing, Seguridad y SecOps.",
  keywords: ["Eduardo Gino Flores Navarro", "Portafolio", "Software Engineer", "Junior Developer", "Next.js", "TypeScript", "Tacna", "Peru"],
  authors: [{ name: "Eduardo Gino Flores Navarro" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#070711] text-white antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
