import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale, site } from "../../src/config";
import { translate } from "../../src/lib/translate";
import { LegalPage } from "../../src/components/LegalPage";
import { legalRoutes, findLegalRoute } from "../../src/lib/legal-routes";

/**
 * Pagine legali. Una rotta sola le copre tutte: gli slug arrivano da
 * `legalPages` in configurazione, quindi un cliente che deve aggiungere un
 * "Termini e condizioni" non ha bisogno di una nuova cartella.
 *
 * Le pagine con `externalUrl` non vengono generate: i collegamenti puntano
 * direttamente al documento del cliente.
 */
export function generateStaticParams() {
  return legalRoutes().map(({ slug }) => ({ legal: slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ legal: string }>;
}): Promise<Metadata> {
  const { legal } = await params;
  const page = findLegalRoute(legal);
  if (!page) return {};
  return {
    title: `${translate(page.title, defaultLocale)} | ${site.brand.prefix} ${site.brand.name}`,
    robots: { index: false },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const { legal } = await params;
  const page = findLegalRoute(legal);
  if (!page) notFound();
  return <LegalPage page={page} />;
}
