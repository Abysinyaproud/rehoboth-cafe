export const mediaAsset = {
  name: "mediaAsset",
  title: "Media Asset",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "videoUrl", title: "Video URL", type: "url" },
    { name: "poster", title: "Video Poster", type: "image", options: { hotspot: true } },
    {
      name: "orientation",
      title: "Orientation",
      type: "string",
      options: {
        list: ["landscape", "portrait", "square", "wide", "vertical-video"]
      }
    },
    { name: "alt", title: "Alt Text", type: "string" },
    { name: "caption", title: "Caption", type: "text", rows: 2 },
    {
      name: "usage",
      title: "Usage",
      type: "string",
      options: {
        list: ["hero", "gallery", "product", "ceremony", "market", "founder", "event", "social"]
      }
    }
  ]
};
