import type { Metadata } from "next";
import Image from "next/image";
import { EmptyState } from "@/components/content/EmptyState";
import { FeaturedCoffee } from "@/components/sections/FeaturedCoffee";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { featuredCoffees } from "@/data/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ethiopian Coffee and Specialty Beans",
  description:
    "Explore Ethiopian coffee, single-origin profiles, espresso blends, subscriptions, brewing guidance, and coffee gifts from Rehoboth Ethiopian Coffee.",
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
        intro="Start with single-origin clarity, move into espresso depth, or subscribe to a rotating path through the birthplace of coffee."
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-rehoboth bg-ivory/10">
            <Image
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1400&q=85"
              alt="Roasted coffee beans ready for brewing"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover opacity-90"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
          {["Single Origin", "Espresso Blends", "Subscriptions", "Gift Boxes"].map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
              className="rounded-rehoboth border border-ivory/15 p-5 transition hover:bg-ivory/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Explore
              </span>
              <span className="mt-4 block font-display text-3xl">{category}</span>
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
        intro="Rehoboth can teach without slowing the purchase: tasting notes, origin, process, grind, brew guidance, and subscription cadence all support the decision."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredCoffees.map((coffee) => (
            <article key={coffee.id} id={coffee.id} className="rounded-rehoboth border border-espresso/10 bg-white p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">{coffee.eyebrow}</p>
              <h2 className="mt-5 font-display text-3xl leading-tight">{coffee.name}</h2>
              <p className="mt-3 text-sm font-medium text-forest">{coffee.notes}</p>
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
        intro="The page supports beans, subscriptions, brewing equipment, and gift boxes while keeping product details easy to update as the coffee program grows."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <EmptyState
            eyebrow="Products"
            title="Ask about current coffee availability."
            body="Guests can learn about the coffee direction now and contact the team for current availability. Product names, origins, prices, subscriptions, and checkout links can be updated as the catalog is finalized."
            ctaLabel="Ask About Coffee Availability"
            ctaHref={`mailto:${siteConfig.email}`}
          />
          <div className="rounded-rehoboth border border-ivory/15 bg-ivory/8 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Launch collection
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight">
              Single origin, espresso, subscription, and gift offerings.
            </h2>
            <p className="mt-4 leading-7 text-ivory/72">
              The coffee program can support product media, Shopify handles,
              tasting notes, roast levels, process, grind options, and product
              schema as the catalog expands.
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
            ["Brew", "Pour-over highlights aromatics, espresso brings structure, and subscription keeps the discovery moving."]
          ].map(([title, text]) => (
            <article key={title} className="border-t border-espresso/15 pt-6">
              <h2 className="font-display text-3xl">{title}</h2>
              <p className="mt-4 leading-7 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
