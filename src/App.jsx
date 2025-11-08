import React from 'react';
import Hero from './components/Hero';
import Promise from './components/Promise';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-rose-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-violet-500 text-white font-semibold">E</span>
            <span className="text-lg font-semibold tracking-wide">Eloura</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#shop" className="hover:text-rose-600">Shop</a>
            <a href="#about" className="hover:text-rose-600">About</a>
            <a href="#" className="inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-2 hover:bg-rose-700 transition">Discover</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Promise />
        <About />
        <Shop />
      </main>

      <footer className="border-t border-rose-100 bg-rose-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Eloura. All rights reserved.</p>
          <p className="text-sm text-slate-600">Pastel dreams, elegant you.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
