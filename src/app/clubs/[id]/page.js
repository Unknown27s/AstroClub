"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Calendar, Bell, Megaphone } from "lucide-react";
import EventCard from "@/components/EventCard";
import { clubs } from "@/data/clubs";
import { events } from "@/data/events";

export default function ClubDetailPage() {
  const { id } = useParams();
  const club = clubs.find((c) => c.id === id);

  if (!club) {
    return (
      <div className="pt-24 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-4xl mb-4">😕</p>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Club not found
          </h1>
          <Link href="/clubs" className="btn-primary mt-6 inline-flex">
            ← Back to Clubs
          </Link>
        </div>
      </div>
    );
  }

  const clubEvents = events.filter((e) => e.clubId === club.id);

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/clubs"
          className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={16} /> Back to Clubs
        </Link>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 sm:p-10 mb-8 relative overflow-hidden"
        >
          <div
            className="glow-orb"
            style={{
              width: 250,
              height: 250,
              background: club.color,
              opacity: 0.15,
              top: -50,
              right: -50,
            }}
          />
          <div className="relative z-10">
            <div className="flex items-start gap-5 mb-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                style={{
                  background: `${club.color}15`,
                  border: `2px solid ${club.color}30`,
                }}
              >
                {club.image}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h1
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
                  >
                    {club.name}
                  </h1>
                  <span className="badge">{club.category}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {club.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                <Users size={16} />
                <span className="text-sm font-medium">{club.memberCount} Members</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                <Calendar size={16} />
                <span className="text-sm font-medium">{clubEvents.length} Events</span>
              </div>
              <button className="btn-primary text-sm py-2 px-6 ml-auto">
                Join Club
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events */}
          <div className="lg:col-span-2">
            <h2
              className="text-lg font-semibold mb-5 flex items-center gap-2"
              style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
            >
              <Calendar size={18} style={{ color: "var(--accent-1)" }} />
              Events
            </h2>
            {clubEvents.length > 0 ? (
              <div className="flex flex-col gap-3">
                {clubEvents.map((event, i) => (
                  <EventCard key={event.id} event={event} index={i} />
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 text-center">
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  No upcoming events
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Members */}
            <div>
              <h3
                className="text-lg font-semibold mb-4 flex items-center gap-2"
                style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
              >
                <Users size={18} style={{ color: "var(--accent-1)" }} />
                Members
              </h3>
              <div className="glass-card p-5 flex flex-col gap-3">
                {club.members.map((member, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="avatar text-xs">{member.charAt(0)}</div>
                    <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                      {member}
                    </span>
                    {i === 0 && (
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full ml-auto"
                        style={{
                          background: "rgba(245, 158, 11, 0.15)",
                          color: "#f59e0b",
                          border: "1px solid rgba(245, 158, 11, 0.2)",
                        }}
                      >
                        Admin
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div>
              <h3
                className="text-lg font-semibold mb-4 flex items-center gap-2"
                style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
              >
                <Megaphone size={18} style={{ color: "var(--accent-1)" }} />
                Announcements
              </h3>
              <div className="flex flex-col gap-3">
                {club.announcements.map((ann, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="glass-card p-4 flex items-start gap-3"
                  >
                    <Bell size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent-1)" }} />
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {ann}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
