"use client";

import { motion } from "framer-motion";

const milestones = [
  {
  label: "CI/CD Pipeline Architecture",
  detail:
  "Designed and implemented CI/CD pipelines to automate build, test, and deployment workflows, ensuring faster and reliable software delivery.",
  year: "01",
  icon: "assets/Number1.png"
  },
  {
  label: "Jenkins Automation Engine",
  detail:
  "Developed scalable Jenkins pipelines with multi-stage workflows, integrating build validation, deployment triggers, and rollback mechanisms.",
  year: "02",
  icon: "assets/Number2.png"
  },
  {
  label: "Cloud Infrastructure Design (AWS)",
  detail:
  "Architected cloud-based systems using AWS services including EC2, S3, IAM, and VPC to build secure and scalable application environments.",
  year: "03",
  icon: "assets/Number3.png"
  },
  {
  label: "End-to-End Deployment Automation",
  detail:
  "Built fully automated deployment pipelines for full-stack applications, reducing manual intervention and improving release efficiency.",
  year: "04",
  icon: "assets/Number4.png"
  }
  ];
  
  

export default function DevOpsTimeline() {
  return (
    <section className="relative px-6 pb-20 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
              DEVOPS ARC // JOURNEY
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Timeline of Automation Wins
            </h2>
          </div>
        </div>
        <motion.div
          className="glass-panel relative overflow-x-auto px-4 py-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.22),transparent_60%)] opacity-60" />
          <div className="relative z-10 flex min-w-max items-stretch gap-6">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.label}
                className="flex w-64 flex-col items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neonBlue/60 bg-black/60 text-[10px] font-mono text-neonBlue shadow-neon">
                    {m.year}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-neonBlue to-transparent" />
                </div>
                <div className="rounded-xl border border-slate-700/80 bg-black/60 p-3 text-xs text-slate-200">
                  <p className="text-[11px] font-semibold text-neonBlue">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

