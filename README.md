# EV Spot — Premium EV Charging Marketplace (Navi Mumbai Pilot)

> **Tagline:** Find. Book. Charge.  
> **Pilot Region:** Navi Mumbai, Maharashtra, India (Kharghar, Belapur, Nerul, Vashi, Panvel)

**EV Spot** is an early-stage electric vehicle charging marketplace built to connect EV drivers (cars and two-wheelers) with charging locations at residential societies, private homes, tech parks, and commercial properties.

---

## ⚡ Key Highlights & Features

### 1. Visual Identity & Brand
- **Aesthetic:** Deep forest green (`#020B07`, `#051811`) paired with vibrant electric green (`#00F076`, `#00E599`) and clean surfaces.
- **Typography:** Manrope for bold startup headings, DM Sans for high-legibility body text.
- **Design Philosophy:** Polished, trustworthy, and realistic Indian technology startup identity — without tacky neon overload.

### 2. Interactive Discovery & Search
- **Search & Filters:**
  - Search by locality, building, or landmark
  - Locality quick-pills: All, Kharghar, Belapur, Nerul, Vashi, Panvel, Sanpada, Seawoods
  - Property category filters: Society, Home, Office, Commercial
  - Connector filters: Type 2 AC (Mennekes), CCS2 DC Fast, 15A 3-Pin Socket, Bharat DC-001
  - Vehicle filter: 4-Wheeler (Car) vs 2-Wheeler (Scooter/Bike)
  - Charging speed: Slow (3.3kW), Fast AC (7.4-22kW), DC Fast (30kW+)
  - Sorting: Top Rated, Lowest Tariff (₹/kWh), Highest Power (kW)
- **Interactive Navi Mumbai Pilot Map:**
  - Stylized corridor visualization depicting Thane Creek, Sion-Panvel Expressway, and Palm Beach Road.
  - Interactive spot pins with live hover tooltips and selection sync.
- **Empty States & Reset:**
  - Helpful zero-results guidance with quick-reset controls.

### 3. Detailed Spot Modal & Slot Request Simulation
- Full specs: Connector types, power rating, tariff breakdown, access hours, society entry instructions, and amenities.
- **Interactive Request Flow:**
  - Real-time kWh and tariff calculation based on target duration
  - Indian EV selector (Tata Nexon EV, Punch EV, MG ZS EV, Ather 450X, Ola S1 Pro, Chetak)
  - Instant demo booking ticket generation with reference ID
  - Digital visitor gate pass preview with simulated security instructions
  - Saved directly to `localStorage` (`evspot_slot_requests`)

### 4. Dedicated Value Sections
- **How It Works:** 4-step interactive timeline with driver and host perspective switchers (Discover, Compare, Request, Charge).
- **For EV Drivers:** Overcoming public station downtime, gate access transparency, and an interactive Vehicle Compatibility Checker.
- **For Charging Hosts:**
  - Acquisition for housing societies, villas, offices, and retail parking.
  - Interactive Utilization & Cost Recovery Estimator (with explicit non-guaranteed earnings disclaimer).
  - Complete host onboarding form with local storage persistence (`evspot_host_submissions`).
- **Early Access Registration:**
  - High-conversion onboarding form for drivers, hosts, and society managers.
  - Client-side validation, honest prototype disclaimers, and an inspector drawer to verify stored test records.
- **About & Mission:**
  - Local-first approach, clear and trustworthy information, community-driven expansion.
- **Footer & Modals:**
  - Interactive Privacy Policy, Terms of Service, and Prototype Disclaimer modals.

---

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Bundler & Dev Server:** Vite 6
- **Styling:** Tailwind CSS with custom electric-green palette and glassmorphism utilities
- **Icons:** Lucide React
- **Persistence:** Browser `localStorage` with structured data models

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher; tested on Node v24)
- npm (v9 or higher)

### Installation & Run

```bash
# 1. Navigate to the project directory
cd C:\Users\DELL\.gemini\antigravity\scratch\ev-spot

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the Vite development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

### Production Build

```bash
# Run TypeScript type-check and generate production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 🔮 Backend-Ready Architecture (Production Roadmap)

The frontend is architected with clean separation of concerns ready for seamless backend integration:

1. **Authentication:** Supabase Auth or NextAuth (JWT) with Phone OTP (via Twilio/Gupshup) tailored for Indian mobile users.
2. **Database:** PostgreSQL with Prisma ORM / Supabase (Tables: `users`, `properties`, `charging_spots`, `slot_requests`, `reviews`).
3. **Payments:** Razorpay / Cashfree integration supporting UPI auto-pay, escrow host disbursement, and instant refunds.
4. **IoT / Charger Integration:** OCPP 1.6J / 2.0.1 WebSocket gateway for automated start/stop session telemetry.
5. **Maps:** Mapbox GL / OpenStreetMap with real-time routing along the Sion-Panvel Expressway corridor.
