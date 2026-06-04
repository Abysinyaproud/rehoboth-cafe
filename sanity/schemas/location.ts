export const location = {
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "address", title: "Address", type: "text", rows: 3 },
    { name: "phone", title: "Phone", type: "string" },
    { name: "hours", title: "Hours", type: "array", of: [{ type: "string" }] },
    { name: "parking", title: "Parking Notes", type: "text", rows: 3 },
    { name: "directionsUrl", title: "Directions URL", type: "url" },
    { name: "googleReviewUrl", title: "Google Review URL", type: "url" },
    { name: "heroMedia", title: "Visit Hero Media", type: "mediaAsset" },
    { name: "gallery", title: "Visit Gallery", type: "gallery" },
    { name: "accessibilityNotes", title: "Accessibility Notes", type: "text", rows: 3 }
  ]
};
