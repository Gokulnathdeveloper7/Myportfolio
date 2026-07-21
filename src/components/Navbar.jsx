import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaDatabase } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2.5 text-lg font-extrabold text-slate-800 hover:text-blue-600 transition-colors">
          <FaDatabase className="text-blue-500" />
          <span>Gokul Nath J</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full transition-colors shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-2xl text-slate-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 top-[60px] bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl font-bold text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
