"use client";

import { useState } from "react";
import { bookingAnchor, site } from "../../config";
import { useLanguage } from "../../lib/i18n";
import { useScrolled } from "../../lib/use-scrolled";
import { Brand } from "./Brand";

/**
 * Barra superiore: logo, navigazione, selettore lingua, invito all'azione.
 * Il menù mobile vive qui perché ne condivide lo stato di apertura.
 *
 * L'header resta fisso in cima alla pagina. Sopra il video è trasparente;
 * appena si scorre prende lo sfondo pieno (`is-scrolled`) per restare
 * leggibile sopra qualsiasi sezione.
 *
 * Va montato fuori dalla hero: un antenato con `transform` farebbe scorrere
 * l'elemento fisso insieme a lui. La hero tiene uno spaziatore della stessa
 * altezza al suo posto.
 *
 * `onMenuChange` serve al pulsante contatti flottante, che si nasconde
 * quando il menù a tutto schermo è aperto.
 */
export function SiteHeader({
  onMenuChange,
}: {
  onMenuChange?: (open: boolean) => void;
}) {
  const { t, cycleLocale, switchLabel, nextLocaleName } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  const toggleMenu = (open: boolean) => {
    setMenuOpen(open);
    onMenuChange?.(open);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Brand />

        <nav className="desktop-nav">
          {site.nav.map((item) => (
            <a key={item.target} href={`#${item.target}`}>
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang" onClick={cycleLocale}>
            {switchLabel}
          </button>
          {/* Scende alla fascia con il motore di prenotazione; senza
              motore, alla sezione contatti. */}
          <a className="header-cta" href={bookingAnchor}>
            {t(site.booking?.label ?? site.headerCta)}
          </a>
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => toggleMenu(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav">
          {site.nav.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={() => toggleMenu(false)}
            >
              {t(item.label)}
            </a>
          ))}
          <button onClick={cycleLocale}>{nextLocaleName}</button>
          <a href={bookingAnchor} onClick={() => toggleMenu(false)}>
            {t(site.booking?.label ?? site.headerCta)}
          </a>
        </nav>
      )}
    </>
  );
}
