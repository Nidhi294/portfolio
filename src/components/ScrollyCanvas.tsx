'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 90; // frames from 000 to 089

const currentFrame = (index: number) => 
  `/sequence/frame_${index.toString().padStart(3, '0')}.png`;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all images properly
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
      if (loadedCount === FRAME_COUNT) {
        setIsReady(true);
      }
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Continue even if one fails
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    // Draw initial frame once the first image is loaded
    if (images.length > 0 && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = images[0];
      
      const drawImage = () => {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
           centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);  
      };

      if (img.complete) {
        drawImage();
      } else {
        img.onload = drawImage;
      }
    }
  }, [images]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentImg = images[Math.floor(latest)];
    if (!currentImg) return;

    // Use object-fit cover logic for drawing to canvas
    const hRatio = canvas.width / currentImg.width;
    const vRatio = canvas.height / currentImg.height;
    const ratio = Math.max(hRatio, vRatio); // Max for cover, Min for contain
    const centerShift_x = (canvas.width - currentImg.width * ratio) / 2;
    const centerShift_y = (canvas.height - currentImg.height * ratio) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImg, 0, 0, currentImg.width, currentImg.height,
       centerShift_x, centerShift_y, currentImg.width * ratio, currentImg.height * ratio);  
  });

  useEffect(() => {
    // Handle resizing to keep canvas dimensions matched to window
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      
      // Need to redraw current frame on resize
      if (images.length > 0) {
        const ctx = canvas.getContext('2d');
        const currentImg = images[Math.floor(frameIndex.get())];
        if (ctx && currentImg) {
          const hRatio = canvas.width / currentImg.width;
          const vRatio = canvas.height / currentImg.height;
          const ratio = Math.max(hRatio, vRatio);
          const centerShift_x = (canvas.width - currentImg.width * ratio) / 2;
          const centerShift_y = (canvas.height - currentImg.height * ratio) / 2;
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(currentImg, 0, 0, currentImg.width, currentImg.height,
             centerShift_x, centerShift_y, currentImg.width * ratio, currentImg.height * ratio);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212] p-4 sm:p-6 md:p-8 lg:p-12">
        
        {/* Loading Overlay */}
        {!isReady && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
            <div className="text-center">
              <div className="text-white text-xl font-light mb-4 tracking-widest uppercase">Loading Sequence</div>
              <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="text-white/40 text-sm mt-2 font-mono">{loadingProgress}%</div>
            </div>
          </div>
        )}

        {/* Outer off-white film container (3-row layout with 50% opacity) */}
        <div className="relative w-full h-full bg-[#f4f4f0]/50 flex flex-col shadow-2xl rounded-sm overflow-hidden">
          
          {/* Top Perforations (1cm x 1cm square windows) */}
          <div className="h-[14mm] w-full flex-shrink-0 p-[2mm]">
            <div 
              className="w-full h-full bg-[linear-gradient(to_right,#000_10mm,transparent_10mm)] bg-[size:15mm_100%]"
            />
          </div>

          <div className="flex-grow flex w-full min-h-0">
            {/* Left Perforations (1cm x 1cm square windows) */}
            <div className="w-[14mm] flex-shrink-0 h-full p-[2mm]">
              <div 
                className="w-full h-full bg-[linear-gradient(to_bottom,#000_10mm,transparent_10mm)] bg-[size:100%_15mm]"
              />
            </div>

            {/* Center Image/Canvas Area */}
            <div className="flex-grow h-full relative z-10 w-full px-2">
              <div className="w-full h-full overflow-hidden rounded-[2px] bg-[#121212] shadow-inner">
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-full block" 
                />
              </div>
            </div>

            {/* Right Perforations (1cm x 1cm square windows) */}
            <div className="w-[14mm] flex-shrink-0 h-full p-[2mm]">
              <div 
                className="w-full h-full bg-[linear-gradient(to_bottom,#000_10mm,transparent_10mm)] bg-[size:100%_15mm]"
              />
            </div>
          </div>

          {/* Bottom Perforations (1cm x 1cm square windows) */}
          <div className="h-[14mm] w-full flex-shrink-0 p-[2mm]">
            <div 
              className="w-full h-full bg-[linear-gradient(to_right,#000_10mm,transparent_10mm)] bg-[size:15mm_100%]"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
