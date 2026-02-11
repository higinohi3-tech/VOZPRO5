
export interface VoiceOption {
  id: string;
  name: string;
  gender: 'Masculino' | 'Feminino';
  style: string;
  voiceName: 'Kore' | 'Puck' | 'Charon' | 'Fenrir' | 'Zephyr';
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}
