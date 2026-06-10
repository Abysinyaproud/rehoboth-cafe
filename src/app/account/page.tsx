import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function AccountPage() {
  return (
    <LaunchPageShell
      eyebrow="Account"
      title="Guest Account"
      intro="Customer accounts will support order history, rewards, saved details, and preferences once authentication is connected."
      primaryHref="/login"
      primaryLabel="Log In"
      secondaryHref="/register"
      secondaryLabel="Create Account"
    />
  );
}
