import React from 'react';
import { FaGraduationCap, FaBrain, FaChartPie, FaBullseye } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A blend of academic foundations and a passion for data-driven decisions</p>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <h3 className="about-story-title">My Journey Into Data</h3>
            <p>
              I recently graduated with a degree focused on problem-solving, structured thinking, and analytical tools. During my academic journey, I realized that data is the lifeblood of modern organizations, but it is raw and meaningless without proper analysis. This realization sparked my passion for data analytics and business intelligence.
            </p>
            <p>
              For me, data analytics is not just about writing queries or generating charts. It is about understanding the business context, identifying hidden trends, and translating complex datasets into clear, actionable stories that help businesses grow.
            </p>
            <p>
              I thrive on challenges. Whether it is cleaning messy datasets, designing optimized database schemas, or building high-impact dashboards, I approach every task with a problem-solving mindset and a sharp attention to detail.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <div className="highlight-text">
                <h4>Academic Foundation</h4>
                <p>Strong training in descriptive statistics, hypothesis testing, and quantitative research methods.</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaChartPie />
              </div>
              <div className="highlight-text">
                <h4>BI Passion</h4>
                <p>Dedicated to crafting automated dashboards that empower business stakeholders to make quick decisions.</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaBrain />
              </div>
              <div className="highlight-text">
                <h4>Problem Solving</h4>
                <p>Approaching analytical roadblocks with a structured framework to find core insights.</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaBullseye />
              </div>
              <div className="highlight-text">
                <h4>Career Focus</h4>
                <p>Eager to begin my career as a Data Analyst in a growth-oriented organization, contributing business value from day one.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
