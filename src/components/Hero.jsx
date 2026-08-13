import React from 'react';
import { ArrowUpRight, Sparkles, Quote, Award, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 flex flex-col justify-center overflow-hidden bg-[#0c0d12]">
      
      {/* Main Split-Screen Container */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* LEFT PANEL: Vibrant Sunset Amber Gradient */}
        <div className="lg:col-span-6 bg-sunset-hero relative px-6 sm:px-10 lg:px-14 xl:px-16 pt-12 pb-24 lg:py-28 flex flex-col justify-between z-10">
          
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/30 rounded-full blur-2xl pointer-events-none"></div>

          {/* Top Pill Tagline */}
          <div className="relative z-30 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>JAVA 21 • SPRING BOOT • MICROSERVICES</span>
            </div>
          </div>

          {/* Center High-Impact Title (Layered BEHIND portrait image e.g. z-10 vs z-20 portrait) */}
          <div className="my-auto relative">
            
            {/* TALL CONDENSED "CREATE" DISPLAY TYPOGRAPHY matching exact reference screenshot */}
            <h1 className="font-bebas text-[7.5rem] sm:text-[10rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] text-white tracking-tighter uppercase leading-[0.8] mb-4 select-none relative z-10 text-left drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] transform origin-left scale-x-[0.82]">
              CREATE
            </h1>
            
            <p className="text-lg sm:text-xl font-light text-amber-100/90 leading-snug mb-8 font-sans relative z-30 max-w-sm">
              Designs that inspire.<br />
              Java architectures that scale.
            </p>

            {/* Glowing Pill CTA matching reference image */}
            <div className="flex flex-wrap items-center gap-4 relative z-30">
              <a
                href="#projects"
                className="glow-amber-button inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:bg-amber-100 transition-all group shadow-2xl"
              >
                <span>VIEW WORK</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sunset-600" />
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-wider hover:bg-black/50 transition-colors"
              >
                <Terminal className="w-4 h-4 text-sunset-400" />
                <span>CLI LAB</span>
              </a>
            </div>
          </div>

          {/* Bottom Social Proof / Trust Section matching reference image */}
          <div className="relative z-30 mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full border-2 border-sunset-600 bg-amber-200 flex items-center justify-center font-bold text-black text-[10px]">
                SPPU
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-sunset-600 bg-amber-400 flex items-center justify-center font-bold text-black text-[10px]">
                AWS
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-sunset-600 bg-orange-400 flex items-center justify-center font-bold text-black text-[10px]">
                JAVA
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-sunset-600 bg-black text-white flex items-center justify-center text-[10px] font-bold font-mono">
                +12
              </div>
            </div>
            <div className="text-xs text-amber-100/90 font-medium max-w-xs leading-tight">
              <span className="font-bold text-white">8.65 CGPA • B.E. Computer Science</span><br />
              Trusted by tech leads & forward-thinking brands worldwide.
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Minimal Crisp Modern Light/Off-White Section */}
        <div className="lg:col-span-6 bg-lightBg relative px-6 sm:px-12 lg:px-16 py-16 lg:py-28 flex flex-col justify-between z-10">
          
          {/* Top Availability Indicator matching reference image */}
          <div className="flex justify-end relative z-30">
            <div className="text-right">
              <span className="text-[11px] font-bold font-mono tracking-widest text-sunset-600 uppercase block mb-1 flex items-center justify-end gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sunset-500 animate-pulse"></span>
                AVAILABLE FOR •
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight leading-tight max-w-xs ml-auto">
                Freelance Projects & Full-Time Roles
              </h3>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="my-auto py-12 lg:py-0 relative z-30 space-y-5 max-w-md ml-auto">
            
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xl space-y-2.5">
              <div className="flex items-center justify-between text-sunset-600">
                <span className="text-xs font-mono uppercase font-bold tracking-wider">Core Specialization</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-base font-bold text-gray-900">
                Spring Boot Microservices & REST Architectures
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed font-sans">
                Hands-on experience developing REST APIs, API Gateways, Eureka Service Discovery, Spring Security, JWT, and Hibernate ORM with MySQL.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Education</span>
                <h5 className="font-bold text-gray-900 text-xs sm:text-sm">SPPU Pune (2022 - 2026)</h5>
                <p className="text-xs text-sunset-600 font-semibold">B.E. Computer Science • 8.65 CGPA</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-sunset-50 border border-sunset-200 flex items-center justify-center text-sunset-600">
                <Award className="w-5 h-5" />
              </div>
            </div>

          </div>

          {/* Floating Testimonial / Recommendation Card matching bottom-right in reference image */}
          <div className="relative z-30 max-w-sm ml-auto mt-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xl relative overflow-hidden">
              <Quote className="w-8 h-8 text-sunset-200 absolute -top-1 -left-1 opacity-80" />
              <p className="text-xs text-gray-700 font-medium leading-relaxed mb-4 relative z-10 italic">
                "Sanket delivered outstanding work that exceeded our expectations. His Spring Boot microservices architecture is clean and highly scalable."
              </p>
              
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sunset-500 to-amber-400 text-white flex items-center justify-center font-bold text-xs shadow-md">
                  GA
                </div>
                <div>
                  <h6 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                    Genie Ashwini
                  </h6>
                  <span className="text-[10px] text-gray-500 font-mono">
                    Founder,CodeForSuccess 
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CENTER OVERLAPPING PORTRAIT PHOTO (z-20: Sits in front of CREATE z-10, behind text CTAs z-30) */}
        <div className="lg:absolute lg:inset-y-0 lg:left-[47%] xl:left-[45%] lg:-translate-x-1/2 flex items-end justify-center z-20 pointer-events-none pt-8 lg:pt-0">
          <div className="relative max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl w-full flex justify-center">
            
            {/* Soft Glow behind portrait photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-sunset-600/40 via-amber-500/20 to-transparent rounded-full blur-3xl transform scale-90"></div>

            {/* High-Resolution Crisp Cutout Portrait Image */}
            <img
              src="/hero-avatar-clean.png"
              alt="Sanket Dudhade - Java Developer"
              className="w-auto h-[480px] sm:h-[580px] lg:h-[700px] xl:h-[780px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)] transform hover:scale-[1.01] transition-transform duration-500 pointer-events-auto"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
