"use client";

import { useEffect, useState } from "react";
import {
  bookingAnchor,
  bookingSection,
  bookingUrl,
  mailUrl,
  site,
  telUrl,
  whatsappUrl,
} from "../../config";
import { useLanguage } from "../../lib/i18n";

/**
 * Pulsante fisso in basso a destra.
 *
 * Con il motore di prenotazione incorporato è un collegamento diretto alla
 * fascia di prenotazione, e si toglie di mezzo quando quella fascia è sullo
 * schermo (coprirebbe i pulsanti del calendario). Senza, apre un pannello
 * con i contatti.
 *
 * Si nasconde anche quando il menù mobile a tutto schermo è aperto.
 */
export function ContactDock({ hidden = false }: { hidden?: boolean }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [bookingVisible, setBookingVisible] = useState(false);

  useEffect(() => {
    const target = bookingSection && document.getElementById(bookingSection.id);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) =>
      setBookingVisible(entry.isIntersecting),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  /* Esc chiude il pannello. Il listener esiste solo quando serve. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!site.dock.enabled) return null;

  const { dock } = site;

  if (bookingSection && bookingUrl) {
    return (
      <aside
        className={`contact-dock ${hidden || bookingVisible ? "is-hidden" : ""}`}
        aria-label={t(dock.triggerLabel)}
      >
        <a className="contact-dock-trigger" href={bookingAnchor}>
          <span className="contact-dock-pulse" aria-hidden="true" />
          <span>
            <small>{t(dock.triggerKicker)}</small>
            <b>{t(dock.triggerLabel)}</b>
          </span>
          <i aria-hidden="true">
            <span className="direction-mark" />
          </i>
        </a>
      </aside>
    );
  }

  return (
    <aside
      className={`contact-dock ${open ? "open" : ""} ${hidden ? "is-hidden" : ""}`}
      aria-label={t(dock.triggerLabel)}
    >
      <div
        className="contact-dock-panel"
        id="contact-dock-panel"
        aria-hidden={!open}
      >
        <button
          className="contact-dock-close"
          onClick={() => setOpen(false)}
          aria-label={t(dock.triggerLabel)}
        >
          <span className="close-mark" aria-hidden="true" />
        </button>

        <p>{t(dock.panelKicker)}</p>
        <h2>{t(dock.panelTitle)}</h2>
        <span>{t(dock.panelText)}</span>

        <div className="contact-dock-options">
          {bookingUrl && (
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              <span>{t(site.booking!.label)}</span>
              <i className="direction-mark" aria-hidden="true" />
            </a>
          )}
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <span>WhatsApp</span>
            <i className="direction-mark" aria-hidden="true" />
          </a>
          <a href={mailUrl}>
            <span>Email</span>
            <i className="direction-mark" aria-hidden="true" />
          </a>
          <a href={telUrl}>
            <span>{t(dock.phoneLabel)}</span>
            <i className="direction-mark" aria-hidden="true" />
          </a>
          {site.contact.phoneAlt && (
            <a href={`tel:+${site.contact.phoneAlt.number}`}>
              <span>{site.contact.phoneAlt.display}</span>
              <i className="direction-mark" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <button
        className="contact-dock-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="contact-dock-panel"
      >
        <span className="contact-dock-pulse" aria-hidden="true" />
        <span>
          <small>{t(dock.triggerKicker)}</small>
          <b>{t(dock.triggerLabel)}</b>
        </span>
        <i aria-hidden="true">
          <span className={open ? "close-mark" : "direction-mark"} />
        </i>
      </button>
    </aside>
  );
}
