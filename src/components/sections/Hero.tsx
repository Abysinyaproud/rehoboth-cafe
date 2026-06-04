import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-73px)] overflow-hidden bg-espresso text-ivory">
      <Image
        src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2200&q=90"
        alt="Coffee being prepared in a warm, cinematic cafe setting"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.5] saturate-[0.9]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(198,161,91,0.18),transparent_28%),linear-gradient(90deg,rgba(20,17,15,0.92),rgba(20,17,15,0.52)_48%,rgba(20,17,15,0.74))]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-espresso to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-7xl flex-col justify-end px-5 pb-8 pt-24 sm:px-8 lg:px-12">
        <div className="max-w-5xl pb-10 sm:pb-14">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Maryland&apos;s Ethiopian coffee destination
          </p>
          <h1 className="max-w-4xl font-display text-6xl leading-[0.88] sm:text-8xl lg:text-9xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/82 sm:text-xl">
            Come for Ethiopian coffee with origin, ceremony, and hospitality in
            the room. Leave with a bag of beans, a slower afternoon, and a reason
            to bring someone back.
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

        <div className="grid gap-3 border-t border-ivory/20 pt-5 text-sm text-ivory/74 sm:grid-cols-3">
          {[
            ["Weekend pull", "Coffee, ceremony, market, and a room worth lingering in"],
            ["Columbia, MD", "A local destination for Ethiopian specialty coffee"],
            ["Bring home", "Single-origin beans, subscriptions, honey, spices, and gifts"]
          ].map(([label, text]) => (
            <p key={label} className="max-w-sm">
              <span className="block font-semibold text-ivory">{label}</span>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
