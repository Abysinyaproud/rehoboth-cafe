import { brandImages } from "@/config/brand-assets";

export const featuredCoffees = [
  {
    id: "single-origin",
    name: "Ethiopian Coffee",
    eyebrow: "Origin",
    notes: "Roasted coffee, tea-like aromatics, warm hospitality",
    body: "The coffee program starts with Ethiopia as the source of the story: beans, brewing, and a traditional coffee experience that makes the cup feel connected to place.",
    price: "In store",
    image: brandImages.coffeeDetail
  },
  {
    id: "espresso",
    name: "Cafe Mocha, Macchiato & Americano",
    eyebrow: "Cafe favorites",
    notes: "Espresso structure, milk texture, balanced sweetness",
    body: "A familiar way into Buna House: espresso drinks served with the warmth of a neighborhood cafe and the cultural depth of an Ethiopian market.",
    price: "In store",
    image: brandImages.cafeAtmosphere
  },
  {
    id: "subscriptions",
    name: "Take-Home Coffee",
    eyebrow: "Market shelf",
    notes: "Beans, tea, gifts, and pantry companions",
    body: "Coffee can move from the cafe counter into the home pantry through beans, tea, brewing gifts, and shelf finds that change with availability.",
    price: "Ask in store",
    image: brandImages.marketShelves
  }
];

export const marketCategories = [
  {
    title: "Injera Bread & Teff Flour",
    text: "Staples for the Ethiopian table, placed where guests can build a real meal after coffee.",
    image: brandImages.marketShelves
  },
  {
    title: "Coffee & Tea",
    text: "Cafe favorites and take-home goods that keep the Buna House ritual alive beyond the visit.",
    image: brandImages.coffeeDetail
  },
  {
    title: "Spices",
    text: "Aromatic essentials for cooks who want Ethiopian warmth, color, and depth in the pantry.",
    image: brandImages.marketShelves
  },
  {
    title: "Habesha Kemis & Cultural Goods",
    text: "Cultural garments, gifts, and everyday pieces that make the market feel specific to Buna House.",
    image: brandImages.heritageOrigin
  }
];

export const events = [
  {
    title: "Coffee Tasting",
    date: "Monthly",
    text: "Taste how region, process, roast, and brew method shape the same birthplace of coffee."
  },
  {
    title: "Community Night",
    date: "Seasonal",
    text: "A warm evening for neighbors, students, families, and curious regulars to gather without rushing."
  },
  {
    title: "Coffee Ceremony",
    date: "Private and corporate",
    text: "A ceremony of aroma, patience, and welcome for private groups, teams, and special weekends."
  }
];

export const values = [
  "Coffee first",
  "Cultural depth",
  "Modern hospitality",
  "Community gravity",
  "Curated retail"
];

export const originMoments = [
  {
    label: "Origin",
    value: "Ethiopia is the birthplace of coffee"
  },
  {
    label: "Taste",
    value: "Florality, citrus, honeyed sweetness, and clarity"
  },
  {
    label: "Ritual",
    value: "Ceremony turns coffee into welcome"
  }
];

export const visitReasons = [
  "A Columbia stop for coffee, injera, teff flour, spices, and conversation in one visit",
  "A traditional Ethiopian coffee experience with room to slow down",
  "A place to bring someone when the afternoon needs to feel intentional"
];
