
import { GoogleGenAI, Modality } from "@google/genai";
import { decode, decodeAudioData } from "../utils/audio";

const API_KEY = process.env.API_KEY;

export async function generateSpeech(text: string, voiceName: string): Promise<AudioBuffer> {
  const ai = new GoogleGenAI({ apiKey: API_KEY! });
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Diga profissionalmente: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: voiceName },
        },
      },
    },
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  
  if (!base64Audio) {
    throw new Error("Não foi possível gerar o áudio.");
  }

  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const decodedData = decode(base64Audio);
  return await decodeAudioData(decodedData, audioContext, 24000, 1);
}
