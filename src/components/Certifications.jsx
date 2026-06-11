import React from 'react';
import { FaAward, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

export default function Certifications() {
  const certifications = [
    {
      title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      org: 'Microsoft',
      date: 'April 2026',
      link: 'https://learn.microsoft.com/credentials/certifications/power-bi-data-analyst-associate/',
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      org: 'Google / Coursera',
      date: 'February 2026',
      link: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    },
    {
      title: 'SQL (Advanced) Skills Certification',
      org: 'HackerRank',
      date: 'December 2025',
      link: 'https://www.hackerrank.com/skills-verification/sql_advanced',
    },
    {
      title: 'Python for Data Science & Machine Learning',
      org: 'Udemy / Professional Training',
      date: 'October 2025',
      link: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
    },
  ];

  return (
    <section id="certifications" className="section bg-alt reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Verified professional credentials validating technical competence and skill compliance</p>
        </div>

        <div className="grid grid-2">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card reveal reveal-delay-100">
              <div className="cert-badge-icon">
                <FaAward />
              </div>
              <div className="cert-details">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta-item">
                  <FaBuilding className="meta-icon" />
                  <span>{cert.org}</span>
                </div>
                <div className="cert-meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <span>{cert.date}</span>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-verify-btn">
                  Verify Credential <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
