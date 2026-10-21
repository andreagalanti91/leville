/**
 * TRATTORIA BEL MI COLLE — DEMO COMMERCIALE
 * =========================================
 *
 * Primo cliente della piattaforma che non è una struttura ricettiva ma un
 * ristorante. Serve anche come prova che l'impianto regge fuori dal caso per
 * cui è nato.
 *
 * COSA CAMBIA RISPETTO A UN AGRITURISMO
 *   - niente `accommodations`: non ci sono alloggi, e nessuna pagina
 *     /sistemazioni viene generata
 *   - due sezioni nuove: `menu` e `gallery`
 *   - il blocco contatti mostra gli orari di apertura
 *   - `story` viene usato due volte: la filosofia e il ritratto dello chef
 *
 * CONTENUTI. Testi ripresi e riscritti dal sito attuale
 * (trattoriabelmicolle.com). Le foto non sono ancora state raccolte: al loro
 * posto ci sono segnaposto generati.
 *
 * DA CHIEDERE AL CLIENTE, prima di mostrargli qualcosa di definitivo:
 *   - GLI ORARI DI APERTURA. Sul sito attuale non ci sono da nessuna parte,
 *     ed è la prima cosa che si cerca sul sito di un ristorante. Quelli qui
 *     sotto sono inventati per far vedere come appare la sezione.
 *   - i piatti dell'estratto di menù: quelli riportati sono coerenti con la
 *     cucina descritta, ma vanno confermati e prezzati
 *   - se esiste un cellulare per WhatsApp (sul sito c'è solo il fisso)
 */

import type { SiteConfig } from "../../src/config/types";

const site: SiteConfig = {
  brand: {
    id: "belmicolle",
    prefix: "Trattoria",
    name: "Bel Mi Colle",
    logo: "logo.png",
    since: "2012",
  },

  contact: {
    /* Sul sito attuale c'è solo il fisso: WhatsApp punterà qui e potrebbe non
       funzionare. Da verificare se hanno un cellulare. */
    phone: "390577922837",
    phoneDisplay: "0577 922837",
    email: "info@trattoriabelmicolle.com",
    address: ["Via Giuseppe Garibaldi 56", "53034 Colle di Val d'Elsa (SI)"],
    vat: "01326050521",
    coordinates: { lat: 43.4196, lng: 11.1217 },
  },

  seo: {
    domain: "https://andreagalanti.it/demo/belmicolle",
    title: {
      it: "Trattoria Bel Mi Colle | Cucina toscana a Colle di Val d'Elsa",
      en: "Trattoria Bel Mi Colle | Tuscan cooking in Colle di Val d'Elsa",
    },
    description: {
      it: "Cucina toscana a chilometro zero e biologica nel centro di Colle di Val d'Elsa. Chiocciola Slow Food 2025.",
      en: "Organic, zero-kilometre Tuscan cooking in the heart of Colle di Val d'Elsa. Slow Food Snail 2025.",
    },
    ogImage: "estate/hero.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-08-29",

  nav: [
    { target: "filosofia", label: { it: "La filosofia", en: "Philosophy" } },
    { target: "menu", label: { it: "Menù", en: "Menu" } },
    { target: "chef", label: { it: "Lo chef", en: "The chef" } },
    { target: "galleria", label: { it: "Galleria", en: "Gallery" } },
  ],

  headerCta: { it: "Prenota un tavolo", en: "Book a table" },

  sections: [
    {
      type: "hero",
      id: "home",
      image: {
        src: "estate/hero.webp",
        alt: {
          it: "La sala della Trattoria Bel Mi Colle",
          en: "The dining room at Trattoria Bel Mi Colle",
        },
      },
      labelParts: [
        { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" },
        { it: "Chiocciola Slow Food 2025", en: "Slow Food Snail 2025" },
      ],
      titleLines: [
        { it: "Sapori di ieri", en: "Yesterday's flavours" },
        { it: "col sapere di oggi.", en: "with today's knowledge." },
      ],
      intro: {
        it: "Cucina toscana a chilometro zero e biologica, nel centro di Colle di Val d'Elsa.",
        en: "Organic, zero-kilometre Tuscan cooking in the heart of Colle di Val d'Elsa.",
      },
      cta: {
        label: { it: "Guarda il menù", en: "See the menu" },
        href: "#menu",
      },
      pillars: [
        { it: "Chiocciola Slow Food 2025", en: "Slow Food Snail 2025" },
        { it: "Km 0 · Biologico", en: "Zero km · Organic" },
        { it: "Aperto dal 2012", en: "Open since 2012" },
      ],
    },

    /* La filosofia della casa: il km 0, raccontato con le loro parole ma
       stretto. Il testo originale è lungo tre pagine. */
    {
      type: "story",
      id: "filosofia",
      number: "01",
      numberLabel: { it: "LA FILOSOFIA", en: "OUR PHILOSOPHY" },
      ghost: "KM 0",
      titleLines: [
        { it: "Dal produttore", en: "From the grower" },
        { it: "al piatto,", en: "to the plate," },
      ],
      titleEmphasis: { it: "distanza zero.", en: "distance zero." },
      mainImage: {
        src: "estate/km0.webp",
        alt: {
          it: "I prodotti dei produttori locali",
          en: "Produce from local growers",
        },
        caption: {
          it: "La spesa fatta dove il cibo cresce",
          en: "Shopping where the food grows",
        },
      },
      aerialImage: {
        src: "estate/campagna.webp",
        alt: { it: "La campagna senese", en: "The Sienese countryside" },
        badge: "COLLE DI VAL D'ELSA",
      },
      manifesto: {
        label: { it: "PAROLA D'ORDINE: KM 0", en: "ONE RULE: ZERO KM" },
        text: {
          it: "Un pasto medio consumato in Italia ha viaggiato oltre 1.900 chilometri prima di arrivare a tavola. Noi facciamo il contrario: la spesa dai piccoli produttori qui intorno, i broccoli d'inverno e le fragole di primavera, la carne dal macellaio di fiducia. Non è nostalgia, è il modo più semplice per sapere cosa si mangia — e per conoscere di persona chi lo ha coltivato.",
          en: "The average meal eaten in Italy has travelled more than 1,900 kilometres before reaching the table. We do the opposite: we buy from the small growers around us, broccoli in winter and strawberries in spring, meat from a butcher we know. It isn't nostalgia — it's the simplest way to know what you're eating, and to know the people who grew it.",
        },
      },
      cursorLabel: { it: "SCOPRI", en: "DISCOVER" },
    },

    /* Il menù. Il cliente ha già i PDF sul suo dominio: si rimanda a quelli,
       e in pagina resta un estratto che i motori di ricerca possono leggere. */
    {
      type: "menu",
      id: "menu",
      kicker: { it: "LA CUCINA", en: "THE KITCHEN" },
      title: {
        it: "Lunghe cotture, frattaglie, sughi. Istinto.",
        en: "Slow cooking, offal, ragùs. Instinct.",
      },
      text: {
        it: "Il menù cambia con le stagioni e con quello che i produttori portano. Questi sono i piatti che tornano più spesso.",
        en: "The menu changes with the seasons and with what the growers bring. These are the dishes that come back most often.",
      },
      currency: "€ ",
      courses: [
        {
          title: { it: "Antipasti", en: "Starters" },
          dishes: [
            {
              name: { it: "Crostini toscani", en: "Tuscan crostini" },
              detail: {
                it: "Fegatini, ricetta di casa",
                en: "Chicken liver, house recipe",
              },
            },
            {
              name: {
                it: "Tagliere di salumi e pecorini",
                en: "Cured meats and pecorino",
              },
              detail: {
                it: "Dai produttori della zona",
                en: "From growers nearby",
              },
            },
          ],
        },
        {
          title: { it: "Primi", en: "First courses" },
          note: { it: "Pasta fatta in casa", en: "Pasta made in house" },
          dishes: [
            {
              name: { it: "Pici all'aglione", en: "Pici all'aglione" },
              detail: {
                it: "Aglione della Valdichiana",
                en: "Valdichiana garlic",
              },
            },
            {
              name: { it: "Ribollita", en: "Ribollita" },
              detail: { it: "Verdure di stagione", en: "Seasonal vegetables" },
            },
            {
              name: {
                it: "Pappardelle sul cinghiale",
                en: "Pappardelle with wild boar",
              },
            },
          ],
        },
        {
          title: { it: "Secondi", en: "Main courses" },
          dishes: [
            {
              name: {
                it: "Peposo alla fornacina",
                en: "Peposo alla fornacina",
              },
              detail: {
                it: "Cottura lunga, pepe nero",
                en: "Slow cooked, black pepper",
              },
            },
            {
              name: { it: "Trippa alla senese", en: "Sienese tripe" },
            },
            {
              name: {
                it: "Tagliata di Chianina",
                en: "Chianina beef tagliata",
              },
            },
          ],
        },
        {
          title: { it: "Dolci", en: "Desserts" },
          dishes: [
            {
              name: {
                it: "Cantucci e Vin Santo",
                en: "Cantucci and Vin Santo",
              },
            },
            { name: { it: "Torta della nonna", en: "Torta della nonna" } },
          ],
        },
      ],
      /* I PDF restano sul dominio del cliente: li aggiorna da solo, senza
         ricompilare il sito. */
      documents: [
        {
          label: { it: "Scarica il menù", en: "Download the menu" },
          href: "https://trattoriabelmicolle.com/menu-2/",
        },
        {
          label: { it: "Carta dei vini", en: "Wine list" },
          href: "https://trattoriabelmicolle.com/carta-dei-vini/",
        },
      ],
    },

    /* La sala. */
    {
      type: "feature",
      id: "sala",
      image: {
        src: "estate/sala.webp",
        alt: { it: "La sala del ristorante", en: "The dining room" },
      },
      kicker: { it: "Il ristorante", en: "The restaurant" },
      title: {
        it: "Una trattoria, nel senso vero della parola.",
        en: "A trattoria, in the true sense of the word.",
      },
      text: {
        it: "Poche coperture, nessuna formalità, e la cucina a pochi passi dal tavolo.",
        en: "Few covers, no formality, and the kitchen a few steps from your table.",
      },
    },

    /* Lo chef. Stesso tipo `story`, usato una seconda volta: cambia solo il
       numero di capitolo. */
    {
      type: "story",
      id: "chef",
      number: "02",
      numberLabel: { it: "LO CHEF", en: "THE CHEF" },
      ghost: "DAL 2012",
      titleLines: [
        { it: "Ha iniziato", en: "He started" },
        { it: "a tredici anni.", en: "at thirteen." },
      ],
      titleEmphasis: { it: "Non ha smesso.", en: "He never stopped." },
      mainImage: {
        src: "estate/chef.webp",
        alt: {
          it: "Gabriele Borgianni in cucina",
          en: "Gabriele Borgianni in the kitchen",
        },
        caption: {
          it: "Gabriele Borgianni, chef e proprietario",
          en: "Gabriele Borgianni, chef and owner",
        },
      },
      aerialImage: {
        src: "estate/cucina.webp",
        alt: { it: "La cucina", en: "The kitchen" },
        badge: "BORGIANNI GABRIELE",
      },
      manifesto: {
        label: { it: "CHEF E PROPRIETARIO", en: "CHEF AND OWNER" },
        text: {
          it: "Nato a San Gimignano, cresciuto in campagna a contatto con il cibo contadino. Ha cominciato a lavorare nella ristorazione a tredici anni, passando dal servizio al bancone in locali della Toscana, di altre regioni e all'estero. Nel 2012 apre la Trattoria Bel Mi Colle con Roberta, sua compagna e socia. La sua cucina guarda ai prodotti del territorio senese, al biologico e alla stagione: lunghe cotture, frattaglie, sughi, e la semplicità come scelta.",
          en: "Born in San Gimignano and raised in the countryside, close to farmhouse food from the start. He began working in restaurants at thirteen, moving from service to the bar in kitchens across Tuscany, other regions and abroad. In 2012 he opened Trattoria Bel Mi Colle with Roberta, his partner in life and in business. His cooking looks to Sienese produce, to organic growing and to the season: slow cooking, offal, ragùs, and simplicity as a deliberate choice.",
        },
      },
      cursorLabel: { it: "SCOPRI", en: "DISCOVER" },
    },

    {
      type: "gallery",
      id: "galleria",
      kicker: { it: "GALLERIA", en: "GALLERY" },
      title: {
        it: "La sala, la cucina, i piatti.",
        en: "The room, the kitchen, the plates.",
      },
      images: [
        { src: "gallery/01.webp", alt: { it: "Un piatto", en: "A dish" } },
        {
          src: "gallery/02.webp",
          alt: { it: "La sala", en: "The dining room" },
        },
        {
          src: "gallery/03.webp",
          alt: { it: "In cucina", en: "In the kitchen" },
        },
        {
          src: "gallery/04.webp",
          alt: { it: "Un dettaglio della tavola", en: "A table detail" },
        },
        { src: "gallery/05.webp", alt: { it: "Un piatto", en: "A dish" } },
        {
          src: "gallery/06.webp",
          alt: { it: "I prodotti", en: "The produce" },
        },
      ],
    },

    /* La mappa del territorio non serve a un ristorante di paese: chi ci va
       è già in zona. Al suo posto un blocco sul come arrivare, con l'unico
       consiglio pratico che sul sito attuale è scritto in maiuscolo perché
       evidentemente è un problema vero. */
    {
      type: "feature",
      id: "come-arrivare",
      image: {
        src: "estate/colle.webp",
        alt: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" },
      },
      kicker: { it: "Come arrivare", en: "Getting here" },
      title: {
        it: "In auto, puntate il parcheggio Fontibona.",
        en: "By car, head for the Fontibona car park.",
      },
      text: {
        it: "Se chiedete al navigatore il ristorante vi fa fare il giro del paese. Dal parcheggio siamo a pochi minuti a piedi.",
        en: "If you ask your satnav for the restaurant it will send you all the way round the town. From the car park we're a few minutes on foot.",
      },
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "contact/main.webp",
        alt: {
          it: "La Trattoria Bel Mi Colle",
          en: "Trattoria Bel Mi Colle",
        },
      },
      kicker: { it: "Prenotazioni", en: "Reservations" },
      title: { it: "Il tavolo vi aspetta.", en: "Your table is waiting." },
      text: {
        it: "Chiamateci o scriveteci: i posti sono pochi, meglio prenotare.",
        en: "Call or write to us: we have few covers, so booking is wise.",
      },
      whatsappLabel: { it: "Chiama il ristorante", en: "Call the restaurant" },
      emailLabel: { it: "Scrivi una email", en: "Send an email" },

      /* ORARI INVENTATI. Sul sito attuale non compaiono da nessuna parte:
         vanno chiesti al cliente prima di mostrargli la demo. Sono qui per
         far vedere come si presenta la sezione. */
      opening: {
        label: { it: "ORARI DI APERTURA", en: "OPENING HOURS" },
        rows: [
          {
            days: { it: "Giovedì – Lunedì", en: "Thursday – Monday" },
            hours: { it: "12:30 – 14:30", en: "12:30 – 14:30" },
          },
          {
            days: { it: "Giovedì – Lunedì", en: "Thursday – Monday" },
            hours: { it: "19:30 – 22:00", en: "19:30 – 22:00" },
          },
          {
            days: { it: "Martedì e mercoledì", en: "Tuesday and Wednesday" },
            hours: { it: "Chiuso", en: "Closed" },
          },
        ],
        note: {
          it: "Orari da confermare con il cliente.",
          en: "Hours to be confirmed with the client.",
        },
      },
    },
  ],

  /* Nessun alloggio: la piattaforma non genera nessuna pagina /sistemazioni
     e la sezione con il carosello non compare fra le sezioni qui sopra. */

  dock: {
    enabled: true,
    triggerKicker: { it: "PRENOTA", en: "BOOK" },
    triggerLabel: { it: "Un tavolo", en: "A table" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECTLY" },
    panelTitle: { it: "Quando venite?", en: "When are you coming?" },
    panelText: {
      it: "Rispondiamo noi, al telefono del ristorante.",
      en: "We answer ourselves, on the restaurant's phone.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: {
    copyright: "© 2026 Trattoria Bel Mi Colle",
  },

  /* Il sito attuale non ha informative pubblicate. Vanno scritte prima di
     qualsiasi pubblicazione reale: il loro sito ha un modulo di contatto,
     quindi serve un'informativa che copra la raccolta di nome, email e
     telefono, cosa che i testi di partenza di Le Ville NON coprono. */
  legalPages: [
    {
      slug: "privacy-policy",
      title: { it: "Privacy Policy", en: "Privacy Policy" },
      body: {
        it: `
<section>
  <h2>Nota sull'anteprima</h2>
  <p>Questa è una versione dimostrativa. Il testo va scritto insieme al
  titolare prima di qualsiasi pubblicazione: se il sito definitivo avrà un
  modulo di contatto o di prenotazione, l'informativa dovrà descrivere anche
  la raccolta di nome, email e numero di telefono.</p>
</section>
<section>
  <h2>Titolare del trattamento</h2>
  <p>Trattoria Bel Mi Colle, Via Giuseppe Garibaldi 56, 53034 Colle di Val
  d'Elsa (SI). P.IVA 01326050521.</p>
</section>
<section>
  <h2>Dati raccolti</h2>
  <p>In questa anteprima i contatti avvengono solo per telefono o email: i dati
  sono trattati dai rispettivi fornitori secondo le loro informative. Il server
  che ospita il sito può conservare log tecnici di accesso per finalità di
  sicurezza e diagnostica.</p>
</section>
<section>
  <h2>Diritti dell'interessato</h2>
  <p>È possibile chiedere in qualsiasi momento accesso, rettifica, cancellazione,
  limitazione o portabilità dei propri dati, e opporsi al trattamento. È inoltre
  possibile proporre reclamo al Garante per la protezione dei dati personali.</p>
</section>`,
        en: `
<section>
  <h2>About this preview</h2>
  <p>This is a demonstration version. The text must be written together with
  the owner before any publication: if the final site includes a contact or
  booking form, the notice will also need to describe the collection of name,
  email and phone number.</p>
</section>
<section>
  <h2>Data controller</h2>
  <p>Trattoria Bel Mi Colle, Via Giuseppe Garibaldi 56, 53034 Colle di Val
  d'Elsa (SI), Italy. VAT 01326050521.</p>
</section>
<section>
  <h2>Data collected</h2>
  <p>In this preview, contact happens only by phone or email: data is processed
  by the respective providers under their own privacy notices. The hosting
  server may keep technical access logs for security and diagnostic purposes.</p>
</section>
<section>
  <h2>Your rights</h2>
  <p>You may at any time request access to, correction, erasure, restriction or
  portability of your data, and object to processing. You may also lodge a
  complaint with the Italian Data Protection Authority.</p>
</section>`,
      },
    },
    {
      slug: "cookie-policy",
      title: { it: "Cookie Policy", en: "Cookie Policy" },
      body: {
        it: `
<section>
  <h2>Nota sull'anteprima</h2>
  <p>Questa è una versione dimostrativa. Il testo va scritto insieme al
  titolare prima di qualsiasi pubblicazione.</p>
</section>
<section>
  <h2>Cookie utilizzati</h2>
  <p>Questa anteprima non utilizza cookie di profilazione, non installa
  strumenti di analisi statistica e non incorpora contenuti di terze parti che
  tracciano la navigazione. Il sito attuale del ristorante incorpora una mappa
  di Google: se verrà mantenuta nella versione definitiva, servirà il banner di
  consenso.</p>
</section>
<section>
  <h2>Memoria locale</h2>
  <p>Il sito salva sul dispositivo una sola preferenza tecnica: la lingua
  scelta, così da riproporla alla visita successiva. Non è un cookie e non viene
  trasmessa a nessun server.</p>
</section>`,
        en: `
<section>
  <h2>About this preview</h2>
  <p>This is a demonstration version. The text must be written together with
  the owner before any publication.</p>
</section>
<section>
  <h2>Cookies used</h2>
  <p>This preview uses no profiling cookies, installs no analytics tools and
  embeds no third-party content that tracks browsing. The restaurant's current
  website embeds a Google map: if that is kept in the final version, a consent
  banner will be required.</p>
</section>
<section>
  <h2>Local storage</h2>
  <p>The site stores one technical preference on your device: the language you
  selected, so it can be restored on your next visit. It is not a cookie and is
  never sent to any server.</p>
</section>`,
      },
    },
  ],
};

export default site;
