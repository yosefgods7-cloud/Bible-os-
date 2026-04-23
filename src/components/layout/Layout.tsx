import { Outlet, NavLink } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { useEffect, useState } from 'react';

export function Layout() {
  const [theme, setTheme] = useState(localStorage.getItem('themePreference') || 'theme-charcoal');

  useEffect(() => {
    // Apply theme globally to the document element so Tailwind variables propagate to body
    document.documentElement.className = theme;

    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('themePreference') || 'theme-charcoal';
      setTheme(newTheme);
      document.documentElement.className = newTheme;
    }
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('theme-changed', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('theme-changed', handleStorageChange);
    }
  }, [theme]);

  return (
    <div className={`flex flex-col min-h-[100dvh] bg-sacred-bg-dark text-sacred-text-primary font-sans overflow-x-hidden ${theme}`}>
      {/* Desktop Top Nav Pattern from Design */}
      <nav className="hidden md:flex h-16 border-b border-sacred-gold/20 items-center justify-between px-8 bg-sacred-surface-dark sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-sacred-gold flex items-center justify-center">
            <span className="text-sacred-bg-dark font-bold text-lg leading-none">†</span>
          </div>
          <span className="text-xl tracking-widest uppercase font-semibold text-sacred-gold-light">BibleOS</span>
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold">
          <NavLink to="/" end className={({ isActive }) => `pb-5 mt-5 border-b-2 transition-colors ${isActive ? 'text-sacred-gold-light border-sacred-gold' : 'text-sacred-text-secondary border-transparent hover:text-sacred-text-primary'}`}>Home</NavLink>
          <NavLink to="/read" className={({ isActive }) => `pb-5 mt-5 border-b-2 transition-colors ${isActive ? 'text-sacred-gold-light border-sacred-gold' : 'text-sacred-text-secondary border-transparent hover:text-sacred-text-primary'}`}>Read</NavLink>
          <NavLink to="/roadmap" className={({ isActive }) => `pb-5 mt-5 border-b-2 transition-colors ${isActive ? 'text-sacred-gold-light border-sacred-gold' : 'text-sacred-text-secondary border-transparent hover:text-sacred-text-primary'}`}>Roadmap</NavLink>
          <NavLink to="/habits" className={({ isActive }) => `pb-5 mt-5 border-b-2 transition-colors ${isActive ? 'text-sacred-gold-light border-sacred-gold' : 'text-sacred-text-secondary border-transparent hover:text-sacred-text-primary'}`}>Habits</NavLink>
          <NavLink to="/more" className={({ isActive }) => `pb-5 mt-5 border-b-2 transition-colors ${isActive ? 'text-sacred-gold-light border-sacred-gold' : 'text-sacred-text-secondary border-transparent hover:text-sacred-text-primary'}`}>More</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-sacred-text-secondary uppercase tracking-tighter">Faithful Student</p>
            <p className="text-sm font-semibold text-sacred-gold-light">Level 14</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-sacred-card-dark border border-sacred-gold/30 flex items-center justify-center">
            <span className="text-xs">DW</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-[1024px] mx-auto md:p-8 flex flex-col md:grid md:grid-cols-1 md:gap-6 bg-sacred-bg-dark pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* FOOTER STATUS (Desktop only as BottomNav is on mobile) */}
      <footer className="hidden md:flex h-12 border-t border-sacred-gold/10 bg-sacred-bg-dark px-8 items-center justify-between text-[10px] uppercase tracking-[0.2em] text-sacred-text-secondary mt-auto">
        <div>Current Translation: <span className="text-sacred-gold-light">KJV (Standard English)</span></div>
        <div className="flex gap-6">
          <span>Words Studied: <span className="text-sacred-text-primary">142</span></span>
          <span>Notes Logged: <span className="text-sacred-text-primary">84</span></span>
          <span>XP to next Level: <span className="text-sacred-text-primary">420/1200</span></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sacred-success"></span>
          <span>Systems Online (Offline Mode Active)</span>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}
