"use client";

import { useState } from "react";
import { site } from "../config";
import type { Section } from "../config/types";
import { ContactDock } from "./layout/ContactDock";
import { Footer } from "./layout/Footer";
import { Contact } from "./sections/Contact";
import { Experiences } from "./sections/Experiences";
import { Feature } from "./sections/Feature";
import { Gallery } from "./sections/Gallery";
import { Menu } from "./sections/Menu";
import { Hero } from "./sections/Hero";
import { Stays } from "./sections/Stays";
import { Story } from "./sections/Story";
import { Territory } from "./sections/Territory";
import { Trail } from "./sections/Trail";

/**
 * HOMEPAGE
 * ========
 * Non contiene layout: scorre l'elenco `sections` della configurazione del
 * cliente e monta il componente corrispondente a ciascun tipo.
 *
 * È il punto che rende il sito replicabile. Riordinare le sezioni, toglierne
 * una o usarne una due volte si fa spostando blocchi in tenants/<id>/site.ts,
 * senza aprire questo file.
 *
 * Per aggiungere un TIPO nuovo di sezione (es. "recensioni"):
 *   1. descrivilo in src/config/types.ts e aggiungilo all'unione `Section`
 *   2. scrivi il componente in src/components/sections/
 *   3. aggiungi il suo caso qui sotto
 * TypeScript segnala da solo se dimentichi il terzo passaggio.
 */

function renderSection(
  section: Section,
  onMenuChange: (open: boolean) => void,
) {
  switch (section.type) {
    case "hero":
      return (
        <Hero key={section.id} section={section} onMenuChange={onMenuChange} />
      );
    case "story":
      return <Story key={section.id} section={section} />;
    case "stays":
      return <Stays key={section.id} section={section} />;
    case "feature":
      return <Feature key={section.id} section={section} />;
    case "experiences":
      return <Experiences key={section.id} section={section} />;
    case "trail":
      return <Trail key={section.id} section={section} />;
    case "territory":
      return <Territory key={section.id} section={section} />;
    case "contact":
      return <Contact key={section.id} section={section} />;
    case "menu":
      return <Menu key={section.id} section={section} />;
    case "gallery":
      return <Gallery key={section.id} section={section} />;
    default: {
      /* Se questa riga smette di compilare, manca un caso qui sopra. */
      const unhandled: never = section;
      return unhandled;
    }
  }
}

export function HomePage() {
  /* Il menù mobile è dentro l'header, ma il pulsante contatti flottante deve
     sapere quando è aperto per togliersi di mezzo. */
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {site.sections.map((section) => renderSection(section, setMenuOpen))}
      <ContactDock hidden={menuOpen} />
      <Footer />
    </main>
  );
}
