"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const typingSkills = [
  "DevOps",
  "AWS",
  "CI/CD Pipelines",
  "Cloud Systems",
  "Automation",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Power BI",
  "UI/UX",
  "Terraform",
  "Ansible",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "ArgoCD (GitOps)",
  "Linux",
  "Networking"
];

export default function Hero() {
  const skills = useMemo(() => typingSkills, []);
  const [skillIndex, setSkillIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = skills[skillIndex % skills.length] ?? "";
    const speed = deleting ? 30 : 55;

    const tick = window.setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) {
          window.setTimeout(() => setDeleting(true), 650);
        }
      } else {
        const next = current.slice(0, Math.max(0, typed.length - 1));
        setTyped(next);
        if (next.length === 0) {
          setDeleting(false);
          setSkillIndex((i) => (i + 1) % skills.length);
        }
      }
    }, speed);

    return () => window.clearTimeout(tick);
  }, [deleting, skillIndex, skills, typed]);

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-6 pt-32 md:px-16">
      <div className="absolute inset-0 hud-grid opacity-40" />
      <div className="relative z-10 grid w-full max-w-6xl gap-10 md:grid-cols-[3fr,2fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-slate-400">
            &gt;&gt; ACCESS GRANTED // PORTFOLIO INTERFACE
          </p>
          <h1 className="glow-text text-4xl font-extrabold leading-tight md:text-6xl">
            <span className="block text-slate-300">Sunku Giridhar</span>
            <span className="block bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen bg-clip-text text-transparent">
              Shanmukh
            </span>
          </h1>
          <p className="text-sm font-mono uppercase tracking-[0.25em] text-neonBlue">
            DevOps Engineer | Cloud Enthusiast | Full Stack Developer
          </p>
          <div className="glass-panel relative mt-4 flex items-center gap-3 px-4 py-3">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              SKILLS
            </span>
            <span className="text-[11px] text-neonGreen">
              {typed}
              <span className="ml-0.5 inline-block h-3 w-px animate-pulse bg-neonGreen/80 align-middle" />
            </span>
            
            
          </div>
          <p className="max-w-xl text-sm text-slate-300">
            You&apos;re entering a high-tech DevOps command center. Navigate
            through cloud-native builds, CI/CD pipelines, and full stack
            interfaces crafted to keep systems scalable, resilient, and
            obsessively monitored.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel flex items-center gap-2 border-neonBlue/70 px-5 py-2.5 text-sm font-semibold text-neonBlue shadow-neon"
            >
              View Missions (Projects)
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-black/30 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-neonPurple hover:bg-neonPurple/10 hover:text-neonPurple"
            >
              Initiate Communication
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="glass-panel neon-border relative flex h-full flex-col justify-between overflow-hidden p-4">
            <div className="absolute inset-0 bg-[conic-gradient(at_top,_rgba(56,189,248,0.18),_transparent,_rgba(168,85,247,0.3),_transparent)] opacity-70" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-mono text-slate-400">
                SYSTEM STATUS // DEVOPS DASHBOARD
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg border border-slate-700/70 bg-black/40 p-3">
                  <p className="text-[10px] text-slate-400">PRIMARY ROLE</p>
                  <p className="mt-1 text-sm text-neonBlue">
                    Associate DevOps Engineer
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Automating cloud-native deployments and observability.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700/70 bg-black/40 p-3">
                  <p className="text-[10px] text-slate-400">LOCATION</p>
                  <p className="mt-1 text-sm text-neonPurple">India</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Operating across global time zones.
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700/70 bg-black/40 p-3">
                  <p className="text-[10px] text-slate-400">STACK</p>
                  <p className="mt-1 text-sm text-neonGreen">
                    AWS · Jenkins · Docker · React · Next.js · K8s · MongoDB · Power-BI · Terraform 
                  </p>
                </div>
                <div className="rounded-lg border border-slate-700/70 bg-black/40 p-3">
                  <p className="text-[10px] text-slate-400">LATENCY</p>
                  <p className="mt-1 text-sm text-slate-200">Low / Optimized</p>
                  <p className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <span className="block h-full w-3/4 bg-gradient-to-r from-neonGreen to-neonBlue" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

