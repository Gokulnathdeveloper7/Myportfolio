import React from 'react';
import { FaFileDownload, FaBrain, FaCogs, FaChartLine, FaLightbulb } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';
import AnimatedList from './reactbits/AnimatedList';

export default function Resume() {
  const strengths = [
    { icon: <FaBrain />, title: 'Analytical & Problem-Solving Mindset', desc: 'Approaches complex business questions by breaking them down into small, measurable hypothesis tests.' },
    { icon: <FaCogs />, title: 'Data Wrangling & Integrity', desc: 'Skilled in cleaning noisy, null-ridden datasets to guarantee that dashboards show highly reliable results.' },
    { icon: <FaChartLine />, title: 'Business-Oriented Visualizations', desc: 'Crafts Power BI dashboards focused on answering executive business questions rather than just static tables.' },
    { icon: <FaLightbulb />, title: 'Quick Learning Adaptability', desc: 'Rapidly learns and integrates new technical libraries, frameworks, or database systems to solve project bottlenecks.' },
  ];

  return (
    <section id="resume" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <BlurText text="Resume & Key Strengths" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
        <p className="text-lg text-slate-400">Summary of qualifications and download access</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Strengths */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Core Competencies</h3>
          <AnimatedList className="flex flex-col gap-4" delay={120}>
            {strengths.map((str, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl">
                  {str.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-1">{str.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{str.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedList>
        </div>

        {/* Resume Preview */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-xl"></div>

          <div className="relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg flex flex-col h-[480px]">
            {/* Browser chrome */}
            <div className="h-9 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-300"></div>
              <div className="ml-3 text-[11px] text-slate-400 font-mono">resume.pdf</div>
            </div>

            <div className="p-8 flex-grow relative">
              <div className="mb-5 pb-4 border-b-2 border-slate-100">
                <div className="text-2xl font-black text-slate-800 tracking-wider">GOKUL NATH J</div>
                <div className="text-sm font-semibold text-blue-500 tracking-widest uppercase mt-1">Aspiring Data Analyst</div>
              </div>

              <div className="flex flex-col gap-5 text-sm">
                <div>
                  <div className="text-[10px] font-bold text-slate-300 tracking-widest mb-1.5">EDUCATION</div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-700">B.Tech AI & ML — VISTAS</span>
                    <span className="font-bold text-blue-500">2026</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-300 tracking-widest mb-1.5">CORE PROJECTS</div>
                  <div className="font-bold text-slate-700">Netflix Content Dashboard</div>
                  <div className="font-bold text-slate-700 mt-0.5">IPL Relational SQL Queries</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-300 tracking-widest mb-1.5">TOOLS</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['SQL', 'Power BI', 'Python', 'Excel'].map(t => (
                      <span key={t} className="bg-slate-50 text-slate-500 text-xs font-bold px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download overlay */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="/resume.pdf" download="Gokul_Nath_J_Resume.pdf" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-200 transition-transform hover:scale-105">
                  <FaFileDownload className="text-lg" /> Download PDF Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
