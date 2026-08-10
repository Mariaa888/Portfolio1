import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#FAF9F6]" aria-labelledby="about-heading">
      {/* Decorative background blobs — hidden from screen readers */}
      <div aria-hidden="true" className="absolute top-1/2 left-[-15%] w-[400px] h-[400px] bg-pink-100/60 rounded-full blur-[100px] -z-10" />
      <div aria-hidden="true" className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-stone-200/50 rounded-full blur-[90px] -z-10" />

      <div className="max-w-6xl mx-auto px-8 flex flex-col gap-8 md:gap-20">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <span className="text-pink-400 text-xs font-semibold tracking-[0.2em] uppercase" aria-hidden="true">
            About Me
          </span>
          <h2 id="about-heading" className="text-4xl md:text-7xl leading-tight relative">
            Designing pretty things, <br />
            coding them into <span className="italic text-pink-400 font-serif">reality.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12 lg:gap-24 relative">

          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-[1.2] space-y-6 text-left"
          >
            <p className="text-xl md:text-2xl text-stone-800 font-light leading-relaxed">
              I am{' '}
              <span className="font-semibold text-stone-950 underline decoration-pink-400 decoration-4 underline-offset-4">
                Mariam Badhib
              </span>
              , a{' '}
              <span className="font-medium text-stone-900"> UI/UX Designer</span>{' '}
              and
              <span className="font-medium text-stone-900"> front-end developer </span>who believes technology should feel human, warm, and{' '}
              <span className="italic text-pink-400 font-serif">joyful.</span>
            </p>

            <p className="text-stone-600 font-light text-lg leading-relaxed">
              After graduating in{' '}
              <span className="text-stone-900 font-medium">Information Technology (2023)</span>,
              I began my professional journey to make user experiences as clean and intuitive as possible.        </p>

            <p className="text-stone-600 font-light text-lg leading-relaxed">
              Whether I'm sketching a layout in{' '}
              <span className="text-stone-900 font-medium tracking-tight">Figma</span>{' '}
              or writing clean{' '}
              <span className="text-stone-900 font-medium tracking-tight">React</span>{' '}
              code, my goal is always to create digital spaces that feel warm and easy to use.
            </p>

            <p className="text-stone-900 font-medium italic">
              "I don't just build interfaces — I build experiences people love to spend time with."
            </p>
          </motion.div>

          {/* Divider */}
          <div aria-hidden="true" className="hidden md:block w-px self-stretch bg-stone-200" />

          {/* Right — Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full text-left flex flex-col gap-6"
          >
            <h3 className="text-stone-900 font-bold text-sm tracking-widest uppercase flex items-center gap-2 mb-2">
              <span aria-hidden="true" className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
              Digital Toolkit
            </h3>

            <div className="flex flex-col gap-4">
              {/* Design */}
              <div className="p-5 bg-white border border-stone-200 rounded-2xl flex items-start gap-4 hover:border-pink-200 hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-pink-50 text-pink-500 rounded-xl shrink-0">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">UI/UX & Design</h4>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">Figma, Adobe XD, Wireframing, and High-fidelity Prototyping.</p>
                </div>
              </div>

              {/* Development */}
              <div className="p-5 bg-white border border-stone-200 rounded-2xl flex items-start gap-4 hover:border-pink-200 hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-pink-50 text-pink-500 rounded-xl shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Development</h4>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">React, React Native, Tailwind CSS, and responsive web layouts.</p>
                </div>
              </div>

              {/* Strategy & Polish */}
              <div className="p-5 bg-white border border-stone-200 rounded-2xl flex items-start gap-4 hover:border-pink-200 hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-pink-50 text-pink-500 rounded-xl shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Strategy and Polish</h4>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">UI Animation, User Testing, and crafting joyful micro-interactions.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Services & Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 pt-16 border-t border-stone-200"
        >
          <div className="text-center md:text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-stone-950">My Services and Packages</h2>
            <p className="text-stone-600 text-lg">Clear, transparent pricing designed to turn your ideas into high-performing interfaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Starter Package */}
            <div className="border border-stone-200 p-8 md:p-10 rounded-3xl bg-white hover:shadow-xl hover:border-pink-200 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-stone-950">Starter Package</h3>
              <div className="text-3xl font-heading font-bold mb-4 text-pink-500">$150 – $250</div>
              <p className="text-stone-600 mb-8 leading-relaxed">Ideal for quick redesigns, fixing UI/UX issues, or simple landing pages.</p>
              <ul className="text-stone-700 space-y-4 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 font-bold">✓</span> Landing Page or Bug/UI Fixes
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 font-bold">✓</span> Delivered in 3 - 5 days
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 font-bold">✓</span> Max 2 rounds of revisions
                </li>
              </ul>
            </div>

            {/* Standard Package */}
            <div className="border border-stone-900 p-8 md:p-10 rounded-3xl bg-stone-950 text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-bold mb-2 relative z-10">Standard Package</h3>
              <div className="text-3xl font-heading font-bold mb-4 text-pink-400 relative z-10">$400 – $600</div>
              <p className="text-stone-400 mb-8 leading-relaxed relative z-10">Full website design and development for startups and digital businesses.</p>
              <ul className="text-stone-300 space-y-4 mb-6 relative z-10">
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 font-bold">✓</span> Full website UX/UI (Figma)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 font-bold">✓</span> Frontend Dev (React & Tailwind)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 font-bold">✓</span> Delivered in 2 - 3 weeks
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-pink-400 font-bold">✓</span> Max 3 rounds of revisions
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}