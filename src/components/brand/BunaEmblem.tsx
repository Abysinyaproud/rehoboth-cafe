import Image from "next/image";
import { brandImages } from "@/config/brand-assets";
import { cn } from "@/lib/utils";

type BunaEmblemProps = {
  className?: string;
  label?: string;
};

export function BunaEmblem({ className, label = "Buna House" }: BunaEmblemProps) {
  return (
    <span
      className={cn(
        "relative inline-grid overflow-hidden rounded-full border border-gold/70 bg-forest text-gold shadow-[0_0_0_1px_rgba(244,233,216,0.08)]",
        className
      )}
      aria-label={label}
      role="img"
    >
      <Image
        src={brandImages.kitLogo}
        alt=""
        fill
        sizes="96px"
        className="object-cover"
      />
    </span>
  );
}
