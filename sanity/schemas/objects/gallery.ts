export const gallery = {
  name: "gallery",
  title: "Gallery",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "intro", title: "Intro", type: "text", rows: 3 },
    { name: "items", title: "Items", type: "array", of: [{ type: "mediaAsset" }] }
  ]
};
