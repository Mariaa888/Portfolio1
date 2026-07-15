import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

const PortfolioHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#work",  text: "Work"  },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-stone-200/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <a href="#" className="flex items-center space-x-4 group" aria-label="Maryam Badhib — back to top">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20"
                aria-hidden="true"
              >
                <span className="text-stone-950 font-heading font-bold text-2xl italic">M</span>
              </motion.div>
              <span className="font-heading font-medium text-2xl tracking-tight text-stone-900 group-hover:text-pink-400 transition-colors duration-300">
                Maryam <span className="text-pink-400 font-light italic">Badhib</span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.text}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-xs font-semibold tracking-widest uppercase text-stone-500 hover:text-pink-400 transition-all duration-300 relative group"
              >
                {link.text}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-pink-400/30 transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-6"
          >
            <motion.a
              href={`${import.meta.env.BASE_URL}assets/Images/Mariam Abdulrahman Mohammed Badhib.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download resume (opens in new tab)"
              className="px-8 py-3 text-xs font-bold tracking-widest uppercase bg-yellow-400 text-stone-950 rounded-full hover:bg-stone-950 hover:text-white transition-all duration-500 shadow-sm shadow-yellow-400/20 flex items-center gap-2"
            >
              <span>Resume</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 text-stone-900 hover:bg-yellow-400/10 rounded-2xl transition-all"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-6"
            >
              <div className="py-8 px-4 rounded-[2rem] bg-stone-50/90 backdrop-blur-2xl border border-stone-200">
                <nav className="flex flex-col space-y-6 items-center" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.text}
                      href={link.href}
                      whileHover={{ scale: 1.1, x: 10 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl font-heading italic text-stone-600 hover:text-pink-400 transition-colors"
                    >
                      {link.text}
                    </motion.a>
                  ))}
                  <div className="pt-8 w-full flex flex-col items-center border-t border-stone-200">
                    <a
                      href={`${import.meta.env.BASE_URL}assets/Images/Mariam Abdulrahman Mohammed Badhib.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      aria-label="Download resume (opens in new tab)"
                    >
                      <span className="w-full py-4 text-center bg-yellow-400 text-stone-950 font-bold tracking-widest uppercase text-xs rounded-full flex items-center justify-center gap-2 hover:bg-stone-950 hover:text-white transition-all duration-300">
                        <span>Resume</span>
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default PortfolioHeader;