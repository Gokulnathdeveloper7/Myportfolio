import React from 'react';
import { FaDatabase, FaCode, FaChartLine, FaChartBar, FaCalculator } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';
import SpotlightCard from './reactbits/SpotlightCard';

export default function Skills() {
  const skillCategories = [
    { title: 'Data Analysis', icon: <FaChartLine />, color: 'blue',
      skills: [ { name: 'Advanced Excel', level: 90 }, { name: 'Power Query', level: 85 }, { name: 'Data Cleaning & Transformation', level: 90 } ] },
    { title: 'Database Management', icon: <FaDatabase />, color: 'indigo',
      skills: [ { name: 'SQL', level: 85 }, { name: 'MySQL', level: 80 }, { name: 'Database Design & Joins', level: 85 } ] },
    { title: 'Programming', icon: <FaCode />, color: 'violet',
      skills: [ { name: 'Python', level: 90 }, { name: 'Pandas', level: 85 }, { name: 'NumPy', level: 80 } ] },
    { title: 'Data Visualization', icon: <FaChartBar />, color: 'rose',
      skills: [ { name: 'Power BI', level: 90 }, { name: 'Dashboard Design', level: 85 }, { name: 'DAX Formulas', level: 80 } ] },
    { title: 'Statistics', icon: <FaCalculator />, color: 'amber',
      skills: [ { name: 'Descriptive Statistics', level: 85 }, { name: 'Hypothesis Testing', level: 75 }, { name: 'Data Interpretation', level: 85 } ] },
  ];

  return (
    <section id="skills" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto bg-slate-50/50 -mx-4 md:-mx-8" style={{marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw'}}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <BlurText text="Technical Skills" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
          <p className="text-lg text-slate-400">Proficiencies that turn raw information into business growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <SpotlightCard key={idx} className="group" spotlightColor={`rgba(59, 130, 246, 0.1)`}>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className={`w-10 h-10 rounded-xl bg-${cat.color}-50 text-${cat.color}-500 flex items-center justify-center text-xl`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{cat.title}</h3>
                </div>
                <div className="flex flex-col gap-5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-sm font-semibold">
                        <span className="text-slate-600">{skill.name}</span>
                        <span className="text-blue-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full transition-all duration-700" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
