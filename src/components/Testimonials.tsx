/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Endorsements
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Client Testimonials
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((test, index) => (
            <div key={test.id}>
              <Reveal
                delay={index * 0.1}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-[#FE7F2D]/20 transition-all duration-300 flex flex-col justify-between h-full relative text-left group overflow-hidden"
              >
                {/* Quotation Watermark */}
                <div className="absolute -top-4 -right-2 text-slate-100 dark:text-slate-900/60 font-serif font-black text-9xl pointer-events-none select-none z-0">
                  &ldquo;
                </div>

                <div className="space-y-4 z-10 relative">
                  {/* Rating Stars row */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>
                        <LucideIcon
                          name="Star"
                          className={`w-4 h-4 ${
                            i < test.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-350 dark:text-slate-800'
                          }`}
                        />
                      </span>
                    ))}
                  </div>

                {/* Review Copy */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal italic">
                  &ldquo;{test.review}&rdquo;
                </p>
              </div>

              {/* Bio Footer info */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-150 dark:border-slate-800/80 z-10 relative">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200 dark:border-slate-800 shrink-0">
                  <img
                    src={test.avatarUrl}
                    alt={test.clientName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-left">
                  <h4 className="font-extrabold text-sm text-slate-950 dark:text-white leading-tight">
                    {test.clientName}
                  </h4>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mt-1">
                    {test.role} • <span className="text-[#FE7F2D]">{test.company}</span>
                  </p>
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
