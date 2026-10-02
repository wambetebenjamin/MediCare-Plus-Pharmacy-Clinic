export interface Branch {
  id: string;
  name: string;
  tag?: string;
  address: string;
  phoneDisplay: string;
  phoneHref: string;
  hours: { days: string; time: string }[];
  pharmacyNote: string;
  mapsUrl: string;
}

export const branches: Branch[] = [
  {
    id: "cbd",
    name: "Nairobi CBD",
    tag: "Head Branch",
    address: "Kimathi Street, Opp. Sarova Stanley, Nairobi CBD",
    phoneDisplay: "+254 112 272 061",
    phoneHref: "tel:+254112272061",
    hours: [
      { days: "Mon – Sat", time: "7:00 AM – 9:00 PM" },
      { days: "Sun & Holidays", time: "9:00 AM – 6:00 PM" },
    ],
    pharmacyNote: "24-hour pharmacy on site",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kimathi+Street+Nairobi",
  },
  {
    id: "westlands",
    name: "Westlands",
    address: "Woodvale Grove, Westlands, Nairobi",
    phoneDisplay: "+254 112 272 062",
    phoneHref: "tel:+254112272062",
    hours: [
      { days: "Mon – Sat", time: "8:00 AM – 8:00 PM" },
      { days: "Sun", time: "10:00 AM – 4:00 PM" },
    ],
    pharmacyNote: "Pharmacy open till 10 PM",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Woodvale+Grove+Westlands+Nairobi",
  },
  {
    id: "kilimani",
    name: "Kilimani",
    address: "Argwings Kodhek Road, Kilimani, Nairobi",
    phoneDisplay: "+254 112 272 063",
    phoneHref: "tel:+254112272063",
    hours: [
      { days: "Mon – Sat", time: "8:00 AM – 8:00 PM" },
      { days: "Sun", time: "10:00 AM – 4:00 PM" },
    ],
    pharmacyNote: "Free parking available",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Argwings+Kodhek+Road+Nairobi",
  },
  {
    id: "karen",
    name: "Karen",
    address: "Karen Shopping Centre, Langata Road, Nairobi",
    phoneDisplay: "+254 112 272 064",
    phoneHref: "tel:+254112272064",
    hours: [
      { days: "Mon – Sat", time: "8:00 AM – 7:00 PM" },
      { days: "Sun", time: "10:00 AM – 3:00 PM" },
    ],
    pharmacyNote: "Dental suite on site",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Karen+Shopping+Centre+Nairobi",
  },
  {
    id: "thika",
    name: "Thika",
    address: "Kenyatta Highway, Thika Town, Kiambu",
    phoneDisplay: "+254 112 272 065",
    phoneHref: "tel:+254112272065",
    hours: [
      { days: "Mon – Sat", time: "8:00 AM – 8:00 PM" },
      { days: "Sun", time: "Closed · emergency line 24/7" },
    ],
    pharmacyNote: "Home delivery in Thika town",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kenyatta+Highway+Thika",
  },
];
