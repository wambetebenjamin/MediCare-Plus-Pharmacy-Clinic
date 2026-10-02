import Icon from "./Icon";
import ContactForm from "./ContactForm";
import { SITE, WA_MAIN } from "@/lib/site";

export default function ContactSection() {
  return (
    <section className="section contact" id="contact" aria-label="Contact and appointments">
      <div className="container contact-grid">
        <div className="contact-info" data-reveal="left">
          <span className="eyebrow" style={{ color: "#8ce8e2" }}>
            Get In Touch
          </span>
          <h3>Book an appointment or just say hello</h3>
          <p>
            Call, WhatsApp or drop by — our friendly reception team answers
            within minutes during working hours.
          </p>

          <div className="contact-rows">
            <div className="contact-row">
              <span className="ci">
                <Icon name="phone" size={21} />
              </span>
              <div>
                <b>Call us</b>
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </div>
            </div>
            <div className="contact-row">
              <span className="ci">
                <Icon name="whatsapp" size={21} />
              </span>
              <div>
                <b>WhatsApp</b>
                <a href={WA_MAIN} target="_blank" rel="noopener noreferrer">
                  Chat with our team
                </a>
              </div>
            </div>
            <div className="contact-row">
              <span className="ci">
                <Icon name="mail" size={21} />
              </span>
              <div>
                <b>Email</b>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
            <div className="contact-row">
              <span className="ci">
                <Icon name="pin" size={21} />
              </span>
              <div>
                <b>Head branch</b>
                <span>{SITE.address}</span>
              </div>
            </div>
            <div className="contact-row">
              <span className="ci">
                <Icon name="clock" size={21} />
              </span>
              <div>
                <b>Working hours</b>
                <span>Mon – Sat: 7:00 AM – 9:00 PM · Sun: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="contact-emergency">
            <span className="pulse-ring">
              <Icon name="phone" size={22} />
            </span>
            <div>
              <span>24/7 Emergency Line</span>
              <b>{SITE.phoneDisplay}</b>
            </div>
          </div>
        </div>

        <div className="form-card" data-reveal="right" style={{ ["--rd" as string]: "120ms" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
