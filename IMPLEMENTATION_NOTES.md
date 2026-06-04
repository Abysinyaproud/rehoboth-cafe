# Rehoboth Website V1 Implementation Notes

Source of truth: `REHOBOTH_DIGITAL_EXPERIENCE_BLUEPRINT.md`

## Architecture

- Next.js 15 App Router under `src/app`
- TypeScript strict mode
- Tailwind CSS 4 theme tokens in `src/app/globals.css`
- Framer Motion reveal primitive in `src/components/motion`
- Sanity client in `src/lib/sanity.ts`
- Shopify Storefront API client in `src/lib/shopify.ts`
- SEO helpers in `src/lib/seo.ts`
- Schema helpers in `src/lib/schema.ts`

## Routes

- `/` Homepage
- `/coffee` Coffee and Shopify-ready product architecture
- `/market` Curated Ethiopian market
- `/about` Brand story and values
- `/visit` Local SEO visit page
- `/robots.txt`
- `/sitemap.xml`

## Component System

- `SiteHeader`, `SiteFooter`, `MobileActionBar`
- `Button`, `ButtonLink`
- `Section`
- `EditorialCard`
- `MotionReveal`
- Homepage sections for hero, origin story, featured coffee, ceremony, market, events, and location

## Environment

Copy `.env.example` to `.env.local` and add Sanity, Shopify, and analytics credentials.

## Commands

```bash
npm install
npm run dev
npm run build
```

The Codex app session did not expose `npm` on PATH, so dependency installation and local build need to be run in a shell with Node/npm available.
