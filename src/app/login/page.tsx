import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function LoginPage() {
  return (
    <LaunchPageShell
      eyebrow="Login"
      title="Welcome Back"
      intro="Account login is staged for launch. Connect the chosen authentication provider before enabling customer sessions."
      primaryHref="/account"
      primaryLabel="Account"
      secondaryHref="/register"
      secondaryLabel="Register"
    />
  );
}
