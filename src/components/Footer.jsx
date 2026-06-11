import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Gokul Nath J</span>
          <span className="footer-tag">Transforming Data into Actionable Business Insights</span>
        </div>

        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#certifications" className="footer-link">Certifications</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Gokul Nath J. All Rights Reserved. Designed with <FaHeart className="heart-icon" /> for recruiters.
          </p>
          <div className="footer-socials">
            <a href="https://linkedin.com/in/gokulnathj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/gokulnathj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
