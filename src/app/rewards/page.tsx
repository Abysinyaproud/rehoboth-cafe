import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function RewardsPage() {
  return (
    <LaunchPageShell
      eyebrow="Rewards"
      title="Buna House Rewards"
      intro="A membership experience for coffee lovers, market regulars, and ceremony guests. Points, exclusive releases, and member perks will be added when the rewards program is finalized."
      primaryHref="/visit"
      primaryLabel="Join the List"
      secondaryHref="/coffee"
      secondaryLabel="Shop Coffee"
    />
  );
}
