"use client";
import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Smile } from "lucide-react";
import { clubs } from "@/data/clubs";

const mockMessages = [
  { id: 1, user: "Aarav S.", avatar: "AS", text: "Hey everyone! Who's coming for the hackathon next week? 🚀", time: "10:30 AM", isMe: false },
  { id: 2, user: "Priya M.", avatar: "PM", text: "Count me in! Already working on a project idea.", time: "10:32 AM", isMe: false },
  { id: 3, user: "You", avatar: "HK", text: "I'm in! Let's form a team? 💪", time: "10:35 AM", isMe: true },
  { id: 4, user: "Rohan K.", avatar: "RK", text: "Sure, I'll join. Need someone for frontend though.", time: "10:38 AM", isMe: false },
  { id: 5, user: "Ananya D.", avatar: "AD", text: "I can handle the UI/UX part! Been learning Figma.", time: "10:40 AM", isMe: false },
  { id: 6, user: "You", avatar: "HK", text: "Perfect team! Let's meet tomorrow at the lab after 3 PM to plan.", time: "10:42 AM", isMe: true },
  { id: 7, user: "Aarav S.", avatar: "AS", text: "Works for me! I'll book the meeting room. 📋", time: "10:45 AM", isMe: false },
  { id: 8, user: "Priya M.", avatar: "PM", text: "I'll bring my laptop with the figma designs. See you all! ✨", time: "10:47 AM", isMe: false },
];

export default function ClubChatPage() {
  const { id } = useParams();
  const club = clubs.find((c) => c.id === id);
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        user: "You",
        avatar: "HK",
        text: input,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        isMe: true,
      },
    ]);
    setInput("");
  };

  if (!club) {
    return (
      <div className="pt-24 pb-12 text-center">
        <p className="text-4xl mb-4">😕</p>
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Club not found</h1>
        <Link href="/clubs" className="btn-primary mt-6 inline-flex">← Back to Clubs</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-0 flex flex-col" style={{ height: "100vh" }}>
      {/* Chat Header */}
      <div className="glass-nav px-4 sm:px-6 py-3 flex items-center gap-3 border-b" style={{ borderColor: "var(--border-color)" }}>
        <Link href={`/clubs/${id}`} className="p-1 hover:opacity-70" style={{ color: "var(--text-secondary)" }}>
          <ArrowLeft size={18} />
        </Link>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
          style={{ background: `${club.color}15`, border: `1px solid ${club.color}30` }}
        >
          {club.image}
        </div>
        <div>
          <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{club.name}</h3>
          <p className="text-[11px]" style={{ color: "var(--text-secondary)" }}>{club.memberCount} members • {club.members.length} online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 flex flex-col gap-3" style={{ background: "var(--bg-primary)" }}>
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            className={`flex gap-2 max-w-[80%] ${msg.isMe ? "ml-auto flex-row-reverse" : ""}`}
          >
            <div className="avatar text-[10px] w-8 h-8 flex-shrink-0 mt-1">{msg.avatar}</div>
            <div>
              <div className="flex items-center gap-2 mb-0.5" style={{ flexDirection: msg.isMe ? "row-reverse" : "row" }}>
                <span className="text-[11px] font-semibold" style={{ color: msg.isMe ? "var(--accent-1)" : "var(--text-primary)" }}>
                  {msg.user}
                </span>
                <span className="text-[10px]" style={{ color: "var(--text-secondary)", opacity: 0.6 }}>{msg.time}</span>
              </div>
              <div
                className="px-3 py-2 rounded-2xl text-sm"
                style={{
                  background: msg.isMe ? "var(--gradient-1)" : "var(--bg-card)",
                  border: msg.isMe ? "none" : "1px solid var(--border-color)",
                  color: msg.isMe ? "white" : "var(--text-primary)",
                  borderTopRightRadius: msg.isMe ? "4px" : "16px",
                  borderTopLeftRadius: msg.isMe ? "16px" : "4px",
                }}
              >
                {msg.text}
              </div>
            </div>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 sm:px-6 py-3 border-t" style={{ borderColor: "var(--border-color)", background: "var(--bg-secondary)" }}>
        <form onSubmit={sendMessage} className="flex gap-2 items-center">
          <button type="button" className="p-2 cursor-pointer" style={{ color: "var(--text-secondary)" }}>
            <Smile size={20} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="glass-input flex-1 py-2.5"
            id="chat-input"
          />
          <button type="submit" className="btn-primary py-2.5 px-4" id="chat-send">
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
