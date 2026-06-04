import Link from "next/link";
import { footerNavigation, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-espresso px-5 pb-28 pt-16 text-ivory sm:px-8 md:pb-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em]">
            {siteConfig.name}
          </p>
          <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.02] sm:text-6xl">
            A Maryland coffee destination rooted in Ethiopian hospitality.
          </h2>
          <p className="mt-6 max-w-md leading-7 text-ivory/70">
            Single-origin beans, ceremony, community, and a curated market for
            the things worth bringing home.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                {group.title}
              </h3>
              <ul className="mt-5 grid gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/72 transition hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-ivory/15 pt-8 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
        <p>Columbia, Maryland</p>
        <p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {siteConfig.email}
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Rehoboth Ethiopian Coffee.</p>
      </div>
    </footer>
  );
}
