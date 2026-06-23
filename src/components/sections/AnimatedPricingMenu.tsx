import { MotionReveal } from "@/components/motion/MotionReveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  cafeMenuSections,
  ceremonyMenuHighlights,
  marketProductHighlights
} from "@/data/sheet-menu";
import { cn } from "@/lib/utils";

type AnimatedPricingMenuProps = {
  variant?: "overview" | "coffee" | "market";
  className?: string;
};

type MenuItem = {
  name: string;
  detail?: string;
  price: string;
};

type MenuGroup = {
  eyebrow: string;
  title: string;
  description: string;
  items: MenuItem[];
  ctaLabel: string;
  ctaHref: string;
};

function displayPrices(prices: readonly string[]) {
  const visiblePrices = prices.filter((price) => price && price !== "-");

  if (visiblePrices.length <= 1) {
    return visiblePrices[0] ?? "In store";
  }

  return `from ${visiblePrices[0]}`;
}

function displayDetail(columns: readonly string[], prices: readonly string[]) {
  if (columns.length === 1 && columns[0].toLowerCase() === "price") {
    return "";
  }

  return columns
    .map((column, index) => {
      const price = prices[index];

      if (!price || price === "-") {
        return null;
      }

      return `${column} ${price}`;
    })
    .filter(Boolean)
    .join(" / ");
}

function cafeSection(title: string) {
  return cafeMenuSections.find((section) => section.title === title);
}

function marketGroup(category: string) {
  return marketProductHighlights.find((group) => group.category === category);
}

function cafeItems(title: string, limit = 4): MenuItem[] {
  const section = cafeSection(title);

  if (!section) {
    return [];
  }

  return section.items.slice(0, limit).map((item) => ({
    name: item.name,
    detail: displayDetail(section.columns, item.prices),
    price: displayPrices(item.prices)
  }));
}

function marketItems(category: string, limit = 4): MenuItem[] {
  const group = marketGroup(category);

  if (!group) {
    return [];
  }

  return group.items.slice(0, limit).map((item) => ({
    name: item.name,
    detail: "Available in market",
    price: item.price
  }));
}

const ceremonyItems: MenuItem[] = ceremonyMenuHighlights.slice(0, 3).map((item) => ({
  name: item.name,
  detail: item.note,
  price: item.price
}));

const groupsByVariant: Record<NonNullable<AnimatedPricingMenuProps["variant"]>, MenuGroup[]> = {
  overview: [
    {
      eyebrow: "Coffee Bar",
      title: "Single-origin coffee",
      description: "Yirgacheffe, Sidamo, and Guji brewed by size for a clear Ethiopian cup.",
      items: cafeItems("Single-Origin Pour Over", 3),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu"
    },
    {
      eyebrow: "Ceremony",
      title: "Coffee ceremony",
      description: "A slower in-store ritual, built around welcome, aroma, and shared time.",
      items: ceremonyItems.slice(0, 2),
      ctaLabel: "Available In Store",
      ctaHref: "/ceremony"
    },
    {
      eyebrow: "Morning",
      title: "Breakfast & bakery",
      description: "A short edit of morning plates and bakery case favorites.",
      items: [...cafeItems("Morning Plates & Pastries", 2), ...cafeItems("Fresh Bakery", 1)],
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu"
    },
    {
      eyebrow: "Market",
      title: "Ethiopian shelf",
      description: "Injera, teff, shiro, spices, tea, and home ceremony pieces.",
      items: [
        ...marketItems("Ethiopian Bread & Injera", 1),
        ...marketItems("Spices", 1),
        ...marketItems("Tea", 1)
      ],
      ctaLabel: "Visit the Market",
      ctaHref: "/market"
    }
  ],
  coffee: [
    {
      eyebrow: "Origin",
      title: "Single-origin pour over",
      description: "Ethiopian origins by cup size.",
      items: cafeItems("Single-Origin Pour Over", 3),
      ctaLabel: "Available In Store",
      ctaHref: "/visit"
    },
    {
      eyebrow: "Espresso",
      title: "Espresso bar",
      description: "Classic espresso drinks with single through quad options.",
      items: cafeItems("Espresso Bar", 5),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu"
    },
    {
      eyebrow: "Cold",
      title: "Cold classics",
      description: "Cold coffee, tea, and dessert-style cafe drinks.",
      items: cafeItems("Cold Classics", 4),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu"
    },
    {
      eyebrow: "Wellness",
      title: "Smoothies & hot drinks",
      description: "Smoothies, Beso, Telba, Atmit, turmeric, ginger, and honey.",
      items: [...cafeItems("Fresh Smoothies", 2), ...cafeItems("Traditional Drinks", 3)],
      ctaLabel: "Available In Store",
      ctaHref: "/visit"
    },
    {
      eyebrow: "Morning",
      title: "Breakfast plates",
      description: "Ethiopian-inspired and modern morning plates.",
      items: cafeItems("Morning Plates & Pastries", 4),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu"
    },
    {
      eyebrow: "Bakery",
      title: "Fresh bakery",
      description: "Croissants, muffins, scones, brownies, and sweet breads.",
      items: cafeItems("Fresh Bakery", 5),
      ctaLabel: "Available In Store",
      ctaHref: "/visit"
    }
  ],
  market: [
    {
      eyebrow: "Staples",
      title: "Injera, teff & shiro",
      description: "Foundational Ethiopian pantry goods for home meals and gatherings.",
      items: [
        ...marketItems("Ethiopian Bread & Injera", 2),
        ...marketItems("Flour, Teff & Shiro", 2)
      ],
      ctaLabel: "Visit the Market",
      ctaHref: "/visit"
    },
    {
      eyebrow: "Aromatics",
      title: "Spices & tea",
      description: "Berbere, mitmita, korerima, herbal teas, and tea spices.",
      items: [...marketItems("Spices", 3), ...marketItems("Tea", 2)].slice(0, 5),
      ctaLabel: "Available In Store",
      ctaHref: "/market"
    },
    {
      eyebrow: "Ceremony",
      title: "Houseware & coffee sets",
      description: "Jebena, sini, trays, and home ceremony pieces.",
      items: marketItems("Houseware & Ceremony", 4),
      ctaLabel: "Visit the Market",
      ctaHref: "/market"
    },
    {
      eyebrow: "Prepared",
      title: "Bakery & market counter",
      description: "Bakery, sambusa, kolo, and fresh counter highlights.",
      items: [...marketItems("Bakery & Prepared Bites", 3), ...marketItems("Ethiopian Snacks", 2)],
      ctaLabel: "Available In Store",
      ctaHref: "/visit"
    }
  ]
};

const copyByVariant = {
  overview: {
    eyebrow: "Signature Menu Highlights",
    title: "A short edit of what to order.",
    intro:
      "Coffee, ceremony, morning plates, and market goods. Enough to guide the visit without turning the page into a price sheet."
  },
  coffee: {
    eyebrow: "Cafe Menu Highlights",
    title: "Coffee first, then the morning ritual.",
    intro:
      "A calmer preview of the in-store cafe menu. The full menu remains below for guests who need every detail."
  },
  market: {
    eyebrow: "Market Highlights",
    title: "The Ethiopian shelf, edited.",
    intro:
      "A focused preview of market categories and in-store prices without publishing raw inventory."
  }
} as const;

export function AnimatedPricingMenu({
  variant = "overview",
  className
}: AnimatedPricingMenuProps) {
  const groups = groupsByVariant[variant];
  const copy = copyByVariant[variant];

  return (
    <section
      className={cn(
        "material-section material-section-dark relative overflow-hidden border-y border-gold/20 bg-espresso px-5 py-20 text-ivory sm:px-8 lg:px-12 lg:py-28",
        className
      )}
      aria-labelledby={`${variant}-pricing-menu-heading`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_12%,rgba(201,169,110,0.08),transparent_26rem),linear-gradient(120deg,rgba(15,77,70,0.34),transparent_40%)]" />
      <div className="relative mx-auto max-w-[88rem]">
        <MotionReveal>
          <div className="grid gap-8 border-b border-gold/18 pb-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-gold">
              {copy.eyebrow}
            </p>
            <div>
              <h2
                id={`${variant}-pricing-menu-heading`}
                className="max-w-4xl font-display text-[clamp(2.6rem,5vw,5.6rem)] uppercase leading-[0.92] tracking-[0.035em] text-gold"
              >
                {copy.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base font-light leading-8 text-ivory/64">
                {copy.intro}
              </p>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {groups.map((group, index) => (
            <MotionReveal key={group.title} delay={index * 0.04}>
              <article className="group min-h-full border border-gold/14 bg-forest/18 p-5 transition duration-300 ease-luxury hover:border-gold/34 hover:bg-forest/28 sm:p-6">
                <div className="grid gap-5 sm:grid-cols-[0.4fr_0.6fr] sm:items-start">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold/78">
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-4 font-display text-[2rem] uppercase leading-[1] tracking-[0.035em] text-gold sm:text-[2.35rem]">
                      {group.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-ivory/56">{group.description}</p>
                  </div>

                  <div className="divide-y divide-gold/12">
                    {group.items.map((item) => (
                      <div
                        key={`${group.title}-${item.name}`}
                        className="grid gap-1.5 py-3 first:pt-0 last:pb-0"
                      >
                        <div className="grid grid-cols-[1fr_auto] items-baseline gap-4">
                          <p className="text-[0.95rem] font-medium leading-6 text-ivory">
                            {item.name}
                          </p>
                          <p className="shrink-0 text-right text-sm font-semibold leading-6 text-gold">
                            {item.price || "In store"}
                          </p>
                        </div>
                        {item.detail ? (
                          <p className="max-w-md text-xs leading-5 text-ivory/42">{item.detail}</p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end border-t border-gold/12 pt-5">
                  <ButtonLink
                    href={group.ctaHref}
                    variant="secondary"
                    className="min-h-10 border-gold/45 px-5 py-2 text-[0.62rem] hover:shadow-[0_0_24px_rgba(176,138,68,0.16)]"
                  >
                    {group.ctaLabel}
                  </ButtonLink>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
