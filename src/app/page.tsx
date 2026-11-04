import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutBento from "@/components/AboutBento";
import ProjectsList from "@/components/ProjectsList";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070711] text-white selection:bg-violet-600 selection:text-white">
      <Navbar />
      <Hero />
      <AboutBento />
      <ProjectsList />
      <Contact />
    </main>
  );
}
