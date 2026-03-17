"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative px-6 pb-20 md:px-16">
      <motion.div
        className="mx-auto max-w-5xl glass-panel neon-border relative overflow-hidden px-6 py-8 md:px-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.18),transparent,rgba(168,85,247,0.22))] opacity-80" />
        <div className="relative z-10 grid gap-8 md:grid-cols-[3fr,2fr]">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
              STORY MODE // ABOUT
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
              DevOps Engineer + Full Stack Developer
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              DevOps Engineer and Full Stack Developer with hands-on experience
              designing, developing, automating, deploying, and maintaining
              scalable web applications and cloud-native systems.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Strong in CI/CD using Jenkins and GitHub Actions, containerization
              with Docker, orchestration with Kubernetes, GitOps via ArgoCD, and
              Infrastructure as Code with Terraform for AWS resources (EC2, S3,
              IAM, VPC, EKS, CloudWatch).
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Also experienced with Node.js + Express REST APIs, MongoDB/SQL,
              and responsive UI with React + modern web tooling. Focused on
              reliability, performance, automation-driven workflows, and clean
              system design.
            </p>
          </div>
          <div className="grid gap-4 text-xs">
            <motion.div
              className="rounded-xl border border-neonBlue/40 bg-black/40 p-4 shadow-neon"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <p className="text-[10px] font-mono text-slate-400">
                CLOUD &amp; DEVOPS FOCUS
              </p>
              <p className="mt-1 text-sm text-neonBlue">
                CI/CD · GitOps · IaC · Cloud Reliability
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Linux, shell scripting, networking fundamentals, and production
                troubleshooting across cloud environments.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-neonPurple/40 bg-black/40 p-4 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <p className="text-[10px] font-mono text-slate-400">
                FULL STACK LAYERS
              </p>
              <p className="mt-1 text-sm text-neonPurple">
                React · Node.js · Express · MongoDB · SQL
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Responsive, accessible interfaces and APIs that keep the user
                experience fast and reliable.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl border border-neonGreen/40 bg-black/40 p-4"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <p className="text-[10px] font-mono text-slate-400">
                CURRENT QUESTLINE
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                <li>▸ Shipping automated build/test/deploy workflows</li>
                <li>▸ Scaling microservices with Kubernetes + GitOps</li>
                <li>▸ Improving observability and cloud cost efficiency</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

