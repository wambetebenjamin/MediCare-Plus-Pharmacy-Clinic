import { NextResponse } from "next/server";
import { doctors } from "@/data/doctors";

export const dynamic = "force-dynamic";

/** Doctor directory + availability, consumed by integrations and tools. */
export async function GET() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "short" });
  const list = doctors.map((doc) => ({
    id: doc.id,
    name: doc.name,
    specialty: doc.specialty,
    qualifications: doc.qualifications,
    daysAvailable: doc.days,
    hours: doc.hours,
    availableToday: doc.days.some(
      (d) => d.toLowerCase() === today.toLowerCase()
    ),
  }));
  return NextResponse.json({ ok: true, count: list.length, doctors: list });
}
