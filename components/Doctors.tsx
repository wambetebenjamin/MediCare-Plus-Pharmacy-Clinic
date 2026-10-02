import Image from "next/image";
import Icon from "./Icon";
import { doctors } from "@/data/doctors";
import { waDoctorLink } from "@/lib/site";

export default function Doctors() {
  return (
    <section className="section section-soft" id="doctors" aria-label="Our doctors">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Meet Our Doctors</span>
          <h2>Specialists you can trust</h2>
          <div className="divider" />
          <p>
            Experienced, KMPDC-registered clinicians who take time to listen —
            and follow up until you are well.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <article
              key={doc.id}
              className="doctor-card"
              data-reveal
              style={{ ["--rd" as string]: `${(i % 4) * 90}ms` }}
            >
              <div className="doctor-photo">
                <Image
                  src={doc.image}
                  alt={`${doc.name}, ${doc.specialty} at MediCare Plus`}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1080px) 90vw, 24vw"
                  style={{ objectPosition: doc.imagePosition ?? "50% 20%" }}
                />
                <ul className="doctor-days" aria-label="Days available">
                  {doc.days.map((day) => (
                    <li key={day} className="day-chip">
                      {day}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <p className="doctor-spec">{doc.specialty}</p>
                <p className="doctor-qual">
                  <Icon name="award" size={15} />
                  {doc.qualifications}
                </p>
                <p className="doctor-hours">
                  <Icon name="clock" size={15} />
                  {doc.hours}
                </p>
                <a
                  className="btn btn-teal btn-sm btn-block"
                  href={waDoctorLink(doc.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={17} />
                  Book with {doc.name.split(" ")[0]} {doc.firstName}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
