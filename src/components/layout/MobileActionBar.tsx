import Link from "next/link";

const actions = [
  { label: "Directions", href: "/visit#directions" },
  { label: "Coffee", href: "/coffee" },
  { label: "Ceremony", href: "/ceremony" },
  { label: "Email", href: "mailto:hello@rehobothethiopiancoffee.com" }
];

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-espresso/10 bg-ivory/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-16px_50px_rgba(20,17,15,0.08)] backdrop-blur-xl md:hidden"
    >
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className="min-h-12 rounded-rehoboth px-2 py-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-espresso/78 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
        >
          {action.label}
        </Link>
      ))}
    </nav>
  );
}
