import Icon from "./Icon";
import { SITE } from "@/lib/site";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-group">
          <span className="topbar-item">
            <Icon name="clock" size={15} />
            24-Hour Pharmacy
          </span>
          <span className="topbar-item">
            <Icon name="truck" size={16} />
            Free Home Delivery in Nairobi
          </span>
          <span className="topbar-item">
            <Icon name="pin" size={15} />
            5 Branches across Nairobi
          </span>
        </div>
        <a className="topbar-emergency" href={SITE.phoneHref}>
          <Icon name="phone" size={14} />
          Emergency: {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
