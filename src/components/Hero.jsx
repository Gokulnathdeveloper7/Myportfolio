import React from 'react';
import { FaFileDownload, FaFolderOpen, FaEnvelope, FaLinkedin, FaAward, FaCode, FaChartBar } from 'react-icons/fa';
import headshot from '../assets/Gokulnath J.jpeg';
import { GlitchText } from './GlitchText';

export default function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col justify-center items-center py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mb-20">
        <div className="flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 bg-secondary border border-border text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Ready for Opportunities
          </div>
          
          <GlitchText text="Gokul Nath J" className="text-5xl md:text-7xl mb-2 tracking-tight" />
          
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Aspiring Data Analyst
          </h2>
          
          <p className="text-xl font-semibold text-muted-foreground mb-6">
            "Transforming Data into Actionable Business Insights"
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Recent graduate with strong skills in SQL, Power BI, Python, Excel, and Data Visualization. Passionate about uncovering trends, solving business problems, and helping organizations make data-driven decisions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download="Gokul_Nath_J_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1">
              <FaFileDownload /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-border hover:border-blue-500 hover:text-blue-500 font-bold rounded-full transition-all hover:-translate-y-1">
              <FaFolderOpen /> View Projects
            </a>
            <a href="https://linkedin.com/in/gokulnathj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border hover:bg-border text-foreground font-bold rounded-full transition-all hover:-translate-y-1">
              <FaLinkedin className="text-blue-500" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center z-10">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] p-2 bg-secondary rounded-[30px] shadow-2xl border border-border/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-[30px] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img src={headshot} alt="Gokul Nath J" className="relative w-full h-full object-cover rounded-[20px] z-10" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full z-10">
        <div className="flex items-center gap-5 bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-blue-500/50">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-2xl shrink-0">
            <FaChartBar />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">10+</span>
            <span className="text-sm font-semibold text-muted-foreground">Analytics Projects</span>
          </div>
        </div>

        <div className="flex items-center gap-5 bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-blue-500/50">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-2xl shrink-0">
            <FaAward />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">5+</span>
            <span className="text-sm font-semibold text-muted-foreground">Certifications</span>
          </div>
        </div>

        <div className="flex items-center gap-5 bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-blue-500/50">
          <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center text-2xl shrink-0">
            <FaCode />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">8+</span>
            <span className="text-sm font-semibold text-muted-foreground">Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
