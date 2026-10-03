import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#eb4799] hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FAF9F6] text-stone-900 pb-20"
      aria-labelledby="project-title"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#eb4799] origin-left z-[100]"
        style={{ scaleX }}
        aria-hidden="true"
      />

      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white" aria-label="Case Study Navigation">
        <button
          onClick={() => navigate('/#work')}
          className="flex items-center gap-2 group bg-stone-900/60 hover:bg-stone-900/90 backdrop-blur-md px-4 py-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Back to Work section"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span className="text-xs font-bold tracking-widest uppercase">Back</span>
        </button>
        <div className="text-xs font-bold tracking-widest uppercase italic bg-stone-900/60 backdrop-blur-md px-4 py-2 rounded-full hidden md:block" aria-hidden="true">
          Case Study / {project.name}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: project.color }}
        aria-label="Project Hero"
      >
        {/* Dark gradient overlay to guarantee text contrast against light backgrounds (like ESTATE's #D7C4B2) */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-stone-900/40 z-0" aria-hidden="true" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] mix-blend-overlay z-0" aria-hidden="true" />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <span className="text-[#eb4799] text-xs font-bold tracking-[0.4em] uppercase mb-4 block" aria-hidden="true">
            Project {project.number}
          </span>
          <h1 id="project-title" className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight mb-6 tracking-tight">
            {project.name}
          </h1>
          <p className="text-stone-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            {project.desc}
          </p>
        </motion.div>

        {/* Floating Number */}
        <div className="absolute bottom-[-10%] right-[-5%] pointer-events-none z-0" aria-hidden="true">
          <span className="text-[400px] font-black text-white/5 leading-none select-none">
            {project.number}
          </span>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 -mt-20 relative z-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 lg:p-20 shadow-2xl rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-12 border border-stone-100"
        >
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-stone-900 italic">Project Overview</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12">
              {project.fullDesc}
            </p>
            
            {/* Dynamic Case Study Sections */}
            {project.sections && project.sections.map((section, idx) => (
              <div key={idx} className="mt-12 space-y-4">
                <h3 className="text-2xl font-bold text-stone-900 italic">{section.title}</h3>
                <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-wrap bg-[#eb4799]/10 p-6 rounded-xl border border-[#eb4799]/10">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-stone-100 mt-12">
              <div>
                <h3 className="text-xs font-black tracking-widest text-[#eb4799] uppercase mb-3">Role</h3>
                <p className="text-stone-900 font-bold text-sm">{project.role}</p>
              </div>
              <div>
                <h3 className="text-xs font-black tracking-widest text-[#eb4799] uppercase mb-3">Tools</h3>
                <p className="text-stone-900 font-bold text-sm">{project.tools}</p>
              </div>
              <div>
                <h3 className="text-xs font-black tracking-widest text-[#eb4799] uppercase mb-3">Services</h3>
                <ul className="space-y-1 text-sm">
                  {project.tags.map(tag => (
                    <li key={tag} className="text-stone-900 font-bold">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-start">
            {/* Smart Links — Fixed Accessibility (using <a> instead of <button>) */}
            {(project.link || project.githubLink) && (
              <div className="flex flex-col gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-stone-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-[#eb4799] transition-all duration-300 text-sm tracking-widest uppercase rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb4799] shadow-md"
                    aria-label={`Launch ${project.name} live project (opens in new tab)`}
                  >
                    Launch Project <ExternalLink size={16} aria-hidden="true" />
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 border-2 border-stone-900 text-stone-900 font-bold flex items-center justify-center gap-2 hover:bg-stone-900 hover:text-white transition-all duration-300 text-sm tracking-widest uppercase rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
                    aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
                  >
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="mt-20 space-y-16" aria-label="Project Gallery">
          {project.images.map((img, idx) => {
            const isVideo = img.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/);
            const mediaSrc = img.startsWith('http') ? img : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${img}`;
            return (
              <motion.figure
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full overflow-hidden rounded-2xl shadow-xl border border-stone-100 bg-stone-50"
              >
                {isVideo ? (
                  <video
                    src={mediaSrc}
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                    aria-label={`${project.name} video preview ${idx + 1}`}
                  />
                ) : (
                  <img
                    src={mediaSrc}
                    alt={`${project.name} feature showcase ${idx + 1}`}
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                )}
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Footer / Contact */}
      <section className="mt-32 mb-10 text-center px-6" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 italic text-stone-900">
          Have a project in mind?
        </h2>
        {/* Fixed broken CTA - now points to email */}
        <a 
          href="mailto:mariabdoh@gmail.com" 
          className="inline-block text-2xl md:text-3xl font-black border-b-4 border-[#eb4799] pb-2 text-stone-900 hover:text-[#eb4799] hover:border-[#eb4799] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#eb4799] rounded-sm"
        >
          Let's work together
        </a>
      </section>
    </motion.article>
  );
}
