import Link from "next/link";
import { BunaEmblem } from "@/components/brand/BunaEmblem";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  inverse?: boolean;
  className?: string;
};

export function BrandMark({ inverse = false, className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        inverse ? "focus-visible:outline-gold" : "focus-visible:outline-forest",
        className
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <BunaEmblem className="size-12 shrink-0" />
      <span className="min-w-0">
        <span
          className={cn(
            "block font-display text-[1.05rem] uppercase leading-tight tracking-[0.14em]",
            inverse ? "text-ivory" : "text-espresso"
          )}
        >
          Buna House
        </span>
        <span
          className={cn(
            "mt-1 block font-subhead text-[0.78rem] uppercase tracking-[0.18em]",
            inverse ? "text-gold/88" : "text-forest/82"
          )}
        >
          The House of Ethiopian Coffee
        </span>
      </span>
    </Link>
  );
}
