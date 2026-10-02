import Icon from "./Icon";
import { insurancePartners } from "@/data/insurance";

export default function Insurance() {
  // Rendered twice for a seamless marquee loop
  const items = [...insurancePartners, ...insurancePartners];

  return (
    <section className="insurance" aria-label="Insurance partners">
      <div className="container">
        <p className="insurance-label" data-reveal>
          We accept major insurance covers
        </p>
      </div>
      <div className="marquee" data-reveal>
        <div className="marquee-track">
          {items.map((partner, i) => (
            <span className="insu-chip" key={`${partner.name}-${i}`}>
              <Icon name="shield" size={22} />
              <div>
                {partner.name}
                <small>{partner.full}</small>
              </div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
