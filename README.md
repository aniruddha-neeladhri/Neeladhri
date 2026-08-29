# Neeladhri Ceramics

Marketing website for Neeladhri Ceramics — premium ceramic, tile, and bath solutions. The site runs two themes: **Essentials** and **Bespoke**, toggled site-wide without a full page reload.

## Tech stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4 · Framer Motion · GSAP · React Three Fiber
- Cloudflare R2 (media) · Resend (contact form)

## Prerequisites

- Node.js 20+
- npm

## Setup

```bash
npm install
npm run dev
```

Create `.env.local` with the variables listed below before using the contact form or file uploads.

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` in the project root:

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes (contact) | Resend API key for the contact form |
| `CONTACT_TO_EMAIL` | No | Inbox for form submissions (default: `aniruddha@neeladhri.com`) |
| `CONTACT_FROM_EMAIL` | No | Sender address shown in Resend |
| `R2_ENDPOINT` | Yes (uploads) | Cloudflare R2 S3-compatible endpoint |
| `R2_ACCESS_KEY_ID` | Yes (uploads) | R2 access key |
| `R2_SECRET_ACCESS_KEY` | Yes (uploads) | R2 secret key |
| `R2_BUCKET_NAME` | Yes (uploads) | R2 bucket name |
| `R2_PUBLIC_URL` | Yes (uploads) | Public CDN base URL for uploaded files |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL for SEO metadata and sitemap (`https://neeladhri.com`) |
| `ADMIN_SECRET` | Yes (admin) | Password for `/admin/*` and `/api/admin/*` (HTTP Basic Auth in production) |
| `NEXT_PUBLIC_TINYMCE_API_KEY` | No | TinyMCE key (admin blog editor only) |

The production build runs without R2 credentials; they are only required when using file uploads.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |

## Project structure

```
app/                  Routes and API handlers
components/
  layout/             Navbar, footer, theme wrapper, chatbot
  Brands/             Brand detail page
  Collections/        Collection page carousels
  About/              About page sections
  Legal/              Terms and privacy
  Sections/           Homepage and marketing sections
lib/
  config/             Service configuration (R2)
  constants/          Site content and data
  contexts/           React providers (theme)
  data/               Data helpers (brand slug registry)
  navigation/         Homepage scroll behaviour
  services/           Server integrations (R2 uploads)
  utils/              Shared utilities
types/                Shared TypeScript types
public/               Static assets
scripts/              Maintenance scripts
```

## Where to edit content

| Content | Location |
|---------|----------|
| Brands | `lib/constants/brands.ts` |
| Homepage | `lib/constants/home.ts`, `homebrands.ts` |
| Blog posts | `lib/constants/posts/*.json`, registry in `blogs.ts` |
| Collections | `lib/constants/collections.ts` |
| Legal text | `lib/constants/legal.ts` |
| Navigation links | `lib/constants/Navlinks.ts` |
| Footer | `lib/constants/footer.ts` |

Brand detail pages are served from a single route: `app/brands/[slug]/page.tsx`. Slug mapping lives in `lib/data/brands/slugs.ts`.

## Themes

- Theme state: `lib/contexts/ThemeContext.tsx`
- Essentials / Bespoke content is defined separately in `lib/constants/` (e.g. `BRAND_NAMES_PREMIUM` / `BRAND_NAMES_LUXURY`).

## API routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/contact` | POST | Contact form submission |
| `/api/uploads` | POST | File upload to R2 |
| `/api/blogs/[slug]` | GET | Blog post data |
| `/api/admin/blog` | POST | Save blog post (Basic Auth in production) |
| `/api/openapi` | GET | OpenAPI specification |

## Deployment

1. Set all required environment variables on the host.
2. Run `npm run build` then `npm run start`, or deploy to a Next.js-compatible platform (e.g. Vercel).
3. Confirm R2 image domains are listed in `next.config.ts`.
