import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Music, Zap, Terminal, Heart } from 'lucide-react';

const vibedata = [
  { icon: <Coffee />, label: 'Coffee Level', value: 'Over 9000!', color: 'text-amber-500', bg: 'bg-amber-100' },
  { icon: <Music />, label: 'Currently Vibing', value: 'Bedroom Pop', color: 'text-violet-500', bg: 'bg-violet-100' },
  { icon: <Zap />, label: 'Creative Mood', value: 'High Voltage', color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { icon: <Heart />, label: 'Current Obsession', value: 'Micro-Interactions', color: 'text-rose-500', bg: 'bg-rose-100' },
];

export default function PlayfulStats() {
  return (
    <section className="py-20 px-8 bg-white/50 border-y border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {vibedata.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: 2 }}
              className={`group flex items-center gap-4 p-6 ${item.bg} bg-opacity-20 border border-transparent hover:border-white hover:bg-opacity-40 rounded-[2.5rem] transition-all duration-300 min-w-[240px] shadow-sm hover:shadow-xl`}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              
              <div>
                <h4 className="text-stone-400 text-[10px] uppercase font-bold tracking-widest mb-1">
                  {item.label}
                </h4>
                <p className="text-stone-900 font-bold text-sm">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
