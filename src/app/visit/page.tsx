import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { visitReasons } from "@/data/content";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Visit Rehoboth Ethiopian Coffee",
  description:
    "Plan your visit to Rehoboth Ethiopian Coffee in Columbia, Maryland for Ethiopian specialty coffee, ceremony, market finds, and warm hospitality.",
  path: "/visit"
});

export default function VisitPage() {
  return (
    <>
      <Section
        tone="espresso"
        headingLevel="h1"
        eyebrow="Visit"
        title="Make Rehoboth the coffee plan this weekend."
        intro="Find Ethiopian coffee, ceremony, market finds, and a room made for slowing down in Columbia, Maryland."
      >
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-rehoboth border border-ivory/15 bg-ivory/8 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Columbia, Maryland
            </p>
            <h2 className="mt-8 font-display text-5xl leading-[1.02] sm:text-6xl">
              Rehoboth Ethiopian Coffee
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-ivory/72">
              Come for single-origin beans, espresso, ceremony, remote work,
              local gathering, and a market curated around Ethiopian home and
              hospitality.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={siteConfig.directionsUrl}
                className="bg-ivory text-espresso hover:bg-gold"
              >
                Get Directions
              </ButtonLink>
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                variant="secondary"
                className="border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso"
              >
                Ask Before You Go
              </ButtonLink>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden rounded-rehoboth bg-ivory/10">
            <Image
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1500&q=85"
              alt="Warm coffee shop counter prepared for guests"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="max-w-md font-display text-3xl leading-tight">
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
              ["Hours", "Daily hours are shared here for easy planning."],
              ["Parking", "Arrival and parking notes sit beside directions for mobile visitors."],
              ["Directions", "One-tap route planning for mobile local search visitors."],
              ["Reviews", "Guest reviews help new visitors discover Ethiopian coffee at Rehoboth."]
            ].map(([title, text]) => (
              <article key={title} className="rounded-rehoboth border border-espresso/10 bg-white p-6 shadow-subtle">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">{title}</h2>
                <p className="mt-3 leading-7 text-ink/70">{text}</p>
              </article>
            ))}
        </div>
      </Section>

      <Section
        id="directions"
        tone="white"
        eyebrow="Why visit now"
        title="A specific reason to choose Rehoboth, not just another coffee stop."
        intro="The page should convert local intent into an actual visit by pairing utility with a vivid reason to go."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {visitReasons.map((reason) => (
            <article key={reason} className="border-t border-espresso/15 pt-6">
              <h2 className="font-display text-3xl leading-tight">{reason}</h2>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.directionsUrl}>Open Directions</ButtonLink>
          <ButtonLink href={`mailto:${siteConfig.email}`} variant="secondary">
            Email Rehoboth
          </ButtonLink>
          <ButtonLink href={siteConfig.reviewUrl} variant="text">
            Leave a Google Review
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
