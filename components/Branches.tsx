"use client";

import { useState } from "react";
import Icon from "./Icon";
import { branches } from "@/data/branches";
import { waBranchLink } from "@/lib/site";

export default function Branches() {
  const [activeId, setActiveId] = useState(branches[0].id);
  const branch = branches.find((b) => b.id === activeId) ?? branches[0];

  return (
    <section className="section" id="branches" aria-label="Branch locations">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Find Us</span>
          <h2>5 branches across Nairobi</h2>
          <div className="divider" />
          <p>
            Near home, near work, near your matatu stage: there is a MediCare
            Plus close to you.
          </p>
        </div>

        <div
          className="branch-tabs"
          role="tablist"
          aria-label="Choose a branch"
          data-reveal
        >
          {branches.map((b) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={b.id === activeId}
              className={`branch-tab${b.id === activeId ? " active" : ""}`}
              onClick={() => setActiveId(b.id)}
            >
              <Icon name="pin" size={16} />
              {b.name}
            </button>
          ))}
        </div>

        <div className="branch-panel" key={branch.id} data-reveal="zoom">
          <div className="branch-card">
            <div className="branch-main">
              {branch.tag && <span className="branch-tag">{branch.tag}</span>}
              <h3>MediCare Plus {branch.name}</h3>
              <div className="branch-rows">
                <p className="branch-row">
                  <Icon name="pin" size={19} />
                  <span>
                    <b>Address</b>
                    <br />
                    {branch.address}
                  </span>
                </p>
                <p className="branch-row">
                  <Icon name="phone" size={19} />
                  <span>
                    <b>Phone</b>
                    <br />
                    <a href={branch.phoneHref}>{branch.phoneDisplay}</a>
                  </span>
                </p>
                <div className="branch-row">
                  <Icon name="clock" size={19} />
                  <span>
                    <b>Opening hours</b>
                    <ul className="branch-hours">
                      {branch.hours.map((h) => (
                        <li key={h.days}>
                          <b>{h.days}</b>
                          <span>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </span>
                </div>
              </div>
              <div className="branch-actions">
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-coral btn-sm"
                >
                  <Icon name="pin" size={16} />
                  Get Directions
                </a>
                <a
                  href={waBranchLink(branch.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal btn-sm"
                >
                  <Icon name="whatsapp" size={16} />
                  WhatsApp This Branch
                </a>
              </div>
            </div>
            <aside className="branch-side">
              <h4>
                <Icon name="checkCircle" size={22} />
                Good to know
              </h4>
              <p>{branch.pharmacyNote}.</p>
              <p>
                Walk-ins are welcome all day, but booking ahead means zero
                waiting. Your consultation room is ready when you arrive.
              </p>
              <a href="#contact" className="btn btn-ghost btn-sm">
                <Icon name="calendar" size={16} />
                Book at this branch
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
