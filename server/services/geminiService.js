const axios = require("axios");

async function generateFromGemini(data) {
  const { topic, contentType, tone, length } = data;

  const prompt = `
Generate a ${length} ${contentType} about "${topic}".

Tone: ${tone}

Write only the requested content without any extra explanation.
`;

  try {
    console.log("API Key Exists:", !!process.env.OPENROUTER_API_KEY);
    console.log("Model:", process.env.OPENROUTER_MODEL);

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: process.env.OPENROUTER_MODEL,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://ai-content-generator-env.eba-rsp3zs5j.ap-south-1.elasticbeanstalk.com",
          "X-Title": "AI Content Generator"
        }
      }
    );

    return {
      success: true,
      content: response.data.choices[0].message.content
    };

  } catch (error) {

    console.log("========== OPENROUTER ERROR ==========");
    console.log("Status:", error.response?.status);
    console.log("Data:", JSON.stringify(error.response?.data, null, 2));
    console.log("Headers:", error.response?.headers);

    throw error;
  }
}

module.exports = {
  generateFromGemini
};