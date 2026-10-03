import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code2, Layers } from 'lucide-react';

export default function About() {
  return (
    <section 
      id="about" 
      className="relative py-28 md:py-36 overflow-hidden bg-white border-t border-stone-200/80 font-['League_Spartan',_sans-serif]" 
      aria-labelledby="about-heading"
    >
      <div aria-hidden="true" className="absolute top-1/3 left-[-10%] w-[400px] h-[400px] bg-[#eb4799]/10 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-stone-100 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-16 md:gap-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <span className="text-[#eb4799] text-md font-semibold tracking-[0.25em] uppercase" aria-hidden="true">
            About Me
          </span>

          <h2 id="about-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-950 tracking-tight leading-[1.15]">
            Designing pretty things, <br />
            coding them into <span className="italic font-light text-[#eb4799]">reality.</span>
          </h2>

          <p className="text-xl md:text-2xl text-stone-800 font-light leading-relaxed pt-2">
            I am{' '}
            <span className="font-semibold text-[#eb4799]">Mariam Badhib</span>
            , a <span className="font-semibold text-stone-950"> a brand-led web designer and front-end developer.</span> 
            I combine UX/UI thinking, visual direction, and front-end development to turn ideas into digital experiences that are clear, distinctive, and true to the brand behind them.          </p>

          <p className=" text-[#eb4799] font-medium italic text-lg md:text-xl pt-2">
            "I don't just build interfaces — I build experiences people love to spend time with."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 pt-8 border-t border-stone-200/80"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-stone-900 font-bold text-2xl uppercase flex items-center text-center">
              What I Do
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Web Leadership & Frontend */}
            <div className="p-6 bg-[#eb4799]/5 border border-stone-200/80 rounded-2xl flex flex-col justify-between hover:border-[#eb4799] hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="p-3 bg-[#eb4799]/10 text-[#eb4799] rounded-xl w-fit mb-4 group-hover:scale-105 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-xl mb-2">Web Leadership &amp; Frontend</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  React, React Native, Tailwind CSS, JavaScript, and Responsive Architecture.
                </p>
              </div>
            </div>

            {/* Card 2: UI/UX & Systems */}
            <div className="p-6 bg-[#eb4799]/5 border border-stone-200/80 rounded-2xl flex flex-col justify-between hover:border-[#eb4799]/40 hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="p-3 bg-[#eb4799]/10 text-[#eb4799] rounded-xl w-fit mb-4 group-hover:scale-105 transition-transform">
                  <PenTool className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-xl mb-2">UI/UX &amp; Systems</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Figma, Adobe XD, Wireframing, Design Systems, and High-Fidelity Prototyping.
                </p>
              </div>
            </div>

            {/* Card 3: Strategy & Polish */}
            <div className="p-6 bg-[#eb4799]/5 border border-stone-200/80 rounded-2xl flex flex-col justify-between hover:border-[#eb4799]/40 hover:shadow-md transition-all duration-300 group">
              <div>
                <div className="p-3 bg-[#eb4799]/10 text-[#eb4799] rounded-xl w-fit mb-4 group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-stone-900 text-xl mb-2">Strategy &amp; Polish</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Framer Motion, Micro-interactions, Performance Optimization, and Brand Alignment.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}