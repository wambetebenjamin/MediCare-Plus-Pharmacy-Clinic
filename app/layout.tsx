import type { Metadata, Viewport } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollDots from "@/components/ScrollDots";
import CookieConsent from "@/components/CookieConsent";
import ScrollFX from "@/components/ScrollFX";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "MediCare Plus Pharmacy & Clinic | 24-Hour Pharmacy & Doctors in Nairobi",
    template: "%s | MediCare Plus Pharmacy & Clinic",
  },
  description: SITE.description,
  keywords: [
    "pharmacy Nairobi",
    "clinic Nairobi",
    "doctor consultation Kenya",
    "medicine home delivery Nairobi",
    "24 hour pharmacy Nairobi",
    "lab tests Nairobi",
    "MediCare Plus",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE.url,
    siteName: SITE.name,
    title: "MediCare Plus Pharmacy & Clinic — Your Health. Our Priority.",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "MediCare Plus Pharmacy & Clinic",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#008080",
  width: "device-width",
  initialScale: 1,
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "Pharmacy"],
  "@id": `${SITE.url}/#clinic`,
  name: SITE.name,
  alternateName: "MediCare Plus",
  description: SITE.description,
  url: SITE.url,
  telephone: "+254112272061",
  email: SITE.email,
  priceRange: "KSh",
  currenciesAccepted: "KES",
  image: [`${SITE.url}/images/hero.jpg`],
  logo: `${SITE.url}/icon.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kimathi Street",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "KE",
  },
  geo: { "@type": "GeoCoordinates", latitude: -1.2833, longitude: 36.8219 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
  medicalSpecialty: [
    "PrimaryCare",
    "Pediatric",
    "Obstetric",
    "Gynecologic",
    "Dentistry",
    "Optometric",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "General Consultation" },
    { "@type": "MedicalTest", name: "Laboratory and Diagnostic Tests" },
    { "@type": "MedicalProcedure", name: "Vaccination and Immunisation" },
    { "@type": "MedicalProcedure", name: "Antenatal and Postnatal Care" },
  ],
  sameAs: Object.values(SITE.socials),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400..900&family=Nunito:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
      </head>
      <body>
        <Topbar />
        <Navbar />
        <main id="top">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollDots />
        <CookieConsent />
        <ScrollFX />
      </body>
    </html>
  );
}
