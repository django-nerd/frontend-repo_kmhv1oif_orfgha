import React from 'react';

const promises = [
  {
    title: 'Premium quality fabrics',
    desc: 'Materials that feel as good as they look — breathable, soft, and made to last.'
  },
  {
    title: 'Soft pastel shades',
    desc: 'Inspired by sunrise skies and fresh blooms — calming hues for every mood.'
  },
  {
    title: 'Modern designs',
    desc: 'Minimal silhouettes crafted for comfort, confidence, and everyday elegance.'
  }
];

export default function Promise() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-rose-50/40" aria-label="Our promise">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Our Promise</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Premium quality, pastel serenity, and modern charm — designed to glow softly, never loudly.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((p, i) => (
            <div key={i} className="rounded-2xl border border-rose-200/60 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition">
              <div className="text-lg font-medium text-slate-900">{p.title}</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
