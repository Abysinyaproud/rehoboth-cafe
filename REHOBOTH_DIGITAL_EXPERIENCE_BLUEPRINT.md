# REHOBOTH ETHIOPIAN COFFEE

## Flagship Digital Experience Blueprint

Tagline: FROM ETHIOPIA TO YOUR CUP

Primary ambition: Make Rehoboth Ethiopian Coffee the most desirable Ethiopian specialty coffee destination in Maryland by presenting coffee as the hero product and culture, community, education, and curated retail as the supporting world around it.

This document defines the launch-ready brand strategy, UX architecture, content system, visual system, technical architecture, and implementation plan for a premium destination website.

---

## 1. Brand Strategy

### Brand Idea

Rehoboth Ethiopian Coffee is Maryland's modern gateway to the birthplace of coffee. The brand should feel like a destination: refined enough for specialty coffee drinkers, warm enough for families and local residents, and culturally specific without feeling decorative or nostalgic.

### Brand Promise

Exceptional Ethiopian coffee, authentic hospitality, and meaningful cultural experiences from Ethiopia to your cup.

### Brand Pillars

1. Coffee First
   Rehoboth is an Ethiopian specialty coffee destination, not a market with coffee on the side. Every page should reinforce quality beans, brewing, origins, and craft.

2. Cultural Depth
   Ethiopia is presented through origin, ceremony, farming, hospitality, and education, not visual cliches.

3. Modern Hospitality
   The experience should feel calm, premium, and welcoming for in-store visitors, online shoppers, remote workers, event guests, and first-time explorers.

4. Community Gravity
   Events, tastings, workshops, and coffee ceremony experiences turn Rehoboth into a repeat-visit destination.

5. Curated Retail
   The market supports the coffee experience through honey, spices, traditional products, gifts, and imported goods.

### Voice

Warm, precise, sensory, confident, and editorial.

Use:
- "single-origin Ethiopian coffee"
- "coffee ceremony"
- "roasted for clarity, sweetness, and depth"
- "a modern expression of Ethiopian hospitality"
- "visit, taste, learn, gather"

Avoid:
- generic cafe language
- overly exoticized descriptions
- grocery or convenience-store framing
- cluttered product-first messaging

---

## 2. Market Positioning

### Positioning Statement

For specialty coffee drinkers, cultural explorers, remote workers, and local families, Rehoboth Ethiopian Coffee is Maryland's premier Ethiopian coffee destination, offering exceptional beans, authentic ceremony experiences, modern hospitality, and a curated market rooted in Ethiopian heritage.

### Category

Primary: Ethiopian specialty coffee destination  
Secondary: Cafe, cultural experience venue, curated Ethiopian market, local event space

### Competitive Frame

Rehoboth should not compete only against local coffee shops. It should compete against:
- Premium coffee brands like Blue Bottle and Stumptown
- Experience-led cafes and roasters
- Boutique cultural food destinations
- Lifestyle retail brands
- Local third-place workspaces

### Differentiators

- Ethiopian coffee at the center of the brand
- Coffee ceremony as a bookable cultural experience
- Specialty coffee plus community programming
- Curated Ethiopian market as a supporting retail layer
- Maryland-local destination with national-quality presentation

### Strategic Message Hierarchy

1. Rehoboth is Maryland's Ethiopian coffee destination.
2. Ethiopia is the birthplace of coffee.
3. Visitors can taste, learn, gather, shop, and attend events.
4. Coffee is available in-store, online, as gifts, and by subscription.

---

## 3. Customer Personas

### Persona 1: The Specialty Coffee Seeker

Profile: 25-45, values single origins, brewing methods, quality sourcing, and roast detail.  
Needs: Origin transparency, tasting notes, brewing recommendations, fresh beans, subscription options.  
Primary CTA: Shop Coffee.  
Objections: "Is this serious specialty coffee or just a themed cafe?"  
UX Response: Prominent product notes, origin storytelling, brew guides, roast profiles, product schema, reviews.

### Persona 2: The Local Experience Explorer

Profile: Young professional, couple, student, or tourist looking for a memorable local destination.  
Needs: Atmosphere, photos, hours, parking, directions, what to expect.  
Primary CTA: Visit Us.  
Objections: "Is it worth going out of my way?"  
UX Response: Cinematic hero, ceremony content, events, testimonials, maps, local SEO landing content.

### Persona 3: The Remote Worker

Profile: Student, freelancer, entrepreneur, or hybrid worker.  
Needs: Comfortable seating, Wi-Fi confidence, good drinks, food or snacks, hours.  
Primary CTA: Plan Your Visit.  
Objections: "Can I work there comfortably?"  
UX Response: Visit page with amenities, hours, seating notes, weekday rhythm, clear in-store photography.

### Persona 4: The Ethiopian Community Member

Profile: Ethiopian or East African customer seeking familiarity, quality, and cultural pride.  
Needs: Authentic products, ceremony, community nights, imported goods, family-friendly environment.  
Primary CTA: Events / Market.  
Objections: "Will this feel authentic?"  
UX Response: Founder story, ceremony history, product curation, community programming, respectful Amharic details where appropriate.

### Persona 5: The Gift Buyer

Profile: Local resident or corporate buyer seeking premium gifts.  
Needs: Gift boxes, easy shipping/pickup, elegant presentation, subscriptions.  
Primary CTA: Gift Boxes.  
Objections: "Will it feel premium enough?"  
UX Response: Editorial product photography, curated bundles, clear delivery/pickup options, gift messaging.

---

## 4. User Journey Maps

### Journey A: First-Time Local Visitor

1. Discovery: Google search for "Ethiopian coffee Maryland" or Instagram post.
2. Landing: Homepage or Visit page.
3. Evaluation: Scans hero, photos, hours, reviews, ceremony, and location.
4. Decision: Taps Visit Us, Directions, or Call.
5. Experience: Visits in person and sees events/newsletter prompt.
6. Retention: Joins email list, follows Instagram, returns for event or beans.

Key success metrics: direction clicks, click-to-call, local landing page engagement, Google review clicks.

### Journey B: Online Coffee Buyer

1. Discovery: Search, social, or in-store QR.
2. Landing: Shop or Featured Coffees.
3. Evaluation: Origin, tasting notes, roast level, grind, shipping, subscription.
4. Purchase: Adds beans or subscription through Shopify.
5. Retention: Receives brew guide, review request, replenishment email.

Key success metrics: product page conversion, subscription attach rate, repeat purchase rate.

### Journey C: Coffee Ceremony Guest

1. Discovery: Event listing, word of mouth, corporate inquiry, search.
2. Landing: Coffee Ceremony page.
3. Evaluation: Learns history, format, duration, private/corporate options.
4. Conversion: Books, inquires, or joins waitlist.
5. Retention: Shares experience, buys beans, attends future events.

Key success metrics: inquiry form starts, booking completions, event attendance, post-event purchases.

### Journey D: Community Event Attendee

1. Discovery: Events page, email, Instagram, local search.
2. Landing: Event detail page.
3. Evaluation: Date, type, price, location, capacity, accessibility.
4. Conversion: RSVP or purchase ticket.
5. Retention: Newsletter signup, calendar add, future event suggestions.

Key success metrics: RSVP conversion, email capture, attendance rate.

---

## 5. Information Architecture

### Primary Navigation

- Shop
- Coffee Ceremony
- Market
- Events
- About
- Visit

### Utility Navigation

- Cart
- Search
- Account
- Newsletter
- Directions
- Call

### Mobile Navigation

Persistent bottom actions:
- Visit
- Shop
- Events
- Call

Menu drawer:
- Shop categories
- Ceremony
- Market
- Events
- About
- Visit
- Contact

### Navigation Principle

The global nav should prioritize the two strongest conversion paths: visit the destination and buy coffee.

---

## 6. Full Sitemap

### Core Pages

- /
- /shop
- /shop/single-origin-coffee
- /shop/espresso-blends
- /shop/subscriptions
- /shop/brewing-equipment
- /shop/gift-boxes
- /shop/products/[slug]
- /coffee-ceremony
- /coffee-ceremony/experience
- /coffee-ceremony/history
- /coffee-ceremony/private-events
- /coffee-ceremony/corporate-events
- /market
- /market/imported-goods
- /market/honey
- /market/spices
- /market/traditional-products
- /events
- /events/[slug]
- /about
- /about/rehoboth-story
- /about/coffee-journey
- /about/farmers-and-origins
- /visit
- /contact

### SEO Support Pages

- /locations/columbia-md
- /coffee/ethiopian-coffee-maryland
- /coffee/specialty-coffee-columbia-md
- /coffee/coffee-ceremony-maryland
- /guides/ethiopian-coffee-regions
- /guides/how-to-brew-ethiopian-coffee
- /guides/what-is-ethiopian-coffee-ceremony

### Legal and Utility

- /privacy
- /terms
- /shipping
- /returns
- /accessibility

---

## 7. UX Strategy

### Experience Principles

1. Coffee leads every journey.
2. Location details are never more than one tap away.
3. Product pages should teach without slowing purchase.
4. Event and ceremony pages should remove uncertainty.
5. The brand should feel spacious, quiet, and premium.

### Homepage UX Role

The homepage must answer:
- What is Rehoboth?
- Why Ethiopian coffee?
- Why visit?
- What can I buy?
- What is happening soon?
- Where is it?

### Priority CTAs

Primary:
- Visit Us
- Shop Coffee

Secondary:
- Book Ceremony
- View Events
- Join Newsletter
- Get Directions
- Call

### UX Requirements

- Sticky desktop header after scroll
- Mobile bottom CTA bar
- Fast access to hours, directions, and phone
- Product cards with origin, tasting notes, and roast level
- Event cards with date, price, RSVP status, and capacity
- Ceremony inquiry flow with event type, group size, date, and contact

---

## 8. Conversion Strategy

### Conversion Goals

1. Increase foot traffic
2. Increase coffee sales
3. Increase subscriptions
4. Increase ceremony inquiries
5. Increase event attendance
6. Increase newsletter signups
7. Increase Google reviews
8. Increase repeat visits

### Conversion Architecture

Homepage:
- Hero CTAs: Visit Us, Shop Coffee
- Featured products
- Ceremony CTA
- Events CTA
- Location CTA
- Newsletter CTA

Shop:
- Product education
- Bundles
- Subscription upsell
- Gift CTA
- Shopify checkout

Visit:
- Directions
- Hours
- Parking
- Click-to-call
- Google Maps
- Review CTA

Events:
- Featured upcoming event
- RSVP/ticket CTA
- Calendar add
- Newsletter fallback for sold-out events

### Offers

- First online order email incentive
- Monthly Ethiopian coffee subscription
- Ceremony and beans bundle
- Gift box seasonal drops
- Event attendee bean discount

---

## 9. Visual Identity System

### Direction

Modern Ethiopian editorial. The site should use large whitespace, disciplined typography, cinematic photography, tactile detail shots, and restrained cultural references.

### Color Palette

- Espresso Black: #14110F
- Warm Ivory: #F7F1E8
- Natural Oak: #B98B5D
- Deep Forest Green: #1F3D32
- Brushed Gold: #C6A15B
- Clay Accent: #9B4F35
- Stone Gray: #D8D0C4
- Ink: #24201C

Clay Accent is included to prevent the system from becoming a one-note black/ivory/gold palette while still feeling rooted and warm.

### Typography

Headlines:
- Preferred: Canela, Editorial New, Tiempos Headline, or Cormorant Garamond fallback

Body:
- Preferred: Neue Haas Grotesk, Inter, Suisse Int'l, or Geist fallback

Numerals and UI:
- Geist Mono or a clean tabular UI setting

### Photography Style

Required image categories:
- Roasting
- Pour-over brewing
- Coffee ceremony
- Single-origin beans
- Community moments
- Product still lifes
- Storefront and interior
- Ethiopian origin landscapes or farmer partner imagery when available

Photography should be natural, warm, directional, and specific. Avoid generic latte art stock photos.

### Graphic Motifs

Use subtle references to:
- Coffee leaf forms
- Jebena silhouette
- Handwoven textile rhythm
- Origin map lines

These should appear as fine-line details, icons, divider marks, or packaging accents, never as heavy decoration.

---

## 10. UI Design System

### Interface Character

Quiet, editorial, tactile, and direct. More museum cafe than grocery aisle. More premium product system than restaurant menu.

### Core Patterns

- Full-bleed cinematic hero
- Editorial two-column story blocks
- Product grid with restrained hover states
- Horizontal event rail
- Sticky local actions on mobile
- Minimal filter controls
- Large image-led feature sections
- Calm modal inquiry forms

### Buttons

Primary:
- Espresso background, ivory text
- Hover: deep forest background

Secondary:
- Transparent background, espresso border
- Hover: warm ivory fill

Tertiary:
- Text link with fine underline
- Hover: brushed gold underline

### Cards

Use cards only for repeated items:
- Product cards
- Event cards
- Testimonial cards
- Market item cards

Radius: 6px maximum.  
Avoid nested cards.

### Motion

- 180-320ms fades
- 400-700ms image parallax
- 150ms button hover
- Section reveals with reduced-motion fallback
- No spinning, bouncing, or aggressive effects

---

## 11. Design Tokens

```ts
export const tokens = {
  color: {
    espresso: "#14110F",
    ivory: "#F7F1E8",
    oak: "#B98B5D",
    forest: "#1F3D32",
    gold: "#C6A15B",
    clay: "#9B4F35",
    stone: "#D8D0C4",
    ink: "#24201C",
    white: "#FFFFFF"
  },
  font: {
    display: "var(--font-display)",
    sans: "var(--font-sans)",
    mono: "var(--font-mono)"
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px",
    32: "128px"
  },
  radius: {
    xs: "2px",
    sm: "4px",
    md: "6px",
    full: "999px"
  },
  shadow: {
    subtle: "0 12px 40px rgba(20, 17, 15, 0.08)",
    overlay: "0 24px 80px rgba(20, 17, 15, 0.18)"
  },
  motion: {
    fast: "150ms",
    base: "240ms",
    slow: "600ms",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)"
  }
};
```

### Tailwind Theme Extension

```ts
theme: {
  extend: {
    colors: {
      espresso: "#14110F",
      ivory: "#F7F1E8",
      oak: "#B98B5D",
      forest: "#1F3D32",
      gold: "#C6A15B",
      clay: "#9B4F35",
      stone: "#D8D0C4",
      ink: "#24201C"
    },
    borderRadius: {
      rehoboth: "6px"
    },
    transitionTimingFunction: {
      luxury: "cubic-bezier(0.22, 1, 0.36, 1)"
    }
  }
}
```

---

## 12. Desktop Wireframes

### Homepage Desktop

1. Header
   Left logo, centered nav, right actions for Cart and Visit.

2. Full-screen hero
   Background video montage: roast, pour-over, ceremony, community.  
   H1: FROM ETHIOPIA TO YOUR CUP  
   Subheadline and two CTAs.  
   Bottom strip: open hours, location, next event.

3. Why Ethiopia
   Left editorial copy, right image or origin map.  
   CTA: Learn the Coffee Journey.

4. Featured Coffees
   Three to four product cards with origin, tasting notes, price, quick add.

5. Coffee Ceremony
   Full-width immersive image, copy panel, private/corporate CTAs.

6. Market
   Four category tiles: Imported Goods, Honey, Spices, Traditional Products.

7. Events and Community
   Upcoming events rail with RSVP buttons.

8. Testimonials
   Three quotes with Google review CTA.

9. Location and Hours
   Map, address, hours, parking, directions, call.

10. Newsletter
   Minimal form with one sentence value proposition.

11. Footer
   Navigation, contact, social, schema-friendly NAP, legal links.

### Shop Desktop

- Left filters: category, origin, roast, grind, subscription
- Product grid
- Education banner
- Subscription module
- Gift box feature

### Ceremony Desktop

- Hero: ceremony photography
- Intro: what it is and why it matters
- Experience steps
- Private events and corporate events
- Inquiry form
- FAQ

---

## 13. Tablet Wireframes

### Tablet Principles

- Two-column layouts collapse to balanced 6/6 grids.
- Product grids display two columns.
- Header remains horizontal if space permits, otherwise menu drawer.
- Location and hours remain visible above the fold on Visit.

### Homepage Tablet

1. Hero with full-width video and stacked copy.
2. Why Ethiopia in two columns.
3. Featured Coffees in two-column grid.
4. Ceremony feature with image above copy.
5. Market categories in two-by-two grid.
6. Events in horizontal scroll.
7. Location map above details.

---

## 14. Mobile Wireframes

### Mobile Principles

- Mobile-first hierarchy.
- Thumb-friendly CTAs.
- Sticky bottom bar for Visit, Shop, Events, Call.
- Large tap targets, at least 44px.
- Collapse filters into drawer.

### Homepage Mobile

1. Compact header with logo and menu.
2. Hero video or optimized poster image.
3. H1 and CTAs stacked.
4. Today strip: open status, directions.
5. Why Ethiopia short narrative.
6. Featured coffee carousel.
7. Ceremony CTA block.
8. Market category list.
9. Upcoming events.
10. Location, hours, call, directions.
11. Newsletter.
12. Footer accordion.

### Product Mobile

1. Product image gallery.
2. Name, origin, tasting notes, price.
3. Roast and grind selectors.
4. One-time or subscription segmented control.
5. Sticky add-to-cart.
6. Brew guide accordion.
7. Related products.

---

## 15. Homepage Copy

### Hero

Headline: FROM ETHIOPIA TO YOUR CUP

Subheadline: Experience the birthplace of coffee through exceptional beans, authentic culture, and community.

Primary CTA: Visit Us  
Secondary CTA: Shop Coffee

### Why Ethiopia

Coffee begins in Ethiopia. At Rehoboth, that origin is not a footnote. It is the center of the experience. From bright single-origin beans to the hospitality of the coffee ceremony, every cup connects craft, place, and tradition.

CTA: Explore the Coffee Journey

### Featured Coffees

Title: Coffee With a Sense of Place

Copy: Discover Ethiopian coffees selected for clarity, sweetness, florality, and depth. Shop single origins, espresso blends, subscriptions, and gifts roasted for everyday ritual.

CTA: Shop All Coffee

### Coffee Ceremony

Title: A Tradition Meant to Be Shared

Copy: The Ethiopian coffee ceremony is a moment of gathering, patience, aroma, and welcome. Join us for tastings, private experiences, and community events that honor coffee at its source.

CTA: Book a Ceremony

### Market

Title: A Curated Ethiopian Market

Copy: Explore imported goods, honey, spices, and traditional products chosen to complement the coffee experience.

CTA: Visit the Market

### Events

Title: Gather Around Coffee

Copy: From tastings and workshops to cultural nights and community gatherings, Rehoboth is a place to learn, meet, and return.

CTA: View Events

### Location

Title: Visit Rehoboth

Copy: Come for Ethiopian coffee, stay for the warmth of the room. Find hours, parking, directions, and everything you need to plan your visit.

CTA: Get Directions

### Newsletter

Title: Stay Close to the Ritual

Copy: Receive new coffee releases, event invitations, ceremony dates, and seasonal market arrivals.

CTA: Join the List

---

## 16. Page Copy Frameworks

### Shop

Page goal: Convert coffee interest into purchases and subscriptions.

Content blocks:
- Category intro
- Product grid
- Origin education
- Subscription value
- Gift box feature
- Brew guide links

Template:
- H1: Ethiopian Coffee, Roasted for Everyday Ritual
- Intro: Shop single origins, espresso blends, subscriptions, brewing tools, and gifts.
- Product support: origin, tasting notes, process, roast level, brew method, grind options.

### Coffee Ceremony

Page goal: Build desire and drive booking inquiries.

Content blocks:
- Ceremony overview
- History
- Experience steps
- Private events
- Corporate events
- Inquiry form
- FAQ

Template:
- H1: The Ethiopian Coffee Ceremony
- Intro: A ceremony of aroma, hospitality, and connection.
- CTA: Plan a Ceremony

### Market

Page goal: Reframe market as curated, premium, and complementary.

Content blocks:
- Curation statement
- Category tiles
- Seasonal arrivals
- Gift pairings
- In-store availability note

Template:
- H1: A Market Curated Around Coffee and Home
- Intro: Imported goods, honey, spices, and traditional products selected with care.

### Events

Page goal: Increase attendance and repeat visits.

Content blocks:
- Featured event
- Upcoming events
- Event categories
- Past moments
- Newsletter signup

Template:
- H1: Events and Community
- Intro: Tastings, workshops, cultural nights, and gatherings rooted in coffee.

### About

Page goal: Build trust, identity, and emotional connection.

Content blocks:
- Founder or brand story
- Mission
- Coffee journey
- Farmers and origins
- Values

Template:
- H1: The Rehoboth Story
- Intro: A modern Ethiopian coffee destination shaped by heritage, hospitality, and craft.

### Visit

Page goal: Convert local intent into foot traffic.

Content blocks:
- Open status
- Address
- Hours
- Parking
- Directions
- Phone
- Google Maps
- Amenities
- Review CTA

Template:
- H1: Visit Rehoboth Ethiopian Coffee
- Intro: Plan your visit for coffee, ceremony, market finds, and community events.

---

## 17. SEO Strategy

### Primary Keyword Themes

- Ethiopian coffee Maryland
- Ethiopian coffee Columbia MD
- Specialty coffee Columbia MD
- Coffee ceremony Maryland
- Ethiopian cafe Maryland
- Coffee shop Columbia MD
- Ethiopian coffee beans
- Single origin Ethiopian coffee
- Ethiopian coffee subscription

### Content Clusters

Coffee Education:
- Ethiopian coffee regions
- How to brew Ethiopian coffee
- Natural vs washed Ethiopian coffee
- Ethiopian espresso guide

Coffee Ceremony:
- What is Ethiopian coffee ceremony?
- Coffee ceremony in Maryland
- Private coffee ceremony experience
- Corporate cultural coffee events

Local Destination:
- Best Ethiopian coffee in Maryland
- Specialty coffee in Columbia MD
- Coffee shop for remote work in Columbia MD
- Unique local experiences in Maryland

Products:
- Ethiopian single origin coffee
- Ethiopian coffee gift box
- Ethiopian coffee subscription
- Espresso blends with Ethiopian coffee

### On-Page Requirements

- Unique title and meta description per page
- One H1 per page
- Structured product data
- Internal links from education to products
- Internal links from ceremony articles to booking page
- Local keywords in Visit and location pages
- Optimized image alt text
- Fast Core Web Vitals

---

## 18. Local SEO Strategy

### Google Business Profile

Optimize:
- Primary category: Coffee shop
- Secondary categories: Cafe, Coffee roasters if accurate, Event venue if accurate, Market if available
- Description emphasizing Ethiopian coffee destination
- Products: beans, gift boxes, ceremony, subscriptions
- Services: coffee ceremony, private events, corporate events
- Weekly photo updates
- Event posts
- Review request workflow

### NAP Consistency

Ensure identical name, address, and phone across:
- Website footer
- Contact page
- Visit page
- Google Business Profile
- Yelp
- Apple Maps
- Bing Places
- Facebook
- Instagram
- Local directories

### Local Landing Pages

Create:
- /locations/columbia-md
- /coffee/ethiopian-coffee-maryland
- /coffee/specialty-coffee-columbia-md
- /coffee/coffee-ceremony-maryland

### Local Schema

Add:
- LocalBusiness schema
- CafeOrCoffeeShop schema where appropriate
- GeoCoordinates
- OpeningHoursSpecification
- AggregateRating when policy-compliant and accurate
- Review schema only for first-party displayed reviews that meet guidelines

---

## 19. Accessibility Strategy (WCAG AA)

### Standards

Target WCAG 2.2 AA.

### Requirements

- Color contrast of 4.5:1 for body text
- 3:1 contrast for large text and UI controls
- Keyboard-accessible navigation, menus, modals, filters, and cart
- Visible focus states
- Reduced-motion support
- Alt text for meaningful images
- Captions or transcripts for hero video when audio is used
- Pause/stop/hide control for autoplay video
- Semantic heading hierarchy
- Proper labels and errors for forms
- Touch targets at least 44px
- Accessible cart and checkout handoff
- No text embedded in critical images

### Testing

- Lighthouse accessibility
- axe DevTools
- Keyboard-only QA
- VoiceOver spot checks on macOS/iOS
- Reduced motion QA
- High contrast mode spot checks

---

## 20. Technical Architecture

### Stack

- Next.js 15+ App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS recommended
- Shopify Storefront API
- Vercel deployment
- Cloudflare DNS/CDN
- Google Analytics 4
- Google Search Console
- Schema.org structured data

### Recommended Architecture

```txt
app/
  (site)/
    page.tsx
    shop/
    coffee-ceremony/
    market/
    events/
    about/
    visit/
    contact/
  api/
    revalidate/
components/
  layout/
  sections/
  product/
  events/
  ceremony/
  forms/
  ui/
lib/
  analytics/
  cms/
  shopify/
  seo/
  schema/
  utils/
sanity/
  schemas/
  queries/
styles/
  globals.css
```

### Rendering Strategy

- Static generation for marketing pages
- ISR for CMS-driven content
- Dynamic rendering for cart-related interactions where needed
- Shopify checkout handoff for transactions
- CMS preview mode for editorial content

### Data Sources

Sanity:
- Pages
- Homepage modules
- Events
- Ceremony content
- Market content
- Guides
- Testimonials
- Store location content

Shopify:
- Products
- Variants
- Inventory
- Prices
- Cart
- Checkout
- Subscriptions through Shopify-compatible subscription app

### Integrations

- GA4 for events and commerce tracking
- Google Search Console for indexing
- Google Maps embed or link
- Klaviyo or Shopify Email for lifecycle email
- Resend for transactional website inquiries if needed
- Vercel Analytics optional

---

## 21. Component Library

### Layout

- SiteHeader
- MobileMenu
- MobileActionBar
- SiteFooter
- AnnouncementBar
- PageShell
- Section
- SplitEditorial

### Homepage Sections

- HeroVideo
- TodayStrip
- WhyEthiopia
- FeaturedCoffees
- CeremonyFeature
- MarketPreview
- EventsPreview
- Testimonials
- LocationHours
- NewsletterSignup

### Commerce

- ProductCard
- ProductGrid
- ProductGallery
- ProductDetails
- VariantSelector
- GrindSelector
- SubscriptionToggle
- AddToCartButton
- CartDrawer
- MiniCart
- ProductRecommendations

### Events

- EventCard
- EventGrid
- EventDetailHero
- EventRSVPForm
- CalendarButton
- SoldOutWaitlist

### Ceremony

- CeremonyTimeline
- CeremonyInquiryForm
- ExperienceTypeSelector
- GroupSizeStepper
- DatePreferenceFields
- FAQAccordion

### Content

- RichText
- ImageBlock
- QuoteBlock
- OriginMap
- BrewGuideSteps
- TestimonialCard

### UI

- Button
- IconButton
- Input
- Select
- Textarea
- Checkbox
- Toggle
- Tabs
- Accordion
- Dialog
- Toast
- Tooltip
- Badge
- Skeleton

---

## 22. CMS Recommendation

### Recommended CMS: Sanity

Sanity is the better fit because the brand needs structured editorial storytelling, flexible homepage modules, event content, product-adjacent guides, ceremony pages, and preview workflows. It is excellent for a premium editorial commerce site that needs frequent content updates without engineering involvement.

### Sanity Content Models

- Site settings
- Navigation
- Page
- Homepage
- Product feature
- Coffee origin
- Coffee region
- Brew guide
- Ceremony page
- Event
- Market category
- Market item
- Testimonial
- FAQ
- Location
- SEO metadata

### When Payload Would Be Preferable

Choose Payload if the team strongly prefers self-hosted CMS infrastructure, deeper custom admin logic, or full database ownership. For speed, editor experience, and a refined marketing workflow, Sanity is recommended.

---

## 23. E-commerce Recommendation

### Recommended Commerce Platform: Shopify

Shopify should own product catalog, inventory, checkout, taxes, shipping, discounts, and order management. Next.js should own the branded storefront experience.

### Shopify Scope

- Coffee beans
- Subscriptions
- Brewing equipment
- Gift boxes
- Market products where shipping is feasible
- Discount codes
- Gift cards if desired
- Checkout

### Subscription Recommendation

Use a Shopify-compatible subscription platform such as Recharge, Appstle, or Shopify Subscriptions depending on operational needs.

### Checkout Strategy

Use Shopify cart and checkout for trust, compliance, tax, and operational simplicity. Keep the branded product discovery and education inside Next.js.

---

## 24. Analytics and Tracking Setup

### GA4 Events

Navigation:
- nav_click
- mobile_cta_click

Local:
- directions_click
- call_click
- hours_view
- google_review_click

Commerce:
- view_item
- select_item
- add_to_cart
- begin_checkout
- purchase
- subscription_select
- gift_box_select

Events:
- event_view
- event_rsvp_start
- event_rsvp_complete
- calendar_add
- waitlist_join

Ceremony:
- ceremony_view
- ceremony_inquiry_start
- ceremony_inquiry_complete
- corporate_event_select
- private_event_select

Email:
- newsletter_signup
- guide_download

### Dashboards

Track:
- Foot traffic intent
- Product revenue
- Subscription revenue
- Event conversion
- Ceremony inquiries
- Local search performance
- Top landing pages
- Content-assisted purchases

---

## 25. Performance Optimization Plan

### Targets

- Lighthouse Performance: 90+
- LCP: under 2.5s
- INP: under 200ms
- CLS: under 0.1
- Initial JS: tightly controlled
- Mobile-first image strategy

### Tactics

- Next.js Image for responsive images
- Use optimized hero video with poster fallback
- Serve short muted MP4/WebM versions
- Lazy-load below-fold media
- Use static generation and ISR
- Cache CMS and Shopify queries
- Minimize client components
- Use Framer Motion only where motion adds value
- Respect prefers-reduced-motion
- Use Cloudflare for DNS and edge caching
- Compress and preconnect critical assets
- Avoid heavy third-party scripts

---

## 26. Launch Plan

### Phase 1: Strategy and Content

- Confirm location details, hours, phone, parking, and service offerings
- Define product catalog
- Gather brand story and founder details
- Plan photography and video shoot
- Finalize content models
- Write core page copy

### Phase 2: Design

- Moodboard and art direction
- Homepage wireframes
- Product page wireframes
- Ceremony and events wireframes
- Mobile CTA system
- UI design system
- Accessibility review

### Phase 3: Build

- Scaffold Next.js 15 app
- Configure Tailwind and tokens
- Build component library
- Configure Sanity schemas
- Connect Shopify Storefront API
- Implement page templates
- Add analytics events
- Add schema
- Build preview mode

### Phase 4: Content and QA

- Load CMS content
- Load Shopify products
- Add images and video
- QA responsive layouts
- QA accessibility
- QA checkout
- QA forms
- QA schema
- QA analytics
- Run performance pass

### Phase 5: Launch

- Configure Vercel project
- Configure Cloudflare DNS
- Verify Search Console
- Submit sitemap
- Test redirects
- Launch production
- Monitor errors, analytics, and indexing

### Phase 6: Post-Launch

- Review search queries weekly
- Publish first three guides
- Launch email capture campaign
- Add event calendar cadence
- Request Google reviews
- Optimize product pages by conversion data

---

## 27. Future Growth Roadmap

### 0-3 Months

- Launch core website
- Launch coffee shop and product pages
- Launch ceremony inquiry flow
- Launch events page
- Add email signup
- Publish local SEO pages
- Establish analytics baseline

### 3-6 Months

- Launch subscriptions
- Add brew guides
- Add gift box landing pages
- Add event ticketing
- Add review generation workflow
- Add Google Business Profile content cadence

### 6-12 Months

- Launch origin stories and farmer profiles
- Add loyalty program
- Add corporate gifting
- Add private event package pages
- Add seasonal drops
- Add educational video content

### 12+ Months

- Expand wholesale coffee program
- Launch membership or coffee club
- Add multilingual content if audience data supports it
- Add regional landing pages
- Add advanced personalization for returning shoppers

---

## Complete Implementation Plan

### Recommended Build Order

1. Foundation
   - Create Next.js 15+ App Router project.
   - Add TypeScript, Tailwind CSS, ESLint, Prettier.
   - Configure fonts, color tokens, layout primitives, and metadata defaults.

2. CMS
   - Set up Sanity project and schemas.
   - Build page, event, ceremony, testimonial, guide, location, and SEO models.
   - Add preview mode and webhook-based revalidation.

3. Commerce
   - Configure Shopify products, variants, collections, and subscriptions.
   - Add Storefront API client.
   - Build product listing, product detail, cart drawer, and checkout handoff.

4. Core UI
   - Build header, footer, mobile action bar, buttons, forms, cards, sections.
   - Build accessible modals, accordions, tabs, and drawers.

5. Pages
   - Homepage
   - Shop and product pages
   - Coffee Ceremony
   - Market
   - Events and event detail
   - About
   - Visit
   - Contact
   - SEO support pages

6. Structured Data
   - LocalBusiness schema
   - Product schema
   - Event schema
   - Breadcrumb schema
   - FAQ schema where appropriate

7. Analytics
   - Install GA4
   - Create event helper
   - Track local CTAs, commerce, events, forms, and newsletter
   - Verify events in GA4 DebugView

8. Performance and Accessibility
   - Optimize images and video
   - Reduce client-side JavaScript
   - Add reduced-motion variants
   - Run Lighthouse, axe, and keyboard QA

9. Deployment
   - Deploy to Vercel
   - Configure production environment variables
   - Configure Cloudflare DNS/CDN
   - Connect Google Search Console
   - Submit sitemap

### Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA4_ID=
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=
SANITY_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_ACCESS_TOKEN=
SHOPIFY_API_VERSION=
```

### Initial Next.js Routes

```txt
/
/shop
/shop/[collection]
/products/[handle]
/coffee-ceremony
/market
/events
/events/[slug]
/about
/visit
/contact
/guides/[slug]
/locations/columbia-md
```

### Sanity Schemas

```txt
siteSettings
navigation
page
homepage
hero
event
testimonial
coffeeOrigin
coffeeRegion
brewGuide
ceremonyContent
marketCategory
marketItem
location
seo
```

### Shopify Collections

```txt
single-origin-coffee
espresso-blends
subscriptions
brewing-equipment
gift-boxes
market
```

### Schema Strategy

LocalBusiness:
- Name
- Address
- Phone
- Opening hours
- Geo coordinates
- URL
- SameAs social links

Product:
- Name
- Image
- Description
- SKU
- Brand
- Offers
- Availability
- AggregateRating if valid

Event:
- Name
- Description
- Start/end date
- Location
- Image
- Offers
- Organizer
- Event status

### Definition of Launch Ready

The site is ready to launch when:
- All primary pages are complete.
- All mobile pages have sticky local actions.
- Shopify checkout completes successfully.
- Ceremony and contact forms submit successfully.
- GA4 events are verified.
- Search Console is verified.
- Sitemap and robots.txt are live.
- LocalBusiness, Product, and Event schema validate.
- Lighthouse passes agreed thresholds.
- WCAG AA issues are resolved or documented with owner and timeline.
- Redirects, legal pages, and 404 page are complete.

---

## Creative Direction Summary

Rehoboth should feel like a place people discover once and then proudly recommend. The site should lead with coffee craft, reveal Ethiopian heritage through story and ceremony, make practical visit details effortless, and turn the market into a curated extension of the brand.

The emotional conversion is simple:

This is not just a coffee shop. This is an experience. I need to visit.
