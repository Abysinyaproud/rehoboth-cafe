import { siteConfig } from "@/config/site";

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country
    },
    servesCuisine: ["Coffee", "Ethiopian"],
    priceRange: "$$",
    sameAs: [siteConfig.socials.instagram]
  };

  if (siteConfig.phone) {
    schema.telephone = siteConfig.phone;
  }

  return schema;
}

export function productSchema({
  name,
  description,
  image,
  price
}: {
  name: string;
  description: string;
  image: string;
  price: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    brand: siteConfig.name,
    description,
    image,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: price.replace(/[^0-9.]/g, "") || undefined,
      availability: "https://schema.org/InStock"
    }
  };
}

export function eventSchema({
  name,
  description
}: {
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: siteConfig.name,
      address: siteConfig.address
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    }
  };
}
