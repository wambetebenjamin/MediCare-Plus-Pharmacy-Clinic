import { NextRequest, NextResponse } from "next/server";
import { saveRecord } from "@/lib/store";
import { sendEmail } from "@/lib/notify";
import { WA_MAIN } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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
  const message = (body.message || "").trim();

  if (name.length < 2)
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 422 }
    );
  if (!EMAIL_RE.test(email))
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 }
    );
  if (message.length < 3)
    return NextResponse.json(
      { ok: false, error: "Please write your message." },
      { status: 422 }
    );

  const id = `ENQ-${Date.now().toString(36).toUpperCase()}`;
  await saveRecord("mcp:enquiries", {
    id,
    name,
    phone: phone || null,
    email,
    message,
    createdAt: new Date().toISOString(),
  });

  await sendEmail({
    to: "hello@medicareplus.co.ke",
    replyTo: email,
    subject: `Website enquiry ${id} — ${name}`,
    html: `<p><b>From:</b> ${name} (${email}${phone ? `, ${phone}` : ""})</p><p>${message
      .replace(/</g, "&lt;")
      .replace(/\n/g, "<br/>")}</p>`,
  });

  return NextResponse.json({ ok: true, id, whatsappUrl: WA_MAIN });
}
