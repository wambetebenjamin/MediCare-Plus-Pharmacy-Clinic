# MediCare Plus Pharmacy & Clinic

A premium healthcare website for **MediCare Plus Pharmacy & Clinic** — a chain of
community clinics and 24-hour pharmacies in Nairobi, Kenya. Built with
**Next.js 14 (App Router) + TypeScript**, styled with a hand-crafted design
system (no UI framework), and deployable to Vercel in one click.

The layout and visual language were re-imagined from the legacy *Novena*
medical template (see `novena.zip`) — topbar, sticky navbar, split hero,
feature cards, counter strip, doctor grid, testimonials, logo strip,
appointment form — rebuilt as a modern, fully responsive React application
with the MediCare Plus brand palette (medical teal, mint, deep navy, warm
coral) and Outfit + Nunito typography.

## Features

- **15 homepage sections**: topbar, navbar, split hero with animated heartbeat
  ECG, quick-services bar (horizontal scroll on mobile), 8 service cards with
  3D hover lift, 3-step timeline, doctor grid with per-doctor WhatsApp booking,
  animated stat counters, pharmacy with medicine search → WhatsApp flow,
  health blog, testimonial carousel, insurance marquee, tabbed branch cards,
  appointment/enquiry form, and a rich footer.
- **WhatsApp everywhere**: floating pulse button, per-doctor & per-branch deep
  links, prescription refill CTAs, medicine ordering with pre-filled messages.
- **Health blog**: Markdown articles in `content/blog` rendered to full pages
  with per-article Open Graph, reading times and related posts.
- **API routes**: `/api/appointment`, `/api/contact`, `/api/newsletter`,
  `/api/doctors`, `/api/blog`.
- **SEO & compliance**: MedicalClinic + Physician JSON-LD, BlogPosting schema,
  `sitemap.xml`, `robots.txt`, branded `og:image` (generated), security
  headers + HTTP→HTTPS redirect via `vercel.json`, cookie-consent banner
  (Kenya DPA 2019 / GDPR).
- **Motion design**: IntersectionObserver-driven staggered reveals, vertical
  section dots, animated counters, floating hero cards, marquee — all with
  `prefers-reduced-motion` fallbacks.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build: `npm run build && npm start`.

## Environment variables (optional)

The app works fully without any env vars — persistence falls back to server
logs. Add these on Vercel to enable the full backend:

| Variable | Purpose |
| --- | --- |
| `KV_REST_API_URL` + `KV_REST_API_TOKEN` | Vercel KV storage for appointments, enquiries and newsletter subscribers (auto-injected when you link a KV database) |
| `RESEND_API_KEY` | Transactional email (staff notification + patient confirmation). Also `npm i resend` |
| `WHATSAPP_API_TOKEN` + `WHATSAPP_PHONE_ID` | Meta WhatsApp Cloud API for staff notifications (otherwise staff are alerted via console/log and patients confirm through click-to-send `wa.me` links) |

## Project structure

```
app/                  # App Router pages, layout, api routes, sitemap/robots, og image
  api/                # appointment · contact · blog · doctors · newsletter
  blog/[slug]/        # article pages (static params, per-article OG metadata)
components/           # all UI components (client components only where needed)
content/blog/         # Markdown articles with frontmatter metadata
data/                 # doctors, services, branches, testimonials, insurance
lib/                  # site config, store (KV), notify, blog loader, markdown
public/images/        # locally served photography (see CREDITS.md)
vercel.json           # security headers + HTTPS enforcement
```

## Deployment

Push to a Git host and import into Vercel — no configuration needed. Link a KV
database and set env vars above for the live backend. Update
`https://medicareplus.co.ke` in `lib/site.ts` and `vercel.json` to your domain.
