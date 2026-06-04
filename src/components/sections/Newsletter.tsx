import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Newsletter() {
  return (
    <Section
      tone="ivory"
      eyebrow="Newsletter"
      title="Stay close to the ritual."
      intro="Join the Rehoboth list for coffee releases, ceremony dates, market arrivals, and community updates."
    >
      <form className="grid max-w-2xl gap-3 sm:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Email address"
          className="min-h-12 rounded-rehoboth border border-espresso/18 bg-white px-4 text-espresso outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
        />
        <Button type="submit">Join the List</Button>
      </form>
      <p className="mt-4 max-w-xl text-sm leading-6 text-ink/60">
        Thoughtful updates only. Coffee, ceremony, events, and market news when
        there is something worth sharing.
      </p>
    </Section>
  );
}
