"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Bell } from "lucide-react";
import VibeToggle from "./VibeToggle";
import NotificationDropdown from "./NotificationDropdown";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [notifOpen, setNotifOpen] = useState(false);

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/clubs", label: "Clubs" },
    { href: "/calendar", label: "Calendar" },
    { href: "/leaderboard", label: "Leaderboard" },
  ];

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--gradient-1)" }}
            >
              <Rocket size={18} />
            </div>
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
            >
              Astro<span style={{ color: "var(--accent-1)" }}>Club</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
            <VibeToggle />
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="p-2 rounded-lg transition-colors relative cursor-pointer"
                style={{ color: "var(--text-secondary)" }}
              >
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: "var(--accent-1)" }} />
              </button>
              {notifOpen && <NotificationDropdown onClose={() => setNotifOpen(false)} />}
            </div>
            <Link href="/signup" className="btn-primary text-sm py-2 px-5">
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium py-2"
                  style={{ color: "var(--text-secondary)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-2">
                <VibeToggle />
              </div>
              <Link
                href="/signup"
                className="btn-primary text-sm py-2 px-5 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
