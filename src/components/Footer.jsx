import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-100 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-2xl font-black text-slate-800 mb-1">Gokul Nath J</span>
            <span className="text-sm font-semibold text-slate-400 max-w-sm">Transforming Data into Actionable Business Insights</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#certifications" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">Certifications</a>
            <a href="#contact" className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200/60 my-2"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5 text-center">
            © {currentYear} Gokul Nath J. All Rights Reserved. Designed with <FaHeart className="text-red-500 animate-pulse" /> for recruiters.
          </p>
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/gokulnathj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-400 transition-colors hover:-translate-y-0.5 shadow-sm">
              <FaLinkedin className="text-base" />
            </a>
            <a href="https://github.com/Gokulnathdeveloper7" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors hover:-translate-y-0.5 shadow-sm">
              <FaGithub className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
