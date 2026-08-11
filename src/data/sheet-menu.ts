export const cafeMenuSource = {
  spreadsheet: "Buna House cafe menu",
  modified: "June 23, 2026 live verification",
  tab: "Cafe",
  range: "A1:F74",
  pulledFrom:
    "https://docs.google.com/spreadsheets/d/1ghjhDdIb27-jHzVOrQTx9fcm7j936zZNR2RvwVOnLYQ/edit#gid=1307285007"
} as const;

export const marketMenuSource = {
  spreadsheet: "Buna House market inventory",
  modified: "June 23, 2026 live verification",
  tab: "Market",
  range: "A1:I441",
  pulledFrom:
    "https://docs.google.com/spreadsheets/d/1ghjhDdIb27-jHzVOrQTx9fcm7j936zZNR2RvwVOnLYQ/edit#gid=1123842379"
} as const;

export const cafeMenuSections = [
  {
    title: "Single-Origin Pour Over",
    sourceCategory: "Coffee - Single Origin Pour Over",
    note: "Ethiopian origins brewed for clarity and aroma.",
    columns: ["8 oz", "10 oz", "12 oz", "16 oz"],
    items: [
      { name: "Ethiopia Yirgacheffe", prices: ["$2.99", "$3.29", "$3.49", "$3.99"] },
      { name: "Ethiopia Sidamo", prices: ["$2.99", "$3.29", "$3.49", "$3.99"] },
      { name: "Ethiopia Guji", prices: ["$2.99", "$3.29", "$3.49", "$3.99"] }
    ]
  },
  {
    title: "Traditional Coffee Ceremony",
    sourceCategory: "Coffee - Traditional Coffee Ceremony",
    note: "Traditional Ethiopian coffee served as a simple in-store ceremony cup.",
    columns: ["Price"],
    items: [{ name: "Ceremony", prices: ["$3.00"] }]
  },
  {
    title: "Espresso Bar",
    sourceCategory: "Coffee - Espresso Bar",
    note: "Classic espresso drinks with single, double, triple, and quadruple options.",
    columns: ["Single", "Double", "Triple", "Quad"],
    items: [
      { name: "Espresso", prices: ["$3.29", "$3.49", "$3.75", "$3.99"] },
      { name: "Macchiato", prices: ["$5.29", "$5.49", "$5.75", "$5.99"] },
      { name: "Cappuccino", prices: ["$5.29", "$5.49", "$5.75", "$5.99"] },
      { name: "Latte", prices: ["$5.29", "$5.49", "$5.75", "$5.99"] },
      { name: "Mocha", prices: ["$5.29", "$5.49", "$5.75", "$5.99"] },
      { name: "Flat White", prices: ["$5.29", "$5.49", "$5.75", "$5.99"] },
      { name: "Cortata", prices: ["$5.29", "$5.49", "$5.75", "$5.99"] }
    ]
  },
  {
    title: "Cold Classics",
    sourceCategory: "Cold Classics",
    note: "Cold coffee, tea, and dessert-style cafe drinks.",
    columns: ["Small", "Medium", "Large", "Extra Large"],
    items: [
      { name: "Iced Coffee", prices: ["-", "-", "$4.49", "$4.99"] },
      { name: "Iced Latte", prices: ["-", "-", "$5.99", "$6.49"] },
      { name: "Affogato", prices: ["$7.29", "$9.49", "$11.99", ""] },
      { name: "Cold Brew", prices: ["-", "-", "$4.99", "$5.49"] },
      { name: "Lemonade Spritz", prices: ["", "", "", ""] },
      { name: "Ethiopian Iced Tea", prices: ["-", "-", "$5.29", "$5.99"] }
    ]
  },
  {
    title: "Fresh Smoothies",
    sourceCategory: "Fresh Smoothies",
    note: "Cold blended drinks from the cafe counter.",
    columns: ["Large", "Extra Large"],
    items: [
      { name: "Tropical Bliss", prices: ["", ""] },
      { name: "Green Power", prices: ["$9.99", "$11.99"] },
      { name: "Berry Boost", prices: ["$9.99", "$11.99"] },
      { name: "Mango Passion", prices: ["$9.99", "$11.99"] }
    ]
  },
  {
    title: "Traditional Drinks",
    sourceCategory: "Traditional Ethiopian Smoothies and Medicinal Hot Drinks",
    note: "Ethiopian pantry traditions prepared for the cafe counter.",
    columns: ["Large", "Extra Large"],
    items: [
      { name: "Beso", prices: ["$9.99", "$11.99"] },
      { name: "Telba", prices: ["$9.99", "$11.99"] },
      { name: "Atmit with Honey", prices: ["$9.99", "$11.99"] },
      { name: "Orange, Turmeric & Honey Shot", prices: ["$5.99", "$6.99"] },
      { name: "Strong Ginger, Turmeric & Honey Shot", prices: ["$5.99", "$6.99"] }
    ]
  },
  {
    title: "Morning Plates & Pastries",
    sourceCategory: "Breakfast and Pastries",
    note: "A compact morning menu with Ethiopian-inspired plates and bakery favorites.",
    columns: ["Price"],
    items: [
      { name: "Chechebsa", prices: ["$10.99"] },
      { name: "Scrambled Egg Firfir", prices: ["$10.99"] },
      { name: "Classic Eggs & Toast", prices: ["$8.99"] },
      { name: "Avocado Toast", prices: ["$8.99"] },
      { name: "Ful Medames", prices: ["$10.99"] },
      { name: "Croissants", prices: ["$5.50"] },
      { name: "Muffins", prices: ["$4.50"] },
      { name: "Baklava", prices: ["$4.50"] },
      { name: "Ethiopian Sweet Bread (Ambasha)", prices: [""] },
      { name: "Cookies & Biscotti", prices: [""] }
    ]
  },
  {
    title: "Coffee Extras",
    sourceCategory: "Coffee Extras",
    note: "Add-ons listed from the cafe menu.",
    columns: ["Price"],
    items: [
      { name: "Extra Shot of Espresso", prices: ["$1.99"] },
      { name: "Alternative Milks", prices: ["$1.00"] },
      { name: "Local Honey or Spiced Syrup", prices: ["$0.50"] }
    ]
  },
  {
    title: "Coffee Box",
    sourceCategory: "Coffee Box",
    note: "Coffee drinks box listed from the cafe menu.",
    columns: ["Price"],
    items: [{ name: "Coffee Box", prices: ["$24.99"] }]
  },
  {
    title: "Pastries",
    sourceCategory: "Pastries",
    note: "Pastry case items listed from the cafe sheet.",
    columns: ["Price"],
    items: [
      { name: "Croissants", prices: ["$5.50"] },
      { name: "Muffins", prices: ["$4.50"] },
      { name: "Baklava", prices: ["$4.50"] },
      { name: "Ethiopian Sweet Bread (Ambasha)", prices: [""] },
      { name: "Cookies & Biscotti", prices: [""] }
    ]
  },
  {
    title: "Fresh Bakery",
    sourceCategory: "Fresh Bakery",
    note: "Bakery case items listed from the cafe sheet.",
    columns: ["Price"],
    items: [
      { name: "Croissant", prices: ["$3.00"] },
      { name: "Almond Croissant", prices: ["$4.50"] },
      { name: "Chocolate Croissant", prices: ["$4.50"] },
      { name: "Ham & Cheese Croissant", prices: ["$5.99"] },
      { name: "Blueberry Muffin", prices: ["$3.99"] },
      { name: "Double Chocolate Muffin", prices: ["$3.99"] },
      { name: "Morning Glory Vegan Muffin", prices: ["$3.99"] },
      { name: "Blueberry Scone", prices: ["$3.50"] },
      { name: "Chocolate Scone", prices: ["$3.50"] },
      { name: "Cranberry Orange Vegan Scone", prices: ["$3.50"] },
      { name: "Flourless Brownie", prices: ["$4.00"] },
      { name: "Chocolate Chips Cookie", prices: ["$3.50"] },
      { name: "Madeleine", prices: ["$2.00"] },
      { name: "Coffee Cake", prices: ["$3.00"] },
      { name: "Banana Walnut Sweet Bread", prices: ["$3.00"] },
      { name: "Lemon Sweet Bread", prices: ["$3.00"] },
      { name: "Pumpkin Sweet Bread", prices: ["$3.00"] },
      { name: "Chives And Cheddar Scone", prices: ["$3.50"] },
      { name: "Kouign-Amann", prices: ["$4.00"] },
      { name: "Apple Danish", prices: ["$4.00"] },
      { name: "Mini Chocolate Croissant", prices: ["$3.00"] },
      { name: "Raisin Bun", prices: ["$4.50"] },
      { name: "Salted Caramel Brioche", prices: ["$4.50"] },
      { name: "Cake Rusk (Big)", prices: ["$7.99"] },
      { name: "Cake Rusk (Small)", prices: ["$5.99"] }
    ]
  }
] as const;

export const marketProductHighlights = [
  {
    category: "Coffee",
    note: "Take-home coffee options from the market shelf.",
    items: [
      { name: "Rwanda Coffee (Laheey Coffee)", price: "$16.99" },
      { name: "Sumatran Coffee (Laheey Coffee)", price: "$19.99" },
      { name: "Ethiopian Coffee (Laheey)", price: "$19.99" },
      { name: "Ayu Rwanda (Laheey Coffee)", price: "$16.99" },
      { name: "Ayu Colombia (Laheey Coffee)", price: "$16.99" },
      { name: "Weyni Coffee", price: "$17.99" },
      { name: "Tomoca", price: "$17.00" },
      { name: "Green Ethiopian Coffee", price: "$7.99/LB" },
      { name: "Buna House Medium Roast 1 lb", price: "$18.99/LB" },
      { name: "Buna House Dark Roast 1 lb", price: "$18.99/LB" }
    ]
  },
  {
    category: "Ethiopian Bread & Injera",
    note: "Staples for meals, gatherings, and weekend pantry restocks.",
    items: [
      { name: "Anebabero (Large Foil)", price: "$55.00" },
      { name: "Anebabero (Small Foil)", price: "$35.00" },
      { name: "Lali Bread - Barley", price: "$7.00" },
      { name: "Ethiopia Injera", price: "$10.00" },
      { name: "Ethiopia Injera - Belen", price: "$11.00" },
      { name: "Yebet Injera 100% Teff", price: "$7.75" },
      { name: "Anbasha", price: "$7.00" },
      { name: "Derkosh", price: "$8.99" },
      { name: "Kocho - Betena", price: "$8.00" },
      { name: "Single Injera", price: "$3.00" }
    ]
  },
  {
    category: "Flour, Teff & Shiro",
    note: "Teff, barley, shiro, beso, and pantry goods for Ethiopian cooking.",
    items: [
      { name: "Ye-Shinbira Duket", price: "$6.99" },
      { name: "Beso - Drinking", price: "$8.99/LB" },
      { name: "Genfo Flour", price: "$15.00" },
      { name: "Teff Flour Ivory 2 lb", price: "$9.00" },
      { name: "Waliya Brown Teff", price: "$58.99" },
      { name: "Waliya Teff White", price: "$60.99" },
      { name: "Teff Brown Meskel", price: "$58.99" },
      { name: "Shiro 1 lb", price: "$12.99/LB" },
      { name: "Shimbra / Chickpea Shiro 1 lb", price: "$14.99/LB" },
      { name: "Beso", price: "$0.99/LB" }
    ]
  },
  {
    category: "Ethiopian Snacks",
    note: "Kolo, dabo kolo, injera crisps, and savory snacks for the home shelf.",
    items: [
      { name: "Wub Kolo 1 kg", price: "$14.50" },
      { name: "Elsa Kolo 1 lb", price: "$8.00" },
      { name: "Girum Dabo Kolo", price: "$7.00" },
      { name: "Eleni Dabo Kolo (Non Spicy)", price: "$5.00" },
      { name: "Eleni Dabo Kolo (Spicy)", price: "$5.00" },
      { name: "Tsiona Injera Crisps", price: "$5.99" },
      { name: "Betena Dabo Kolo Awaze", price: "$7.00" },
      { name: "Zemen Kolo 1 kg", price: "$17.00" },
      { name: "Lewz / Peanut Girum", price: "$7.50" }
    ]
  },
  {
    category: "Spices",
    note: "Essential Ethiopian spices and pantry aromatics for stews, tea, and ceremony.",
    items: [
      { name: "Awaze", price: "$6.00" },
      { name: "Cumin Powder", price: "$3.49" },
      { name: "Garlic Powder", price: "$2.99" },
      { name: "Berbere", price: "$18.99/LB" },
      { name: "Mitmita", price: "$12.99/LB" },
      { name: "Mekelesha", price: "$3.99" },
      { name: "Korerima / Black Cardamom", price: "$45/LB" },
      { name: "Tena Adam", price: "$3.99" },
      { name: "Nech Azmud / Caraway Seed", price: "$4.99" },
      { name: "Senafech / Mustard", price: "$6.99" },
      { name: "Cinnamon", price: "$4.99" },
      { name: "Cloves", price: "$3.99" }
    ]
  },
  {
    category: "Tea",
    note: "Herbal teas, Ethiopian tea blends, and spices for warming drinks.",
    items: [
      { name: "Hibiscus Herbal Tea", price: "$2.99" },
      { name: "Mint Herbal Tea", price: "$2.99" },
      { name: "Tosegn / Thyme Tea", price: "$2.99" },
      { name: "Shaye Kemem Tea Spices", price: "$5.99" },
      { name: "Wush Wush", price: "$2.99" },
      { name: "Black Lion Tea", price: "$2.99" },
      { name: "Addis Shay", price: "$2.99" },
      { name: "Ginger Tea", price: "$5.99" },
      { name: "Green Cardamom", price: "$5.99" },
      { name: "Camomile Loose In Bag", price: "$2.99" }
    ]
  },
  {
    category: "Houseware & Ceremony",
    note: "Jebena, sini cups, trays, incense burners, and coffee service pieces.",
    items: [
      { name: "Jebena Serving Tray", price: "$42.00" },
      { name: "Jebena / Shekila", price: "$19.99" },
      { name: "Jebena Stand", price: "$5.00" },
      { name: "Ceramic Jebena in Box", price: "$25.00" },
      { name: "Sini Single", price: "$2.50" },
      { name: "12-Piece Cup & Saucer Sini Set", price: "$14.99" },
      { name: "29-Piece Coffee Set", price: "$49.00" },
      { name: "Coffee Cups", price: "$21.99" },
      { name: "French Press Machine", price: "$14.99" },
      { name: "Zulay Espresso Maker", price: "$10.99" },
      { name: "Tea Set", price: "$43.00" },
      { name: "Incense Burner", price: "$16.99" },
      { name: "Bakhoor Incense", price: "$7.99" }
    ]
  },
  {
    category: "Bakery & Prepared Bites",
    note: "Fresh and packaged bakery items available in store.",
    items: [
      { name: "Baklava", price: "$3.00" },
      { name: "Lali Cookies / White Box", price: "$13.99" },
      { name: "Lali Small Cookies", price: "$7.00" },
      { name: "Kontos Assorted Baklava", price: "$32.00" },
      { name: "Sambusa Meat", price: "$3.25" },
      { name: "Sambusa Misir", price: "$2.50" },
      { name: "Cinnamon Roll Cake", price: "$3.50" },
      { name: "Mulmul", price: "$13.99" },
      { name: "Mulmul Vegan", price: "$13.99" }
    ]
  },
  {
    category: "Fresh Meat Counter",
    note: "Selected fresh and prepared meat cuts listed as in-store market availability.",
    items: [
      { name: "Farm Doro / Chicken", price: "$2.99/LB" },
      { name: "Kitfo", price: "$11.99/LB" },
      { name: "Lamb Breast", price: "$11.99/LB" },
      { name: "Lamb Organs", price: "$11.99/LB" },
      { name: "Kurte Sega", price: "$13.99/LB" },
      { name: "Yewot Sega", price: "$10.99/LB" },
      { name: "Kuanta / Dried Meat", price: "$20.00/LB" },
      { name: "Beef Bone Meat", price: "$11.99/LB" },
      { name: "Full Cow Leg / Kurte", price: "$6.50/LB" },
      { name: "Meat Tenderloin / Chikina", price: "$16.99/LB" }
    ]
  },
  {
    category: "Beverages",
    note: "Imported and everyday beverages available in the market cooler and shelf.",
    items: [
      { name: "Water", price: "$1.00" },
      { name: "Water 40 Case", price: "$11.99" },
      { name: "Ambo Water", price: "$3.50" },
      { name: "S.Pellegrino", price: "$1.99" },
      { name: "Perrier", price: "$1.99" },
      { name: "Perrier 24 Case", price: "$23.99" },
      { name: "Best Spice Mango (1L)", price: "$5.99" },
      { name: "Best Spice Guava (1L)", price: "$5.99" },
      { name: "Mango Juice (946 ml) Best", price: "$5.50" },
      { name: "Best Guava Juice (946 ml)", price: "$5.99" },
      { name: "Green Machine (Naked)", price: "$3.99" },
      { name: "Blue Machine (Naked)", price: "$3.99" },
      { name: "Mighty Mango (Naked)", price: "$3.99" },
      { name: "Strawberry Banana (Naked)", price: "$3.99" },
      { name: "Arizona Fruit Cocktail", price: "$1.69" },
      { name: "Arizona Fruit Punch", price: "$2.50" },
      { name: "Arizona Watermelon", price: "$2.50" },
      { name: "Arizona Mucho Mango", price: "$2.50" },
      { name: "Coke", price: "$1.00" },
      { name: "Diet Coke", price: "$1.00" },
      { name: "Coke Zero", price: "$1.00" },
      { name: "Sprite", price: "$1.00" },
      { name: "Ginger Ale", price: "$1.00" },
      { name: "Gatorade Orange", price: "$1.99" },
      { name: "Gatorade Lime", price: "$1.99" },
      { name: "Gatorade Fruit Punch", price: "$1.99" },
      { name: "Milk 1 Gallon", price: "$5.49" }
    ]
  }
] as const;

export const visitMenuHighlights = [
  "Pour-over: Ethiopia Yirgacheffe, Sidamo, and Guji from $2.99.",
  "Espresso bar: espresso, macchiato, cappuccino, latte, mocha, flat white, and Cortata.",
  "Traditional coffee ceremony: in-store Ceremony listed at $3.00.",
  "Cold classics: iced coffee, iced latte, affogato, cold brew, and Ethiopian iced tea.",
  "Smoothies and medicinal drinks: Beso, Telba, Atmit with honey, and turmeric honey shots.",
  "Breakfast and bakery: Chechebsa, egg firfir, Ful Medames, pastries, coffee extras, and fresh bakery.",
  "Market shelf: injera, teff flour, shiro, spices, tea, roasted coffee, snacks, houseware, beverages, and fresh meat."
] as const;

export const ceremonyMenuHighlights = [
  {
    name: "Ceremony",
    price: "$3.00",
    note: "Listed on the cafe menu as an in-store ceremony coffee experience."
  },
  {
    name: "Jebena / Shekila",
    price: "$19.99",
    note: "Available in market for guests building a home coffee ritual."
  },
  {
    name: "Sini Single",
    price: "$2.50",
    note: "Traditional cup option available in store."
  },
  {
    name: "12-Piece Sini Set",
    price: "$14.99",
    note: "Coffee cup and saucer set available in the market."
  }
] as const;
