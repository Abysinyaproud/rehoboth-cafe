import { CeremonyFeature } from "@/components/sections/CeremonyFeature";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { FeaturedCoffee } from "@/components/sections/FeaturedCoffee";
import { Hero } from "@/components/sections/Hero";
import { LocationHours } from "@/components/sections/LocationHours";
import { MarketPreview } from "@/components/sections/MarketPreview";
import { Newsletter } from "@/components/sections/Newsletter";
import { OriginStory } from "@/components/sections/OriginStory";
import { EmptyState } from "@/components/content/EmptyState";
import { Section } from "@/components/ui/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OriginStory />
      <FeaturedCoffee />
      <CeremonyFeature />
      <MarketPreview />
      <EventsPreview />
      <Section
        tone="ivory"
        eyebrow="Guest stories"
        title="Real guest notes will live here."
        intro="Once Rehoboth begins collecting approved testimonials and Google reviews, this section can feature the voices of coffee guests, ceremony attendees, regulars, and market shoppers."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Coffee", "A future guest quote about coffee quality, origin, and the cup that brought them back."],
            ["Ceremony", "A future ceremony reflection about welcome, aroma, gathering, and cultural connection."],
            ["Visit", "A future local note about atmosphere, hospitality, remote work, or weekend plans."]
          ].map(([title, body]) => (
            <EmptyState
              key={title}
              eyebrow={title}
              title={`${title} testimonial`}
              body={body}
            />
          ))}
        </div>
      </Section>
      <LocationHours />
      <Newsletter />
    </>
  );
}
