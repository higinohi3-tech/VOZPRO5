
import React from 'react';
import { PricingPlan } from '../types';

const PLANS: PricingPlan[] = [
  {
    name: 'Básico',
    price: '5.000 Kz',
    features: [
      'Até 25 áudios por mês',
      'Até 10 minutos por áudio',
      'Voz padrão',
      'Uso para redes sociais',
      'Suporte via email'
    ],
    cta: 'Começar Básico'
  },
  {
    name: 'Profissional',
    price: '45€ / 80 R$',
    recommended: true,
    features: [
      'Até 150 áudios por mês',
      'Até 30 minutos por áudio',
      'Vozes Premium (Todas)',
      'Download em Alta Qualidade (WAV)',
      'Licença de Uso Comercial',
      'Suporte Prioritário'
    ],
    cta: 'Assinar Pro'
  },
  {
    name: 'Empresarial',
    price: '90€ / 160 R$',
    features: [
      'Áudios Ilimitados',
      'Prioridade total na geração',
      'Voz exclusiva sob demanda',
      'Licença comercial total',
      'Gerente de conta dedicado',
      'Atendimento VIP 24/7'
    ],
    cta: 'Falar com Vendas'
  }
];

interface PricingProps {
  onPaymentClick?: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPaymentClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Planos e Preços</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg">Comece grátis e escale conforme sua necessidade cresce.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan, idx) => (
          <div 
            key={idx}
            className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border transition-all duration-300 hover:translate-y-[-8px] ${
              plan.recommended 
                ? 'bg-indigo-600 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105 z-10' 
                : 'bg-slate-900/50 border-white/5 shadow-xl shadow-black/50'
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-indigo-600 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                Recomendado
              </div>
            )}
            
            <div className="mb-10">
              <h3 className={`text-xl font-bold mb-3 ${plan.recommended ? 'text-indigo-100' : 'text-slate-200'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className={`text-4xl font-black ${plan.recommended ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                <span className={`${plan.recommended ? 'text-indigo-200' : 'text-slate-500'} text-sm font-medium`}>/mês</span>
              </div>
            </div>

            <ul className="flex-grow space-y-5 mb-10">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-4 text-sm">
                  <div className={`mt-0.5 rounded-full p-0.5 ${plan.recommended ? 'bg-indigo-400 text-white' : 'bg-slate-800 text-indigo-400'}`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={plan.recommended ? 'text-indigo-50 font-medium' : 'text-slate-400'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={onPaymentClick}
              className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-[0.98] ${
                plan.recommended 
                  ? 'bg-white text-indigo-600 hover:bg-slate-100 shadow-xl shadow-white/10' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/10'
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Pagamentos seguros processados via Visa (Conta vinculada: **** 3975)
        </p>
      </div>
    </div>
  );
};

export default Pricing;
