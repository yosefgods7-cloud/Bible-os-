import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const THEOLOGICAL_GUARDRAILS = `You are the AI core of BibleOS.
Rules:
1. You are a servant of Scripture, not its authority.
2. Anchor theological claims in specific Bible references.
3. Be warm, encouraging, and spiritually sensitive.
4. Never contradict orthodox Christian theology.
5. On secondary issues, present main views without being dogmatic.
6. End with one specific Bible verse that speaks to the discussion.`;

export async function explainVerse(verseText: string, verseNum: number, book: string, chapter: number, version: string): Promise<string> {
  const contents = `Explain this verse in its context:
Book: ${book}
Chapter: ${chapter}
Verse: ${verseNum}
Version: ${version}
Text: ${verseText}

Provide theological explanation, historical context, and practical application.`;

  try {
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
    console.error("AI Error:", error);
    return "An error occurred while connecting to the AI service.";
  }
}

export async function generateDevotional(passage: string, theme?: string): Promise<string> {
  const contents = `Write a devotional based on ${passage}. ${theme ? `Focus on the theme of ${theme}.` : ''}
It should be 200-400 words, including reflection questions.`;

  try {
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
    console.error("AI Error:", error);
    return "An error occurred while connecting to the AI service.";
  }
}

export async function searchDictionary(term: string): Promise<string> {
  const contents = `Define this biblical term, name, location, or ritual: "${term}"
Provide encyclopedic details, geographical context (if applicable), and spiritual meaning.`;

  try {
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
    console.error("AI Error:", error);
    return "An error occurred while connecting to the dictionary AI.";
  }
}

export async function analyzeWord(word: string, verseContext: string): Promise<string> {
  const contents = `Give a deep dive linguistic analysis of the word or phrase "${word}" in the context of the following verse: "${verseContext}". Include original Hebrew/Greek roots where applicable, transliteration, meaning, and how it is used elsewhere in scripture.`;

  try {
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
    console.error("AI Error:", error);
    return "An error occurred while connecting to the AI service.";
  }
}

export async function generateRoadmap(userPrompt: string): Promise<string> {
  const contents = `You are a theologian and study guide creator for a Bible App. The user wants to create a new reading roadmap based on this focus: "${userPrompt}". 
Return ONLY a strictly valid JSON object matching this schema:
{
  "title": "Short title",
  "desc": "Short description",
  "bookFocus": "Which book(s) or topic",
  "timeToFinish": "e.g., 7 Days, 2 Weeks",
  "goals": "What the user will achieve",
  "modules": [ { "day": 1, "chapterToRead": 1 } ]
}
For the modules, chapterToRead must be a number representing the chapter. Return ONLY the JSON, without markdown blocks.`;

  try {
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
    console.error("AI Error:", error);
    throw error;
  }
}
