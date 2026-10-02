"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { doctors } from "@/data/doctors";
import { branches } from "@/data/branches";

type Mode = "appointment" | "enquiry";
type Status = "idle" | "sending" | "success" | "error";

interface SuccessPayload {
  id: string;
  whatsappUrl: string;
  emailSent: boolean;
}

const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM",
];

export default function ContactForm() {
  const [mode, setMode] = useState<Mode>("appointment");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<SuccessPayload | null>(null);
  const [minDate, setMinDate] = useState<string>("");

  /* Compute "today" client-side only, avoiding a server/client hydration skew */
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  function switchMode(next: Mode) {
    setMode(next);
    setStatus("idle");
    setError("");
    setResult(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = mode === "appointment" ? "/api/appointment" : "/api/contact";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(
          json.error ||
            "Something went wrong. Please try again or WhatsApp us directly."
        );
        setStatus("error");
        return;
      }
      setResult(json);
      setStatus("success");
      form.reset();
    } catch {
      setError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success" && result) {
    return (
      <div className="form-success" role="status">
        <span className="ok">
          <Icon name="check" size={36} strokeWidth={2.4} />
        </span>
        <h3>
          {mode === "appointment"
            ? "Appointment request received!"
            : "Message received!"}
        </h3>
        <p>
          {mode === "appointment"
            ? "Our reception team is confirming your slot right now. Tap below to confirm instantly on WhatsApp — a confirmation email is on its way too."
            : "Thank you for reaching out. A member of our team will get back to you within a few working hours."}
        </p>
        <span className="ref">Ref: {result.id}</span>
        <div className="actions">
          <a
            href={result.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-teal btn-sm"
          >
            <Icon name="whatsapp" size={17} />
            {mode === "appointment" ? "Confirm on WhatsApp" : "Chat with us"}
          </a>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => {
              setStatus("idle");
              setResult(null);
            }}
          >
            {mode === "appointment" ? "Book another" : "Send another"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="form-tabs" role="tablist" aria-label="Form type">
        <button
          role="tab"
          aria-selected={mode === "appointment"}
          className={`form-tab${mode === "appointment" ? " active" : ""}`}
          onClick={() => switchMode("appointment")}
        >
          <Icon name="calendar" size={16} />
          Book Appointment
        </button>
        <button
          role="tab"
          aria-selected={mode === "enquiry"}
          className={`form-tab${mode === "enquiry" ? " active" : ""}`}
          onClick={() => switchMode("enquiry")}
        >
          <Icon name="mail" size={16} />
          General Enquiry
        </button>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="cf-name">
            Full Name <span>*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Wanjiku Kamau"
            autoComplete="name"
          />
        </div>

        <div className="field">
          <label htmlFor="cf-phone">
            Phone <span>*</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. 0712 345 678"
            autoComplete="tel"
          />
        </div>

        <div className="field field-full">
          <label htmlFor="cf-email">
            Email {mode === "enquiry" && <span>*</span>}
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required={mode === "enquiry"}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        {mode === "appointment" && (
          <>
            <div className="field">
              <label htmlFor="cf-branch">
                Preferred Branch <span>*</span>
              </label>
              <select id="cf-branch" name="branch" required defaultValue="">
                <option value="" disabled>
                  Choose a branch
                </option>
                {branches.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="cf-doctor">Preferred Doctor</label>
              <select id="cf-doctor" name="doctor" defaultValue="">
                <option value="">No preference</option>
                {doctors.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name} — {d.specialty.split("·")[0].trim()}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="cf-date">
                Preferred Date <span>*</span>
              </label>
              <input
                id="cf-date"
                name="date"
                type="date"
                required
                min={minDate || undefined}
              />
            </div>

            <div className="field">
              <label htmlFor="cf-time">
                Preferred Time <span>*</span>
              </label>
              <select id="cf-time" name="time" required defaultValue="">
                <option value="" disabled>
                  Choose a time
                </option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="field field-full">
          <label htmlFor="cf-message">
            {mode === "appointment" ? "Concern / Symptoms" : "Your Message"}{" "}
            <span>*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            placeholder={
              mode === "appointment"
                ? "Briefly describe how you are feeling or what you need…"
                : "How can we help you today?"
            }
          />
        </div>

        <label className="form-consent">
          <input type="checkbox" name="consent" required />
          <span>
            I consent to MediCare Plus processing my details to respond to this
            request, in line with the Kenya Data Protection Act (2019). My data
            is never sold or shared.
          </span>
        </label>

        {status === "error" && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <div className="field-full">
          <button
            type="submit"
            className="btn btn-coral btn-block"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <span className="spinner" aria-hidden="true" />
                Sending…
              </>
            ) : mode === "appointment" ? (
              <>
                <Icon name="calendar" size={18} />
                Request Appointment
              </>
            ) : (
              <>
                <Icon name="send" size={18} />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
