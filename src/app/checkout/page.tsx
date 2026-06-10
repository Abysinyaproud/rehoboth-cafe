import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function CheckoutPage() {
  return (
    <LaunchPageShell
      eyebrow="Checkout"
      title="Checkout Ready"
      intro="The checkout route is prepared for Shopify. Connect products, inventory, tax, shipping, and payment settings before accepting live orders."
      primaryHref="/cart"
      primaryLabel="Review Cart"
      secondaryHref="/coffee"
      secondaryLabel="Shop Coffee"
    />
  );
}
