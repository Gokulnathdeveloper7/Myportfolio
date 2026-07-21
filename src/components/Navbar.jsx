import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaDatabase } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Education', path: '/education' },
    { label: 'Resume', path: '/resume' },
    { label: 'Why Hire Me', path: '/why-hire-me' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm border-b border-slate-100 dark:border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2.5 text-lg font-extrabold text-slate-800 dark:text-slate-100 hover:text-blue-500 transition-colors">
          <FaDatabase className="text-blue-500" />
          <span>Gokul Nath J</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-blue-500 font-bold' : 'text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <ThemeToggle />

          <Link
            to="/contact"
            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full transition-colors shadow-sm"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-2xl text-slate-700 dark:text-slate-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 top-[60px] bg-white dark:bg-slate-900 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-7 p-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-xl font-bold transition-colors ${
                  isActive ? 'text-blue-500' : 'text-slate-700 dark:text-slate-200 hover:text-blue-500'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
