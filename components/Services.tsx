import Icon from "./Icon";
import { services } from "@/data/services";
import { WA_MAIN } from "@/lib/site";

export default function Services() {
  return (
    <section className="section" id="services" aria-label="Our services">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">What We Do</span>
          <h2>Complete care, under one roof</h2>
          <div className="divider" />
          <p>
            From a simple fever to lifelong chronic care, our clinics combine
            doctors, laboratory and pharmacy so you never shuttle between
            facilities again.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="service-card"
              data-reveal
              style={{ ["--rd" as string]: `${(i % 4) * 80}ms` }}
            >
              <span className="service-ico">
                <Icon name={service.icon} size={28} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                className="service-link"
                href={WA_MAIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <Icon name="arrowRight" size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
