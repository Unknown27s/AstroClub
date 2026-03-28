# 🚀 AstroClub — Smart Digital Ecosystem for Club Management

> A centralized, automated platform with event management, real-time notifications, attendance tracking, and performance analytics to improve efficiency and student engagement.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Animated gradient hero with feature showcase |
| 🔐 **Auth UI** | Login & Sign-up forms with interest selector |
| 📊 **Dashboard** | Personalized stats, upcoming events, recommended clubs |
| 🏛️ **Club Management** | Browse, search, filter, join clubs. Member & role management |
| 📅 **Event Management** | Event details, RSVP, QR attendance placeholder |
| 📢 **Announcements** | Central announcement board with club filters |
| 🏆 **Leaderboard** | Student rankings, points, streaks & achievement badges |
| 📆 **Calendar** | Monthly calendar view with event indicators |
| 💬 **Club Chat** | Discussion forum per club |
| 🎓 **Certificates** | Auto-generated participation certificate preview |
| ⭐ **Feedback** | Star rating & comment system for events |
| 🔔 **Notifications** | Real-time notification dropdown |
| 🎨 **Vibe Modes** | 3 UI themes — Chill 🌙, Focus 🎯, Energy ⚡ |
| 🛡️ **Admin Panel** | Club/event/user management dashboard |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Design:** Glassmorphism, animated gradients, dark theme

---

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/astroclub.git
   cd astroclub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

That's it! 🎉 The app runs entirely on the frontend with mock data — no backend setup needed.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js              # Root layout + fonts + vibe provider
│   ├── page.js                # Landing page
│   ├── globals.css            # Design system + glassmorphism + vibe modes
│   ├── login/page.js          # Login form
│   ├── signup/page.js         # Sign-up form
│   ├── dashboard/page.js      # Student dashboard
│   ├── clubs/
│   │   ├── page.js            # Clubs listing
│   │   └── [id]/
│   │       ├── page.js        # Club detail
│   │       └── chat/page.js   # Club chat
│   ├── events/[id]/page.js    # Event detail
│   ├── announcements/page.js  # Announcement board
│   ├── leaderboard/page.js    # Leaderboard & badges
│   ├── calendar/page.js       # Monthly calendar
│   └── admin/page.js          # Admin panel
├── components/
│   ├── Navbar.jsx             # Navigation bar + notification bell
│   ├── Footer.jsx             # Footer
│   ├── HeroSection.jsx        # Landing hero
│   ├── ClubCard.jsx           # Club card
│   ├── EventCard.jsx          # Event card
│   ├── StatsCard.jsx          # Dashboard stat card
│   ├── VibeToggle.jsx         # Vibe mode switcher
│   ├── NotificationDropdown.jsx
│   ├── FeedbackModal.jsx      # Star rating modal
│   └── CertificatePreview.jsx # Certificate generator
├── context/
│   └── VibeContext.js         # Vibe mode state management
├── data/
│   ├── clubs.js               # Mock club data (8 clubs)
│   └── events.js              # Mock event data (10 events)
└── lib/
    └── utils.js               # Tailwind merge utility
```

---

## 🎨 Vibe Modes

| Mode | Theme | Colors |
|---|---|---|
| 🌙 **Chill** | Purple & cyan, relaxed | Default |
| 🎯 **Focus** | Green & teal, minimal | Clean |
| ⚡ **Energy** | Orange & red, bold | Vibrant |

Toggle between modes using the switcher in the navbar!

---

## 🚀 Build for Production

```bash
npm run build
npm start
```

---

## 📝 Problem Statement

> To build a smart digital ecosystem for managing all club activities efficiently, reducing manual work and improving student engagement.

---

## 🏗️ Future Enhancements

- Firebase backend integration (auth, database, storage)
- Real QR code scanning for attendance
- Push notifications via Firebase Cloud Messaging
- AI-based event recommendations
- Mobile app with React Native
- Real-time chat with WebSockets

---

## 👨‍💻 Built For

**Hackathon 2026** — Built with ❤️ for campus life.

---

## 📄 License

MIT License
