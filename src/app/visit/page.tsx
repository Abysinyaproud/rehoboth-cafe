import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { visitReasons } from "@/data/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Visit Buna House",
  description:
    "Visit Buna House at 9400 Snowden River Pkwy Suite 113 in Columbia, Maryland for Ethiopian coffee, cafe drinks, injera, teff flour, spices, and market goods.",
  path: "/visit"
});

export default function VisitPage() {
  return (
    <>
      <Section
        tone="espresso"
        headingLevel="h1"
        eyebrow="Visit"
        title="Make Buna House the coffee plan this weekend."
        intro="Find Ethiopian coffee, cafe drinks, injera, teff flour, spices, tea, and cultural goods at 9400 Snowden River Pkwy Suite 113 in Columbia."
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="border border-gold/24 bg-ivory/[0.06] p-7 sm:p-9">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold/82">
              Columbia, Maryland
            </p>
            <h2 className="mt-8 font-display text-4xl leading-[1.08] sm:text-5xl">
              {siteConfig.listingName}
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-ivory/72">
              Come for coffee with Ethiopian roots, then browse a market that
              carries the everyday pieces of home: injera, teff flour, spices,
              tea, coffee, and cultural goods.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.1em] text-gold/82">
              {siteConfig.locationLabel}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.directionsUrl} className="border-gold bg-gold text-forest hover:bg-ivory">
                Get Directions
              </ButtonLink>
              <ButtonLink
                href={`tel:${siteConfig.phone}`}
                variant="secondary"
                className="border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso"
              >
                Call {siteConfig.phoneLabel}
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden border border-gold/24 bg-ivory/10">
            <Image
              src="/brand/images/cafe-market-interior.png"
              alt="Buna House interior with coffee counter and warm hospitality atmosphere"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover opacity-92 saturate-[0.9] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="max-w-md font-display text-[1.9rem] leading-[1.1]">
                A weekend stop with enough warmth to become a habit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="hours"
        tone="ivory"
        eyebrow="Before you leave"
        title="The practical details should be effortless."
      >
        <div className="grid gap-4 lg:grid-cols-4">
            {[
              ["Hours", "Mon-Sat 10:00 AM-8:00 PM. Sunday 10:00 AM-4:00 PM."],
              ["Parking", "Use the Snowden River Parkway shopping center arrival flow and check posted lot signs."],
              ["Directions", "Open maps directly to 9400 Snowden River Pkwy Suite 113, Columbia, MD 21045."],
              ["Reviews", "Read public listing reviews before you visit, then leave your own after the experience."]
            ].map(([title, text]) => (
              <article key={title} className="border border-gold/22 bg-[#fbf7ef] p-6 shadow-subtle">
                <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-gold">{title}</h2>
                <p className="mt-3 leading-7 text-ink/70">{text}</p>
              </article>
            ))}
        </div>
      </Section>

      <Section
        id="directions"
        tone="white"
        eyebrow="Why visit now"
        title="A specific reason to choose Buna House, not just another coffee stop."
        intro="The page should convert local intent into an actual visit by pairing utility with a vivid reason to go."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {visitReasons.map((reason) => (
            <article key={reason} className="border-t border-espresso/15 pt-6">
              <h2 className="font-display text-[1.9rem] leading-[1.1]">{reason}</h2>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.directionsUrl}>Open Directions</ButtonLink>
          <ButtonLink href={`tel:${siteConfig.phone}`} variant="secondary">
            Call {siteConfig.phoneLabel}
          </ButtonLink>
          <ButtonLink href={siteConfig.yelpUrl} variant="text">
            View Yelp Listing
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
