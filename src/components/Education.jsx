import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaBook, FaAward } from 'react-icons/fa';

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor's Degree (Artificial intelligence and Machine Learning)",
      institution: "Vels Institute of Science, Technology & Advanced Studies (VISTAS) ",
      year: "Graduated: 2026",
      coursework: ["Database Management Systems", "Probability & Statistics", "Python & Structured Querying", "Exploratory Data Analysis", "Business Intelligence Basics"],
      highlights: "Ranked top 10% in database design and modeling modules. Completed multiple SQL practice milestones, resolving complex case studies.",
    },
    {
      degree: "Higher Secondary Education (Bio - Mathematics)",
      institution: "State Board School, Tamil Nadu, India",
      year: "Completed: 2022",
      coursework: ["Advanced Mathematics", "Biology", "Chemistry", "Physics", "Botany", "Zoology"],
      highlights: "Secured outstanding grades in Computer Science and Mathematics. Passionate about logic solving from early academic years.",
    }
  ];

  return (
    <section id="education" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundations supporting technical analytics skills</p>
        </div>

        <div className="timeline">
          {educationList.map((edu, idx) => (
            <div key={idx} className="timeline-item reveal reveal-delay-200">
              <div className="timeline-marker">
                <FaGraduationCap />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-degree">{edu.degree}</h3>
                  <span className="timeline-year">
                    <FaCalendarAlt style={{ marginRight: '6px' }} />
                    {edu.year}
                  </span>
                </div>
                <h4 className="timeline-institution">{edu.institution}</h4>

                <div className="timeline-coursework">
                  <div className="coursework-title">
                    <FaBook className="coursework-icon" />
                    <span>Relevant Coursework:</span>
                  </div>
                  <div className="coursework-tags">
                    {edu.coursework.map((c, cIdx) => (
                      <span key={cIdx} className="coursework-tag">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="timeline-highlights">
                  <div className="highlights-title">
                    <FaAward className="highlights-icon" />
                    <span>Academic Highlights:</span>
                  </div>
                  <p className="highlights-text">{edu.highlights}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
