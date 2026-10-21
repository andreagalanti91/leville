"use client";

import Image from "next/image";
import Link from "next/link";
import { asset, site } from "../../config";

/**
 * Logo del cliente. Compare nell'header, nel footer e nelle pagine interne.
 * `href` cambia perché in homepage è un'ancora, altrove un link alla home.
 */
export function Brand({
  href = "#home",
  size = 46,
}: {
  href?: string;
  size?: number;
}) {
  const content = (
    <>
      <Image
        src={asset(site.brand.logo)}
        alt=""
        width={size}
        height={size}
        unoptimized
      />
      <span>
        <small>{site.brand.prefix}</small>
        <b>{site.brand.name}</b>
      </span>
    </>
  );

  return href.startsWith("#") ? (
    <a className="brand" href={href}>
      {content}
    </a>
  ) : (
    <Link className="brand" href={href}>
      {content}
    </Link>
  );
}
