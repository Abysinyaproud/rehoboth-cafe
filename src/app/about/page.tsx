import type { Metadata } from "next";
import Image from "next/image";
import { values } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/content/EmptyState";
import { MediaPlaceholder } from "@/components/content/MediaPlaceholder";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Rehoboth Ethiopian Coffee",
  description:
    "Learn the mission, coffee journey, hospitality values, and Ethiopian coffee culture behind Rehoboth Ethiopian Coffee.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <Section
        tone="ivory"
        headingLevel="h1"
        eyebrow="The Rehoboth story"
        title="Built from the feeling of being welcomed in."
        intro="Rehoboth is an Ethiopian coffee destination: coffee first, culture held with care, and hospitality designed for the people who walk through the door."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-rehoboth bg-stone">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=85"
              alt="Warm interior cafe counter prepared for guests"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-3xl leading-tight sm:text-4xl">
              The ambition is simple and generous: give Maryland a place where
              Ethiopian coffee is treated with the depth, beauty, and modernity
              it deserves.
            </p>
            <p className="mt-6 leading-8 text-ink/70">
              Until the full founder interview and portraits are published, the
              story is carried by the mission: a respect for origin, a room for
              neighbors, and a market that extends the ritual beyond the cup.
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
            <div key={value} className="rounded-rehoboth border border-espresso/10 bg-ivory p-6">
              <p className="font-display text-2xl leading-tight">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        tone="forest"
        eyebrow="Coffee journey"
        title="From birthplace to gathering place."
        intro="The story moves from Ethiopian origin to the cup in Columbia, then into the everyday lives of guests who return for beans, ceremony, gifts, and community."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Source", "Honor Ethiopian coffee as the beginning, not a marketing detail."],
            ["Serve", "Make specialty coffee feel warm, clear, and accessible."],
            ["Gather", "Turn repeat visits into a community rhythm."]
          ].map(([title, text]) => (
            <article key={title} className="border-t border-ivory/18 pt-6">
              <h2 className="font-display text-3xl">{title}</h2>
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
            ctaLabel="Contact Rehoboth"
            ctaHref="mailto:hello@rehobothethiopiancoffee.com"
          />
        </div>
      </Section>
    </>
  );
}
