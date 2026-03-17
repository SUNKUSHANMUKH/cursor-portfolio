"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "DevOps Tools",
    accent: "text-neonBlue",
    items: [
      "Git/GitHub",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "ArgoCD (GitOps)",
      "Terraform (IaC)",
      "Ansible",
      "Linux",
      "Networking"
    ]
  },
  {
    title: "Cloud Platforms",
    accent: "text-neonPurple",
    items: ["AWS (EC2, S3, IAM, VPC, EKS, CloudWatch)", "GCP", "Azure"]
  },
  {
    title: "Programming",
    accent: "text-neonGreen",
    items: ["C", "Python", "Java", "JavaScript", "TypeScript", "Shell Scripting"]
  },
  {
    title: "Frontend",
    accent: "text-neonBlue",
    items: [
      "React",
      "Next.js",
      "HTML/CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design"
    ]
  },
  {
    title: "Databases",
    accent: "text-neonPurple",
    items: ["MongoDB", "SQL", "DBMS Concepts"]
  },
  {
    title: "Data & Design",
    accent: "text-neonGreen",
    items: ["Power BI", "UI/UX", "Figma", "Adobe XD"]
  }
];

export default function Skills() {
  return (
    <section className="relative px-6 pb-20 md:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
              SKILL TREE // CAPABILITIES
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Systems, Clouds &amp; Interfaces
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="glass-panel relative overflow-hidden px-4 py-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/15 via-transparent to-neonPurple/20 opacity-80" />
              <div className="relative z-10">
                <p className={`text-sm font-semibold ${cat.accent}`}>
                  {cat.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="rounded-full border border-slate-600/80 bg-black/40 px-3 py-1 text-xs text-slate-100 shadow-[0_0_14px_rgba(15,23,42,0.9)] hover:border-neonBlue hover:text-neonBlue"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

