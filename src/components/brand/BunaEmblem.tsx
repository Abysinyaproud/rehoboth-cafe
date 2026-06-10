import { cn } from "@/lib/utils";

type BunaEmblemProps = {
  className?: string;
  label?: string;
};

export function BunaEmblem({ className, label = "Buna House" }: BunaEmblemProps) {
  return (
    <span
      className={cn(
        "inline-grid place-items-center border border-gold/70 bg-forest text-gold",
        className
      )}
      aria-label={label}
      role="img"
    >
      <svg viewBox="0 0 96 96" aria-hidden="true" className="h-[72%] w-[72%]">
        <path
          d="M28 63h34c6 0 10-4 10-10 0-5.2-3.5-8.9-8.8-9.8V36c0-10.3-8.1-18.8-18.2-18.8S26.8 25.7 26.8 36v7.2C21.5 44.1 18 47.8 18 53c0 6 4 10 10 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M35 37c6.8-7.2 14.2-7.2 21 0M31 73h34"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
