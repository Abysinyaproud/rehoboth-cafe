import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-espresso text-ivory">
      <Image
        src="/brand/images/hero-jebena-ceremony.png"
        alt="Ethiopian coffee ceremony with jebena coffee, steam, and roasted beans"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.56] saturate-[0.9] contrast-[1.04]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,21,17,0.94),rgba(26,21,17,0.56)_48%,rgba(26,21,17,0.78)),linear-gradient(180deg,rgba(26,21,17,0.2),rgba(26,21,17,0.84))]" />
      <div className="absolute inset-0 opacity-[0.1] mix-blend-soft-light texture" />
      <div className="absolute left-5 top-24 hidden h-36 w-px bg-gold/55 sm:left-8 lg:left-12 lg:block" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-espresso to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-7xl flex-col justify-end px-5 pb-8 pt-24 sm:px-8 lg:px-12">
        <div className="max-w-5xl pb-10 sm:pb-14">
          <p className="mb-7 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold/90">
            {siteConfig.amharicName} / Buna House Cafe & Market
          </p>
          <h1 className="max-w-5xl font-display text-[clamp(3.65rem,11vw,8.4rem)] leading-[0.94]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-ivory/74 sm:text-xl">
            Ethiopian coffee, cafe favorites, traditional coffee experience,
            injera, teff flour, spices, tea, and cultural goods in Columbia,
            Maryland. Come for a cup. Leave with a reason to bring someone back.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/visit">Plan This Weekend</ButtonLink>
            <ButtonLink
              href="/coffee"
              variant="secondary"
              className="border-ivory/55 text-ivory hover:bg-ivory hover:text-espresso"
            >
              Choose Your Coffee
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 border-t border-ivory/14 pt-6 text-sm leading-6 text-ivory/62 sm:grid-cols-3">
          {[
            ["Visit today", `${siteConfig.address.street}, Columbia, MD`],
            ["Cafe & market", "Coffee, tea, injera, teff flour, spices, and cultural goods"],
            ["Hours", "Mon-Sat 10 AM-8 PM / Sun 10 AM-4 PM"]
          ].map(([label, text]) => (
            <p key={label} className="max-w-sm">
              <span className="mb-1 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-gold/86">{label}</span>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
