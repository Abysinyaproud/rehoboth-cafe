import type { Metadata } from "next";
import Image from "next/image";
import { EmptyState } from "@/components/content/EmptyState";
import { MarketPreview } from "@/components/sections/MarketPreview";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { marketCategories } from "@/data/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Curated Ethiopian Market",
  description:
    "Explore Rehoboth Ethiopian Coffee's curated market with imported goods, honey, spices, traditional products, and thoughtful gifts.",
  path: "/market"
});

export default function MarketPage() {
  return (
    <>
      <Section
        tone="forest"
        headingLevel="h1"
        eyebrow="Market"
        title="A market chosen with the restraint of a good coffee menu."
        intro="Every shelf should feel edited: useful, giftable, culturally specific, and connected to the rituals of coffee, home, and gathering."
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
          <p className="font-display text-3xl leading-tight sm:text-4xl">
            Imported goods, honey, spices, and traditional products selected
            with the same care as the coffee.
          </p>
          <div className="mt-8">
            <ButtonLink href="/visit" className="bg-ivory text-espresso hover:bg-gold">
              Visit the Market This Weekend
            </ButtonLink>
          </div>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-rehoboth bg-espresso/20">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1500&q=85"
              alt="Curated specialty market goods arranged with care"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </Section>

      <MarketPreview />

      <Section tone="white" eyebrow="Retail rhythm" title="Curated, giftable, and seasonal.">
        <div className="grid gap-6 md:grid-cols-2">
          {marketCategories.map((category) => (
            <article key={category.title} className="rounded-rehoboth border border-espresso/10 bg-ivory p-7">
              <h2 className="font-display text-3xl">{category.title}</h2>
              <p className="mt-4 leading-7 text-ink/70">{category.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <EmptyState
            eyebrow="Inventory"
            title="Market availability will change with sourcing and season."
            body="Market names, prices, gift boxes, and in-store availability can be updated as the shelf changes."
            ctaLabel="Ask About Market Goods"
            ctaHref="mailto:hello@rehobothethiopiancoffee.com"
          />
        </div>
      </Section>
    </>
  );
}
