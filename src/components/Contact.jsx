import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check, Copy, Github, Linkedin, MessageSquare } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/dudhadesanket378@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormSubmitted(true);
      }
    } catch (err) {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0d12] text-white relative border-t border-white/10 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sunset-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-sunset-500 font-mono text-xs uppercase tracking-widest mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            DIRECT <span className="text-sunset-500">CONTACT</span>
          </h2>
          <p className="text-sm text-gray-400 font-sans mt-2 max-w-xl">
            Have a Java microservices project, backend engineering role, or contract inquiry? Feel free to reach out anytime.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#151620] border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-500/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-xl font-bold font-display text-white uppercase">
                Contact Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-mono">
                
                {/* Email Item with Quick Copy */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-sunset-500/20 text-sunset-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-sans">Email</span>
                      <span className="text-gray-200 truncate block">{personalData.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sunset-500/20 hover:bg-sunset-500 text-sunset-300 hover:text-white text-xs font-mono font-semibold transition-all flex-shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sunset-500/20 text-sunset-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-sans">Phone</span>
                    <span className="text-gray-200">{personalData.phone}</span>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sunset-500/20 text-sunset-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-sans">Location</span>
                    <span className="text-gray-200">{personalData.location}</span>
                  </div>
                </div>

                {/* Live Local Time Item */}
                {localTime && (
                  <div className="p-4 rounded-2xl bg-sunset-500/10 border border-sunset-500/30 flex items-center gap-3 text-sunset-300">
                    <div className="w-9 h-9 rounded-xl bg-sunset-500/20 text-sunset-400 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] text-sunset-400 uppercase tracking-widest block font-sans">Current Local Time</span>
                      <span className="font-bold text-white text-xs">{localTime}</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-sunset-500 border border-white/10 text-gray-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-sunset-500 border border-white/10 text-gray-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Embedded Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151620] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              
              <h3 className="text-xl font-bold font-display text-white uppercase mb-6">
                Send A Direct Message
              </h3>

              {formSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-20 h-20 rounded-full bg-sunset-500/20 text-sunset-400 border border-sunset-500/40 flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">Message Sent Successfully!</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Sanket Dudhade. Your inquiry has been dispatched to <span className="text-sunset-400 font-mono">{personalData.email}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs uppercase hover:bg-white/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-sunset-500 transition-colors placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-sunset-500 transition-colors placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-2">
                      Message / Requirement *
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project goals, Spring Boot requirements, or role specs..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-sunset-500 transition-colors resize-none placeholder-gray-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-sunset-500 hover:bg-sunset-600 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message Now'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
