import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { originMoments } from "@/data/content";

export function OriginStory() {
  return (
    <Section
      eyebrow="Why Ethiopia"
      title="Before coffee was a habit, it was a place."
      intro="Rehoboth treats Ethiopia as the beginning of the story: origin, flavor, ceremony, and welcome all held together in one destination."
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionReveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-rehoboth bg-stone shadow-subtle">
            <Image
              src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=1400&q=85"
              alt="Coffee beans held by hand"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="max-w-2xl lg:pl-10">
            <p className="font-display text-4xl leading-[1.02] text-espresso sm:text-5xl">
              Bright single-origin beans, the smoke and patience of ceremony,
              and the warmth of being received.
            </p>
            <p className="mt-6 leading-8 text-ink/70">
              The site now makes that sequence clearer: taste the coffee, learn
              the origin, gather for ceremony, and take a piece of the ritual
              home through beans and market goods.
            </p>
            <div className="mt-8 grid gap-3">
              {originMoments.map((moment) => (
                <div
                  key={moment.label}
                  className="grid gap-2 border-t border-espresso/12 py-4 sm:grid-cols-[8rem_1fr]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                    {moment.label}
                  </p>
                  <p className="leading-7 text-espresso/78">{moment.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="text">
                Read the Rehoboth Story
              </ButtonLink>
            </div>
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}
