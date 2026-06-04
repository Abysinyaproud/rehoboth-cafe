import type { Metadata } from "next";
import { Analytics } from "@/components/content/Analytics";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/content/JsonLd";
import { siteConfig } from "@/config/site";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Ethiopian coffee Maryland",
    "Ethiopian coffee Columbia MD",
    "specialty coffee Columbia MD",
    "coffee ceremony Maryland",
    "Ethiopian cafe Maryland",
    "Ethiopian market Maryland",
    "coffee shop Columbia MD"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={localBusinessSchema()} />
        <Analytics />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
