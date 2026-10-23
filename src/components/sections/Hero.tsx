"use client";

import { Fragment } from "react";
import Image from "next/image";
import { asset } from "../../config";
import { useLanguage } from "../../lib/i18n";
import { SmartLink } from "../../lib/links";
import type { HeroSection } from "../../config/types";
import { SiteHeader } from "../layout/SiteHeader";

/**
 * Apertura a tutto schermo: video (o foto) di sfondo, header, titolo, claim.
 *
 * Il video può avere due sorgenti, una per telefono e una per schermi larghi:
 * il browser sceglie da sé in base a `media`, quindi su mobile non viene
 * scaricato il file pesante.
 */
export function Hero({
  section,
  onMenuChange,
}: {
  section: HeroSection;
  onMenuChange?: (open: boolean) => void;
}) {
  const { t } = useLanguage();

  return (
    <section
      className={`hero hero-film ${section.size === "compact" ? "hero-compact" : ""}`}
      id={section.id}
    >
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

      <SiteHeader onMenuChange={onMenuChange} />

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
          <SmartLink className="hero-discover" href={section.cta.href}>
            <span>{t(section.cta.label)}</span>
            <i>
              <b className="direction-mark" aria-hidden="true" />
            </i>
          </SmartLink>
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
