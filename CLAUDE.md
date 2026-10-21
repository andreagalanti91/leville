# Istruzioni per Claude

Sito di Agriturismo Le Ville, Colle di Val d'Elsa — **in produzione** su
agriturismoleville.it: ogni modifica finisce su un sito vero.

Leggi questo file prima di toccare qualsiasi cosa. `docs/ARCHITETTURA.md` ha il
dettaglio.

---

## La regola che tiene insieme tutto

**Nessun testo, immagine, numero di telefono, indirizzo o colore deve comparire
dentro `src/` o `app/`.**

Tutto ciò che si vede a schermo sta in `tenants/le-ville/site.ts`. Se ti viene
chiesto di cambiare qualcosa di visibile, è quasi sempre quel file, non un
componente.

Se un dato serve in più punti (un numero di telefono, un link di prenotazione),
va scritto **una volta sola** in configurazione e letto da lì. Non duplicarlo:
al prossimo cambio se ne dimentica uno.

## Struttura

```
tenants/le-ville/site.ts     contenuto — qui si lavora quasi sempre
tenants/le-ville/theme.css   colori e font
public/tenants/le-ville/     foto e video
src/config/types.ts          lo schema del contenuto
src/components/sections/     una sezione della homepage per file
src/styles/parts/            il CSS, in 18 blocchi
app/                         rotte Next, sottili
.github/workflows/           anteprima su GitHub Pages
```

## Comandi

```bash
npm run dev                  # sviluppo locale
npm run validate             # controlla la configurazione
SITE_URL=https://agriturismoleville.it npm run build:static
npm run media:prepare        # converte le foto grezze in webp
npm run media:scan           # genera gli array gallery
```

**Lancia sempre `npm run validate` prima di dire che una modifica è finita.**
Controlla foto mancanti, TODO rimasti, traduzioni incomplete, ancore rotte,
formato di telefono ed email. È più affidabile di rileggere la configurazione.

## Prenotazione

Il motore Amenitiz (`booking.url` in `site.ts`) è incorporato in un iframe
dalla sezione `booking` (ancora `#prenota`) e in fondo a ogni pagina
sistemazione. Header, menù mobile, pulsante flottante e header delle pagine
sistemazione puntano a `bookingAnchor` (`src/config/index.ts`): non scrivere
`#prenota` a mano nei componenti.

## Anteprima

Ogni push su `claude/**` pubblica il sito su
https://andreagalanti91.github.io/leville/ (workflow `anteprima.yml`),
compilato con `NOINDEX=true`. Ogni anteprima pubblica va compilata con
`NOINDEX=true`.

## Cose su cui si sbaglia facilmente

**L'ordine dei file in `src/styles/site.css` è significativo.** Il CSS è
stratificato: alcune regole in coda sovrascrivono di proposito regole
precedenti. Spostare un `@import` cambia il risultato a schermo. Stile nuovo:
in fondo, o in un file importato per ultimo.

**L'header è fisso e sta fuori dalla hero.** Un antenato con `transform` lo
farebbe scorrere con la pagina. Le scene a tutto schermo (racconto,
sistemazioni) tengono conto della sua altezza con `--header-h`.

**`FillImage` e `PictureImage` non sono intercambiabili.** Le immagini usano
`fill`, quindi si distendono sull'antenato posizionato più vicino.
`PictureImage` aggiunge un wrapper `<picture>` e va usato **solo** nei quattro
contesti in cui il CSS lo posiziona: card e dettaglio del carosello, hero e
galleria della pagina sistemazione. Altrove rompe il layout.

**`BASE_PATH` quando il sito non sta nella radice del dominio.** Tutti i
collegamenti sono assoluti. Senza, le pagine cercano i file nella radice e si
vede solo testo senza stile.

**`SITE_URL` decide cosa dichiari ai motori di ricerca.** Da lì derivano
sitemap, robots, dati strutturati e anteprime social.

**Il CSS delle esperienze copre solo tre card** (`.exp-card-1/2/3`). Dalla
quarta in poi servono le regole in `src/styles/parts/09-experiences.css`.

**Oltre dodici sistemazioni** il carosello su desktop diventa lunghissimo da
scorrere. La validazione avvisa.

## Aggiungere un tipo di sezione

1. descrivilo in `src/config/types.ts` e aggiungilo all'unione `Section`
2. scrivi il componente in `src/components/sections/`
3. aggiungi il caso nello `switch` di `src/components/HomePage.tsx`

Se salti il terzo passaggio il progetto non compila: lo `switch` ha un ramo che
assegna a `never`.

## Prima di pubblicare

- i testi di privacy e cookie policy vanno riletti e approvati dal cliente,
  e il paragrafo su Amenitiz verificato con l'informativa del fornitore
- il CIN va esposto (`brand.cin`): la validazione segnala che manca
- niente `TODO` residui: lo verifica `npm run validate`
