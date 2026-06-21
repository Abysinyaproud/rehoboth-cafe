import Link from "next/link";
import { BunaEmblem } from "@/components/brand/BunaEmblem";
import { siteConfig } from "@/config/site";

const footerGroups = [
  {
    title: "Shop",
    href: "/shop",
    links: ["All Coffee", "Coffee Bundles", "Accessories", "Gift Cards"]
  },
  {
    title: "Cafe & Market",
    href: "/market",
    links: ["Cafe Menu", "Market", "Private Events"]
  },
  {
    title: "Our Story",
    href: "/about",
    links: ["Heritage", "Our Journey", "Sustainability"]
  },
  {
    title: "Journal",
    href: "/journal",
    links: ["Stories", "Brewing Guide", "News"]
  }
];

export function SiteFooter() {
  return (
    <footer className="site-shell-footer material-section material-section-dark bg-forest px-5 pb-28 pt-16 text-ivory sm:px-8 md:pb-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_2.4fr_1fr]">
        <div>
          <BunaEmblem className="size-24" />
          <h2 className="mt-6 font-display text-2xl uppercase leading-tight tracking-[0.08em] text-gold">
            Buna House
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-ivory/62">
            The House of Ethiopian Coffee. Coffee. Culture. Community.
          </p>
          <div className="mt-6 flex gap-4 text-sm text-gold" aria-label="Social links">
            <Link href={siteConfig.socials.instagram}>Instagram</Link>
            <Link href={siteConfig.socials.instagram}>Facebook</Link>
            <Link href={siteConfig.socials.instagram}>TikTok</Link>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
                {group.title}
              </h3>
              <ul className="mt-5 grid gap-2.5">
                {group.links.map((label) => (
                  <li key={label}>
                    <Link
                      href={group.href}
                      className="text-sm text-ivory/58 transition hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Contact
          </h3>
          <p className="mt-5 text-sm leading-7 text-ivory/62">{siteConfig.locationLabel}</p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-4 block text-sm text-ivory/70 transition hover:text-ivory"
          >
            {siteConfig.phoneLabel}
          </a>
          <div className="luxury-card mt-6 border border-gold/38 p-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Hours
            </p>
            {siteConfig.hours.map((item) => (
              <p key={item.days} className="mt-3 text-sm text-ivory/62">
                {item.days}: {item.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-gold/45 pt-6 text-[0.68rem] uppercase tracking-[0.12em] text-ivory/48 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {siteConfig.listingName}. All rights reserved.</p>
        <p>Privacy Policy&nbsp;&nbsp;&nbsp; Terms of Service</p>
      </div>
    </footer>
  );
}
