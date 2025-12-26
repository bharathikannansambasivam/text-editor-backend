require("dotenv").config();
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const axios = require("axios");

const SYSTEM_PROMPT = `
You are an AI assistant for a MERN-based application called FindMyDocs.

FindMyDocs is a document management app that allows users to create, edit, search, and manage documents.
The app is developed by Bharathikannan.

You are a knowledgeable assistant.
Answer clearly, factually, and KEEP RESPONSES SHORT (2–3 lines maximum).

If a question is about the app or the developer, always answer using the information above.
If anyone asks who built this app, clearly say that the developer is Bharathikannan.

IMPORTANT RULES (STRICT):
- You must ALWAYS return a meaningful response.
- NEVER return an empty message, blank space, or silence.
- If a question asks for personal or private information about anyone, politely refuse and redirect to app-related or technical help.
- If you are unsure about an answer, make a best-effort response instead of staying silent.
- If a question is unclear, politely ask for clarification instead of returning nothing.
`;

exports.chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },

          { role: "user", content: message },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const aiReply = response.data.choices[0].message.content;

    return res.json({
      reply: aiReply,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI error" });
  }
};
