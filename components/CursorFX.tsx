"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFX() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-40 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neonBlue shadow-neon"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 580, damping: 30, mass: 0.4 }}
      />
      <motion.div
        className="pointer-events-none fixed z-30 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neonBlue/10 blur-3xl"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 120, damping: 40, mass: 1.2 }}
      />
    </>
  );
}

