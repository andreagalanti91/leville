import type { NextConfig } from "next";

/**
 * Due modalità di pubblicazione:
 *
 *  - STATIC_EXPORT=true  -> cartella dist/<id>/ da caricare su un hosting
 *                           normale (Apache, Nginx, spazio web condiviso).
 *                           È la modalità da usare per vendere il sito a un
 *                           agriturismo: nessun server Node da gestire.
 *
 *  - senza la variabile   -> applicazione Next completa, con ottimizzazione
 *                           delle immagini lato server.
 *
 * NOINDEX=true va usato per ogni anteprima pubblica (GitHub Pages, sottodomini
 * di prova): il sito dichiara ai motori di ricerca di non indicizzarlo.
 *
 * BASE_PATH serve quando il sito NON sta nella radice del dominio ma dentro
 * una sottocartella:
 *
 *    https://esempio.it            ->  BASE_PATH vuoto
 *    https://esempio.it/demo       ->  BASE_PATH=/demo
 *
 * Tutti i collegamenti del sito sono assoluti, quindi senza questa
 * indicazione la sottocartella verrebbe ignorata e le pagine cercherebbero
 * i file nella radice.
 */
const staticExport = process.env.STATIC_EXPORT === "true";

/* Normalizza: deve iniziare con "/" e non finire con "/". */
const rawBasePath = (process.env.BASE_PATH ?? "").trim().replace(/\/+$/, "");
const basePath =
  rawBasePath && !rawBasePath.startsWith("/") ? `/${rawBasePath}` : rawBasePath;

const nextConfig: NextConfig = {
  output: staticExport ? "export" : undefined,
  trailingSlash: staticExport,
  basePath: basePath || undefined,
  images: {
    qualities: [75, 95],
    unoptimized: staticExport,
  },
  env: {
    /* Resi disponibili al codice client. */
    NEXT_PUBLIC_SITE_ID: process.env.SITE_ID ?? "le-ville",
    NEXT_PUBLIC_BASE_PATH: basePath,
    /* Dominio pubblico. Se assente si usa quello in configurazione. */
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL ?? "",
    /* NOINDEX=true per le anteprime di lavoro: chiede ai motori di ricerca
       di non indicizzarle (robots.txt e meta robots). */
    NEXT_PUBLIC_NOINDEX: process.env.NOINDEX === "true" ? "true" : "",
  },
};

export default nextConfig;
