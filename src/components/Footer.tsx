import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Sarvesh Gulhane. All rights reserved.</p>
      <p className="muted">Built with React, Bun and AI.</p>
    </footer>
  );
};

export default Footer;
