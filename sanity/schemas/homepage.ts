export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "heroHeadline", title: "Hero Headline", type: "string" },
    { name: "heroSubheadline", title: "Hero Subheadline", type: "text", rows: 3 },
    { name: "heroMedia", title: "Hero Media", type: "mediaAsset" },
    { name: "heroMobileMedia", title: "Hero Mobile Media", type: "mediaAsset" },
    { name: "originStory", title: "Origin Story", type: "array", of: [{ type: "block" }] },
    {
      name: "featuredProducts",
      title: "Featured Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }]
    },
    { name: "ceremonyGallery", title: "Ceremony Gallery", type: "gallery" },
    { name: "marketGallery", title: "Market Gallery", type: "gallery" },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }]
    }
  ]
};
