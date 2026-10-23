"use client";

import Link from "next/link";
import { bookingUrl, site, whatsappUrl } from "../config";
import { stayPageCopy } from "../lib/stay-routes";
import { useLanguage } from "../lib/i18n";
import type { Accommodation } from "../config/types";
import { PictureImage } from "./Media";
import { Brand } from "./layout/Brand";

/**
 * Pagina di dettaglio di una sistemazione: /sistemazioni/<slug>.
 * Viene generata automaticamente per ogni voce di `accommodations`.
 */
export function StayPage({ stay }: { stay: Accommodation }) {
  const { t, switchLabel, cycleLocale } = useLanguage();
  const copy = stayPageCopy();

  return (
    <main className="detail-page">
      <header className="detail-header">
        <Brand href="/" size={42} />
        <Link href="/#sistemazioni" className="detail-back">
          <i className="direction-mark reverse" aria-hidden="true" />
          <span>{t(copy.back)}</span>
        </Link>
        <button onClick={cycleLocale}>{switchLabel}</button>
      </header>

      <section className="detail-hero">
        <PictureImage src={stay.cover} alt={stay.name} sizes="100vw" priority />
        <div />
        <div className="detail-title">
          <p className="eyebrow light">{t(copy.kicker)}</p>
          <h1>{stay.name}</h1>
        </div>
      </section>

      <section className="detail-intro">
        <p>{t(stay.blurb)}</p>
        <p>{t(stay.description)}</p>
        <div>
          <span>
            <b>{stay.size}</b>
            {t(copy.sizeLabel)}
          </span>
          <span>
            <b>{stay.guests}</b>
            {t(copy.guestsLabel)}
          </span>
        </div>
      </section>

      {stay.units?.length ? (
        <section className="detail-units">
          {copy.unitsLabel && <p className="eyebrow">{t(copy.unitsLabel)}</p>}
          <div>
            {stay.units.map((unit) => (
              <article key={unit.name}>
                <h3>{unit.name}</h3>
                <p className="unit-layout">{t(unit.layout)}</p>
                <p>{t(unit.text)}</p>
                {unit.tags?.length ? (
                  <ul>
                    {unit.tags.map((tag, index) => (
                      <li key={index}>{t(tag)}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {stay.amenities?.length ? (
        <section className="detail-amenities">
          {copy.amenitiesLabel && (
            <p className="eyebrow">{t(copy.amenitiesLabel)}</p>
          )}
          <ul>
            {stay.amenities.map((item, index) => (
              <li key={index}>{t(item)}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="detail-gallery">
        <p className="eyebrow">{t(copy.galleryLabel)}</p>
        <div>
          {stay.gallery.map((image, index) => (
            <figure key={image}>
              <PictureImage
                src={image}
                alt={`${stay.name} — ${index + 1}`}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="detail-cta">
        <p className="eyebrow light">
          {site.brand.prefix} {site.brand.name}
        </p>
        <h2>{t(copy.ctaTitle)}</h2>
        {/* Con un motore di prenotazione la disponibilità si vede lì, in
            tempo reale: è l'azione principale e WhatsApp passa a secondario. */}
        <div className="detail-cta-actions">
          {bookingUrl && (
            <a
              className="button lime"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>{t(site.booking!.label)}</span>
              <i className="direction-mark" aria-hidden="true" />
            </a>
          )}
          <a
            className={bookingUrl ? "button ghost" : "button lime"}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>{t(copy.ctaLabel)}</span>
            <i className="direction-mark" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
