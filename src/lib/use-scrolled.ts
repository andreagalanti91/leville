"use client";

import { useEffect, useState } from "react";

/**
 * Vero appena la pagina è scorsa oltre `threshold` pixel. Serve agli header
 * fissi, che sopra la foto d'apertura sono trasparenti e dopo prendono lo
 * sfondo pieno.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return scrolled;
}
