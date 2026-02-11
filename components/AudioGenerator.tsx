
import React, { useState, useRef } from 'react';
import { VoiceOption } from '../types';
import { generateSpeech } from '../services/geminiService';

const VOICES: VoiceOption[] = [
  { id: '1', name: 'Ricardo', gender: 'Masculino', style: 'Grave e Maduro', voiceName: 'Kore' },
  { id: '2', name: 'Ana', gender: 'Feminino', style: 'Jovem e Energética', voiceName: 'Puck' },
  { id: '3', name: 'Marcos', gender: 'Masculino', style: 'Narrativo e Calmo', voiceName: 'Charon' },
  { id: '4', name: 'Helena', gender: 'Feminino', style: 'Profissional e Clara', voiceName: 'Zephyr' },
  { id: '5', name: 'Gabriel', gender: 'Masculino', style: 'Dinâmico', voiceName: 'Fenrir' },
];

interface AudioGeneratorProps {
  onUpgradeClick: () => void;
}

const AudioGenerator: React.FC<AudioGeneratorProps> = ({ onUpgradeClick }) => {
  const [text, setText] = useState('');
  const [selectedVoice, setSelectedVoice] = useState<VoiceOption>(VOICES[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const handleGenerate = async () => {
    if (!text.trim()) {
      setError('Por favor, digite um texto para converter.');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const buffer = await generateSpeech(text, selectedVoice.voiceName);
      setAudioBuffer(buffer);
    } catch (err: any) {
      console.error(err);
      setError('Ocorreu um erro ao gerar a voz. Verifique sua conexão ou tente novamente mais tarde.');
    } finally {
      setIsGenerating(false);
    }
  };

  const playAudio = () => {
    if (!audioBuffer) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
    }

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContextRef.current.destination);
    source.start(0);
    sourceNodeRef.current = source;
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-slate-900 rounded-3xl shadow-2xl shadow-black border border-white/5 p-6 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-500/10 rounded-lg">
            <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Estúdio de Voz</h2>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Digite seu roteiro</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Digite ou cole aqui o roteiro que deseja transformar em voz..."
              className="w-full h-44 p-5 rounded-2xl bg-slate-800/50 border border-white/10 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all resize-none shadow-inner"
            />
            <div className="mt-2 text-right text-xs text-slate-500 font-mono">
              {text.length} / 5000
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-4">Selecione uma Voz Profissional</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {VOICES.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => setSelectedVoice(voice)}
                  className={`flex flex-col items-start p-4 rounded-2xl border-2 transition-all group ${
                    selectedVoice.id === voice.id 
                      ? 'border-indigo-500 bg-indigo-500/10' 
                      : 'border-white/5 bg-slate-800/30 hover:border-white/20 hover:bg-slate-800/50'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${
                    selectedVoice.id === voice.id ? 'text-indigo-400' : 'text-slate-500'
                  }`}>
                    {voice.gender}
                  </span>
                  <span className={`font-bold transition-colors ${
                    selectedVoice.id === voice.id ? 'text-white' : 'text-slate-300'
                  }`}>{voice.name}</span>
                  <span className="text-xs text-slate-500 mt-1">{voice.style}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center">
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 text-red-400 text-sm rounded-xl flex items-center gap-3 border border-red-500/20 w-full max-w-xl">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`group relative w-full md:w-72 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 overflow-hidden shadow-2xl ${
                isGenerating 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-500/20 active:scale-95'
              }`}
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando...
                </>
              ) : (
                <>
                  Gerar Narração
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </>
              )}
            </button>

            {audioBuffer && !isGenerating && (
              <div className="mt-12 w-full animate-in fade-in zoom-in-95 duration-700">
                <div className="bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-white/5 shadow-inner">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 w-full">
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Prévia Gratuita</span>
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                          <span className="text-[10px] text-green-500 font-bold uppercase">Áudio Gerado</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <button 
                          onClick={playAudio}
                          className="w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center hover:scale-105 transition-all active:scale-95 group"
                        >
                          <svg className="w-8 h-8 text-slate-900 fill-current group-hover:text-indigo-600 transition-colors" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                        <div className="flex-1 space-y-2">
                          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 w-1/2 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                            <span>00:00</span>
                            <span>Amostra</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                      <button 
                        onClick={onUpgradeClick}
                        className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-400 transition-all text-sm whitespace-nowrap shadow-lg shadow-indigo-500/20 active:scale-95"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Baixar em Alta Definição
                      </button>
                      <p className="text-[10px] text-center text-slate-500">Qualidade Professional (WAV/MP3)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5', title: 'Escreva seu roteiro', desc: 'Edição simples com suporte a pontuação expressiva.' },
          { icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4', title: 'Vozes IA Realistas', desc: 'Timbres humanos com emoção e entonação natural.' },
          { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Exportação Instantânea', desc: 'Pronto para uso em suas redes sociais e projetos.' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/40 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 border border-indigo-500/20">
              <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <h3 className="font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioGenerator;
