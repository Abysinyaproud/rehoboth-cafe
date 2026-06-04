import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-ivory/94 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link
          href="/"
          className="max-w-[12rem] font-sans text-sm font-semibold uppercase leading-tight tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
          aria-label={`${siteConfig.name} home`}
        >
          Rehoboth
          <span className="block text-[0.64rem] font-medium tracking-[0.24em] text-clay">
            Ethiopian Coffee
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-espresso/68 transition hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="/coffee" variant="secondary" className="min-h-10 px-4 py-2">
            Choose Coffee
          </ButtonLink>
          <ButtonLink href="/visit" className="min-h-10 px-4 py-2">
            Plan Visit
          </ButtonLink>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-rehoboth border border-espresso/20 px-4 text-sm font-semibold uppercase tracking-[0.14em] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-[min(86vw,22rem)] rounded-rehoboth border border-espresso/10 bg-ivory p-5 shadow-subtle">
            <nav aria-label="Mobile navigation" className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-rehoboth px-3 py-3 text-lg font-medium hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <ButtonLink href="/coffee" variant="secondary">
                Shop
              </ButtonLink>
              <ButtonLink href="/visit">Visit</ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
