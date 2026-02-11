
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">VozPro AI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Sua plataforma completa de síntese de voz baseada em IA generativa de última geração. 
              Transforme textos em experiências auditivas memoráveis e profissionais.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-[0.2em]">Produto</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Galeria de Vozes</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Planos e Preços</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentação API</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-[0.2em]">Suporte</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Status do Sistema</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Comunidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-xs uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-slate-600 font-medium tracking-wider uppercase">
            © 2024 VozPro AI. Desenvolvido com Gemini AI.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-slate-600 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
