import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export function LocationHours() {
  return (
    <Section
      id="location"
      tone="espresso"
      eyebrow="Visit Buna House"
      title="Make the visit easy. Make the memory linger."
      intro="The essentials are simple: full address, current public listing hours, one-tap directions, and a call button for anything that needs a human answer."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="min-h-[22rem] rounded-rehoboth border border-ivory/15 bg-ivory/8 p-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold/82">
            Columbia, Maryland
          </p>
          <div className="mt-16 max-w-sm">
            <p className="font-display text-4xl leading-[1.08]">Find Buna House on Snowden River Parkway.</p>
            <p className="mt-4 leading-7 text-ivory/65">
              {siteConfig.locationLabel}
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-5 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-gold/86 underline underline-offset-8"
            >
              Call {siteConfig.phoneLabel}
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            ["Hours", "Mon-Sat 10:00 AM-8:00 PM / Sun 10:00 AM-4:00 PM"],
            ["Market", "Injera bread, teff flour, spices, tea, coffee, and cultural goods"],
            ["Coffee", "Cafe mocha, macchiato, Americano, and Ethiopian coffee experiences"],
            ["Reviews", "Guest stories help new visitors choose Buna House with confidence"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-rehoboth border border-ivory/15 p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold/82">{label}</p>
              <p className="mt-2 text-lg text-ivory/78">{value}</p>
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={siteConfig.directionsUrl}
              className="border-ivory bg-ivory text-espresso hover:bg-white"
            >
              Get Directions
            </ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phone}`} variant="secondary" className="border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso">
              Call Buna House
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
