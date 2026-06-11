import React from 'react';
import { FaDatabase, FaCode, FaChartLine, FaChartBar, FaCalculator } from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Data Analysis',
      icon: <FaChartLine />,
      skills: [
        { name: 'Advanced Excel', level: 90 },
        { name: 'Power Query', level: 85 },
        { name: 'Data Cleaning & Transformation', level: 90 },
      ],
    },
    {
      title: 'Database Management',
      icon: <FaDatabase />,
      skills: [
        { name: 'SQL (Structured Query Language)', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Database Design & Joins', level: 85 },
      ],
    },
    {
      title: 'Programming',
      icon: <FaCode />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Pandas', level: 85 },
        { name: 'NumPy', level: 80 },
      ],
    },
    {
      title: 'Data Visualization',
      icon: <FaChartBar />,
      skills: [
        { name: 'Power BI', level: 90 },
        { name: 'Dashboard & Report Design', level: 85 },
        { name: 'DAX Formulas', level: 80 },
      ],
    },
    {
      title: 'Statistics & Interpretation',
      icon: <FaCalculator />,
      skills: [
        { name: 'Descriptive Statistics', level: 85 },
        { name: 'Hypothesis Testing', level: 75 },
        { name: 'Data Interpretation', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-alt reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Proficiencies in toolkits that turn raw information into business growth indicators</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-card reveal reveal-delay-100">
              <div className="skills-category-header">
                <div className="skills-category-icon">{category.icon}</div>
                <h3 className="skills-category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
