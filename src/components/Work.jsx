import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="work" className="relative min-h-screen py-6 bg-[#FAF9F6] overflow-hidden flex flex-col items-center justify-center">

        {/* Large CONTENT Text Outline */}
           <div className="text-center space-y-4">
        <span className="text-pink-400 text-xs font-semibold tracking-[0.3em] ">
             My Work!
          </span> 
           <h2 className="text-4xl md:text-7xl leading-tight relative">
   Crafting digital stories, <br />
    shaping them into <span className="italic text-pink-400 font-serif">experiences.</span></h2>
    </div>

      {/* Main Container for the Vertical Strips */}
      <div className="flex w-full max-w-[1450px] mx-auto h-[400px] gap-1 px-4 mt-12">
        {projects.map((project, index) => {
          const isComingSoon = project.id === 'factory-flow';
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex-1 flex flex-col group ${isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
              onClick={() => {
                if (!isComingSoon) {
                  navigate(`/project/${project.id}`);
                }
              }}
            >
              {/* The Strip Column */}
              <div 
                style={{ backgroundColor: project.color }}
                className="relative flex-grow flex flex-col items-center justify-center overflow-hidden transition-transform duration-500 z-10"
              >
                {/* Mockup Image Area */}
                {!isComingSoon && project.mockups && (
                  <div className="absolute inset-0 z-20 overflow-hidden">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      src={project.mockups.startsWith('http') ? project.mockups : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${project.mockups}`} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700" 
                    />
                    {/* Subtle Gradient Overlay to ensure readability of number if needed */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {isComingSoon && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-stone-200/50 backdrop-blur-[2px] border border-dashed border-stone-300">
                    <span className="text-xs font-bold tracking-widest text-stone-500 uppercase italic">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Large Number at the background of strip */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center items-end pointer-events-none z-30">
                  <span className={`text-[100px] font-black leading-none translate-y-4 transition-colors duration-500 ${isComingSoon ? 'text-stone-400' : 'text-pink-400 group-hover:text-white'}`}>
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Title and Description Below the Strip */}
              <div className="mt-4 space-y-1 px-2">
                <h4 className="text-xs font-black tracking-widest text-stone-900 uppercase">
                  {project.name} {isComingSoon && <span className="text-[9px] text-stone-400 normal-case font-normal">(Coming Soon)</span>}
                </h4>
                <p className="text-[10px] text-stone-500 font-semibold leading-relaxed max-w-[150px]">
                  {isComingSoon ? 'Case study will be added soon' : project.desc}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[8px] font-black text-pink-400 uppercase tracking-widest">{project.tools}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest">{project.role}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Adding CSS inline for the text outline effect */}
      <style jsx="true">{`
        .border-text {
          color: transparent;
          -webkit-text-stroke: 2px #E4E2DD;
        }
      `}</style>
    </section>
  );
}