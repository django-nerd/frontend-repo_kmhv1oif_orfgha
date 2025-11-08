import React from 'react';

const items = [
  { title: 'Breezy Dress', tag: 'Romantic', color: 'from-rose-200 to-pink-100' },
  { title: 'Soft Co-ord', tag: 'Confident', color: 'from-violet-200 to-indigo-100' },
  { title: 'Modern Ethnic', tag: 'Calm', color: 'from-emerald-200 to-teal-100' },
  { title: 'Chic Top', tag: 'Everyday', color: 'from-amber-200 to-orange-100' },
];

export default function Shop() {
  return (
    <section id="shop" className="py-16 lg:py-24 bg-gradient-to-b from-rose-50/40 to-white" aria-label="Eloura collection">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Discover Your Pastel Story</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">Explore the Eloura Collection — each piece a whisper of color and a touch of comfort.</p>
          </div>
          <a href="#" className="inline-flex items-center rounded-full border border-rose-200 text-rose-700 px-4 py-2 text-sm bg-white/70 backdrop-blur hover:bg-rose-50 transition">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden border border-slate-200/60 bg-white/70 backdrop-blur">
              <div className={`h-48 bg-gradient-to-br ${it.color}`} />
              <div className="p-4">
                <div className="text-sm text-rose-600">{it.tag}</div>
                <div className="text-lg font-medium text-slate-900">{it.title}</div>
                <button className="mt-3 inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 text-sm hover:bg-rose-700 transition">
                  Shop the look
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-600">
          Because at Eloura, we don’t just sell clothes — we create moods, memories, and magic in every shade. 🌿
        </p>
      </div>
    </section>
  );
}
