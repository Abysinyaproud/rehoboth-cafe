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
    <div className="rounded-rehoboth border border-espresso/10 bg-white p-7 shadow-subtle">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
        {eyebrow}
      </p>
      <h3 className="mt-5 font-display text-3xl leading-tight text-espresso">
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
