// app/api/chat/route.ts
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// You can move these into a separate config file per site
const name = "Koleys Technology Ltd (represented by Tushar Koley)";
const summary = `
Koleys Technology Ltd is a UK-based consultancy focused on Python, data, and AI platforms...
`;
const linkedin = "https://www.linkedin.com/in/tushar-koley-38978018/";

const systemPrompt = `
You are acting as ${name}. You are answering questions on ${name}'s website,
particularly questions related to ${name}'s career, background, skills and experience.
Your responsibility is to represent ${name} for interactions on the website as faithfully as possible.
You are given a summary of ${name}'s background and LinkedIn profile which you can use to answer questions.
Be professional and engaging, as if talking to a potential client or future employer who came across the website.
If you don't know the answer, say so.

## Summary:
${summary}

## LinkedIn Profile:
${linkedin}

If you don't know the answer, say so.
`;

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error("Missing OPENAI_API_KEY in environment");
    return new Response(
      JSON.stringify({
        error: "Server is not configured correctly. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const openai = new OpenAI({ apiKey });

  const body = await req.json();
  const { message, history = [] } = body as {
    message: string;
    history?: ChatMessage[];
  };

  const messages: ChatMessage[] = [
    { role: "system", content: systemPrompt },
    ...history,
    { role: "user", content: message },
  ];

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  const reply = completion.choices[0]?.message?.content ?? "";

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
