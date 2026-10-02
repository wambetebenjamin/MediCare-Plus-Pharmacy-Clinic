"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { testimonials } from "@/data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="testi-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          size={19}
          className={i < rating ? "" : "dim"}
        />
      ))}
    </span>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(index + 1), 6200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, paused, go]);

  return (
    <section
      className="section section-soft testi"
      aria-label="Patient testimonials"
    >
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Patient Stories</span>
          <h2>We served over 15,000+ patients</h2>
          <div className="divider" />
          <p>
            Real reviews from real Nairobi families who trust us with their
            health, month after month.
          </p>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          data-reveal="zoom"
        >
          <div className="testi-viewport">
            <div
              className="testi-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div className="testi-slide" key={t.name}>
                  <figure className="testi-card">
                    <span className="testi-quote">
                      <Icon name="quote" size={24} />
                    </span>
                    <Stars rating={t.rating} />
                    <blockquote className="testi-text">
                      “{t.review}”
                    </blockquote>
                    <figcaption className="testi-person">
                      <span className="post-avatar">{initials(t.name)}</span>
                      <span>
                        <b>{t.name}</b>
                        <span>{t.service}</span>
                      </span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="testi-nav">
            <button
              className="testi-arrow"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
            >
              <Icon name="arrowLeft" size={20} />
            </button>
            <div className="testi-dots" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1} by ${t.name}`}
                  className={`testi-dot${i === index ? " active" : ""}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button
              className="testi-arrow"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
            >
              <Icon name="arrowRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
