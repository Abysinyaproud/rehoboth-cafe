import { productSchema } from "@/lib/schema";
import { featuredCoffees } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { EditorialCard } from "@/components/ui/Card";
import { JsonLd } from "@/components/content/JsonLd";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Section } from "@/components/ui/Section";

export function FeaturedCoffee() {
  return (
    <Section
      id="featured-coffee"
      tone="white"
      eyebrow="Coffee first"
      title="Ethiopian coffees chosen for clarity, sweetness, and return visits."
      intro="Single origins, espresso, subscriptions, and gifts are presented as the heart of Rehoboth rather than a side shelf."
    >
      <JsonLd
        data={featuredCoffees.map((coffee) =>
          productSchema({
            name: coffee.name,
            description: coffee.body,
            image: coffee.image,
            price: coffee.price
          })
        )}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {featuredCoffees.map((coffee, index) => (
          <MotionReveal key={coffee.id} delay={index * 0.06}>
            <EditorialCard
              image={coffee.image}
              eyebrow={coffee.eyebrow}
              title={coffee.name}
              text={coffee.body}
              meta={`${coffee.notes} · ${coffee.price}`}
              imageClassName={index === 0 ? "md:aspect-[3/4]" : undefined}
            >
              <ButtonLink href={`/coffee#${coffee.id}`} variant="text">
                Taste the profile
              </ButtonLink>
            </EditorialCard>
          </MotionReveal>
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/coffee">Explore Coffee Releases</ButtonLink>
      </div>
    </Section>
  );
}
