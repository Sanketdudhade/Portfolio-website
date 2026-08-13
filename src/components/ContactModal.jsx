import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, Clock } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
      setLocalTime(`${timeStr} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#14151e] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-sunset-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sunset-400 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
              • GET IN TOUCH
            </span>
            {localTime && (
              <span className="text-[11px] font-mono text-sunset-300 font-semibold flex items-center gap-1.5 bg-sunset-500/10 px-2.5 py-1 rounded-full border border-sunset-500/20">
                <Clock className="w-3 h-3 text-sunset-400 animate-pulse" />
                {localTime}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold font-display text-white mt-1">
            Let's Build Something Resilient
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Fill out the form below or reach out directly via email.
          </p>
        </div>

        {/* Quick Email Copy Bar */}
        <div className="mb-6 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <Mail className="w-4 h-4 text-sunset-400 flex-shrink-0" />
            <span className="text-xs font-mono text-gray-200 truncate">{personalData.email}</span>
          </div>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sunset-500/20 hover:bg-sunset-500 text-sunset-300 hover:text-white text-xs font-mono font-semibold transition-all flex-shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Form or Success Message */}
        {formSubmitted ? (
          <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-sunset-500/20 text-sunset-400 border border-sunset-500/40 flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              Thank you for reaching out, Sanket will get back to you promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-sunset-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">Your Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-sunset-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1">Project / Inquiry</label>
              <textarea
                required
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your Java, Spring Boot, or Full Stack requirements..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-sunset-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-sunset-500 hover:bg-sunset-600 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
