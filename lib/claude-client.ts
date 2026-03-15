import Anthropic from "@anthropic-ai/sdk";
import { ContextPackage, CopyRow } from "./types";
import { IMAGE_ASSETS } from "./image-mapping";

function buildSystemPrompt(ctx: ContextPackage): string {
  const products = IMAGE_ASSETS.map((img) => img.product).join(", ");
  const clothingOptions = [
    ...new Set(IMAGE_ASSETS.map((img) => img.clothing)),
  ].join(", ");

  return `You are a copywriting expert for Hamilton Beach's "Yes You Can Chef" campaign. You generate headline copy for social static ads (9x16 format) that will be stamped into bold, variable-width stacked typography.

OBJECTIVE: ${ctx.objective}

AUDIENCE:
- Who: ${ctx.audience_context.who}
- Mindset: ${ctx.audience_context.mindset}
- What they need: ${ctx.audience_context.what_they_need}

TONE:
- Lane: ${ctx.tone_direction.lane}
- Register: ${ctx.tone_direction.register}
- Sounds like: ${ctx.tone_direction.sounds_like}
- Does NOT sound like: ${ctx.tone_direction.does_not_sound_like}

COPY RULES (every line must pass all 3):
${ctx.copy_rules.map((r, i) => `${i + 1}. ${r}`).join("\n")}

VOICE CALIBRATION (self-check after writing):
${ctx.voice_calibration}

FORMAT SPEC:
${ctx.format_spec}

Each headline is split into THREE lines (Line1a, Line2a, Line3a) that will be rendered as bold stacked text. The lines should:
- Distribute text with visual weight on the right beat
- Line3a typically carries the punch / payoff
- Lines should be SHORT — these are big bold headlines, not sentences
- ALL CAPS

Reference examples from the brand:
- "YOUR FRIEND'S" / "FAVORITE" / "HAPPY HOUR"
- "FRY EM'" / "COWBOY" / ""
- "MAKE IT LOOK" / "OVER EASY" / ""
- "PROTEIN SMOOTHIES" / "THAT DON'T" / "TASTE LIKE THE GYM"
- "START THE" / "ANTI WAFFLE" / "WAFFLE CLUB"
- "MEAL PREP" / "WITHOUT THE" / "MELTDOWN"
Note: Some headlines only use 2 lines (Line3a can be empty string). Use 2 or 3 lines depending on what the copy needs.

ART DIRECTION:
- Palette: ${ctx.art_direction.palette}
- In frame: ${ctx.art_direction.in_frame}
- Never in frame: ${ctx.art_direction.never_in_frame}
- Emotional reference: ${ctx.art_direction.emotional_reference}

CONTENT INPUTS:
- Primary message: ${ctx.content_inputs.primary_message}
- Product context: ${ctx.content_inputs.product_context}
- Use cases: ${ctx.content_inputs.use_cases.join("; ")}
- Proof points: ${ctx.content_inputs.proof_points.join("; ")}

DO NOT:
${ctx.do_not.map((d) => `- ${d}`).join("\n")}

IMAGE SELECTION:
For each headline, select which product the copy best matches from: ${products}
Also select a clothing/vibe context from: ${clothingOptions}
This will be used to pair the headline with the right photo.`;
}

function extractJSON(text: string): CopyRow[] {
  let jsonStr = text;
  if (text.includes("```json")) {
    jsonStr = text.split("```json")[1].split("```")[0];
  } else if (text.includes("```")) {
    jsonStr = text.split("```")[1].split("```")[0];
  }
  jsonStr = jsonStr.trim();

  try {
    return JSON.parse(jsonStr);
  } catch {
    const firstBracket = jsonStr.indexOf("[");
    const lastBracket = jsonStr.lastIndexOf("]");
    if (firstBracket !== -1 && lastBracket > firstBracket) {
      const extracted = jsonStr.slice(firstBracket, lastBracket + 1);
      try {
        return JSON.parse(extracted);
      } catch {
        // Try repairing newlines in strings
        const repaired = extracted.replace(
          /"([^"]*?)"/gs,
          (match: string, content: string) => {
            const fixed = content
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/\t/g, "\\t");
            return `"${fixed}"`;
          }
        );
        return JSON.parse(repaired);
      }
    }
    throw new Error("Could not parse Claude response as JSON");
  }
}

export async function generateCopy(
  contextPackage: ContextPackage,
  numVersions: number,
  channel: string
): Promise<CopyRow[]> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const systemPrompt = buildSystemPrompt(contextPackage);

  const userPrompt = `Generate exactly ${numVersions} headline variations for Hamilton Beach "Yes You Can Chef" social static ads running on ${channel}.

VARIETY RULES:
- Rotate through different use cases and product angles
- Vary entry point: some lead with food, some with the moment, some with the person
- Vary emotional register within the lane (warm permission to playful encouragement)
- Vary specificity: some hyper-specific, some broader
- Include 1-2 that use honest limitations or trade-offs for credibility
- ALL CAPS for all text

Return ONLY valid JSON — an array of objects with this structure:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE OR EMPTY STRING",
    "product_match": "Coffee|Toaster|Blender|Airfryer",
    "clothing_context": "Weekend at Home|Leaving for Work|Before a Workout"
  }
]

Return exactly ${numVersions} objects. No explanation, no markdown outside the JSON.`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";
  return extractJSON(text);
}
