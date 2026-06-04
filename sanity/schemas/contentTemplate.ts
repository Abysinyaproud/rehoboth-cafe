export const contentTemplate = {
  name: "contentTemplate",
  title: "Content Entry Template",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "templateType",
      title: "Template Type",
      type: "string",
      options: {
        list: ["homepage", "coffee", "market", "about", "visit", "event", "product", "testimonial"]
      }
    },
    { name: "requiredAssets", title: "Required Assets", type: "array", of: [{ type: "string" }] },
    { name: "requiredCopy", title: "Required Copy", type: "array", of: [{ type: "string" }] },
    { name: "seoChecklist", title: "SEO Checklist", type: "array", of: [{ type: "string" }] },
    { name: "notes", title: "Notes", type: "text", rows: 5 }
  ]
};
