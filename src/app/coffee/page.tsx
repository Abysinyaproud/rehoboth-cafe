import type { Metadata } from "next";
import Image from "next/image";
import { EmptyState } from "@/components/content/EmptyState";
import { FeaturedCoffee } from "@/components/sections/FeaturedCoffee";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { brandImages } from "@/config/brand-assets";
import { siteConfig } from "@/config/site";
import { featuredCoffees } from "@/data/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ethiopian Coffee and Specialty Beans",
  description:
    "Explore Ethiopian coffee, cafe mocha, macchiato, Americano, take-home coffee, and traditional coffee experiences at Buna House in Columbia, Maryland.",
  path: "/coffee"
});

export default function CoffeePage() {
  return (
    <>
      <Section
        tone="espresso"
        headingLevel="h1"
        eyebrow="Coffee"
        title="Ethiopian coffee with origin in the foreground."
        intro="Start with Ethiopian coffee, move into cafe favorites like macchiato and Americano, then bring the ritual home through the market shelf."
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/24 bg-ivory/10 shadow-[0_34px_100px_rgba(8,20,18,0.24)]">
            <Image
              src={brandImages.coffeeDetail}
              alt="Buna House Ethiopian coffee ceremony and roasted coffee beans"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-92 saturate-[0.9] contrast-[1.04]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Ethiopian Coffee", "single-origin"],
            ["Espresso Drinks", "espresso"],
            ["Take-Home Coffee", "subscriptions"],
            ["Coffee Ceremony", "ceremony"]
          ].map(([category, target]) => (
            <a
              key={category}
              href={target === "ceremony" ? "/ceremony" : `#${target}`}
              className="luxury-card border border-gold/25 p-6 transition duration-300 ease-luxury hover:border-gold/70 hover:bg-ivory/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold/82">
                Explore
              </span>
              <span className="mt-4 block font-display text-[1.9rem] leading-[1.1]">{category}</span>
            </a>
          ))}
          </div>
        </div>
      </Section>

      <FeaturedCoffee />

      <Section
        tone="ivory"
        eyebrow="How to choose"
        title="Pick by the way you want the cup to feel."
        intro="Buna House can meet a quick cafe stop and a slower coffee ritual in the same room: espresso drinks, roasted coffee, tea, and traditional Ethiopian coffee experiences."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCoffees.map((coffee) => (
            <article key={coffee.id} id={coffee.id} className="luxury-card border border-gold/25 bg-[#fbf7ef] p-8 shadow-subtle transition duration-300 ease-luxury hover:border-gold/50">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-gold">{coffee.eyebrow}</p>
              <h2 className="mt-5 font-display text-[2rem] uppercase leading-[1] tracking-[0.035em]">{coffee.name}</h2>
              <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-accent">{coffee.notes}</p>
              <p className="mt-4 leading-7 text-ink/70">{coffee.body}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-lg font-semibold">{coffee.price}</span>
                <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary">
                  Ask About Coffee
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="espresso"
        eyebrow="Online shop"
        title="Coffee offerings are gathered around origin and ritual."
        intro="The page supports beans, tea, brewing gifts, future subscriptions, and Shopify checkout while keeping product details easy to update as the coffee program grows."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <EmptyState
            eyebrow="Products"
            title="Ask about current coffee and take-home availability."
            body="Online checkout can be connected later. For now, guests can visit or call to ask what coffee, tea, and take-home goods are currently on the shelf."
            ctaLabel="Ask About Coffee Availability"
            ctaHref={`tel:${siteConfig.phone}`}
          />
          <div className="luxury-card border border-gold/24 bg-ivory/[0.06] p-7 sm:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold/82">
              Launch collection
            </p>
            <h2 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.02] tracking-[0.035em]">
              Ethiopian coffee, espresso drinks, tea, and future online products.
            </h2>
            <p className="mt-4 leading-7 text-ivory/72">
              The coffee program can support product media, Shopify handles,
              tasting notes, roast levels, grind options, and product schema as
              the catalog expands.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="white"
        eyebrow="Single-origin education"
        title="Origin is not trivia. It changes the cup."
        intro="Ethiopian coffees can be floral, citrusy, tea-like, jammy, cocoa-toned, or spice-warm depending on region, process, roast, and brew method."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Region", "Use region notes to set expectation before the first sip."],
            ["Process", "Washed coffees often bring clarity; natural coffees can lean fruit-forward and plush."],
            ["Brew", "Pour-over highlights aromatics, espresso brings structure, and coffee ceremony turns brewing into welcome."]
          ].map(([title, text]) => (
            <article key={title} className="border-t border-espresso/15 pt-6">
              <h2 className="font-display text-[1.9rem] leading-[1.1]">{title}</h2>
              <p className="mt-4 leading-7 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
