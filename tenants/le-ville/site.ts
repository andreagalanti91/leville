/**
 * AGRITURISMO LE VILLE
 * ====================
 * Tutto il contenuto del sito sta in questo file. Non c’è nient’altro da
 * modificare per cambiare testi, foto, video, contatti, ordine delle sezioni.
 *
 * I percorsi delle immagini sono relativi a public/tenants/le-ville/.
 * Scrivi "stays/villa-01.webp", non "/tenants/le-ville/stays/villa-01.webp".
 *
 * Ogni testo visibile è un oggetto con una chiave per lingua:
 *   { it: "Italiano", en: "English" }
 * Le lingue attive sono elencate in `locales`, più sotto.
 */

import type { SiteConfig } from "../../src/config/types";

const site: SiteConfig = {
  /* ================================================================ */
  /* Identità                                                          */
  /* ================================================================ */

  brand: {
    id: "le-ville",
    prefix: "Agriturismo",
    name: "Le Ville",
    logo: "logo.png",
    since: "1992",
  },

  contact: {
    /* Numero WhatsApp Business: usato da tel:, da wa.me e dal footer. */
    phone: "393520215528",
    phoneDisplay: "+39 352 021 5528",
    email: "amministrazione@gruppofontani.it",
    address: ["Località Le Ville", "53034 Colle di Val d’Elsa (SI)"],
    coordinates: { lat: 43.3667, lng: 11.1167 },
  },

  seo: {
    domain: "https://andreagalanti.it/demo",
    title: {
      it: "Agriturismo Le Ville | Toscana autentica",
      en: "Agriturismo Le Ville | Authentic Tuscany",
    },
    description: {
      it: "Soggiorni, esperienze e natura nel cuore della Toscana, a Colle di Val d’Elsa.",
      en: "Stays, experiences and nature in the heart of Tuscany, in Colle di Val d’Elsa.",
    },
    ogImage: "estate/aerial.webp",
  },

  /* ================================================================ */
  /* Lingue                                                            */
  /* ================================================================ */

  /* La prima è quella predefinita. Per aggiungere il tedesco: metti "de" qui,
     poi TypeScript ti segnalerà ogni testo ancora da tradurre. */
  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  /* Cambia questa data quando sostituisci una foto tenendo lo stesso nome
     file: costringe browser e CDN a ricaricarla. */
  mediaVersion: "2026-08-26",

  /* ================================================================ */
  /* Navigazione                                                       */
  /* ================================================================ */

  /* `target` deve coincidere con l’`id` di una sezione qui sotto. */
  nav: [
    { target: "storia", label: { it: "La tenuta", en: "The estate" } },
    { target: "sistemazioni", label: { it: "Sistemazioni", en: "Stays" } },
    { target: "esperienze", label: { it: "Esperienze", en: "Experiences" } },
    { target: "territorio", label: { it: "Territorio", en: "Explore" } },
    { target: "contatti", label: { it: "Contatti", en: "Contact" } },
  ],

  /* Resta come ripiego: con `booking` impostato il bottone dell'header usa
     l'etichetta del motore di prenotazione. */
  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  /* Motore di prenotazione Amenitiz. Scritto qui una volta sola: viene
     incorporato nella sezione "prenota" qui sotto e in fondo a ogni pagina
     sistemazione; header e pulsante flottante portano lì. */
  booking: {
    url: "https://agriturismo-le-ville.amenitiz.io/en/booking/room#DatesGuests-BE",
    label: { it: "Prenota", en: "Book now" },
  },

  /* ================================================================ */
  /* Sezioni della homepage                                            */
  /* ================================================================ */

  /* Appaiono nell’ordine in cui sono scritte. Per togliere una sezione
     cancella il suo blocco; per spostarla, spostala. Un cliente senza
     piscina toglie "feature", uno senza percorso natura toglie "trail". */

  sections: [
    {
      type: "hero",
      id: "home",
      video: {
        desktop: "video/hero-desktop.mp4",
        mobile: "video/hero-mobile.mp4",
        poster: "video/hero-poster.webp",
      },
      labelParts: [
        { it: "Ospitalità di famiglia", en: "Family hospitality" },
        { it: "Dal 1992", en: "Since 1992" },
      ],
      titleLines: [
        { it: "Più di un soggiorno.", en: "More than a stay." },
        { it: "La tua Toscana.", en: "Your Tuscany." },
      ],
      intro: {
        it: "Nove dimore. Esperienze autentiche. Una piscina sulle colline.",
        en: "Nine homes. Authentic experiences. A pool overlooking the hills.",
      },
      cta: {
        label: { it: "Scopri la tenuta", en: "Discover the estate" },
        href: "#storia",
      },
      pillars: [
        { it: "Piscina panoramica", en: "Panoramic pool" },
        { it: "BBQ · COOKING · WINE", en: "BBQ · COOKING · WINE" },
        { it: "Natura · 2 km", en: "Nature · 2 km" },
      ],
    },

    {
      type: "story",
      id: "storia",
      number: "01",
      numberLabel: { it: "LA TENUTA", en: "THE ESTATE" },
      ghost: "DAL 1992",
      titleLines: [
        { it: "Dove la Toscana", en: "Where Tuscany" },
        { it: "è ancora", en: "is still" },
      ],
      titleEmphasis: { it: "autentica.", en: "authentic." },
      mainImage: {
        src: "estate/landscape.webp",
        alt: {
          it: "Il paesaggio della tenuta",
          en: "The estate landscape",
        },
        caption: {
          it: "La campagna toscana, custodita dal 1992",
          en: "The Tuscan countryside, cared for since 1992",
        },
      },
      aerialImage: {
        src: "estate/aerial.webp",
        alt: {
          it: "La tenuta nel paesaggio toscano",
          en: "The estate in the Tuscan landscape",
        },
        badge: "43°25′ N · 11°07′ E",
      },
      manifesto: {
        label: { it: "OSPITALITÀ DI FAMIGLIA", en: "FAMILY HOSPITALITY" },
        text: {
          it: "Le Ville nasce nel 1992 dall’amore della famiglia Fontani per la campagna toscana e dal desiderio di restituire nuova vita a luoghi ricchi di storia e autenticità. Antiche case rurali e fienili sono stati recuperati preservandone il fascino originario, creando diverse soluzioni di soggiorno immerse nella natura. Un luogo dove ritrovare tranquillità, autenticità e il calore dell’ospitalità toscana.",
          en: "Le Ville was born in 1992 from the Fontani family’s love for the Tuscan countryside and their wish to bring new life to places rich in history and authenticity. Old country houses and barns were restored while preserving their original charm, creating a collection of homes immersed in nature—a place to rediscover tranquillity, authenticity and the warmth of Tuscan hospitality.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stays",
      id: "sistemazioni",
      kicker: { it: "DORMIRE A LE VILLE", en: "STAY AT LE VILLE" },
      title: {
        it: "Nove dimore, un solo modo di sentirsi a casa.",
        en: "Nine homes, one way to feel at home.",
      },
      sizeLabel: { it: "SUPERFICIE", en: "SIZE" },
      guestsLabel: { it: "OSPITI", en: "GUESTS" },
      linkLabel: { it: "Entra nella dimora", en: "Explore this home" },
      scrollHint: { it: "SCORRI PER ESPLORARE", en: "SCROLL TO EXPLORE" },
      endCard: {
        lines: ["AGRITURISMO", "LE VILLE"],
        cta: {
          label: { it: "Trova la tua dimora", en: "Find your home" },
          href: "#contatti",
        },
      },
    },

    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/pool.webp",
        alt: { it: "Piscina panoramica", en: "Panoramic pool" },
      },
      kicker: { it: "Piscina panoramica", en: "Panoramic pool" },
      title: {
        it: "Una linea d’acqua tra cielo e colline.",
        en: "A line of water between sky and hills.",
      },
      text: {
        it: "Il luogo in cui le giornate rallentano, con lo sguardo aperto sulla campagna toscana.",
        en: "The place where days slow down, with open views across the Tuscan countryside.",
      },
    },

    {
      type: "experiences",
      id: "esperienze",
      kicker: { it: "ESPERIENZE A LE VILLE", en: "EXPERIENCES AT LE VILLE" },
      title: {
        it: "La Toscana, da assaporare.",
        en: "Tuscany, made to be savoured.",
      },
      intro: {
        it: "Tre esperienze nate per trasformare un soggiorno in qualcosa che resta.",
        en: "Three experiences designed to turn a stay into something unforgettable.",
      },
      marquee: {
        it: "FUOCO · MANI · CALICI · SAPORI · STORIE · ",
        en: "FIRE · HANDS · WINE · FLAVOURS · STORIES · ",
      },
      itemLabel: { it: "ESPERIENZA", en: "EXPERIENCE" },
      ctaLabel: {
        it: "Vivi questa esperienza",
        en: "Enquire about this experience",
      },
      ctaHref: "#contatti",
      items: [
        {
          title: "BBQ Dinner",
          word: { it: "FUOCO", en: "FIRE" },
          meta: {
            it: "Brace · Tavola · Convivialità",
            en: "Fire · Table · Togetherness",
          },
          text: {
            it: "La luce della sera, il profumo della brace e una tavola da condividere. La campagna toscana diventa il luogo più bello in cui incontrarsi.",
            en: "Evening light, the scent of the grill and a table made for sharing. The Tuscan countryside becomes the most beautiful place to come together.",
          },
          image: "experiences/bbq.jpg",
        },
        {
          title: "Cooking Class",
          word: { it: "MANI", en: "HANDS" },
          meta: {
            it: "Ingredienti · Ricette · Gesti",
            en: "Ingredients · Recipes · Craft",
          },
          text: {
            it: "Ingredienti del territorio, ricette di casa e mani in pasta. Un’esperienza autentica da vivere insieme e riportare con sé.",
            en: "Local ingredients, family recipes and hands in the dough. An authentic experience to share—and take home with you.",
          },
          image: "experiences/cooking.webp",
        },
        {
          title: "Wine Tasting",
          word: { it: "CALICI", en: "GLASSES" },
          meta: {
            it: "Vitigni · Territorio · Racconti",
            en: "Grapes · Terroir · Stories",
          },
          text: {
            it: "Un percorso nei vini toscani attraverso profumi, carattere e territorio. Ogni calice racconta un paesaggio diverso.",
            en: "A journey through Tuscan wines, their aromas, character and terroir. Every glass tells the story of a different landscape.",
          },
          image: "experiences/wine.jpg",
        },
      ],
    },

    {
      type: "trail",
      id: "percorso",
      mainImage: {
        src: "trail/main.jpg",
        alt: {
          it: "Il percorso natura nel bosco",
          en: "The woodland nature trail",
        },
      },
      detailImage: {
        src: "trail/fitness.jpg",
        alt: {
          it: "Postazione fitness lungo il percorso",
          en: "Fitness station along the trail",
        },
      },
      number: "2",
      numberUnit: "km",
      kicker: { it: "Nature & fitness trail", en: "Nature & fitness trail" },
      title: {
        it: "Due chilometri per ritrovare il proprio passo.",
        en: "Two kilometres to find your own pace.",
      },
      text: {
        it: "Un nuovo percorso natura attraversa la tenuta per circa 2 km, con postazioni fitness dedicate agli esercizi a corpo libero.",
        en: "A new nature trail runs for approximately 2 km across the estate, with fitness stations for bodyweight exercise.",
      },
      startLabel: { it: "START", en: "START" },
      endLabel: { it: "FINISH", en: "FINISH" },
    },

    {
      type: "territory",
      id: "territorio",
      kicker: "Heart of Tuscany",
      title: {
        it: "Al centro di tutto ciò che vorrai ricordare.",
        en: "At the heart of everything you’ll want to remember.",
      },
      text: {
        it: "Parti al mattino, attraversa città d’arte e paesaggi iconici, torna ogni sera alla quiete della tenuta.",
        en: "Set out in the morning, explore art cities and iconic landscapes, then return each evening to the quiet of the estate.",
      },
      disclaimer: {
        it: "DISTANZE STRADALI INDICATIVE",
        en: "APPROXIMATE DRIVING DISTANCES",
      },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Agriturismo Le Ville",
        en: "Stylised map of distances from Agriturismo Le Ville",
      },
      gridLabels: { x: "43°20′ N", y: "11°05′ E" },
      homeLabel: {
        lines: ["Agriturismo", "Le Ville"],
        sub: "Colle di Val d’Elsa",
      },
      legend: {
        home: "Le Ville",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: {
          it: "Distanze stradali indicative",
          en: "Approximate driving distances",
        },
      },

      /* Le posizioni sono quelle rifinite a mano sul sito attuale e vengono
         lasciate così com’erano. Per un nuovo cliente basta indicare
         `coordinates`: posizione e rotte si calcolano da sole (vedi
         src/lib/map-geometry.ts) e si possono poi ritoccare. */
      items: [
        {
          id: "florence",
          name: { it: "Firenze", en: "Florence" },
          distance: "66 km",
          coordinates: { lat: 43.7696, lng: 11.2558 },
          position: { x: "62%", y: "12%" },
          route: { length: "36%", angle: "-62deg" },
          mobileRoute: { length: "54%", angle: "-72deg" },
        },
        {
          id: "gimignano",
          name: { it: "San Gimignano", en: "San Gimignano" },
          distance: "26 km",
          coordinates: { lat: 43.4677, lng: 11.0431 },
          position: { x: "19%", y: "26%" },
          route: { length: "32%", angle: "-144deg" },
          mobileRoute: { length: "40%", angle: "-131deg" },
        },
        {
          id: "siena",
          name: { it: "Siena", en: "Siena" },
          distance: "31 km",
          coordinates: { lat: 43.3188, lng: 11.3308 },
          position: { x: "72%", y: "48%" },
          route: { length: "27%", angle: "4deg" },
          mobileRoute: { length: "27%", angle: "6deg" },
        },
        {
          id: "montepulciano",
          name: { it: "Montepulciano", en: "Montepulciano" },
          distance: "100 km",
          coordinates: { lat: 43.0989, lng: 11.7861 },
          position: { x: "68%", y: "84%" },
          route: { length: "43%", angle: "57deg" },
          mobileRoute: { length: "61%", angle: "68deg" },
        },
        {
          id: "montalcino",
          name: { it: "Montalcino", en: "Montalcino" },
          distance: "76 km",
          coordinates: { lat: 43.0576, lng: 11.4889 },
          position: { x: "47%", y: "74%" },
          route: { length: "27%", angle: "86deg" },
          mobileRoute: { length: "42%", angle: "87deg" },
        },
        {
          id: "pienza",
          name: { it: "Pienza", en: "Pienza" },
          distance: "89 km",
          coordinates: { lat: 43.0776, lng: 11.6785 },
          position: { x: "66%", y: "68%" },
          route: { length: "30%", angle: "45deg" },
          mobileRoute: { length: "39%", angle: "57deg" },
        },
        {
          id: "volterra",
          name: { it: "Volterra", en: "Volterra" },
          distance: "34 km",
          coordinates: { lat: 43.4014, lng: 10.8608 },
          position: { x: "10%", y: "49%" },
          route: { length: "35%", angle: "175deg" },
          mobileRoute: { length: "35%", angle: "173deg" },
        },
        {
          id: "bolgheri",
          name: { it: "Bolgheri", en: "Bolgheri" },
          distance: "75 km",
          coordinates: { lat: 43.2264, lng: 10.6014 },
          position: { x: "9%", y: "75%" },
          route: { length: "45%", angle: "143deg" },
          mobileRoute: { length: "56%", angle: "130deg" },
        },
        {
          id: "colle",
          name: { it: "Colle di Val d’Elsa", en: "Colle di Val d’Elsa" },
          distance: "14 km",
          coordinates: { lat: 43.4213, lng: 11.1275 },
          position: { x: "28%", y: "40%" },
          route: { length: "18%", angle: "-161deg" },
          mobileRoute: { length: "19%", angle: "-152deg" },
        },
        {
          id: "castellina",
          name: { it: "Castellina in Chianti", en: "Castellina in Chianti" },
          distance: "35 km",
          coordinates: { lat: 43.4703, lng: 11.2836 },
          position: { x: "54%", y: "31%" },
          route: { length: "17%", angle: "-57deg" },
          mobileRoute: { length: "24%", angle: "-68deg" },
        },
        {
          id: "casole",
          name: { it: "Casole d’Elsa", en: "Casole d’Elsa" },
          distance: "8 km",
          coordinates: { lat: 43.3419, lng: 11.0439 },
          position: { x: "20%", y: "59%" },
          route: { length: "29%", angle: "154deg" },
          mobileRoute: { length: "34%", angle: "157deg" },
        },
        {
          id: "parco",
          name: { it: "Parco Fluviale", en: "River Park" },
          distance: "9 km",
          coordinates: { lat: 43.4056, lng: 11.1489 },
          position: { x: "57%", y: "58%" },
          route: { length: "16%", angle: "45deg" },
          mobileRoute: { length: "21%", angle: "48deg" },
        },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "contact/main.jpg",
        alt: {
          it: "Agriturismo Le Ville e le colline toscane",
          en: "Agriturismo Le Ville and the Tuscan hills",
        },
      },
      kicker: { it: "Il tuo soggiorno", en: "Your stay" },
      title: { it: "La Toscana ti aspetta.", en: "Tuscany awaits." },
      text: {
        it: "Scrivici direttamente: ti aiuteremo a scegliere la sistemazione più adatta e a organizzare il tuo tempo a Le Ville.",
        en: "Contact us directly: we’ll help you choose the right accommodation and make the most of your time at Le Ville.",
      },
      whatsappLabel: {
        it: "Scrivici su WhatsApp",
        en: "Message us on WhatsApp",
      },
      emailLabel: { it: "Invia una email", en: "Send us an email" },
    },

    {
      type: "booking",
      id: "prenota",
      kicker: { it: "Prenota direttamente", en: "Book directly" },
      title: {
        it: "Scegli le date del tuo soggiorno.",
        en: "Choose the dates of your stay.",
      },
      text: {
        it: "Disponibilità e prezzi in tempo reale, senza intermediari.",
        en: "Live availability and prices, with no intermediaries.",
      },
      frameTitle: {
        it: "Prenotazione Agriturismo Le Ville",
        en: "Agriturismo Le Ville booking",
      },
    },
  ],

  /* ================================================================ */
  /* Sistemazioni                                                      */
  /* ================================================================ */

  /* Ognuna genera automaticamente una card nel carosello e una pagina
     /sistemazioni/<slug>. Aggiungerne una o toglierne una non richiede
     nessuna modifica al codice.

     Nella versione precedente questi dati stavano in due posti diversi
     (l’elenco delle sistemazioni e una tabella separata con categoria, foto
     di dettaglio e riga tecnica): erano la stessa cosa scritta due volte, e
     bisognava ricordarsi di aggiornarle entrambe. Ora sono un unico oggetto. */

  accommodations: [
    {
      slug: "villa",
      name: "Villa Fontanelle",
      category: { it: "LA VILLA", en: "THE VILLA" },
      size: "200 m²",
      guests: "9",
      layout: {
        it: "4 camere · 2 bagni + 1 servizio · giardino privato",
        en: "4 bedrooms · 2 bathrooms + 1 guest bathroom · private garden",
      },
      blurb: {
        it: "Una villa in pietra, ampia e riservata, dove vivere insieme la Toscana più autentica.",
        en: "A spacious, private stone villa made for sharing the most authentic side of Tuscany.",
      },
      description: {
        it: "Autentica villa toscana in pietra, caratterizzata da ambienti molto ampi e da un fascino antico rimasto fedele all’aspetto originario della casa. Travi in legno, archi in mattoni e numerosi dettagli storici raccontano ancora oggi il passato dell’edificio, particolarmente visibile anche negli ambienti del piano inferiore. La villa dispone di quattro camere da letto, due bagni completi e un ulteriore bagno di servizio, oltre a una spaziosa zona giorno, sala da pranzo e cucina. All’esterno offre un grande giardino privato e completamente recintato, con ampi spazi dove rilassarsi e mangiare all’aperto, ideale per vivere la campagna toscana in totale privacy e tranquillità.",
        en: "An authentic Tuscan stone villa with exceptionally generous interiors and historic character preserved throughout. Timber beams, brick arches and original details still tell the story of the building, especially on the lower floor. The villa has four bedrooms, two full bathrooms and an additional guest bathroom, together with a spacious living room, dining room and kitchen. Outside, a large private, fully fenced garden offers ample room to relax and dine in complete privacy, surrounded by the quiet Tuscan countryside.",
      },
      cover: "stays/villa-01.webp",
      detail: "stays/villa-08.webp",
      gallery: [
        "stays/villa-02.webp",
        "stays/villa-03.webp",
        "stays/villa-04.webp",
        "stays/villa-05.webp",
        "stays/villa-06.webp",
        "stays/villa-07.webp",
      ],
    },
    {
      slug: "fontanelle-1",
      name: "Fontanelle 1",
      category: { it: "GLI APPARTAMENTI", en: "THE APARTMENTS" },
      size: "80 m²",
      guests: "4",
      layout: {
        it: "2 camere · 1 bagno · vista panoramica",
        en: "2 bedrooms · 1 bathroom · panoramic view",
      },
      blurb: {
        it: "Al primo piano, luce e viste sulle colline incontrano il calore di un grande camino.",
        en: "Upstairs, hill views and natural light meet the warmth of a generous fireplace.",
      },
      description: {
        it: "Situata al primo piano, questa accogliente casa toscana regala una splendida vista panoramica sulle colline circostanti. Dispone di due camere da letto e un bagno, oltre a una zona giorno particolarmente ampia e luminosa, con cucina e salotto open space arricchiti da un caratteristico camino. Gli ambienti conservano il fascino autentico della tradizione toscana, con travi in legno a vista e affacci sulla natura. All’esterno è inoltre disponibile uno spazio attrezzato dove poter pranzare e cenare all’aperto, immersi nella tranquillità della campagna.",
        en: "Set on the first floor, this welcoming Tuscan home enjoys panoramic views across the surrounding hills. It offers two bedrooms and one bathroom, as well as an exceptionally spacious, light-filled open-plan kitchen and living room with a traditional fireplace. Exposed timber beams and views of nature preserve the authentic charm of Tuscan country living. A furnished outdoor area is also available for lunches and dinners in the peaceful countryside.",
      },
      cover: "stays/fontanelle-1-01.webp",
      detail: "stays/fontanelle-1-08.webp",
      gallery: [
        "stays/fontanelle-1-02.webp",
        "stays/fontanelle-1-03.webp",
        "stays/fontanelle-1-04.webp",
        "stays/fontanelle-1-05.webp",
        "stays/fontanelle-1-06.webp",
        "stays/fontanelle-1-07.webp",
      ],
    },
    {
      slug: "fontanelle-2",
      name: "Fontanelle 2",
      category: { it: "GLI APPARTAMENTI", en: "THE APARTMENTS" },
      size: "65 m²",
      guests: "3",
      layout: {
        it: "1 camera · 1 bagno · pergolato privato",
        en: "1 bedroom · 1 bathroom · private pergola",
      },
      blurb: {
        it: "Volte originali di oltre trecento anni e un pergolato d’uva tutto da vivere.",
        en: "Three-hundred-year-old vaulted ceilings and a vine-covered pergola to enjoy outdoors.",
      },
      description: {
        it: "Accogliente alloggio in autentico stile toscano, caratterizzato da splendide volte originali di oltre 300 anni, che conservano intatto il fascino storico della casa. Dispone di una camera da letto con un letto matrimoniale e un letto singolo, un bagno e una piacevole zona giorno con cucina, sala da pranzo e camino. All’esterno, un caratteristico pergolato ricoperto dalla vigna crea uno spazio intimo e ombreggiato dove poter mangiare all’aperto, circondati dalla tranquillità della campagna toscana.",
        en: "A welcoming home in authentic Tuscan style, distinguished by beautiful original vaulted ceilings more than 300 years old. It has one bedroom with a double and a single bed, one bathroom, and an inviting living area with kitchen, dining space and fireplace. Outside, a vine-covered pergola creates an intimate, shaded setting for dining in the peace of the Tuscan countryside.",
      },
      cover: "stays/fontanelle-2-cover.png",
      detail: "stays/fontanelle-2-07.webp",
      gallery: [
        "stays/fontanelle-2-02.webp",
        "stays/fontanelle-2-03.webp",
        "stays/fontanelle-2-04.webp",
        "stays/fontanelle-2-05.webp",
        "stays/fontanelle-2-06.webp",
      ],
    },
    {
      slug: "fontanelle-3",
      name: "Fontanelle 3",
      category: { it: "GLI APPARTAMENTI", en: "THE APARTMENTS" },
      size: "70 m²",
      guests: "4",
      layout: {
        it: "2 camere · 2 bagni · giardino recintato",
        en: "2 bedrooms · 2 bathrooms · fenced garden",
      },
      blurb: {
        it: "La casa indipendente con giardino privato e recintato immerso nella natura.",
        en: "An independent home with a private fenced garden immersed in nature.",
      },
      description: {
        it: "Caratteristico alloggio in stile toscano, con ambienti accoglienti, travi in legno a vista e dettagli originali che richiamano il fascino della tradizione rurale. Dispone di due camere da letto, due bagni e una luminosa zona giorno con cucina e spazio per pranzare. All’esterno offre un giardino privato e completamente recintato, arredato per rilassarsi e mangiare all’aperto, ideale per chi desidera tranquillità, privacy e contatto con la natura.",
        en: "A characterful Tuscan home with welcoming rooms, exposed timber beams and original details inspired by rural tradition. It offers two bedrooms, two bathrooms and a bright living area with kitchen and dining space. Outside, a private, fully fenced garden is furnished for relaxing and dining, ideal for guests seeking tranquillity, privacy and a close connection with nature.",
      },
      cover: "stays/fontanelle-3-01.webp",
      detail: "stays/fontanelle-3-preview.webp",
      gallery: [
        "stays/fontanelle-3-02.webp",
        "stays/fontanelle-3-03.webp",
        "stays/fontanelle-3-04.webp",
        "stays/fontanelle-3-05.webp",
        "stays/fontanelle-3-06.webp",
        "stays/fontanelle-3-07.webp",
      ],
    },
    {
      slug: "fontanelle-4",
      name: "Fontanelle 4",
      category: { it: "GLI APPARTAMENTI", en: "THE APARTMENTS" },
      size: "55 m²",
      guests: "2",
      layout: {
        it: "1 camera · 1 bagno · spazio privato",
        en: "1 bedroom · 1 bathroom · private outdoor space",
      },
      blurb: {
        it: "Spazi generosi per due e un angolo privato affacciato sull’aia e sulle colline.",
        en: "Generous spaces for two and a private corner overlooking the farmyard and hills.",
      },
      description: {
        it: "Spazioso e accogliente alloggio in stile toscano, ideale per chi cerca comfort e tranquillità. Dispone di una grande camera matrimoniale, un bagno e ambienti particolarmente ampi, con una cucina completamente attrezzata e un luminoso salotto dove rilassarsi. All’esterno è presente uno spazio privato arredato con tavolo e sedute, affacciato sulla tipica aia toscana, che a sua volta si apre su una splendida vista delle colline circostanti: il luogo ideale per pranzare all’aperto e godersi l’atmosfera autentica della campagna toscana.",
        en: "A spacious, welcoming Tuscan-style home, ideal for guests seeking comfort and tranquillity. It features a large double bedroom, one bathroom, a fully equipped kitchen and a bright, generous living room. Outside, a private furnished area overlooks the traditional Tuscan farmyard and the surrounding hills—an inviting place to dine outdoors and enjoy the atmosphere of the countryside.",
      },
      cover: "stays/fontanelle-4-01.webp",
      detail: "stays/fontanelle-4-05.webp",
      gallery: [
        "stays/fontanelle-4-02.webp",
        "stays/fontanelle-4-03.webp",
        "stays/fontanelle-4-04.webp",
        "stays/fontanelle-4-05.webp",
        "stays/fontanelle-4-06.webp",
        "stays/fontanelle-4-07.webp",
      ],
    },
    {
      slug: "fontanelle-5",
      name: "Fontanelle 5",
      category: { it: "GLI APPARTAMENTI", en: "THE APARTMENTS" },
      size: "80 m²",
      guests: "4",
      layout: {
        it: "2 camere · 2 bagni · terrazza coperta",
        en: "2 bedrooms · 2 bathrooms · covered terrace",
      },
      blurb: {
        it: "Una casa generosa con terrazza privata coperta, pensata per vivere anche all’aperto.",
        en: "A generous home with a private covered terrace designed for outdoor living.",
      },
      description: {
        it: "Ampio e accogliente alloggio in stile toscano, caratterizzato da ambienti generosi e confortevoli. Dispone di due camere da letto, due bagni e una spaziosa zona giorno con cucina, ideale anche per soggiorni più lunghi. Il vero punto di forza è la terrazza privata e coperta, arredata per mangiare e rilassarsi all’aperto in totale tranquillità, godendo dell’atmosfera autentica della campagna toscana.",
        en: "A spacious and welcoming Tuscan-style home with generous, comfortable interiors. It offers two bedrooms, two bathrooms and a large living area with kitchen, making it ideal for longer stays too. Its defining feature is the private covered terrace, furnished for peaceful outdoor dining and relaxation in the authentic Tuscan countryside.",
      },
      cover: "stays/fontanelle-5-01.webp",
      detail: "stays/fontanelle-5-02.webp",
      gallery: [
        "stays/fontanelle-5-02.webp",
        "stays/fontanelle-5-03.webp",
        "stays/fontanelle-5-04.webp",
        "stays/fontanelle-5-05.webp",
        "stays/fontanelle-5-06.webp",
      ],
    },
    {
      slug: "fontanelle-6",
      name: "Fontanelle 6",
      category: { it: "GLI APPARTAMENTI", en: "THE APARTMENTS" },
      size: "75 m²",
      guests: "2",
      layout: {
        it: "1 camera · 1 bagno · Jacuzzi privata",
        en: "1 bedroom · 1 bathroom · private Jacuzzi",
      },
      blurb: {
        it: "Un intimo cottage in pietra con spazio privato nel verde e Jacuzzi esclusiva.",
        en: "An intimate stone cottage with a private garden setting and exclusive Jacuzzi.",
      },
      description: {
        it: "Intimo cottage in pietra immerso nella campagna toscana, ideale per una coppia in cerca di tranquillità e privacy. Dispone di una camera matrimoniale, un bagno e una zona giorno con cucina attrezzata. All’esterno offre uno spazio privato nel verde con tavolo e sedute, impreziosito da una vasca Jacuzzi ad uso esclusivo, perfetta per rilassarsi all’aria aperta circondati dall’atmosfera autentica della Toscana.",
        en: "An intimate stone cottage immersed in the Tuscan countryside, ideal for a couple seeking tranquillity and privacy. It offers one double bedroom, one bathroom and a living area with an equipped kitchen. Outside, a private green space with table and seating is complemented by an exclusive Jacuzzi—perfect for relaxing in the open air, surrounded by the authentic atmosphere of Tuscany.",
      },
      cover: "stays/fontanelle-6-01.webp",
      detail: "stays/fontanelle-6-preview.webp",
      gallery: [
        "stays/fontanelle-6-02.webp",
        "stays/fontanelle-6-03.webp",
        "stays/fontanelle-6-04.webp",
        "stays/fontanelle-6-05.webp",
        "stays/fontanelle-6-06.webp",
        "stays/fontanelle-6-07.webp",
      ],
    },
    {
      slug: "suite",
      name: "Suite con Jacuzzi",
      category: { it: "LA SUITE", en: "THE SUITE" },
      size: "55 m²",
      guests: "2",
      layout: {
        it: "Open space · Jacuzzi · spazio esterno",
        en: "Open-plan suite · Jacuzzi · outdoor space",
      },
      blurb: {
        it: "Una suite open space per due, dove le antiche voltine incontrano il benessere di una grande Jacuzzi.",
        en: "An open-plan suite for two where historic vaulted ceilings meet the comfort of a large Jacuzzi.",
      },
      description: {
        it: "Elegante suite privata open space in autentico stile toscano, caratterizzata da suggestive voltine al soffitto, materiali caldi e dettagli tradizionali. La grande Jacuzzi crea un angolo dedicato al benessere, mentre all’esterno una zona privata attrezzata offre lo spazio ideale per rilassarsi e godersi pranzi e cene all’aperto.",
        en: "An elegant private open-plan suite in authentic Tuscan style, defined by evocative vaulted ceilings, warm materials and traditional details. The large Jacuzzi creates a dedicated wellness corner, while a furnished private outdoor area provides the perfect setting for relaxing and enjoying lunch or dinner in the open air.",
      },
      cover: "stays/suite-01.webp",
      detail: "stays/suite-02.webp",
      gallery: [
        "stays/suite-02.webp",
        "stays/suite-03.webp",
        "stays/suite-04.webp",
        "stays/suite-05.webp",
        "stays/suite-06.webp",
        "stays/suite-07.webp",
      ],
    },
    {
      slug: "rustico",
      name: "Rustico con Jacuzzi",
      category: { it: "IL RUSTICO", en: "THE COUNTRY HOUSE" },
      size: "80 m²",
      guests: "4",
      layout: {
        it: "2 camere · 2 bagni · wellness · giardino privato recintato",
        en: "2 bedrooms · 2 bathrooms · wellness · private fenced garden",
      },
      blurb: {
        it: "Pietra, travi in legno e una stanza wellness, la vostra casa indipendente.",
        en: "Stone, timber beams and a wellness room: your independent Tuscan home.",
      },
      description: {
        it: "Casa toscana completamente ristrutturata, caratterizzata da splendidi soffitti con travi in legno, pareti in pietra a vista e raffinati bagni rivestiti in travertino. Dispone di due camere da letto, due bagni, cucina attrezzata, accogliente salotto, stanza wellness con Jacuzzi e TV, ampio giardino privato completamente recintato e parcheggio privato.",
        en: "A fully restored Tuscan country house featuring beautiful timber-beamed ceilings, exposed stone walls and refined bathrooms finished in travertine. It offers two bedrooms, two bathrooms, an equipped kitchen, a welcoming living room, a private wellness room with Jacuzzi and TV, a large fully fenced garden and private parking.",
      },
      cover: "stays/rustico-01.webp",
      detail: "stays/rustico-preview.webp",
      gallery: [
        "stays/rustico-02.webp",
        "stays/rustico-03.webp",
        "stays/rustico-04.webp",
        "stays/rustico-05.webp",
        "stays/rustico-06.webp",
        "stays/rustico-07.webp",
      ],
    },
  ],

  /* Testi della pagina di dettaglio, uguali per tutte le sistemazioni. */
  stayPage: {
    back: { it: "Tutte le sistemazioni", en: "All stays" },
    kicker: { it: "La tua casa in Toscana", en: "Your home in Tuscany" },
    sizeLabel: { it: "Superficie", en: "Size" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro la dimora", en: "Inside the home" },
    ctaTitle: {
      it: "Questa potrebbe essere la tua Toscana.",
      en: "This could be your Tuscany.",
    },
    ctaLabel: { it: "Richiedi disponibilità", en: "Check availability" },
  },

  /* ================================================================ */
  /* Elementi fissi                                                    */
  /* ================================================================ */

  dock: {
    enabled: true,
    triggerKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECTLY" },
    triggerLabel: { it: "Prenota", en: "Book now" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECTLY" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let’s start here." },
    panelText: {
      it: "Ti rispondiamo direttamente, senza intermediari.",
      en: "We’ll reply directly, with no intermediaries.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: {
    copyright: "© 2026 Agriturismo Le Ville",
  },

  /* ================================================================ */
  /* Pagine legali                                                     */
  /* ================================================================ */

  /* Il corpo accetta HTML semplice: <h2>, <h3>, <p>, <ul>, <li>, <strong>,
     <a>. Da rileggere con il cliente prima della pubblicazione, e da
     aggiornare se si aggiungono analytics o mappe incorporate. Il paragrafo
     su Amenitiz va verificato con l’informativa del fornitore. */

  legalPages: [
    {
      slug: "privacy-policy",
      title: { it: "Privacy Policy", en: "Privacy Policy" },
      body: {
        it: `
<section>
  <h2>Titolare del trattamento</h2>
  <p>Agriturismo Le Ville, Località Le Ville, 53034 Colle di Val d’Elsa (SI).
  Per qualsiasi richiesta relativa ai dati personali è possibile scrivere a
  <a href="mailto:amministrazione@gruppofontani.it">amministrazione@gruppofontani.it</a>.</p>
</section>
<section>
  <h2>Dati raccolti</h2>
  <p>Questo sito non utilizza moduli di contatto propri, non registra account e
  non esegue profilazione. I contatti avvengono tramite WhatsApp, email o
  telefono: in quel caso i dati sono trattati dai rispettivi fornitori secondo
  le loro informative.</p>
  <p>Le prenotazioni online avvengono tramite il motore di prenotazione di
  Amenitiz, incorporato nelle pagine del sito. I dati inseriti per prenotare
  (nome, contatti, date del soggiorno, dati di pagamento) sono raccolti da
  Amenitiz per conto della struttura e trattati secondo l’informativa del
  fornitore.</p>
  <p>Il server che ospita il sito può conservare log tecnici di accesso
  (indirizzo IP, data e ora, pagina richiesta) per finalità di sicurezza e
  diagnostica.</p>
</section>
<section>
  <h2>Finalità e base giuridica</h2>
  <p>I dati eventualmente comunicati sono utilizzati esclusivamente per
  rispondere alle richieste di informazioni e disponibilità, sulla base del
  legittimo interesse a dare riscontro alle richieste ricevute.</p>
</section>
<section>
  <h2>Conservazione</h2>
  <p>Le comunicazioni sono conservate per il tempo necessario a gestire la
  richiesta e gli eventuali obblighi contabili e fiscali conseguenti.</p>
</section>
<section>
  <h2>Diritti dell’interessato</h2>
  <p>È possibile chiedere in qualsiasi momento accesso, rettifica, cancellazione,
  limitazione o portabilità dei propri dati, e opporsi al trattamento,
  scrivendo all’indirizzo indicato sopra. È inoltre possibile proporre reclamo
  al Garante per la protezione dei dati personali.</p>
</section>`,
        en: `
<section>
  <h2>Data controller</h2>
  <p>Agriturismo Le Ville, Località Le Ville, 53034 Colle di Val d’Elsa (SI), Italy.
  For any request concerning personal data, write to
  <a href="mailto:amministrazione@gruppofontani.it">amministrazione@gruppofontani.it</a>.</p>
</section>
<section>
  <h2>Data collected</h2>
  <p>This website has no contact forms of its own, no accounts and no
  profiling. Enquiries reach us through WhatsApp, email or phone: in those cases
  data is processed by the respective providers under their own privacy
  notices.</p>
  <p>Online bookings go through the Amenitiz booking engine, embedded in the
  pages of this site. The data you enter to book (name, contact details, stay
  dates, payment details) is collected by Amenitiz on behalf of the property
  and processed under the provider’s privacy notice.</p>
  <p>The hosting server may keep technical access logs (IP address, timestamp,
  requested page) for security and diagnostic purposes.</p>
</section>
<section>
  <h2>Purpose and legal basis</h2>
  <p>Any data you send us is used solely to answer requests for information and
  availability, on the basis of our legitimate interest in replying to enquiries.</p>
</section>
<section>
  <h2>Retention</h2>
  <p>Messages are kept for as long as needed to handle the enquiry and to meet
  any resulting accounting and tax obligations.</p>
</section>
<section>
  <h2>Your rights</h2>
  <p>You may at any time request access to, correction, erasure, restriction or
  portability of your data, and object to processing, by writing to the address
  above. You may also lodge a complaint with the Italian Data Protection
  Authority.</p>
</section>`,
      },
    },
    {
      slug: "cookie-policy",
      title: { it: "Cookie Policy", en: "Cookie Policy" },
      body: {
        it: `
<section>
  <h2>Cookie utilizzati</h2>
  <p>Questo sito non utilizza cookie di profilazione e non installa strumenti
  di analisi statistica.</p>
  <p>Il motore di prenotazione Amenitiz, incorporato nelle pagine, può
  impostare i cookie tecnici necessari a completare la prenotazione. Sono
  gestiti da Amenitiz secondo la propria cookie policy.</p>
</section>
<section>
  <h2>Memoria locale</h2>
  <p>Il sito salva sul dispositivo una sola preferenza tecnica: la lingua
  scelta, così da riproporla alla visita successiva. Non è un cookie e non
  viene trasmessa a nessun server. Si cancella svuotando i dati del sito dalle
  impostazioni del browser.</p>
</section>
<section>
  <h2>Servizi esterni</h2>
  <p>I collegamenti a WhatsApp, email e telefono aprono applicazioni esterne:
  da quel momento valgono le informative dei rispettivi fornitori. Lo stesso
  vale per il motore di prenotazione Amenitiz.</p>
</section>
<section>
  <h2>Aggiornamenti</h2>
  <p>Se in futuro verranno introdotti strumenti di analisi o mappe
  incorporate, questa pagina sarà aggiornata e verrà aggiunta la richiesta di
  consenso prevista dalla normativa.</p>
</section>`,
        en: `
<section>
  <h2>Cookies used</h2>
  <p>This website uses no profiling cookies and installs no analytics
  tools.</p>
  <p>The Amenitiz booking engine embedded in the pages may set the technical
  cookies needed to complete a booking. They are managed by Amenitiz under its
  own cookie policy.</p>
</section>
<section>
  <h2>Local storage</h2>
  <p>The site stores one technical preference on your device: the language you
  selected, so it can be restored on your next visit. It is not a cookie and is
  never sent to any server. Clearing the site data in your browser settings
  removes it.</p>
</section>
<section>
  <h2>External services</h2>
  <p>Links to WhatsApp, email and phone open external applications: from that
  point their own privacy notices apply. The same goes for the Amenitiz
  booking engine.</p>
</section>
<section>
  <h2>Updates</h2>
  <p>Should analytics or embedded maps be added in future, this page will be
  updated and the consent request required by law will be introduced.</p>
</section>`,
      },
    },
  ],
};

export default site;
