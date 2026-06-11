import React from 'react';
import { FaBrain, FaLaptopCode, FaRocket, FaPuzzlePiece, FaBriefcase, FaChartLine } from 'react-icons/fa';

export default function WhyHireMe() {
  const values = [
    {
      icon: <FaBrain />,
      title: 'Analytical Mindset',
      desc: 'Naturally curious and detail-oriented. Able to dig deep into raw numbers to uncover key performance indicators.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Hands-on Project Experience',
      desc: 'Proven capability through fully functional projects modeling IPL datasets, Netflix trends, and retail sales.'
    },
    {
      icon: <FaRocket />,
      title: 'Quick Learner',
      desc: 'Able to pick up new database systems, query syntaxes, or data libraries quickly to support team needs.'
    },
    {
      icon: <FaPuzzlePiece />,
      title: 'Problem-Solving Skills',
      desc: 'Translates messy, unstructured data obstacles into structured relational queries and clean dashboards.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Business-Oriented Thinking',
      desc: 'Aligns data analysis with corporate goals, focusing on ROI, margin improvements, and stakeholder clarity.'
    },
    {
      icon: <FaChartLine />,
      title: 'Data-Driven Decision Making',
      desc: 'Strong belief in reducing guesswork by providing hard facts, clean visualizations, and actionable suggestions.'
    }
  ];

  return (
    <section id="why-hire-me" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Hire Me?</h2>
          <p className="section-subtitle">A recruiter value proposition detailing my unique strengths and immediate contribution potential</p>
        </div>

        <div className="grid grid-3">
          {values.map((val, idx) => (
            <div key={idx} className="value-card reveal reveal-delay-100">
              <div className="value-icon">{val.icon}</div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-desc">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
