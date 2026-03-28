"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";

export default function EventCard({ event, index = 0 }) {
  const dateObj = new Date(event.date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/events/${event.id}`}>
        <div className="glass-card p-5 flex gap-4 cursor-pointer group">
          {/* Date Badge */}
          <div
            className="flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
            style={{ background: "var(--gradient-1)" }}
          >
            <span className="text-2xl font-bold text-white leading-none">{day}</span>
            <span className="text-[10px] font-semibold text-white/80 uppercase">{month}</span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium" style={{ color: "var(--accent-1)" }}>
                {event.clubName}
              </span>
              <span className="badge text-[10px] py-0.5 px-2">{event.type}</span>
            </div>
            <h4
              className="text-sm font-semibold truncate group-hover:opacity-80 transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              {event.title}
            </h4>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
                <Clock size={12} />
                <span className="text-xs">{event.time}</span>
              </div>
              <div className="flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
                <MapPin size={12} />
                <span className="text-xs truncate">{event.location}</span>
              </div>
            </div>
          </div>

          {/* Attendees */}
          <div className="flex-shrink-0 flex flex-col items-end justify-center">
            <div className="flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
              <Users size={12} />
              <span className="text-xs font-medium">
                {event.attendees}/{event.maxAttendees}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
