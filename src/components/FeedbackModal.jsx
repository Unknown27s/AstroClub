"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, X, Send } from "lucide-react";

export default function FeedbackModal({ event, onClose }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-6 sm:p-8 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg cursor-pointer hover:opacity-70"
          style={{ color: "var(--text-secondary)" }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}>
              Rate this Event
            </h3>
            <p className="text-xs mb-5" style={{ color: "var(--text-secondary)" }}>
              {event?.title}
            </p>

            {/* Stars */}
            <div className="flex gap-2 mb-5 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <Star
                    size={32}
                    fill={(hover || rating) >= star ? "var(--accent-1)" : "transparent"}
                    style={{ color: (hover || rating) >= star ? "var(--accent-1)" : "var(--text-secondary)" }}
                  />
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <textarea
                placeholder="Share your experience... (optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="glass-input min-h-[100px] resize-none"
                rows={4}
              />
              <button type="submit" className="btn-primary w-full" disabled={rating === 0}>
                <Send size={14} /> Submit Feedback
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <p className="text-4xl mb-3">🎉</p>
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Outfit, sans-serif", color: "var(--text-primary)" }}>
              Thanks for your feedback!
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Your rating of {rating}/5 helps us improve.
            </p>
            <button onClick={onClose} className="btn-primary mt-5">Close</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
