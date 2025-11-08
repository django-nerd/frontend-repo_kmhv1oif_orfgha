import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Eloura hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          {/* Text Content */}
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-pink-100/70 text-pink-700 px-3 py-1 text-xs font-medium">
              🌷 Pastel Dreams, Elegant You
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              ELOURA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-violet-500">
                Where elegance meets ease
              </span>
            </h1>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-xl">
              Welcome to Eloura, a world where fashion speaks softly, colors whisper elegance, and every outfit feels like a dream in pastel. We believe beauty lies in simplicity — in soft hues, delicate textures, and the quiet confidence of a woman who knows her worth.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-xl">
              From flowing dresses and chic tops to pastel co-ords and timeless sarees — our collection celebrates femininity in its purest form.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#shop" className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 to-violet-500 text-white px-6 py-3 text-sm font-medium shadow-md shadow-rose-200 hover:shadow-lg transition">
                Shop the Collection
              </a>
              <a href="#about" className="inline-flex items-center rounded-full border border-rose-200 text-rose-700 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-rose-50 transition">
                About Eloura
              </a>
            </div>
          </div>

          {/* 3D Spline Scene */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[560px] lg:h-[640px] rounded-3xl overflow-hidden ring-1 ring-slate-200/70 bg-gradient-to-br from-violet-100 via-rose-100 to-pink-100">
            <Spline
              scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft gradient overlay to blend scene with UI - does not block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
