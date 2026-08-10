import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#FAF9F6] px-8 py-20"
      aria-label="Introduction"
    >
      {/* Background Orbs — decorative, hidden from screen readers */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[100px] -z-10"
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full">

        <div className="flex flex-col items-center gap-8 mb-14 w-full max-w-4xl mx-auto">
          {/* Overline / Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <div className="w-8 md:w-16 h-[1px] bg-stone-400"></div>
            <span className="text-stone-600 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
              UI/UX Designer &amp; Front-End Developer
            </span>
            <div className="w-8 md:w-16 h-[1px] bg-stone-400"></div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-normal tracking-tight text-stone-950 px-4"
          >
            Mariam <span className="italic font-light text-pink-400">Badhib</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-stone-500 text-base md:text-xl font-light leading-relaxed max-w-2xl text-center px-4"
          >
            I help startups and digital businesses design and build high-performing web applications using Figma, React, and Tailwind.          </motion.p>
        </div>
    
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          {/* Primary — Let's Work Together */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Let's work together — scroll to contact section"
            className="flex items-center justify-center gap-3 px-10 py-4 bg-pink-400 text-stone-950 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-pink-500 transition-colors duration-300 shadow-[0_10px_30px_rgba(244,114,182,0.3)]"
          >
            Let's Work Together
          </motion.a>

          {/* Secondary — My Work */}
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="View my work"
            className="flex items-center justify-center gap-3 px-10 py-4 border border-stone-300 text-stone-700 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-stone-100 transition-colors duration-300"
          >
            My Work
           
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}