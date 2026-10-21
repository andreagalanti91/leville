/**
 * VALIDAZIONE DI UN CLIENTE
 * =========================
 *
 *   SITE_ID=nerbona npm run validate
 *   npm run validate            (controlla tutti i clienti registrati)
 *
 * Serve a rispondere in due secondi a "questo sito è pronto?", senza dover
 * rileggere novecento righe di configurazione.
 *
 * Controlla:
 *   - ogni foto e video citati esistono davvero su disco
 *   - non sono rimasti segnaposto TODO
 *   - ogni testo è tradotto in tutte le lingue dichiarate
 *   - le voci di navigazione puntano a sezioni che esistono
 *   - gli slug delle sistemazioni sono unici e validi per una URL
 *   - i contatti hanno un formato plausibile
 *   - segnala i casi che il CSS non copre (più di tre esperienze,
 *     molte sistemazioni nel carosello)
 *
 * Esce con codice 1 se trova errori, così si può usare in automatico.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/* ---------------------------------------------------------------- */
/* Caricamento della configurazione                                  */
/* ---------------------------------------------------------------- */

/* I file dei clienti sono TypeScript. Li leggiamo passando dal
   compilatore che Next già include, così non serve nessuno strumento
   aggiuntivo. */
async function loadTenant(id) {
  const ts = require("typescript");
  const entry = path.resolve("tenants", id, "site.ts");
  const source = fs.readFileSync(entry, "utf8");

  /* Toglie l'import dei tipi: a runtime non servono e punterebbe a un
     altro file TypeScript. */
  const stripped = source.replace(
    /import\s+type\s+\{[^}]*\}\s+from\s+["'][^"']*["'];?/g,
    "",
  );

  const js = ts.transpileModule(stripped, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText;

  const tmp = path.resolve("tenants", id, `.site.validate.mjs`);
  fs.writeFileSync(tmp, js);
  try {
    return (await import(pathToFileURL(tmp).href + `?t=${Date.now()}`)).default;
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

/* ---------------------------------------------------------------- */
/* Controlli                                                         */
/* ---------------------------------------------------------------- */

function validate(id, site) {
  const errors = [];
  const warnings = [];
  const mediaDir = path.resolve("public", "tenants", id);

  const err = (msg) => errors.push(msg);
  const warn = (msg) => warnings.push(msg);

  /* --- media citati ma inesistenti ------------------------------- */

  const seenMedia = new Set();
  const missingMedia = new Set();
  const checkMedia = (value, where) => {
    if (typeof value !== "string" || !value) return;
    if (seenMedia.has(value + where)) return;
    seenMedia.add(value + where);
    const file = path.join(mediaDir, value);
    if (!fs.existsSync(file)) {
      missingMedia.add(value);
      err(`${where}: file mancante — public/tenants/${id}/${value}`);
    }
  };

  /* Percorre l'intera configurazione cercando: campi che sembrano media,
     testi tradotti incompleti, e segnaposto rimasti. */
  const MEDIA_KEYS = new Set([
    "logo", "src", "cover", "detail", "image", "desktop", "mobile", "poster", "ogImage",
  ]);
  const MEDIA_EXT = /\.(webp|jpe?g|png|avif|mp4|webm|svg|gif)$/i;

  const localeSet = new Set(site.locales ?? []);

  function isLocalized(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return false;
    const keys = Object.keys(value);
    return keys.length > 0 && keys.every((k) => typeof value[k] === "string") &&
      keys.some((k) => localeSet.has(k));
  }

  function walk(node, trail) {
    if (typeof node === "string") {
      if (/\bTODO\b/.test(node)) err(`${trail}: segnaposto TODO non sostituito`);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach((item, i) => walk(item, `${trail}[${i}]`));
      return;
    }
    if (!node || typeof node !== "object") return;

    if (isLocalized(node)) {
      for (const locale of site.locales) {
        const text = node[locale];
        if (typeof text !== "string" || !text.trim()) {
          err(`${trail}: manca la traduzione "${locale}"`);
        } else if (/\bTODO\b/.test(text)) {
          err(`${trail}.${locale}: segnaposto TODO non sostituito`);
        }
      }
      const extra = Object.keys(node).filter((k) => !localeSet.has(k));
      if (extra.length) warn(`${trail}: lingue non dichiarate in locales — ${extra.join(", ")}`);
      return;
    }

    for (const [key, value] of Object.entries(node)) {
      const next = trail ? `${trail}.${key}` : key;
      if (typeof value === "string" && (MEDIA_KEYS.has(key) || MEDIA_EXT.test(value))) {
        if (!/^https?:/.test(value)) checkMedia(value, next);
      }
      walk(value, next);
    }
  }

  walk(site, "");

  /* --- gallerie -------------------------------------------------- */

  for (const stay of site.accommodations ?? []) {
    (stay.gallery ?? []).forEach((image, i) =>
      checkMedia(image, `accommodations[${stay.slug}].gallery[${i}]`),
    );
  }

  /* --- navigazione ----------------------------------------------- */

  const sectionIds = new Set((site.sections ?? []).map((s) => s.id));
  for (const item of site.nav ?? []) {
    if (!sectionIds.has(item.target)) {
      err(`nav: "${item.target}" non corrisponde a nessuna sezione`);
    }
  }

  /* Ancore interne usate dai pulsanti. */
  const anchors = [];
  const collectAnchors = (node, trail) => {
    if (!node || typeof node !== "object") return;
    for (const [key, value] of Object.entries(node)) {
      if ((key === "href" || key === "ctaHref") && typeof value === "string" && value.startsWith("#")) {
        anchors.push([value.slice(1), trail ? `${trail}.${key}` : key]);
      } else if (typeof value === "object") {
        collectAnchors(value, trail ? `${trail}.${key}` : key);
      }
    }
  };
  collectAnchors(site, "");
  for (const [target, where] of anchors) {
    if (!sectionIds.has(target)) err(`${where}: l'ancora "#${target}" non punta a nessuna sezione`);
  }

  /* --- sistemazioni ---------------------------------------------- */

  const slugs = new Set();
  for (const stay of site.accommodations ?? []) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(stay.slug)) {
      err(`accommodations: slug non valido per una URL — "${stay.slug}"`);
    }
    if (slugs.has(stay.slug)) err(`accommodations: slug duplicato — "${stay.slug}"`);
    slugs.add(stay.slug);
    if (!stay.gallery?.length) warn(`accommodations[${stay.slug}]: galleria vuota`);
  }

  /* --- sezioni --------------------------------------------------- */

  const types = (site.sections ?? []).map((s) => s.type);
  if (types.filter((t) => t === "hero").length !== 1) {
    err("sections: serve esattamente una sezione di tipo hero");
  }
  if (types[0] !== "hero") err("sections: la sezione hero deve essere la prima");

  const duplicatedIds = sectionIds.size !== (site.sections ?? []).length;
  if (duplicatedIds) err("sections: ci sono id ripetuti");

  if (types.includes("stays") && !(site.accommodations ?? []).length) {
    err("sections: c'è la sezione sistemazioni ma l'elenco accommodations è vuoto");
  }
  if ((site.accommodations ?? []).length && !site.stayPage) {
    err("stayPage: mancano i testi della pagina di dettaglio degli alloggi");
  }

  const menu = (site.sections ?? []).find((s) => s.type === "menu");
  if (menu && !menu.courses?.length && !menu.documents?.length) {
    err("sezione menu: serve almeno un estratto (courses) o un documento (documents)");
  }

  /* --- limiti noti del CSS --------------------------------------- */

  const experiences = (site.sections ?? []).find((s) => s.type === "experiences");
  if (experiences && experiences.items.length > 3) {
    warn(
      `esperienze: sono ${experiences.items.length}. Il CSS dà un'inquadratura ` +
        `dedicata solo alle prime tre (.exp-card-1/2/3): dalla quarta in poi ` +
        `servono le regole in src/styles/parts/09-experiences.css`,
    );
  }

  const stayCount = (site.accommodations ?? []).length;
  if (stayCount > 12) {
    warn(
      `sistemazioni: sono ${stayCount}. Il carosello le mostra tutte, ma su ` +
        `desktop la sezione diventa molto lunga da scorrere. Valuta di ` +
        `mostrarne meno o di dividerle per struttura usando il campo category.`,
    );
  }

  /* --- contatti e SEO -------------------------------------------- */

  if (!/^\d{8,15}$/.test(site.contact?.phone ?? "")) {
    err(`contact.phone: deve essere solo cifre, formato internazionale senza "+" — trovato "${site.contact?.phone}"`);
  }
  if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(site.contact?.email ?? "")) {
    err(`contact.email: indirizzo non valido — "${site.contact?.email}"`);
  }
  const { lat, lng } = site.contact?.coordinates ?? {};
  if (!lat || !lng) err("contact.coordinates: coordinate mancanti o a zero");

  if (!/^https?:\/\//.test(site.seo?.domain ?? "")) {
    err(`seo.domain: deve iniziare con http:// o https:// — "${site.seo?.domain}"`);
  }
  if ((site.seo?.domain ?? "").endsWith("/")) {
    err("seo.domain: non deve finire con /");
  }
  for (const locale of site.locales ?? []) {
    const description = site.seo?.description?.[locale];
    if (description && description.length > 160) {
      warn(`seo.description.${locale}: ${description.length} caratteri, oltre i 160 consigliati`);
    }
  }

  if (site.booking) {
    if (!/^https:\/\//.test(site.booking.url)) {
      err("booking.url: deve iniziare con https://");
    }
    for (const locale of site.locales ?? []) {
      if (!site.booking.label?.[locale]) {
        err(`booking.label: manca la traduzione "${locale}"`);
      }
    }
  }

  /* --- lingue ---------------------------------------------------- */

  for (const locale of site.locales ?? []) {
    if (!site.localeNames?.[locale]) err(`localeNames: manca il nome per "${locale}"`);
  }

  /* --- pagine legali --------------------------------------------- */

  for (const page of site.legalPages ?? []) {
    if (page.externalUrl) {
      if (!/^https:\/\//.test(page.externalUrl)) {
        err(`legalPages[${page.slug}].externalUrl: deve iniziare con https://`);
      }
      continue; /* il documento è del cliente: non lo giudichiamo */
    }
    if (!page.body) {
      err(`legalPages[${page.slug}]: serve un testo (body) oppure un externalUrl`);
      continue;
    }
    for (const locale of site.locales ?? []) {
      const body = page.body?.[locale] ?? "";
      if (body.replace(/<[^>]*>/g, "").trim().length < 200) {
        warn(`legalPages[${page.slug}].${locale}: testo molto breve, probabilmente ancora da scrivere`);
      }
    }
  }

  /* --- adempimenti italiani -------------------------------------- */

  /* Il CIN riguarda solo le strutture ricettive: un ristorante non ne ha uno.
     Lo si chiede quindi solo a chi offre alloggi. */
  if ((site.accommodations ?? []).length && !site.brand?.cin) {
    warn(
      "brand.cin: manca il Codice Identificativo Nazionale. In Italia va " +
        "esposto sul sito delle strutture ricettive; chiedilo al cliente.",
    );
  }

  if (site.contact?.phoneAlt && !/^\d{8,15}$/.test(site.contact.phoneAlt.number)) {
    err(`contact.phoneAlt.number: deve essere solo cifre, formato internazionale senza "+"`);
  }

  /* --- media presenti ma mai usati ------------------------------- */

  if (fs.existsSync(mediaDir)) {
    const used = new Set();
    for (const key of seenMedia) used.add(key.split("public")[0]);
    const allUsed = new Set();
    const collect = (node) => {
      if (typeof node === "string") { allUsed.add(node); return; }
      if (node && typeof node === "object") Object.values(node).forEach(collect);
    };
    collect(site);

    const walkDir = (dir, prefix = "") => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
        if (entry.isDirectory()) walkDir(path.join(dir, entry.name), rel);
        else if (MEDIA_EXT.test(entry.name) && !allUsed.has(rel)) {
          warn(`media mai usato: public/tenants/${id}/${rel}`);
        }
      }
    };
    walkDir(mediaDir);
  }

  return { errors, warnings, missingMedia: [...missingMedia].sort() };
}

/* ---------------------------------------------------------------- */

const registry = fs
  .readdirSync("tenants", { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
  .map((e) => e.name);

const targets = process.env.SITE_ID ? [process.env.SITE_ID] : registry;

let failed = false;

for (const id of targets) {
  if (!registry.includes(id)) {
    console.error(`\nCliente "${id}" non trovato in tenants/.`);
    process.exit(1);
  }

  const site = await loadTenant(id);
  const { errors, warnings, missingMedia } = validate(id, site);

  console.log(`\n── ${id} ${"─".repeat(Math.max(0, 50 - id.length))}`);

  if (!errors.length && !warnings.length) {
    console.log("   Tutto a posto.");
  }
  for (const w of warnings) console.log(`   ⚠  ${w}`);
  for (const e of errors) console.log(`   ✗  ${e}`);

  const stays = site.accommodations?.length ?? 0;
  const sections = site.sections?.length ?? 0;
  console.log(
    `   ${sections} sezioni · ${stays} sistemazioni · ` +
      `lingue: ${(site.locales ?? []).join(", ")}`,
  );

  /* Quando mancano delle foto, la lista di quello che serve viene scritta su
     file: è l'elenco da usare per scaricare il materiale dal sito del cliente,
     o da mandare al cliente stesso. */
  if (missingMedia.length) {
    const listPath = path.join("prospects", id, "foto-mancanti.txt");
    fs.mkdirSync(path.dirname(listPath), { recursive: true });

    const byFolder = new Map();
    for (const file of missingMedia) {
      const folder = file.includes("/") ? file.split("/")[0] : ".";
      if (!byFolder.has(folder)) byFolder.set(folder, []);
      byFolder.get(folder).push(file);
    }

    const lines = [
      `Foto mancanti — ${id}`,
      "=".repeat(18 + id.length),
      "",
      `${missingMedia.length} file citati dalla configurazione ma non presenti`,
      `in public/tenants/${id}/.`,
      "",
      "Scaricali in prospects/" + id + "/foto/ rispettando le cartelle qui sotto,",
      "poi lancia:  SITE_ID=" + id + " npm run media:prepare",
      "",
    ];
    for (const [folder, files] of [...byFolder].sort()) {
      lines.push(`${folder}/`);
      for (const file of files) lines.push(`  ${file.split("/").pop()}`);
      lines.push("");
    }
    fs.writeFileSync(listPath, lines.join("\n"));
    console.log(`   → elenco delle foto da procurare: ${listPath}`);
  }

  if (errors.length) failed = true;
}

console.log("");
if (failed) {
  console.error("Ci sono errori da correggere prima di pubblicare.\n");
  process.exit(1);
}
