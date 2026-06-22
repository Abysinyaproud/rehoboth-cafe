import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function LoginPage() {
  return (
    <LaunchPageShell
      eyebrow="Account Staging"
      title="Accounts Coming Soon"
      intro="Customer login is not active yet. Account access will open after authentication, customer profiles, and order history are connected for production."
      primaryHref="/visit"
      primaryLabel="Plan a Visit"
      secondaryHref="/coffee"
      secondaryLabel="Explore Coffee"
    />
  );
}
