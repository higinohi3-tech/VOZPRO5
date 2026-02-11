
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioGenerator from './components/AudioGenerator';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import DashboardModal from './components/DashboardModal';

const App: React.FC = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Header 
        onPricingClick={() => scrollToSection('pricing')} 
        onTryClick={() => scrollToSection('generator')}
        onDashboardClick={() => setIsDashboardOpen(true)}
      />
      
      <main className="flex-grow">
        <Hero onTryClick={() => scrollToSection('generator')} />
        
        <div id="generator" className="py-20 bg-slate-900/50 border-y border-white/5">
          <AudioGenerator onUpgradeClick={() => scrollToSection('pricing')} />
        </div>

        <div id="pricing" className="py-20 bg-slate-950">
          <Pricing onPaymentClick={() => setIsDashboardOpen(true)} />
        </div>
      </main>

      <Footer />

      {isDashboardOpen && (
        <DashboardModal onClose={() => setIsDashboardOpen(false)} />
      )}
    </div>
  );
};

export default App;
