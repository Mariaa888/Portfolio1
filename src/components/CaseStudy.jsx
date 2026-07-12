import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

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
            className="text-pink-400 hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FAF9F6] text-stone-900 pb-20"
    >
      {/* Header / Nav */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={18} />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase">Back to Work</span>
        </button>
        <div className="text-xs font-bold tracking-widest uppercase italic">
          Case Study / {project.name}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: project.color }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')]" />

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-white/70 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
            Project {project.number}
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-none mb-6">
            {project.name}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            {project.desc}
          </p>
        </motion.div>

        {/* Floating Number */}
        <div className="absolute bottom-[-10%] right-[-5%] pointer-events-none">
          <span className="text-[400px] font-black text-white/5 leading-none select-none">
            {project.number}
          </span>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-8 -mt-20 relative z-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 md:p-20 shadow-2xl rounded-sm grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-stone-900 italic font-serif">The Challenge</h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              {project.fullDesc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-stone-100">
              <div>
                <h4 className="text-xs font-black tracking-widest text-pink-400 uppercase mb-4">Role</h4>
                <p className="text-stone-900 font-bold">{project.role}</p>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-widest text-pink-400 uppercase mb-4">Tools</h4>
                <p className="text-stone-900 font-bold">{project.tools}</p>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-widest text-pink-400 uppercase mb-4">Services</h4>
                <ul className="space-y-2">
                  {project.tags.map(tag => (
                    <li key={tag} className="text-stone-900 font-bold">{tag}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-widest text-pink-400 uppercase mb-4">Date</h4>
              </div>
            </div>
          </div>

          <div className="space-y-8">

            {/* Smart Buttons — shown based on available links */}
            {(project.link || project.githubLink) && (
              <div className={`flex gap-3 ${project.link && project.githubLink ? '' : ''}`}>

                {/* Launch Project — only shown if link exists */}
                {project.link && (
                  <button
                    onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank', 'noopener,noreferrer'); }}
                    className="flex-1 py-4 bg-stone-900 text-white font-bold flex items-center justify-center gap-2 hover:bg-pink-400 transition-all duration-300 text-sm tracking-widest uppercase cursor-pointer"
                  >
                    Launch Project <ExternalLink size={14} />
                  </button>
                )}

                {/* View Code — only shown if githubLink exists */}
                {project.githubLink && (
                  <button
                    onClick={(e) => { e.stopPropagation(); window.open(project.githubLink, '_blank', 'noopener,noreferrer'); }}
                    className="flex-1 py-4 border-2 border-stone-900 text-stone-900 font-bold flex items-center justify-center gap-2 hover:bg-stone-900 hover:text-white transition-all duration-300 text-sm tracking-widest uppercase cursor-pointer"
                  >
                    View Code
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                )}

              </div>
            )}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="mt-20 space-y-20">
          {project.images.map((img, idx) => {
            const isVideo = img.toLowerCase().endsWith('.mp4') ||
              img.toLowerCase().endsWith('.webm') ||
              img.toLowerCase().endsWith('.ogg') ||
              img.toLowerCase().endsWith('.mov');
            const mediaSrc = img.startsWith('http') ? img : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${img}`;
            return (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full overflow-hidden rounded-sm shadow-xl"
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
                  />
                ) : (
                  <img
                    src={mediaSrc}
                    alt={`${project.name} preview ${idx + 1}`}
                    className="w-full h-auto object-cover"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer / Contact */}
      <section className="mt-40 text-center px-8">
        <h2 className="text-4xl md:text-6xl font-black mb-8 italic font-serif">Have a project in mind?</h2>
        <button className="text-2xl md:text-3xl font-black border-b-4 border-pink-400 pb-2 hover:text-pink-400 transition-colors">
          Let's work together
        </button>
      </section>
    </motion.div>
  );
}
