import React, { useState, useEffect } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import { AuroraBackground } from './components/AuroraBackground';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Resume from './components/Resume';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const observerOptions = {
  threshold: 0.05, // 5% visibility is enough to trigger reveal, crucial for tall elements on mobile
  rootMargin: '0px 0px -60px 0px'
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle fake data preloading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollProgress(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger intersection observer scroll reveals
  useIntersectionObserver('.reveal', observerOptions);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Loader isLoading={isLoading} />

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container fixed top-0 left-0 h-1 z-[1001] bg-transparent w-full">
        <div className="scroll-progress-bar h-full bg-blue-600 transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <AuroraBackground className="min-h-screen pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Resume />
        <WhyHireMe />
        <Contact />
      </AuroraBackground>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;