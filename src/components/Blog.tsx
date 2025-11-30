import React from "react";
import { BLOG } from "../data";

const Blog: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">{BLOG.title}</h2>

      <div className="cards-grid">
        {BLOG.posts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            className="card card-clickable"
          >
            <h3 className="card-title">{post.title}</h3>
            <p className="muted card-date">{post.date}</p>
            <p className="card-body">{post.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
