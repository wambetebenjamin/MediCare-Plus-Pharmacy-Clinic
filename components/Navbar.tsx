"use client";

import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#pharmacy", label: "Pharmacy" },
  { href: "#blog", label: "Health Blog" },
  { href: "#branches", label: "Branches" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const close = useCallback(() => setOpen(false), []);

  /* Close drawer on resize to desktop + track hash changes for active link */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Highlight active section in the drawer/desktop nav */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header" id="site-header">
        <div className="container navbar">
          <a href="#home" aria-label="MediCare Plus home">
            <Logo />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-coral btn-sm nav-cta">
            <Icon name="calendar" size={16} />
            Book Appointment
          </a>

          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav-backdrop" onClick={close} />
        <div className="mobile-nav-panel" role="dialog" aria-label="Menu">
          <div className="mobile-nav-head">
            <Logo />
            <button className="nav-toggle" aria-label="Close menu" onClick={close}>
              <Icon name="close" size={22} />
            </button>
          </div>
          <nav aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
                <Icon name="arrowRight" size={17} />
              </a>
            ))}
          </nav>
          <div className="mobile-nav-foot">
            <a href="#contact" className="btn btn-coral btn-block" onClick={close}>
              <Icon name="calendar" size={17} />
              Book Appointment
            </a>
            <a href="tel:+254112272061" className="btn btn-outline btn-block">
              <Icon name="phone" size={17} />
              Emergency: +254 112 272 061
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
