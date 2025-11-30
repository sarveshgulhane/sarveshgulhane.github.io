import React from "react";
import { HERO } from "../data";
import ProfilePhoto from "../assets/profile-photo.jpg";

const Hero: React.FC = () => {
    return (
        <section className="section hero-section">
            <div className="hero-content">
                <p className="hero-greeting">Hi, I'm</p>
                <h1 className="hero-name">{HERO.name}</h1>
                <h2 className="hero-role">{HERO.role}</h2>
                <p className="hero-tagline">{HERO.tagline}</p>
                <div className="hero-actions">
                    <a href="#projects" className="btn primary">
                        {HERO.ctaPrimary}
                    </a>
                    <a href="#contact" className="btn outline">
                        {HERO.ctaSecondary}
                    </a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hero-avatar-placeholder">
                    <img src={ProfilePhoto} alt="Profile" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
