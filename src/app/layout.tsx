import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@/components/content/Analytics";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/content/JsonLd";
import { brandImages } from "@/config/brand-assets";
import { siteConfig } from "@/config/site";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-subhead",
  weight: ["400", "500", "600"],
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  icons: {
    icon: brandImages.kitLogo,
    shortcut: brandImages.kitLogo,
    apple: brandImages.kitLogo
  },
  keywords: [
    "Buna House",
    "Ethiopian coffee Maryland",
    "Ethiopian coffee Columbia MD",
    "specialty coffee Columbia MD",
    "coffee ceremony Maryland",
    "Ethiopian cafe Maryland",
    "Ethiopian market Maryland",
    "coffee shop Columbia MD",
    "injera Columbia MD",
    "teff flour Columbia MD"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${cormorant.variable} ${inter.variable}`}>
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
