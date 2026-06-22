import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function Newsletter() {
  return (
    <Section
      tone="ivory"
      eyebrow="Newsletter"
      title="Stay close to the ritual."
      intro="Newsletter signup is in staging. Until the email platform is connected, this form opens an email draft so guests can request updates directly."
    >
      <form
        action={`mailto:${siteConfig.email}`}
        className="grid max-w-2xl gap-3 sm:grid-cols-[1fr_auto]"
      >
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="min-h-12 rounded-brand border border-espresso/14 bg-white/70 px-4 text-sm text-espresso outline-none transition placeholder:text-espresso/38 focus:border-forest focus:ring-2 focus:ring-forest/14"
        />
        <Button type="submit">Email to Join</Button>
      </form>
      <p className="mt-4 max-w-xl text-sm leading-6 text-ink/60">
        No automated marketing email is sent from the website yet. Coffee,
        ceremony, events, and market news can be enabled once the newsletter
        provider is connected.
      </p>
    </Section>
  );
}
