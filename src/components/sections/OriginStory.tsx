import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { coffeexImages } from "@/config/brand-assets";
import { originMoments } from "@/data/content";

export function OriginStory() {
  return (
    <Section
      eyebrow="Why Ethiopia"
      title="Before coffee was a habit, it was a place."
      intro="Buna House treats Ethiopia as the beginning of the story: coffee, ceremony, food staples, market goods, and welcome held together in one Columbia destination."
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionReveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-brand bg-stone shadow-subtle">
            <Image
              src={coffeexImages.founderRoasterFull.src}
              alt={coffeexImages.founderRoasterFull.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className={`object-contain ${coffeexImages.founderRoasterFull.positionClassName} bg-[#e8ddcb] saturate-[0.9] contrast-[1.04]`}
            />
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="max-w-2xl lg:pl-10">
            <p className="font-display text-4xl leading-[1.08] text-espresso sm:text-5xl">
              Coffee at the counter, injera and teff flour on the shelf, spices
              for the kitchen, and the warmth of being received.
            </p>
            <p className="mt-6 leading-8 text-ink/70">
              Buna House is strongest when the experience feels connected: drink
              the coffee, learn the origin, ask about ceremony, and take
              something home for the next table.
            </p>
            <div className="mt-8 grid gap-3">
              {originMoments.map((moment) => (
                <div
                  key={moment.label}
                  className="grid gap-2 border-t border-espresso/12 py-4 sm:grid-cols-[8rem_1fr]"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-clay/80">
                    {moment.label}
                  </p>
                  <p className="leading-7 text-espresso/78">{moment.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="text">
                Read the Buna House Story
              </ButtonLink>
            </div>
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}
