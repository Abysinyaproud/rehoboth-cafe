import { marketCategories } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { EditorialCard } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function MarketPreview() {
  return (
    <Section
      id="market"
      eyebrow="The market"
      title="A market edited for the Ethiopian table."
      intro="Injera, teff flour, spices, coffee, tea, and cultural goods make the market an extension of hospitality, not a generic shelf."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {marketCategories.map((category, index) => (
          <EditorialCard
            key={category.title}
            image={category.image}
            eyebrow={`0${index + 1}`}
            title={category.title}
            text={category.text}
            imageClassName={index === 0 ? "lg:aspect-[3/4]" : undefined}
          />
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/market" variant="secondary">
          Browse the Market
        </ButtonLink>
      </div>
    </Section>
  );
}
