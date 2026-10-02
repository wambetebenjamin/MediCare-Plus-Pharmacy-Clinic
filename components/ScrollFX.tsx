"use client";

import { useEffect } from "react";

/**
 * Global scroll behaviour:
 *  - staggered reveal of every [data-reveal] element (IntersectionObserver)
 *  - sticky header shadow once the page scrolls
 */
export default function ScrollFX() {
  useEffect(() => {
    /* --- Staggered reveals --- */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const scan = () => {
      document
        .querySelectorAll("[data-reveal]:not(.is-revealed)")
        .forEach((el) => revealObserver.observe(el));
    };
    scan();

    // Re-scan if any sections mount later client-side
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    /* --- Header shadow --- */
    const header = document.getElementById("site-header");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
