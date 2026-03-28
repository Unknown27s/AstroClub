"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Download } from "lucide-react";

export default function CertificatePreview({ event, userName = "Harish Kumar", onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        {/* Certificate */}
        <div
          className="relative p-10 sm:p-14 text-center rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0a0a2a 0%, #1a1050 50%, #0a0a2a 100%)",
            border: "2px solid rgba(108, 99, 255, 0.3)",
          }}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: "var(--accent-1)", opacity: 0.5 }} />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: "var(--accent-1)", opacity: 0.5 }} />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: "var(--accent-1)", opacity: 0.5 }} />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: "var(--accent-1)", opacity: 0.5 }} />

          <div className="flex items-center justify-center gap-2 mb-4">
            <Award size={28} style={{ color: "var(--accent-1)" }} />
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "var(--accent-1)" }}>
              Certificate of Participation
            </span>
          </div>

          <p className="text-xs mb-6 tracking-wide" style={{ color: "var(--text-secondary)" }}>
            This is to certify that
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{
              fontFamily: "Outfit, sans-serif",
              backgroundImage: "var(--gradient-1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {userName}
          </h2>

          <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
            has successfully participated in
          </p>

          <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}>
            {event?.title}
          </h3>

          <p className="text-xs mb-6" style={{ color: "var(--text-secondary)" }}>
            Organized by {event?.clubName} • {new Date(event?.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="text-center">
              <div className="w-full border-b mb-2" style={{ borderColor: "var(--text-secondary)" }} />
              <p className="text-[10px]" style={{ color: "var(--text-secondary)" }}>Club Head</p>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-sm font-bold" style={{ color: "var(--accent-1)" }}>🚀 AstroClub</p>
              <p className="text-[10px]" style={{ color: "var(--text-secondary)" }}>Powered by</p>
            </div>
            <div className="text-center">
              <div className="w-full border-b mb-2" style={{ borderColor: "var(--text-secondary)" }} />
              <p className="text-[10px]" style={{ color: "var(--text-secondary)" }}>Faculty Advisor</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-4 justify-center">
          <button onClick={onClose} className="btn-secondary text-sm py-2 px-6">Close</button>
          <button className="btn-primary text-sm py-2 px-6">
            <Download size={14} /> Download
          </button>
        </div>
      </motion.div>
    </div>
  );
}
