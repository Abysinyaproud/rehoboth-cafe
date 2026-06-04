import type { Rule } from "sanity";

export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text", rows: 3, validation: (rule: Rule) => rule.required() },
    { name: "name", title: "Name", type: "string" },
    {
      name: "sourceType",
      title: "Source Type",
      type: "string",
      options: {
        list: ["coffee", "visit", "ceremony", "market", "event", "google-review"]
      }
    },
    { name: "context", title: "Context", type: "string" },
    { name: "rating", title: "Rating", type: "number" },
    { name: "permissionGranted", title: "Permission Granted", type: "boolean" },
    { name: "portrait", title: "Portrait or Moment", type: "image", options: { hotspot: true } }
  ]
};
