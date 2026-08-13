import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import About from './components/About';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 font-sans selection:bg-sunset-500 selection:text-white">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      
      <main>
        <Hero onOpenContact={() => setContactOpen(true)} />
        <Projects />
        <Skills />
        <Terminal onOpenContact={() => setContactOpen(true)} />
        <About onOpenContact={() => setContactOpen(true)} />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} />
      
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
