# Brocli Landing Page

Brocli is a mobile-first landing page for an on-demand cleaning service launching in Rabat and expanding across Morocco.

## Features

- Responsive Next.js App Router landing page
- Brocli brand-inspired green/yellow visual system
- English/French localization toggle
- GSAP hero entrance animations
- Motion-powered coverage/map animations
- Lenis smooth scrolling
- Service cards, trust messaging, Morocco coverage map, and app download CTAs

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- GSAP
- Motion
- Lenis

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Backend Configuration

The app download buttons read store URLs from the existing Brocli backend `POST /api/configurations` response:

```bash
NEXT_PUBLIC_BROCLI_API_BASE_URL=https://your-backend-domain.com
```

The landing page accepts either the backend origin, `/api` base URL, or the full `/api/configurations` endpoint. If the backend is not configured or unavailable, the buttons fall back to the generic app store pages so the page still renders in production.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Validation

Before pushing meaningful changes, run:

```bash
npm run lint
npm run build
```

## Project Notes

The website is a marketing landing page. Booking, checkout, accounts, and operational flows are expected to live in the Brocli mobile app, not this site.
