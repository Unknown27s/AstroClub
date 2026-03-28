"use client";
import { motion } from "framer-motion";

export default function StatsCard({ icon: Icon, label, value, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card p-5 flex items-center gap-4"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--gradient-1)" }}
      >
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold" style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}>
          {value}
        </p>
        <p className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
          {label}
        </p>
      </div>
    </motion.div>
  );
}
