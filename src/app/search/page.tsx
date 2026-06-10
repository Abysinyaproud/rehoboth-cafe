import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function SearchPage() {
  return (
    <LaunchPageShell
      eyebrow="Search"
      title="Search Buna House"
      intro="Search will include coffees, market goods, events, stories, and brewing guides once the full catalog is connected."
      primaryHref="/coffee"
      primaryLabel="Browse Coffee"
      secondaryHref="/market"
      secondaryLabel="Explore Market"
    />
  );
}
