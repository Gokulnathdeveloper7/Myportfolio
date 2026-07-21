import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import EducationPage from './pages/EducationPage';
import ResumePage from './pages/ResumePage';
import WhyHireMePage from './pages/WhyHireMePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTopOnRoute />
      <Loader isLoading={isLoading} />

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 h-1 z-[1001] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/why-hire-me" element={<WhyHireMePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;