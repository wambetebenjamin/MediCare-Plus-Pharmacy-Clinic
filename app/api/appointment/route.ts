import { NextRequest, NextResponse } from "next/server";
import { saveRecord } from "@/lib/store";
import { sendEmail, sendStaffWhatsApp } from "@/lib/notify";
import { waLink, SITE } from "@/lib/site";

const PHONE_RE = /^[+\d][\d\s-]{6,18}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function ref() {
  return `MCP-${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const branch = (body.branch || "").trim();
  const doctor = (body.doctor || "").trim() || "First available doctor";
  const date = (body.date || "").trim();
  const time = (body.time || "").trim();
  const message = (body.message || "").trim();
  const consent = body.consent === "on" || body.consent === "true";

  /* --- validation --- */
  if (name.length < 2)
    return NextResponse.json(
      { ok: false, error: "Please enter your full name." },
      { status: 422 }
    );
  if (!PHONE_RE.test(phone))
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 422 }
    );
  if (email && !EMAIL_RE.test(email))
    return NextResponse.json(
      { ok: false, error: "That email address does not look right." },
      { status: 422 }
    );
  if (!branch)
    return NextResponse.json(
      { ok: false, error: "Please choose a branch." },
      { status: 422 }
    );
  if (!DATE_RE.test(date))
    return NextResponse.json(
      { ok: false, error: "Please pick a valid appointment date." },
      { status: 422 }
    );
  if (new Date(date + "T00:00:00") < new Date(new Date().toDateString()))
    return NextResponse.json(
      { ok: false, error: "Appointment date cannot be in the past." },
      { status: 422 }
    );
  if (!time)
    return NextResponse.json(
      { ok: false, error: "Please choose a preferred time." },
      { status: 422 }
    );
  if (message.length < 3)
    return NextResponse.json(
      { ok: false, error: "Please briefly describe your concern." },
      { status: 422 }
    );
  if (!consent)
    return NextResponse.json(
      { ok: false, error: "Please accept the data protection consent." },
      { status: 422 }
    );

  const id = ref();
  const record = {
    id,
    name,
    phone,
    email: email || null,
    branch,
    doctor,
    date,
    time,
    message,
    source: "website",
    createdAt: new Date().toISOString(),
  };

  /* --- persist (Vercel KV, or console in local/preview) --- */
  await saveRecord("mcp:appointments", record);

  /* --- notify clinic staff --- */
  const staffText =
    `New appointment (${id})\n` +
    `Patient: ${name}\nPhone: ${phone}\nBranch: ${branch}\n` +
    `Doctor: ${doctor}\nWhen: ${date} at ${time}\nConcern: ${message}`;
  await sendStaffWhatsApp(staffText);

  await sendEmail({
    to: "bookings@medicareplus.co.ke",
    replyTo: email || undefined,
    subject: `New appointment request ${id} — ${name}`,
    html: `<h2>New appointment request</h2><pre style="font-family:monospace">${staffText}</pre>`,
  });

  /* --- patient confirmation email --- */
  let emailSent = false;
  if (email) {
    emailSent = await sendEmail({
      to: email,
      subject: `We received your appointment request (${id}) — MediCare Plus`,
      html: `<p>Hello ${name.split(" ")[0]},</p>
<p>Thank you for choosing MediCare Plus. We have received your appointment request:</p>
<ul>
  <li><b>Reference:</b> ${id}</li>
  <li><b>Branch:</b> ${branch}</li>
  <li><b>Doctor:</b> ${doctor}</li>
  <li><b>Date & time:</b> ${date} at ${time}</li>
</ul>
<p>Our reception team will confirm your slot shortly on <b>${phone}</b>. For urgent changes call ${SITE.phoneDisplay}.</p>
<p>Your Health. Our Priority.<br/>MediCare Plus Pharmacy &amp; Clinic</p>`,
    });
  }

  /* --- click-to-send WhatsApp confirmation for the patient --- */
  const whatsappUrl = waLink(
    `Hello MediCare Plus! I just requested an appointment on your website.\n` +
      `Ref: ${id}\nName: ${name}\nBranch: ${branch}\n` +
      `Date: ${date} at ${time}\nDoctor: ${doctor}`
  );

  return NextResponse.json({ ok: true, id, whatsappUrl, emailSent });
}
