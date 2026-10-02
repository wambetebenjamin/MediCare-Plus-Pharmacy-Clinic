"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import type { IconName } from "./Icon";

interface StatItem {
  icon: IconName;
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { icon: "stethoscope", value: 8, suffix: "", label: "Specialist Doctors" },
  { icon: "heartPulse", value: 15000, suffix: "+", label: "Patients Served" },
  { icon: "pin", value: 5, suffix: "", label: "Branches in Nairobi" },
  { icon: "award", value: 10, suffix: "", label: "Years of Care" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1900;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <span className="stat-value">
      {display.toLocaleString("en-KE")}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" aria-label="Our impact in numbers">
      <div className="container stats-grid" ref={ref}>
        {STATS.map((stat) => (
          <div className="stat" key={stat.label} data-reveal>
            <span className="stat-ico">
              <Icon name={stat.icon} size={28} />
            </span>
            {started ? (
              <Counter target={stat.value} suffix={stat.suffix} />
            ) : (
              <span className="stat-value">0</span>
            )}
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
