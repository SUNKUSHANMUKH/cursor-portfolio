"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black via-cyberBg to-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 hud-grid" />
          <motion.div
            className="relative glass-panel px-10 py-8 neon-border"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="mb-3 text-xs tracking-[0.3em] text-slate-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              INITIALIZING // DEVOPS INTERFACE
            </motion.div>
            <motion.h1
              className="glow-text bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              BOOTING SUNKU GIRIDHAR SHANMUKH
            </motion.h1>
            <motion.div
              className="mt-6 h-1.5 w-72 overflow-hidden rounded-full bg-slate-800/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full w-full bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.p
              className="mt-3 text-xs text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              STATUS: <span className="text-neonGreen">ONLINE</span> // LOADING
              DASHBOARD...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

