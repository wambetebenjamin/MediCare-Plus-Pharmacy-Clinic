"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

const KEY = "mcp-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      stored = null;
    }
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1400);
      return () => clearTimeout(t);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable, just close */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <h5>
        <Icon name="shield" size={20} />
        Your privacy matters
      </h5>
      <p>
        We use strictly necessary cookies to run this site, and optional
        analytics cookies to improve it, handled in line with the Kenya Data
        Protection Act (2019) and GDPR. You can change your choice any time.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-outline" onClick={() => choose("declined")}>
          Decline
        </button>
        <button className="btn btn-teal" onClick={() => choose("accepted")}>
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
