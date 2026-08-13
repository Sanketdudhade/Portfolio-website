import React from 'react';
import { Server, Database, Layout, Cpu, CheckCircle2, Award, ShieldCheck, Terminal } from 'lucide-react';
import { skillsCategories, personalData } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-sunset-500" />;
      case 'Database': return <Database className="w-5 h-5 text-sunset-500" />;
      case 'Layout': return <Layout className="w-5 h-5 text-sunset-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sunset-500" />;
      default: return <Server className="w-5 h-5 text-sunset-500" />;
    }
  };

  const softSkills = ["Problem Solving", "Design Understanding", "Team Collaboration", "Visual Design", "Agile Methodology", "Code Review & Refactoring"];

  return (
    <section id="skills" className="py-24 bg-[#0b0c10] text-white relative border-t border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sunset-500 font-mono text-xs uppercase tracking-widest mb-3">
            <Cpu className="w-4 h-4" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
            TECH STACK & <span className="text-sunset-500">ARCHITECTURE</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Engineered around Java 21, Spring Boot microservices, high-performance relational databases, containerized cloud infrastructure, and modern frontend design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillsCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#14151c] rounded-2xl p-7 border border-white/10 hover:border-sunset-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 rounded-xl bg-sunset-500/10 border border-sunset-500/20">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="font-mono text-[10px] text-sunset-400 font-bold px-2 py-0.5 rounded bg-sunset-500/10 border border-sunset-500/20">
                        {skill.badge}
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-sunset-600 to-amber-400 rounded-full transition-all duration-1000"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Certifications & Soft Skills Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#1a1b26] to-[#12131b] p-7 rounded-2xl border border-white/10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-sunset-400" />
              <h3 className="text-lg font-bold font-display text-white">
                Official Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {personalData.certifications.map((cert) => (
                <div key={cert.title} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                    <span className="text-xs text-gray-400 font-mono">{cert.issuer}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sunset-500/20 text-sunset-300 border border-sunset-500/30">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional / Soft Skills Badges */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#1a1b26] to-[#12131b] p-7 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-sunset-400" />
                <h3 className="text-lg font-bold font-display text-white">
                  Professional Methodologies
                </h3>
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Combining engineering discipline, defensive programming, clean code architecture, and proactive team collaboration.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {softSkills.map((soft) => (
                  <span
                    key={soft}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-sunset-500/40 text-xs font-medium text-gray-200 transition-colors"
                  >
                    ✦ {soft}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
