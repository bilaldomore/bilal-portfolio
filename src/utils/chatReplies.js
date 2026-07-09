export function getCommonReply(message) {
  const text = message.toLowerCase().trim();

  // Greetings
  if (
    ["hi", "hello", "hey", "assalamualaikum", "salam"].includes(text)
  ) {
    return `
👋 Hello!

Welcome to Bilal's AI Assistant.

I can help you with:

• Skills
• Experience
• Projects
• Services
• Contact Information

How can I help you today?
`;
  }

  // Thanks
  if (
    [
      "thanks",
      "thank you",
      "thankyou",
      "thx",
      "ty",
      "jazakallah",
      "jazakallah khair",
    ].includes(text)
  ) {
    return `
You're very welcome! 😊

I'm glad I could help.

If you have any more questions about Bilal's:

• Skills
• Projects
• Experience
• Services

Feel free to ask anytime.

Have a wonderful day! 🚀
`;
  }

  // Goodbye
  if (
    ["bye", "goodbye", "see you", "allah hafiz", "khuda hafiz"].includes(text)
  ) {
    return `
👋 Goodbye!

Thank you for visiting Bilal's portfolio.

Have a great day and feel free to come back anytime.

🚀
`;
  }

  return null;
}