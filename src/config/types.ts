/**
 * SCHEMA DEL CONTENUTO
 * ====================
 * Questo file descrive *tutto* ciò che può cambiare da un agriturismo all'altro.
 * È l'unico contratto fra la piattaforma (src/, app/) e il singolo cliente
 * (tenants/<id>/site.ts).
 *
 * Regola d'oro: nessun testo, immagine, numero di telefono o colore deve mai
 * comparire dentro src/ o app/. Se serve una nuova voce, si aggiunge qui e
 * TypeScript segnalerà automaticamente tutti i tenant da aggiornare.
 */

/* ------------------------------------------------------------------ */
/* Lingue                                                              */
/* ------------------------------------------------------------------ */

/** Codice ISO della lingua: "it", "en", "de", "fr", ... */
export type LocaleCode = string;

/**
 * Un testo tradotto. Le chiavi devono coincidere con `site.locales`.
 * Esempio: { it: "Richiedi disponibilità", en: "Check availability" }
 */
export type Localized = Record<LocaleCode, string>;

/* ------------------------------------------------------------------ */
/* Identità e contatti                                                 */
/* ------------------------------------------------------------------ */

export interface Brand {
  /** Slug tecnico, uguale al nome della cartella in tenants/. Es. "le-ville" */
  id: string;
  /** Riga piccola sopra il nome nel logo. Es. "Agriturismo" */
  prefix: string;
  /** Nome commerciale. Es. "Le Ville" */
  name: string;
  /** Path del logo, relativo alla cartella media del tenant. Es. "logo.png" */
  logo: string;
  /** Anno di fondazione, usato nei testi e nel footer. Es. "1992" */
  since?: string;
  /**
   * Codice Identificativo Nazionale della struttura ricettiva.
   * In Italia va esposto sul sito e negli annunci: se presente compare
   * automaticamente nel footer. Es. "IT052012B5BXRHWPRU"
   */
  cin?: string;
}

export interface Contact {
  /** Numero in formato internazionale senza "+" — usato per wa.me. Es. "393939383563" */
  phone: string;
  /** Come mostrarlo a schermo. Es. "+39 393 938 3563" */
  phoneDisplay: string;
  email: string;
  /** Se assente si usa `phone`. */
  whatsapp?: string;
  /**
   * Secondo recapito, tipicamente il fisso della reception quando il numero
   * principale è un cellulare (o viceversa). Se presente compare nel footer
   * e nel pannello contatti.
   */
  phoneAlt?: { number: string; display: string };
  /** Righe dell'indirizzo, una per riga visiva. */
  address: string[];
  /** Partita IVA, mostrata nel footer quando presente. */
  vat?: string;
  /** Coordinate della struttura: servono alla mappa e ai dati strutturati SEO. */
  coordinates: { lat: number; lng: number };
}

export interface Seo {
  /** Dominio con protocollo, senza slash finale. Es. "https://www.leville.it" */
  domain: string;
  title: Localized;
  description: Localized;
  /** Immagine di anteprima social, relativa alla cartella media del tenant. */
  ogImage?: string;
}

/* ------------------------------------------------------------------ */
/* Sistemazioni                                                        */
/* ------------------------------------------------------------------ */

export interface Accommodation {
  /** Usato nell'URL: /sistemazioni/<slug> */
  slug: string;
  name: string;
  /** Etichetta di categoria mostrata sopra il nome. Es. "GLI APPARTAMENTI" */
  category: Localized;
  /** Es. "80 m²" */
  size: string;
  /** Es. "4" */
  guests: string;
  /** Riga tecnica. Es. "2 camere · 1 bagno · vista panoramica" */
  layout: Localized;
  /** Frase breve, usata nella card di anteprima. */
  blurb: Localized;
  /** Testo lungo, usato nella pagina di dettaglio. */
  description: Localized;
  /** Foto principale (card + hero della pagina di dettaglio). */
  cover: string;
  /** Seconda foto, sovrapposta alla cover nella card. */
  detail: string;
  /** Galleria della pagina di dettaglio. Generabile con `npm run media:scan`. */
  gallery: string[];
}

/* ------------------------------------------------------------------ */
/* Sezioni della homepage                                              */
/* ------------------------------------------------------------------ */

export interface ImageRef {
  src: string;
  alt: Localized;
}

/** Sezione 0 — video a tutto schermo, header, titolo, claim. */
export interface HeroSection {
  type: "hero";
  id: string;
  video?: { desktop: string; mobile?: string; poster: string };
  /** Alternativa al video: immagine fissa a tutto schermo. */
  image?: ImageRef;
  /**
   * Riga sopra il titolo, spezzata in parti. Fra una parte e l'altra viene
   * inserito un separatore colorato con l'accento del tema.
   * Es. ["Ospitalità di famiglia", "Dal 1992"] -> "Ospitalità di famiglia · Dal 1992"
   */
  labelParts: Localized[];
  /** Righe del titolo H1, una per riga. */
  titleLines: Localized[];
  intro: Localized;
  cta: { label: Localized; href: string };
  /** Le tre etichette in fondo allo schermo. */
  pillars: Localized[];
}

/** Sezione 1 — racconto in parallasse con foto e manifesto. */
export interface StorySection {
  type: "story";
  id: string;
  /** Numero di capitolo mostrato in alto. Es. "01" */
  number: string;
  numberLabel: Localized;
  /** Scritta gigante di sfondo. Es. "DAL 1992" */
  ghost: string;
  /** Righe normali del titolo + ultima riga in corsivo. */
  titleLines: Localized[];
  titleEmphasis: Localized;
  mainImage: ImageRef & { caption: Localized };
  aerialImage: ImageRef & { badge: string };
  manifesto: { label: Localized; text: Localized };
  /** Testo del cursore che segue il mouse. Es. "ESPLORA" */
  cursorLabel: Localized;
}

/** Sezione 2 — carosello orizzontale delle sistemazioni. */
export interface StaysSection {
  type: "stays";
  id: string;
  kicker: Localized;
  title: Localized;
  /** Etichette delle due statistiche della card. */
  sizeLabel: Localized;
  guestsLabel: Localized;
  linkLabel: Localized;
  scrollHint: Localized;
  /** Card finale del carosello. */
  endCard: { lines: string[]; cta: { label: Localized; href: string } };
}

/** Sezione riutilizzabile — foto a tutto schermo con testo sovrapposto. */
export interface FeatureSection {
  type: "feature";
  id: string;
  image: ImageRef;
  kicker: Localized;
  title: Localized;
  text: Localized;
}

export interface Experience {
  title: string;
  /** Parola gigante sullo sfondo della card. Es. "FUOCO" */
  word: Localized;
  meta: Localized;
  text: Localized;
  image: string;
}

/** Sezione 3 — le esperienze, card impilate. */
export interface ExperiencesSection {
  type: "experiences";
  id: string;
  kicker: Localized;
  title: Localized;
  intro: Localized;
  /** Testo scorrevole orizzontale. */
  marquee: Localized;
  /** Etichetta prima del numero, es. "ESPERIENZA 01" */
  itemLabel: Localized;
  ctaLabel: Localized;
  ctaHref: string;
  items: Experience[];
}

/** Sezione 4 — percorso natura, due foto + numero grande. */
export interface TrailSection {
  type: "trail";
  id: string;
  mainImage: ImageRef;
  detailImage: ImageRef;
  /** Numero grande e sua unità. Es. "2" + "km" */
  number: string;
  numberUnit: string;
  kicker: Localized;
  title: Localized;
  text: Localized;
  startLabel: Localized;
  endLabel: Localized;
}

export interface Destination {
  id: string;
  name: Localized;
  /** Es. "26 km" */
  distance: string;
  /**
   * Posizione sulla mappa stilizzata, in percentuale del riquadro.
   * Se omessi vengono calcolati automaticamente dalle coordinate:
   * vedi `npm run map:calc` per generarli e poi rifinirli a mano.
   */
  position?: { x: string; y: string };
  coordinates?: { lat: number; lng: number };
  /** Rotta tratteggiata desktop. Calcolata se assente. */
  route?: { length: string; angle: string };
  /** Rotta tratteggiata mobile (il riquadro ha proporzioni diverse). */
  mobileRoute?: { length: string; angle: string };
}

/** Sezione 5 — mappa stilizzata delle distanze. */
export interface TerritorySection {
  type: "territory";
  id: string;
  kicker: string;
  title: Localized;
  text: Localized;
  disclaimer: Localized;
  mapLabel: Localized;
  /** Coordinate mostrate ai bordi della mappa. */
  gridLabels: { x: string; y: string };
  homeLabel: { lines: string[]; sub: string };
  legend: {
    home: string;
    destinations: Localized;
    /** Nota in fondo alla legenda. Distinta da `disclaimer`, che sta
        nell'intestazione ed è scritta tutta in maiuscolo. */
    note: Localized;
  };
  items: Destination[];
}

/** Sezione — contatti finali. */
export interface ContactSection {
  type: "contact";
  id: string;
  image: ImageRef;
  kicker: Localized;
  title: Localized;
  text: Localized;
  whatsappLabel: Localized;
  emailLabel: Localized;
}

/**
 * Sezione — motore di prenotazione incorporato.
 *
 * L'indirizzo del motore non sta qui ma in `booking.url`: la stessa fascia
 * compare anche in fondo a ogni pagina sistemazione, e l'indirizzo va
 * scritto una volta sola. L'`id` è l'ancora a cui puntano tutti i pulsanti
 * "Prenota" del sito.
 */
export interface BookingSection {
  type: "booking";
  id: string;
  kicker: Localized;
  title: Localized;
  text?: Localized;
  /** Titolo accessibile dell'iframe. */
  frameTitle: Localized;
}

export type Section =
  | HeroSection
  | StorySection
  | StaysSection
  | FeatureSection
  | ExperiencesSection
  | TrailSection
  | TerritorySection
  | ContactSection
  | BookingSection;

/* ------------------------------------------------------------------ */
/* Elementi ricorrenti                                                 */
/* ------------------------------------------------------------------ */

export interface NavItem {
  /** Ancora sulla homepage, senza "#". Deve coincidere con l'`id` di una sezione. */
  target: string;
  label: Localized;
}

/** Pulsante contatti fisso in basso a destra. */
export interface Dock {
  enabled: boolean;
  triggerKicker: Localized;
  triggerLabel: Localized;
  panelKicker: Localized;
  panelTitle: Localized;
  panelText: Localized;
  phoneLabel: Localized;
}

/** Testi della pagina di dettaglio di una sistemazione. */
export interface StayPageCopy {
  back: Localized;
  kicker: Localized;
  sizeLabel: Localized;
  guestsLabel: Localized;
  galleryLabel: Localized;
  ctaTitle: Localized;
  ctaLabel: Localized;
}

export interface LegalPage {
  slug: string;
  title: Localized;
  /**
   * Indirizzo esterno. Se presente, il sito NON genera la pagina e i
   * collegamenti puntano lì. Serve ai clienti che gestiscono già le proprie
   * informative altrove, per esempio su Iubenda: meglio rimandare al loro
   * documento aggiornato che tenerne una copia che invecchia.
   */
  externalUrl?: string;
  /**
   * Paragrafi in HTML semplice (sono ammessi <strong>, <em>, <a>, <br />).
   * Ignorato quando c'è `externalUrl`.
   */
  body?: Localized;
}

/* ------------------------------------------------------------------ */
/* Configurazione completa di un agriturismo                           */
/* ------------------------------------------------------------------ */

export interface SiteConfig {
  brand: Brand;
  contact: Contact;
  seo: Seo;

  /** Lingue attive. La prima è quella di default. */
  locales: LocaleCode[];
  /** Nome della lingua nel selettore, es. { it: "Italiano", en: "English" } */
  localeNames: Record<LocaleCode, string>;

  /**
   * Stringa aggiunta a tutte le URL dei media (?v=...).
   * Cambiala quando sostituisci una foto mantenendo lo stesso nome file:
   * forza browser e CDN a ricaricarla.
   */
  mediaVersion?: string;

  nav: NavItem[];
  /** Etichetta del bottone principale nell'header. */
  headerCta: Localized;

  /**
   * Motore di prenotazione.
   *
   * Viene incorporato nella sezione `booking` della homepage e in fondo a
   * ogni pagina sistemazione; i pulsanti "Prenota" (header, pannello
   * flottante, pagine sistemazione) portano a quella fascia. L'indirizzo sta
   * scritto qui una volta sola: cambiando fornitore si aggiorna un punto.
   *
   * Se assente, il bottone dell'header punta semplicemente alla sezione
   * contatti e nessun pulsante "prenota" compare.
   */
  booking?: {
    /** Indirizzo del motore di prenotazione, caricato in un iframe. */
    url: string;
    /** Etichetta dei pulsanti. Es. "Prenota" */
    label: Localized;
  };

  /** Le sezioni della homepage, nell'ordine in cui appaiono. */
  sections: Section[];

  /**
   * Alloggi. Se vuoto o assente non viene generata nessuna pagina
   * /sistemazioni.
   */
  accommodations?: Accommodation[];
  /** Serve solo se ci sono alloggi. */
  stayPage?: StayPageCopy;

  dock: Dock;
  footer: { copyright: string };
  legalPages: LegalPage[];
}
