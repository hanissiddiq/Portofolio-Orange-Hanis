/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

export default function WorkExperience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Career Journey
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Work Experience
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Vertical Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
          {experience.map((exp, index) => {
            const isLatest = index === 0;
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Floating Node (Date) on Desktop Left */}
                <div className="hidden md:block absolute -left-[144px] top-1 text-right w-24">
                  <span className="text-sm font-bold font-mono text-slate-800 dark:text-slate-200 block">
                    {exp.startDate}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest block font-semibold mt-0.5">
                    to {exp.endDate}
                  </span>
                </div>

                {/* Timeline Axis Node Bubble */}
                <div className={`absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full border-2 bg-white dark:bg-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  isLatest 
                    ? 'border-[#FE7F2D] shadow-md shadow-[#FE7F2D]/25' 
                    : 'border-slate-300 dark:border-slate-700'
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    isLatest ? 'bg-[#FE7F2D]' : 'bg-slate-400 dark:bg-slate-600'
                  }`} />
                </div>

                {/* Main Content Card */}
                <Reveal delay={index * 0.1} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 shadow-md group-hover:border-[#FE7F2D]/30 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Subtle top indicator bar */}
                  {isLatest && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FE7F2D] to-[#FF9F5A]" />
                  )}

                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/60 pb-5 mb-5">
                    
                    {/* Brand details */}
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-inner shrink-0 group-hover:bg-[#FE7F2D]/10 group-hover:text-[#FE7F2D] transition-colors duration-300">
                        <LucideIcon name={exp.companyLogo} className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-lg text-slate-950 dark:text-white leading-tight">
                          {exp.position}
                        </h3>
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-0.5">
                          {exp.companyName}
                        </p>
                      </div>
                    </div>

                    {/* Metadata chips */}
                    <div className="flex flex-wrap gap-2 items-center text-right md:flex-col md:items-end md:gap-1 shrink-0">
                      {/* Mobile-only date display */}
                      <span className="md:hidden text-xs font-bold font-mono text-slate-500 dark:text-slate-400">
                        {exp.startDate} – {exp.endDate}
                      </span>
                      
                      <div className="flex gap-2">
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#FE7F2D]/10 text-[#FE7F2D]">
                          {exp.employmentType}
                        </span>
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-4">
                    <div className="text-left">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">Core Responsibilities</h4>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <LucideIcon name="Check" className="w-4 h-4 text-[#FE7F2D] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements highlighted box */}
                    {exp.achievements.length > 0 && (
                      <div className="p-4 md:p-5 rounded-xl bg-[#FE7F2D]/5 dark:bg-[#FE7F2D]/3 border border-[#FE7F2D]/10 text-left">
                        <div className="flex items-center gap-2 mb-2 text-[#FE7F2D]">
                          <LucideIcon name="Award" className="w-4 h-4" />
                          <h4 className="text-xs font-mono font-bold uppercase tracking-widest">Key Achievements</h4>
                        </div>
                        <ul className="space-y-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FE7F2D] shrink-0 mt-2" />
                              <span className="leading-relaxed font-semibold">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Chips */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-left">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-2.5">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </Reveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
