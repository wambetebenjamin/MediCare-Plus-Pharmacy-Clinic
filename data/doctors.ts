import doctorWanjiku from "@/public/images/doctor-wanjiku.jpg";
import doctorOtieno from "@/public/images/doctor-otieno.jpg";
import doctorAmina from "@/public/images/doctor-amina.jpg";
import doctorMwangi from "@/public/images/doctor-mwangi.jpg";
import type { StaticImageData } from "next/image";

export interface Doctor {
  id: string;
  name: string;
  firstName: string;
  specialty: string;
  qualifications: string;
  days: string[];
  hours: string;
  image: StaticImageData;
  /** CSS object-position for nicely framed portraits */
  imagePosition?: string;
}

export const doctors: Doctor[] = [
  {
    id: "sarah-wanjiku",
    name: "Dr. Sarah Wanjiku",
    firstName: "Sarah",
    specialty: "General Practitioner · Family Medicine",
    qualifications: "MBChB (UoN), PGDip Family Medicine",
    days: ["Mon", "Wed", "Fri"],
    hours: "8:00 AM – 4:00 PM",
    image: doctorWanjiku,
    imagePosition: "50% 20%",
  },
  {
    id: "brian-otieno",
    name: "Dr. Brian Otieno",
    firstName: "Brian",
    specialty: "Physician · Internal Medicine & Chronic Care",
    qualifications: "MBChB (UoN), MMed Internal Medicine",
    days: ["Tue", "Thu", "Sat"],
    hours: "9:00 AM – 5:00 PM",
    image: doctorOtieno,
    imagePosition: "50% 18%",
  },
  {
    id: "amina-yusuf",
    name: "Dr. Amina Yusuf",
    firstName: "Amina",
    specialty: "Paediatrician · Maternal & Child Health",
    qualifications: "MBChB (UoN), MMed Paediatrics & Child Health",
    days: ["Mon", "Tue", "Thu"],
    hours: "8:00 AM – 3:00 PM",
    image: doctorAmina,
    imagePosition: "50% 30%",
  },
  {
    id: "david-mwangi",
    name: "Dr. David Mwangi",
    firstName: "David",
    specialty: "Dental Surgeon",
    qualifications: "BDS (UoN), PG Cert. Oral Surgery",
    days: ["Wed", "Fri", "Sat"],
    hours: "10:00 AM – 6:00 PM",
    image: doctorMwangi,
    imagePosition: "26% 50%",
  },
];
