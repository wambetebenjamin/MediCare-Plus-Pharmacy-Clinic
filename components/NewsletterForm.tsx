"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function NewsletterForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState("");

  async function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "").trim();
    if (!email) return;
    setState("sending");
    setMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setState("ok");
        setMsg(
          json.existing
            ? "You are already on our list. Asante!"
            : "Subscribed! Health tips coming your way."
        );
        form.reset();
      } else {
        setState("err");
        setMsg(json.error || "Please enter a valid email address.");
      }
    } catch {
      setState("err");
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <div>
      <form className="newsletter-form" onSubmit={subscribe}>
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="btn btn-coral btn-sm"
          disabled={state === "sending"}
        >
          {state === "sending" ? (
            <span className="spinner" aria-hidden="true" />
          ) : (
            <>
              <Icon name="send" size={15} />
              Subscribe
            </>
          )}
        </button>
      </form>
      {msg && (
        <p className={`newsletter-msg ${state === "ok" ? "ok" : "err"}`} role="status">
          {msg}
        </p>
      )}
    </div>
  );
}
