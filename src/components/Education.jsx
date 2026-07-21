import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaBook, FaAward } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';
import AnimatedList from './reactbits/AnimatedList';

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor's Degree (Artificial Intelligence and Machine Learning)",
      institution: "Vels Institute of Science, Technology & Advanced Studies (VISTAS)",
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
    <section id="education" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <BlurText text="Education" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
        <p className="text-lg text-slate-400">Academic foundations supporting technical analytics skills</p>
      </div>

      <div className="relative ml-4 md:ml-8">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-300 rounded-full"></div>

        {educationList.map((edu, idx) => (
          <div key={idx} className="relative pl-10 md:pl-14 mb-12 last:mb-0">
            <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md"></div>

            <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{edu.degree}</h3>
                  <h4 className="text-base font-semibold text-blue-500">{edu.institution}</h4>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full whitespace-nowrap">
                  <FaCalendarAlt /> {edu.year}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-slate-700 font-bold text-sm mb-3">
                  <FaBook className="text-blue-400" /> Relevant Coursework
                </div>
                <AnimatedList className="flex flex-wrap gap-2" delay={80}>
                  {edu.coursework.map((c, cIdx) => (
                    <span key={cIdx} className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-lg">
                      {c}
                    </span>
                  ))}
                </AnimatedList>
              </div>

              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-blue-500 font-bold text-sm mb-1.5">
                  <FaAward /> Highlights
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{edu.highlights}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
