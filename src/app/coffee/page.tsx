import type { Metadata } from "next";
import Image from "next/image";
import { EmptyState } from "@/components/content/EmptyState";
import { AnimatedPricingMenu } from "@/components/sections/AnimatedPricingMenu";
import { FeaturedCoffee } from "@/components/sections/FeaturedCoffee";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { brandImages } from "@/config/brand-assets";
import { siteConfig } from "@/config/site";
import { coffeeOrigins, coffeeQualityPoints, featuredCoffees } from "@/data/content";
import { cafeMenuSections, cafeMenuSource } from "@/data/sheet-menu";
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
        title="Single-origin Ethiopian coffee, rooted in heritage."
        intro="Experience the authentic taste of Ethiopia, the birthplace of coffee. Buna House celebrates the growing regions, traditions, and exceptional flavors that make Ethiopian coffee world-renowned."
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
        id="single-origin"
        tone="ivory"
        eyebrow="Coffee shop"
        title="Every cup tells a regional story."
        intro="From the floral elegance of Yirgacheffe to the bold character of Harrar, each coffee is selected, roasted, and served to preserve its own character."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {coffeeOrigins.map((origin) => (
            <article
              key={origin.name}
              className="luxury-card border border-gold/20 bg-[#fbf7ef] p-6 shadow-subtle transition duration-300 ease-luxury hover:border-gold/45 sm:p-7"
            >
              <h2 className="font-display text-[2.2rem] uppercase leading-[0.96] tracking-[0.035em]">
                {origin.name}
              </h2>
              <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-gold">
                {origin.notes}
              </p>
              <p className="mt-3 text-sm leading-6 text-espresso/58">{origin.altitude}</p>
              <p className="mt-5 leading-7 text-ink/70">{origin.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coffeeQualityPoints.map((point) => (
            <p
              key={point}
              className="border-t border-gold/24 pt-4 text-sm font-semibold uppercase tracking-[0.12em] text-espresso/68"
            >
              {point}
            </p>
          ))}
        </div>
      </Section>

      <AnimatedPricingMenu variant="coffee" />

      <Section
        id="cafe-menu"
        tone="white"
        eyebrow="Cafe menu"
        title="Prices from the live cafe menu."
        intro={`Curated from ${cafeMenuSource.spreadsheet}, ${cafeMenuSource.tab}!${cafeMenuSource.range}, modified ${cafeMenuSource.modified}. Final availability may vary in store.`}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {cafeMenuSections.map((section) => (
            <article
              key={section.title}
              className="luxury-card border border-gold/22 bg-[#fbf7ef] p-6 shadow-subtle transition duration-300 ease-luxury hover:border-gold/45 sm:p-7"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold">
                {section.sourceCategory}
              </p>
              <h2 className="mt-4 font-display text-[2rem] uppercase leading-[1] tracking-[0.035em]">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-ink/64">{section.note}</p>
              <div className="mt-6 divide-y divide-espresso/10">
                {section.items.slice(0, 6).map((item) => (
                  <div key={item.name} className="grid gap-3 py-4 sm:grid-cols-[1fr_auto] sm:items-start">
                    <p className="font-medium text-espresso">{item.name}</p>
                    <p className="text-sm leading-6 text-espresso/68">
                      {item.prices.filter(Boolean).join(" / ")}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

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
        title="Coffee offerings are available in store while online checkout is staged."
        intro="The public site now reflects the cafe menu and market coffee shelf, but Shopify checkout remains disabled until products, inventory, tax, shipping, and payment are connected."
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
