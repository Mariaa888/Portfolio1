import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Zap, ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#FAF9F6] px-8 py-20">
      {/* Playful Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[100px] -z-10"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Playful Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="group cursor-default flex items-center gap-2 text-violet-500 text-sm font-semibold tracking-[0.2em] uppercase mb-10 px-6 py-2.5  duration-300"
        >

        </motion.div>

        <h1 className="flex flex-col items-center gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <span className="text-6xl md:text-9xl font-heading font-normal tracking-tight text-stone-950 italic px-4 select-none">
              Maryam Badhib
            </span>
            {/* Playful stickers */}
            <motion.span
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 12 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-10 -right-16 bg-yellow-400 text-stone-900 text-[10px] px-3 py-1 font-bold rounded-full border-2 border-white shadow-lg md:block hidden"
            >
              Building with Joy ✨
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 text-stone-500 text-base md:text-xl font-light tracking-[0.3em] uppercase"
          >
            UI/UX Designer & Web Developer
          </motion.div>
        </h1>

        {/* CTA */}

      </div>

      {/* Floating elements for personality */}
      <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-40 text-4xl opacity-20">🌸</motion.div>
      <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-1/4 right-40 text-4xl opacity-20">🍋</motion.div>
      <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 right-40 text-4xl opacity-20">✨</motion.div>
      <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-1/4 center-30 text-4xl opacity-20">🍓</motion.div>
    </section>
  );
}