"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Mail, Lock, Rocket, ArrowRight, Heart } from "lucide-react";

const interestOptions = [
  "Technology", "Design", "Music", "Sports", "Business",
  "Photography", "Literature", "Robotics", "Gaming", "Social Work",
];

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState([]);

  const toggleInterest = (interest) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12 animated-gradient relative">
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-10 w-full max-w-md relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "var(--gradient-1)" }}
          >
            <Rocket size={24} className="text-white" />
          </div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
          >
            Join AstroClub
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Create your account and discover amazing clubs
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
              Full Name
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                type="text"
                placeholder="Harish Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass-input pl-11"
                id="signup-name"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
              Email
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                type="email"
                placeholder="you@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-input pl-11"
                id="signup-email"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block" style={{ color: "var(--text-secondary)" }}>
              Password
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-secondary)" }}
              />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input pl-11"
                id="signup-password"
              />
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="text-xs font-medium mb-2 flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
              <Heart size={12} /> Pick Your Interests
            </label>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer"
                  style={{
                    background: interests.includes(interest)
                      ? "var(--accent-1)"
                      : "var(--bg-card)",
                    color: interests.includes(interest) ? "white" : "var(--text-secondary)",
                    border: `1px solid ${
                      interests.includes(interest) ? "var(--accent-1)" : "var(--border-color)"
                    }`,
                  }}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-primary mt-2 w-full" id="signup-submit">
            Create Account <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center text-sm mt-6" style={{ color: "var(--text-secondary)" }}>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold" style={{ color: "var(--accent-1)" }}>
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
