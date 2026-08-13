import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalData, projectsData } from '../data/portfolioData';

export default function Terminal({ onOpenContact }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Sanket Dudhade\'s Developer CLI (v2.1.0).' },
    { type: 'output', text: 'Type "help" to see available terminal commands.' }
  ]);
  
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'command', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help       - Display command list
  skills     - View Java & Backend skill matrix
  projects   - View full-stack projects
  edu        - View education & CGPA
  contact    - Get email, phone & social links
  hire       - Open direct hire/contact form
  clear      - Clear terminal screen`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL SKILLS MATRIX:
  ✦ Backend: Java 21, Spring Boot, Microservices, Spring Security, Spring Cloud Gateway, Eureka
  ✦ Databases: MySQL, Spring Data JPA, Hibernate, Kafka
  ✦ DevOps: Docker, AWS Cloud Architecting, Git, Postman
  ✦ Frontend: React.js, Tailwind CSS, JavaScript`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FEATURED PROJECTS:
  1. E-Commerce Microservices [Java 21, Spring Cloud, Razorpay, Eureka]
  2. Movie Ticket Booking System [Backend / Java, Spring Boot 3, Seat Locking, MySQL]
  3. Cloud Storage & File Handling [Spring Boot, React, Multipart APIs]`
        });
        break;

      case 'edu':
        newHistory.push({
          type: 'output',
          text: `EDUCATION:
  • B.E. Computer Science | Savitribai Phule Pune University
  • CGPA: 8.65 / 10 (Sep 2022 - Sep 2026)
  • HSC: 76% (Shree Ganesh Junior College)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `CONTACT INFORMATION:
  Email:    ${personalData.email}
  Phone:    ${personalData.phone}
  Location: ${personalData.location}
  GitHub:   ${personalData.github}
  LinkedIn: ${personalData.linkedin}`
        });
        break;

      case 'hire':
        newHistory.push({
          type: 'output',
          text: 'Opening contact modal...'
        });
        if (onOpenContact) onOpenContact();
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="terminal" className="py-24 bg-[#0a0b0e] text-white relative border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sunset-500 font-mono text-xs uppercase tracking-widest mb-2">
            <TerminalIcon className="w-4 h-4" />
            <span>INTERACTIVE SYSTEM LAB</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
            DEVELOPER <span className="text-sunset-500">CLI TERMINAL</span>
          </h2>
          <p className="text-xs text-gray-400 font-mono mt-1">
            Type <span className="text-sunset-400 font-bold">help</span>, <span className="text-sunset-400 font-bold">skills</span>, <span className="text-sunset-400 font-bold">projects</span>, or <span className="text-sunset-400 font-bold">hire</span> to explore interactive system output.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="bg-[#12131b] border border-white/15 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
          
          {/* Header Bar */}
          <div className="bg-[#1a1b26] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="text-xs text-gray-400 ml-2">sanket@dev-machine:~ (zsh)</span>
            </div>
            <div className="text-[11px] text-sunset-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              SYSTEM ACTIVE
            </div>
          </div>

          {/* Terminal Console Output area */}
          <div className="p-6 h-80 overflow-y-auto space-y-3 bg-[#0d0e14]/90 selection:bg-sunset-500 selection:text-white">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'command' && (
                  <span className="text-sunset-400 font-bold">{item.text}</span>
                )}
                {item.type === 'output' && (
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono">{item.text}</pre>
                )}
                {item.type === 'error' && (
                  <span className="text-red-400">{item.text}</span>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Command Input */}
          <form onSubmit={handleCommand} className="bg-[#171824] px-4 py-3 border-t border-white/10 flex items-center gap-2">
            <span className="text-sunset-400 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type command here (e.g. help)..."
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-gray-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-sunset-500/20 text-sunset-400 hover:bg-sunset-500 hover:text-white transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
