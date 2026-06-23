import Image from "next/image";
import Link from "next/link";
import { BunaEmblem } from "@/components/brand/BunaEmblem";
import { MobileDetailsMenu } from "@/components/layout/MobileDetailsMenu";
import { AnimatedPricingMenu } from "@/components/sections/AnimatedPricingMenu";
import { MobileHeroDissolve } from "@/components/sections/MobileHeroDissolve";
import { EthiopianCoffeeScene } from "@/components/visuals/EthiopianCoffeeScene";
import { HeroVideo } from "@/components/visuals/HeroVideo";
import { brandImages, brandVideos } from "@/config/brand-assets";
import { siteConfig } from "@/config/site";

const navItems = [
  ["Coffee", "/coffee"],
  ["Market", "/market"],
  ["Our Story", "/about"],
  ["Visit", "/visit"]
] as const;

const coffees = [
  {
    name: "Yirgacheffe",
    notes: "Floral • Citrus • Tea Like",
    description: "A lifted Ethiopian profile with clean aromatics and a precise finish.",
    video: brandVideos.origin,
    mobileVideo: brandVideos.originMobile,
    videoLabel: "Ethiopian coffee origin, cherries, green coffee, and hand sorting",
    href: "/coffee/yirgacheffe"
  },
  {
    name: "Sidamo",
    notes: "Stone Fruit • Chocolate • Sweet",
    description: "Rounded, expressive, and generous without losing clarity.",
    video: brandVideos.ritual,
    mobileVideo: brandVideos.ritualMobile,
    videoLabel: "Traditional Ethiopian coffee ritual with jebena, beans, steam, and incense",
    href: "/coffee/sidamo"
  },
  {
    name: "Limu",
    notes: "Caramel • Spice • Wine Like",
    description: "Warm and composed with a smooth structure and quiet depth.",
    video: brandVideos.pour,
    mobileVideo: brandVideos.pourMobile,
    videoLabel: "Coffee pouring from a jebena into Ethiopian sini cups with steam",
    href: "/coffee/limu"
  }
];

function BrandMark() {
  return (
    <span className="inline-flex items-center gap-4">
      <BunaEmblem className="size-12" />
      <span>
        <span className="block font-display text-xl uppercase leading-none tracking-[0.12em] text-gold">
          Buna House
        </span>
        <span className="mt-2 hidden font-subhead text-sm uppercase tracking-[0.14em] text-ivory/72 sm:block">
          The House of Ethiopian Coffee
        </span>
      </span>
    </span>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="editorial-link text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-gold transition duration-300 hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      {children}
    </Link>
  );
}

function CtaLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "border-gold bg-gold text-forest hover:bg-ivory"
      : "border-gold/60 text-gold hover:border-gold hover:bg-gold hover:text-forest";

  return (
    <Link
      href={href}
      className={`luxury-button inline-flex min-h-12 items-center justify-center border px-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition duration-300 hover:shadow-[0_0_34px_rgba(176,138,68,0.26)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${styles}`}
    >
      <span>{children}</span>
    </Link>
  );
}

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold ${className}`}>
      {children}
    </p>
  );
}

function LuxuryRule({ className = "" }: { className?: string }) {
  return <span className={`luxury-rule ${className}`} aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <article className="reference-homepage overflow-x-hidden bg-ivory text-espresso">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-gold/25 bg-forest/76 px-5 py-5 text-ivory backdrop-blur-md sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[112rem] grid-cols-[1fr_auto] items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.slice(0, 2).map(([label, href]) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>

          <Link href="/" aria-label="Buna House home" className="justify-self-start lg:justify-self-center">
            <BrandMark />
          </Link>

          <nav className="hidden items-center justify-end gap-8 lg:flex" aria-label="Secondary navigation">
            {navItems.slice(2).map(([label, href]) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </nav>

          <MobileDetailsMenu
            items={navItems}
            className="relative justify-self-end lg:hidden"
            navClassName="absolute right-0 top-12 grid w-64 gap-3 border border-gold/45 bg-forest p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)]"
            linkClassName="py-2 text-sm text-ivory/76 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          />
        </div>
      </header>

      <section className="hero-video-section relative h-[100svh] max-h-[980px] min-h-[720px] overflow-hidden bg-forest text-ivory">
        <Image
          src={brandImages.heroJebena}
          alt="Ethiopian coffee ceremony atmosphere with jebena and warm light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center saturate-[0.92] contrast-[1.06]"
        />
        <HeroVideo
          src={brandImages.heroVideo}
          mobileSrc={brandVideos.heroCeremonyMobile}
          poster={brandImages.heroJebena}
          className="hero-video absolute inset-0 size-full object-cover object-center saturate-[0.9] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,77,70,0.94),rgba(27,23,20,0.7)_46%,rgba(15,77,70,0.18)),linear-gradient(0deg,rgba(27,23,20,0.74),transparent_48%)]" />
        <div className="relative mx-auto flex h-full max-w-[112rem] items-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
          <MobileHeroDissolve>
            <div className="max-w-4xl">
              <p className="font-display text-[clamp(4.2rem,9vw,10rem)] uppercase leading-[0.82] tracking-[0.05em] text-gold">
                Buna
                <br />
                House
              </p>
              <LuxuryRule className="mt-8 text-gold" />
              <h1 className="mt-8 font-subhead text-[clamp(2rem,3.4vw,4rem)] font-normal leading-[1.02] text-ivory">
                The House of Ethiopian Coffee
              </h1>
              <p className="mt-7 max-w-2xl font-subhead text-2xl leading-9 text-ivory/82 sm:text-3xl sm:leading-10">
                Rooted in Ethiopia. Crafted for modern hospitality.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CtaLink href="/coffee">Explore Coffee</CtaLink>
                <CtaLink href="/visit" variant="secondary">
                  Visit Buna House
                </CtaLink>
              </div>
            </div>
          </MobileHeroDissolve>
        </div>
      </section>

      <section className="artisan-surface material-section grid border-y border-gold/35 bg-ivory lg:grid-cols-[0.44fr_0.56fr]">
        <div className="premium-image relative min-h-[28rem] min-w-0 overflow-hidden border-b border-gold/35 lg:min-h-[44rem] lg:border-b-0 lg:border-r">
          <Image
            src={brandImages.heritageOrigin}
            alt="Coffee origin and Ethiopian coffee heritage"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover object-center saturate-[0.9] contrast-[1.04]"
          />
        </div>
        <div className="premium-copy flex min-h-[34rem] min-w-0 flex-col justify-center px-6 py-20 sm:px-12 lg:px-20">
          <span className="section-index absolute right-8 top-10 hidden lg:block" aria-hidden="true">
            01
          </span>
          <Eyebrow>Our Heritage</Eyebrow>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(3rem,15vw,7.8rem)] uppercase leading-[0.86] tracking-[0.035em] text-espresso">
            The Birthplace of Coffee
          </h2>
          <LuxuryRule className="mt-9" />
          <p className="mt-10 max-w-2xl font-subhead text-2xl leading-9 text-espresso/76 sm:text-[1.75rem] sm:leading-10">
            For centuries, Ethiopia has shared coffee not simply as a beverage,
            but as a ritual of hospitality, community, and connection.
          </p>
          <Link
            href="/about"
            className="editorial-link mt-10 inline-flex w-fit text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold transition duration-300 hover:text-espresso"
          >
            Learn Our Story
          </Link>
        </div>
      </section>

      <section className="material-section material-section-dark woven-dark relative bg-forest px-5 py-18 text-ivory sm:px-8 lg:px-12 lg:py-24">
        <Image
          src={brandImages.kitLogo}
          alt=""
          width={560}
          height={560}
          className="pointer-events-none absolute -right-28 top-16 hidden opacity-[0.035] saturate-0 lg:block"
        />
        <div className="relative mx-auto max-w-[112rem]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.46fr] lg:items-end">
            <div className="max-w-6xl">
              <span className="section-index absolute right-0 top-0 hidden lg:block" aria-hidden="true">
                02
              </span>
              <Eyebrow>Coffee</Eyebrow>
              <h2 className="mt-7 max-w-6xl font-display text-[clamp(2.35rem,8vw,5.7rem)] uppercase leading-[0.92] tracking-[0.025em] text-gold sm:tracking-[0.035em]">
                Single origin.
                <br />
                Distinctly Ethiopian.
              </h2>
              <LuxuryRule className="mt-9 text-gold" />
            </div>
            <div className="coffee-3d-stage relative min-h-[18rem] overflow-hidden border border-gold/35 bg-espresso/25 shadow-[0_34px_110px_rgba(0,0,0,0.28)] sm:min-h-[21rem] lg:min-h-[24rem]">
              <EthiopianCoffeeScene presentation="showcase" className="opacity-100" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(176,138,68,0.18),transparent_35%),linear-gradient(180deg,transparent,rgba(8,20,18,0.24))]" />
              <div className="pointer-events-none absolute inset-4 border border-gold/18" />
              <p className="absolute bottom-6 left-6 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-gold/80">
                Origin Atmosphere
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-[82rem] gap-6 md:grid-cols-3 lg:mt-14 lg:items-start">
            {coffees.map((coffee) => (
              <Link
                key={coffee.name}
                href={coffee.href}
                className="luxury-card group mx-auto w-full max-w-[24rem] border border-gold/28 bg-espresso/26 transition duration-300 hover:border-gold/70 hover:bg-espresso/42 hover:shadow-[0_30px_100px_rgba(0,0,0,0.32)] md:max-w-none md:[&:nth-child(2)]:mt-[-1.5rem]"
              >
                <div className="origin-video-panel relative aspect-[9/16] overflow-hidden">
                  <video
                    className="media-breathe size-full object-cover saturate-[0.88] contrast-[1.04]"
                    aria-label={coffee.videoLabel}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={coffee.mobileVideo} media="(max-width: 767px)" type="video/mp4" />
                    <source src={coffee.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                </div>
                <div className="p-7 sm:p-8">
                  <h3 className="font-display text-4xl uppercase tracking-[0.06em] text-gold">{coffee.name}</h3>
                  <p className="mt-3 font-subhead text-2xl leading-7 text-ivory/84">{coffee.notes}</p>
                  <p className="mt-5 text-sm leading-7 text-ivory/62">{coffee.description}</p>
                  <span className="editorial-link mt-7 inline-flex text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="artisan-surface material-section grid bg-ivory text-espresso lg:grid-cols-[0.56fr_0.44fr]">
        <div className="premium-copy flex min-h-[36rem] min-w-0 flex-col justify-center px-6 py-20 sm:px-12 lg:px-20">
          <span className="section-index absolute right-8 top-10 hidden lg:block" aria-hidden="true">
            03
          </span>
          <Eyebrow>Ceremony</Eyebrow>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(3rem,14vw,7rem)] uppercase leading-[0.88] tracking-[0.035em]">
            From ceremony to cup
          </h2>
          <LuxuryRule className="mt-9" />
          <p className="mt-10 max-w-2xl font-subhead text-2xl leading-9 text-espresso/76 sm:text-[1.7rem] sm:leading-10">
            The Ethiopian coffee ceremony is an invitation to slow down. Aroma,
            patience, and conversation turn coffee into welcome.
          </p>
          <Link
            href="/ceremony"
            className="editorial-link mt-10 inline-flex w-fit text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold transition duration-300 hover:text-espresso"
          >
            Discover the Ceremony
          </Link>
        </div>
        <div className="premium-image relative min-h-[30rem] min-w-0 overflow-hidden border-t border-gold/35 bg-espresso lg:min-h-[44rem] lg:border-l lg:border-t-0">
          <video
            className="absolute inset-0 size-full object-cover object-center saturate-[0.86] contrast-[1.08]"
            poster={brandImages.ceremony}
            aria-label="Ethiopian coffee ceremony atmosphere with jebena, smoke, and warm light"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={brandVideos.ritualMobile} media="(max-width: 767px)" type="video/mp4" />
            <source src={brandVideos.ritual} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-forest/16 via-transparent to-espresso/12" />
        </div>
      </section>

      <section className="material-section material-section-dark woven-dark grid border-y border-gold/35 bg-forest text-ivory lg:grid-cols-2">
        {[
          {
            title: "Cafe",
            text: "Specialty coffee, quiet hospitality, and a room made for gathering.",
            video: brandVideos.pour,
            mediaLabel: "Coffee pouring into Ethiopian cups with warm hospitality atmosphere",
            href: "/visit"
          },
          {
            title: "Market",
            text: "Curated Ethiopian goods, coffee, tea, spices, and pantry staples.",
            image: brandImages.marketShelves,
            mediaClassName: "scale-110 object-center opacity-70 saturate-[0.82] contrast-[1.08]",
            href: "/market"
          }
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="luxury-card group relative min-h-[32rem] overflow-hidden border-b border-gold/35 lg:border-b-0 lg:border-r"
          >
            {"video" in item ? (
              <video
                className="media-breathe absolute inset-0 size-full object-cover object-center saturate-[0.84] contrast-[1.08]"
                aria-label={item.mediaLabel}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={brandVideos.pourMobile} media="(max-width: 767px)" type="video/mp4" />
                <source src={item.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item.image}
                alt={`${item.title} at Buna House`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`media-breathe object-cover ${item.mediaClassName}`}
              />
            )}
            <div className="absolute inset-0 bg-forest/74 transition duration-300 group-hover:bg-forest/64" />
            <div className="relative flex h-full min-h-[32rem] flex-col justify-end p-8 sm:p-12">
              <h3 className="font-display text-[clamp(3rem,5vw,5.8rem)] uppercase tracking-[0.05em] text-gold">
                {item.title}
              </h3>
              <LuxuryRule className="mt-6 max-w-52 text-gold" />
              <p className="mt-5 max-w-sm font-subhead text-2xl leading-8 text-ivory/82">{item.text}</p>
              <span className="editorial-link mt-8 inline-flex w-fit text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
                Visit {item.title}
              </span>
            </div>
          </Link>
        ))}
      </section>

      <AnimatedPricingMenu />

      <section className="artisan-surface material-section overflow-hidden bg-ivory px-5 py-20 text-espresso sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <Eyebrow>Visit</Eyebrow>
            <h2 className="mt-7 max-w-4xl font-display text-[clamp(3rem,14vw,6.8rem)] uppercase leading-[0.9] tracking-[0.035em]">
              Make Buna House the plan
            </h2>
            <LuxuryRule className="mt-9" />
          </div>
          <div className="premium-panel min-w-0 border border-gold/20 bg-[#fbf7ef]/70 p-5 shadow-[0_28px_80px_rgba(8,20,18,0.08)] sm:p-8">
            <p className="font-subhead text-2xl leading-9 text-espresso/76">
              {siteConfig.locationLabel}
            </p>
            <div className="mt-6 grid gap-3 text-sm leading-7 text-espresso/68 sm:grid-cols-2">
              {siteConfig.hours.map((item) => (
                <p key={item.days}>
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    {item.days}
                  </span>
                  {item.time}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href={siteConfig.directionsUrl}>Get Directions</CtaLink>
              <CtaLink href={`tel:${siteConfig.phone}`} variant="secondary">
                Call {siteConfig.phoneLabel}
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
