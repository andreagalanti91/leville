import type { MetadataRoute } from "next";
import { noIndex, siteUrl } from "../src/config";

/* Necessario con output: export — dice a Next che il file è statico. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  /* Anteprima di lavoro: nessun motore di ricerca deve indicizzarla. */
  if (noIndex) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
