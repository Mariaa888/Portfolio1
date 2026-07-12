import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:mariabdoh@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#FAF9F6] flex flex-col justify-center px-4 py-16 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Text and Info */}
        <div className="space-y-12">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pink-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-light leading-tight mb-6"
            >
              Let's build something <br />
              <span className="italic text-pink-400 font-serif">extraordinary.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-400 text-lg max-w-md leading-relaxed"
            >
              I'm always open to discussing product design work or partnership opportunities. Reach out and let's make magic happen.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 pt-8"
          >
            <div>
              <p className="text-stone-500 text-xs font-bold tracking-widest uppercase mb-1">Email</p>
              <a href="mailto:mariabdoh@gmail.com" className="text-xl hover:text-pink-400 transition-colors duration-300">mariabdoh@gmail.com</a>
            </div>
            <div>
              <p className="text-stone-500 text-xs font-bold tracking-widest uppercase mb-1 mt-6">Socials</p>
              <div className="flex gap-6 text-stone-300">
                <a href="https://www.linkedin.com/in/mariamabba/" className="hover:text-pink-400 transition-colors duration-300">LinkedIn</a>
                <a href="https://github.com/Mariaa888/" className="hover:text-pink-400 transition-colors duration-300">GitHub</a>
                <a href="https://www.behance.net/mariabdoh" className="hover:text-pink-400 transition-colors duration-300">Behance</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-stone-900/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-stone-800"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold tracking-widest text-stone-400 uppercase block">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-[#FAF9F6] focus:outline-none focus:border-pink-400 transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold tracking-widest text-stone-400 uppercase block">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-[#FAF9F6] focus:outline-none focus:border-pink-400 transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-semibold tracking-widest text-stone-400 uppercase block">Message</label>
              <textarea 
                id="message" 
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-[#FAF9F6] focus:outline-none focus:border-pink-400 transition-colors duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-pink-400 text-stone-900 font-bold tracking-widest uppercase py-4 rounded-lg hover:bg-pink-300 transition-colors duration-300 mt-4 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
