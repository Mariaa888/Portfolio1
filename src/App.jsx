import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/Work';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';

function HomePage() {
  return (
    <main className="relative">
      {/* HERO SECTION */}
      <section id="home" className="h-screen w-full sticky top-0 z-10 overflow-hidden">
        <Hero />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 opacity-20">
          <div className="w-full h-px bg-gray-400" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="h-screen w-full sticky top-0 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] bg-[#FAF9F6] overflow-y-auto scrollbar-hide">
        <About />
      </section>

      {/* WORK SECTION - Stacks over About */}
      <section id="work" className="h-screen w-full sticky top-0 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] bg-[#FAF9F6]">
        <ProjectsSection />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen w-full relative z-40 bg-[#1A1A1A]">
        <Contact />
      </section>
    </main>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 font-['Outfit',sans-serif] selection:bg-yellow-400/30">
      {/* Show Navbar only on Home Page or handle it inside CaseStudy if needed */}
      {location.pathname === '/' && <Navbar />}

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')]" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<CaseStudy />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}