import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const Sparkle = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#eb4799"
    strokeWidth="1.5"
    strokeLinecap="round"
    className={className}
  >
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#FAF9F6] px-8 py-20"
      aria-label="Introduction"
    >
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#eb4799]/10 rounded-full blur-[120px] -z-10 pointer-events-none transform-gpu will-change-transform"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[100px] -z-10 pointer-events-none transform-gpu will-change-transform"
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full">

        <div className="flex flex-col items-center gap-8 mb-12 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="w-6 md:w-12 h-[1px] bg-stone-300"></div>
            <span className="text-stone-600 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
              Brand-Led Web Designer &amp; Front-End Developer
            </span>
            <div className="w-6 md:w-12 h-[1px] bg-stone-300"></div>
          </motion.div>

          {/* Main Title with Floating Sparkles */}
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-6 md:-top-8 md:-right-12 pointer-events-none"
            >
              <Sparkle className="w-6 h-6 md:w-9 md:h-9" />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-6 md:-bottom-4 md:-left-10 pointer-events-none"
            >
              <Sparkle className="w-5 h-5 md:w-7 md:h-7" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-8xl lg:text-9xl font-normal tracking-tight text-stone-950 px-4 leading-none font-bold"
            >
              Mariam <span className="font-bold text-[#eb4799]">Badhib</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-stone-600 text-base md:text-xl font-light leading-relaxed max-w-2xl text-center px-4"
          >
            I design clear, distinctive digital experiences for brands — from UX/UI and visual direction to clean front-end development.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full max-w-xs sm:max-w-none"
        >
          {/* 1st Button — My Work */}
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="View my work"
            className="group flex items-center justify-center gap-2 w-full sm:w-56 py-4 border border-stone-300 text-stone-700 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-stone-100 hover:border-stone-400 transition-all duration-300 shrink-0"
          >
            My Work
            <ArrowDown className="w-4 h-4 text-stone-500 transition-transform duration-300 group-hover:translate-y-0.5" />
          </motion.a>

          {/* 2nd Button — Let's Work Together */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Let's work together — scroll to contact section"
            className="group flex items-center justify-center gap-2 w-full sm:w-56 py-4 bg-[#eb4799] text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#d63987] transition-all duration-300 shadow-[0_10px_25px_rgba(235,71,153,0.3)] shrink-0"
          >
            Let's Work Together
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}