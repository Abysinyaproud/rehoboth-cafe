import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function RegisterPage() {
  return (
    <LaunchPageShell
      eyebrow="Register"
      title="Create an Account"
      intro="Registration will open when customer accounts and rewards are connected. For now, guests can explore coffee, ceremony, and cafe visits."
      primaryHref="/coffee"
      primaryLabel="Explore Coffee"
      secondaryHref="/visit"
      secondaryLabel="Plan a Visit"
    />
  );
}
