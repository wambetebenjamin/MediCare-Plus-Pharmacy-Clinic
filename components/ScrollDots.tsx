"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
  { id: "pharmacy", label: "Pharmacy" },
  { id: "blog", label: "Blog" },
  { id: "branches", label: "Branches" },
  { id: "contact", label: "Contact" },
];

export default function ScrollDots() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="scroll-dots" aria-label="Section navigation">
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? "active" : ""}
          aria-label={label}
        >
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
