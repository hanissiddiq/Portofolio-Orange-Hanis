/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';

export default function WhatsAppButton() {
  const { profile } = portfolioData;

  const handleClick = () => {
    const text = encodeURIComponent(`Hi ${profile.firstName}, I viewed your premium portfolio and would love to collaborate on a software project.`);
    window.open(`https://wa.me/${profile.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <motion.button
      id="whatsapp-float-btn"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/35 border border-emerald-500 flex items-center justify-center transition-all cursor-pointer"
      aria-label="Contact Hanis on WhatsApp"
    >
      {/* Small floating pulse aura */}
      <span className="absolute inset-0 rounded-full border border-emerald-400 animate-ping opacity-30" />
      <LucideIcon name="MessageSquare" className="w-6 h-6" />
    </motion.button>
  );
}
