import React from 'react';
import { FaGraduationCap, FaBrain, FaChartPie, FaBullseye } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';
import TiltedCard from './reactbits/TiltedCard';

export default function About() {
  const highlights = [
    { icon: <FaGraduationCap />, title: 'Academic Foundation', desc: 'Strong training in descriptive statistics, hypothesis testing, and quantitative research methods.', color: 'blue' },
    { icon: <FaChartPie />, title: 'BI Passion', desc: 'Dedicated to crafting automated dashboards that empower business stakeholders to make quick decisions.', color: 'indigo' },
    { icon: <FaBrain />, title: 'Problem Solving', desc: 'Approaching analytical roadblocks with a structured framework to find core insights.', color: 'violet' },
    { icon: <FaBullseye />, title: 'Career Focus', desc: 'Eager to begin my career as a Data Analyst in a growth-oriented organization, contributing business value from day one.', color: 'rose' },
  ];

  return (
    <section id="about" className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <BlurText text="About Me" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">A blend of academic foundations and a passion for data-driven decisions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-5 text-base text-slate-500 leading-relaxed bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">My Journey Into Data</h3>
          <p>
            I recently graduated with a degree focused on problem-solving, structured thinking, and analytical tools. During my academic journey, I realized that data is the lifeblood of modern organizations, but it is raw and meaningless without proper analysis.
          </p>
          <p>
            For me, data analytics is not just about writing queries or generating charts. It is about understanding the business context, identifying hidden trends, and translating complex datasets into clear, actionable stories.
          </p>
          <p>
            I thrive on challenges. Whether it is cleaning messy datasets, designing optimized database schemas, or building high-impact dashboards, I approach every task with a problem-solving mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <TiltedCard key={i} rotateAmplitude={8}>
              <div className="flex flex-col gap-3 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm h-full">
                <div className={`w-11 h-11 rounded-xl bg-${h.color}-50 text-${h.color}-500 flex items-center justify-center text-xl`}>
                  {h.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-800">{h.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{h.desc}</p>
              </div>
            </TiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
