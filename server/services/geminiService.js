const axios = require("axios");

async function generateFromGemini(data) {
  const { topic, contentType, tone, length } = data;

  const prompt = `
Generate a ${length} ${contentType} about "${topic}".

Tone: ${tone}

Write only the requested content without any extra explanation.
`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: process.env.OPENROUTER_MODEL || "openai/gpt-oss-20b:free",
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
          "Content-Type": "application/json"
        }
      }
    );

    return {
      success: true,
      content: response.data.choices[0].message.content
    };

  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    throw error;
  }
}

module.exports = {
  generateFromGemini
};
