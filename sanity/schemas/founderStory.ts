import type { Rule } from "sanity";

export const founderStory = {
  name: "founderStory",
  title: "Founder Story",
  type: "document",
  fields: [
    { name: "name", title: "Founder Name", type: "string", validation: (rule: Rule) => rule.required() },
    { name: "headline", title: "Headline", type: "string" },
    { name: "shortBio", title: "Short Bio", type: "text", rows: 4 },
    { name: "portrait", title: "Primary Portrait", type: "image", options: { hotspot: true } },
    { name: "gallery", title: "Founder Gallery", type: "gallery" },
    { name: "pullQuote", title: "Pull Quote", type: "text", rows: 3 },
    { name: "whyCoffee", title: "Why Ethiopian Coffee", type: "array", of: [{ type: "block" }] },
    { name: "hospitalityNote", title: "Hospitality Note", type: "text", rows: 4 }
  ]
};
