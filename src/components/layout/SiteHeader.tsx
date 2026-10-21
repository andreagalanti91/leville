"use client";

import { useState } from "react";
import { bookingUrl, site } from "../../config";
import { useLanguage } from "../../lib/i18n";
import { Brand } from "./Brand";

/**
 * Barra superiore: logo, navigazione, selettore lingua, invito all'azione.
 * Il menù mobile vive qui perché ne condivide lo stato di apertura.
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

  const toggleMenu = (open: boolean) => {
    setMenuOpen(open);
    onMenuChange?.(open);
  };

  return (
    <>
      <header className="site-header">
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
          {/* Con un motore di prenotazione esterno il bottone ci porta
              direttamente; senza, resta un'ancora alla sezione contatti. */}
          <a
            className="header-cta"
            href={bookingUrl ?? "#contatti"}
            {...(bookingUrl && { target: "_blank", rel: "noreferrer" })}
          >
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
          <a
            href={bookingUrl ?? "#contatti"}
            {...(bookingUrl && { target: "_blank", rel: "noreferrer" })}
            onClick={() => toggleMenu(false)}
          >
            {t(site.booking?.label ?? site.headerCta)}
          </a>
        </nav>
      )}
    </>
  );
}
