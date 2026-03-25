"use client";

import { motion, MotionValue, useTransform, useSpring } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Apply a buttery smooth physics curve to text appearances
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  // Section 1 (0% to 15%)
  const opacity1 = useTransform(smoothProgress, [0, 0.05, 0.1, 0.15], [1, 1, 0, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.15], [0, -40]);

  // Section 2 (20% to 45%)
  const opacity2 = useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.15, 0.25, 0.35, 0.45], [40, 0, 0, -40]);

  // Section 3 (50% to 80%)
  const opacity3 = useTransform(smoothProgress, [0.45, 0.55, 0.65, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.45, 0.55, 0.65, 0.8], [40, 0, 0, -40]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 font-sans">
      
      {/* Section 1: Intro */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6">
          Abhik Kumar Panda
        </h1>
        <p className="text-xl md:text-3xl text-white/50 font-light tracking-wide">
          Full Stack Developer & ML Enthusiast
        </p>
      </motion.div>

      {/* Section 2: Statement 1 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 px-8 md:px-24 flex flex-col items-start justify-center max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
          Building scalable <br />
          <span className="text-white/40">applications & AI systems.</span>
        </h2>
      </motion.div>

      {/* Section 3: Statement 2 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 px-8 md:px-24 flex flex-col items-end justify-center text-right"
      >
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
            Bridging software <br />
            <span className="text-white/40">& data-driven execution.</span>
          </h2>
        </div>
      </motion.div>
      
    </div>
  );
}
