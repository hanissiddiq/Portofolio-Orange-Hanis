/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

export default function TechStack() {
  const { techStack } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Tools', 'Language'];

  const filteredStack = selectedCategory === 'All'
    ? techStack
    : techStack.filter((item) => {
        if (selectedCategory === 'Cloud') {
          return item.category === 'Cloud' || item.name === 'AWS' || item.name === 'Cloudflare';
        }
        return item.category === selectedCategory;
      });

  return (
    <section id="tech-stack" className="py-24 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Tech Arsenal
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Technologies & Frameworks
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Categories Tabs */}
        <Reveal className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FE7F2D] border-[#FE7F2D] text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900/30 border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-[#FE7F2D]/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </Reveal>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex flex-col justify-between h-[160px] hover:scale-[1.03] hover:shadow-md hover:border-[#FE7F2D]/30 dark:hover:border-[#FE7F2D]/30 transition-all duration-300 relative text-left group overflow-hidden"
              >
                {/* Glow accent overlay on card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FE7F2D]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Top Header */}
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm group-hover:bg-[#FE7F2D] group-hover:text-white transition-all duration-300">
                    <LucideIcon name={tech.logo} className="w-5 h-5" />
                  </div>
                  
                  {/* Years of Exp Badge */}
                  <span className="text-[9px] font-mono font-bold text-[#FE7F2D] bg-[#FE7F2D]/10 px-2 py-0.5 rounded-full">
                    {tech.years} Yrs
                  </span>
                </div>

                {/* Card Bottom Details */}
                <div className="space-y-1">
                  <h3 className="font-extrabold text-sm md:text-base text-slate-950 dark:text-white truncate">
                    {tech.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">
                      {tech.category}
                    </span>
                    <span className="text-[9px] font-bold text-slate-600 dark:text-slate-300">
                      {tech.experienceLevel}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
