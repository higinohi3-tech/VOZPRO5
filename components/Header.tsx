
import React from 'react';

interface HeaderProps {
  onPricingClick: () => void;
  onTryClick: () => void;
  onDashboardClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPricingClick, onTryClick, onDashboardClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">VozPro AI</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button onClick={onTryClick} className="hover:text-indigo-400 transition-colors">Como funciona</button>
          <button onClick={onPricingClick} className="hover:text-indigo-400 transition-colors">Preços</button>
          <button onClick={onDashboardClick} className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Dashboard
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onDashboardClick}
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg bg-white/5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Carteira
          </button>
          <button 
            onClick={onTryClick}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-500 transition-all shadow-md shadow-indigo-500/10 active:scale-95"
          >
            Testar Grátis
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
