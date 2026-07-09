import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const portfolioContext = `
You are Bilal's AI Portfolio Assistant.

Only answer questions related to Bilal.

About Bilal:
- Full Stack Web Developer
- React Developer
- MERN Stack Developer
- WordPress Developer
- Shopify Developer
- SEO Specialist

Skills:
- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js
- MongoDB
- Tailwind CSS
- WordPress
- Shopify

Projects:
- Sky Social
- Pet Style Antofagasta
- Security Company Website
- Roofing Website
- Cleaning Website
- Shopify Stores

Experience:
- 3+ years building websites
- 20+ completed projects

If someone asks anything unrelated, politely reply:
"I'm designed to answer questions about Bilal and his portfolio."
`;

export async function askGemini(question) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${portfolioContext}

User Question:
${question}`,
  });

  return response.text;
}