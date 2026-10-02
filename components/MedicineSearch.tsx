"use client";

import { useState } from "react";
import Icon from "./Icon";
import { waOrderLink } from "@/lib/site";

export default function MedicineSearch() {
  const [query, setQuery] = useState("");

  const url = query.trim()
    ? waOrderLink(`"${query.trim()}"`)
    : waOrderLink("some medicine");

  return (
    <form
      className="med-search"
      role="search"
      aria-label="Medicine lookup"
      action={url}
      target="_blank"
      onSubmit={(e) => {
        // Let the GET navigate to the WhatsApp link computed at render time.
        if (!query.trim()) e.preventDefault();
      }}
    >
      <Icon name="search" size={19} />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search medicine e.g. Amoxicillin, Panadol…"
        aria-label="Search for a medicine"
      />
      <button
        type={query.trim() ? "submit" : "button"}
        className="btn btn-teal btn-sm"
        onClick={
          query.trim()
            ? undefined
            : () => window.open(waOrderLink("some medicine"), "_blank")
        }
      >
        <Icon name="whatsapp" size={17} />
        Check availability
      </button>
    </form>
  );
}
