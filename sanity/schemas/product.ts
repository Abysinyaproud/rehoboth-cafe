import type { Rule } from "sanity";

export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (rule: Rule) => rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "shopifyHandle", title: "Shopify Handle", type: "string" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["single-origin", "espresso", "subscription", "gift-box", "brewing", "market"]
      }
    },
    { name: "origin", title: "Origin", type: "string" },
    { name: "region", title: "Region", type: "string" },
    { name: "process", title: "Process", type: "string" },
    { name: "roastLevel", title: "Roast Level", type: "string" },
    { name: "tastingNotes", title: "Tasting Notes", type: "array", of: [{ type: "string" }] },
    { name: "brewRecommendation", title: "Brew Recommendation", type: "text", rows: 3 },
    { name: "description", title: "Description", type: "text", rows: 4 },
    { name: "price", title: "Display Price", type: "string" },
    { name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } },
    { name: "gallery", title: "Product Gallery", type: "gallery" },
    { name: "featured", title: "Featured Product", type: "boolean" }
  ]
};
