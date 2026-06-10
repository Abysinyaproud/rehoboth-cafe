import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

const productNames: Record<string, string> = {
  yirgacheffe: "Yirgacheffe",
  sidamo: "Sidamo",
  limu: "Limu"
};

export default async function CoffeeProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productName = productNames[slug] ?? "Single Origin Coffee";

  return (
    <LaunchPageShell
      eyebrow="Single Origin"
      title={productName}
      intro="This product page is ready for real Shopify product data, gallery images, tasting notes, inventory, reviews, quantity selection, wishlist, and buy-now actions."
      primaryHref="/coffee"
      primaryLabel="Back to Coffee"
      secondaryHref="/cart"
      secondaryLabel="Add to Cart Soon"
    />
  );
}
