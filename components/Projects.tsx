"use client";

import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  tag?: string;
};

const projects = [
  {
  name: "DevOps GithubActions CI/CD Pipeline for Full Stack Application",
  description:
  "Designed and implemented an end-to-end CI/CD pipeline using GithubActions, Docker, and AWS to automate build, test, and deployment workflows.",
  tech: ["GithubActions", "Docker", "AWS", "CI/CD"],
  github: "https://github.com/SUNKUSHANMUKH/nextjs-GithubActions-CICD",
  demo: "https://github.com/SUNKUSHANMUKH/nextjs-GithubActions-CICD",
  tag: "DevOps"
  },
  {
    name: "CI/CD Pipeline with Jenkins for Node.js Application",
    description:
    "Implemented a Jenkins-based CI/CD pipeline to automate build and deployment of a Node.js application, improving delivery speed and reducing manual intervention.",
    tech: ["Jenkins", "Node.js", "CI/CD"],
    github: "https://github.com/SUNKUSHANMUKH/Node.js-project-Jenkins-Pipeline",
    tag: "DevOps"
    },
    {
    name: "Two-Tier Application Deployment (Flask + Infrastructure)",
    description:
    "Built and deployed a two-tier application using Python Flask with backend integration, demonstrating application hosting and environment configuration.",
    tech: ["Python", "Flask", "Backend", "Deployment"],
    github: "https://github.com/SUNKUSHANMUKH/python-flask-project-2tierapp",
    tag: "Cloud"
    },
    {
    name: "Microservices Video-to-Audio Converter",
    description:
    "Developed a microservices-based system to convert video files into audio, showcasing service separation and scalable architecture design.",
    tech: ["Python", "Microservices", "Media Processing"],
    github: "https://github.com/SUNKUSHANMUKH/Microservices-pytho-video-to-audio-convertor",
    tag: "DevOps"
    },
    {
    name: "AWS Event Pipeline (S3 → SQS via CloudTrail)",
    description:
    "Designed an event-driven architecture where file operations in S3 trigger notifications and are transferred to SQS using CloudTrail integration.",
    tech: ["AWS S3", "SQS", "CloudTrail", "Event-Driven Architecture"],
    github: "https://github.com/SUNKUSHANMUKH/generation-of-1k-messages-in-S3-and-transfer-to-SQS-from-Cloudtrail",
    tag: "Cloud"
    },
    {
    name: "S3 Integration Testing with EC2",
    description:
    "Tested and validated integration between EC2 instances and S3 buckets for storage operations, ensuring reliable data transfer workflows.",
    tech: ["AWS EC2", "AWS S3", "Cloud Testing"],
    github: "https://github.com/SUNKUSHANMUKH/Sample_Ideal_testing_S3_with_EC2",
    tag: "Cloud"
    },
    {
    name: "AWS S3 Storage Testing",
    description:
    "Performed structured testing on S3 storage operations including upload, retrieval, and access control validation.",
    tech: ["AWS S3", "Storage", "Testing"],
    github: "https://github.com/SUNKUSHANMUKH/Ideal_testing_S3",
    tag: "Cloud"
    },
    {
    name: "AWS EC2 Instance Testing",
    description:
    "Configured and tested EC2 instances to validate compute performance, connectivity, and deployment readiness.",
    tech: ["AWS EC2", "Compute", "Testing"],
    github: "https://github.com/SUNKUSHANMUKH/Ideal_testing_EC2",
    tag: "Cloud"
    },
  {
  name: "Mittinrich — Smart Compost System",
  description:
  "Organic farming relies on composting, but maintaining the compost environment is challenging. This system automates monitoring, alerts, and maintenance to simplify composting for households.",
  tech: ["React", "Node.js", "MongoDB", "IoT Sensors (MPMC)"],
  github: "https://github.com/SUNKUSHANMUKH/TerraSmartCompost",
  demo: "https://terrasmartcompost.vercel.app/",
  tag: "Robotics"
  },
  {
  name: "Fake Product & Fake Review Detection",
  description:
  "Detects whether products/reviews are fake or real, and flags reviews written via AI.",
  tech: ["React", "Next.js", "MongoDB", "Tailwind CSS", "AI"],
  github: "https://github.com/SUNKUSHANMUKH/Fake-product-and-Review-Detection",
  demo: "https://fake-product-and-review-detection.vercel.app/",
  tag: "Web"
  },
  {
  name: "Multilingual Text-to-Speech Converter",
  description:
  "A framework where you can directly convert text into speech across languages.",
  tech: ["JavaScript", "Streamlit", "gTTS", "Googletrans"],
  github: "https://github.com/SUNKUSHANMUKH/MULTILINGUAL-TEXT-TO-SPEECH-CONVERTOR-",
  demo: "https://multilingual-text-to-speech-convertor.vercel.app/",
  tag: "Web"
  },
  {
  name: "Upakshya Viraha — Waste Segregation Automation",
  description:
  "Automation of waste material segregation in the scrap sector, separating glass, metal, and plastic.",
  tech: ["React", "Node.js", "MongoDB", "Sensors (MPMC)"],
  github: "https://github.com/SUNKUSHANMUKH/Upakshya-Viraha",
  tag: "Robotics"
  }
  ];
  
const devopsProjects = (projects as Project[]).filter((p) =>
  ["DevOps", "Cloud"].includes(p.tag ?? "")
);

const fullstackAiProjects = (projects as Project[]).filter(
  (p) => !["DevOps", "Cloud"].includes(p.tag ?? "")
);

function ProjectsGrid({
  list,
  delayOffset = 0
}: {
  list: Project[];
  delayOffset?: number;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {list.map((project, idx) => (
        <motion.article
          key={project.name}
          className="glass-panel relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delayOffset + idx * 0.06 }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%)] opacity-70" />
          <div className="relative z-10 flex flex-col gap-3 p-4">
            <header className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-neonBlue">
                {project.name}
              </h3>
              <span className="rounded-full border border-neonPurple/60 bg-black/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-neonPurple">
                {project.tag ?? "PROJECT"}
              </span>
            </header>
            <p className="text-sm text-slate-200">{project.description}</p>
            <div className="mt-1 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-600/80 bg-black/40 px-2.5 py-0.5 text-[11px] text-slate-100"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 text-xs">
              <div className="flex gap-2">
                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="rounded-lg border border-slate-700/80 bg-black/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 hover:border-neonBlue hover:text-neonBlue"
                  >
                    GitHub
                  </motion.a>
                ) : null}
                {project.demo ? (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="rounded-lg border border-neonGreen/60 bg-neonGreen/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-neonGreen"
                  >
                    Live Demo
                  </motion.a>
                ) : null}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative px-6 pb-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
              ACTIVE MISSIONS // PROJECTS
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Real-World Systems in Play
            </h2>
          </div>
        </div>
        <div className="space-y-10">
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.28em] text-neonGreen">
                  TRACK A // DEVOPS PROJECTS
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Pipelines, cloud infrastructure, automation, and validation
                  workflows.
                </p>
              </div>
              <span className="rounded-full border border-neonGreen/50 bg-neonGreen/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-neonGreen">
                {devopsProjects.length} Projects
              </span>
            </div>
            <ProjectsGrid list={devopsProjects} />
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.28em] text-neonPurple">
                  TRACK B // FULL STACK + AI PROJECTS
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Web apps, AI-assisted systems, and IoT-backed full stack builds.
                </p>
              </div>
              <span className="rounded-full border border-neonPurple/50 bg-neonPurple/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-neonPurple">
                {fullstackAiProjects.length} Projects
              </span>
            </div>
            <ProjectsGrid list={fullstackAiProjects} delayOffset={0.1} />
          </div>
        </div>
      </div>
    </section>
  );
}

