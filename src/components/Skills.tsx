import React from "react";
import { SKILLS } from "../data";

const Skills: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">{SKILLS.title}</h2>
      <div className="skills-grid">
        {SKILLS.categories.map((cat) => (
          <div key={cat.label} className="skill-card">
            <h3>{cat.label}</h3>
            <div className="skill-tags">
              {cat.items.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
