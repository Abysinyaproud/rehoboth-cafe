export type CoffeeXImageCategory =
  | "people"
  | "coffee-preparation"
  | "ceremony"
  | "drinks-food"
  | "interior-environment"
  | "product-detail"
  | "exterior-location";

export type CoffeeXImage = {
  src: string;
  alt: string;
  category: CoffeeXImageCategory;
  objectPosition: string;
  mobileObjectPosition?: string;
  fit: "cover" | "contain";
  positionClassName: string;
};

export const coffeexImages = {
  heroDrinkTable: {
    src: "/brand/coffeex/Hero/hero-02.jpg",
    alt: "Latte, roasted coffee beans, and Buna House cup arranged on a dark wooden table",
    category: "drinks-food",
    objectPosition: "50% 52%",
    mobileObjectPosition: "52% 50%",
    fit: "cover",
    positionClassName: "object-[52%_50%] md:object-[50%_52%]"
  },
  heroCoffeeTexture: {
    src: "/brand/coffeex/Hero/hero-04.jpg",
    alt: "Finished coffee drink surrounded by roasted beans on a dark wooden surface",
    category: "drinks-food",
    objectPosition: "50% 48%",
    mobileObjectPosition: "54% 48%",
    fit: "cover",
    positionClassName: "object-[54%_48%] md:object-[50%_48%]"
  },
  coffeeCupBeans: {
    src: "/brand/coffeex/Hero/hero-01.jpg",
    alt: "Buna House coffee cup with roasted beans spilling across a wooden table",
    category: "product-detail",
    objectPosition: "46% 54%",
    mobileObjectPosition: "50% 52%",
    fit: "cover",
    positionClassName: "object-[50%_52%] md:object-[46%_54%]"
  },
  coffeePackagingFlatlay: {
    src: "/brand/coffeex/Coffee/coffee-01.jpg",
    alt: "Buna House Ethiopian coffee bag with latte, cups, and roasted beans",
    category: "product-detail",
    objectPosition: "50% 48%",
    mobileObjectPosition: "50% 46%",
    fit: "cover",
    positionClassName: "object-[50%_46%] md:object-[50%_48%]"
  },
  coffeePackagingStack: {
    src: "/brand/coffeex/Coffee/coffee-04.jpg",
    alt: "Buna House coffee bags with branded cups and roasted beans on the counter",
    category: "product-detail",
    objectPosition: "50% 44%",
    mobileObjectPosition: "50% 42%",
    fit: "cover",
    positionClassName: "object-[50%_42%] md:object-[50%_44%]"
  },
  coffeePackagingPour: {
    src: "/brand/coffeex/Coffee/coffee-05.jpg",
    alt: "Buna House coffee bags, latte, and roasted beans arranged for the cafe shelf",
    category: "product-detail",
    objectPosition: "50% 48%",
    mobileObjectPosition: "50% 45%",
    fit: "cover",
    positionClassName: "object-[50%_45%] md:object-[50%_48%]"
  },
  beansLatteOverhead: {
    src: "/brand/coffeex/Details/detail-05.jpg",
    alt: "Overhead detail of a latte circled by roasted coffee beans",
    category: "drinks-food",
    objectPosition: "50% 50%",
    mobileObjectPosition: "50% 50%",
    fit: "cover",
    positionClassName: "object-center"
  },
  coffeeCupVertical: {
    src: "/brand/coffeex/Details/detail-03.jpg",
    alt: "Buna House latte cup and branded coffee cup with roasted beans on a dark wooden table",
    category: "drinks-food",
    objectPosition: "50% 56%",
    mobileObjectPosition: "50% 54%",
    fit: "cover",
    positionClassName: "object-[50%_54%] md:object-[50%_56%]"
  },
  latteBeansWide: {
    src: "/brand/coffeex/Details/detail-06.jpg",
    alt: "Buna House latte and roasted beans photographed on a warm wooden tabletop",
    category: "drinks-food",
    objectPosition: "52% 50%",
    mobileObjectPosition: "50% 50%",
    fit: "cover",
    positionClassName: "object-[50%_50%] md:object-[52%_50%]"
  },
  ritualDrinkBeans: {
    src: "/brand/coffeex/Ceremony/ceremony-02.jpg",
    alt: "Warm coffee ritual detail with a latte, branded cup, and roasted beans",
    category: "ceremony",
    objectPosition: "52% 50%",
    mobileObjectPosition: "52% 48%",
    fit: "cover",
    positionClassName: "object-[52%_48%] md:object-[52%_50%]"
  },
  founderApronPortrait: {
    src: "/brand/coffeex/About/about-01.jpg",
    alt: "Buna House team member wearing an apron inside the cafe",
    category: "people",
    objectPosition: "50% 28%",
    mobileObjectPosition: "50% 24%",
    fit: "cover",
    positionClassName: "object-[50%_24%] md:object-[50%_28%]"
  },
  founderRoasterFull: {
    src: "/brand/coffeex/About/about-02.jpg",
    alt: "Buna House team member standing beside the coffee roaster",
    category: "people",
    objectPosition: "50% 44%",
    mobileObjectPosition: "50% 36%",
    fit: "contain",
    positionClassName: "object-[50%_36%] md:object-[50%_44%]"
  },
  founderRegisterPortrait: {
    src: "/brand/coffeex/About/about-04.jpg",
    alt: "Buna House team member at the cafe counter",
    category: "people",
    objectPosition: "50% 26%",
    mobileObjectPosition: "50% 22%",
    fit: "cover",
    positionClassName: "object-[50%_22%] md:object-[50%_26%]"
  },
  storefront: {
    src: "/brand/coffeex/Cafe/cafe-06.jpg",
    alt: "Buna House storefront entrance in Columbia, Maryland",
    category: "exterior-location",
    objectPosition: "50% 42%",
    mobileObjectPosition: "50% 38%",
    fit: "contain",
    positionClassName: "object-[50%_38%] md:object-[50%_42%]"
  },
  marketProductShelf: {
    src: "/brand/coffeex/Market/market-01.jpg",
    alt: "Buna House coffee bags and cups arranged as market shelf products",
    category: "product-detail",
    objectPosition: "50% 44%",
    mobileObjectPosition: "50% 42%",
    fit: "cover",
    positionClassName: "object-[50%_42%] md:object-[50%_44%]"
  }
} satisfies Record<string, CoffeeXImage>;

export const brandImages = {
  heroJebena: coffeexImages.heroDrinkTable.src,
  ceremony: coffeexImages.ritualDrinkBeans.src,
  heritageOrigin: coffeexImages.founderRoasterFull.src,
  cafeAtmosphere: coffeexImages.founderRoasterFull.src,
  marketShelves: coffeexImages.marketProductShelf.src,
  coffeeDetail: coffeexImages.coffeePackagingFlatlay.src,
  heroWide: coffeexImages.heroCoffeeTexture.src,
  storefront: coffeexImages.storefront.src,
  founder: coffeexImages.founderApronPortrait.src,
  kitLogo: "/brand/kit/logos/rehoboth-ethiopian-logo.png",
  kitLogoLockup: "/brand/kit/logos/rehoboth-ethiopian-logo-lockup.png",
  kitWebBanner: "/brand/kit/banners/web-banner.jpg"
} as const;
