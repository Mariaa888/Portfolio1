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
      <section id="home" className="min-h-screen w-full relative overflow-hidden">
        <Hero />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 opacity-20">
          <div className="w-full h-px bg-gray-400" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen w-full relative bg-[#FAF9F6]">
        <About />
      </section>

      {/* WORK SECTION */}
      <section id="work" className="min-h-screen w-full relative bg-[#FAF9F6]">
        <ProjectsSection />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen w-full relative bg-[#1A1A1A]">
        <Contact />
      </section>
    </main>
  );
}
function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 font-['Outfit',sans-serif]">
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
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  );
}