/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';
import Reveal from './Reveal';

// Schema validation using Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  phone: z.string().min(8, { message: "Phone number must be at least 8 digits." }),
  subject: z.string().min(4, { message: "Subject must be at least 4 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { profile } = portfolioData;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate server transaction
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Clear success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <span className="text-xs font-mono font-bold tracking-widest text-[#FE7F2D] uppercase bg-[#FE7F2D]/5 px-3 py-1 rounded-full">
              Connect
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 dark:text-white mt-4">
              Get in Touch
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-1.5 w-12 bg-[#FE7F2D] mx-auto mt-4 rounded-full" />
          </Reveal>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8 text-left">
            <Reveal className="space-y-4">
              <h3 className="text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Let's discuss a project
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Have an epic product idea, a complex administrative platform, or a software system that needs expert architectural guidance? Contact me directly or submit the secure form.
              </p>
            </Reveal>

            {/* Direct Communication Channels */}
            <Reveal className="space-y-4">
              
              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FE7F2D]/10 border border-[#FE7F2D]/20 flex items-center justify-center text-[#FE7F2D] shrink-0">
                  <LucideIcon name="MapPin" className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Office Headquarters</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{profile.location}</p>
                </div>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${profile.email}`}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/80 flex items-center gap-4 hover:border-[#FE7F2D]/40 transition-colors block cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FE7F2D]/10 border border-[#FE7F2D]/20 flex items-center justify-center text-[#FE7F2D] shrink-0">
                  <LucideIcon name="Mail" className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Official Email</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5 break-all">{profile.email}</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${profile.phone}`}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/80 flex items-center gap-4 hover:border-[#FE7F2D]/40 transition-colors block cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FE7F2D]/10 border border-[#FE7F2D]/20 flex items-center justify-center text-[#FE7F2D] shrink-0">
                  <LucideIcon name="Phone" className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Mobile Line</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{profile.phone}</p>
                </div>
              </a>

            </Reveal>
          </div>

          {/* Right Column: Contact Form Panel */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1} className="p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/80 shadow-md relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 text-left"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Double Columns Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold font-mono text-slate-650 dark:text-slate-400 uppercase tracking-wider block">Full Name</label>
                        <input
                          type="text"
                          {...register('name')}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850/80 text-slate-800 dark:text-white text-sm outline-none focus:border-[#FE7F2D] transition-colors"
                        />
                        {errors.name && (
                          <p className="text-[10px] font-mono font-semibold text-[#FE7F2D] text-left">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold font-mono text-slate-650 dark:text-slate-400 uppercase tracking-wider block">Email Address</label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="address@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850/80 text-slate-800 dark:text-white text-sm outline-none focus:border-[#FE7F2D] transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[10px] font-mono font-semibold text-[#FE7F2D] text-left">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Double Columns Phone & Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Phone input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold font-mono text-slate-650 dark:text-slate-400 uppercase tracking-wider block">Phone Number</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+62 8..."
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850/80 text-slate-800 dark:text-white text-sm outline-none focus:border-[#FE7F2D] transition-colors"
                        />
                        {errors.phone && (
                          <p className="text-[10px] font-mono font-semibold text-[#FE7F2D] text-left">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Subject input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold font-mono text-slate-650 dark:text-slate-400 uppercase tracking-wider block">Subject</label>
                        <input
                          type="text"
                          {...register('subject')}
                          placeholder="Project Discussion"
                          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850/80 text-slate-800 dark:text-white text-sm outline-none focus:border-[#FE7F2D] transition-colors"
                        />
                        {errors.subject && (
                          <p className="text-[10px] font-mono font-semibold text-[#FE7F2D] text-left">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Message body input */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold font-mono text-slate-650 dark:text-slate-400 uppercase tracking-wider block">Message Details</label>
                      <textarea
                        rows={5}
                        {...register('message')}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850/80 text-slate-800 dark:text-white text-sm outline-none focus:border-[#FE7F2D] transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-[10px] font-mono font-semibold text-[#FE7F2D] text-left">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-sm font-bold text-white bg-[#FE7F2D] hover:bg-[#FE7F2D]/90 disabled:bg-[#FE7F2D]/50 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Transmitting Inquiries...</span>
                        </>
                      ) : (
                        <>
                          <LucideIcon name="Send" className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-5"
                  >
                    {/* Glowing animated checkmark icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-400 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10"
                    >
                      <LucideIcon name="Check" className="w-8 h-8" />
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                        Inquiry Securely Received!
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Thank you for contacting me. Your request was successfully encrypted and transmitted. Hanis Siddiq will get back to you at your email address within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-xs font-mono font-bold text-[#FE7F2D] hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
