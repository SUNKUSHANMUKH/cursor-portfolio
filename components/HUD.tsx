"use client";

import { motion } from "framer-motion";
import SoundToggle from "@/components/SoundToggle";

const items = [
  { id: "hero", label: "OVERVIEW" },
  { id: "about", label: "PROFILE" },
  { id: "skills", label: "SKILL TREE" },
  { id: "experience", label: "CAREER LOG" },
  { id: "projects", label: "PROJECTS" },
  { id: "timeline", label: "DEVOPS ARC" },
  { id: "github", label: "GITHUB GRID" },
  { id: "contact", label: "COMMS" }
];

export default function HUD() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed inset-x-4 top-4 z-40 flex items-center justify-between gap-4 md:inset-x-10">
      <motion.div
        className="pointer-events-auto glass-panel flex items-center gap-3 px-4 py-2 text-xs uppercase tracking-[0.25em]"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="h-2 w-2 rounded-full bg-neonGreen shadow-neon" />
        <span className="text-slate-400">ONLINE</span>
        <span className="hidden text-slate-500 md:inline">
          Sunku Giridhar Shanmukh // DevOps &amp; Full Stack
        </span>
      </motion.div>

      <motion.nav
        className="pointer-events-auto hidden glass-panel items-center gap-3 px-3 py-2 text-[10px] md:flex"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="rounded-md border border-transparent px-2 py-1 text-[10px] font-medium text-slate-300 transition hover:border-neonBlue hover:bg-neonBlue/10 hover:text-neonBlue"
          >
            {item.label}
          </button>
        ))}
        <div className="mx-1 h-6 w-px bg-slate-700/70" />
        <SoundToggle />
      </motion.nav>
    </div>
  );
}

