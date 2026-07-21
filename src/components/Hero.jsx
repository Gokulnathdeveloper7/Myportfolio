import React from 'react';
import { FaFileDownload, FaFolderOpen, FaLinkedin, FaAward, FaCode, FaChartBar } from 'react-icons/fa';
import headshot from '../assets/Gokulnath J.jpeg';
import BlurText from './reactbits/BlurText';
import GradientText from './reactbits/GradientText';
import CountUp from './reactbits/CountUp';
import ShinyText from './reactbits/ShinyText';

export default function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col justify-center items-center pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full mb-20">
        <div className="flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <ShinyText className="text-blue-600">Ready for Opportunities</ShinyText>
          </div>

          <BlurText
            text="Gokul Nath J"
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-3"
            delay={100}
            animateBy="words"
          />

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <GradientText
              colors={['#3B82F6', '#8B5CF6', '#EC4899', '#3B82F6']}
              animationSpeed={6}
              className="text-2xl md:text-3xl font-bold"
            >
              Aspiring Data Analyst
            </GradientText>
          </h2>

          <p className="text-lg font-semibold text-slate-500 mb-4 italic">
            "Transforming Data into Actionable Business Insights"
          </p>

          <p className="text-base text-slate-500 mb-10 max-w-xl leading-relaxed">
            Recent graduate with strong skills in SQL, Power BI, Python, Excel, and Data Visualization. Passionate about uncovering trends, solving business problems, and helping organizations make data-driven decisions.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="/resume.pdf" download="Gokul_Nath_J_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5">
              <FaFileDownload /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 font-bold rounded-full transition-all hover:-translate-y-0.5">
              <FaFolderOpen /> View Projects
            </a>
            <a href="https://linkedin.com/in/gokulnathj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 hover:bg-blue-50 text-slate-600 font-bold rounded-full transition-all hover:-translate-y-0.5">
              <FaLinkedin className="text-blue-600" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center z-10">
          <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"></div>
            <div className="relative w-full h-full p-2 bg-white rounded-[2rem] shadow-xl border border-slate-100">
              <img src={headshot} alt="Gokul Nath J" className="w-full h-full object-cover rounded-[1.5rem]" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full z-10">
        {[
          { icon: <FaChartBar />, label: 'Analytics Projects', value: 10, color: 'blue' },
          { icon: <FaAward />, label: 'Certifications', value: 5, color: 'indigo' },
          { icon: <FaCode />, label: 'Technologies', value: 8, color: 'violet' },
        ].map((stat, idx) => (
          <div key={idx} className="flex items-center gap-5 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className={`w-12 h-12 rounded-xl bg-${stat.color}-50 text-${stat.color}-500 flex items-center justify-center text-2xl shrink-0`}>
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-slate-800">
                <CountUp to={stat.value} duration={2} />+
              </span>
              <span className="text-sm font-semibold text-slate-400">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
