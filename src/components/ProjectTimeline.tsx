/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../data/portfolioData';
import { Project } from '../types';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

interface ProjectTimelineProps {
  onOpenProject: (project: Project) => void;
}

export default function ProjectTimeline({ onOpenProject }: ProjectTimelineProps) {
  const { projects } = portfolioData;

  // Let's build a clean list of chronicled launches by sorting projects
  // We can enrich the list with custom mappings if needed, or map directly from projects list!
  const chronicle = projects.map((p, i) => {
    // Extract year from duration (e.g., "12 Months (2024)" -> "2024")
    const yearMatch = p.duration.match(/\((20\d{2})\)/);
    const year = yearMatch ? yearMatch[1] : (2025 - i).toString();
    
    // Guess associated company or fallback to Client
    const company = p.client;

    return {
      year,
      project: p,
      company,
      role: p.role,
      technologies: p.technologies.slice(0, 3)
    };
  }).sort((a, b) => b.year.localeCompare(a.year)); // Sort descending by year

  return (
    <section id="project-timeline" className="py-24 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Chronicle
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Project Timeline
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Chronology Layout */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200/60 dark:border-slate-850/80 shadow-md">
          <table className="w-full border-collapse text-left text-sm">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-slate-55 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-850 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                <th className="py-4 px-6">Year</th>
                <th className="py-4 px-6">Project Name</th>
                <th className="py-4 px-6">Client / Company</th>
                <th className="py-4 px-6">Role</th>
                <th className="py-4 px-6 hidden md:table-cell">Primary Technologies</th>
                <th className="py-4 px-6 text-right">Details</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100 dark:divide-slate-900">
              {chronicle.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-colors group cursor-pointer"
                  onClick={() => onOpenProject(item.project)}
                >
                  {/* Year Badge */}
                  <td className="py-4 px-6 font-mono font-extrabold text-[#FE7F2D]">
                    {item.year}
                  </td>
                  
                  {/* Project Title */}
                  <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white group-hover:text-[#FE7F2D] transition-colors">
                    {item.project.name}
                  </td>
                  
                  {/* Client / Company */}
                  <td className="py-4 px-6 text-slate-500 dark:text-slate-400">
                    {item.company}
                  </td>
                  
                  {/* Role */}
                  <td className="py-4 px-6 font-mono text-xs text-slate-600 dark:text-slate-400">
                    {item.role}
                  </td>

                  {/* Tech stack chips */}
                  <td className="py-4 px-6 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-slate-100 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Launch button */}
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProject(item.project);
                      }}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-[#FE7F2D] group-hover:border-[#FE7F2D]/20 transition-all cursor-pointer"
                      aria-label="Open project timeline details"
                    >
                      <LucideIcon name="ExternalLink" className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}
