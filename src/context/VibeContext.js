"use client";
import { createContext, useContext, useState, useEffect } from "react";

const VibeContext = createContext();

const VIBES = {
  chill: { name: "Chill", emoji: "🌙", label: "Relaxed & calm" },
  focus: { name: "Focus", emoji: "🎯", label: "Clean & minimal" },
  energy: { name: "Energy", emoji: "⚡", label: "Bold & vibrant" },
};

export function VibeProvider({ children }) {
  const [vibe, setVibe] = useState("chill");

  useEffect(() => {
    const saved = localStorage.getItem("clubvibe-mode");
    if (saved && VIBES[saved]) setVibe(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-vibe", vibe);
    localStorage.setItem("clubvibe-mode", vibe);
  }, [vibe]);

  return (
    <VibeContext.Provider value={{ vibe, setVibe, vibes: VIBES }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  const ctx = useContext(VibeContext);
  if (!ctx) throw new Error("useVibe must be used within VibeProvider");
  return ctx;
}
