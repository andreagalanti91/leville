"use client";

import { Fragment } from "react";
import Image from "next/image";
import { asset } from "../../config";
import { useLanguage } from "../../lib/i18n";
import type { HeroSection } from "../../config/types";

/**
 * Apertura a tutto schermo: video (o foto) di sfondo, titolo, claim.
 *
 * Il video può avere due sorgenti, una per telefono e una per schermi larghi:
 * il browser sceglie da sé in base a `media`, quindi su mobile non viene
 * scaricato il file pesante.
 */
export function Hero({ section }: { section: HeroSection }) {
  const { t } = useLanguage();

  return (
    <section className="hero hero-film" id={section.id}>
      <div className="hero-media" aria-hidden="true">
        {section.video ? (
          <video
            className="hero-video-local"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={asset(section.video.poster)}
          >
            {section.video.mobile && (
              <source
                src={asset(section.video.mobile)}
                type="video/mp4"
                media="(max-width: 700px)"
              />
            )}
            <source src={asset(section.video.desktop)} type="video/mp4" />
          </video>
        ) : section.image ? (
          <Image
            src={asset(section.image.src)}
            alt=""
            fill
            sizes="100vw"
            className="cover"
            priority
          />
        ) : null}
      </div>

      <div className="hero-shade" />

      {/* L'header fisso sta fuori dalla hero (vedi HomePage): qui resta lo
          spazio che occupa, così il titolo non ci finisce sotto. */}
      <div className="site-header-spacer" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-label">
          {section.labelParts.map((part, index) => (
            <Fragment key={index}>
              {index > 0 && <span>·</span>}
              {index > 0 ? " " : ""}
              {t(part)}
              {index < section.labelParts.length - 1 ? " " : ""}
            </Fragment>
          ))}
        </p>
        <h1>
          {section.titleLines.map((line, index) => (
            <span className="hero-title-line" key={index}>
              {t(line)}
            </span>
          ))}
        </h1>
        <div className="hero-lower">
          <p className="hero-intro">{t(section.intro)}</p>
          <a className="hero-discover" href={section.cta.href}>
            <span>{t(section.cta.label)}</span>
            <i>
              <b className="direction-mark" aria-hidden="true" />
            </i>
          </a>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-pillars">
          {section.pillars.map((pillar, index) => (
            <span key={index}>{t(pillar)}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
