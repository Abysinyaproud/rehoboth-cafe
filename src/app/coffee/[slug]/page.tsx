import { LaunchPageShell } from "@/components/ui/LaunchPageShell";
import { siteConfig } from "@/config/site";

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
      intro="This single-origin page is staged for future Shopify product data. Online purchase is not live yet, so guests should call or visit for current coffee availability."
      primaryHref="/coffee"
      primaryLabel="Back to Coffee"
      secondaryHref={`tel:${siteConfig.phone}`}
      secondaryLabel="Ask In Store"
    />
  );
}
