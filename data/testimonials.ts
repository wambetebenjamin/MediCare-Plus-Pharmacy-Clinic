export interface Testimonial {
  name: string;
  service: string;
  rating: 4 | 5;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mercy Cheptoo",
    service: "Home Prescription Delivery",
    rating: 5,
    review:
      "I sent my mother's prescription on WhatsApp at 9 AM and the rider was at our gate in Ruaka by noon. The pharmacist even called to explain the new dosage. This is how healthcare should feel.",
  },
  {
    name: "James Kariuki",
    service: "Lab Tests",
    rating: 5,
    review:
      "Booked a full check-up at the Westlands branch. My results were sent by SMS the same afternoon, and Dr. Otieno walked me through every line. Very professional and honest people.",
  },
  {
    name: "Faith Njeri",
    service: "Antenatal Clinic",
    rating: 5,
    review:
      "Dr. Amina has seen me through my whole pregnancy. She answers my WhatsApp questions even on her off days. I always leave the clinic feeling calm and cared for.",
  },
  {
    name: "Samuel Odhiambo",
    service: "Diabetes Management",
    rating: 4,
    review:
      "The chronic care clinic reminds me before my sugar test strips run out and refills arrive at my office. Managing diabetes has never been this organised for me.",
  },
  {
    name: "Grace Muthoni",
    service: "Vaccination",
    rating: 5,
    review:
      "Took my two children for their KEPI vaccines at Karen. No queues, the nurse was so gentle my daughter didn't even cry. We have found our family clinic.",
  },
];
