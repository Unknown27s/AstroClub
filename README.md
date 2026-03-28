<div align="center">
  <h1>🚀 AstroClub</h1>
  <p><strong>The Smart Digital Ecosystem for College Club Management</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Groq_AI-Llama_3-F55036?style=for-the-badge&logo=meta" alt="Groq API" />
  </p>

  <p>
    A centralized, automated platform with AI-powered recommendations, event management, real-time notifications, attendance tracking, and performance analytics to supercharge student engagement ⚡
  </p>
</div>

---

## ✨ Key Features

### 🤖 AI-Powered Experience (Groq API)
- **AstroBot Assistant:** Chat with our native Llama 3.3 powered conversational AI.
- **Smart Recommendations:** Get event and club recommendations automatically based on your customized profile and interests.

### 🏛️ Club & Event Management
- **Explore & Join:** Filter and search through active clubs.
- **Event Feed:** RSVP to events, view details, and catch up with upcoming campus activities.
- **Calendar & Boards:** Monthly calendar views and central announcement boards strictly for club broadcasts.

### 🎨 Customizable UI "Vibes"
Dynamic, animated UI themes (Glassmorphism layout) out-of-the-box:
- 🌙 **Chill:** Purple & cyan (Default, relaxed)
- 🎯 **Focus:** Green & teal (Clean, minimal)
- ⚡ **Energy:** Orange & red (Vibrant, bold)

### 🏆 Gamification & Engagement
- **Leaderboard:** Student rankings based on points, streaks, and achievement badges.
- **Certificates:** Instantly view and export mock participation certificates.
- **Reviews & Ratings:** Offer star-rated feedback on concluded events natively.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (React, App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **AI Integration:** [Groq API](https://groq.com/) (Llama-3.3-70b-versatile model)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Design Language:** Glassmorphism, Animated Gradients, Dark Themes

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/astroclub.git
cd astroclub
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables

To enable the AstroBot AI Chat and AI recommendations, you'll need a free API key from **Groq**. 

Create a `.env.local` file in the root directory and add your key:

```env
NEXT_PUBLIC_GROQ_API_KEY="your_free_groq_api_key_here"
```
*(Get your free key from the [Groq Console](https://console.groq.com/keys))*

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start exploring AstroClub. Custom mock data acts as the database directly on the client side, so no additional backend configuration is needed to get started! 🎉

---

## 📁 Project Structure Highlights

- `src/app/` — Application Pages & Router configurations (Dashboard, Clubs, Admin, Profile)
- `src/components/` — Reusable, atomic UI elements (AIChatBot, ClubCard, NotificationDropdown, etc.)
- `src/lib/` — API handlers and utility functions (Tailwind merge, Groq API configurations)
- `src/data/` — Static mock data (Clubs, Events, Layout configurations)
- `src/context/` — State providers like **VibeContext**

---

## 🚀 Future Roadmap

- [ ] **BaaS Integration:** Wire up Firebase/Supabase for authentic real-time database and User Auth.
- [ ] **QR Code Scanning:** Allow authentic event check-ins via mobile devices using camera APIs.
- [ ] **WebSockets:** Elevate club chats into real-time collaborative discussion threads.
- [ ] **Mobile App Port:** Leverage React Native / Expo to bring AstroClub directly to student's mobile phones.

---

<div align="center">
  <b>Built for campus life ❤️</b>
</div>
