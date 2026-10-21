/**
 * AGRITURISMO FATTORIA NERBONA — DEMO COMMERCIALE
 * ===============================================
 *
 * ATTENZIONE: questa è una demo, non un sito pronto.
 *
 * I contenuti sono stati ricostruiti dalle schede pubbliche della struttura
 * (Visit Tuscany, Agriturismo.it, Booking) perché il sito ufficiale blocca
 * l'accesso automatico. Servono a mostrare l'impostazione grafica, non a
 * essere pubblicati.
 *
 * Prima di trasformarla in un sito vero servono, dal cliente:
 *   - telefono, email e coordinate esatte (sotto sono segnati TODO)
 *   - nomi reali e dati di ogni alloggio
 *   - le fotografie
 *   - conferma o riscrittura di tutti i testi
 *
 * LE FOTO. Nessuna immagine è ancora presente in public/tenants/nerbona/.
 * Scaricale dal loro sito in prospects/nerbona/foto/ seguendo la struttura
 * descritta in scripts/prepare-media.mjs, poi lancia
 *   SITE_ID=nerbona npm run media:prepare
 *
 * COME SONO ORGANIZZATI GLI ALLOGGI. La struttura ha due sedi distinte,
 * Nerbona e La Casina. Non è servito aggiungere niente allo schema: il campo
 * `category` di ogni sistemazione porta il nome della sede, e nel carosello
 * compare come etichetta sopra al nome. È lo stesso meccanismo che a Le Ville
 * distingue "LA VILLA" da "GLI APPARTAMENTI".
 */

import type { SiteConfig } from "../../src/config/types";

const site: SiteConfig = {
  brand: {
    id: "nerbona",
    prefix: "Agriturismo",
    name: "Fattoria Nerbona",
    logo: "logo.png",
    /* Codice Identificativo Nazionale: in Italia va esposto sul sito.
       Compare da solo nel footer. */
    cin: "IT052012B5BXRHWPRU",
  },

  contact: {
    /* Il cellulare è il recapito principale perché è quello su cui funziona
       WhatsApp; il fisso della reception compare come secondo numero. */
    phone: "393489038897",
    phoneDisplay: "+39 348 903 8897",
    phoneAlt: { number: "390577971066", display: "+39 0577 971066" },
    email: "info@nerbona.com",
    address: ["Località Nerbona", "53034 Colle di Val d'Elsa (SI)"],
    /* Posizione approssimativa: da sostituire con quella esatta presa da
       Google Maps (tasto destro sul punto). Incide sulla mappa del
       territorio e sui dati strutturati per i motori di ricerca. */
    coordinates: { lat: 43.3767, lng: 11.0731 },
  },

  seo: {
    domain: "https://andreagalanti.it/demo/nerbona",
    title: {
      it: "Fattoria Nerbona | 600 ettari di Toscana",
      en: "Fattoria Nerbona | 600 hectares of Tuscany",
    },
    description: {
      it: "Due strutture, due piscine e seicento ettari di campagna tra Siena e Firenze, a pochi minuti da Colle di Val d'Elsa.",
      en: "Two estates, two pools and six hundred hectares of countryside between Siena and Florence.",
    },
    ogImage: "estate/aerial.webp",
  },

  locales: ["it", "en"],
  localeNames: { it: "Italiano", en: "English" },

  mediaVersion: "2026-08-29",

  nav: [
    { target: "tenuta", label: { it: "La tenuta", en: "The estate" } },
    { target: "sistemazioni", label: { it: "Alloggi", en: "Stays" } },
    { target: "servizi", label: { it: "Servizi", en: "Facilities" } },
    { target: "territorio", label: { it: "Territorio", en: "Explore" } },
  ],

  headerCta: { it: "Richiedi disponibilità", en: "Check availability" },

  sections: [
    /* Niente video: la struttura non ne ha uno utilizzabile. L'apertura usa
       una fotografia a tutto schermo, che lo schema già prevede. */
    {
      type: "hero",
      id: "home",
      image: {
        src: "estate/hero.webp",
        alt: {
          it: "La tenuta di Nerbona dall'alto",
          en: "Nerbona estate from above",
        },
      },
      labelParts: [
        { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" },
        { it: "600 ettari", en: "600 hectares" },
      ],
      titleLines: [
        { it: "Seicento ettari", en: "Six hundred hectares" },
        { it: "di silenzio.", en: "of silence." },
      ],
      intro: {
        it: "Due strutture, due piscine, venti alloggi ricavati da antiche case coloniche.",
        en: "Two estates, two pools, twenty homes carved from old farm buildings.",
      },
      cta: {
        label: { it: "Scopri la tenuta", en: "Discover the estate" },
        href: "#tenuta",
      },
      pillars: [
        { it: "Due piscine", en: "Two pools" },
        { it: "Sentieri e mountain bike", en: "Trails and mountain bikes" },
        { it: "San Gimignano · 18 km", en: "San Gimignano · 18 km" },
      ],
    },

    {
      type: "story",
      id: "tenuta",
      number: "01",
      numberLabel: { it: "LA TENUTA", en: "THE ESTATE" },
      ghost: "600 ETTARI",
      titleLines: [
        { it: "Tra Siena e Firenze,", en: "Between Siena and Florence," },
        { it: "dove il tempo", en: "where time" },
      ],
      titleEmphasis: { it: "rallenta.", en: "slows down." },
      mainImage: {
        src: "estate/landscape.webp",
        alt: { it: "Le colline della tenuta", en: "The hills of the estate" },
        caption: {
          it: "Seicento ettari attraversati da sentieri e scorci",
          en: "Six hundred hectares crossed by paths and open views",
        },
      },
      aerialImage: {
        src: "estate/aerial.webp",
        alt: {
          it: "La fattoria vista dall'alto",
          en: "The farm seen from above",
        },
        badge: "43°22′ N · 11°04′ E",
      },
      manifesto: {
        label: { it: "DUE SEDI, UNA TENUTA", en: "TWO SITES, ONE ESTATE" },
        text: {
          it: "Nerbona si estende su seicento ettari di campagna senese, attraversati da sentieri e viali alberati. La sede principale raccoglie gli appartamenti, la villa e la piscina attorno all'aia; a un chilometro e mezzo, oltre un boschetto, La Casina custodisce cinque alloggi e una seconda piscina, per chi cerca più raccoglimento. Ogni casa è stata ricavata da un'antica struttura rurale e conserva travi a vista, spazi esterni privati e il carattere che le viene dalla sua storia.",
          en: "Nerbona stretches across six hundred hectares of Sienese countryside, crossed by footpaths and tree-lined avenues. The main site gathers apartments, villa and pool around the farmyard; a kilometre and a half away, beyond a small wood, La Casina holds five homes and a second pool for those seeking greater seclusion. Every house was carved from an old rural building and keeps its exposed beams, private outdoor space and the character its history gave it.",
        },
      },
      cursorLabel: { it: "ESPLORA", en: "EXPLORE" },
    },

    {
      type: "stays",
      id: "sistemazioni",
      kicker: { it: "DORMIRE A NERBONA", en: "STAY AT NERBONA" },
      title: {
        it: "Venti case, due luoghi, un solo paesaggio.",
        en: "Twenty homes, two places, one landscape.",
      },
      sizeLabel: { it: "TIPOLOGIA", en: "TYPE" },
      guestsLabel: { it: "OSPITI", en: "GUESTS" },
      linkLabel: { it: "Scopri l'alloggio", en: "Explore this home" },
      scrollHint: { it: "SCORRI PER ESPLORARE", en: "SCROLL TO EXPLORE" },
      endCard: {
        lines: ["FATTORIA", "NERBONA"],
        cta: {
          label: { it: "Chiedi disponibilità", en: "Ask about availability" },
          href: "#contatti",
        },
      },
    },

    /* La piscina principale, con la vista sulle torri di San Gimignano. */
    {
      type: "feature",
      id: "piscina",
      image: {
        src: "estate/pool-nerbona.webp",
        alt: { it: "La piscina di Nerbona", en: "The Nerbona pool" },
      },
      kicker: { it: "La piscina", en: "The pool" },
      title: {
        it: "Da qui si vedono le torri di San Gimignano.",
        en: "From here you can see the towers of San Gimignano.",
      },
      text: {
        it: "Diciotto chilometri in linea d'aria, e all'orizzonte il profilo che ha reso famosa questa valle.",
        en: "Eighteen kilometres away, and on the horizon the skyline that made this valley famous.",
      },
    },

    /* La seconda sede. Stesso tipo di sezione usato una seconda volta: è il
       vantaggio di avere le sezioni come elenco riordinabile. */
    {
      type: "feature",
      id: "casina",
      image: {
        src: "estate/casina.webp",
        alt: { it: "La Casina", en: "La Casina" },
      },
      kicker: { it: "La Casina", en: "La Casina" },
      title: {
        it: "A un chilometro e mezzo, oltre il bosco.",
        en: "A kilometre and a half away, beyond the wood.",
      },
      text: {
        it: "Cinque alloggi, una piscina tutta loro e il silenzio di chi è arrivato dove finisce la strada.",
        en: "Five homes, a pool of their own, and the silence of somewhere the road ends.",
      },
    },

    {
      type: "experiences",
      id: "servizi",
      kicker: { it: "GIORNATE A NERBONA", en: "DAYS AT NERBONA" },
      title: {
        it: "Tutto quello che serve per non ripartire.",
        en: "Everything you need to stay put.",
      },
      intro: {
        it: "Tre modi di occupare il tempo, a pochi passi da casa.",
        en: "Three ways to fill the day, a few steps from your door.",
      },
      marquee: {
        it: "BOSCO · ACQUA · TAVOLA · SENTIERI · GIOCO · ",
        en: "WOODS · WATER · TABLE · TRAILS · PLAY · ",
      },
      itemLabel: { it: "SERVIZIO", en: "FACILITY" },
      ctaLabel: { it: "Scrivici per saperne di più", en: "Ask us about it" },
      ctaHref: "#contatti",
      /* Restano tre: il CSS dà un'inquadratura dedicata solo alle prime tre
         card. Con una quarta servono le regole in 09-experiences.css. */
      items: [
        {
          title: "Mountain bike",
          word: { it: "SENTIERI", en: "TRAILS" },
          meta: {
            it: "600 ettari · Boschi · Colline",
            en: "600 hectares · Woods · Hills",
          },
          text: {
            it: "Le biciclette si noleggiano in reception e i sentieri partono dall'aia. Seicento ettari di proprietà da attraversare senza incontrare una strada asfaltata.",
            en: "Bikes are rented at reception and the trails start from the farmyard. Six hundred hectares of private land to cross without meeting a paved road.",
          },
          image: "experiences/bike.webp",
        },
        {
          title: "Cucina in autogestione",
          word: { it: "TAVOLA", en: "TABLE" },
          meta: {
            it: "Barbecue · Catering · Chef",
            en: "Barbecue · Catering · Chef",
          },
          text: {
            it: "Due aree barbecue e una cucina attrezzata per i gruppi. Ci si arrangia, si chiama un catering o si fa venire uno chef: decidete voi come mangiare.",
            en: "Two barbecue areas and a kitchen equipped for groups. Cook for yourselves, call in catering, or have a chef come to you.",
          },
          image: "experiences/kitchen.webp",
        },
        {
          title: "Spazi per giocare",
          word: { it: "GIOCO", en: "PLAY" },
          meta: {
            it: "Ping pong · Calcio · Pallavolo",
            en: "Table tennis · Football · Volleyball",
          },
          text: {
            it: "Ping pong, biliardino, porte da calcio, rete da pallavolo e altalene. Gli spazi aperti sono abbastanza grandi da lasciar correre i bambini senza doverli guardare.",
            en: "Table tennis, table football, goalposts, a volleyball net and swings. The open spaces are large enough to let children run without keeping an eye on them.",
          },
          image: "experiences/play.webp",
        },
      ],
    },

    {
      type: "trail",
      id: "sentieri",
      mainImage: {
        src: "trail/main.webp",
        alt: { it: "I sentieri della tenuta", en: "The estate trails" },
      },
      detailImage: {
        src: "trail/detail.webp",
        alt: {
          it: "Il bosco fra le due strutture",
          en: "The wood between the two sites",
        },
      },
      number: "600",
      numberUnit: "ha",
      kicker: { it: "La proprietà", en: "The property" },
      title: {
        it: "Si cammina per un'ora senza uscire dalla tenuta.",
        en: "You can walk for an hour without leaving the estate.",
      },
      text: {
        it: "Il sentiero che collega Nerbona a La Casina attraversa un boschetto e si percorre a piedi in venti minuti. Da lì si aprono i percorsi più lunghi.",
        en: "The path linking Nerbona to La Casina crosses a small wood and takes twenty minutes on foot. Longer routes open up from there.",
      },
      startLabel: { it: "NERBONA", en: "NERBONA" },
      endLabel: { it: "LA CASINA", en: "LA CASINA" },
    },

    {
      type: "territory",
      id: "territorio",
      kicker: "Heart of Tuscany",
      title: {
        it: "Fra Siena e Firenze, senza dover scegliere.",
        en: "Between Siena and Florence, without having to choose.",
      },
      text: {
        it: "Colle di Val d'Elsa a pochi minuti, San Gimignano all'orizzonte, e le due città d'arte a meno di un'ora.",
        en: "Colle di Val d'Elsa minutes away, San Gimignano on the horizon, and both art cities within the hour.",
      },
      disclaimer: {
        it: "DISTANZE STRADALI INDICATIVE",
        en: "APPROXIMATE DRIVING DISTANCES",
      },
      mapLabel: {
        it: "Mappa stilizzata delle distanze da Fattoria Nerbona",
        en: "Stylised map of distances from Fattoria Nerbona",
      },
      gridLabels: { x: "43°22′ N", y: "11°04′ E" },
      homeLabel: { lines: ["Fattoria", "Nerbona"], sub: "Colle di Val d'Elsa" },
      legend: {
        home: "Nerbona",
        destinations: { it: "Destinazioni", en: "Destinations" },
        note: {
          it: "Distanze stradali indicative",
          en: "Approximate driving distances",
        },
      },

      /* Qui si vede il vantaggio del calcolo automatico: sono state indicate
         solo le coordinate, e posizione sulla mappa e rotta tratteggiata
         vengono ricavate da src/lib/map-geometry.ts. A Le Ville quei valori
         erano stati rifiniti a mano, uno per uno.
         Da controllare a occhio prima di pubblicare: se due località finiscono
         sovrapposte, si aggiunge `position` per spostarle. */
      items: [
        {
          id: "colle",
          name: { it: "Colle di Val d'Elsa", en: "Colle di Val d'Elsa" },
          distance: "10 km",
          coordinates: { lat: 43.4213, lng: 11.1275 },
        },
        {
          id: "gimignano",
          name: { it: "San Gimignano", en: "San Gimignano" },
          distance: "18 km",
          coordinates: { lat: 43.4677, lng: 11.0431 },
        },
        {
          id: "casole",
          name: { it: "Casole d'Elsa", en: "Casole d'Elsa" },
          distance: "9 km",
          coordinates: { lat: 43.3419, lng: 11.0439 },
        },
        {
          id: "volterra",
          name: { it: "Volterra", en: "Volterra" },
          distance: "30 km",
          coordinates: { lat: 43.4014, lng: 10.8608 },
        },
        {
          id: "monteriggioni",
          name: { it: "Monteriggioni", en: "Monteriggioni" },
          distance: "22 km",
          coordinates: { lat: 43.3906, lng: 11.2244 },
        },
        {
          id: "siena",
          name: { it: "Siena", en: "Siena" },
          distance: "35 km",
          coordinates: { lat: 43.3188, lng: 11.3308 },
        },
        {
          id: "chianti",
          name: { it: "Castellina in Chianti", en: "Castellina in Chianti" },
          distance: "38 km",
          coordinates: { lat: 43.4703, lng: 11.2836 },
        },
        {
          id: "florence",
          name: { it: "Firenze", en: "Florence" },
          distance: "60 km",
          coordinates: { lat: 43.7696, lng: 11.2558 },
        },
        {
          id: "montalcino",
          name: { it: "Montalcino", en: "Montalcino" },
          distance: "70 km",
          coordinates: { lat: 43.0576, lng: 11.4889 },
        },
      ],
    },

    {
      type: "contact",
      id: "contatti",
      image: {
        src: "contact/main.webp",
        alt: {
          it: "Fattoria Nerbona e le colline senesi",
          en: "Fattoria Nerbona and the Sienese hills",
        },
      },
      kicker: { it: "Il vostro soggiorno", en: "Your stay" },
      title: {
        it: "Vi aspettiamo a Nerbona.",
        en: "We'll be waiting at Nerbona.",
      },
      text: {
        it: "Scriveteci: vi aiutiamo a scegliere fra le due sedi e a trovare l'alloggio della misura giusta.",
        en: "Get in touch: we'll help you choose between the two sites and find a home of the right size.",
      },
      whatsappLabel: {
        it: "Scrivici su WhatsApp",
        en: "Message us on WhatsApp",
      },
      emailLabel: { it: "Invia una email", en: "Send us an email" },
    },
  ],

  /* ================================================================ */
  /* Alloggi                                                           */
  /* ================================================================ */

  /* La struttura ne ha venti: dodici appartamenti, due camere e Villa Aia a
     Nerbona, cinque appartamenti a La Casina.

     Qui sotto sono rappresentate le TIPOLOGIE documentate, non i venti
     alloggi reali: nomi, metrature e posti letto di ciascuno non sono
     pubblici. Appena il cliente li fornisce, ogni voce si duplica e si
     completa, e le foto seguono la convenzione <slug>-01.webp.

     Il campo `category` porta il nome della sede, così nel carosello si
     capisce a colpo d'occhio dove si trova ogni alloggio. */

  accommodations: [
    {
      slug: "villa-aia",
      name: "Villa Aia",
      category: { it: "NERBONA · LA VILLA", en: "NERBONA · THE VILLA" },
      size: "Villa",
      guests: "12",
      layout: {
        it: "Più camere · più bagni · giardino e spazi propri",
        en: "Several bedrooms · several bathrooms · private garden",
      },
      blurb: {
        it: "La casa più grande della tenuta, pensata per due famiglie o un gruppo che vuole stare insieme.",
        en: "The largest house on the estate, made for two families or a group that wants to stay together.",
      },
      description: {
        it: "Villa Aia è l'alloggio più ampio di Nerbona: spazi generosi all'interno, altrettanti all'aperto, e la libertà di organizzarsi le giornate senza dipendere da nessuno. Si affaccia sull'aia della sede principale, a pochi passi dalla piscina e dalle aree gioco. È la scelta di chi arriva in gruppo e vuole una casa sola invece di appartamenti separati.",
        en: "Villa Aia is the largest home at Nerbona: generous inside, just as generous outdoors, and free to organise your days however you like. It looks onto the main farmyard, a few steps from the pool and the play areas. The choice for groups who want one house rather than separate apartments.",
      },
      cover: "stays/villa-aia-01.webp",
      detail: "stays/villa-aia-02.webp",
      gallery: [
        "stays/villa-aia-03.webp",
        "stays/villa-aia-04.webp",
        "stays/villa-aia-05.webp",
      ],
    },
    {
      slug: "quadrilocale",
      name: "Quadrilocale",
      category: { it: "NERBONA · APPARTAMENTI", en: "NERBONA · APARTMENTS" },
      size: "3 camere",
      guests: "8",
      layout: {
        it: "3 camere · 2 bagni · spazio esterno privato",
        en: "3 bedrooms · 2 bathrooms · private outdoor space",
      },
      blurb: {
        it: "Tre camere e due bagni, per chi viaggia in tanti senza voler rinunciare agli spazi.",
        en: "Three bedrooms and two bathrooms, for larger groups who still want room to breathe.",
      },
      description: {
        it: "Il taglio più ampio fra gli appartamenti di Nerbona: tre camere, due bagni, cucina completamente attrezzata e uno spazio esterno privato con tavolo, sedie e ombrellone. Come tutti gli alloggi della fattoria è ricavato da un'antica struttura rurale, con travi in legno a vista e i dettagli che la ristrutturazione ha conservato.",
        en: "The most spacious of the Nerbona apartments: three bedrooms, two bathrooms, a fully equipped kitchen and a private outdoor area with table, chairs and parasol. Like every home on the farm it was carved from an old rural building, with exposed timber beams and the details the restoration kept.",
      },
      cover: "stays/quadrilocale-01.webp",
      detail: "stays/quadrilocale-02.webp",
      gallery: [
        "stays/quadrilocale-03.webp",
        "stays/quadrilocale-04.webp",
        "stays/quadrilocale-05.webp",
      ],
    },
    {
      slug: "trilocale",
      name: "Trilocale",
      category: { it: "NERBONA · APPARTAMENTI", en: "NERBONA · APARTMENTS" },
      size: "2 camere",
      guests: "6",
      layout: {
        it: "2 camere · 1 o 2 bagni · spazio esterno privato",
        en: "2 bedrooms · 1 or 2 bathrooms · private outdoor space",
      },
      blurb: {
        it: "Il taglio più richiesto: due camere, cucina attrezzata e un tavolo fuori dalla porta.",
        en: "The most popular size: two bedrooms, equipped kitchen and a table just outside the door.",
      },
      description: {
        it: "Due camere da letto, uno o due bagni a seconda dell'alloggio, e una zona giorno con cucina completamente attrezzata. Fuori, uno spazio riservato con tavolo, sedie e ombrellone, dove si finisce per passare gran parte della giornata. Alcuni appartamenti di questa tipologia sono accessibili anche a persone con disabilità.",
        en: "Two bedrooms, one or two bathrooms depending on the unit, and a living area with a fully equipped kitchen. Outside, a reserved space with table, chairs and parasol where most of the day tends to be spent. Some apartments of this type are also accessible to guests with disabilities.",
      },
      cover: "stays/trilocale-01.webp",
      detail: "stays/trilocale-02.webp",
      gallery: [
        "stays/trilocale-03.webp",
        "stays/trilocale-04.webp",
        "stays/trilocale-05.webp",
      ],
    },
    {
      slug: "bilocale",
      name: "Bilocale",
      category: { it: "NERBONA · APPARTAMENTI", en: "NERBONA · APARTMENTS" },
      size: "1 camera",
      guests: "4",
      layout: {
        it: "1 camera · 1 bagno · spazio esterno privato",
        en: "1 bedroom · 1 bathroom · private outdoor space",
      },
      blurb: {
        it: "Una camera, tutto il necessario, e la porta che si apre sulla campagna.",
        en: "One bedroom, everything you need, and a door that opens onto the countryside.",
      },
      description: {
        it: "Il taglio più raccolto: una camera, un bagno e una zona giorno con cucina attrezzata. Pensato per una coppia o una famiglia piccola, con lo stesso spazio esterno privato degli alloggi più grandi.",
        en: "The most compact option: one bedroom, one bathroom and a living area with an equipped kitchen. Made for a couple or a small family, with the same private outdoor space as the larger homes.",
      },
      cover: "stays/bilocale-01.webp",
      detail: "stays/bilocale-02.webp",
      gallery: [
        "stays/bilocale-03.webp",
        "stays/bilocale-04.webp",
        "stays/bilocale-05.webp",
      ],
    },
    {
      slug: "camera",
      name: "Camera",
      category: { it: "NERBONA · CAMERE", en: "NERBONA · ROOMS" },
      size: "Camera",
      guests: "2",
      layout: {
        it: "1 camera · bagno privato",
        en: "1 bedroom · private bathroom",
      },
      blurb: {
        it: "Due camere nella sede principale, per soggiorni brevi.",
        en: "Two rooms in the main building, for shorter stays.",
      },
      description: {
        it: "Nella sede principale ci sono due camere con bagno privato, senza cucina: la soluzione per chi si ferma poche notti o preferisce appoggiarsi ai servizi comuni della fattoria.",
        en: "The main building has two rooms with private bathroom and no kitchen: the option for those staying a few nights or preferring to rely on the farm's shared facilities.",
      },
      cover: "stays/camera-01.webp",
      detail: "stays/camera-02.webp",
      gallery: ["stays/camera-03.webp", "stays/camera-04.webp"],
    },
    {
      slug: "casina-appartamento",
      name: "Appartamento La Casina",
      category: {
        it: "LA CASINA · APPARTAMENTI",
        en: "LA CASINA · APARTMENTS",
      },
      size: "1-2 camere",
      guests: "5",
      layout: {
        it: "1 o 2 camere · piscina riservata · spazio esterno",
        en: "1 or 2 bedrooms · own pool · outdoor space",
      },
      blurb: {
        it: "Cinque alloggi oltre il bosco, con una piscina che serve solo loro.",
        en: "Five homes beyond the wood, with a pool that serves only them.",
      },
      description: {
        it: "La Casina è la seconda sede della fattoria, a un chilometro e mezzo da quella principale, raggiungibile in auto in pochi minuti o a piedi attraverso un boschetto. Cinque appartamenti soltanto, una piscina, barbecue, altalena e porte da calcio: chi cerca il silenzio sceglie questa.",
        en: "La Casina is the farm's second site, a kilometre and a half from the main one, a few minutes by car or a walk through a small wood. Just five apartments, a pool, barbecue, swing and goalposts: the choice for those seeking quiet.",
      },
      cover: "stays/casina-appartamento-01.webp",
      detail: "stays/casina-appartamento-02.webp",
      gallery: [
        "stays/casina-appartamento-03.webp",
        "stays/casina-appartamento-04.webp",
        "stays/casina-appartamento-05.webp",
      ],
    },
  ],

  stayPage: {
    back: { it: "Tutti gli alloggi", en: "All stays" },
    kicker: { it: "La vostra casa a Nerbona", en: "Your home at Nerbona" },
    sizeLabel: { it: "Tipologia", en: "Type" },
    guestsLabel: { it: "Ospiti", en: "Guests" },
    galleryLabel: { it: "Dentro la casa", en: "Inside the home" },
    ctaTitle: {
      it: "Questa potrebbe essere la vostra estate.",
      en: "This could be your summer.",
    },
    ctaLabel: { it: "Richiedi disponibilità", en: "Check availability" },
  },

  dock: {
    enabled: true,
    triggerKicker: { it: "PARLA CON NOI", en: "TALK TO US" },
    triggerLabel: { it: "Contattaci", en: "Contact us" },
    panelKicker: { it: "PRENOTA DIRETTAMENTE", en: "BOOK DIRECTLY" },
    panelTitle: { it: "Iniziamo da qui.", en: "Let's start here." },
    panelText: {
      it: "Vi rispondiamo direttamente, senza intermediari.",
      en: "We reply directly, with no intermediaries.",
    },
    phoneLabel: { it: "Telefono", en: "Phone" },
  },

  footer: {
    copyright: "© 2026 Fattoria Nerbona",
  },

  /* Testi di partenza, da riscrivere con il cliente prima di qualsiasi
     pubblicazione reale. Nella versione definitiva vanno inclusi il codice
     identificativo nazionale della struttura e i dati della società. */
  /* La struttura gestisce già le proprie informative su Iubenda. Meglio
     rimandare al loro documento, che resta aggiornato da chi lo mantiene,
     che tenerne una copia qui destinata a invecchiare.
     La cookie policy va chiesta al cliente: su Iubenda di solito esiste allo
     stesso indirizzo con /cookie-policy in coda, ma va verificata. */
  legalPages: [
    {
      slug: "privacy-policy",
      title: { it: "Privacy Policy", en: "Privacy Policy" },
      externalUrl: "https://www.iubenda.com/privacy-policy/77766258",
    },
    {
      slug: "cookie-policy",
      title: { it: "Cookie Policy", en: "Cookie Policy" },
      externalUrl:
        "https://www.iubenda.com/privacy-policy/77766258/cookie-policy",
    },
  ],
};

export default site;
