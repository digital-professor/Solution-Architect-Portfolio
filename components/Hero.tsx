import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollY } = useScroll();

  const blur = useTransform(scrollY, [0, viewportHeight / 2], ["blur(0px)", "blur(20px)"]);
  const scale = useTransform(scrollY, [0, viewportHeight], [1, 1.1]);
  const bgOpacity = useTransform(scrollY, [0, viewportHeight], [1, 0.4]);
  const textOpacity = useTransform(scrollY, [0, viewportHeight * 0.4], [1, 0]);
  const textY = useTransform(scrollY, [0, viewportHeight / 2], [0, 50]);

  return (
    <section 
      ref={containerRef} 
      className="hero-sticky-wrapper relative h-screen w-full overflow-hidden sticky top-0 z-0 bg-slate-950"
    >
      {/* 
         Layer 1: Fallback Gradient 
         This is a separate element sitting behind the image. 
         It guarantees the colors are visible even if the image fails to load.
      */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(circle at 0% 100%, rgba(180, 80, 40, 1) 0%, transparent 50%), 
            radial-gradient(circle at 100% 0%, rgba(50, 90, 160, 1) 0%, transparent 50%),
            #020617
          `,
          filter: blur,
          scale: scale,
          opacity: bgOpacity,
        }}
      />

      {/* 
         Layer 2: Hero Image
         Sits on top of the gradient. If transparent or missing, Layer 1 shows through.
      */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: blur,
          scale: scale,
          opacity: bgOpacity,
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      {/* Hero Content Overlay */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center space-y-8 px-4 text-center md:px-8"
        style={{
          opacity: textOpacity,
          y: textY
        }}
      >
        <div className="space-y-4 max-w-[900px]">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
            {title}
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-slate-100 md:text-xl leading-relaxed drop-shadow-lg font-medium">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-4 min-[400px]:flex-row pt-4">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-bold text-slate-900 shadow-xl transition-all hover:bg-slate-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300"
          >
            View Case Studies
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-md px-8 text-sm font-bold text-white shadow-xl transition-all hover:bg-white/20 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};