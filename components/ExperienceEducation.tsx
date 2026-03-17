"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "DevOps Engineer",
    org: "Miraki Technology",
    time: "2025 - Present",
    detail:
      "Working on CI/CD pipelines, AWS/GCP/Azure infrastructure, containerization with Docker and Kubernetes, and automation using Terraform and Ansible. Designing scalable, secure cloud solutions and improving reliability and performance."
  },
  {
    role: "Full Stack Developer — Intern",
    org: "Coursevita",
    time: "3 Months",
    detail:
      "Built and modernized company website components with responsive UI. Worked across React, Node.js, and Express, improving performance and cross-browser compatibility while collaborating with design teams and integrating APIs."
  }
];

const education = [
  {
    degree: "Electronics and Computer Engineering",
    org: "Sreenidhi Institute of Science and Technology",
    time: "2021 - 2025",
    detail:
      "Specialized in Web Technologies and Robotics. Focused on performance for complex web apps and industry-ready solutions."
  },
  {
    degree: "Intermediate of Education (MPC)",
    org: "State University, Telangana",
    time: "2019 - 2021",
    detail: "Passed with 92.4%."
  },
  {
    degree: "Secondary Schooling (SSC)",
    org: "SR Digi School, Telangana",
    time: "2019",
    detail: "Passed with CGPA 9.2."
  }
];

export default function ExperienceEducation() {
  return (
    <section className="relative px-6 pb-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
            CAREER LOG // EXPERIENCE &amp; EDUCATION
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
            Missions Completed, Skills Unlocked
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            className="glass-panel relative overflow-hidden p-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),transparent_60%)] opacity-70" />
            <div className="relative z-10">
              <p className="text-sm font-semibold text-neonPurple">
                Work Experience
              </p>
              <div className="mt-4 space-y-4">
                {experience.map((e) => (
                  <div
                    key={`${e.role}-${e.org}`}
                    className="rounded-xl border border-slate-700/80 bg-black/50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-100">
                          {e.role}
                        </p>
                        <p className="text-xs text-slate-300">{e.org}</p>
                      </div>
                      <span className="rounded-full border border-neonBlue/50 bg-neonBlue/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-neonBlue">
                        {e.time}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {e.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel relative overflow-hidden p-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),transparent_60%)] opacity-70" />
            <div className="relative z-10">
              <p className="text-sm font-semibold text-neonGreen">Education</p>
              <div className="mt-4 space-y-4">
                {education.map((ed) => (
                  <div
                    key={`${ed.degree}-${ed.org}`}
                    className="rounded-xl border border-slate-700/80 bg-black/50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-100">
                          {ed.degree}
                        </p>
                        <p className="text-xs text-slate-300">{ed.org}</p>
                      </div>
                      <span className="rounded-full border border-neonGreen/50 bg-neonGreen/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-neonGreen">
                        {ed.time}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {ed.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

