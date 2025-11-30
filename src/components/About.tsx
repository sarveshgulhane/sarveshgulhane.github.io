import React from "react";
import { ABOUT } from "../data";

const About: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">{ABOUT.title}</h2>
      <div className="about-layout">
        <p className="about-body">{ABOUT.body}</p>
        <ul className="about-details">
          {ABOUT.details.map((item) => (
            <li key={item.label}>
              <span className="about-label">{item.label}:</span>{" "}
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
