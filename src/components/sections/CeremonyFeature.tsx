import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CeremonyFeature() {
  return (
    <Section id="ceremony" tone="forest" className="overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="relative aspect-[16/11] overflow-hidden rounded-rehoboth bg-espresso">
          <Image
            src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1600&q=85"
            alt="Coffee ceremony and gathering table"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover opacity-90"
          />
        </div>
        <div>
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold/82">
            Coffee ceremony
          </p>
          <h2 className="font-display text-4xl leading-[1.08] sm:text-5xl">
            A ceremony that makes the room slow down.
          </h2>
          <p className="mt-6 leading-8 text-ivory/75">
            Roasting, grinding, brewing, serving, and conversation become one
            act of hospitality. Ask about traditional Ethiopian coffee
            experiences during your visit or call ahead for group interest.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/visit" className="border-ivory bg-ivory text-espresso hover:bg-white">
              Plan a Visit
            </ButtonLink>
            <ButtonLink href="/about" variant="secondary" className="border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso">
              Understand the Ritual
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
