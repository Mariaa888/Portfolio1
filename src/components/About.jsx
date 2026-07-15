import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#FAF9F6]" aria-labelledby="about-heading">
      {/* Decorative background blobs — hidden from screen readers */}
      <div aria-hidden="true" className="absolute top-1/2 left-[-15%] w-[400px] h-[400px] bg-yellow-200/40 rounded-full blur-[100px] -z-10" />
      <div aria-hidden="true" className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-violet-200/30 rounded-full blur-[90px] -z-10" />

      <div className="max-w-6xl mx-auto px-8 flex flex-col gap-8 md:gap-20">

        {/* Title */}
        <div className="text-center space-y-4">
          <span className="text-pink-400 text-xs font-semibold tracking-[0.2em] uppercase" aria-hidden="true">
            About Me
          </span>
          <h2 id="about-heading" className="text-4xl md:text-7xl leading-tight relative">
            Designing pretty things, <br />
            coding them into <span className="italic text-pink-400 font-serif">reality.</span>

            {/* Decorative emojis — aria-hidden */}
            <span aria-hidden="true" className="absolute -top-6 right-0 md:-top-10 md:-right-12 text-3xl md:text-4xl rotate-12 select-none">
              🌸
            </span>
            <span aria-hidden="true" className="absolute -bottom-6 left-0 md:-bottom-10 md:-left-12 text-2xl md:text-3xl -rotate-12 animate-pulse select-none">
              ✨
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12 lg:gap-24 relative">

          {/* Left — Bio */}
          <div className="flex-[1.2] space-y-6 text-left">
            <p className="text-xl md:text-2xl text-stone-800 font-light leading-relaxed">
              I am{' '}
              <span className="font-semibold text-stone-950 underline decoration-yellow-400 decoration-4 underline-offset-4">
                Maryam Badhib
              </span>
              , a{' '}
              <span className="font-medium text-stone-900">Lead UI/UX Designer</span>{' '}
              and developer who believes technology should feel human, warm, and{' '}
              <span className="italic text-pink-400 font-serif">joyful.</span>
            </p>

            <p className="text-stone-600 font-light text-lg leading-relaxed">
              After graduating in{' '}
              <span className="text-stone-900 font-medium">Information Technology (2023)</span>,
              I began my professional journey to make user experiences as clean and intuitive as possible.
            </p>

            <p className="text-stone-600 font-light text-lg leading-relaxed">
              Whether I'm sketching a layout in{' '}
              <span className="text-stone-900 font-medium tracking-tight">Figma</span>{' '}
              or writing clean{' '}
              <span className="text-stone-900 font-medium tracking-tight">React</span>{' '}
              code, my goal is always to create digital spaces that feel warm and easy to use.
            </p>

            <p className="text-stone-900 font-medium italic">
              "I don't just build interfaces — I build experiences people love to spend time with."
            </p>
          </div>

          {/* Divider */}
          <div aria-hidden="true" className="hidden md:block w-px self-stretch bg-stone-200" />

          {/* Right — Skills */}
          <div className="flex-1 w-full space-y-10 text-left">

            <div className="space-y-6">
              <h3 className="text-stone-900 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                <span aria-hidden="true" className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                Digital Toolkit
              </h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-stone-600 font-light text-base" aria-label="Design and development tools">
                {['Figma', 'Adobe XD', 'React & React Native', 'Tailwind CSS', 'UI Animation', 'User Testing', 'Prototyping'].map(skill => (
                  <li key={skill} className="flex items-center gap-2 hover:text-violet-500 transition-colors">
                    <span aria-hidden="true" className="text-xs text-yellow-500">✦</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-stone-900 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                <span aria-hidden="true" className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                Soft Skills
              </h3>
              <ul className="flex flex-wrap gap-2" aria-label="Soft skills">
                {['Empathy', 'Communication', 'Visual Storytelling', 'Adaptability'].map(skill => (
                  <li
                    key={skill}
                    className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:bg-white hover:border-pink-200 transition-all"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}