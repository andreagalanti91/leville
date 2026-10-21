"use client";

import { bookingUrl } from "../../config";
import { useLanguage } from "../../lib/i18n";
import type { BookingSection, Localized } from "../../config/types";

/**
 * Fascia con il motore di prenotazione incorporato: calendario, ospiti,
 * disponibilità. Compare in homepage e in fondo a ogni pagina sistemazione;
 * l'`id` è l'ancora a cui puntano i pulsanti "Prenota".
 *
 * `title` sostituisce il titolo della sezione dove serve un invito diverso,
 * per esempio nella pagina di una sistemazione.
 */
export function Booking({
  section,
  title,
}: {
  section: BookingSection;
  title?: Localized;
}) {
  const { t } = useLanguage();

  if (!bookingUrl) return null;

  return (
    <section className="booking" id={section.id}>
      <div className="booking-copy">
        <p className="eyebrow light">{t(section.kicker)}</p>
        <h2>{t(title ?? section.title)}</h2>
        {section.text && <p>{t(section.text)}</p>}
      </div>

      <div className="booking-frame">
        <iframe
          src={bookingUrl}
          title={t(section.frameTitle)}
          loading="lazy"
        />
      </div>
    </section>
  );
}
