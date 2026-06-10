import { events } from "@/data/content";
import { eventSchema } from "@/lib/schema";
import { EmptyState } from "@/components/content/EmptyState";
import { JsonLd } from "@/components/content/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function EventsPreview() {
  return (
    <Section
      id="events"
      tone="white"
      eyebrow="This weekend"
      title="A reason to leave the house for coffee."
      intro="Tastings, cultural nights, and ceremony experiences give regulars a rhythm and first-time visitors a reason to choose Buna House now."
    >
      <JsonLd data={events.map((event) => eventSchema({ name: event.title, description: event.text }))} />
      <div className="grid gap-4 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.title}
            className="rounded-rehoboth border border-espresso/10 bg-ivory p-7 transition duration-300 ease-luxury hover:border-gold/30 hover:bg-white/70"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-clay/80">
              {event.date}
            </p>
            <h3 className="mt-5 font-display text-[1.9rem] leading-[1.08]">{event.title}</h3>
            <p className="mt-4 leading-7 text-ink/70">{event.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <EmptyState
          eyebrow="Event calendar"
          title="Gatherings are part of the Buna House rhythm."
          body="Tastings, ceremony nights, workshops, and community events can be added here as soon as dates and capacity are confirmed."
        />
      </div>
      <div className="mt-10">
        <ButtonLink href="/visit">Plan Your Visit</ButtonLink>
      </div>
    </Section>
  );
}
