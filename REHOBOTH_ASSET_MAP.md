# REHOBOTH ETHIOPIAN COFFEE

## Asset Map and Media Specifications

This document prepares the site to receive real production photography, video, testimonials, founder content, product content, and event content.

Current placeholder audit:

- Image placeholders: all production images currently use remote Unsplash URLs in homepage sections and page hero blocks.
- Video placeholders: no production video files are integrated yet; homepage hero is currently a still image.
- Testimonial placeholders: testimonial schema/content is missing from CMS and no real testimonials are displayed yet.
- Missing founder content: About page has founder-led copy but no founder name, bio, quote, portrait set, interview, or sourcing details.
- Missing product content: Coffee products are placeholder data in `src/data/content.ts`; Shopify handles, SKUs, prices, roast/process/origin, and product media are needed.

---

## Media Folder Structure

- `/media/home`
- `/media/coffee`
- `/media/ceremony`
- `/media/market`
- `/media/community`
- `/media/founder`
- `/media/products`

Use these folders for local staging before final assets are uploaded to Sanity, Shopify, or a production CDN.

---

## Global Asset Requirements

### Image Compression

- Format: AVIF or WebP for production web delivery; JPG fallback where needed.
- Quality target: 72-82 for JPG/WebP, visually checked.
- Max file size: 250 KB for card images, 450 KB for section images, 900 KB for full-bleed hero images.
- Color: sRGB.
- Filename style: lowercase kebab-case.
- Do not upload original RAW files to the web project.

### Video Compression

- Format: MP4 H.264 for compatibility; WebM optional for optimization.
- Audio: muted for background loops unless used in social edits.
- Bitrate: 3-8 Mbps depending on resolution and motion.
- Poster image required for every web video.
- Mobile and desktop crops should be exported separately.

### Alt Text

Alt text must describe meaningful content plainly:

- Good: “Founder pouring Ethiopian coffee from a jebena during ceremony.”
- Good: “Packaged Yirgacheffe coffee beside a brewed cup and tasting card.”
- Avoid: “Premium cinematic coffee vibes.”
- Decorative images used only for atmosphere can use empty alt text in components.

---

## Page Asset Map

### HOME

| Asset name | Page location | Orientation | Dimensions | Format | Alt text requirements | Compression |
|---|---|---:|---:|---|---|---|
| home-hero-video-desktop | Hero background | Landscape | 2560x1440 | MP4/WebM | Video has no alt; poster needs descriptive alt if used as image | 18-28s, 6-8 Mbps max |
| home-hero-video-mobile | Hero background mobile | Portrait | 1080x1920 | MP4/WebM | Same content as desktop, crop protected | 18-28s, 4-6 Mbps max |
| home-hero-poster | Hero poster fallback | Landscape | 2400x1350 | WebP/JPG | Coffee service or ceremony moment at Rehoboth | Under 900 KB |
| home-origin-image | Why Ethiopia section | Portrait | 1600x2000 | WebP/JPG | Coffee beans, origin detail, or Ethiopian coffee preparation | Under 550 KB |
| home-featured-coffee-01 | Featured coffee card | Portrait | 1400x1800 | WebP/JPG | Product name, beans, or brew context | Under 350 KB |
| home-featured-coffee-02 | Featured coffee card | Landscape | 1600x1200 | WebP/JPG | Espresso or blend preparation | Under 350 KB |
| home-featured-coffee-03 | Featured coffee card | Landscape | 1600x1200 | WebP/JPG | Subscription or packaged coffee | Under 350 KB |
| home-ceremony-feature | Ceremony section | Landscape | 2200x1400 | WebP/JPG | Jebena, pouring, guests, or ceremony host | Under 650 KB |
| home-market-tiles | Market section | Mixed | 1400x1400 min | WebP/JPG | Product category clearly described | Under 300 KB each |
| home-community-event | Events section | Landscape | 1800x1200 | WebP/JPG | Guests gathering around coffee or tasting | Under 450 KB |
| home-location-image | Location section | Landscape | 1800x1200 | WebP/JPG | Interior, storefront, or arrival detail | Under 450 KB |

### COFFEE

| Asset name | Page location | Orientation | Dimensions | Format | Alt text requirements | Compression |
|---|---|---:|---:|---|---|---|
| coffee-page-hero | Page hero | Portrait | 1800x2200 | WebP/JPG | Roasted beans, packaged coffee, or brewing | Under 650 KB |
| coffee-single-origin-product | Product card/detail | Portrait | 1600x2000 | WebP/JPG | Specific product name and packaging | Under 400 KB |
| coffee-espresso-product | Product card/detail | Landscape | 1600x1200 | WebP/JPG | Espresso extraction or espresso packaging | Under 400 KB |
| coffee-subscription-product | Product card/detail | Landscape | 1600x1200 | WebP/JPG | Subscription packaging or group coffee set | Under 400 KB |
| coffee-beans-macro | Education section | Square | 1400x1400 | WebP/JPG | Roasted Ethiopian coffee beans close-up | Under 300 KB |
| coffee-pourover | Brew education | Portrait | 1400x1800 | WebP/JPG | Pour-over bloom or final pour | Under 350 KB |
| coffee-tasting | Tasting notes | Landscape | 1800x1200 | WebP/JPG | Person tasting coffee thoughtfully | Under 450 KB |

### MARKET

| Asset name | Page location | Orientation | Dimensions | Format | Alt text requirements | Compression |
|---|---|---:|---:|---|---|---|
| market-page-hero | Page hero | Landscape | 2200x1400 | WebP/JPG | Curated Ethiopian market shelf | Under 650 KB |
| market-imported-goods | Category card | Portrait | 1400x1800 | WebP/JPG | Imported goods arranged on shelf | Under 350 KB |
| market-honey | Category card | Square | 1400x1400 | WebP/JPG | Honey jars or honey detail | Under 300 KB |
| market-spices | Category card | Square | 1400x1400 | WebP/JPG | Spices with clear texture/color | Under 300 KB |
| market-traditional-products | Category card | Portrait | 1400x1800 | WebP/JPG | Traditional products or objects | Under 350 KB |
| market-gift-box | Retail/gift section | Landscape | 1800x1200 | WebP/JPG | Gift box with coffee and market goods | Under 450 KB |

### ABOUT

| Asset name | Page location | Orientation | Dimensions | Format | Alt text requirements | Compression |
|---|---|---:|---:|---|---|---|
| founder-portrait-primary | About hero | Portrait | 1800x2200 | WebP/JPG | Founder name and setting | Under 650 KB |
| founder-counter-moment | Story section | Landscape | 1800x1200 | WebP/JPG | Founder serving or preparing coffee | Under 450 KB |
| founder-ceremony-moment | Coffee journey | Landscape | 1800x1200 | WebP/JPG | Founder or host preparing ceremony | Under 450 KB |
| founder-market-moment | Market philosophy | Landscape | 1800x1200 | WebP/JPG | Founder arranging market goods | Under 450 KB |
| founder-hospitality-moment | Values/story | Landscape | 1800x1200 | WebP/JPG | Founder greeting guest | Under 450 KB |

### VISIT

| Asset name | Page location | Orientation | Dimensions | Format | Alt text requirements | Compression |
|---|---|---:|---:|---|---|---|
| visit-hero-interior | Visit hero | Landscape | 2200x1400 | WebP/JPG | Rehoboth interior with warm hospitality | Under 650 KB |
| visit-storefront | Directions section | Landscape | 1800x1200 | WebP/JPG | Storefront or entrance | Under 450 KB |
| visit-counter-service | Local conversion | Landscape | 1800x1200 | WebP/JPG | Guest ordering or receiving coffee | Under 450 KB |
| visit-seating | Remote work/community | Landscape | 1800x1200 | WebP/JPG | Seating area with guests | Under 450 KB |
| visit-parking-reference | Parking note | Landscape | 1600x1000 | WebP/JPG | Arrival or parking reference if useful | Under 350 KB |

---

## Gallery Specifications

### Homepage Hero

- Desktop video: 2560x1440, 16:9, 18-28 seconds.
- Mobile video: 1080x1920, 9:16, 18-28 seconds.
- Poster: 2400x1350 desktop, 1080x1920 mobile.
- Safe crop: keep primary action in center 60% width and center 70% height.

### Coffee Gallery

- 8-12 edited images.
- Mix: 40% product, 40% brewing, 20% tasting/hospitality.
- Required crops: 1:1, 4:5, 3:2, 16:9.

### Market Gallery

- 8-10 edited images.
- Mix: shelves, details, gift boxes, customer browsing.
- Avoid crowded shelf photos where labels compete.

### Ceremony Gallery

- 10-14 edited images.
- Sequence: jebena, incense, roasting, pouring, serving, guests.
- Include hands and faces with permissions.

### Founder Portraits

- 6-8 edited images.
- Mix: formal portrait, environmental portrait, action, hospitality.
- Include vertical and horizontal crops.

### Event Photography

- 10 images per event.
- Include wide room, speaker/host, guests, detail, post-event social image.

### Product Photography

- 5 images per product.
- Required: front package, lifestyle package, beans, brew, pairing/gift.

---

## Video Specifications

### Homepage Hero Video

- Duration: 18-28 seconds.
- Resolution: 2560x1440 desktop, 1080x1920 mobile.
- Frame rate: 24fps or 30fps.
- Safe crop: key action center 60%; avoid text/important faces near edges.
- Mobile guidance: shoot dedicated vertical b-roll, not just cropped desktop.

### Coffee Loop

- Duration: 8-12 seconds.
- Resolution: 1920x1080 and 1080x1920.
- Frame rate: 24fps or 30fps.
- Content: beans, grind, espresso, pour-over, finished cup.
- Use: Coffee page, product cards, social.

### Ceremony Loop

- Duration: 10-16 seconds.
- Resolution: 1920x1080 and 1080x1920.
- Frame rate: 24fps.
- Content: jebena, incense, roasting, pouring, guests.
- Safe crop: keep hands/jebena in center; smoke should not obscure action.

### Market Loop

- Duration: 8-12 seconds.
- Resolution: 1920x1080 and 1080x1920.
- Frame rate: 24fps or 30fps.
- Content: shelf glide, honey, spices, gift box, browsing.
- Safe crop: labels/details centered and readable.

### Community Loop

- Duration: 8-15 seconds.
- Resolution: 1920x1080 and 1080x1920.
- Frame rate: 24fps or 30fps.
- Content: conversations, remote work, events, family/friend gathering.
- Safe crop: faces not near edges; avoid filming private screens.

---

## Asset Naming Convention

Use:

`section-subject-crop-version.ext`

Examples:

- `home-hero-desktop-v1.mp4`
- `home-hero-poster-desktop-v1.webp`
- `coffee-yirgacheffe-product-front-v1.webp`
- `ceremony-jebena-pour-horizontal-v1.webp`
- `founder-portrait-window-vertical-v1.webp`

---

## Integration Notes

- Sanity should own editorial/page imagery, galleries, testimonials, founder content, events, and location content.
- Shopify should own commerce-critical product media, product names, variants, pricing, inventory, and checkout.
- Site components can later read Sanity and Shopify content instead of static data.
- Keep production assets out of git when files are large; use Sanity/Shopify/CDN as source of truth.
