/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import CountUp from './CountUp';
import Reveal from './Reveal';

export default function About() {
  const { profile, education, certificates, skills, techStack } = portfolioData;
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'values'>('profile');

  // Animated statistics configuration
  const stats = [
    { label: "Years Experience", value: profile.yearsOfExperience, suffix: "+" },
    { label: "Projects Completed", value: 45, suffix: "+" },
    { label: "Global Clients", value: 24, suffix: "+" },
    { label: "Certifications", value: certificates.length, suffix: "" },
    { label: "Technologies Mastered", value: techStack.length, suffix: "+" },
  ];

  const handleTabClick = (tab: 'profile' | 'education' | 'values') => {
    setActiveTab(tab);
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              About Me
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Professional Biography
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Stats Grid */}
        <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-24">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#FE7F2D]/30 dark:hover:border-[#FE7F2D]/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-200 dark:bg-slate-800 group-hover:bg-[#FE7F2D] transition-colors duration-300" />
              <div className="text-3xl md:text-4xl font-display font-black text-slate-950 dark:text-white mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </Reveal>

        {/* Core Profile + Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <Reveal direction="right" className="w-full max-w-[400px] relative group">
              {/* Image Frame Accent */}
              <div className="absolute -inset-4 rounded-[32px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 -z-10 group-hover:scale-[1.02] transition-transform duration-300" />
              
              {/* Outer Glow offset */}
              <div className="absolute inset-0 bg-[#FE7F2D]/10 dark:bg-[#FE7F2D]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
                <img
                  src={profile.profilePhoto}
                  alt={profile.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
                />
              </div>

              {/* Float Card Indicator */}
              <div className="absolute -bottom-6 -right-6 md:-right-8 p-4 rounded-xl bg-slate-950 text-white border border-slate-800 shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FE7F2D]/25 border border-[#FE7F2D]/50 flex items-center justify-center">
                  <LucideIcon name="Award" className="w-4 h-4 text-[#FE7F2D]" />
                </div>
                <div className="text-left font-mono">
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Seniority</p>
                  <p className="text-xs font-bold text-white">L6 Principal</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Bio & Tab Details */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
            <Reveal className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#FE7F2D] uppercase tracking-wider block">
                {profile.currentPosition}
              </span>
              <p className="text-base md:text-lg text-slate-800 dark:text-slate-300 leading-relaxed font-normal">
                {profile.bio}
              </p>
            </Reveal>

            {/* Premium Modular Tab Controls */}
            <Reveal className="flex border-b border-slate-200 dark:border-slate-800">
              {(['profile', 'education', 'values'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`py-3 px-6 text-sm font-semibold tracking-tight uppercase border-b-2 relative transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'border-[#FE7F2D] text-[#FE7F2D]'
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </Reveal>

            {/* Tab content panel */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'profile' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">HQ Location</h4>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                          <LucideIcon name="MapPin" className="w-4 h-4 text-[#FE7F2D]" />
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{profile.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Active Languages</h4>
                        <div className="flex flex-wrap gap-2">
                          {profile.languages.map((lang, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 text-slate-800 dark:text-slate-300"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 sm:col-span-2">
                        <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Direct Contact Info</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                            <LucideIcon name="Mail" className="w-4 h-4 text-[#FE7F2D]" />
                            <a href={`mailto:${profile.email}`} className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#FE7F2D] transition-colors">{profile.email}</a>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                            <LucideIcon name="Phone" className="w-4 h-4 text-[#FE7F2D]" />
                            <a href={`tel:${profile.phone}`} className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#FE7F2D] transition-colors">{profile.phone}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'education' && (
                    <div className="space-y-6">
                      {education.map((edu, i) => (
                        <div key={i} className="p-4 md:p-6 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-[#FE7F2D]/10 border border-[#FE7F2D]/20 flex items-center justify-center shrink-0">
                            <LucideIcon name="GraduationCap" className="w-5 h-5 text-[#FE7F2D]" />
                          </div>
                          <div className="space-y-1 text-left">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 className="font-bold text-slate-900 dark:text-white">{edu.institution}</h4>
                              <span className="text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full font-semibold">
                                {edu.startDate} – {edu.endDate}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-[#FE7F2D]">{edu.degree} in {edu.fieldOfStudy}</p>
                            {edu.description && (
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{edu.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'values' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {profile.values.map((val, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/80 flex items-center gap-3 group/value hover:border-[#FE7F2D]/30 transition-all"
                        >
                          <div className="w-6 h-6 rounded-md bg-[#FE7F2D]/10 border border-[#FE7F2D]/20 flex items-center justify-center text-xs font-bold text-[#FE7F2D] shrink-0 group-hover/value:bg-[#FE7F2D] group-hover/value:text-white transition-all">
                            {i + 1}
                          </div>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
