import Icon from "./Icon";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import { SITE, WA_MAIN } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Meet the Doctors", href: "#doctors" },
  { label: "Pharmacy", href: "#pharmacy" },
  { label: "Health Blog", href: "#blog" },
  { label: "Branches", href: "#branches" },
];

const serviceLinks = [
  "General Consultation",
  "Pharmacy & Dispensing",
  "Lab & Diagnostics",
  "Maternal Health",
  "Dental & Eye Care",
  "Chronic Care Clinics",
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Emergency strip */}
      <div className="footer-emergency">
        <div className="container footer-emergency-inner">
          <div className="fe-left">
            <span className="fe-ico">
              <Icon name="phone" size={26} />
            </span>
            <div>
              <b>Medical emergency? Call us any time.</b>
              <span>Our 24-hour line and CBD pharmacy never close.</span>
            </div>
          </div>
          <div className="fe-left" style={{ gap: "12px" }}>
            <a className="btn btn-sm" href={SITE.phoneHref}>
              <Icon name="phone" size={16} />
              {SITE.phoneDisplay}
            </a>
            <a
              className="btn btn-sm btn-ghost"
              href={WA_MAIN}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderColor: "rgba(255,255,255,0.6)" }}
            >
              <Icon name="whatsapp" size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-about">
          <span style={{ filter: "brightness(0) invert(1)", display: "inline-flex" }}>
            <Logo />
          </span>
          <p>
            MediCare Plus is a family of neighbourhood clinics and pharmacies
            making quality healthcare feel close, warm and affordable, across
            Nairobi since 2016.
          </p>
          <div className="socials">
            <a href={SITE.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Icon name="facebook" size={18} />
            </a>
            <a href={SITE.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={18} />
            </a>
            <a href={SITE.socials.x} aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <Icon name="x" size={17} />
            </a>
            <a href={SITE.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={17} />
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  <Icon name="arrowRight" size={13} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h4>Our Services</h4>
          <ul className="footer-links">
            {serviceLinks.map((service) => (
              <li key={service}>
                <a href="#services">
                  <Icon name="arrowRight" size={13} />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4>Stay Healthy</h4>
          <div className="footer-tip">
            <b>
              <Icon name="leaf" size={16} />
              Health Tip of the Week
            </b>
            Rainy season is malaria season in Nairobi. Sleep under treated
            nets, and test early when fever starts. Early treatment is faster,
            cheaper and safer.
          </div>
          <div className="newsletter">
            <p>
              Join 2,000+ Nairobians getting a short, practical health tip
              every week. No spam, ever.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved. Made
          with care in Nairobi.
        </span>
        <span className="kbadge">
          <Icon name="shield" size={16} />
          KMPDC Accredited · PPB Licensed
        </span>
      </div>
    </footer>
  );
}
