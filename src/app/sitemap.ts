import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = ["", "/coffee", "/ceremony", "/market", "/about", "/visit"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
