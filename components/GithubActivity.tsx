"use client";

import { motion } from "framer-motion";

const dummyGrid = Array.from({ length: 7 * 18 }).map((_, idx) => {
  const intensity = (idx * 37) % 4;
  return intensity;
});

export default function GithubActivity() {
  return (
    <section className="relative px-6 pb-20 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
              GITHUB GRID // ACTIVITY
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Contributions as Pixel Art
            </h2>
          </div>
        </div>
        <motion.div
          className="glass-panel relative overflow-hidden px-4 py-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.35),transparent_60%)] opacity-60" />
          <div className="relative z-10 grid grid-cols-[repeat(18,1fr)] gap-1.5">
            {dummyGrid.map((intensity, idx) => {
              const colors = [
                "bg-slate-800",
                "bg-neonBlue/50",
                "bg-neonPurple/60",
                "bg-neonGreen/60"
              ];
              return (
                <motion.div
                  key={idx}
                  className={`h-3 w-3 rounded-[3px] ${colors[intensity]}`}
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: intensity * 0.05 }}
                />
              );
            })}
          </div>
          <p className="relative z-10 mt-4 text-[11px] text-slate-400">
            This stylized grid represents GitHub activity. You can later plug in
            live contribution data or pinned repositories here.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

