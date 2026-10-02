import Hero from "@/components/Hero";
import QuickServices from "@/components/QuickServices";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Doctors from "@/components/Doctors";
import Stats from "@/components/Stats";
import Pharmacy from "@/components/Pharmacy";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import Insurance from "@/components/Insurance";
import Branches from "@/components/Branches";
import ContactSection from "@/components/ContactSection";
import { doctors } from "@/data/doctors";
import { SITE } from "@/lib/site";

const physiciansJsonLd = {
  "@context": "https://schema.org",
  "@graph": doctors.map((doc) => ({
    "@type": "Physician",
    "@id": `${SITE.url}/#doctor-${doc.id}`,
    name: doc.name,
    medicalSpecialty: doc.specialty.replace(/·/g, ","),
    qualifications: doc.qualifications,
    worksFor: { "@id": `${SITE.url}/#clinic` },
    availableService: {
      "@type": "MedicalProcedure",
      name: doc.specialty.split("·")[0].trim(),
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physiciansJsonLd) }}
      />
      <Hero />
      <QuickServices />
      <Services />
      <HowItWorks />
      <Doctors />
      <Stats />
      <Pharmacy />
      <BlogSection />
      <Testimonials />
      <Insurance />
      <Branches />
      <ContactSection />
    </>
  );
}
