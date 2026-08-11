import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { LuxuryVideoFrame } from "@/components/ui/LuxuryVideoFrame";
import { Section } from "@/components/ui/Section";
import { brandVideos, coffeexImages } from "@/config/brand-assets";
import { siteConfig } from "@/config/site";
import { marketMenuSource, marketProductHighlights } from "@/data/sheet-menu";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Curated Ethiopian Market",
  description:
    "Explore the Buna House shelves for injera bread, teff flour, spices, coffee, tea, Habesha Kemis, and cultural goods in Columbia, Maryland.",
  path: "/market"
});

const categoryLinks = [
  { label: "Coffee", href: "#market-coffee" },
  { label: "Pantry", href: "#market-pantry" },
  { label: "Spices", href: "#market-spices" },
  { label: "Ceremony", href: "#market-ceremony" },
  { label: "Visit", href: "#market-visit" }
] as const;

const featuredGroups = [
  "Coffee",
  "Ethiopian Bread & Injera",
  "Flour, Teff & Shiro",
  "Spices"
] as const;

const pantryGroups = ["Ethiopian Snacks", "Tea", "Bakery & Prepared Bites"] as const;

const ceremonyGroup = marketProductHighlights.find((group) => group.category === "Houseware & Ceremony");
const featuredMarketGroups = marketProductHighlights.filter((group) =>
  featuredGroups.includes(group.category as (typeof featuredGroups)[number])
);
const pantryMarketGroups = marketProductHighlights.filter((group) =>
  pantryGroups.includes(group.category as (typeof pantryGroups)[number])
);

function priceSummary(items: readonly { price: string }[]) {
  const prices = items.map((item) => item.price).filter(Boolean);

  if (!prices.length) {
    return "In store";
  }

  return prices[0].includes("/") ? prices[0] : `from ${prices[0]}`;
}

function MarketHero() {
  return (
    <section className="relative overflow-hidden border-b border-gold/25 bg-forest text-ivory">
      <div className="absolute inset-0">
        <Image
          src={coffeexImages.marketProductShelf.src}
          alt={coffeexImages.marketProductShelf.alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${coffeexImages.marketProductShelf.positionClassName} opacity-72 saturate-[0.88] contrast-[1.05]`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,20,18,0.5),rgba(8,20,18,0.86)),linear-gradient(90deg,rgba(8,20,18,0.92),rgba(8,20,18,0.54)_58%,rgba(8,20,18,0.28))]" />
      </div>

      <div className="relative mx-auto flex min-h-[68svh] max-w-7xl flex-col justify-end px-5 pb-12 pt-28 sm:min-h-[72svh] sm:px-8 lg:min-h-[76svh] lg:px-12 lg:pb-18">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
          Buna House Market
        </p>
        <h1 className="mt-5 max-w-3xl text-balance font-display text-[clamp(2.65rem,13vw,5.8rem)] uppercase leading-[0.88] tracking-[0.035em] text-gold">
          Ethiopian coffee, pantry goods, culture and hospitality.
        </h1>
        <p className="mt-6 max-w-xl font-subhead text-[1.35rem] leading-8 text-ivory/82 sm:text-2xl">
          A curated market for injera, teff, shiro, spices, coffee, tea, ceremony pieces, and everyday gatherings.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#market-featured" className="border-ivory bg-ivory text-espresso hover:bg-white">
            Explore Market
          </ButtonLink>
          <ButtonLink
            href="/visit"
            variant="secondary"
            className="border-ivory/55 text-ivory hover:bg-ivory hover:text-espresso"
          >
            Visit Buna House
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function CategoryNavigation() {
  return (
    <nav
      aria-label="Market categories"
      className="sticky top-0 z-20 border-b border-gold/20 bg-[#fbf7ef]/94 px-5 py-4 text-espresso backdrop-blur-md sm:px-8 lg:static lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categoryLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex min-h-11 shrink-0 items-center border border-gold/28 px-4 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-espresso transition duration-300 hover:border-gold hover:bg-forest hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function FeaturedMarketItems() {
  return (
    <Section
      id="market-featured"
      tone="ivory"
      eyebrow="Featured Market Items"
      title="The Ethiopian shelf, edited for the visit."
      intro={`Curated from ${marketMenuSource.spreadsheet}, ${marketMenuSource.tab}!${marketMenuSource.range}, modified ${marketMenuSource.modified}. Full raw inventory, barcodes, and tax rates are intentionally not published.`}
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {featuredMarketGroups.map((group, index) => (
          <article
            id={index === 0 ? "market-coffee" : index === 1 ? "market-pantry" : undefined}
            key={group.category}
            className="luxury-card overflow-hidden border border-gold/20 bg-[#fbf7ef] shadow-subtle transition duration-300 ease-luxury hover:border-gold/45"
          >
            <div
              className={
                group.category === "Coffee"
                  ? "grid gap-0 sm:grid-cols-[0.42fr_0.58fr]"
                  : "grid gap-0 sm:grid-cols-[0.28fr_0.72fr]"
              }
            >
              {group.category === "Coffee" ? (
                <div className="relative aspect-[4/5] overflow-hidden bg-espresso/10 sm:aspect-auto">
                  <Image
                    src={coffeexImages.coffeePackagingStack.src}
                    alt={coffeexImages.coffeePackagingStack.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 100vw"
                    className={`object-cover ${coffeexImages.coffeePackagingStack.positionClassName} saturate-[0.88] contrast-[1.04]`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/36 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="flex min-h-28 items-end border-b border-gold/14 bg-forest p-5 text-gold sm:min-h-full sm:border-b-0 sm:border-r">
                  <span className="font-display text-[4.5rem] uppercase leading-none tracking-[0.02em] opacity-80">
                    0{index + 1}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-gold">
                  Available in market
                </p>
                <h2 className="mt-4 text-balance font-display text-[2rem] uppercase leading-[0.98] tracking-[0.035em] text-espresso">
                  {group.category}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-7 text-ink/68">{group.note}</p>

                <div className="mt-6 divide-y divide-espresso/10">
                  {group.items.slice(0, 4).map((item) => (
                    <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 py-3">
                      <p className="text-[0.95rem] font-medium leading-6 text-espresso">{item.name}</p>
                      <p className="shrink-0 text-right text-sm font-semibold leading-6 text-gold">{item.price}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/visit"
                  className="mt-6 inline-flex min-h-11 items-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold underline decoration-gold/50 underline-offset-8 transition hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Visit in store
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function OriginShelfStory() {
  return (
    <Section
      tone="espresso"
      eyebrow="Coffee and origin"
      title="Coffee is the first shelf."
      intro="The market begins with the Ethiopian coffee story: roasted beans, green coffee, brewing tools, and ceremony pieces for guests who want the ritual at home."
      className="py-16 sm:py-20 lg:py-28"
    >
      <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <LuxuryVideoFrame
          src={brandVideos.marketGreenCoffeeShelf.src}
          poster={brandVideos.marketGreenCoffeeShelf.poster}
          label={brandVideos.marketGreenCoffeeShelf.label}
          eyebrow="Green coffee"
          title="Shelf to home ritual"
          meta="Take-home coffee, green coffee, and pantry staples from the market shelf."
          aspectClassName="aspect-[4/5] max-h-[38rem] lg:aspect-[3/4]"
          videoClassName="object-[50%_42%]"
        />
        <div className="grid gap-4">
          {[
            ["Coffee", "Roasted coffee and green Ethiopian coffee for the home shelf."],
            ["Origin", "A market rooted in the birthplace of coffee, not a generic grocery aisle."],
            ["Ritual", "Jebena, sini, trays, incense, and coffee sets for ceremony at home."]
          ].map(([title, text]) => (
            <article key={title} className="border-t border-gold/18 pt-5">
              <h2 className="font-display text-[1.8rem] uppercase leading-[1] tracking-[0.035em] text-gold">
                {title}
              </h2>
              <p className="mt-3 max-w-xl text-[0.98rem] leading-7 text-ivory/66">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function PantryAndCeremony() {
  return (
    <Section
      id="market-spices"
      tone="white"
      eyebrow="Pantry and culture"
      title="Staples, aromatics, and ceremony goods."
      intro="A concise edit of the shelf. Availability can change in store, so the page previews categories without turning into raw inventory."
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28"
    >
      <div className="grid gap-5 lg:grid-cols-[0.58fr_0.42fr]">
        <div className="grid gap-5">
          {pantryMarketGroups.map((group) => (
            <article key={group.category} className="border border-gold/18 bg-ivory/58 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-gold">
                    {group.category}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-ink/64">{group.note}</p>
                </div>
                <p className="shrink-0 text-right text-sm font-semibold leading-6 text-gold">
                  {priceSummary(group.items)}
                </p>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {group.items.slice(0, 4).map((item) => (
                  <p key={item.name} className="text-sm leading-6 text-espresso/74">
                    <span className="font-medium">{item.name}</span>{" "}
                    <span className="text-gold">{item.price}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {ceremonyGroup ? (
          <article id="market-ceremony" className="scroll-mt-24 border border-gold/22 bg-forest p-6 text-ivory shadow-[0_28px_80px_rgba(8,20,18,0.12)] sm:p-7">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Ceremony goods
            </p>
            <h2 className="mt-4 font-display text-[2rem] uppercase leading-[0.98] tracking-[0.035em] text-gold">
              Bring the ritual home.
            </h2>
            <p className="mt-4 text-sm leading-7 text-ivory/66">{ceremonyGroup.note}</p>
            <div className="mt-6 divide-y divide-gold/12">
              {ceremonyGroup.items.slice(0, 6).map((item) => (
                <div key={item.name} className="grid grid-cols-[1fr_auto] gap-4 py-3">
                  <p className="text-sm font-medium leading-6 text-ivory">{item.name}</p>
                  <p className="shrink-0 text-right text-sm font-semibold leading-6 text-gold">{item.price}</p>
                </div>
              ))}
            </div>
          </article>
        ) : null}
      </div>
    </Section>
  );
}

function HospitalityMoment() {
  return (
    <Section
      tone="ivory"
      eyebrow="Hospitality"
      title="A market shaped by welcome."
      intro="The Buna House market is meant to feel personal: a place to ask questions, gather ingredients, and leave with something that belongs at the table."
      className="py-16 sm:py-20 lg:py-28"
    >
      <div className="grid gap-7 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden border border-gold/20 bg-[#e8ddcb] lg:aspect-[5/6]">
          <Image
            src={coffeexImages.founderRegisterPortrait.src}
            alt={coffeexImages.founderRegisterPortrait.alt}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 42vw, 100vw"
            className={`object-cover ${coffeexImages.founderRegisterPortrait.positionClassName} saturate-[0.9] contrast-[1.04]`}
          />
        </div>
        <div className="border-l border-gold/35 pl-5 sm:pl-7">
          <h2 className="text-balance font-display text-[2.3rem] uppercase leading-[0.95] tracking-[0.035em] text-espresso sm:text-5xl">
            Not a catalog. A room for culture and care.
          </h2>
          <p className="mt-6 max-w-2xl font-subhead text-[1.45rem] leading-8 text-espresso/72">
            Coffee, pantry goods, and conversation live together here. The shelf is curated, but the feeling is generous.
          </p>
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            Learn Our Story
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

function FinalVisitCta() {
  return (
    <Section
      id="market-visit"
      tone="forest"
      eyebrow="Visit"
      title="Come for coffee. Leave with the market."
      intro="Plan a visit for coffee, injera, teff flour, shiro, spices, tea, houseware, and the small discoveries that make the shelf feel alive."
      className="scroll-mt-24 py-16 sm:py-20 lg:py-28"
    >
      <div className="grid gap-5 border border-gold/20 bg-espresso/20 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="font-subhead text-2xl leading-8 text-ivory/82">{siteConfig.locationLabel}</p>
          <div className="mt-5 grid gap-3 text-sm leading-6 text-ivory/64 sm:grid-cols-2">
            {siteConfig.hours.map((item) => (
              <p key={item.days}>
                <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  {item.days}
                </span>
                {item.time}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <ButtonLink href={siteConfig.directionsUrl} className="border-ivory bg-ivory text-espresso hover:bg-white">
            Get Directions
          </ButtonLink>
          <ButtonLink href={`tel:${siteConfig.phone}`} variant="secondary" className="border-ivory/50 text-ivory hover:bg-ivory hover:text-espresso">
            Call {siteConfig.phoneLabel}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

export default function MarketPage() {
  return (
    <>
      <MarketHero />
      <CategoryNavigation />
      <section className="border-b border-gold/18 bg-[#fbf7ef] px-5 py-10 text-espresso sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="max-w-3xl font-subhead text-[1.45rem] leading-8 text-espresso/74 sm:text-2xl sm:leading-9">
            Buna House brings Ethiopian coffee, pantry staples, ceremony goods, and warm hospitality into one refined market experience.
          </p>
        </div>
      </section>
      <FeaturedMarketItems />
      <OriginShelfStory />
      <PantryAndCeremony />
      <HospitalityMoment />
      <FinalVisitCta />
    </>
  );
}
