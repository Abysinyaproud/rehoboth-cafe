import type { Metadata } from "next";
import Image from "next/image";
import { givingBackPoints, values } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/content/EmptyState";
import { MediaPlaceholder } from "@/components/content/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { brandImages } from "@/config/brand-assets";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "About Buna House",
  description:
    "Learn the mission and Ethiopian coffee culture behind Buna House in Columbia, Maryland.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <Section
        tone="ivory"
        headingLevel="h1"
        eyebrow="The Buna House story"
        title="Coffee, culture, hospitality, and community."
        intro={`${siteConfig.listingName} was created to share the rich culture, hospitality, and coffee heritage of Ethiopia with the local community and beyond.`}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/22 bg-stone shadow-subtle">
            <Image
              src={brandImages.cafeAtmosphere}
              alt="Buna House interior prepared for guests"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover saturate-[0.9] contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/42 via-transparent to-transparent" />
          </div>
          <div>
            <p className="font-display text-[1.9rem] leading-[1.12] sm:text-4xl">
              In Ethiopian culture, coffee is more than a beverage. It is a
              tradition that brings people together through hospitality,
              conversation, and connection.
            </p>
            <p className="mt-6 leading-8 text-ink/70">
              Inspired by that heritage, Buna House brings Ethiopian coffee,
              tea, injera, teff flour, spices, cultural goods, and a room built
              around welcome into one modern gathering place in Columbia.
            </p>
            <div className="mt-8">
              <ButtonLink href="/visit">Come Experience It</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" eyebrow="Values" title="The principles behind the room.">
        <div className="grid gap-4 md:grid-cols-5">
          {values.map((value) => (
            <div key={value} className="luxury-card border border-gold/22 bg-[#fbf7ef] p-6 transition duration-300 ease-luxury hover:border-gold/45">
              <p className="font-display text-2xl uppercase leading-[1.02] tracking-[0.035em]">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="forest"
        eyebrow="Coffee journey"
        title="From birthplace to gathering place."
        intro="The story moves from Ethiopia's celebrated growing regions to the cup in Columbia, then into the everyday lives of guests who return for coffee, pantry staples, cultural goods, and community."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Source", "Honor Ethiopian coffee as the beginning, not a marketing detail."],
            ["Serve", "Make specialty coffee feel warm, clear, and accessible."],
            ["Gather", "Turn repeat visits into a community rhythm around coffee, market shelves, and conversation."]
          ].map(([title, text]) => (
            <article key={title} className="border-t border-ivory/18 pt-6">
              <h2 className="font-display text-[1.9rem] leading-[1.1]">{title}</h2>
              <p className="mt-4 leading-7 text-ivory/70">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="ivory"
        eyebrow="Giving back"
        title="Every cup creates opportunity."
        intro="Buna House is committed to directing 5% of coffee profits toward practical support for orphans, widows, and vulnerable communities through its compassion initiative."
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="luxury-card border border-gold/20 bg-[#fbf7ef] p-7 shadow-subtle sm:p-8">
            <p className="font-display text-[2.4rem] uppercase leading-[0.96] tracking-[0.035em]">
              Coffee with purpose.
            </p>
            <p className="mt-5 leading-8 text-ink/70">
              The goal is simple: transform everyday purchases into opportunities
              for hope, dignity, and lasting impact.
            </p>
            <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
              5% given back / 100% purpose driven
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {givingBackPoints.map((point) => (
              <p
                key={point}
                className="border-t border-gold/24 pt-4 text-sm font-semibold uppercase tracking-[0.1em] text-espresso/68"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ivory" eyebrow="Founder story" title="The personal story belongs here.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <MediaPlaceholder
            label="Founder portrait"
            title="Founder portrait"
            body="A dedicated portrait and behind-the-scenes image set can be added here when production photography is complete."
            className="min-h-[24rem]"
          />
          <EmptyState
            eyebrow="Founder content"
            title="Founder story content is intentionally reserved for the real interview."
            body="Until the founder interview is complete, this space keeps the page honest and complete without adding biography, awards, sourcing relationships, or personal history that has not been confirmed."
            ctaLabel="Contact Buna House"
            ctaHref={`tel:${siteConfig.phone}`}
          />
        </div>
      </Section>
    </>
  );
}
