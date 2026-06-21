import { ButtonLink } from "@/components/ui/Button";

type EmptyStateProps = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function EmptyState({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref
}: EmptyStateProps) {
  return (
    <div className="luxury-card border border-gold/22 bg-[#fbf7ef] p-7 shadow-subtle transition duration-300 ease-luxury hover:border-gold/45 sm:p-8">
      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-gold">
        {eyebrow}
      </p>
      <h3 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.02] tracking-[0.035em] text-espresso">
        {title}
      </h3>
      <p className="mt-4 max-w-xl leading-7 text-ink/68">{body}</p>
      {ctaLabel && ctaHref ? (
        <div className="mt-6">
          <ButtonLink href={ctaHref} variant="text">
            {ctaLabel}
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
