import Link from "next/link";

type LaunchPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  children?: React.ReactNode;
};

export function LaunchPageShell({
  eyebrow,
  title,
  intro,
  primaryHref = "/",
  primaryLabel = "Return Home",
  secondaryHref = "/visit",
  secondaryLabel = "Plan a Visit",
  children
}: LaunchPageShellProps) {
  return (
    <section className="material-section material-section-dark bg-forest px-6 py-24 text-ivory sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl break-words font-display text-[clamp(3.2rem,15vw,6rem)] uppercase leading-[0.95] tracking-[0.03em] text-gold [overflow-wrap:anywhere] md:text-8xl md:tracking-[0.04em]">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/72">{intro}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="luxury-button inline-flex min-h-12 items-center justify-center border border-gold bg-forest px-7 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-espresso"
          >
            <span>{primaryLabel}</span>
          </Link>
          <Link
            href={secondaryHref}
            className="luxury-button inline-flex min-h-12 items-center justify-center border border-gold/70 px-7 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-espresso"
          >
            <span>{secondaryLabel}</span>
          </Link>
        </div>
        {children ? <div className="mt-16">{children}</div> : null}
      </div>
    </section>
  );
}
