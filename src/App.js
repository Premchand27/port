import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Particle Background for dynamic effect */}
      <ParticleBackground />
      
      {/* Navbar */}
      <Navbar />

      {/* Page Sections with scroll animations */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
