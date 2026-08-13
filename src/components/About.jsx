import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-[#0e0e12] text-white relative border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-sunset-500 font-mono text-xs uppercase tracking-widest mb-3">
              <Briefcase className="w-4 h-4" />
              <span>CAREER BACKGROUND</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              EXPERIENCE & <span className="text-sunset-500">EDUCATION</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-sunset-400" />
              {personalData.location}
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Left Internship Experience, Right Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Internship Experience */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold font-display text-white uppercase flex items-center gap-3 pb-4 border-b border-white/10">
              <Briefcase className="w-5 h-5 text-sunset-500" />
              Professional Experience
            </h3>

            {/* Internship Card */}
            <div className="bg-[#15161f] p-8 rounded-2xl border border-white/10 hover:border-sunset-500/40 transition-all shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-500/10 rounded-full blur-2xl group-hover:bg-sunset-500/20 transition-all pointer-events-none"></div>

              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white font-display">
                    {personalData.internship.role}
                  </h4>
                  <span className="text-sm font-semibold text-sunset-400">
                    {personalData.internship.company}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  <Calendar className="w-3.5 h-3.5 text-sunset-400" />
                  <span>{personalData.internship.period}</span>
                </div>
              </div>

              <ul className="space-y-3 pt-2">
                {personalData.internship.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-sunset-500 mt-1 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Philosophy Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-sunset-900/40 to-amber-900/20 border border-sunset-500/30">
              <h4 className="text-sm font-bold text-sunset-300 uppercase tracking-wider mb-2 font-mono">
                Engineering Philosophy:
              </h4>
              <p className="text-xs text-amber-100/90 leading-relaxed italic">
                "Writing clean, modular Java microservices with defensive API validation, optimized SQL queries, and zero-compromise security integration."
              </p>
            </div>

          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold font-display text-white uppercase flex items-center gap-3 pb-4 border-b border-white/10">
              <GraduationCap className="w-5 h-5 text-sunset-500" />
              Academic History
            </h3>

            <div className="space-y-6">
              {personalData.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[#15161f] p-6 rounded-2xl border border-white/10 hover:border-sunset-500/30 transition-all shadow-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-white text-base">
                      {edu.degree}
                    </h4>
                    <span className="px-2.5 py-1 rounded bg-sunset-500/20 text-sunset-300 text-[11px] font-mono font-bold">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-gray-300 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono mb-3">
                    {edu.location} • {edu.period}
                  </p>

                  <div className="text-xs text-gray-400 border-t border-white/5 pt-3">
                    ✦ {edu.highlight}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Box */}
            <div className="p-6 rounded-2xl bg-[#181924] border border-white/10 text-center space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Looking for a Java / Full Stack Developer?
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Sanket is ready for full-time software engineering roles and contract assignments.
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-3 rounded-full bg-sunset-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-sunset-600 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
