import React from 'react';
import { FaFileDownload, FaBrain, FaCogs, FaChartLine, FaLightbulb } from 'react-icons/fa';

export default function Resume() {
  const strengths = [
    {
      icon: <FaBrain />,
      title: 'Analytical & Problem-Solving Mindset',
      desc: 'Approaches complex business questions by breaking them down into small, measurable hypothesis tests.'
    },
    {
      icon: <FaCogs />,
      title: 'Data Wrangling & Integrity',
      desc: 'Skilled in cleaning noisy, null-ridden datasets to guarantee that dashboards show highly reliable results.'
    },
    {
      icon: <FaChartLine />,
      title: 'Business-Oriented Visualizations',
      desc: 'Crafts Power BI dashboards focused on answering executive business questions rather than just static tables.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Quick Learning Adaptability',
      desc: 'Rapidly learns and integrates new technical libraries, frameworks, or database systems to solve project bottlenecks.'
    }
  ];

  return (
    <section id="resume" className="section bg-alt reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume & Key Strengths</h2>
          <p className="section-subtitle">Summary of qualifications and download access to the complete professional profile</p>
        </div>

        <div className="resume-grid">
          <div className="resume-strengths">
            <h3 className="resume-part-title">Core Competencies</h3>
            <div className="strengths-list">
              {strengths.map((str, idx) => (
                <div key={idx} className="strength-item">
                  <div className="strength-icon">{str.icon}</div>
                  <div className="strength-info">
                    <h4>{str.title}</h4>
                    <p>{str.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-preview-section">
            <div className="resume-card-preview">
              <div className="mock-resume-sheet">
                <div className="sheet-header">
                  <span className="sheet-name">GOKUL NATH J</span>
                  <span className="sheet-role">Aspiring Data Analyst</span>
                </div>
                <div className="sheet-divider"></div>
                <div className="sheet-body">
                  <div className="sheet-section-title">EDUCATION</div>
                  <div className="sheet-item">
                    <span className="bold">B.Sc. Computer Science / BCA</span>
                    <span className="right">2026</span>
                  </div>
                  <div className="sheet-section-title" style={{ marginTop: '10px' }}>CORE PROJECTS</div>
                  <div className="sheet-item">
                    <span className="bold">Netflix Content Dashboard</span>
                  </div>
                  <div className="sheet-item">
                    <span className="bold">IPL Relational SQL Queries</span>
                  </div>
                  <div className="sheet-section-title" style={{ marginTop: '10px' }}>TECHNICAL TOOLS</div>
                  <div className="sheet-tags">
                    <span>SQL</span> <span>Power BI</span> <span>Python</span> <span>Excel</span>
                  </div>
                </div>
              </div>
              
              <div className="resume-download-overlay">
                <a href="/resume.pdf" download="Gokul_Nath_J_Resume.pdf" className="btn btn-primary btn-large">
                  <FaFileDownload /> Download PDF Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
