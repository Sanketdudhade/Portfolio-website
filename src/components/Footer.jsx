import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Clock, MapPin } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer({ onOpenContact }) {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setLocalTime(`${timeStr} IST (UTC+5:30)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090c] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-sunset-500 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg">
                S
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight uppercase">
                {personalData.name}
              </span>
            </div>
            
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-sans">
              Java Developer specializing in Spring Boot, Microservices, REST APIs, and scalable Full Stack Architectures. Savitribai Phule Pune University Graduate (CGPA 8.65).
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-sunset-500 text-gray-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-sunset-500 text-gray-300 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenContact}
                className="p-2.5 rounded-full bg-white/5 hover:bg-sunset-500 text-gray-300 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-sunset-400 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li><a href="#projects" className="hover:text-white transition-colors">Projects Showcase</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Tech Stack & Skills</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Experience & Education</a></li>
              <li><a href="#terminal" className="hover:text-white transition-colors">Developer CLI Terminal</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-sunset-400 uppercase tracking-widest">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-gray-300 font-mono">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sunset-500" />
                <span>{personalData.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sunset-500" />
                <span>{personalData.phone}</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-sunset-500" />
                <span>{personalData.location}</span>
              </p>
              {localTime && (
                <p className="flex items-center gap-2 text-sunset-300 font-semibold pt-1">
                  <Clock className="w-4 h-4 text-sunset-400 animate-pulse" />
                  <span>Local Time: {localTime}</span>
                </p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-sunset-400 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
