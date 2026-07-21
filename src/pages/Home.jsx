import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Resume from '../components/Resume';
import WhyHireMe from '../components/WhyHireMe';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Resume />
      <WhyHireMe />
      <Contact />
    </>
  );
}
