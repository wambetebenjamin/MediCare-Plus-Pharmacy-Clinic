import Icon from "./Icon";
import { quickServices } from "@/data/services";

export default function QuickServices() {
  return (
    <section className="quick" aria-label="Quick services">
      <div className="container">
        <div className="quick-grid">
          {quickServices.map((q, i) => (
            <article
              key={q.title}
              className="quick-card"
              data-reveal
              style={{ ["--rd" as string]: `${i * 90}ms` }}
            >
              <span className="quick-ico">
                <Icon name={q.icon} size={26} />
              </span>
              <h3>{q.title}</h3>
              <p>{q.note}</p>
              <a
                href={q.href}
                {...(q.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                Access
                <Icon name="arrowRight" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
