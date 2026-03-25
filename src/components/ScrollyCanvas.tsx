"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;
const URL_PREFIX = "/sequence/frame_";
const URL_SUFFIX = "_delay-0.067s.webp";

// Helper to pad numbers with leading zeros
const pad = (num: number, size: number) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring physics model to dramatically smooth out the scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `${URL_PREFIX}${pad(i, 3)}${URL_SUFFIX}`;
      // Force asynchronous decoding so the main thread doesn't pause during scrolling
      img.decode().catch(() => {});
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const currentIndexRef = useRef(-1);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    
    // Safety check bound arrays
    let safeIndex = Math.round(index);
    if (safeIndex >= FRAME_COUNT) safeIndex = FRAME_COUNT - 1;
    if (safeIndex < 0) safeIndex = 0;

    // PERFORMANCE FIX: Only redraw if the frame actually changed
    if (currentIndexRef.current === safeIndex) return;
    currentIndexRef.current = safeIndex;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    requestAnimationFrame(() => {
      // Get dimensions directly from canvas attributes set in resize handler
      const width = canvas.width;
      const height = canvas.height;
      
      const img = images[safeIndex];
      if (!img || img.width === 0) return; // Wait until loaded

      // object-fit: cover logic
      const imgRatio = img.width / img.height;
      const canvasRatio = width / height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawHeight = height;
        drawWidth = height * imgRatio;
        offsetY = 0;
        offsetX = (width - drawWidth) / 2;
      }

      // Hardware acceleration clear and draw
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    });
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(latest);
  });

  // Handle resize and initial render
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };

    window.addEventListener("resize", handleResize);
    
    // Once images array is populated, we can initialize canvas dimensions and render
    if (images.length > 0) {
      handleResize();
      if (images[0].complete) {
        renderFrame(0);
      } else {
        images[0].onload = () => renderFrame(0);
      }
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
