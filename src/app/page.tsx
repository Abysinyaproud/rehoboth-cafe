import Image from "next/image";
import Link from "next/link";
import { BunaEmblem } from "@/components/brand/BunaEmblem";

const navLeft = [
  ["Shop", "/shop"],
  ["Cafe & Market", "/market"],
  ["Our Story", "/about"]
];

const navRight = [
  ["Journal", "/journal"],
  ["Contact", "/contact"]
];

const coffees = [
  {
    name: "Yirgacheffe",
    notes: "Floral • Citrus • Tea Like",
    origin: "From the highlands of Ethiopia",
    price: "$24",
    href: "/coffee/yirgacheffe",
    tone: "bg-[#081412]"
  },
  {
    name: "Sidamo",
    notes: "Berry • Chocolate • Sweet",
    origin: "A rounded cup with elegant fruit depth",
    price: "$22",
    href: "/coffee/sidamo",
    tone: "bg-[#d9c09a] text-espresso"
  },
  {
    name: "Limu",
    notes: "Caramel • Spice • Smooth",
    origin: "Balanced, warm, and quietly complex",
    price: "$21",
    href: "/coffee/limu",
    tone: "bg-[#21150f]"
  }
];

const experiences = [
  ["Coffee", "Rare Ethiopian beans.", "/coffee"],
  ["Culture", "Authentic traditions.", "/ceremony"],
  ["Community", "A gathering place.", "/visit"]
];

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-4">
      <BunaEmblem className={compact ? "size-12" : "size-16"} />
      <span>
        <span className="block font-display text-xl uppercase leading-none tracking-[0.12em] text-gold">
          Buna House
        </span>
        {!compact ? (
          <span className="mt-2 block font-subhead text-sm leading-none tracking-[0.16em] text-ivory/78">
            The House of Ethiopian Coffee
          </span>
        ) : null}
      </span>
    </span>
  );
}

function GoldLink({
  href,
  children,
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center border border-gold px-7 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold transition duration-300 hover:bg-gold hover:text-forest hover:shadow-[0_0_28px_rgba(176,138,68,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${className}`}
    >
      {children}
    </Link>
  );
}

function CoffeeBag({ name, notes, origin, price, href, tone }: (typeof coffees)[number]) {
  return (
    <article className="group grid gap-7 text-left">
      <Link
        href={href}
        className="mx-auto flex w-full max-w-[19rem] flex-col items-center transition duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <span
          className={`relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden border border-gold/65 p-7 shadow-[0_34px_90px_rgba(0,0,0,0.32)] ${tone}`}
        >
          <span className="absolute inset-x-0 top-0 h-16 border-b border-gold/30 bg-[linear-gradient(180deg,rgba(244,233,216,0.16),transparent)]" />
          <span className="relative mx-auto mt-8 grid size-20 place-items-center border border-current/60">
            <BunaEmblem className="size-14 border-0 bg-transparent" />
          </span>
          <span className="relative text-center">
            <span className="block font-display text-3xl uppercase tracking-[0.1em] text-gold">
              {name}
            </span>
            <span className="mt-3 block text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-current/70">
              Single Origin
            </span>
          </span>
        </span>
      </Link>
      <div className="mx-auto max-w-[19rem] text-center">
        <h3 className="font-display text-3xl uppercase tracking-[0.08em] text-gold">{name}</h3>
        <p className="mt-2 font-subhead text-xl leading-6 text-ivory/82">{notes}</p>
        <p className="mt-3 text-sm leading-6 text-ivory/62">{origin}</p>
        <p className="mt-4 font-semibold text-gold">{price}</p>
        <Link
          href={href}
          className="mt-6 inline-flex text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold transition duration-300 hover:text-ivory"
        >
          Explore Coffee →
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <article className="reference-homepage bg-forest text-ivory">
      <div className="mx-auto max-w-[110rem] overflow-hidden bg-forest shadow-[0_0_120px_rgba(0,0,0,0.45)]">
        <header className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-center border-b border-gold/55 bg-forest/92 px-7 py-5 text-gold backdrop-blur-md lg:px-14">
          <nav className="hidden items-center gap-4 sm:flex lg:gap-10" aria-label="Primary navigation left">
            {navLeft.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition duration-300 hover:text-ivory"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/" aria-label="Buna House home" className="justify-self-center">
            <Wordmark compact />
          </Link>
          <div className="hidden items-center justify-end gap-4 sm:flex lg:gap-10">
            <nav className="flex items-center gap-4 lg:gap-10" aria-label="Primary navigation right">
              {navRight.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition duration-300 hover:text-ivory"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <details className="justify-self-end sm:hidden">
            <summary className="cursor-pointer list-none text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
              Menu
            </summary>
            <nav className="absolute right-5 top-16 grid w-64 gap-2 border border-gold/50 bg-forest p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
              {[...navLeft, ...navRight].map(([label, href]) => (
                <Link key={label} href={href} className="py-2 text-sm text-ivory/80">
                  {label}
                </Link>
              ))}
            </nav>
          </details>
        </header>

        <section className="grid min-h-[calc(100vh-5.5rem)] border-b border-gold/60 bg-espresso text-ivory lg:grid-cols-[3fr_2fr]">
          <div className="relative min-h-[26rem] overflow-hidden lg:min-h-0">
            <Image
              src="/brand/images/ethiopian-coffee-ceremony.png"
              alt="Ethiopian coffee ceremony with jebena coffee being poured"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-left transition duration-300 ease-luxury hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,20,18,0.05),rgba(8,20,18,0.45)),linear-gradient(0deg,rgba(8,20,18,0.44),transparent_52%)]" />
          </div>
          <div className="flex flex-col justify-center px-7 py-16 sm:px-12 lg:px-16">
            <p className="font-display text-[clamp(3.4rem,6vw,7rem)] uppercase leading-[0.86] tracking-[0.08em] text-gold">
              Buna
              <br />
              House
            </p>
            <h1 className="mt-8 font-display text-[clamp(2.7rem,4.2vw,5rem)] uppercase leading-[0.92] tracking-[0.04em] text-ivory">
              More Than Coffee
            </h1>
            <p className="mt-8 max-w-md font-subhead text-2xl leading-9 text-ivory/84">
              Experience the traditions, flavors, and hospitality of Ethiopia.
            </p>
            <div className="mt-10">
              <GoldLink href="/about">Discover Our Story</GoldLink>
            </div>
          </div>
        </section>

        <section id="birthplace" className="border-b border-gold/60 bg-ivory px-7 py-20 text-espresso sm:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Ethiopian Heritage
            </p>
            <h2 className="mt-7 font-display text-[clamp(3rem,6vw,6.5rem)] uppercase leading-[0.9] tracking-[0.035em]">
              The Birthplace of Coffee
            </h2>
            <p className="mt-10 max-w-2xl font-subhead text-2xl leading-9 text-espresso/78">
              For centuries Ethiopia has shared coffee not simply as a beverage,
              but as a ritual of hospitality, community, and connection. At
              Buna House we bring this heritage into a modern coffee experience.
            </p>
          </div>
        </section>

        <section id="signature-coffees" className="relative border-b border-gold/60 bg-forest px-7 py-20 text-center text-ivory sm:px-12 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Our Signature Coffees
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.8rem,5vw,5.8rem)] uppercase leading-[0.92] tracking-[0.035em] text-gold">
              Single Origin. Distinctly Ethiopian.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl font-subhead text-2xl leading-8 text-ivory/78">
              Carefully sourced from Ethiopia’s finest regions. Each cup tells a
              story of origin, elevation, and excellence.
            </p>
          </div>
          <div className="mt-14 grid gap-14 lg:grid-cols-3">
            {coffees.map((coffee) => (
              <CoffeeBag key={coffee.name} {...coffee} />
            ))}
          </div>
          <GoldLink href="/coffee" className="mt-14 bg-forest/90">
            Shop Collection
          </GoldLink>
        </section>

        <section id="ceremony" className="grid border-b border-gold/60 bg-espresso text-ivory lg:grid-cols-[3fr_2fr]">
          <div className="relative min-h-[26rem] overflow-hidden lg:min-h-[38rem]">
            <Image
              src="/brand/images/hero-jebena-ceremony.png"
              alt="Jebena coffee ceremony with steam and roasted coffee beans"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-center transition duration-300 ease-luxury hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-espresso/70" />
          </div>
          <div className="flex flex-col justify-center px-7 py-16 text-center sm:px-12 lg:px-16">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-gold">
              The Coffee Ceremony
            </p>
            <h2 className="mt-8 font-display text-[clamp(3rem,5vw,5.8rem)] uppercase leading-[0.9] tracking-[0.04em] text-gold">
              More Than Coffee
            </h2>
            <p className="mx-auto mt-8 max-w-md font-subhead text-2xl leading-9 text-ivory/82">
              Coffee is woven into Ethiopian culture through ceremony,
              storytelling, and shared moments.
            </p>
            <GoldLink href="/ceremony" className="mx-auto mt-10">
              Discover the Ceremony
            </GoldLink>
          </div>
        </section>

        <section className="grid border-b border-gold/60 bg-forest text-ivory lg:grid-cols-2">
          {[
            ["Cafe", "Handcrafted beverages, fresh pastries, and a room designed for gathering.", "/visit"],
            ["Market", "Imported Ethiopian goods, spices, coffee equipment, and specialty foods.", "/market"]
          ].map(([title, text, href]) => (
            <Link
              key={title}
              href={href}
              className="group relative min-h-[26rem] overflow-hidden border-b border-gold/60 lg:border-b-0 lg:border-r"
            >
              <Image
                src="/brand/images/cafe-market-interior.png"
                alt={`${title} at Buna House`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-forest/66 transition duration-300 group-hover:bg-forest/56" />
              <div className="relative flex h-full min-h-[26rem] flex-col justify-end p-8 sm:p-12">
                <h3 className="font-display text-5xl uppercase tracking-[0.06em] text-gold">{title}</h3>
                <p className="mt-5 max-w-sm font-subhead text-2xl leading-8 text-ivory/82">{text}</p>
                <span className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Visit {title} →
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="grid border-b border-gold/60 bg-forest text-ivory lg:grid-cols-[1fr_1.1fr]">
          <div className="border-b border-gold/60 px-7 py-14 lg:border-b-0 lg:border-r lg:px-12">
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-gold">
              Featured Experience
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {experiences.map(([title, text, href]) => (
                <Link key={title} href={href} className="border border-gold/45 p-6 transition duration-300 hover:border-gold hover:bg-gold/10">
                  <h3 className="font-display text-3xl uppercase tracking-[0.06em] text-gold">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ivory/70">{text}</p>
                  <span className="mt-6 inline-flex text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="px-7 py-14 lg:px-12">
            <p className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
              @bunahousecoffee
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                "/brand/images/hero-jebena-ceremony.png",
                "/brand/images/ethiopian-coffee-ceremony.png",
                "/brand/images/cafe-market-interior.png",
                "/brand/images/heritage-coffee-farmers.png",
                "/brand/images/hero-jebena-ceremony.png",
                "/brand/images/cafe-market-interior.png"
              ].map((src, index) => (
                <div key={`${src}-${index}`} className="relative aspect-[4/3] overflow-hidden border border-gold/45">
                  <Image src={src} alt={`Buna House coffee and culture moment ${index + 1}`} fill sizes="20vw" className="object-cover transition duration-300 hover:scale-[1.02]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid border-b border-gold/60 bg-ivory text-espresso lg:grid-cols-[1fr_1fr]">
          <div className="grid sm:grid-cols-2">
            {["Best Ethiopian coffee experience in Maryland.", "Beautiful atmosphere and exceptional coffee."].map((quote) => (
              <blockquote key={quote} className="border-b border-gold/45 px-8 py-14 text-center sm:border-b-0 sm:border-r">
                <p className="font-subhead text-3xl italic leading-[1.22] text-espresso/78">“{quote}”</p>
                <p className="mt-7 text-[0.68rem] uppercase tracking-[0.18em] text-espresso/55">Guest testimonial</p>
              </blockquote>
            ))}
          </div>
          <div className="bg-forest px-8 py-14 text-center text-ivory">
            <h2 className="font-display text-5xl uppercase tracking-[0.06em] text-gold">Buna House Rewards</h2>
            <p className="mx-auto mt-6 max-w-xl font-subhead text-2xl leading-8 text-ivory/78">
              Coffee. Culture. Community. Join for releases, gatherings, and member moments.
            </p>
            <GoldLink href="/rewards" className="mt-9 bg-forest">
              Join Now
            </GoldLink>
          </div>
        </section>

        <footer className="grid gap-10 bg-forest px-8 py-14 text-ivory lg:grid-cols-[1.1fr_3fr_1.3fr]">
          <div>
            <Wordmark />
            <p className="mt-6 max-w-xs text-sm leading-6 text-ivory/64">
              Coffee. Culture. Community. From Ethiopia to your cup.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              ["Shop", "/shop", "All Coffee", "Coffee Bundles", "Accessories"],
              ["Cafe & Market", "/market", "Cafe Menu", "Market", "Private Events"],
              ["Our Story", "/about", "Heritage", "Our Journey", "Sustainability"],
              ["Journal", "/journal", "Stories", "Brewing Guide", "News"]
            ].map(([title, href, ...items]) => (
              <div key={title}>
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">{title}</h3>
                <ul className="mt-5 grid gap-2">
                  {items.map((item) => (
                    <li key={item}>
                      <Link href={href} className="text-sm text-ivory/58 transition hover:text-ivory">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">Contact</h3>
            <p className="mt-5 text-sm leading-6 text-ivory/62">Columbia, Maryland</p>
            <Link href="/contact" className="mt-5 inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">Plan Your Visit</Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
