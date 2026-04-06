import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <ContactSection />
    </>
  );
};

export default Home;
