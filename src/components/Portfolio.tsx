/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

export default function Portfolio() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  // Extract unique categories for filter tabs
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Project Portfolio
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Filter Navigation Tabs */}
        <Reveal className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold tracking-tight uppercase rounded-full border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FE7F2D] border-[#FE7F2D] text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900/30 border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-[#FE7F2D]/30 dark:hover:border-[#FE7F2D]/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </Reveal>

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-[#FE7F2D]/30 transition-all duration-300 flex flex-col h-full text-left cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Product image with overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950 shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex gap-1.5 items-center">
                    <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10">
                      {project.status}
                    </span>
                    <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md bg-[#FE7F2D]/90 backdrop-blur-md text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Description Panel */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-lg text-slate-950 dark:text-white leading-snug group-hover:text-[#FE7F2D] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="space-y-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[9px] font-mono font-bold bg-slate-100 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-slate-100 dark:bg-slate-950 text-[#FE7F2D] border border-slate-200/40 dark:border-slate-800 rounded">
                          +{project.technologies.length - 4} More
                        </span>
                      )}
                    </div>

                    {/* Launch Indicators */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#FE7F2D]">
                      <span>Read Project Case</span>
                      <LucideIcon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Complete Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div id="project-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              
              {/* Darkened backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Window Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                className="bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 relative text-left"
              >
                {/* Close Button Floating */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white cursor-pointer transition-colors"
                  aria-label="Close project modal"
                >
                  <LucideIcon name="X" className="w-5 h-5" />
                </button>

                {/* Hero Showcase Image */}
                <div className="relative aspect-[21/10] bg-slate-900 overflow-hidden">
                  <img
                    src={activeGalleryIndex === 0 ? selectedProject.imageUrl : selectedProject.gallery[activeGalleryIndex - 1]}
                    alt={selectedProject.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Hero Title Overlay */}
                  <div className="absolute bottom-6 left-6 md:left-8 right-6">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-[#FE7F2D] text-white rounded-md">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-display font-black text-white mt-2 leading-tight">
                      {selectedProject.name}
                    </h2>
                  </div>
                </div>

                {/* Detail Information Body */}
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Main column */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* General explanation */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Project Overview</h4>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Features checklist */}
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

                    {/* Gallery Carousel Grid */}
                    {selectedProject.gallery.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Screenshots Gallery</h4>
                        <div className="flex flex-wrap gap-2">
                          {/* Hero Thumbnail */}
                          <button
                            onClick={() => setActiveGalleryIndex(0)}
                            className={`w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0 ${
                              activeGalleryIndex === 0 ? 'border-[#FE7F2D]' : 'border-slate-200 dark:border-slate-800'
                            }`}
                          >
                            <img src={selectedProject.imageUrl} alt="Hero thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                          </button>
                          
                          {/* Extra thumbs */}
                          {selectedProject.gallery.map((imgUrl, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveGalleryIndex(i + 1)}
                              className={`w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer transition-all shrink-0 ${
                                activeGalleryIndex === i + 1 ? 'border-[#FE7F2D]' : 'border-slate-200 dark:border-slate-800'
                              }`}
                            >
                              <img src={imgUrl} alt={`Thumbnail ${i + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Metadata Sidebar */}
                  <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-slate-100 lg:dark:border-slate-900 lg:pl-8">
                    {/* Meta stats block */}
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

                    {/* Tech tag list */}
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

                    {/* Live & github actions */}
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

      </div>
    </section>
  );
}
