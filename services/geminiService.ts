
import { GoogleGenAI } from "@google/genai";

export const optimizeContent = async (text: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `你是一位苹果公司的资深设计文案。请将以下设计师月报内容进行极简化润色。
      要求：
      1. 语气：极其自信、克制、充满力量。
      2. 风格：句子极短，杜绝形容词堆砌，只讲事实和影响。
      3. 结构：像 Apple 官网首屏标题一样有力。
      4. 语言：中文。
      
      内容：${text}`,
      config: {
        temperature: 0.6,
        topK: 1, // Focus on the most singular "Apple" style response
      }
    });

    return response.text || text;
  } catch (error) {
    console.error("Gemini optimization error:", error);
    return text;
  }
};
