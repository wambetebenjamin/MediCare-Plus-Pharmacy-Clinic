import Image from "next/image";
import Icon from "./Icon";
import { WA_REFILL } from "@/lib/site";
import heroImg from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Welcome">
      <Icon
        name="cross"
        size={150}
        className="deco-cross"
        style={{ top: "12%", left: "44%", transform: "rotate(18deg)" }}
      />
      <Icon
        name="cross"
        size={90}
        className="deco-cross"
        style={{ bottom: "16%", left: "3%", transform: "rotate(-12deg)" }}
      />
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="hero-badge">
            <span className="dot">
              <Icon name="cross" size={13} />
            </span>
            Total Health Care Solution
          </span>
          <h1>
            Your Health.
            <br />
            <span className="accent">Our Priority.</span>
          </h1>
          <p className="hero-sub">
            Quality healthcare and pharmacy services across Nairobi —{" "}
            <strong>
              doctor consultations, same-day lab tests and free medicine
              delivery
            </strong>{" "}
            from a team that genuinely cares.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-coral">
              <Icon name="calendar" size={18} />
              Book a Doctor
            </a>
            <a
              href={WA_REFILL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-teal"
            >
              <Icon name="whatsapp" size={19} />
              Order Medicine via WhatsApp
            </a>
          </div>

          <div className="hero-pulse" aria-hidden="true">
            <svg
              className="ecg"
              viewBox="0 0 120 34"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                className="ecg-line"
                d="M2 17h22l6-9 8 18 7-14 5 5h14l6-9 8 18 7-14 5 5h28"
              />
            </svg>
            <span className="hero-pulse-text">
              <b>Trusted by 15,000+ patients</b>
              <span>4.9/5 patient satisfaction score</span>
            </span>
          </div>

          <div className="hero-trust">
            <span className="hero-trust-item">
              <Icon name="shield" size={19} />
              KMPDC Licensed
            </span>
            <span className="hero-trust-item">
              <Icon name="checkCircle" size={19} />
              Genuine medicines only
            </span>
            <span className="hero-trust-item">
              <Icon name="clock" size={19} />
              Open 7 days a week
            </span>
          </div>
        </div>

        <div className="hero-visual" data-reveal="right" style={{ ["--rd" as string]: "120ms" }}>
          <div className="hero-frame">
            <div className="hero-img-wrap">
              <Image
                src={heroImg}
                alt="MediCare Plus pharmacist helping a patient choose medicine in our Nairobi pharmacy"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 980px) 92vw, 44vw"
              />
            </div>
          </div>

          <div className="float-card float-card-1">
            <span className="float-ico float-ico-teal">
              <Icon name="truck" size={24} />
            </span>
            <span>
              <b>Free Home Delivery</b>
              <span>Same-day, anywhere in Nairobi</span>
            </span>
          </div>

          <div className="float-card float-card-2">
            <span className="float-ico float-ico-coral">
              <Icon name="clock" size={24} />
            </span>
            <span>
              <b>
                <span className="live-dot" />
                Pharmacy Open 24/7
              </b>
              <span>Our CBD branch never closes</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
