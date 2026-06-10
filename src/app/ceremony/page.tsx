import type { Metadata } from "next";
import Image from "next/image";
import { EmptyState } from "@/components/content/EmptyState";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Ethiopian Coffee Ceremony",
  description:
    "Learn about traditional Ethiopian coffee experiences at Buna House in Columbia, Maryland.",
  path: "/ceremony"
});

export default function CeremonyPage() {
  return (
    <>
      <Section
        tone="forest"
        headingLevel="h1"
        eyebrow="Coffee Ceremony"
        title="A tradition of welcome, aroma, and gathering."
        intro="The Ethiopian coffee ceremony turns coffee into an act of care. Buna House presents traditional coffee experiences as a way to slow down, learn, gather, and feel Ethiopian hospitality."
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="relative aspect-[16/11] overflow-hidden rounded-brand bg-espresso/20">
            <Image
              src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1600&q=85"
              alt="Coffee ceremony table with cups prepared for guests"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover opacity-90"
            />
          </div>
          <div className="rounded-brand border border-ivory/15 p-7">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-gold/82">
              Ceremony details
            </p>
            <p className="mt-5 font-display text-[1.9rem] leading-[1.1]">
              Private and group ceremony experiences are being shaped with care.
            </p>
            <p className="mt-5 leading-8 text-ivory/72">
              Until formal booking opens, guests can call Buna House for ceremony
              questions, private gathering interest, and community event updates.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={`tel:${siteConfig.phone}`}
                className="border-ivory bg-ivory text-espresso hover:bg-white"
              >
                Call Buna House
              </ButtonLink>
              <ButtonLink
                href="/visit"
                variant="secondary"
                className="border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso"
              >
                Plan a Visit
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="ivory"
        eyebrow="What it is"
        title="Coffee as hospitality."
        intro="Ceremony often includes roasting, grinding, brewing, pouring, and serving coffee in a shared setting. The details may vary, but the heart is welcome."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Aroma", "Roasting and brewing create a sensory invitation before the first sip."],
            ["Patience", "The pace asks guests to sit, notice, and be present."],
            ["Gathering", "Coffee becomes a reason for conversation and connection."]
          ].map(([title, text]) => (
            <article key={title} className="border-t border-espresso/15 pt-6">
              <h2 className="font-display text-[1.9rem] leading-[1.1]">{title}</h2>
              <p className="mt-4 leading-7 text-ink/70">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="white" eyebrow="Booking" title="Group experiences will open soon.">
        <EmptyState
          eyebrow="Ceremony calendar"
          title="Ceremony inquiries are open."
          body="Guests interested in private gatherings, group experiences, or future ceremony dates can call Buna House directly while the public calendar is being shaped."
          ctaLabel="Call About Ceremony"
          ctaHref={`tel:${siteConfig.phone}`}
        />
      </Section>
    </>
  );
}
