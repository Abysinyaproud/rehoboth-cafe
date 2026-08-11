import type { Metadata } from "next";
import { EmptyState } from "@/components/content/EmptyState";
import { ButtonLink } from "@/components/ui/Button";
import { LuxuryVideoFrame } from "@/components/ui/LuxuryVideoFrame";
import { Section } from "@/components/ui/Section";
import { brandVideos } from "@/config/brand-assets";
import { siteConfig } from "@/config/site";
import { ceremonyMenuHighlights, cafeMenuSource } from "@/data/sheet-menu";
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
          <LuxuryVideoFrame
            src={brandVideos.ceremonyHeritageFilm.src}
            poster={brandVideos.ceremonyHeritageFilm.poster}
            label={brandVideos.ceremonyHeritageFilm.label}
            eyebrow="Ceremony film"
            title="Roasted, poured, shared."
            meta="A slow-moving glimpse of the ritual that gives Ethiopian coffee its hospitality."
            aspectClassName="aspect-[16/11]"
            videoClassName="object-[58%_50%]"
          />
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
        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {ceremonyMenuHighlights.map((item) => (
            <article
              key={item.name}
              className="luxury-card border border-gold/22 bg-[#fbf7ef] p-6 shadow-subtle"
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                Available in store
              </p>
              <h2 className="mt-4 font-display text-[1.7rem] leading-[1.05]">
                {item.name}
              </h2>
              <p className="mt-3 text-lg font-semibold text-espresso">{item.price}</p>
              <p className="mt-3 text-sm leading-6 text-ink/68">{item.note}</p>
            </article>
          ))}
        </div>
        <p className="mb-8 max-w-2xl text-sm leading-6 text-ink/62">
          Ceremony pricing and home-ritual goods are curated from{" "}
          {cafeMenuSource.spreadsheet}, modified {cafeMenuSource.modified}. Full
          raw inventory, barcodes, and tax data are not published.
        </p>
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
