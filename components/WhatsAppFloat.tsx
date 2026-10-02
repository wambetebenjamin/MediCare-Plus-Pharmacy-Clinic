import Icon from "./Icon";
import { WA_MAIN } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <div className="wa-float">
      <span className="wa-tooltip" role="tooltip">
        Order medicine or book a consultation
      </span>
      <a
        className="wa-btn"
        href={WA_MAIN}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MediCare Plus on WhatsApp"
      >
        <Icon name="whatsapp" size={30} />
      </a>
    </div>
  );
}
