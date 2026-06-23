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

export const coffeeOrigins = [
  {
    name: "Yirgacheffe",
    notes: "Floral • Citrus • Tea-like",
    altitude: "1,700-2,200 meters",
    body: "A graceful profile known for lifted aromatics, citrus clarity, and a tea-like finish."
  },
  {
    name: "Sidamo",
    notes: "Citrus • Berry • Floral",
    altitude: "1,550-2,200 meters",
    body: "Expressive and layered, with fruit brightness and a soft floral structure."
  },
  {
    name: "Limu",
    notes: "Cocoa • Honey • Smooth Citrus",
    altitude: "1,500-2,100 meters",
    body: "Rounded and balanced, bringing cocoa warmth, honeyed sweetness, and a clean finish."
  },
  {
    name: "Harrar",
    notes: "Blueberry • Winey • Mocha",
    altitude: "1,500-2,100 meters",
    body: "Bold and memorable, with wine-like fruit, mocha depth, and an unmistakable Ethiopian character."
  }
];

export const coffeeQualityPoints = [
  "100% Ethiopian Arabica coffee",
  "Single-origin sourcing",
  "Small-batch roasted",
  "High-altitude grown",
  "Ethically sourced",
  "Freshly packed for peak flavor"
];

export const marketCategories = [
  {
    title: "Ethiopian & East African Groceries",
    text: "Authentic ingredients and everyday essentials from Ethiopia and neighboring regions.",
    image: brandImages.marketShelves
  },
  {
    title: "Fresh Injera",
    text: "Traditional Ethiopian flatbread prepared with quality ingredients and available fresh.",
    image: brandImages.coffeeDetail
  },
  {
    title: "Coffee & Tea",
    text: "Premium Ethiopian single-origin coffees and specialty teas for the home table.",
    image: brandImages.marketShelves
  },
  {
    title: "Spices & Seasonings",
    text: "Berbere, mitmita, shiro, and traditional spice blends for depth, warmth, and memory.",
    image: brandImages.heritageOrigin
  },
  {
    title: "Frozen & Refrigerated Foods",
    text: "Convenient options for traditional meals, family gatherings, and everyday cooking.",
    image: brandImages.marketShelves
  },
  {
    title: "Houseware & Ceremony Goods",
    text: "Jebena, sini cups, coffee sets, gifts, and specialty pieces that bring the ritual home.",
    image: brandImages.coffeeDetail
  }
];

export const givingBackPoints = [
  "Orphans in need of education and essential resources",
  "Widows facing financial hardship",
  "Community development initiatives",
  "Family support programs",
  "Humanitarian and relief efforts"
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
