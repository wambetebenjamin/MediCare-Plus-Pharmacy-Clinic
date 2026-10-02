import { ImageResponse } from "next/og";

export const alt =
  "MediCare Plus Pharmacy & Clinic | Your Health. Our Priority.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(125deg, #0e2f66 0%, #14418f 55%, #15803d 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              background: "linear-gradient(135deg, #22c55e, #15803d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", width: 16, height: 46, borderRadius: 4, background: "#fff" }} />
            <div style={{ position: "absolute", width: 46, height: 16, borderRadius: 4, background: "#fff" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
              MediCare <span style={{ color: "#6ee7b7" }}>Plus</span>
            </span>
            <span style={{ fontSize: 15, letterSpacing: 6, textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
              Pharmacy &amp; Clinic
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Your Health. <span style={{ color: "#6ee7b7" }}>Our Priority.</span>
          </span>
          <span style={{ fontSize: 26, color: "rgba(255,255,255,0.75)", maxWidth: 820 }}>
            Doctors · 24-hour pharmacy · lab tests · free home delivery across Nairobi.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "linear-gradient(135deg, #ef4444, #c81e1e)",
              padding: "14px 30px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Emergency: +254 112 272 061
          </div>
          <span style={{ fontSize: 20, color: "rgba(255,255,255,0.6)" }}>
            5 branches · Nairobi, Kenya
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
