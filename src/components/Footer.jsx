import Link from "next/link";
import { Rocket, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t mt-20"
      style={{ borderColor: "var(--border-color)", background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                style={{ background: "var(--gradient-1)" }}
              >
                <Rocket size={16} />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "Outfit, sans-serif" }}>
                Astro<span style={{ color: "var(--accent-1)" }}>Club</span>
              </span>
            </Link>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              A smart digital ecosystem for managing all club activities efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              Platform
            </h4>
            <div className="flex flex-col gap-2">
              {["Dashboard", "Clubs", "Calendar", "Leaderboard"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              Resources
            </h4>
            <div className="flex flex-col gap-2">
              {["About", "Help Center", "Contact"].map((item) => (
                <span
                  key={item}
                  className="text-sm cursor-pointer transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              Connect
            </h4>
            <div className="flex gap-3">
              {[Github, Twitter, Mail].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            © 2026 AstroClub. Built with ❤️ for campus life.
          </p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Made for Hackathon 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
