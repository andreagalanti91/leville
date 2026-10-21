# Agriturismo Le Ville

Sito di Agriturismo Le Ville, Colle di Val d'Elsa — in produzione su
[agriturismoleville.it](https://agriturismoleville.it).

Tutto il contenuto (testi, foto, contatti, ordine delle sezioni) sta in
`tenants/le-ville/site.ts`; il codice in `src/` e `app/` lo trasforma in un
sito statico.

---

## Avvio rapido

```bash
npm ci
npm run dev
```

Apre `http://localhost:3000`.

---

## Comandi

| Comando | Cosa fa |
|---|---|
| `npm run dev` | Sviluppo locale con ricarica automatica |
| `npm run check` | Controllo dei tipi TypeScript |
| `npm run validate` | Controlla che la configurazione sia completa e coerente |
| `npm run build:static` | Compila il sito in `dist/le-ville/`, file statici |
| `npm run media:prepare` | Converte le foto grezze in webp con i nomi giusti |
| `npm run media:scan` | Legge le foto e stampa gli array `gallery` |
| `npm run build` | Applicazione Next completa (richiede Node sul server) |

---

## Struttura

```
tenants/le-ville/
├── site.ts         TUTTO il contenuto: testi, foto, contatti, sezioni
└── theme.css       colori e font

public/tenants/le-ville/   foto e video

src/
├── config/
│   ├── types.ts        lo schema del contenuto
│   └── index.ts        carica la configurazione, costruisce le URL
├── lib/                lingue, animazioni allo scroll, geometria della mappa
├── components/
│   ├── sections/       una sezione della homepage per file
│   ├── layout/         header, footer, pulsante "Prenota" flottante
│   ├── HomePage.tsx    monta le sezioni nell'ordine della configurazione
│   ├── StayPage.tsx    pagina di dettaglio di una sistemazione
│   └── LegalPage.tsx   privacy e cookie policy
└── styles/
    ├── tokens.css      colori e font, valori di partenza
    ├── site.css        ordine di caricamento (significativo)
    └── parts/          il CSS diviso in 18 blocchi

app/                    rotte Next, sottili: delegano ai componenti
docs/                   documentazione
scripts/                compilazione e utilità
```

---

## Le cose da sapere

**1. I contenuti stanno solo in `tenants/le-ville/site.ts`.**
Nessun testo, immagine, numero di telefono o colore compare dentro `src/` o
`app/`. Se devi cambiare qualcosa che si vede a schermo, è lì.

**2. Le sezioni sono un array riordinabile.**
`sections` nella configurazione è l'ordine della pagina. Nessuna modifica al
codice per spostarle o toglierle.

**3. Il motore di prenotazione è incorporato.**
L'indirizzo Amenitiz sta in `booking.url`. Compare in un iframe nella sezione
`#prenota` della homepage e in fondo a ogni pagina sistemazione; tutti i
pulsanti "Prenota" scendono lì.

**4. L'ordine dei file in `src/styles/site.css` è significativo.**
Il CSS è stratificato: alcune regole in coda sovrascrivono di proposito regole
precedenti. Spostare un `@import` può cambiare il risultato a schermo.

Dettagli in **[docs/ARCHITETTURA.md](docs/ARCHITETTURA.md)**.

---

## Pubblicazione

`npm run build:static` produce `dist/le-ville/`: HTML, CSS, JavaScript e
media. Nessun database, nessun Node sul server.

```bash
SITE_URL=https://agriturismoleville.it npm run build:static
```

`SITE_URL` decide il dominio dichiarato a sitemap, robots, dati strutturati e
anteprime social.

**In una sottocartella** (`https://esempio.it/demo`) serve `BASE_PATH`: tutti
i collegamenti del sito sono assoluti, e senza le pagine cercherebbero i file
nella radice.

```bash
BASE_PATH=/demo npm run build:static
```

**Anteprime di lavoro**: compilale sempre con `NOINDEX=true`, così i motori di
ricerca non le indicizzano.

### Anteprima su GitHub Pages

A ogni push su un ramo `claude/**` il workflow
`.github/workflows/anteprima.yml` compila il sito con `NOINDEX=true` e lo
pubblica su <https://andreagalanti91.github.io/leville/>.

Una tantum: *Settings → Pages → Source: Deploy from a branch → `gh-pages` /
(root)*.

---

## Da tenere presente

**Pagine legali.** Privacy e cookie policy citano il motore di prenotazione
Amenitiz incorporato nel sito. Vanno rilette e approvate dal cliente, e
verificate con l'informativa di Amenitiz.

**Peso dei media.** Foto e video pesano circa 42 MB e stanno nel repository.
Tutte le URL passano da `asset()` in `src/config/index.ts`: spostarli su un
CDN è una modifica in un punto solo.

**Esperienze.** Il CSS prevede un'inquadratura diversa per le prime tre card
esperienze (`.exp-card-1/2/3`). Dalla quarta servono regole aggiuntive in
`src/styles/parts/09-experiences.css`.

---

## Requisiti

- Node.js 22.13 o successivo
- npm 10 o successivo
