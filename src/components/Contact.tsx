// import React, { type FormEvent } from "react";
import { CONTACT } from "../data";

const Contact: React.FC = () => {
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Replace this with your actual backend or email service later
  //   alert("Form submission is not wired yet. Replace with your backend.");
  // };

  return (
    <section className="section">
      <h2 className="section-title">{CONTACT.title}</h2>
      <p className="contact-text">{CONTACT.text}</p>

      <a
        href={`mailto:${CONTACT.email}`}
        className="btn primary contact-email"
      >
        Email Me
      </a>

      <div className="socials">
        {CONTACT.socials.map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>

      {/* <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Name
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label>
          Message
          <textarea
            placeholder="Tell me about your project..."
            rows={4}
            required
          />
        </label>
        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form> */}
    </section>
  );
};

export default Contact;
