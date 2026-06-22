import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function CheckoutPage() {
  return (
    <LaunchPageShell
      eyebrow="Checkout Disabled"
      title="Checkout Coming Soon"
      intro="Checkout is intentionally disabled for launch staging. No payment, order, shipping, or account information can be submitted here until Shopify is connected and verified."
      primaryHref="/visit"
      primaryLabel="Plan a Visit"
      secondaryHref="/coffee"
      secondaryLabel="Explore Coffee"
    />
  );
}
