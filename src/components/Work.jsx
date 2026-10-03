import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => navigate(`/project/${id}`);

  const handleProjectKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/project/${id}`);
    }
  };

  return (
    <section
      id="work"
      className="relative min-h-screen py-10 bg-stone-50 text-stone-900 overflow-hidden flex flex-col items-center justify-center"
      aria-labelledby="work-heading"
    >
      {/* Section Header */}
      <div className="text-center space-y-4 px-6">
        <span 
          className="text-[#eb4799] text-md font-semibold tracking-[0.2em] uppercase" 
          aria-hidden="true"
        >
          My Work
        </span>
        <h2 id="work-heading" className="text-4xl md:text-7xl leading-tight font-bold">
          Crafting digital stories, <br />
          shaping them into <span className="italic text-[#eb4799]">experiences.</span>
        </h2>
      </div>

      {/* ── MOBILE layout ── */}
      <div 
        className="flex flex-col w-full max-w-lg mx-auto gap-4 px-6 mt-10 md:hidden" 
        role="list" 
        aria-label="Projects"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            role="listitem"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleProjectClick(project.id)}
            onKeyDown={(e) => handleProjectKeyDown(e, project.id)}
            tabIndex={0}
            aria-label={`${project.name} — ${project.desc}. Press Enter to view case study.`}
            className="cursor-pointer group rounded-2xl overflow-hidden shadow-sm active:scale-[0.98] transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-[#eb4799]"
          >
            {/* Image Container */}
            <div
              style={{ backgroundColor: project.color }}
              className="relative h-52 overflow-hidden"
            >
              {project.mockups && (
                <img
                  src={
                    project.mockups.startsWith('http')
                      ? project.mockups
                      : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${project.mockups}`
                  }
                  alt={`${project.name} — ${project.role} project mockup`}
                  className="w-full h-full object-cover group-active:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              )}
              {/* Number badge */}
              <div aria-hidden="true" className="absolute bottom-3 right-4 pointer-events-none">
                <span className="text-7xl font-black leading-none text-[#eb4799]">
                  {index + 1}
                </span>
              </div>
              {/* Gradient overlay */}
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div className="bg-white px-5 py-4 space-y-1.5">
              <h3 className="text-sm font-black tracking-widest text-stone-900 uppercase">
                {project.name}
              </h3>
              <p className="text-xs text-stone-600 font-medium leading-relaxed">
                {project.desc}
              </p>
              <div className="flex items-center gap-2 pt-1" aria-label={`Tools: ${project.tools}. Role: ${project.role}`}>
                <span className="text-xs font-bold text-[#eb4799] uppercase tracking-widest">{project.tools}</span>
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-stone-300" />
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{project.role}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* ── DESKTOP layout ── */}
      <div
        className="hidden md:flex w-full max-w-[1400px] mx-auto h-[420px] gap-1 px-4 mt-12"
        role="list"
        aria-label="Projects"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            role="listitem"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-1 flex flex-col group cursor-pointer"
            onClick={() => handleProjectClick(project.id)}
            onKeyDown={(e) => handleProjectKeyDown(e, project.id)}
            tabIndex={0}
            aria-label={`${project.name} — ${project.desc}. Press Enter to view case study.`}
          >
            {/* Strip */}
            <div
              style={{ backgroundColor: project.color }}
              className="relative flex-grow flex flex-col items-center justify-center overflow-hidden z-10 rounded-xl"
            >
              {/* Mockup Image */}
              {project.mockups && (
                <div className="absolute inset-0 z-20 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    src={
                      project.mockups.startsWith('http')
                        ? project.mockups
                        : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${project.mockups}`
                    }
                    alt={`${project.name} — ${project.role} project mockup`}
                    className="w-full h-full object-cover transition-transform duration-700"
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}

              {/* Large Number */}
              <div aria-hidden="true" className="absolute bottom-4 inset-x-0 flex justify-center items-end pointer-events-none z-30">
                <span className="text-[100px] font-black leading-none translate-y-4 transition-colors duration-500 text-[#eb4799] group-hover:text-white">
                  {index + 1}
                </span>
              </div>
            </div>

            {/* Title and Description */}
            <div className="mt-4 space-y-1 px-2">
              <h3 className="text-xs font-black tracking-widest text-stone-900 uppercase">
                {project.name}
              </h3>
              <p className="text-xs text-stone-600 font-semibold leading-relaxed max-w-[150px]">
                {project.desc}
              </p>
              <div className="flex items-center gap-2 pt-1" aria-label={`Tools: ${project.tools}. Role: ${project.role}`}>
                <span className="text-[10px] font-black text-[#eb4799] uppercase tracking-widest">{project.tools}</span>
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-stone-300" />
                <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{project.role}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}