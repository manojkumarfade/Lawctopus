# Lawctopus Law School — Mastering Contract Drafting

A high-converting landing page for Lawctopus' 6-Month Long Expert-Level Course on **Mastering Contract Drafting and Freelancing**, built with React 19, TypeScript, Vite, and Tailwind CSS 4.

## Tech Stack

- **React 19** with TypeScript
- **Vite 6** (build tool)
- **Tailwind CSS 4** (utility-first CSS via `@tailwindcss/vite`)
- **Motion** (Framer Motion v12) — page transitions & animations
- **Lucide React** — icon library

## Features

- **Spatial Dashboard UI** — 6-tab single-page interface (Overview, The Gap, Curriculum, Career & AI, Faculty, Fees & FAQ) with 3D perspective transitions
- **Persistent Sidebar** — Desktop spatial glass sidebar with countdown timer, navigation, and fee summary
- **Interactive Legal Sandbox** — Hands-on "redlining" challenge that teaches students to spot dangerous contract clauses (NDA, indemnity, termination traps)
- **Live Countdown Timer** — Counts down to July 2026 batch deadline
- **Registration Funnel Modal** — Multi-step enroll modal with form validation, promo pricing display, and simulated registration code
- **Pricing Tiers** — Student (₹24,999) / Professional (₹34,999) toggle with dynamic inclusion grids
- **Mobile Responsive** — Hamburger menu, sticky mobile CTA bar, horizontal tab strip
- **Scroll Progress Bar** — Top-of-page reading progress indicator
- **SEO Optimized** — Open Graph tags, JSON-LD structured data, semantic HTML
- **Student Testimonials** — Social proof carousel with verified learner reviews

## Getting Started

### Prerequisites

- **Node.js** ≥ 18

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Lint / Type Check

```bash
npm run lint
```

## Project Structure

```
src/
├── App.tsx                   # Root component (layout, header, footer, modal, routing)
├── main.tsx                  # Entry point
├── index.css                 # Tailwind imports + custom animations/utilities
├── components/
│   └── PageViews.tsx         # All 6 tab view components + testimonials
└── data/
    └── courseData.ts         # Course content, faculty, FAQs, challenges, pricing, testimonials
```

### Data Flow

All course content (curriculum, faculty bios, FAQ, pricing, challenge data, testimonials) is defined in `src/data/courseData.ts` as typed constants. The `App.tsx` component manages global state (active tab, modal visibility, form state, countdown) and passes it down to the view components in `PageViews.tsx`.

## Course Content

- **Duration:** 6 Months (July — December 2026)
- **Mode:** Live interactive sessions (54+ sessions)
- **Coverage:** 24+ commercial agreements including NDAs, employment contracts, SaaS agreements, real estate deeds, shareholder agreements, and more
- **Faculty:** 12 industry experts including corporate counsels, IP specialists, arbitration practitioners, and top-rated Upwork freelancers
- **Certification:** Lawctopus Law School Certificate of Expertise

## Deployment

Build the project and deploy the `dist/` directory to any static host (Vercel, Netlify, Cloudflare Pages, AWS S3, etc.).

## License

© 2026 Lawctopus Law School. All rights reserved.
