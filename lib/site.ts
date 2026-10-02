/**
 * Central site configuration for MediCare Plus Pharmacy & Clinic.
 * All phone numbers, WhatsApp links, addresses and socials live here.
 */

export const SITE = {
  name: "MediCare Plus Pharmacy & Clinic",
  shortName: "MediCare Plus",
  tagline: "Your Health. Our Priority.",
  description:
    "Quality healthcare and pharmacy services across Nairobi. Doctor consultations, prescription refills, lab tests, vaccination and free home drug delivery across 5 branches.",
  url: "https://medicareplus.co.ke",
  email: "hello@medicareplus.co.ke",
  phoneDisplay: "+254 112 272 061",
  phoneHref: "tel:+254112272061",
  whatsappNumber: "254112272061",
  address: "Kimathi Street, Nairobi CBD, Kenya",
  socials: {
    facebook: "https://facebook.com/medicarepluske",
    instagram: "https://instagram.com/medicarepluske",
    x: "https://x.com/medicarepluske",
    linkedin: "https://linkedin.com/company/medicarepluske",
  },
} as const;

/**
 * Build a wa.me deep link with a pre-filled message.
 */
export function waLink(message: string, number: string = SITE.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Primary WhatsApp CTA: book or order. */
export const WA_MAIN = waLink(
  "Hello! I'd like to book an appointment or order medicine at MediCare Plus."
);

/** Prescription refill CTA used across the site. */
export const WA_REFILL = waLink(
  "Hello! I'd like to refill my prescription at MediCare Plus."
);

/** Per-doctor booking link. */
export function waDoctorLink(doctorName: string) {
  return waLink(
    `Hello! I'd like to book an appointment with ${doctorName} at MediCare Plus.`
  );
}

/** Per-branch WhatsApp link. */
export function waBranchLink(branchName: string) {
  return waLink(
    `Hello! I'd like to talk to the MediCare Plus ${branchName} branch.`
  );
}

/** Medicine order link for a specific category or search term. */
export function waOrderLink(item: string) {
  return waLink(
    `Hello! I'd like to order ${item} from MediCare Plus Pharmacy.`
  );
}
