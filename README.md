# HanthanaLabs — Mechatronics & Electronics R&D Web Platform

![HanthanaLabs](client/src/assets/images/logo.svg)

> **Engineering for the Physical World**  
> An applied mechatronics and electronics research & development studio based in Sri Lanka, pioneering deployable foldable solar arrays, autonomous commercial & personal drones, embedded hardware, and turnkey industrial systems.

---

##  Apple-Inspired Design Architecture

Redesigned with world-class product page aesthetics — completely eliminating blocky AI-generated tropes, multi-color neon glows, and generic cards.

- **Cinematic Apple Typography**: Titanium gradient headlines, refined SF Pro/Inter display scaling, high-contrast crisp text hierarchy.
- **Deep Matte Canvas**: Pure black base (`#000000`) paired with subtle dark glass surfaces (`rgba(18, 18, 24, 0.75)`) and hairline dividers (`rgba(255, 255, 255, 0.08)`).
- **CAD Technical Blueprint Schematics**: Authentic vector CAD blueprints for both ongoing flagship projects.
- **Lucide Engineering Icons**: Lightweight, ultra-sharp vector icon system used by high-end design studios.

---

## 🗺️ Multi-Page Architecture

```
/                →  Home Page (Apple-style Product & R&D Showcase)
/company         →  Company & Founders Page (Story, Founders Profiles, Notes & Letters)
/company#policies → Company Terms & Operating Policies (Interactive Compliance Tabs)
```

### 1. Home Page (`/`)
- **Keynote Hero**: "Engineering for the physical world." Titanium text, flagship summary, and quick engineering metrics ribbon.
- **Flagship 1 — Foldable Solar System**: Apple-style editorial product stage with 24.2% cell efficiency, 70% volume reduction, IP67 rating, on-board smart MPPT controller, and dual commercial/personal application analysis.
- **Flagship 2 — Autonomous Commercial & Personal Drones**: Aerospace-grade 3K carbon monocoque, 2.5kg modular quick-swap bay, triple-redundant GPS Return-To-Home, 10km+ telemetry, and dual commercial/personal applications.
- **Core R&D Bento Showcase**: High-yield photovoltaics, embedded silicon & multi-layer PCBs, autonomous kinematics & robotics, and turnkey industrial fabrication.
- **Direct Technical Contact**: Direct inquiry form with full server validation and IP assurance.

### 2. Company & Founders Page (`/company`)
- **HanthanaLabs Origin Story**: Heritage rooted in the Hanthana mountain range in central Sri Lanka, dedicated to physical hardware execution.
- **Founders Profiles & Executive Notes**:
  - **Tharuka De Silva** (*CEO*) — *Letter from the CEO: "The Imperative of Physical Innovation"* (On prioritizing real physical hardware engineering over software hype).
  - **Kevin Dawson** (*President*) — *Letter from the President: "The Discipline of Execution"* (On tolerance stack-ups, repeatable fabrication, and environmental stress screening).
  - **Lahiru Herath** (*VP Mechatronics*) — *Letter from VP Mechatronics: "Confronting Aerodynamic Realities"* (On structural vibration isolation, latency in motor response, and modular drone payloads).
  - **Chathuni** (*VP Energy & Electronics*) — *Letter from VP Energy: "Decentralized Energy, Anywhere on Earth"* (On origami-engineered solar portability, MPPT conversion, and battery thermal management).
- **Company Terms & Operating Policies (`#policies`)**:
  - *R&D Engagement Terms*: SOW agreements, milestone acceptance, prototype operational envelope, and liability boundaries.
  - *Client Intellectual Property (IP)*: 100% assignment of custom Foreground IP to clients upon completion, clear Background IP licensing, and binding mutual NDA standard.
  - *UAV Aviation Compliance*: Designated test corridors, 120m AGL altitude ceilings, geofencing, failsafe RTH protocols, and UN38.3 lithium battery transport standards.
  - *Solar & Electrical Safety*: Reverse-polarity protection, IP67 environmental ingress testing, and BMS thermal runaway mitigation.
  - *Data Privacy & Telemetry*: Zero data broker monetization; all telemetry logs restricted strictly to engineering diagnostics.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend**: React 18, Vite, React Router DOM, MUI (Material UI), Lucide Icons, Framer Motion
- **Backend**: Node.js, Express, CORS, JSON body parser, SPA static serving
- **Styling**: Apple-inspired dark glass design system, Plus Jakarta Sans, Inter, JetBrains Mono

---

## 🚀 Getting Started

### Installation
```bash
npm run install:all
```

### Development
```bash
npm run dev
```
- Client dev server: `http://localhost:5173`
- Backend API server: `http://localhost:5000`

### Production Build & Serve
```bash
npm run build
npm start
```
Open `http://localhost:5000` in your browser. Navigating to `/company` or clicking between pages is handled via client-side routing with automatic server SPA fallback.
