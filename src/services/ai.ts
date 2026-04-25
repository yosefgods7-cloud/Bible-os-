import { GoogleGenAI } from "@google/genai";

function getAiInstance(): GoogleGenAI {
  const customKey = localStorage.getItem('customGeminiKey');
  if (customKey && customKey.trim().length > 10) {
    return new GoogleGenAI({ apiKey: customKey.trim() });
  }
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

const THEOLOGICAL_GUARDRAILS = `You are the AI core of BibleOS.
Rules:
1. You are a servant of Scripture, not its authority.
2. Anchor theological claims in specific Bible references.
3. Be warm, encouraging, and spiritually sensitive.
4. Never contradict orthodox Christian theology.
5. On secondary issues, present main views without being dogmatic.
6. End with one specific Bible verse that speaks to the discussion.`;


function trackApiUsage() {
  const count = parseInt(localStorage.getItem('apiUsageCount') || '0', 10);
  localStorage.setItem('apiUsageCount', (count + 1).toString());
}

function handleAiError(error: any, fallbackParams?: { isJson?: boolean }): string {
  console.error("AI Error:", error);
  const errStr = typeof error === 'object' ? JSON.stringify(error) : String(error);
  const isQuota = errStr.includes('429') || errStr.includes('quota') || errStr.includes('RESOURCE_EXHAUSTED');
  
  if (isQuota) {
    throw new Error("API Quota Exceeded. You have reached your Gemini AI usage limit. Please try again later or check your API key.");
  }

  throw new Error("An error occurred while connecting to the AI service.");
}

export async function explainVerse(verseText: string, verseNum: number, book: string, chapter: number, version: string): Promise<string> {
  trackApiUsage();
  const contents = `Explain this verse in its context:
Book: ${book}
Chapter: ${chapter}
Verse: ${verseNum}
Version: ${version}
Text: ${verseText}

Provide theological explanation, historical context, and practical application.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: THEOLOGICAL_GUARDRAILS,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I could not generate an explanation at this time.";
  } catch (error) {
    return handleAiError(error);
  }
}

export async function generateDevotional(passage: string, theme?: string): Promise<string> {
  trackApiUsage();
  const contents = `Write a devotional based on ${passage}. ${theme ? `Focus on the theme of ${theme}.` : ''}
It should be 200-400 words, including reflection questions.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: THEOLOGICAL_GUARDRAILS,
        temperature: 0.7,
      }
    });

    return response.text || "Could not generate devotional.";
  } catch (error) {
    return handleAiError(error);
  }
}

export async function searchDictionary(term: string): Promise<string> {
  trackApiUsage();
  const contents = `Define this biblical term, name, location, or ritual: "${term}"
Provide encyclopedic details, geographical context (if applicable), and spiritual meaning.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: THEOLOGICAL_GUARDRAILS,
        temperature: 0.5,
      }
    });

    return response.text || "Could not generate definition.";
  } catch (error) {
    return handleAiError(error);
  }
}

export async function analyzeWord(word: string, verseContext: string): Promise<string> {
  trackApiUsage();
  const contents = `Give a deep dive linguistic analysis of the word or phrase "${word}" in the context of the following verse: "${verseContext}". Include original Hebrew/Greek roots where applicable, transliteration, meaning, and how it is used elsewhere in scripture.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: THEOLOGICAL_GUARDRAILS,
        temperature: 0.3,
      }
    });

    return response.text || "Could not analyze the word.";
  } catch (error) {
    return handleAiError(error);
  }
}

export async function askDeepDive(query: string): Promise<string> {
  trackApiUsage();
  const contents = `The user is asking a biblical deep dive query: "${query}". Address it thoroughly but accessibly. Include historical context, theological insight, and spiritual encouragement where appropriate. Cite relevant Bible verses.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: THEOLOGICAL_GUARDRAILS,
        temperature: 0.7,
      }
    });

    return response.text || "No response provided by AI.";
  } catch (error) {
    handleAiError(error);
    return "Error"; // Unreachable because handleAiError throws
  }
}

export async function getAiSuggestion(latestBook: string): Promise<string> {
  trackApiUsage();
  const contents = `The user was most recently reading the book of "${latestBook}" in the Bible. Give a very short 1-sentence personalized suggestion on what to read next and a tiny bit of why. Do not use quotes. E.g. Since you were studying Genesis, consider reading the Gospel of John to see the beginning from a new perspective.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: THEOLOGICAL_GUARDRAILS,
        temperature: 0.8,
      }
    });

    return response.text || "Consider reading Psalm 1 today to realign with the Word of God.";
  } catch (error) {
    console.error("AI Error:", error);
    const errStr = typeof error === 'object' ? JSON.stringify(error) : String(error);
    if (errStr.includes('429') || errStr.includes('quota')) return "Your AI Guide is resting. (Quota Exceeded) Consider reading Psalm 1 today.";
    return "Consider diving into the Book of Proverbs today for some timeless wisdom.";
  }
}

export async function generateRoadmap(userPrompt: string): Promise<string> {
  trackApiUsage();
  const contents = `You are a theologian and study guide creator for a Bible App. The user wants to create a new reading roadmap based on this focus: "${userPrompt}". 
Return ONLY a strictly valid JSON object matching this schema:
{
  "title": "Short title",
  "desc": "Short description",
  "bookFocus": "Which book(s) or topic",
  "timeToFinish": "e.g., 7 Days, 2 Weeks",
  "goals": "What the user will achieve",
  "dailyPlans": [
    {
      "day": 1,
      "dailyGoal": "What to achieve today",
      "guideText": "A short guide to what is being read today.",
      "chapters": [ { "book": "Genesis", "chapter": 1 } ]
    }
  ]
}
Return ONLY the JSON, without markdown blocks.`;

  try {
    const ai = getAiInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: contents,
      config: {
        systemInstruction: THEOLOGICAL_GUARDRAILS,
        temperature: 0.7,
      }
    });

    // Remove any markdown block tags from the response before returning
    let rawJson = response.text || "{}";
    rawJson = rawJson.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return rawJson;
  } catch (error) {
    handleAiError(error);
    return "{}"; // Unreachable
  }
}
