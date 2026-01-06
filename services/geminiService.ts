
import { GoogleGenAI } from "@google/genai";
import { StagedFile } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const summarizeRepo = async (name: string, description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a 3-bullet point summary of what the following repository likely does based on its metadata. 
      Name: ${name}
      Description: ${description}`,
      config: {
        systemInstruction: "You are a world-class senior software engineer at a major tech company. Be concise and professional.",
      }
    });
    return response.text || "No summary available.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to generate AI summary. Check your API key.";
  }
};

export const explainCode = async (fileName: string, content: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Explain what this file (${fileName}) does in 2-3 sentences:
      
      \`\`\`
      ${content}
      \`\`\``,
      config: {
        systemInstruction: "Explain code concepts simply and effectively.",
      }
    });
    return response.text || "No explanation available.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Unable to explain code right now.";
  }
};

export const generateCommitMessage = async (stagedFiles: StagedFile[]) => {
  try {
    const diffs = stagedFiles.map(f => `File: ${f.path}\nStatus: ${f.status}\nDiff:\n${f.diff}`).join('\n\n');
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a git commit message for these staged changes based on Conventional Commits standards.
      
      Changes:
      ${diffs}`,
      config: {
        systemInstruction: "You are a helpful coding assistant. Output ONLY the commit message (Subject and Body). Do not include markdown code blocks, backticks, or any other conversational text.",
        temperature: 0.7,
      }
    });
    return response.text?.trim() || "";
  } catch (error) {
    console.error("Gemini Commit Gen Error:", error);
    return "chore: update files";
  }
};
