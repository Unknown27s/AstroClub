"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function ClubCard({ club, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/clubs/${club.id}`}>
        <div className="glass-card p-6 h-full flex flex-col gap-4 cursor-pointer group">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: `${club.color}15`,
                border: `1px solid ${club.color}30`,
              }}
            >
              {club.image}
            </div>
            <span className="badge">{club.category}</span>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3
              className="text-lg font-semibold mb-2 group-hover:opacity-80 transition-colors"
              style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
            >
              {club.name}
            </h3>
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {club.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "var(--border-color)" }}>
            <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
              <Users size={14} />
              <span className="text-xs font-medium">{club.memberCount} members</span>
            </div>
            <span
              className="text-xs font-semibold transition-colors"
              style={{ color: "var(--accent-1)" }}
            >
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
