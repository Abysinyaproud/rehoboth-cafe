import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function RewardsPage() {
  return (
    <LaunchPageShell
      eyebrow="Rewards Staging"
      title="Rewards Coming Soon"
      intro="The Buna House rewards program is not active yet. Points, exclusive releases, and member perks will be available after the program rules and signup flow are finalized."
      primaryHref="/visit"
      primaryLabel="Plan a Visit"
      secondaryHref="/coffee"
      secondaryLabel="Explore Coffee"
    />
  );
}
