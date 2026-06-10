import { LaunchPageShell } from "@/components/ui/LaunchPageShell";

export default function JournalPage() {
  return (
    <LaunchPageShell
      eyebrow="Journal"
      title="Stories Brewing Soon"
      intro="The Buna House journal will share Ethiopian coffee education, brewing notes, market features, ceremony stories, and community updates."
      primaryHref="/coffee"
      primaryLabel="Explore Coffee"
      secondaryHref="/about"
      secondaryLabel="Our Story"
    />
  );
}
