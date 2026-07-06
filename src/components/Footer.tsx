/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';

interface FooterProps {
  onOpenCV: () => void;
}

export default function Footer({ onOpenCV }: FooterProps) {
  const { profile } = portfolioData;

  const socialLinks = [
    { name: 'WhatsApp', icon: 'MessageSquare', href: `https://wa.me/${profile.whatsappNumber}`, color: 'hover:bg-emerald-600' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/in/hanissiddiq', color: 'hover:bg-blue-600' },
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/hanissiddiq', color: 'hover:bg-[#24292e]' },
    { name: 'GitLab', icon: 'Gitlab', href: 'https://gitlab.com/hanissiddiq', color: 'hover:bg-[#fc6d26]' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/hanissiddiq', color: 'hover:bg-pink-600' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/hanissiddiq', color: 'hover:bg-blue-700' },
    { name: 'Twitter/X', icon: 'Twitter', href: 'https://x.com/hanissiddiq', color: 'hover:bg-black' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/@hanissiddiq', color: 'hover:bg-red-600' },
    { name: 'TikTok', icon: 'Smartphone', href: 'https://tiktok.com/@hanissiddiq', color: 'hover:bg-slate-900' },
    { name: 'Medium', icon: 'BookOpen', href: 'https://medium.com/@hanissiddiq', color: 'hover:bg-slate-800' },
    { name: 'Dev.to', icon: 'FileCode', href: 'https://dev.to/hanissiddiq', color: 'hover:bg-[#0a0a0a]' },
    { name: 'Email', icon: 'Mail', href: `mailto:${profile.email}`, color: 'hover:bg-[#FE7F2D]' },
    { name: 'Portfolio', icon: 'Globe', href: '#hero', color: 'hover:bg-[#233D4D]' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-slate-400 border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Segment: Brand and Nav links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4 text-left">
            <a
              href="#hero"
              onClick={(e) => handleScrollToSection(e, 'hero')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#FE7F2D] to-[#FF9F5A] flex items-center justify-center shadow-md">
                <span className="text-white font-display font-extrabold text-lg">H</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-[#FE7F2D] transition-colors">
                {profile.fullName}
              </span>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Architecting state-of-the-art administrative panels, government solutions, and consumer apps with standard visual consistency, micro-animations, and fast runtime.
            </p>
          </div>

          {/* Sitemaps Quick Links Col */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">Navigation Hubs</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold">
              <a href="#hero" onClick={(e) => handleScrollToSection(e, 'hero')} className="hover:text-white transition-colors cursor-pointer">Home</a>
              <a href="#about" onClick={(e) => handleScrollToSection(e, 'about')} className="hover:text-white transition-colors cursor-pointer">About</a>
              <a href="#experience" onClick={(e) => handleScrollToSection(e, 'experience')} className="hover:text-white transition-colors cursor-pointer">Experience</a>
              <a href="#projects" onClick={(e) => handleScrollToSection(e, 'projects')} className="hover:text-white transition-colors cursor-pointer">Projects</a>
              <a href="#skills" onClick={(e) => handleScrollToSection(e, 'skills')} className="hover:text-white transition-colors cursor-pointer">Skills Matrix</a>
              <a href="#tech-stack" onClick={(e) => handleScrollToSection(e, 'tech-stack')} className="hover:text-white transition-colors cursor-pointer">Tech Arsenal</a>
              <a href="#contact" onClick={(e) => handleScrollToSection(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">Contact</a>
              <button onClick={onOpenCV} className="hover:text-white transition-colors cursor-pointer text-left font-semibold">Curriculum Vitae</button>
            </div>
          </div>

          {/* Quick Contact Details Col */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">Office Coordinates</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <LucideIcon name="MapPin" className="w-4 h-4 text-slate-600 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcon name="Mail" className="w-4 h-4 text-slate-600 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">{profile.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcon name="Phone" className="w-4 h-4 text-slate-600 shrink-0" />
                <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">{profile.phone}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Segment: Beautiful Social Icons */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center space-y-6">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center">Social Syndications</h4>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`w-9 h-9 rounded-full bg-slate-900 border border-slate-850/80 text-slate-400 flex items-center justify-center transition-all duration-300 hover:text-white hover:scale-110 shadow-sm ${social.color} cursor-pointer`}
                title={social.name}
              >
                <LucideIcon name={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Segment: Copyright & Meta */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <span>&copy; 2026 {profile.fullName}. All rights reserved.</span>
          <div className="flex items-center gap-1.5">
            <LucideIcon name="ShieldCheck" className="w-3.5 h-3.5 text-slate-700" />
            <span>Digital Signature Verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
