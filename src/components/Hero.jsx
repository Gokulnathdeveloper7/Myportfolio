import React from 'react';
import { FaFileDownload, FaFolderOpen, FaEnvelope, FaLinkedin, FaAward, FaCode, FaChartBar } from 'react-icons/fa';
import headshot from '../assets/Gokulnath J.jpeg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section reveal">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Ready for Opportunities
          </div>
          <h1 className="hero-name">Gokul Nath J</h1>
          <h2 className="hero-title">Aspiring Data Analyst</h2>
          <p className="hero-tagline">"Transforming Data into Actionable Business Insights"</p>
          <p className="hero-summary">
            Recent graduate with strong skills in SQL, Power BI, Python, Excel, and Data Visualization. Passionate about uncovering trends, solving business problems, and helping organizations make data-driven decisions.
          </p>

          <div className="hero-ctas">
            <a href="/resume.pdf" download="Gokul_Nath_J_Resume.pdf" className="btn btn-primary">
              <FaFileDownload /> Download Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              <FaFolderOpen /> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FaEnvelope /> Contact Me
            </a>
            <a href="https://linkedin.com/in/gokulnathj" target="_blank" rel="noopener noreferrer" className="btn btn-secondary linkedin-btn" aria-label="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-wrapper">
            <img src={headshot} alt="Gokul Nath J" className="hero-img" />
            <div className="image-border-glow"></div>
          </div>
        </div>
      </div>

      <div className="hero-stats container">
        <div className="stat-card reveal reveal-delay-100">
          <div className="stat-icon-wrapper">
            <FaChartBar />
          </div>
          <div className="stat-details">
            <span className="stat-number">10+</span>
            <span className="stat-label">Analytics Projects Completed</span>
          </div>
        </div>

        <div className="stat-card reveal reveal-delay-200">
          <div className="stat-icon-wrapper">
            <FaAward />
          </div>
          <div className="stat-details">
            <span className="stat-number">5+</span>
            <span className="stat-label">Certifications Earned</span>
          </div>
        </div>

        <div className="stat-card reveal reveal-delay-300">
          <div className="stat-icon-wrapper">
            <FaCode />
          </div>
          <div className="stat-details">
            <span className="stat-number">8+</span>
            <span className="stat-label">Technologies Mastered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
