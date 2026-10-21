# Architettura

Come è organizzato il progetto, e perché è organizzato così.

---

## L'idea di fondo

Il sito di Agriturismo Le Ville separa i **dati** dal codice che li mostra.

```
tenants/le-ville/site.ts      contenuto           ← si modifica qui
tenants/le-ville/theme.css    colori e font
public/tenants/le-ville/      foto e video

src/                          componenti e stili
app/                          rotte
```

`src/config/index.ts` carica la configurazione e la espone come `site`. Da lì
in poi ogni componente importa `site` e legge quello che gli serve.

---

## Il contratto di contenuto

`src/config/types.ts` descrive la forma del contenuto. È il punto di
incontro fra codice e dati.

La regola che tiene insieme il progetto:

> Nessun testo, immagine, numero di telefono o colore deve comparire dentro
> `src/` o `app/`.

Se serve una voce nuova, si aggiunge allo schema e TypeScript segnala
automaticamente i punti della configurazione da completare.

---

## Le sezioni

`sections` è un array. `src/components/HomePage.tsx` lo scorre e monta il
componente corrispondente a ogni `type`.

Questo è ciò che rende il sito adattabile senza toccare codice: riordinare le
sezioni, toglierne una o usarne una due volte si fa spostando blocchi in
`site.ts`.

Per aggiungere un **tipo** nuovo di sezione:

1. descrivilo in `src/config/types.ts` e aggiungilo all'unione `Section`
2. scrivi il componente in `src/components/sections/`
3. aggiungi il suo caso nello `switch` di `HomePage.tsx`

Se dimentichi il terzo passaggio, il progetto non compila: lo `switch` ha un
ramo `default` che assegna a `never`, quindi un tipo non gestito diventa un
errore in fase di compilazione anziché una pagina rotta.

---

## Le animazioni

Le sezioni "racconto" e "sistemazioni" reagiscono allo scorrimento della
pagina. Il meccanismo è sempre lo stesso:

1. `src/lib/use-scroll-effect.ts` aggancia scroll e resize, al massimo una
   volta per frame
2. la sezione traduce l'avanzamento (un numero da 0 a 1) in **variabili CSS**
   scritte sull'elemento
3. il foglio di stile usa quelle variabili per muovere le cose

Il JavaScript calcola solo numeri. Come si muovono gli elementi è tutto nel
CSS. Serve a due cose: le animazioni restano fluide, e chi deve modificarle sa
dove guardare.

`prefers-reduced-motion` è rispettato: chi ha chiesto al sistema meno
animazioni vede le sezioni direttamente nel loro stato finale.

---

## Gli stili

`src/styles/` contiene il CSS diviso in blocchi, più i token di tema.

```
tokens.css        colori e font, valori di partenza
site.css          elenca i blocchi nell'ordine di caricamento
parts/01-…18-     il CSS vero, diviso per argomento
```

**L'ordine dei blocchi in `site.css` è significativo.** Il CSS originale era
stato scritto a strati successivi — l'impianto generale, poi la riscrittura
delle singole sezioni, poi tre giri di rifiniture — e diverse regole in coda
sovrascrivono di proposito regole precedenti. I file sono stati ritagliati
mantenendo l'ordine esatto, non raggruppati per argomento: raggrupparli
avrebbe cambiato la cascata e quindi il risultato a schermo.

Se devi aggiungere stile nuovo, mettilo in fondo o crea un file e importalo
per ultimo. L'ultimo blocco, `18-booking-header.css`, rende fisso l'header e
dà lo stile alla fascia di prenotazione.

### Il tema

`tokens.css` definisce le variabili; `tenants/le-ville/theme.css` le
sovrascrive e viene caricato dopo. Nel resto del CSS non compaiono colori o font scritti a
mano: sempre `var(--nome)`. È ciò che permette di ricolorare un intero sito
cambiando dieci righe.

---

## Le immagini

Tutte le immagini usano `fill`: si distendono per riempire l'antenato
posizionato più vicino. Basta interporre un elemento non posizionato perché
l'immagine esca dal suo riquadro.

Per questo `src/components/Media.tsx` espone **due** componenti:

- `FillImage` — il caso normale, immagine figlia diretta del contenitore
- `PictureImage` — aggiunge un wrapper `<picture>`, che permette di servire un
  file diverso su telefono

`PictureImage` va usato **solo** nei quattro contesti in cui il CSS posiziona
esplicitamente il wrapper: card e dettaglio del carosello, hero e galleria
della pagina sistemazione. Altrove rompe il layout.

### Versione dei media

`asset()` in `src/config/index.ts` costruisce le URL e vi aggiunge
`?v=<mediaVersion>`. Serve quando sostituisci una foto tenendo lo stesso nome
file: senza, browser e CDN continuano a mostrare la vecchia.

Cambia `mediaVersion` in `site.ts` ogni volta che sostituisci dei media.

---

## Le lingue

`locales` elenca le lingue attive; la prima è quella predefinita.
Ogni testo è un oggetto con una chiave per lingua.

`src/lib/i18n.tsx` tiene la lingua corrente in un context ed espone `t()`.
`src/lib/translate.ts` fa la stessa cosa senza React, ed è un file separato
perché i moduli marcati `"use client"` non possono essere chiamati dal server:
serve per metadati, sitemap e dati strutturati, che girano in fase di
generazione.

La lingua scelta viene salvata in `localStorage` con una chiave che include lo
slug del sito, così due siti sullo stesso dominio non si pestano i piedi.

Aggiungere una lingua: mettila in `locales`, aggiungi la chiave a
`localeNames`, e traduci. TypeScript non obbliga a completare tutte le
traduzioni — `Localized` è un `Record<string, string>` — ma `translate()`
ripiega sulla lingua di default, quindi un testo mancante non lascia mai un
buco a schermo.

---

## SEO

Generati dalla configurazione:

- metadati e anteprima social — `app/layout.tsx`
- dati strutturati `LodgingBusiness` con indirizzo, coordinate e contatti —
  contano parecchio per una struttura ricettiva, finiscono nelle schede
  laterali di Google
- `sitemap.xml` e `robots.txt` — `app/sitemap.ts`, `app/robots.ts`

Le pagine legali sono escluse dall'indicizzazione.

Con `NOINDEX=true` in compilazione (le anteprime di lavoro) `robots.txt`
chiude tutto e ogni pagina porta `<meta name="robots" content="noindex,
nofollow">`.

---

## Prenotazione

Il motore di prenotazione Amenitiz è incorporato in un iframe
(`src/components/sections/Booking.tsx`). L'indirizzo sta una volta sola in
`booking.url`; la fascia compare due volte:

- in homepage, come sezione `booking` (ancora `#prenota`)
- in fondo a ogni pagina sistemazione, con il titolo di `stayPage.ctaTitle`

Tutti i pulsanti "Prenota" — header, menù mobile, pulsante flottante, header
delle pagine sistemazione — scendono a quell'ancora (`bookingAnchor` in
`src/config/index.ts`). Il pulsante flottante si nasconde mentre la fascia è
sullo schermo, per non coprire il calendario.

L'header è fisso (`position: fixed`) e sta fuori dalla hero: un antenato con
`transform` lo farebbe scorrere con la pagina. Nella hero resta uno
spaziatore alto `--header-h`.

---

## Pubblicazione

`npm run build:static` produce `dist/le-ville/`: file statici, nessun Node
sul server. Si carica su qualsiasi hosting.

### Anteprima su GitHub Pages

`.github/workflows/anteprima.yml` compila il sito a ogni push sui rami
`claude/**` e lo pubblica sul ramo `gh-pages`, con `NOINDEX=true`.

### Sottocartelle

Tutti i collegamenti generati sono assoluti. Se il sito non sta nella radice
del dominio, la sottocartella va dichiarata al momento della compilazione:

```bash
BASE_PATH=/demo npm run build:static
```

`next.config.ts` la passa a Next, che la applica ai collegamenti fra pagine e
ai file JavaScript e CSS. Alle URL dei media ci pensa `asset()`, che legge la
stessa variabile: è il punto unico da cui passano tutti i percorsi di foto e
video, ed è il motivo per cui supportare le sottocartelle è costata una riga.

La sottocartella è cablata nei file generati: spostare il sito altrove
richiede una nuova compilazione.

Esiste anche `npm run build` per la modalità applicazione Next completa, che
aggiunge l'ottimizzazione delle immagini lato server ma richiede un processo
Node attivo.

---

## Cosa è cambiato rispetto alla versione precedente

| | Prima | Ora |
|---|---|---|
| Componente principale | 1.219 righe, un file | 13 componenti, 60–180 righe |
| Testi nei componenti | 53 condizioni sulla lingua | nessuna |
| Nome, telefono, email cablati | 45 occorrenze | nessuna |
| Dati sistemazioni | due elenchi da tenere allineati | un oggetto solo |
| CSS | 3.576 righe, un file | 18 blocchi + token |
| Regole CSS mai applicabili | 62 | rimosse |
| Mappa territorio | 6 numeri a mano per località | coordinate, il resto si calcola |

L'HTML generato è stato confrontato con quello della versione precedente su
tutte e dieci le pagine: struttura, classi e testo coincidono.

---
