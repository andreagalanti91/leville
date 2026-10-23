"use client";

import { useLanguage } from "../../lib/i18n";
import { SmartLink } from "../../lib/links";
import type { ReviewsSection } from "../../config/types";

/**
 * Recensioni degli ospiti.
 *
 * Il testo è trascritto in configurazione invece di mostrare schermate dei
 * portali: si legge su telefono, si traduce, e lo leggono anche i motori di
 * ricerca. In fondo i collegamenti ai portali, per chi vuole verificarle.
 */
export function Reviews({ section }: { section: ReviewsSection }) {
  const { t } = useLanguage();

  return (
    <section className="reviews-section" id={section.id}>
      <header className="cards-heading">
        <p className="eyebrow">{t(section.kicker)}</p>
        <h2>{t(section.title)}</h2>
        {section.text && <p>{t(section.text)}</p>}
      </header>

      <div className="reviews-grid">
        {section.items.map((review, index) => (
          <figure className="review" key={index}>
            <div className="review-top">
              <span>{review.source}</span>
              {review.score && <b>{review.score}</b>}
            </div>
            {review.title && <h3>{t(review.title)}</h3>}
            <blockquote>{t(review.quote)}</blockquote>
            <figcaption>
              <b>{review.author}</b>
              {review.date && <span>{t(review.date)}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {section.links && (
        <div className="reviews-links">
          {section.links.map((link, index) => (
            <SmartLink key={index} className="button ghost" href={link.href}>
              <span>{t(link.label)}</span>
              <i className="direction-mark" aria-hidden="true" />
            </SmartLink>
          ))}
        </div>
      )}
    </section>
  );
}
