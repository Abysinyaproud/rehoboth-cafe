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
        "relative overflow-hidden rounded-rehoboth border p-6",
        isDark
          ? "border-ivory/15 bg-ivory/8 text-ivory"
          : "border-espresso/10 bg-stone/40 text-espresso",
        className
      )}
    >
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
            "text-xs font-semibold uppercase tracking-[0.2em]",
            isDark ? "text-gold" : "text-clay"
          )}
        >
          {label}
        </p>
        <h3 className="mt-5 max-w-md font-display text-4xl leading-[1.02]">
          {title}
        </h3>
        <p className="mt-4 max-w-md leading-7 opacity-72">{body}</p>
      </div>
    </div>
  );
}
