
import React from 'react';

interface HeroProps {
  onTryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onTryClick }) => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Nova IA Gemini 2.5
        </div>
        
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Transforme texto em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">voz profissional</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crie narrações realistas para vídeos, apresentações e redes sociais em segundos com a tecnologia de voz mais humana do mundo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onTryClick}
            className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
          >
            Começar Agora
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95">
            Ver Exemplos
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30 grayscale invert brightness-200 transition-all duration-500 hover:opacity-60">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-24 bg-slate-700 rounded-md"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-24 bg-slate-700 rounded-md"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-24 bg-slate-700 rounded-md"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-24 bg-slate-700 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
