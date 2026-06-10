import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2";
  tone?: "ivory" | "white" | "espresso" | "forest";
};

const tones = {
  ivory: "bg-ivory text-espresso",
  white: "bg-[#fbf7ef] text-espresso",
  espresso: "bg-espresso text-ivory",
  forest: "bg-forest text-ivory"
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  headingLevel = "h2",
  tone = "ivory"
}: SectionProps) {
  const Heading = headingLevel;

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border-b border-gold/20 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32",
        tones[tone],
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            {eyebrow ? (
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold">
                {eyebrow}
              </p>
            ) : null}
            <div>
              {title ? (
                <Heading className="max-w-5xl font-display text-4xl uppercase leading-[0.96] tracking-[0.035em] sm:text-5xl lg:text-6xl">
                  {title}
                </Heading>
              ) : null}
              {intro ? (
                <p className="mt-7 max-w-2xl text-base leading-8 text-current/66 sm:text-[1.05rem]">
                  {intro}
                </p>
              ) : null}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
