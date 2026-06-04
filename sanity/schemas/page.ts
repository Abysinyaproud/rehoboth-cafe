import type { Rule } from "sanity";

export const page = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (rule: Rule) => rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "description", title: "SEO Description", type: "text", rows: 3 },
    { name: "heroMedia", title: "Hero Media", type: "mediaAsset" },
    { name: "gallery", title: "Page Gallery", type: "gallery" },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }]
    },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] }
  ]
};
