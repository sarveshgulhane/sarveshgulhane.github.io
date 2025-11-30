import React from "react";
import { PROJECTS } from "../data";

const Projects: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">{PROJECTS.title}</h2>
      <div className="cards-grid">
        {PROJECTS.items.map((project) => (
          <article key={project.name} className="card">
            <h3 className="card-title">{project.name}</h3>
            <p className="card-body">{project.description}</p>
            <p className="card-tech">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </p>
            {/* <div className="card-actions">
              <a
                href={project.liveUrl}
                className="btn small"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="btn small outline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
