/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400); // Small pause for UX polish
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="page-loader"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-64 space-y-4">
          <div className="flex justify-between items-end text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-bold text-lg tracking-wider"
            >
              HANIS SIDDIQ
            </motion.div>
            <span className="font-mono text-xs text-[#FE7F2D]">{Math.min(progress, 100)}%</span>
          </div>
          
          <div className="h-[2px] w-full bg-neutral-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#FE7F2D]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-center font-mono text-[10px] uppercase tracking-widest text-neutral-500"
          >
            Deploying Digital Environment
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
