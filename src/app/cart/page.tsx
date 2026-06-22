import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function CartPage() {
  return (
    <LaunchPageShell
      eyebrow="Cart Staging"
      title="Cart Coming Soon"
      intro="Online cart and checkout are not live yet. Shopify inventory, tax, shipping, and payment settings must be connected before Buna House accepts web orders."
      primaryHref="/coffee"
      primaryLabel="Explore Coffee"
      secondaryHref="/visit"
      secondaryLabel="Visit Buna House"
    />
  );
}
