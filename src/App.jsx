import React, { useState, useEffect } from 'react';
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
    <>
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
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Resume />
        <WhyHireMe />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;