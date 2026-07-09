const allowedKeywords = [
  "bilal",
  "portfolio",
  "project",
  "projects",
  "react",
  "mern",
  "node",
  "express",
  "mongodb",
  "javascript",
  "html",
  "css",
  "tailwind",
  "wordpress",
  "shopify",
  "seo",
  "developer",
  "experience",
  "skills",
  "service",
  "services",
  "hire",
  "contact",
  "email",
  "phone",
  "resume",
  "cv",
  "freelance",
  "website",
  "web",
  "frontend",
  "backend",
];

export function isPortfolioQuestion(question) {
  const text = question.toLowerCase();

  return allowedKeywords.some((keyword) =>
    text.includes(keyword)
  );
}