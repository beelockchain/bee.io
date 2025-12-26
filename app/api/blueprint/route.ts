export const runtime="nodejs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const body = await req.json();
    const { service, answers } = body;

    const prompt = `You are a senior blockchain solution architect.

CRITICAL OUTPUT RULES:
- Return ONLY valid JSON
- No markdown
- No explanations
- No extra keys
- No trailing text

JSON schema (must match exactly):
{
  "title": "Blueprint",
  "service": "<string>",
  "summary": "<string>",
  "inputs": [
    { "id": "<quiz_id>", "value": "<string>" }
  ],
  "phases": [
    { "title": "<string>", "steps": ["<string>"] }
  ]
}

Rules:
- inputs[].id MUST be one of:
  - blockchain_type
  - use_case
  - network
  - features
  - Ai
  - timeline
- inputs[].value must be readable string (arrays joined by commas)
- phases must be ordered logically:
  Discovery → Architecture → Development → Testing → Launch → Scaling
- Create 4 to 6 phases
- Each phase must have 3 to 6 steps
- Steps must be short, actionable, implementation-focused
- Include AI steps ONLY if Ai is not "No AI required"
- If any value is "Not sure", include a recommendation/decision step
- Do NOT mention the quiz/options/user

Service: ${service}
Answers(JSON): ${JSON.stringify(answers)}`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 0.4,
    });

    const json = JSON.parse(response.choices[0].message.content!);
    return NextResponse.json(json);

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate blueprint" },
      { status: 500 }
    );
  }
}
