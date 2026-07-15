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

      <div className="relative z-10 flex flex-col items-center text-center">

        <h1 className="flex flex-col items-center gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <span className="text-6xl md:text-9xl font-heading font-normal tracking-tight text-stone-950 italic px-4">
              Maryam Badhib
            </span>
            {/* Decorative badge — hidden from screen readers */}
            <motion.span
              aria-hidden="true"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 12 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-10 -right-16 bg-yellow-400 text-stone-900 text-[10px] px-3 py-1 font-bold rounded-full border-2 border-white shadow-lg md:block hidden"
            >
              Building with Joy ✨
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-stone-500 text-base md:text-xl font-light tracking-[0.15em] uppercase"
          >
            UI/UX Designer &amp; Front-End Developer
          </motion.p>
        </h1>

        {/* CTA Buttons — fixed: no button inside anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-stretch gap-4 mt-4"
        >
          {/* Primary — View Work */}
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View my work — scroll to projects section"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-transparent bg-stone-950 text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-pink-400 hover:text-stone-950 transition-all duration-500 shadow-lg"
          >
            View My Work
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </motion.a>

          {/* Secondary — Resume */}
          <motion.a
            href={`${import.meta.env.BASE_URL}assets/Images/Mariam Abdulrahman Mohammed Badhib.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download my resume (opens PDF in new tab)"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-stone-300 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full hover:border-pink-400 hover:text-pink-400 transition-all duration-500"
          >
            Resume
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </motion.a>
        </motion.div>

      </div>

      {/* Floating decorative elements — aria-hidden so screen readers skip them */}
      <motion.span
        aria-hidden="true"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-40 text-4xl opacity-20 hidden md:block"
      >🌸</motion.span>
      <motion.span
        aria-hidden="true"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-1/4 right-40 text-4xl opacity-20 hidden md:block"
      >🍋</motion.span>
    </section>
  );
}