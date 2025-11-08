import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24" aria-label="About Eloura">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">The Story of Eloura</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Born from a love for pastel tones and timeless fashion, Eloura was created to celebrate the gentle strength and effortless grace of today’s woman. Our mission is simple — to design pieces that make you feel confident, calm, and beautifully yourself.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Each collection is thoughtfully curated with soft fabrics, delicate hues, and minimal silhouettes — inspired by sunrise skies, fresh blooms, and quiet moments of joy. We believe that fashion doesn’t need to be loud to be noticed; at Eloura, it’s about subtle beauty and comfort that lasts.
        </p>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Whether you’re dressing for your everyday glow or a special occasion, our designs remind you to slow down, breathe, and fall in love with yourself again.
        </p>
        <div className="mt-8 inline-flex items-center rounded-full bg-rose-100 text-rose-700 px-4 py-2 text-sm">✨ Eloura — Pastel dreams, elegant you.</div>
      </div>
    </section>
  );
}
