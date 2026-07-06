/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../data/portfolioData';
import { Project } from '../types';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

interface FeaturedProjectsProps {
  onOpenProject: (project: Project) => void;
}

export default function FeaturedProjects({ onOpenProject }: FeaturedProjectsProps) {
  // We can pick the top 2 projects as our "Featured" items
  const featured = portfolioData.projects.slice(0, 2);

  return (
    <section id="featured-projects" className="py-24 bg-slate-50 dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Spotlight
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Featured Creations
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Featured Items Grid Layout */}
        <div className="space-y-12 md:space-y-16">
          {featured.map((proj, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={proj.id}>
                <Reveal
                  delay={index * 0.1}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
                >
                {/* Visual Screenshot Cover (Alternating left/right on large screen) */}
                <div className={`lg:col-span-7 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900 cursor-pointer group relative ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
                  onClick={() => onOpenProject(proj)}
                >
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={proj.imageUrl}
                      alt={proj.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-500"
                    />
                  </div>
                  {/* Hover Overlay Visual indicator */}
                  <div className="absolute inset-0 bg-[#FE7F2D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                      <LucideIcon name="Eye" className="w-5 h-5 text-[#FE7F2D]" />
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className={`lg:col-span-5 space-y-6 text-left flex flex-col justify-center ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#FE7F2D] uppercase tracking-wider block">
                      {proj.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-black tracking-tight text-slate-950 dark:text-white">
                      {proj.name}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  {/* Core details list */}
                  <div className="grid grid-cols-2 gap-4 font-mono text-xs border-t border-b border-slate-200/55 dark:border-slate-850/80 py-4">
                    <div>
                      <span className="text-slate-400 block font-semibold text-[10px] uppercase">Client Partner</span>
                      <span className="text-slate-800 dark:text-slate-200 font-bold">{proj.client}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold text-[10px] uppercase">Your Position</span>
                      <span className="text-slate-800 dark:text-slate-200 font-bold">{proj.role}</span>
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-mono font-bold rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200/40 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      onClick={() => onOpenProject(proj)}
                      className="px-5 py-2.5 text-xs font-bold text-white bg-[#FE7F2D] hover:bg-[#FE7F2D]/90 rounded-xl transition-colors shadow-md cursor-pointer"
                    >
                      Read Case Study
                    </button>
                    {proj.liveDemoUrl && (
                      <a
                        href={proj.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#FE7F2D] bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
                      >
                        <LucideIcon name="ExternalLink" className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#FE7F2D] bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-all cursor-pointer"
                      >
                        <LucideIcon name="Github" className="w-4 h-4" />
                        <span>Repository</span>
                      </a>
                    )}
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
