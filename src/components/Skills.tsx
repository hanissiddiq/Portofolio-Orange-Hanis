/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../data/portfolioData';
import { motion } from 'motion/react';
import Reveal from './Reveal';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Skills Matrix
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Expertise & Capabilities
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Categories Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((categoryBlock, index) => (
            <div key={categoryBlock.category}>
              <Reveal
                delay={index * 0.05}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 shadow-md flex flex-col justify-between hover:border-[#FE7F2D]/30 dark:hover:border-[#FE7F2D]/30 transition-all duration-300 relative group overflow-hidden"
              >
              {/* Card visual accent anchor */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-slate-200 dark:bg-slate-800 group-hover:bg-[#FE7F2D] transition-colors duration-300" />

              <div>
                <h3 className="text-left font-display font-black text-lg text-slate-950 dark:text-white mb-6 uppercase tracking-tight">
                  {categoryBlock.category}
                </h3>
                
                <div className="space-y-5">
                  {categoryBlock.skills.map((sk) => (
                    <div key={sk.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 text-left">{sk.name}</span>
                        <span className="font-mono text-xs font-bold text-[#FE7F2D]">{sk.level}%</span>
                      </div>
                      
                      {/* Interactive Progress bar */}
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200/20 dark:border-slate-900">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${sk.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-gradient-to-r from-[#FE7F2D] to-[#FF9F5A] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
