/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

interface DownloadCVProps {
  onOpenCV: () => void;
}

export default function DownloadCV({ onOpenCV }: DownloadCVProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="download-cv" className="py-20 bg-slate-50 dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative overflow-hidden">
      
      {/* Visual glowing blob background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#FE7F2D]/5 blur-[80px] md:blur-[120px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 z-10 relative">
        
        {/* Main callout box */}
        <Reveal className="p-8 md:p-12 rounded-3xl bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 shadow-xl text-center space-y-8 max-w-3xl mx-auto relative overflow-hidden group">
          
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FE7F2D] via-[#FF9F5A] to-[#FE7F2D]" />

          <div className="mx-auto w-16 h-16 rounded-2xl bg-[#FE7F2D]/10 border border-[#FE7F2D]/25 flex items-center justify-center text-[#FE7F2D] shadow-inner mb-2 group-hover:scale-105 transition-transform duration-300">
            <LucideIcon name="FileSignature" className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight text-slate-950 dark:text-white">
              Curriculum Vitae
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Access the complete professional profile of a Senior Software Architect. Get instant offline credentials, clear academic pathways, and comprehensive work history formatted for direct printing or saving as high-resolution vectors.
            </p>
          </div>

          {/* Interactive Actions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            
            {/* View CV button */}
            <button
              onClick={onOpenCV}
              className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 hover:border-[#FE7F2D] dark:hover:border-[#FE7F2D] text-slate-800 dark:text-slate-250 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <LucideIcon name="Eye" className="w-5 h-5 text-[#FE7F2D]" />
              <div className="text-left">
                <span className="block text-xs font-bold font-display">View Online CV</span>
                <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500">Interactive Resume</span>
              </div>
            </button>

            {/* Print CV button */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 hover:border-[#FE7F2D] dark:hover:border-[#FE7F2D] text-slate-800 dark:text-slate-250 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm cursor-pointer"
            >
              <LucideIcon name="Printer" className="w-5 h-5 text-[#FE7F2D]" />
              <div className="text-left">
                <span className="block text-xs font-bold font-display">Print Portfolio CV</span>
                <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-500">Direct Paper spool</span>
              </div>
            </button>

            {/* Download PDF button (triggers same optimized print to PDF workflow natively) */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-950 dark:bg-slate-100 text-white dark:text-black hover:bg-[#FE7F2D] dark:hover:bg-[#FE7F2D] dark:hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
            >
              <LucideIcon name="Download" className="w-5 h-5" />
              <div className="text-left">
                <span className="block text-xs font-bold font-display">Download PDF CV</span>
                <span className="block text-[9px] font-mono text-slate-400 dark:text-slate-550">Vector PDF file</span>
              </div>
            </button>

          </div>

          {/* Verification line */}
          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
            *PDF files generated automatically capture complete micro-details and layout scales for Standard A4/US Letter layouts.
          </p>

        </Reveal>
      </div>

    </section>
  );
}
