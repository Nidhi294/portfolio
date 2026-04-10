'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Intro sequence: hold for a moment, then fade out text, then background
    const timer = setTimeout(() => {
      setShow(false);
      // Ensure scroll is unlocked when it fades away
      document.body.style.overflow = '';
    }, 4500);
    
    // Prevent scrolling while intro is active
    document.body.style.overflow = 'hidden';
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro-container"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut', delay: 0.5 } }} // Background fades out smoothly
        >
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)', transition: { duration: 1, ease: 'easeIn' } }} // Text fades out slightly before background
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-2">
              &quot;Less noise.
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-400">
              More emotion.&quot;
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
