
import React from 'react';

interface DashboardModalProps {
  onClose: () => void;
}

const DashboardModal: React.FC<DashboardModalProps> = ({ onClose }) => {
  const visaAccount = "4220360093643975";
  const maskedVisa = `**** **** **** ${visaAccount.slice(-4)}`;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="p-8 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Painel Financeiro</h2>
              <p className="text-slate-500 text-sm">Gerencie seus ganhos e conta de recebimento.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full text-slate-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-600 rounded-3xl p-6 shadow-xl shadow-indigo-500/20">
              <span className="text-indigo-100 text-xs font-bold uppercase tracking-wider mb-2 block">Saldo Total</span>
              <div className="text-3xl font-black text-white mb-4">842.500 Kz</div>
              <div className="flex items-center gap-2 text-indigo-100 text-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                +12% este mês
              </div>
            </div>

            <div className="bg-slate-800/50 border border-white/5 rounded-3xl p-6">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 block">Vendas Hoje</span>
              <div className="text-3xl font-black text-white mb-4">12.000 Kz</div>
              <div className="text-slate-400 text-xs">4 novas assinaturas</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest">Método de Recebimento</h3>
            
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl p-6 group cursor-pointer hover:border-indigo-500/50 transition-all">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="font-bold text-white">Visa Business</span>
                </div>
                <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black uppercase rounded">Ativo</div>
              </div>

              <div className="space-y-1">
                <div className="text-lg font-mono text-white tracking-[0.2em]">
                  {maskedVisa}
                </div>
                <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Conta Principal para Depósitos</div>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <p className="text-[11px] text-slate-500 text-center leading-relaxed italic">
              * Todo o dinheiro das vendas cairá automaticamente nesta conta Visa vinculada conforme as configurações da plataforma.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
            <button className="flex-1 py-4 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all active:scale-95 shadow-xl shadow-white/5">
              Sacar Agora
            </button>
            <button className="flex-1 py-4 bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-700 transition-all active:scale-95">
              Histórico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;
