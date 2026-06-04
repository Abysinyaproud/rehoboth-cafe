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
  white: "bg-white text-espresso",
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
        "relative px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32",
        tones[tone],
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mb-12 max-w-3xl lg:mb-16">
            {eyebrow ? (
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <Heading className="font-display text-4xl leading-[0.98] sm:text-6xl lg:text-7xl">
                {title}
              </Heading>
            ) : null}
            {intro ? (
              <p className="mt-7 max-w-2xl text-base leading-8 text-current/72 sm:text-lg">
                {intro}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
