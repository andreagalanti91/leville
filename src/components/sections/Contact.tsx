"use client";

import { Fragment } from "react";

import { mailUrl, site, whatsappUrl } from "../../config";
import { useLanguage } from "../../lib/i18n";
import type { ContactSection } from "../../config/types";
import { FillImage } from "../Media";

/**
 * Blocco contatti: foto, invito, WhatsApp ed email, indirizzo.
 * La prenotazione ha una fascia propria (sezione `booking`).
 */
export function Contact({ section }: { section: ContactSection }) {
  const { t } = useLanguage();

  return (
    <section className="contact" id={section.id}>
      <div className="contact-image">
        <FillImage
          src={section.image.src}
          alt={t(section.image.alt)}
          sizes="(max-width:1080px) 100vw, 45vw"
          className="contact-photo"
          quality={95}
        />
      </div>

      <div className="contact-copy">
        <p className="eyebrow light">{t(section.kicker)}</p>
        <h2>{t(section.title)}</h2>
        <p>{t(section.text)}</p>

        <div className="contact-actions">
          <a
            className="button lime"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>{t(section.whatsappLabel)}</span>
            <i className="direction-mark" aria-hidden="true" />
          </a>
          <a className="button ghost" href={mailUrl}>
            <span>{t(section.emailLabel)}</span>
            <i className="direction-mark" aria-hidden="true" />
          </a>
        </div>

        <address>
          {site.contact.address.map((line, index) => (
            <Fragment key={index}>
              {line}
              {index < site.contact.address.length - 1 && <br />}
            </Fragment>
          ))}
        </address>
      </div>
    </section>
  );
}
