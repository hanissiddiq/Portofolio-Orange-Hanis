/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';

interface HeroProps {
  onOpenCV: () => void;
  theme: 'light' | 'dark';
}

export default function Hero({ onOpenCV, theme }: HeroProps) {
  const { profile } = portfolioData;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // High-performance canvas particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseDirection: number;
    }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Spawn drift particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 60);
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        pulseDirection: Math.random() > 0.5 ? 1 : -1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const color = theme === 'dark' ? '254, 127, 45' : '35, 61, 77'; // Orange in dark, Blue-gray in light
      
      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce/Wrap boundaries
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Pulsate opacity for a soft glimmering look
        p.opacity += 0.005 * p.pulseDirection;
        if (p.opacity > 0.7) p.pulseDirection = -1;
        if (p.opacity < 0.1) p.pulseDirection = 1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = `rgb(${color})`;
        ctx.fill();
      });

      // Clear shadow properties for performance
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`Hi ${profile.firstName}, I viewed your portfolio and would like to discuss a project with you.`);
    window.open(`https://wa.me/${profile.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleHireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#050505] px-6 py-20"
    >
      {/* Dynamic drifting canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Decorative gradient glowing blobs - Professional Polish */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#233D4D]/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#FE7F2D]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#FE7F2D]/5 dark:bg-[#FE7F2D]/3 blur-[80px] md:blur-[100px] pointer-events-none z-0 animate-pulse duration-[8000ms]" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-8 flex flex-col items-start space-y-6 md:space-y-8 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] md:text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-emerald-400 uppercase">
              Available for Freelance
            </span>
          </motion.div>

          {/* Core Name and Title */}
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm font-mono tracking-widest text-[#FE7F2D] uppercase font-bold"
            >
              Architecting Premium Software
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-slate-950 dark:text-white"
            >
              {profile.fullName}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl font-medium text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              {profile.title}
            </motion.p>
          </div>

          {/* Bio introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed"
          >
            {profile.introduction}
          </motion.p>

          {/* Contact Cards Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-6 w-full max-w-2xl"
          >
            <div className="flex items-center gap-2">
              <LucideIcon name="MapPin" className="w-4 h-4 text-[#FE7F2D]" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Mail" className="w-4 h-4 text-[#FE7F2D]" />
              <a href={`mailto:${profile.email}`} className="hover:text-[#FE7F2D] transition-colors">{profile.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <LucideIcon name="Phone" className="w-4 h-4 text-[#FE7F2D]" />
              <a href={`tel:${profile.phone}`} className="hover:text-[#FE7F2D] transition-colors">{profile.phone}</a>
            </div>
          </motion.div>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <button
              onClick={handleHireClick}
              className="px-8 py-4 text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-black hover:bg-[#FE7F2D] dark:hover:bg-[#FE7F2D] dark:hover:text-white rounded-full hover:scale-105 active:scale-95 shadow-lg shadow-slate-950/10 dark:shadow-white/5 transition-all cursor-pointer"
            >
              Hire Me
            </button>
            <button
              onClick={onOpenCV}
              className="px-8 py-4 text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Download CV
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full hover:scale-105 active:scale-95 shadow-md shadow-emerald-500/10 transition-all cursor-pointer"
            >
              <LucideIcon name="MessageSquare" className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column illustration placeholder or abstract card */}
        <div className="lg:col-span-4 hidden lg:flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-square max-w-[340px] rounded-3xl p-4 bg-gradient-to-tr from-[#233D4D] via-slate-900 to-[#FE7F2D] shadow-2xl relative group overflow-hidden"
          >
            {/* Inner Glassmorphism Panel */}
            <div className="absolute inset-0.5 rounded-[22px] bg-slate-950/90 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden">
              {/* Top Meta Lines */}
              <div className="flex justify-between items-start">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase">core_node.tsx</span>
              </div>

              {/* Middle Graphic / Tech Orbit */}
              <div className="my-auto flex flex-col items-center justify-center py-6 relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="w-36 h-36 rounded-full border border-dashed border-slate-800 flex items-center justify-center relative"
                >
                  <div className="absolute -top-3 w-6 h-6 rounded-lg bg-[#FE7F2D]/10 border border-[#FE7F2D] flex items-center justify-center">
                    <LucideIcon name="Atom" className="w-3.5 h-3.5 text-[#FE7F2D]" />
                  </div>
                  <div className="absolute -bottom-3 w-6 h-6 rounded-lg bg-[#FF9F5A]/10 border border-[#FF9F5A] flex items-center justify-center">
                    <LucideIcon name="Layers" className="w-3.5 h-3.5 text-[#FF9F5A]" />
                  </div>
                  <div className="w-24 h-24 rounded-full border border-dashed border-[#FE7F2D]/20 flex items-center justify-center" />
                </motion.div>

                {/* Core Brand Glimmer */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-extrabold text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-white via-slate-100 to-[#FE7F2D]">HS</span>
                  <span className="font-mono text-[8px] text-[#FE7F2D] tracking-widest uppercase mt-0.5">Verified</span>
                </div>
              </div>

              {/* Bottom Resume details code block */}
              <div className="space-y-2 border-t border-slate-900 pt-4">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-slate-500">EXPERIENCE</span>
                  <span className="text-white font-bold">{profile.yearsOfExperience}+ Years</span>
                </div>
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-slate-500">HQ</span>
                  <span className="text-white font-bold">{profile.location.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
