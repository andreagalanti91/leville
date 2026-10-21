import type { MetadataRoute } from "next";
import { site, siteUrl } from "../src/config";
import { accommodations } from "../src/lib/stay-routes";

/* Necessario con output: export — dice a Next che il file è statico. */
export const dynamic = "force-static";

/** Sitemap generata dalla configurazione: si aggiorna da sola. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  return [
    { url: base, priority: 1 },
    ...accommodations().map((stay) => ({
      url: `${base}/sistemazioni/${stay.slug}`,
      priority: 0.8,
    })),
    ...site.legalPages
      .filter((page) => !page.externalUrl)
      .map((page) => ({
        url: `${base}/${page.slug}`,
        priority: 0.2,
      })),
  ];
}
