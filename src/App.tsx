/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './hooks/useTheme';
import { portfolioData } from './data/portfolioData';
import { Project } from './types';

// Component imports
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import FeaturedProjects from './components/FeaturedProjects';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import ProjectTimeline from './components/ProjectTimeline';
import Testimonials from './components/Testimonials';
import Certificates from './components/Certificates';
import DownloadCV from './components/DownloadCV';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import ResumeView from './components/ResumeView';
import LucideIcon from './components/LucideIcon';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [showCV, setShowCV] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Smooth scroll configuration
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Sync scroll lock with Modal state
  useEffect(() => {
    if (showCV || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showCV, selectedProject]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setActiveGalleryIndex(0);
  };

  return (
    <>
      {/* 1. Page Loader entrance experience */}
      {loading && <PageLoader onComplete={() => setLoading(false)} />}

      {/* Main Website Wrapper: hidden during print to let CV print perfectly */}
      <div className={`min-h-screen font-sans bg-white dark:bg-[#050505] text-slate-800 dark:text-slate-200 transition-colors duration-300 print:hidden ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Navigation Header */}
        <Header theme={theme} toggleTheme={toggleTheme} onOpenCV={() => setShowCV(true)} />

        {/* Core Layout Sections */}
        <main className="relative overflow-x-hidden">
          
          {/* Section 1: Hero */}
          <Hero onOpenCV={() => setShowCV(true)} theme={theme} />

          {/* Section 2: About Me */}
          <About />

          {/* Section 3: Work Experience */}
          <WorkExperience />

          {/* Section 7: Featured Projects */}
          <FeaturedProjects onOpenProject={handleOpenProject} />

          {/* Section 4: Project Portfolio */}
          <Portfolio />

          {/* Section 5: Skills */}
          <Skills />

          {/* Section 6: Tech Stack */}
          <TechStack />

          {/* Section 8: Project Timeline */}
          <ProjectTimeline onOpenProject={handleOpenProject} />

          {/* Section 9: Testimonials */}
          <Testimonials />

          {/* Section 10: Certificates */}
          <Certificates />

          {/* Section 11: Download CV */}
          <DownloadCV onOpenCV={() => setShowCV(true)} />

          {/* Section 12: Contact */}
          <Contact />

        </main>

        {/* Section 14: WhatsApp Floating Button */}
        <WhatsAppButton />

        {/* Section 15: Footer */}
        <Footer onOpenCV={() => setShowCV(true)} />

        {/* Scroll To Top button */}
        <ScrollToTop />

      </div>

      {/* CV / Resume Interactive Modal Overlay */}
      <AnimatePresence>
        {showCV && (
          <div id="cv-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto print:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCV(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="w-full max-w-4xl z-10 relative"
            >
              <ResumeView onClose={() => setShowCV(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Combined Detail Project Modal Launcher from Featured/Timeline */}
      <AnimatePresence>
        {selectedProject && (
          <div id="project-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto print:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 relative text-left"
            >
              {/* Close Button Floating */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer transition-colors"
                aria-label="Close details"
              >
                <LucideIcon name="X" className="w-5 h-5" />
              </button>

              {/* Hero Image */}
              <div className="relative aspect-[21/10] bg-slate-900 overflow-hidden">
                <img
                  src={activeGalleryIndex === 0 ? selectedProject.imageUrl : selectedProject.gallery[activeGalleryIndex - 1]}
                  alt={selectedProject.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 md:left-8 right-6">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-[#FE7F2D] text-white rounded-md">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-display font-black text-white mt-2 leading-tight">
                    {selectedProject.name}
                  </h2>
                </div>
              </div>

              {/* Description & metadata columns */}
              <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Main */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Project Overview</h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Core Features Built</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <LucideIcon name="CheckCircle2" className="w-4 h-4 text-[#FE7F2D] shrink-0 mt-0.5" />
                          <span className="leading-normal">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.gallery.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Screenshots Gallery</h4>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setActiveGalleryIndex(0)}
                          className={`w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0 ${
                            activeGalleryIndex === 0 ? 'border-[#FE7F2D]' : 'border-slate-200 dark:border-slate-800'
                          }`}
                        >
                          <img src={selectedProject.imageUrl} alt="Hero thumb" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </button>
                        {selectedProject.gallery.map((imgUrl, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveGalleryIndex(i + 1)}
                            className={`w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0 ${
                              activeGalleryIndex === i + 1 ? 'border-[#FE7F2D]' : 'border-slate-200 dark:border-slate-800'
                            }`}
                          >
                            <img src={imgUrl} alt={`Thumb ${i + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-slate-100 lg:dark:border-slate-900 lg:pl-8">
                  <div className="space-y-4 font-mono text-xs">
                    <div className="space-y-1">
                      <span className="text-slate-400 block uppercase font-bold text-[10px]">Client / Partner</span>
                      <span className="text-slate-900 dark:text-white font-semibold text-sm">{selectedProject.client}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-400 block uppercase font-bold text-[10px]">Assigned Role</span>
                      <span className="text-slate-900 dark:text-white font-semibold text-sm">{selectedProject.role}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-400 block uppercase font-bold text-[10px]">Project Duration</span>
                      <span className="text-slate-900 dark:text-white font-semibold text-sm">{selectedProject.duration}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-slate-400 block uppercase font-bold text-[10px]">Release Status</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold text-[10px] inline-block mt-0.5">
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] font-mono font-bold rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-900">
                    {selectedProject.liveDemoUrl && (
                      <a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-[#FE7F2D] hover:bg-[#FE7F2D]/90 rounded-xl shadow-md transition-colors text-center cursor-pointer"
                      >
                        <LucideIcon name="ExternalLink" className="w-4 h-4" />
                        <span>View Live Demo</span>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors text-center cursor-pointer"
                      >
                        <LucideIcon name="Github" className="w-4 h-4" />
                        <span>Browse Repository</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Hidden CV layout shown ONLY when printing (Vector standard A4 print sheets) */}
      <ResumeView isPrintOnly />
    </>
  );
}
