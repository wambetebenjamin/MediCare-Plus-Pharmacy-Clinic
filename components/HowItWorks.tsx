import Icon from "./Icon";
import { WA_MAIN } from "@/lib/site";
import type { IconName } from "./Icon";

interface Step {
  icon: IconName;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
  external?: boolean;
}

const steps: Step[] = [
  {
    icon: "whatsapp",
    title: "Book in seconds",
    text: "Message us on WhatsApp or fill the appointment form — no queues, no hold music.",
    linkLabel: "Chat now",
    href: WA_MAIN,
    external: true,
  },
  {
    icon: "home",
    title: "Visit us — or we visit you",
    text: "Walk into any of our 5 branches, or request a home visit and medicine delivery at your door.",
    linkLabel: "Find a branch",
    href: "#branches",
  },
  {
    icon: "pill",
    title: "Get treated & stay well",
    text: "See the doctor, do your labs on-site and leave with the right medication and a follow-up plan.",
    linkLabel: "Meet our doctors",
    href: "#doctors",
  },
];

export default function HowItWorks() {
  return (
    <section className="section how" aria-label="How it works">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow" style={{ color: "#8ce8e2" }}>
            How It Works
          </span>
          <h2>Care in three easy steps</h2>
          <div className="divider" />
          <p>
            Healthcare should not be a full-day errand. With MediCare Plus it
            takes minutes — not hours.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="step"
              data-reveal
              style={{ ["--rd" as string]: `${i * 140}ms` }}
            >
              <span className="step-num" data-step={`0${i + 1}`}>
                <Icon name={step.icon} size={40} />
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <a
                  href={step.href}
                  {...(step.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {step.linkLabel}
                  <Icon name="arrowRight" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
