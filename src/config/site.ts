export const siteConfig = {
  name: "BUNA HOUSE",
  listingName: "Buna House",
  amharicName: "ቡና ቤት",
  tagline: "FROM ETHIOPIA TO YOUR CUP",
  description:
    "Buna House is a Columbia, Maryland cafe and market for Ethiopian coffee, traditional coffee experiences, injera, teff flour, spices, tea, and curated cultural goods.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bunahousecoffee.com",
  address: {
    street: "9400 Snowden River Pkwy Suite 113",
    city: "Columbia",
    region: "MD",
    postalCode: "21045",
    country: "US"
  },
  locationLabel: "9400 Snowden River Pkwy Suite 113, Columbia, MD 21045",
  phone: "+14435429767",
  phoneLabel: "(443) 542-9767",
  email: "hello@bunahousecoffee.com",
  hours: [
    { days: "Monday-Saturday", time: "10:00 AM - 8:00 PM" },
    { days: "Sunday", time: "10:00 AM - 4:00 PM" }
  ],
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Buna%20House%209400%20Snowden%20River%20Pkwy%20Suite%20113%20Columbia%20MD%2021045",
  reviewUrl:
    "https://www.google.com/search?q=Buna+House+Ethiopian+Coffee+reviews",
  yelpUrl:
    "https://www.yelp.com/biz/rehoboth-cafe-and-market-columbia?utm_source=ishare",
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
      { label: "Ethiopian Coffee", href: "/coffee#single-origin" },
      { label: "Espresso Drinks", href: "/coffee#espresso" },
      { label: "Injera & Teff Flour", href: "/market" },
      { label: "Spices & Cultural Goods", href: "/market" }
    ]
  },
  {
    title: "Plan",
    links: [
      { label: "Hours", href: "/visit#hours" },
      { label: "Directions", href: "/visit#directions" },
      { label: "Events", href: "/#events" },
      { label: "Call", href: "tel:+14435429767" }
    ]
  }
];
