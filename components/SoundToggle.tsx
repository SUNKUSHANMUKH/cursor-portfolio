"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled((v) => !v)}
      className="group relative flex items-center gap-1 rounded-md border border-slate-700/70 bg-black/40 px-2 py-1 text-[10px] font-semibold text-slate-300 transition hover:border-neonPurple hover:bg-neonPurple/10 hover:text-neonPurple"
    >
      <motion.span
        className={`h-1.5 w-1.5 rounded-full ${
          enabled ? "bg-neonGreen" : "bg-slate-600"
        }`}
        animate={{
          boxShadow: enabled
            ? "0 0 10px rgba(34,197,94,0.9)"
            : "0 0 0px rgba(15,23,42,0.0)"
        }}
        transition={{ duration: 0.3 }}
      />
      <span>{enabled ? "SFX: ON" : "SFX: OFF"}</span>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-slate-500 opacity-0 transition group-hover:opacity-100">
        (placeholder toggle – wire sounds later)
      </span>
    </button>
  );
}

