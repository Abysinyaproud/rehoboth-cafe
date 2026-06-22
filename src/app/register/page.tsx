import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function RegisterPage() {
  return (
    <LaunchPageShell
      eyebrow="Registration Staging"
      title="Accounts Coming Soon"
      intro="Registration is intentionally disabled until customer accounts and rewards are connected. For now, guests can explore coffee, ceremony, market, and cafe visits."
      primaryHref="/coffee"
      primaryLabel="Explore Coffee"
      secondaryHref="/visit"
      secondaryLabel="Plan a Visit"
    />
  );
}
