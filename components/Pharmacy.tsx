import Image from "next/image";
import Icon from "./Icon";
import MedicineSearch from "./MedicineSearch";
import { WA_REFILL, waOrderLink } from "@/lib/site";
import pharmacyImg from "@/public/images/hero.jpg";
import catRx from "@/public/images/cat-prescription.jpg";
import catOtc from "@/public/images/cat-otc.jpg";
import catSupp from "@/public/images/cat-supplements.jpg";
import catBaby from "@/public/images/cat-baby.jpg";
import catSkin from "@/public/images/cat-skincare.jpg";
import type { StaticImageData } from "next/image";

interface Category {
  name: string;
  image: StaticImageData;
  orderText: string;
}

const categories: Category[] = [
  {
    name: "Prescription Drugs",
    image: catRx,
    orderText: "prescription drugs (I will share my prescription photo)",
  },
  {
    name: "OTC Medicine",
    image: catOtc,
    orderText: "over-the-counter medicine",
  },
  {
    name: "Supplements",
    image: catSupp,
    orderText: "vitamins and supplements",
  },
  {
    name: "Baby & Mother",
    image: catBaby,
    orderText: "baby and mother care products",
  },
  {
    name: "Skincare",
    image: catSkin,
    orderText: "skincare products",
  },
];

export default function Pharmacy() {
  return (
    <section className="section section-mint" id="pharmacy" aria-label="Pharmacy">
      <div className="container pharmacy-grid">
        <div
          className="pharmacy-visual"
          data-reveal="left"
        >
          <div className="pharmacy-img">
            <Image
              src={pharmacyImg}
              alt="MediCare Plus pharmacist advising a customer inside our fully stocked Nairobi pharmacy"
              fill
              placeholder="blur"
              sizes="(max-width: 980px) 92vw, 42vw"
            />
            <div className="pharmacy-img-tag">
              <b>PPB-Licensed Pharmacies</b>
              <span>Qualified pharmacist at every branch</span>
            </div>
          </div>
          <div className="pharmacy-24" aria-hidden="true">
            <b>24/7</b>
            <span>CBD Pharmacy</span>
          </div>
        </div>

        <div data-reveal="right" style={{ ["--rd" as string]: "120ms" }}>
          <div className="section-head-left">
            <span className="eyebrow">Our Pharmacy</span>
            <h2>Order medicine without leaving home</h2>
            <div className="divider divider-left" />
            <p>
              Search a medicine below or send us a photo of your prescription.
              Our pharmacists confirm stock, share the price and dispatch a
              rider, free anywhere in Nairobi.
            </p>
          </div>

          <MedicineSearch />

          <div className="pharmacy-cats">
            {categories.map((cat) => (
              <div className="pharm-cat" key={cat.name}>
                <span className="pharm-cat-img">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    placeholder="blur"
                    sizes="68px"
                  />
                </span>
                <div>
                  <b>{cat.name}</b>
                  <a
                    href={waOrderLink(cat.orderText)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="whatsapp" size={14} />
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}

            <div
              className="pharm-cat"
              style={{ background: "linear-gradient(135deg, #22c55e, #15803d)", borderColor: "#15803d" }}
            >
              <span
                className="pharm-cat-img"
                style={{ background: "rgba(255,255,255,0.15)", display: "grid", placeItems: "center", color: "#fff" }}
              >
                <Icon name="pill" size={30} />
              </span>
              <div>
                <b style={{ color: "#fff" }}>Have a prescription?</b>
                <a href={WA_REFILL} target="_blank" rel="noopener noreferrer" style={{ color: "#fed7d7" }}>
                  <Icon name="whatsapp" size={14} />
                  Refill it now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
