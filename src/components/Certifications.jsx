import React from 'react';
import { FaAward, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';
import TiltedCard from './reactbits/TiltedCard';

export default function Certifications() {
  const certifications = [
    { title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)', org: 'Microsoft', date: 'April 2026', link: 'https://learn.microsoft.com/credentials/certifications/power-bi-data-analyst-associate/' },
    { title: 'Google Data Analytics Professional Certificate', org: 'Google / Coursera', date: 'February 2026', link: 'https://www.coursera.org/professional-certificates/google-data-analytics' },
    { title: 'SQL (Advanced) Skills Certification', org: 'HackerRank', date: 'December 2025', link: 'https://www.hackerrank.com/skills-verification/sql_advanced' },
    { title: 'Python for Data Science & Machine Learning', org: 'Udemy / Professional Training', date: 'October 2025', link: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/' },
  ];

  return (
    <section id="certifications" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <BlurText text="Certifications" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
        <p className="text-lg text-slate-400">Verified professional credentials validating technical competence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <TiltedCard key={idx} rotateAmplitude={6}>
            <div className="flex gap-5 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl">
                <FaAward />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">{cert.title}</h3>
                <div className="flex flex-col gap-1.5 mb-3">
                  <span className="flex items-center gap-2 text-sm text-slate-400 font-semibold">
                    <FaBuilding className="text-blue-400" /> {cert.org}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-slate-400 font-semibold">
                    <FaCalendarAlt className="text-blue-400" /> {cert.date}
                  </span>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors mt-auto">
                  Verify <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          </TiltedCard>
        ))}
      </div>
    </section>
  );
}
