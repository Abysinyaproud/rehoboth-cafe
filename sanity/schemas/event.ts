import type { Rule } from "sanity";

export const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (rule: Rule) => rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "summary", title: "Summary", type: "text", rows: 3 },
    { name: "startsAt", title: "Starts At", type: "datetime" },
    { name: "endsAt", title: "Ends At", type: "datetime" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "gallery", title: "Event Gallery", type: "gallery" },
    { name: "video", title: "Event Video", type: "mediaAsset" },
    { name: "capacity", title: "Capacity", type: "number" },
    { name: "ctaLabel", title: "CTA Label", type: "string" },
    { name: "ctaUrl", title: "CTA URL", type: "url" },
    {
      name: "testimonials",
      title: "Event Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }]
    }
  ]
};
