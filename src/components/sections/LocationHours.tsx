import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function LocationHours() {
  return (
    <Section
      id="location"
      tone="espresso"
      eyebrow="Visit Rehoboth"
      title="Make the visit easy. Make the memory linger."
      intro="Hours, directions, parking, call, and review actions are close at hand, but the page still leads with the feeling of arriving somewhere specific."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="min-h-[22rem] rounded-rehoboth border border-ivory/15 bg-ivory/8 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Columbia, Maryland
          </p>
          <div className="mt-24 max-w-sm">
            <p className="font-display text-4xl leading-tight">{siteConfig.locationLabel}</p>
            <p className="mt-4 leading-7 text-ivory/65">
              Set your route, bring a friend, and make the stop feel like the
              point of the afternoon rather than an errand.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            ["Hours", "Daily hours are shared on the Visit page"],
            ["Parking", "Arrival notes are kept close to the directions path"],
            ["Remote Work", "A welcoming weekday rhythm for focused coffee time"],
            ["Reviews", "Guest stories and reviews help new visitors choose Rehoboth"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-rehoboth border border-ivory/15 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">{label}</p>
              <p className="mt-2 text-lg text-ivory/78">{value}</p>
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={siteConfig.directionsUrl}
              className="bg-ivory text-espresso hover:bg-gold"
            >
              Get Directions
            </ButtonLink>
            <ButtonLink href="/visit#hours" variant="secondary" className="border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso">
              Check Today&apos;s Hours
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
