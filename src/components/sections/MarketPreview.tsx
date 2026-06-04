import { marketCategories } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { EditorialCard } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function MarketPreview() {
  return (
    <Section
      id="market"
      eyebrow="The market"
      title="A market edited like a shelf in someone&apos;s home."
      intro="Imported goods, honey, spices, and traditional products appear as a curated extension of Ethiopian hospitality, not a grocery aisle."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {marketCategories.map((category, index) => (
          <EditorialCard
            key={category.title}
            image={category.image}
            title={category.title}
            text={category.text}
            imageClassName={index === 0 ? "lg:aspect-[3/4]" : undefined}
          />
        ))}
      </div>
      <div className="mt-10">
        <ButtonLink href="/market" variant="secondary">
          Browse the Market Story
        </ButtonLink>
      </div>
    </Section>
  );
}
