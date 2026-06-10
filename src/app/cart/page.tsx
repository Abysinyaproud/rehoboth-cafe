import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function CartPage() {
  return (
    <LaunchPageShell
      eyebrow="Cart"
      title="Your Cart"
      intro="Your cart is ready for Shopify checkout integration. Products will appear here once live inventory and Storefront API credentials are connected."
      primaryHref="/coffee"
      primaryLabel="Continue Shopping"
      secondaryHref="/checkout"
      secondaryLabel="Checkout"
    />
  );
}
