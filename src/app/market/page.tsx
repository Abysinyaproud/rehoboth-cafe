import type { Metadata } from "next";
import { EmptyState } from "@/components/content/EmptyState";
import { AnimatedPricingMenu } from "@/components/sections/AnimatedPricingMenu";
import { MarketPreview } from "@/components/sections/MarketPreview";
import { ButtonLink } from "@/components/ui/Button";
import { LuxuryMediaFrame } from "@/components/ui/LuxuryMediaFrame";
import { Section } from "@/components/ui/Section";
import { brandImages } from "@/config/brand-assets";
import { siteConfig } from "@/config/site";
import { marketCategories } from "@/data/content";
import { marketMenuSource, marketProductHighlights } from "@/data/sheet-menu";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Curated Ethiopian Market",
  description:
    "Explore the Buna House shelves for injera bread, teff flour, spices, coffee, tea, Habesha Kemis, and cultural goods in Columbia, Maryland.",
  path: "/market"
});

export default function MarketPage() {
  return (
    <>
      <Section
        tone="forest"
        headingLevel="h1"
        eyebrow="Market"
        title="A market chosen for the Ethiopian table."
        intro="Every shelf should feel edited: injera, teff flour, spices, coffee, tea, gifts, and cultural goods connected to home, ceremony, and gathering."
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-[1.9rem] leading-[1.12] sm:text-4xl">
              Injera bread, teff flour, spices, coffee, tea, and cultural goods
              selected with the same care as the cup.
            </p>
            <div className="mt-8 grid gap-3 border-l border-gold/45 pl-5 text-sm leading-6 text-ivory/62">
              <p>Edited shelves, not visual noise.</p>
              <p>Every object should feel useful, giftable, and rooted in Ethiopian hospitality.</p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/visit" className="border-ivory bg-ivory text-espresso hover:bg-white">
                Visit the Market This Weekend
              </ButtonLink>
            </div>
          </div>
          <LuxuryMediaFrame
            src={brandImages.marketShelves}
            alt="Buna House interior with Ethiopian market shelves and coffee service"
            eyebrow="Shelf ritual"
            title="Coffee, pantry, and cultural goods with restraint."
            meta="A quiet market experience for guests who want to bring Ethiopian hospitality home."
            imageClassName="aspect-[16/12] lg:aspect-[16/11]"
          />
        </div>
      </Section>

      <MarketPreview />

      <AnimatedPricingMenu variant="market" />

      <Section
        tone="ivory"
        eyebrow="From the shelf"
        title="Current market highlights from the inventory sheet."
        intro={`Curated from ${marketMenuSource.spreadsheet}, ${marketMenuSource.tab}!${marketMenuSource.range}, modified ${marketMenuSource.modified}. Barcodes, tax rates, and full raw inventory are intentionally not published. Product availability and pricing should be confirmed in store.`}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {marketProductHighlights.map((group) => (
            <article
              key={group.category}
              className="luxury-card border border-gold/22 bg-[#fbf7ef] p-7 shadow-subtle transition duration-300 ease-luxury hover:border-gold/55 sm:p-8"
            >
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-gold">
                {group.category}
              </p>
              <p className="mt-4 leading-7 text-ink/70">{group.note}</p>
              <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold/80">
                Available in market / visit in store
              </p>
              <div className="mt-7 divide-y divide-espresso/10">
                {group.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between gap-5 py-3">
                    <span className="text-sm font-medium leading-6 text-espresso">{item.name}</span>
                    <span className="shrink-0 text-sm font-semibold leading-6 text-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="Retail rhythm" title="Curated, giftable, and seasonal.">
        <div className="grid gap-6 md:grid-cols-2">
          {marketCategories.map((category) => (
            <article key={category.title} className="luxury-card relative overflow-hidden border border-gold/22 bg-[#fbf7ef] p-7 shadow-subtle transition duration-300 ease-luxury hover:border-gold/55 sm:p-8">
              <div className="absolute right-0 top-0 h-12 w-px bg-gold/45" aria-hidden="true" />
              <div className="absolute right-0 top-0 h-px w-12 bg-gold/45" aria-hidden="true" />
              <h2 className="font-display text-[1.9rem] uppercase leading-[1.02] tracking-[0.035em]">{category.title}</h2>
              <p className="mt-4 leading-7 text-ink/70">{category.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <EmptyState
            eyebrow="Inventory"
            title="Market availability will change with sourcing and season."
            body="Market names, prices, gift boxes, and in-store availability can be updated as the shelf changes. Visit or call for current injera, teff flour, spice, coffee, tea, and cultural goods availability."
            ctaLabel="Ask About Market Goods"
            ctaHref={`tel:${siteConfig.phone}`}
          />
        </div>
      </Section>
    </>
  );
}
