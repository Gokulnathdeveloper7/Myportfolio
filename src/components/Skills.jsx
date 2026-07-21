import React, { useState } from 'react';
import { 
  FaDatabase, FaCode, FaChartLine, FaChartBar, FaCalculator, FaFileExcel, 
  FaPython, FaTable, FaCheckCircle, FaLayerGroup 
} from 'react-icons/fa';
import { SiMysql, SiPandas, SiNumpy } from 'react-icons/si';
import BlurText from './reactbits/BlurText';
import SpotlightCard from './reactbits/SpotlightCard';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Data Analysis', 'Database Management', 'Programming', 'Data Visualization', 'Statistics'];

  const skillCategories = [
    {
      title: 'Data Analysis',
      icon: <FaChartLine className="text-blue-500" />,
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
      skills: [
        { name: 'Advanced Excel', level: 90, tag: 'Expert', icon: <FaFileExcel className="text-emerald-600" /> },
        { name: 'Power Query', level: 85, tag: 'Advanced', icon: <FaTable className="text-blue-500" /> },
        { name: 'Data Cleaning & Transformation', level: 90, tag: 'Expert', icon: <FaCheckCircle className="text-indigo-500" /> },
      ],
    },
    {
      title: 'Database Management',
      icon: <FaDatabase className="text-indigo-500" />,
      badgeBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      skills: [
        { name: 'SQL', level: 85, tag: 'Advanced', icon: <FaDatabase className="text-indigo-500" /> },
        { name: 'MySQL', level: 80, tag: 'Proficient', icon: <SiMysql className="text-blue-600 text-xl" /> },
        { name: 'Database Design & Joins', level: 85, tag: 'Advanced', icon: <FaLayerGroup className="text-cyan-600" /> },
      ],
    },
    {
      title: 'Programming',
      icon: <FaCode className="text-violet-500" />,
      badgeBg: 'bg-violet-50 text-violet-600 border-violet-100',
      skills: [
        { name: 'Python', level: 90, tag: 'Expert', icon: <FaPython className="text-yellow-500 text-xl" /> },
        { name: 'Pandas', level: 85, tag: 'Advanced', icon: <SiPandas className="text-indigo-600 text-lg" /> },
        { name: 'NumPy', level: 80, tag: 'Proficient', icon: <SiNumpy className="text-blue-400 text-lg" /> },
      ],
    },
    {
      title: 'Data Visualization',
      icon: <FaChartBar className="text-rose-500" />,
      badgeBg: 'bg-rose-50 text-rose-600 border-rose-100',
      skills: [
        { name: 'Power BI', level: 90, tag: 'Expert', icon: <FaChartBar className="text-amber-500 text-xl" /> },
        { name: 'Dashboard Design', level: 85, tag: 'Advanced', icon: <FaChartBar className="text-rose-500" /> },
        { name: 'DAX Formulas', level: 80, tag: 'Proficient', icon: <FaCode className="text-amber-600" /> },
      ],
    },
    {
      title: 'Statistics',
      icon: <FaCalculator className="text-amber-500" />,
      badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
      skills: [
        { name: 'Descriptive Statistics', level: 85, tag: 'Advanced', icon: <FaCalculator className="text-amber-500" /> },
        { name: 'Hypothesis Testing', level: 75, tag: 'Intermediate', icon: <FaCheckCircle className="text-teal-500" /> },
        { name: 'Data Interpretation', level: 85, tag: 'Advanced', icon: <FaChartLine className="text-blue-500" /> },
      ],
    },
  ];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.title === activeCategory);

  const stackTechs = [
    { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    { name: 'SQL', icon: <FaDatabase className="text-indigo-500" /> },
    { name: 'Power BI', icon: <FaChartBar className="text-amber-500" /> },
    { name: 'Excel', icon: <FaFileExcel className="text-emerald-600" /> },
    { name: 'Pandas', icon: <SiPandas className="text-indigo-600" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
    { name: 'Power Query', icon: <FaTable className="text-blue-500" /> },
  ];

  return (
    <section id="skills" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <BlurText text="Technical Skills" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Core proficiencies and tools that power data transformation, relational modeling, and business intelligence.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-blue-500 text-white shadow-md shadow-blue-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredCategories.map((cat, idx) => (
          <SpotlightCard key={idx} className="group" spotlightColor="rgba(59, 130, 246, 0.1)">
            <div className="p-7 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-xs">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{cat.title}</h3>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${cat.badgeBg}`}>
                  {cat.skills.length} Skills
                </span>
              </div>

              <div className="flex flex-col gap-5 flex-grow">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 font-semibold text-slate-700">
                        <span className="text-base">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-500">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Stack Badges Banner */}
      <div className="bg-gradient-to-r from-blue-50/70 via-indigo-50/70 to-slate-50 border border-slate-200/80 rounded-3xl p-8 text-center shadow-xs">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6">
          Featured Analytics Toolstack
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {stackTechs.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-700 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all hover:-translate-y-0.5"
            >
              <span className="text-base">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
