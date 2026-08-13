import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#skills' },
    { name: 'CLI TERMINAL', href: '#terminal' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, href, customOnClick) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (customOnClick) {
      customOnClick(e);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0e0e11]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand matching image design */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-sunset-500 flex items-center justify-center text-white font-bold font-display text-lg shadow-lg group-hover:scale-105 transition-transform">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
                {personalData.name.split(' ')[0]}
                <span className="text-sunset-400 font-sans text-sm font-normal uppercase tracking-widest hidden sm:inline ml-1">
                  {personalData.name.split(' ')[1]}
                </span>
              </span>
              <span className="text-[10px] text-gray-400 font-mono -mt-1 tracking-wider uppercase">
                JAVA DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.onClick)}
                className="text-xs font-semibold tracking-widest text-gray-300 hover:text-sunset-400 transition-colors uppercase py-1 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sunset-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Header Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenContact) onOpenContact(e);
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-sunset-400 hover:text-white transition-all shadow-md cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white md:hidden hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121319]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.href, link.onClick);
                }}
                className="text-sm font-semibold tracking-widest text-gray-200 hover:text-sunset-400 uppercase py-2 border-b border-white/5 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            className="w-full mt-4 py-3 rounded-full bg-sunset-500 text-white font-bold text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            Let's Talk Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
