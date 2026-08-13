import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Server, Code, ShieldCheck, ArrowRight, X, Cpu } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Backend / Java', 'Microservices', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => {
        const cat = p.category.toLowerCase();
        const filter = activeFilter.toLowerCase();
        if (filter === 'backend / java') {
          return cat.includes('backend') || cat.includes('java');
        }
        if (filter === 'microservices') {
          return cat.includes('microservices');
        }
        if (filter === 'full stack') {
          return cat.includes('full stack');
        }
        return cat.includes(filter);
      });

  return (
    <section id="projects" className="py-24 bg-[#0e0e12] relative overflow-hidden text-white border-t border-white/10">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-sunset-500 font-mono text-xs uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              FEATURED <span className="text-stroke-white">PROJECTS</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/5 p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeFilter === cat
                    ? 'bg-sunset-500 text-white shadow-lg shadow-sunset-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#15161d] rounded-2xl border border-white/10 hover:border-sunset-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5"
            >
              
              {/* Card Top / Header */}
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-sunset-500/10 text-sunset-400 border border-sunset-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 text-gray-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sunset-400 transition-colors p-1"
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-sunset-400 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-400 font-sans leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sunset-500 mt-1.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Tech Stack & Architecture Modal Button */}
              <div className="p-7 pt-0 border-t border-white/5 bg-[#121319]/50">
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-sunset-500 hover:border-sunset-500 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:bg-sunset-500"
                >
                  <span>Architecture & Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Architecture & Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#161720] border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sunset-500/10 text-sunset-400 font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>PROJECT BLUEPRINT</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-gray-300 mb-6">
              {selectedProject.tagline}
            </p>

            {/* Microservices Architecture Diagram View if available */}
            {selectedProject.architecture && (
              <div className="mb-6 bg-black/60 p-4 rounded-xl border border-white/10">
                <span className="text-[11px] font-mono text-sunset-400 font-bold uppercase tracking-wider block mb-2">
                  System Architecture Topology:
                </span>
                <pre className="font-mono text-[11px] text-amber-200 overflow-x-auto leading-tight">
                  {selectedProject.architecture}
                </pre>
              </div>
            )}

            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                Key Technical Achievements:
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-sunset-500 mt-1 flex-shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sunset-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-sunset-600 transition-colors shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 text-gray-300 font-semibold text-xs uppercase hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
