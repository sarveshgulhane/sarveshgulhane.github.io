import React from "react";
import { EXPERIENCE } from "../data";

const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>

      <ul className="experience-list">
        {EXPERIENCE.jobs.map((job) => (
          <li
            key={job.role + job.company}
            className="experience-item"
          >
            <h4>
              {job.role} · <span className="muted">{job.company}</span>
            </h4>
            <p className="muted">{job.period}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
