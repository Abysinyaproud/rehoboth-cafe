import Link from "next/link";
import { BunaEmblem } from "@/components/brand/BunaEmblem";

const leftNavigation = [
  { label: "Shop", href: "/shop" },
  { label: "Cafe & Market", href: "/market" },
  { label: "Our Story", href: "/about" }
];

const rightNavigation = [
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="site-shell-header sticky top-0 z-50 border-b border-gold/55 bg-forest/98 text-gold shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-[110rem] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-4 sm:px-7 lg:px-12">
        <nav aria-label="Primary navigation left" className="hidden items-center gap-4 sm:flex lg:gap-8">
          {leftNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="editorial-link text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold transition hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:text-[0.68rem]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="col-start-2 justify-self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label="Buna House home"
        >
          <span className="flex items-center gap-4">
            <BunaEmblem className="size-12 sm:size-14" />
            <span className="hidden text-left lg:block">
              <span className="block font-display text-xl uppercase leading-none tracking-[0.12em] text-gold">
                Buna House
              </span>
              <span className="mt-2 block font-subhead text-sm uppercase tracking-[0.14em] text-ivory/78">
                The House of Ethiopian Coffee
              </span>
            </span>
          </span>
        </Link>

        <div className="hidden items-center justify-end gap-4 sm:flex lg:gap-8">
          <nav aria-label="Primary navigation right" className="flex items-center gap-4 lg:gap-8">
            {rightNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="editorial-link text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold transition hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:text-[0.68rem]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/visit"
            className="luxury-button border border-gold/70 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold transition duration-300 hover:bg-gold hover:text-forest hover:shadow-[0_0_28px_rgba(176,138,68,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <span>Locations</span>
          </Link>
        </div>

        <details className="group relative col-start-3 justify-self-end sm:hidden">
          <summary className="luxury-button flex min-h-11 cursor-pointer list-none items-center border border-gold/70 px-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
            <span>Menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(86vw,22rem)] border border-gold/55 bg-forest p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <nav aria-label="Mobile navigation" className="grid gap-2">
              {[...leftNavigation, ...rightNavigation].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-3 text-base font-medium text-ivory/82 hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
