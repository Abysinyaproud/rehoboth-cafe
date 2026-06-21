import Link from "next/link";
import { siteConfig } from "@/config/site";

const actions = [
  { label: "Directions", href: siteConfig.directionsUrl },
  { label: "Coffee", href: "/coffee" },
  { label: "Ceremony", href: "/ceremony" },
  { label: "Call", href: `tel:${siteConfig.phone}` }
];

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="site-mobile-action fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-gold/32 bg-forest/96 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-18px_70px_rgba(8,20,18,0.34)] backdrop-blur-xl md:hidden"
    >
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className="min-h-12 px-2 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ivory/72 transition duration-300 ease-luxury hover:bg-gold/10 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {action.label}
        </Link>
      ))}
    </nav>
  );
}
