import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  title: string;
  body: string;
  className?: string;
  tone?: "light" | "dark";
};

export function MediaPlaceholder({
  label,
  title,
  body,
  className,
  tone = "light"
}: MediaPlaceholderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden border p-7 shadow-subtle sm:p-8",
        isDark
          ? "border-ivory/15 bg-ivory/8 text-ivory"
          : "border-gold/22 bg-[#fbf7ef] text-espresso",
        className
      )}
    >
      <div className="absolute right-0 top-0 h-16 w-px bg-gold/50" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-px w-16 bg-gold/50" aria-hidden="true" />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 texture opacity-60",
          isDark ? "mix-blend-screen" : "mix-blend-multiply"
        )}
      />
      <div className="relative flex min-h-full flex-col justify-end">
        <p
          className={cn(
            "text-[0.68rem] font-semibold uppercase tracking-[0.15em]",
            isDark ? "text-gold" : "text-gold"
          )}
        >
          {label}
        </p>
        <h3 className="mt-5 max-w-md font-display text-3xl uppercase leading-[1.02] tracking-[0.035em] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md leading-7 opacity-72">{body}</p>
      </div>
    </div>
  );
}
