import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import About from './components/About';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setContactOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 font-sans selection:bg-sunset-500 selection:text-white">
      <Navbar onOpenContact={handleOpenContact} />
      
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Projects />
        <Skills />
        <Terminal onOpenContact={handleOpenContact} />
        <About onOpenContact={handleOpenContact} />
        <Contact />
      </main>

      <Footer onOpenContact={handleOpenContact} />
      
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
