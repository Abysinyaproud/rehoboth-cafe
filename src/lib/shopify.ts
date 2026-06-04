type ShopifyRequestOptions = {
  query: string;
  variables?: Record<string, unknown>;
};

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION ?? "2025-01";

export const shopifyEnabled = Boolean(domain && token);

export async function shopifyFetch<T>({
  query,
  variables
}: ShopifyRequestOptions): Promise<T | null> {
  if (!shopifyEnabled) {
    return null;
  }

  const response = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token as string
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 }
  });

  if (!response.ok) {
    throw new Error(`Shopify request failed: ${response.status}`);
  }

  const json = (await response.json()) as { data: T; errors?: unknown };

  if (json.errors) {
    throw new Error("Shopify returned GraphQL errors.");
  }

  return json.data;
}
