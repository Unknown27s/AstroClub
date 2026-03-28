"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, Users, Calendar, QrCode, Check } from "lucide-react";
import { events } from "@/data/events";

export default function EventDetailPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [rsvp, setRsvp] = useState(false);

  if (!event) {
    return (
      <div className="pt-24 pb-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-4xl mb-4">😕</p>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Event not found
          </h1>
          <Link href="/dashboard" className="btn-primary mt-6 inline-flex">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const progress = Math.round((event.attendees / event.maxAttendees) * 100);

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:opacity-80 transition-opacity"
          style={{ color: "var(--text-secondary)" }}
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 glass-card p-8 relative overflow-hidden"
          >
            <div className="glow-orb glow-orb-1" style={{ opacity: 0.12, width: 200, height: 200 }} />
            <div className="relative z-10">
              {/* Event Type Badge & Club */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="badge">{event.type}</span>
                <Link
                  href={`/clubs/${event.clubId}`}
                  className="text-xs font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "var(--accent-1)" }}
                >
                  {event.clubName} →
                </Link>
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
              >
                <span className="mr-3">{event.image}</span>
                {event.title}
              </h1>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {event.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <Calendar size={18} style={{ color: "var(--accent-1)" }} />
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Date</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {formattedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <Clock size={18} style={{ color: "var(--accent-1)" }} />
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Time</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {event.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <MapPin size={18} style={{ color: "var(--accent-1)" }} />
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Location</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {event.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}>
                  <Users size={18} style={{ color: "var(--accent-1)" }} />
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Spots</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {event.attendees} / {event.maxAttendees} registered
                    </p>
                  </div>
                </div>
              </div>

              {/* RSVP */}
              <button
                onClick={() => setRsvp(!rsvp)}
                className={rsvp ? "btn-secondary w-full sm:w-auto" : "btn-primary w-full sm:w-auto"}
                id="rsvp-button"
              >
                {rsvp ? (
                  <>
                    <Check size={16} /> Registered ✓
                  </>
                ) : (
                  "RSVP — Reserve Your Spot"
                )}
              </button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* QR Code Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6 text-center"
            >
              <h3
                className="text-sm font-semibold mb-4 flex items-center justify-center gap-2"
                style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
              >
                <QrCode size={16} style={{ color: "var(--accent-1)" }} />
                Check-in QR
              </h3>
              <div
                className="w-40 h-40 mx-auto rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: "var(--bg-card)",
                  border: "2px dashed var(--border-color)",
                }}
              >
                <div className="text-center">
                  <QrCode size={48} style={{ color: "var(--accent-1)", opacity: 0.5 }} />
                  <p className="text-[10px] mt-2" style={{ color: "var(--text-secondary)" }}>
                    Available on event day
                  </p>
                </div>
              </div>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Scan at venue for instant attendance
              </p>
            </motion.div>

            {/* Capacity Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6"
            >
              <h3
                className="text-sm font-semibold mb-3"
                style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}
              >
                Registration Progress
              </h3>
              <div className="w-full h-3 rounded-full overflow-hidden mb-2" style={{ background: "var(--bg-card)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-1)" }}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {event.attendees} registered
                </span>
                <span className="text-xs font-semibold" style={{ color: "var(--accent-1)" }}>
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
