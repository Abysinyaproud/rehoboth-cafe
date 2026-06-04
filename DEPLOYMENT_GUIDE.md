# REHOBOTH ETHIOPIAN COFFEE

## Deployment Guide

This guide prepares the Rehoboth website for production launch on Vercel with Cloudflare DNS/CDN, Sanity CMS, Shopify readiness, GA4, and Google Search Console.

---

## 1. Prerequisites

- Git repository connected to the project.
- Vercel account.
- Domain access.
- Cloudflare account if Cloudflare manages DNS.
- Sanity project details if CMS content is live.
- Shopify Storefront API credentials if commerce is live.
- GA4 measurement ID.
- Google Search Console access.

---

## 2. Required Environment Variables

Add these in Vercel Project Settings > Environment Variables.

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_GA4_ID=

SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_READ_TOKEN=
SANITY_REVALIDATE_SECRET=

SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_ACCESS_TOKEN=
SHOPIFY_API_VERSION=2025-01
```

Notes:

- `NEXT_PUBLIC_SITE_URL` must be the final production URL before launch.
- Keep private tokens out of git.
- The site builds without Sanity/Shopify credentials, but live CMS and commerce content require them.

---

## 3. Local Verification

Run:

```bash
npm install
npm run build
npm run dev
```

Core routes to check:

- `/`
- `/coffee`
- `/ceremony`
- `/market`
- `/about`
- `/visit`
- `/robots.txt`
- `/sitemap.xml`

---

## 4. Vercel Deployment Steps

1. Import the repository into Vercel.
2. Select the project root.
3. Confirm framework preset: Next.js.
4. Add environment variables.
5. Deploy preview.
6. Review preview pages.
7. Confirm build output is successful.
8. Assign production domain.
9. Promote to production.

Build command:

```bash
npm run build
```

Output:

Next.js app deployment managed by Vercel.

---

## 5. Cloudflare / DNS Steps

1. Add the production domain to Cloudflare if not already managed there.
2. Point DNS records to Vercel as instructed by Vercel.
3. Keep SSL/TLS mode compatible with Vercel.
4. Confirm HTTPS resolves.
5. Confirm apex and `www` behavior.
6. Add redirects if needed.

Recommended:

- `https://domain.com` as canonical.
- Redirect `www` to apex or apex to `www`, but choose one canonical URL.

---

## 6. Asset Integration

Before final launch:

- Replace remote fallback imagery with production images.
- Upload hero desktop/mobile video if available.
- Add poster images for videos.
- Add founder portrait and founder story.
- Add final coffee product media.
- Add ceremony photography.
- Add market photography.
- Compress images and videos.
- Confirm alt text.

Reference:

- `REHOBOTH_ASSET_MAP.md`
- `REHOBOTH_CONTENT_PRODUCTION_PLAN.md`

---

## 7. SEO Launch Steps

1. Set final `NEXT_PUBLIC_SITE_URL`.
2. Confirm metadata on all pages.
3. Confirm `/sitemap.xml`.
4. Confirm `/robots.txt`.
5. Add production Open Graph images when available.
6. Verify Google Search Console.
7. Submit sitemap.
8. Inspect these URLs:
   - `/`
   - `/coffee`
   - `/ceremony`
   - `/market`
   - `/about`
   - `/visit`

---

## 8. Analytics Launch Steps

1. Create or confirm GA4 property.
2. Add `NEXT_PUBLIC_GA4_ID`.
3. Deploy production.
4. Open the site and check GA4 Realtime.
5. Confirm page views.
6. Add custom event tracking in a later analytics pass for:
   - directions clicks
   - email clicks
   - coffee CTAs
   - ceremony inquiries
   - newsletter submissions
   - review clicks

---

## 9. Google Business Profile

Before public launch:

- Confirm business name.
- Confirm address.
- Confirm phone.
- Confirm hours.
- Add website URL.
- Add coffee and market photos.
- Add business description.
- Add review request link.

After launch:

- Add weekly updates.
- Request reviews from real guests.
- Reply to every review.

---

## 10. Accessibility QA

Check:

- Keyboard navigation.
- Skip link.
- Focus states.
- Color contrast.
- Mobile tap targets.
- Alt text.
- Reduced motion.
- Form labels.
- Footer links.

Tools:

- Lighthouse.
- axe DevTools.
- VoiceOver spot check.

---

## 11. Performance QA

Check:

- Lighthouse mobile score.
- LCP on homepage.
- CLS across pages.
- Image sizes.
- Video sizes.
- JavaScript payload.

Targets:

- Lighthouse Performance: 90+ where possible.
- LCP under 2.5s after production media optimization.
- CLS under 0.1.

---

## 12. Backup Strategy

- Keep source files in git.
- Store production photo/video masters in cloud storage.
- Export edited web assets separately.
- Export Sanity dataset before major edits.
- Export Shopify products before bulk updates.
- Store environment variables in Vercel and a password manager.

---

## 13. Production Smoke Test

After deployment, verify:

- Homepage loads.
- Coffee page loads.
- Ceremony page loads.
- Market page loads.
- About page loads.
- Visit page loads.
- Header navigation works.
- Mobile action bar works.
- Footer links work.
- Email links open mail client.
- Directions links open Google Maps/search.
- Sitemap and robots are accessible.
- GA4 realtime registers traffic.

---

## 14. Remaining Real Business Items

The site is launch-capable with graceful fallback content, but these items should be replaced as soon as real information is available:

- Final address.
- Final phone number.
- Final business hours.
- Final Google review link.
- Final social profile URLs.
- Production photography.
- Homepage hero video.
- Founder name, story, and portraits.
- Shopify products, variants, pricing, and checkout.
- Real testimonials and Google reviews.
- Event dates and booking links.

---

## 15. Exact Launch Command

```bash
npm run build
```

Then deploy through Vercel.
