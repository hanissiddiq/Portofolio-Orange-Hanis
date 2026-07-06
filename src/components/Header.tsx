/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { portfolioData } from '../data/portfolioData';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenCV: () => void;
}

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Contact', href: '#contact' },
];

export default function Header({ theme, toggleTheme, onOpenCV }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracker
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#050505]/85 backdrop-blur-md border-b border-slate-100 dark:border-white/10 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#FE7F2D] to-[#FF9F5A] flex items-center justify-center shadow-md shadow-[#FE7F2D]/20">
              <span className="text-white font-display font-extrabold text-lg">H</span>
            </div>
            <div className="hidden sm:block font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-[#FE7F2D] transition-colors">
              {portfolioData.profile.fullName}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-full relative transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#FE7F2D]'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 bg-slate-100 dark:bg-slate-900 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {/* Dark Mode toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#FE7F2D] dark:hover:text-[#FE7F2D] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle visual theme"
            >
              {theme === 'light' ? (
                <LucideIcon name="Flame" className="w-4 h-4" />
              ) : (
                <LucideIcon name="Atom" className="w-4 h-4" />
              )}
            </button>

            {/* View CV button */}
            <button
              onClick={onOpenCV}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-black hover:bg-[#FE7F2D] dark:hover:bg-[#FE7F2D] dark:hover:text-white rounded-full transition-all cursor-pointer"
            >
              <LucideIcon name="Eye" className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            {/* Mobile Menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <LucideIcon name="X" className="w-5 h-5" />
              ) : (
                <LucideIcon name="Menu" className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[72px] left-0 w-full bg-white dark:bg-[#050505] border-b border-slate-100 dark:border-white/10 shadow-xl z-40 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg font-medium py-2 border-b border-slate-50 dark:border-slate-900 flex items-center justify-between cursor-pointer ${
                      isActive ? 'text-[#FE7F2D] font-bold' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>{link.name}</span>
                    <LucideIcon name="ArrowRight" className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0'}`} />
                  </a>
                );
              })}
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#FE7F2D] hover:bg-[#FE7F2D]/90 rounded-xl transition-all mt-4 cursor-pointer"
              >
                <LucideIcon name="Eye" className="w-4 h-4" />
                <span>View CV / Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
