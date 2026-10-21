import type { MetadataRoute } from "next";
import { siteUrl } from "../src/config";

/* Necessario con output: export — dice a Next che il file è statico. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
