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

type PricingItem = {
  name: string;
  detail?: string;
  price: string;
};

type PricingGroup = {
  eyebrow: string;
  title: string;
  description: string;
  items: PricingItem[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
  span?: string;
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

  const pairs = columns
    .map((column, index) => {
      const price = prices[index];

      if (!price || price === "-") {
        return null;
      }

      return `${column} ${price}`;
    })
    .filter(Boolean);

  return pairs.join(" · ");
}

function cafeSection(title: string) {
  return cafeMenuSections.find((section) => section.title === title);
}

function marketGroup(category: string) {
  return marketProductHighlights.find((group) => group.category === category);
}

function cafeItems(title: string, limit = 6): PricingItem[] {
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

function marketItems(category: string, limit = 5): PricingItem[] {
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

const ceremonyItems: PricingItem[] = ceremonyMenuHighlights.slice(0, 3).map((item) => ({
  name: item.name,
  detail: item.note,
  price: item.price
}));

const groupsByVariant: Record<NonNullable<AnimatedPricingMenuProps["variant"]>, PricingGroup[]> = {
  overview: [
    {
      eyebrow: "Coffee",
      title: "Single-Origin Pour Over",
      description: "Yirgacheffe, Sidamo, and Guji brewed by size for a clear Ethiopian cup.",
      items: cafeItems("Single-Origin Pour Over", 3),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu",
      featured: true,
      span: "xl:col-span-5 xl:row-span-2"
    },
    {
      eyebrow: "Ceremony",
      title: "Ritual & Service",
      description: "A small in-store ceremony price and home ritual pieces from the market shelf.",
      items: ceremonyItems,
      ctaLabel: "Available In Store",
      ctaHref: "/ceremony",
      span: "xl:col-span-3"
    },
    {
      eyebrow: "Cafe",
      title: "Breakfast & Bakery",
      description: "Morning plates and bakery case staples for the slower visit.",
      items: [...cafeItems("Morning Plates & Pastries", 3), ...cafeItems("Fresh Bakery", 2)],
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu",
      span: "xl:col-span-4"
    },
    {
      eyebrow: "Market",
      title: "Ethiopian Shelf",
      description: "Injera, teff, shiro, spices, tea, and coffee goods for the home table.",
      items: [
        ...marketItems("Ethiopian Bread & Injera", 2),
        ...marketItems("Spices", 2),
        ...marketItems("Tea", 1)
      ],
      ctaLabel: "Visit the Market",
      ctaHref: "/market",
      span: "xl:col-span-7"
    }
  ],
  coffee: [
    {
      eyebrow: "Origin",
      title: "Single-Origin Pour Over",
      description: "Ethiopian origins by cup size.",
      items: cafeItems("Single-Origin Pour Over", 3),
      ctaLabel: "Available In Store",
      ctaHref: "/visit",
      featured: true,
      span: "xl:col-span-4"
    },
    {
      eyebrow: "Espresso",
      title: "Espresso Bar",
      description: "Classic espresso drinks with single through quad options.",
      items: cafeItems("Espresso Bar", 6),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu",
      span: "xl:col-span-4"
    },
    {
      eyebrow: "Cold",
      title: "Cold Classics",
      description: "Cold coffee, tea, and dessert-style cafe drinks.",
      items: cafeItems("Cold Classics", 5),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu",
      span: "xl:col-span-4"
    },
    {
      eyebrow: "Wellness",
      title: "Smoothies & Hot Drinks",
      description: "Smoothies, Beso, Telba, Atmit, turmeric, ginger, and honey.",
      items: [...cafeItems("Fresh Smoothies", 3), ...cafeItems("Traditional Drinks", 3)],
      ctaLabel: "Available In Store",
      ctaHref: "/visit",
      span: "xl:col-span-4"
    },
    {
      eyebrow: "Morning",
      title: "Breakfast Plates",
      description: "Ethiopian-inspired and modern morning plates.",
      items: cafeItems("Morning Plates & Pastries", 5),
      ctaLabel: "View Menu",
      ctaHref: "/coffee#cafe-menu",
      span: "xl:col-span-4"
    },
    {
      eyebrow: "Bakery",
      title: "Fresh Bakery",
      description: "Croissants, muffins, scones, brownies, and sweet breads.",
      items: cafeItems("Fresh Bakery", 6),
      ctaLabel: "Available In Store",
      ctaHref: "/visit",
      span: "xl:col-span-4"
    }
  ],
  market: [
    {
      eyebrow: "Staples",
      title: "Injera, Teff & Shiro",
      description: "Foundational Ethiopian pantry goods for home meals and gatherings.",
      items: [
        ...marketItems("Ethiopian Bread & Injera", 3),
        ...marketItems("Flour, Teff & Shiro", 3)
      ],
      ctaLabel: "Visit the Market",
      ctaHref: "/visit",
      featured: true,
      span: "xl:col-span-6"
    },
    {
      eyebrow: "Aromatics",
      title: "Spices & Tea",
      description: "Berbere, mitmita, korerima, herbal teas, and tea spices.",
      items: [...marketItems("Spices", 4), ...marketItems("Tea", 2)],
      ctaLabel: "Available In Store",
      ctaHref: "/market",
      span: "xl:col-span-6"
    },
    {
      eyebrow: "Ceremony",
      title: "Houseware & Coffee Sets",
      description: "Jebena, sini, trays, and home ceremony pieces.",
      items: marketItems("Houseware & Ceremony", 6),
      ctaLabel: "Visit the Market",
      ctaHref: "/market",
      span: "xl:col-span-6"
    },
    {
      eyebrow: "Prepared",
      title: "Bakery & Market Counter",
      description: "Bakery, sambusa, kolo, and fresh counter highlights.",
      items: [
        ...marketItems("Bakery & Prepared Bites", 3),
        ...marketItems("Ethiopian Snacks", 2),
        ...marketItems("Fresh Meat Counter", 1)
      ],
      ctaLabel: "Available In Store",
      ctaHref: "/visit",
      span: "xl:col-span-6"
    }
  ]
};

const copyByVariant = {
  overview: {
    eyebrow: "Menu & market",
    title: "Signature menu highlights.",
    intro:
      "Real cafe and market highlights, edited for guests. A quiet preview of what is available before you arrive."
  },
  coffee: {
    eyebrow: "Cafe pricing",
    title: "A menu built around coffee, ceremony, and morning ritual.",
    intro:
      "An in-store menu view for Ethiopian pour-over, espresso, cold drinks, smoothies, medicinal hot drinks, breakfast plates, and fresh bakery."
  },
  market: {
    eyebrow: "Market pricing",
    title: "Market highlights for the Ethiopian table.",
    intro:
      "A curated look at market categories and in-store prices without exposing the raw back-office inventory."
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
        "material-section material-section-dark relative overflow-hidden border-y border-gold/25 bg-espresso px-5 py-24 text-ivory sm:px-8 lg:px-12 lg:py-32",
        className
      )}
      aria-labelledby={`${variant}-pricing-menu-heading`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(176,138,68,0.1),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(244,233,216,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gold/55" />
      <div className="relative mx-auto max-w-7xl">
        <MotionReveal>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-gold">
              {copy.eyebrow}
            </p>
            <div>
              <h2
                id={`${variant}-pricing-menu-heading`}
                className="max-w-5xl font-display text-4xl uppercase leading-[0.96] tracking-[0.035em] text-gold sm:text-5xl lg:text-6xl"
              >
                {copy.title}
              </h2>
              <p className="mt-8 max-w-2xl text-base font-light leading-8 text-ivory/68 sm:text-[1.06rem]">
                {copy.intro}
              </p>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {groups.map((group, index) => (
            <MotionReveal key={group.title} className={group.span} delay={index * 0.05}>
              <article
                className={cn(
                  "luxury-card group flex min-h-full flex-col border border-gold/22 bg-forest/26 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.18)] transition duration-300 ease-luxury hover:-translate-y-1 hover:border-gold/60 hover:bg-forest/46 hover:shadow-[0_34px_110px_rgba(0,0,0,0.28)] sm:p-7",
                  group.featured && "border-gold/55 bg-forest/58 xl:p-9"
                )}
              >
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold/82">
                    {group.eyebrow}
                  </p>
                  <h3 className="mt-5 font-display text-[2rem] uppercase leading-[1] tracking-[0.035em] text-gold">
                    {group.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-ivory/62">
                    {group.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "mt-7 grid gap-3",
                    group.featured && "xl:grid-cols-2 xl:gap-x-5"
                  )}
                >
                  {group.items.map((item) => (
                    <div
                      key={`${group.title}-${item.name}`}
                      className="border-t border-gold/14 pt-4 transition duration-300 group-hover:border-gold/24"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-medium leading-6 text-ivory">{item.name}</p>
                        <p className="max-w-[7.5rem] shrink-0 text-right text-sm font-semibold leading-6 text-gold sm:max-w-[9rem]">
                          {item.price || "In store"}
                        </p>
                      </div>
                      {item.detail ? (
                        <p className="max-w-[18rem] text-xs leading-5 text-ivory/46">{item.detail}</p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <ButtonLink
                    href={group.ctaHref}
                    variant="secondary"
                    className="w-full border-gold/55 bg-transparent hover:shadow-[0_0_34px_rgba(176,138,68,0.2)]"
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
