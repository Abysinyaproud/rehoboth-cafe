import type { Metadata } from "next";
import Image from "next/image";
import { values } from "@/data/content";
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
        title="Built from the feeling of being welcomed in."
        intro={`${siteConfig.listingName} brings Ethiopian coffee, market goods, and everyday hospitality together in Columbia, Maryland.`}
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
              The ambition is simple and generous: give Maryland a place where
              Ethiopian coffee is treated with the depth, beauty, and modernity
              it deserves.
            </p>
            <p className="mt-6 leading-8 text-ink/70">
              Until the full founder interview and portraits are published, the
              story is carried by the work guests can already experience: coffee,
              tea, injera, teff flour, spices, cultural goods, and a room built
              around welcome.
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
        intro="The story moves from Ethiopian origin to the cup in Columbia, then into the everyday lives of guests who return for coffee, pantry staples, cultural goods, and community."
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
