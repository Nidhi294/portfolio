'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 (0 to 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2 (delayed, 35% to 60%)
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [100, 0, 0, -100]);

  // Section 3 (delayed, 70% to 95%)
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1.0], [100, 0, 0, -100]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
            Nidhi Gattani.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Filmmaker & Video Editor.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-start px-8 md:pl-[20%]"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-lg leading-tight">
            Crafting engaging visual narratives.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-end px-8 md:pr-[20%] text-right ml-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white max-w-lg leading-tight">
            Blending authenticity<br/>with innovation.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
