"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative px-6 md:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-neonBlue">
            COMMS PANEL // CONTACT
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
            Open a Secure Channel
          </h2>
        </div>
        <motion.div
          className="glass-panel relative grid gap-6 px-6 py-6 md:grid-cols-[3fr,2fr]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),transparent,rgba(34,197,94,0.22))] opacity-80" />
          <form className="relative z-10 space-y-4 text-sm">
            <div>
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-700/80 bg-black/50 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-neonBlue focus:bg-black/70"
                placeholder="Enter your callsign"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-700/80 bg-black/50 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-neonPurple focus:bg-black/70"
                placeholder="Where should the response be sent?"
              />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Mission Brief
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-slate-700/80 bg-black/50 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-neonGreen focus:bg-black/70"
                placeholder="Describe the project, role, or DevOps quest..."
              />
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 inline-flex items-center justify-center rounded-xl border border-neonGreen/70 bg-neonGreen/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-neonGreen shadow-[0_0_18px_rgba(34,197,94,0.7)]"
            >
              Send Encrypted Packet
            </motion.button>
          </form>
          <div className="relative z-10 space-y-4 text-sm">
            <div className="rounded-xl border border-slate-700/80 bg-black/50 p-4 text-xs text-slate-200">
              <p className="text-[10px] font-mono text-slate-400">
                DIRECT LINKS
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  CV:{" "}
                  <a
                    href="https://drive.google.com/file/d/18LZHV11BtSvAqsRVqrkhV5YoETfygYRr/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neonGreen hover:underline"
                  >
                    Download CV
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/sunku-giridhar-shanmukh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neonBlue hover:underline"
                  >
                    linkedin.com/in/sunku-giridhar-shanmukh
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neonPurple hover:underline"
                  >
                    github.com/(add-username)
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:sunkushanmukh@gmail.com"
                    className="text-neonGreen hover:underline"
                  >
                    sunkushanmukh@gmail.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+918985782003"
                    className="text-slate-200 hover:underline"
                  >
                    +91 89857 82003
                  </a>
                </li>
                <li>
                  Location:{" "}
                  <span className="text-slate-200">
                    Hyderabad, Telangana, India
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700/80 bg-black/50 p-4 text-xs text-slate-300">
              <p className="text-[10px] font-mono text-slate-400">
                STATUS FEED
              </p>
              <p className="mt-2">
                Responses are thoughtful and detailed – like a well-documented
                runbook. Expect clarity, diagrams, and a focus on reliability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

