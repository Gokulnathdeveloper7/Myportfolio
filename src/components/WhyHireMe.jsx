import React from 'react';
import { FaBrain, FaLaptopCode, FaRocket, FaPuzzlePiece, FaBriefcase, FaChartLine } from 'react-icons/fa';
import BlurText from './reactbits/BlurText';
import SpotlightCard from './reactbits/SpotlightCard';

export default function WhyHireMe() {
  const values = [
    { icon: <FaBrain />, title: 'Analytical Mindset', desc: 'Naturally curious and detail-oriented. Able to dig deep into raw numbers to uncover key performance indicators.' },
    { icon: <FaLaptopCode />, title: 'Hands-on Experience', desc: 'Proven capability through fully functional projects modeling IPL datasets, Netflix trends, and retail sales.' },
    { icon: <FaRocket />, title: 'Quick Learner', desc: 'Able to pick up new database systems, query syntaxes, or data libraries quickly to support team needs.' },
    { icon: <FaPuzzlePiece />, title: 'Problem Solving', desc: 'Translates messy, unstructured data obstacles into structured relational queries and clean dashboards.' },
    { icon: <FaBriefcase />, title: 'Business Thinking', desc: 'Aligns data analysis with corporate goals, focusing on ROI, margin improvements, and stakeholder clarity.' },
    { icon: <FaChartLine />, title: 'Data-Driven Decisions', desc: 'Strong belief in reducing guesswork by providing hard facts, clean visualizations, and actionable suggestions.' },
  ];

  return (
    <section id="why-hire-me" className="w-full py-24" style={{background: 'linear-gradient(135deg, #EFF6FF 0%, #EDE9FE 50%, #FCE7F3 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <BlurText text="Why Hire Me?" className="text-4xl md:text-5xl font-black text-slate-900 justify-center mb-4" delay={80} />
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Unique strengths and immediate contribution potential</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <SpotlightCard key={idx} className="group" spotlightColor="rgba(99, 102, 241, 0.12)">
              <div className="p-7 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{val.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
