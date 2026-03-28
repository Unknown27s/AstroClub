"use client";
import { useVibe } from "@/context/VibeContext";
import { motion } from "framer-motion";

export default function VibeToggle() {
  const { vibe, setVibe, vibes } = useVibe();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
      {Object.entries(vibes).map(([key, { emoji, name }]) => (
        <button
          key={key}
          onClick={() => setVibe(key)}
          className="relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-300 cursor-pointer"
          style={{ color: vibe === key ? "white" : "var(--text-secondary)" }}
          title={name}
        >
          {vibe === key && (
            <motion.div
              layoutId="vibe-indicator"
              className="absolute inset-0 rounded-full"
              style={{ background: "var(--gradient-1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{emoji} {name}</span>
        </button>
      ))}
    </div>
  );
}
