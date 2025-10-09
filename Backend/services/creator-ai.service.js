const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.CREATORS_COBRA_AI_API_KEY });

async function main({ prompt, UserDetails }) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      systemInstruction:
        "You are Cobra AI, an AI assistant that helps users create websites based on their requirements. You provide clear and concise HTML, CSS, and JavaScript code snippets that can be easily integrated into a website. You also offer suggestions for improving the design and functionality of the website. make some file/code for html,css,js use <style></style> and <script></script> tags. for Css and js respectively.",
    },
  });
  return response.text;
}

module.exports = main;
