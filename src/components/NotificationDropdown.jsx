"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, Users, Trophy, Megaphone, X } from "lucide-react";

const initialNotifications = [
  { id: 1, type: "event", icon: Calendar, title: "HackVibe 2026 starts tomorrow!", desc: "Don't forget to bring your laptop", time: "2 hours ago", unread: true },
  { id: 2, type: "club", icon: Users, title: "You were added to Robotics Club", desc: "Welcome aboard! Check out upcoming events", time: "5 hours ago", unread: true },
  { id: 3, type: "achievement", icon: Trophy, title: "Badge Earned: Rising Star 🌟", desc: "Attended 10 events this semester", time: "1 day ago", unread: false },
  { id: 4, type: "announcement", icon: Megaphone, title: "New announcement from E-Cell", desc: "Startup pitch competition dates announced", time: "2 days ago", unread: false },
  { id: 5, type: "event", icon: Calendar, title: "Poetry Slam RSVP confirmed", desc: "Your spot is reserved for March 30th", time: "3 days ago", unread: false },
];

export default function NotificationDropdown({ onClose }) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const dismiss = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-12 right-0 w-80 sm:w-96 z-50 glass-card overflow-hidden"
      style={{ border: "1px solid var(--border-color)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--border-color)" }}>
        <div className="flex items-center gap-2">
          <Bell size={16} style={{ color: "var(--accent-1)" }} />
          <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Notifications</h3>
          {unreadCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: "var(--accent-1)" }}>
              {unreadCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-[11px] font-medium cursor-pointer hover:opacity-70 transition-opacity"
              style={{ color: "var(--accent-1)" }}
            >
              Mark all read
            </button>
          )}
          <button onClick={onClose} className="p-1 rounded-lg cursor-pointer hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
            <X size={14} />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-2xl mb-2">🔔</p>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>No notifications</p>
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className="flex gap-3 px-4 py-3 transition-colors border-b group"
              style={{
                borderColor: "var(--border-color)",
                background: n.unread ? "rgba(108, 99, 255, 0.05)" : "transparent",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "var(--gradient-1)" }}
              >
                <n.icon size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                  {n.title}
                </p>
                <p className="text-[11px] mt-0.5 truncate" style={{ color: "var(--text-secondary)" }}>
                  {n.desc}
                </p>
                <p className="text-[10px] mt-1" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
                  {n.time}
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                {n.unread && (
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: "var(--accent-1)" }} />
                )}
                <button
                  onClick={() => dismiss(n.id)}
                  className="p-0.5 rounded cursor-pointer opacity-0 group-hover:opacity-60 hover:!opacity-100 transition-opacity"
                  style={{ color: "var(--text-secondary)" }}
                  aria-label="Dismiss notification"
                >
                  <X size={11} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t text-center" style={{ borderColor: "var(--border-color)" }}>
        <span className="text-xs font-medium cursor-pointer hover:opacity-70 transition-opacity" style={{ color: "var(--accent-1)" }}>
          View All Notifications
        </span>
      </div>
    </motion.div>
  );
}
