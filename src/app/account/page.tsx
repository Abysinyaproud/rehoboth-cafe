import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function AccountPage() {
  return (
    <LaunchPageShell
      eyebrow="Account Staging"
      title="Guest Experience"
      intro="Customer accounts are not active yet. Order history, rewards, saved details, and preferences will be available after authentication and commerce are connected."
      primaryHref="/visit"
      primaryLabel="Plan a Visit"
      secondaryHref="/coffee"
      secondaryLabel="Explore Coffee"
    />
  );
}
