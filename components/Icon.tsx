import React from "react";

/**
 * Central hand-drawn SVG icon set (24×24 stroke icons, lucide-style).
 * Medical cross and the WhatsApp glyph are filled for brand recognition.
 */

export type IconName =
  | "cross"
  | "whatsapp"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "calendar"
  | "stethoscope"
  | "pill"
  | "flask"
  | "truck"
  | "star"
  | "quote"
  | "arrowRight"
  | "arrowLeft"
  | "shield"
  | "baby"
  | "eye"
  | "tooth"
  | "syringe"
  | "heartPulse"
  | "users"
  | "award"
  | "search"
  | "menu"
  | "close"
  | "check"
  | "checkCircle"
  | "home"
  | "leaf"
  | "send"
  | "facebook"
  | "instagram"
  | "x"
  | "linkedin";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}

const FILLED: IconName[] = ["cross", "whatsapp", "star", "quote", "facebook", "x", "linkedin"];

const paths: Record<IconName, React.ReactNode> = {
  cross: (
    <>
      <rect x="9" y="3" width="6" height="18" rx="1.6" />
      <rect x="3" y="9" width="18" height="6" rx="1.6" />
    </>
  ),
  whatsapp: (
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-2.99-.2-.31a8.07 8.07 0 0 1-1.24-4.32c0-4.47 3.64-8.1 8.12-8.1a8.1 8.1 0 0 1 8.1 8.1c0 4.48-3.63 8.12-8.1 8.12zm4.44-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.01-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.18 3.7.58.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" />
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
      <path d="M8 2.5v4M16 2.5v4M3 9.5h18" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M4.8 2.3H6a1 1 0 0 1 1 1V9a5 5 0 0 0 10 0V3.3a1 1 0 0 1 1-1h1.2" />
      <path d="M12 14v2.5a5.5 5.5 0 0 0 11 0V14" />
      <circle cx="23" cy="11.5" r="2.3" transform="translate(-4.5 0)" />
    </>
  ),
  pill: (
    <>
      <path d="m10.5 20.6-7-7a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7z" />
      <path d="m8.5 8.5 7 7" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10.5 3v5.2L4.7 17.6A2.4 2.4 0 0 0 6.8 21h10.4a2.4 2.4 0 0 0 2.1-3.4L13.5 8.2V3" />
      <path d="M7.6 14.5h8.8" />
    </>
  ),
  truck: (
    <>
      <path d="M1.5 7.5h13v9h-13zM14.5 10.5h4l3.5 3.5v2.5h-7.5" />
      <circle cx="6" cy="18.8" r="1.9" />
      <circle cx="18" cy="18.8" r="1.9" />
    </>
  ),
  star: (
    <path d="M12 2.2l3 6.2 6.8 1-4.9 4.75 1.15 6.75L12 17.8l-6.05 3.1L7.1 14.15 2.2 9.4l6.8-1z" />
  ),
  quote: (
    <path d="M10 8c-3.2.9-5 3.1-5 6.4V19h6v-6H8.2c.2-1.8 1.2-2.9 3-3.6L10 8zm10 0c-3.2.9-5 3.1-5 6.4V19h6v-6h-2.8c.2-1.8 1.2-2.9 3-3.6L20 8z" />
  ),
  arrowRight: <path d="M4.5 12h15m-6.5-7 7 7-7 7" />,
  arrowLeft: <path d="M19.5 12h-15m6.5-7-7 7 7 7" />,
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.4-7.66 8.9a1 1 0 0 1-.69 0C7.5 20.4 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 11.8 2.2 2.2L15.5 9.5" />
    </>
  ),
  baby: (
    <>
      <circle cx="12" cy="6.5" r="3.2" />
      <path d="M4.5 21c.8-4.4 3.9-7 7.5-7s6.7 2.6 7.5 7" />
      <path d="M9.5 10.5c.7.9 1.6 1.4 2.5 1.4s1.8-.5 2.5-1.4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.3 12 5.3 21.5 12 21.5 12 18 18.7 12 18.7 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  tooth: (
    <path d="M12 5.4c1.4-1.1 3.3-1.9 4.9-1.3 2 .7 2.7 2.7 2.2 4.9-.3 1.4-1 2.6-1.4 4-.4 1.5-.6 3.1-.9 4.6-.3 1.4-.8 3.7-2.1 3.7-1.6 0-1.5-2.4-1.8-3.8-.3-1.2-.8-2.6-2-2.6s-1.7 1.4-2 2.6c-.3 1.4-.2 3.8-1.8 3.8-1.3 0-1.8-2.3-2.1-3.7-.3-1.5-.5-3.1-.9-4.6-.4-1.4-1.1-2.6-1.4-4C2.2 6.8 3 4.8 4.9 4.1 6.5 3.5 10.6 4.3 12 5.4z" />
  ),
  syringe: (
    <>
      <path d="m17.5 2.5 4 4M16 6.5 19.5 3M7.8 21.5 2.5 16.2l9.3-9.3 5.5 5.5z" />
      <path d="m2 22 3.8-3.8M9.5 10.5l2.2 2.2M12.5 7.5l2.2 2.2" />
    </>
  ),
  heartPulse: (
    <>
      <path d="M19.5 13.6 12 21l-7.5-7.4A5.4 5.4 0 0 1 12 6.3a5.4 5.4 0 0 1 7.5 7.3z" />
      <path d="M3 12h4.2l1.6-2.4 3 5.6 2-6.4 1.4 3.2H21" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6.5a4 4 0 0 0-4 4v2" />
      <circle cx="9.2" cy="7" r="3.8" />
      <path d="M21.5 21v-2a4 4 0 0 0-3-3.9M15.5 3.3a3.8 3.8 0 0 1 0 7.4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="m15.4 13.2 1.6 8.3-5-2.9-5 2.9 1.6-8.3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7.5" />
      <path d="m21 21-4.1-4.1" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.3 2.4 2.4 4.8-5.4" />
    </>
  ),
  home: (
    <>
      <path d="m3.5 10.5 8.5-7 8.5 7" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20.5A7 7 0 0 1 9.8 6.6C15.5 5.5 17 5 19 2.5c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" />
      <path d="M2.5 21.5c0-3 1.9-5.4 5.1-6C10 14.5 12 13 13 12" />
    </>
  ),
  send: (
    <>
      <path d="m21.5 2.5-10 10M21.5 2.5 15 21.5l-3.5-8-8-3.5z" />
    </>
  ),
  facebook: (
    <path d="M17.5 2h-3a5 5 0 0 0-5 5v2.8H6.8v3.9h2.7V22h4v-8.3h3l1-3.9h-4V7.1a1 1 0 0 1 1-1.1h3z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  x: (
    <path d="M17.8 3h3.1l-6.8 7.8L22.2 21h-6.3l-4.9-6.4L5.4 21H2.3l7.3-8.3L2.1 3h6.4l4.4 5.9zm-1.1 16.2h1.7L7.7 4.7H5.9z" />
  ),
  linkedin: (
    <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3-1.9 0-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.4zM5.3 7.4a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1zM7.1 20.4H3.6V9h3.5z" />
  ),
};

export default function Icon({
  name,
  size = 24,
  strokeWidth = 1.8,
  ...rest
}: IconProps) {
  const filled = FILLED.includes(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? 0 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
