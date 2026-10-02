import { WA_MAIN, WA_REFILL, waOrderLink } from "@/lib/site";
import type { IconName } from "@/components/Icon";

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "stethoscope",
    title: "General Consultation",
    description:
      "Walk in or book same-day GP consultations for the whole family. Adults and children welcome.",
  },
  {
    icon: "pill",
    title: "Pharmacy & Dispensing",
    description:
      "Genuine prescription and over-the-counter medicines from our fully stocked, PPB-licensed pharmacies.",
  },
  {
    icon: "flask",
    title: "Lab & Diagnostics",
    description:
      "On-site laboratory: blood work, malaria, typhoid, glucose and HbA1c, with same-day results.",
  },
  {
    icon: "baby",
    title: "Maternal Health",
    description:
      "Antenatal clinics, ultrasound referrals, postnatal reviews and child growth monitoring.",
  },
  {
    icon: "tooth",
    title: "Dental Care",
    description:
      "Check-ups, scaling & polishing, fillings and gentle extractions at our CBD and Karen suites.",
  },
  {
    icon: "eye",
    title: "Eye Care",
    description:
      "Vision screening, refraction tests and fast referrals for glasses and specialist eye care.",
  },
  {
    icon: "syringe",
    title: "Vaccination",
    description:
      "Childhood immunisation (KEPI), travel vaccines, flu and HPV jabs. Walk-ins welcome.",
  },
  {
    icon: "heartPulse",
    title: "Chronic Disease Management",
    description:
      "Hypertension, diabetes and asthma clinics with refill reminders and routine reviews.",
  },
];

export interface QuickService {
  icon: IconName;
  title: string;
  note: string;
  accessLabel: string;
  href: string;
  external?: boolean;
}

export const quickServices: QuickService[] = [
  {
    icon: "stethoscope",
    title: "Doctor Consultation",
    note: "From KSh 1,000 · all ages",
    accessLabel: "Access",
    href: "#contact",
  },
  {
    icon: "pill",
    title: "Prescription Refill",
    note: "WhatsApp your prescription",
    accessLabel: "Access",
    href: WA_REFILL,
    external: true,
  },
  {
    icon: "flask",
    title: "Lab Tests",
    note: "Same-day results by SMS",
    accessLabel: "Access",
    href: "#contact",
  },
  {
    icon: "truck",
    title: "Home Delivery",
    note: "Free within Nairobi",
    accessLabel: "Access",
    href: waOrderLink("medicine for home delivery"),
    external: true,
  },
];

export { WA_MAIN };
