/**
 * Notification helpers — email + WhatsApp.
 *
 * EMAIL: If RESEND_API_KEY is set and the `resend` package is installed,
 * transactional emails are sent via Resend. Otherwise the email payload is
 * logged so nothing is silently lost.
 *
 * WHATSAPP: The clinic receives notifications inside WhatsApp. Without the
 * WhatsApp Business API the site generates a click-to-send wa.me link that is
 * returned to the browser (patient taps to confirm). When WHATSAPP_API_TOKEN +
 * WHATSAPP_PHONE_ID are present the message is sent through the Meta Cloud API.
 */

import { SITE } from "./site";

const EMAIL_FROM = "MediCare Plus <bookings@medicareplus.co.ke>";

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.log("[notify:email:mock]", { to: opts.to, subject: opts.subject });
    return false;
  }
  try {
    // Optional dependency — only loaded when configured.
    const mod: any = await import(/* webpackIgnore: true */ "resend" as string);
    const resend = new mod.Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({ from: EMAIL_FROM, ...opts });
    return true;
  } catch (err) {
    console.error("[notify:email] failed:", err);
    return false;
  }
}

/** Send a WhatsApp message to clinic staff through the Meta Cloud API (optional). */
export async function sendStaffWhatsApp(text: string): Promise<boolean> {
  const token = process.env.WHATSAPP_API_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const to = process.env.WHATSAPP_STAFF_NUMBER || SITE.whatsappNumber;
  if (!token || !phoneId) {
    console.log("[notify:whatsapp:mock]", text);
    return false;
  }
  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${phoneId}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { body: text },
        }),
      }
    );
    return res.ok;
  } catch (err) {
    console.error("[notify:whatsapp] failed:", err);
    return false;
  }
}
