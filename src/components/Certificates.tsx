/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

export default function Certificates() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Credentials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Certifications
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Certificates Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <div key={cert.id}>
              <Reveal
                delay={index * 0.1}
                className="group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-[#FE7F2D]/30 transition-all duration-300 flex flex-col justify-between text-left h-full"
              >
              <div className="space-y-4">
                {/* Certificate Decorative Cover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FE7F2D]">
                    <LucideIcon name="Award" className="w-4 h-4" />
                  </div>
                </div>

                {/* Details Panel */}
                <div className="px-6 pb-2 space-y-2">
                  <span className="text-[10px] font-mono font-bold text-[#FE7F2D] uppercase tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg text-slate-950 dark:text-white leading-snug group-hover:text-[#FE7F2D] transition-colors">
                    {cert.name}
                  </h3>
                </div>
              </div>

              {/* Verify Action Footer */}
              <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                  Verified: {cert.year}
                </span>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#FE7F2D] hover:text-white bg-[#FE7F2D]/10 hover:bg-[#FE7F2D] border border-[#FE7F2D]/10 rounded-xl transition-all cursor-pointer"
                >
                  <LucideIcon name="ExternalLink" className="w-3.5 h-3.5" />
                  <span>Verify Credential</span>
                </a>
              </div>

            </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
