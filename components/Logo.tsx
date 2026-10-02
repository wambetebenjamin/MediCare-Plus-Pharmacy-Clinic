import Icon from "./Icon";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="MediCare Plus Pharmacy and Clinic">
      <span className="brand-mark">
        <Icon name="cross" size={22} />
      </span>
      {!compact && (
        <span className="brand-text">
          <span className="brand-name">
            MediCare <em>Plus</em>
          </span>
          <span className="brand-sub">Pharmacy &amp; Clinic</span>
        </span>
      )}
    </span>
  );
}
