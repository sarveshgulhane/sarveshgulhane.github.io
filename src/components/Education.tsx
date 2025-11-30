import React from "react";
import { EDUCATION } from "../data";

const Education: React.FC = () => {
    return (
        <section className="section" id="education">
            <h2 className="section-title">Education</h2>

            <ul className="experience-list">
                {EDUCATION.educations.map((edu) => (
                    <li
                        key={edu.degree + edu.institution}
                        className="experience-item"
                    >
                        <h4>
                            {edu.degree} ·{" "}
                            <span className="muted">{edu.institution}</span>
                        </h4>
                        <p className="muted">{edu.period}</p>
                        <p>{edu.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Education;
