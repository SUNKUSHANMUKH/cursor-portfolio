import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DevOpsTimeline from "@/components/DevOpsTimeline";
import GithubActivity from "@/components/GithubActivity";
import Contact from "@/components/Contact";
import ExperienceEducation from "@/components/ExperienceEducation";
import HUD from "@/components/HUD";
import LoadingScreen from "@/components/LoadingScreen";
import CursorFX from "@/components/CursorFX";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CursorFX />
      <HUD />
      <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-cyberBg via-black/40 to-cyberBg">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.25),_transparent_55%)] mix-blend-screen opacity-80" />
        <section id="hero" className="relative z-10">
          <Hero />
        </section>
        <section id="about" className="relative z-10">
          <About />
        </section>
        <section id="skills" className="relative z-10">
          <Skills />
        </section>
        <section id="experience" className="relative z-10">
          <ExperienceEducation />
        </section>
        <section id="projects" className="relative z-10">
          <Projects />
        </section>
        <section id="timeline" className="relative z-10">
          <DevOpsTimeline />
        </section>
        <section id="github" className="relative z-10">
          <GithubActivity />
        </section>
        <section id="contact" className="relative z-10 pb-20">
          <Contact />
        </section>
      </main>
    </>
  );
}

