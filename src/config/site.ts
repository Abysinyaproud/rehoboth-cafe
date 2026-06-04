export const siteConfig = {
  name: "REHOBOTH ETHIOPIAN COFFEE",
  tagline: "FROM ETHIOPIA TO YOUR CUP",
  description:
    "Maryland's modern Ethiopian specialty coffee destination for exceptional beans, coffee ceremony, community events, and a curated market.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rehobothethiopiancoffee.com",
  address: {
    street: "",
    city: "Columbia",
    region: "MD",
    postalCode: "",
    country: "US"
  },
  locationLabel: "Columbia, Maryland",
  phone: "",
  phoneLabel: "Contact by email",
  email: "hello@rehobothethiopiancoffee.com",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rehoboth%20Ethiopian%20Coffee%20Columbia%20MD",
  reviewUrl:
    "https://www.google.com/search?q=Rehoboth+Ethiopian+Coffee+reviews",
  socials: {
    instagram: "https://www.instagram.com/"
  }
};

export const navigation = [
  { label: "Coffee", href: "/coffee" },
  { label: "Ceremony", href: "/ceremony" },
  { label: "Market", href: "/market" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" }
];

export const footerNavigation = [
  {
    title: "Experience",
    links: [
      { label: "Coffee", href: "/coffee" },
      { label: "Ceremony", href: "/ceremony" },
      { label: "Market", href: "/market" },
      { label: "About", href: "/about" },
      { label: "Visit", href: "/visit" }
    ]
  },
  {
    title: "Shop",
    links: [
      { label: "Single Origin Coffee", href: "/coffee#single-origin" },
      { label: "Espresso Blends", href: "/coffee#espresso" },
      { label: "Subscriptions", href: "/coffee#subscriptions" },
      { label: "Gift Boxes", href: "/coffee#gifts" }
    ]
  },
  {
    title: "Plan",
    links: [
      { label: "Hours", href: "/visit#hours" },
      { label: "Directions", href: "/visit#directions" },
      { label: "Events", href: "/#events" },
      { label: "Contact", href: "mailto:hello@rehobothethiopiancoffee.com" }
    ]
  }
];
