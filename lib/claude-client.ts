import Anthropic from "@anthropic-ai/sdk";
import { ContextPackage, CopyRow } from "./types";
import { IMAGE_ASSETS } from "./image-mapping";

// ─── Distill the Nucleus context into a short creative brief ───

function distillBrief(ctx: ContextPackage): string {
  // Pull just the essentials — audience, mindset, tone, and guardrails
  // Everything else is noise that pushes the agent toward strategy-speak
  return `Write for: ${ctx.audience_context.who}. ${ctx.audience_context.mindset}. They need to feel: ${ctx.audience_context.what_they_need}.

Tone: ${ctx.tone_direction.register}. Sounds like: ${ctx.tone_direction.sounds_like}. Does NOT sound like: ${ctx.tone_direction.does_not_sound_like}.

Avoid: ${ctx.do_not.slice(0, 5).join("; ")}.`;
}

// ─── Phase 1: Write headlines ───

function buildWritingPrompt(ctx: ContextPackage): string {
  const brief = distillBrief(ctx);

  return `You are a copywriter on the Hamilton Beach "Yes You Can Chef" campaign. Bold stacked text on 9x16 social ads over photos of real people in real kitchens.

BRIEF:
${brief}

═══════════════════════════════════════════
HEADLINES THE CREATIVE TEAM LOVED
═══════════════════════════════════════════

These are organized by WHY they work. Study the patterns, then write new ones.

WORDPLAY & PUNS — a familiar word or phrase gets a cooking twist:
- "WHISK IT" / "FOR THE" / "BISCUIT"
- "FRY FIRST," / "ASK QUESTIONS" / "LATER"
- "MAKE IT" / "LOOK" / "OVER EASY"
- "IT WASN'T" / "COMPLICATED" / "IT JUST LOOKED LIKE IT"

SELF-AWARE HUMOR — admitting imperfection with a wink:
- "MADE IT" / "FROM SCRATCH" / "MOSTLY"
- "FIRST TIME" / "HOSTING." / "YOU SURVIVED"
- "NOT BAD" / "FOR A" / "TUESDAY"
- "MESSY" / "BUT STILL" / "DELICIOUS"

SPECIFIC LIFE MOMENTS — you can picture the exact scene:
- "ADULTHOOD" / "SMELLS LIKE" / "GARLIC"
- "YOU WERE" / "AT WORK." / "IT COOKED"
- "YOUR FRIEND'S" / "FAVORITE" / "HAPPY HOUR"
- "YOU HAVE" / "A SIGNATURE" / "DISH NOW"

CONFIDENT — swagger, no filler:
- "SMOOTHIE" / "GAME:" / "UNDEFEATED"
- "BLEND IT" / "LIKE YOU" / "MEAN IT"
- "THE PERFECT" / "GOLDEN" / "BROWN"
- "MAKE FRIES" / "WORTH" / "FIGHTING OVER"

THE PATTERNS:
1. Most are 2–5 words total. Short hits hardest.
2. The best ones make you SMILE or NOD — they're recognizable moments.
3. Self-awareness > confidence > cleverness. "MOSTLY" is funnier than trying to be witty.
4. The product is NEVER in the words. It's in the photo.
5. Each headline works as something you'd actually say to a friend.

DO NOT REUSE ANY OF THESE. Write completely original headlines using these same patterns.

FORMAT:
- ALWAYS 3 lines (Line1a, Line2a, Line3a). Every headline MUST have all 3 lines filled.
- ALL CAPS. 1–4 words per line. 3–8 words total.
- Last line carries the weight — that's the beat that lands.
- Rare punctuation. No periods except for dramatic effect. Contractions welcome.
- For short headlines, split across 3 lines: "BLEND IT" / "LIKE YOU" / "MEAN IT" not "BLEND IT LIKE YOU" / "MEAN IT".`;
}

// ─── Phase 2: Creative Director QC ───

const CD_REVIEW_SYSTEM = `You are creative directing Hamilton Beach "Yes You Can Chef" social ads.

THE QUALITY BAR — the creative team's favorite headlines from this campaign:
- "FRY EM' COWBOY" — pure attitude, two words
- "MADE IT FROM SCRATCH MOSTLY" — self-aware, funny, honest
- "ADULTHOOD SMELLS LIKE GARLIC" — unexpected, specific, you can picture it
- "SOUP-ER EASY" — pun, playful, effortless
- "NEW APARTMENT FIRST MEAL" — specific life moment
- "NOT BAD FOR A TUESDAY" — understated, specific day
- "YOU DID WELLINGTON" — aspirational but accessible
- "WHISK IT FOR THE BISCUIT" — wordplay
- "FIRST TIME HOSTING. YOU SURVIVED" — self-aware humor

WHAT THE TEAM RESPONDS TO:
1. Lines that make them smile or nod — recognizable moments
2. Self-aware humor beats trying to be clever
3. Short and specific beats long and smart
4. They should work as something you'd actually say

For each headline, ask: "Does this belong next to 'FRY EM' COWBOY' and 'MADE IT FROM SCRATCH MOSTLY'?"

PASS → Yes, it has the energy. Ship it.
REWRITE → The idea is there but the words need work. Make it shorter, sharper, more specific.
CUT → It's flat, generic, or trying too hard. Replace with something that has real personality. Your replacement should be 2–5 words and feel like something a person would actually say.

CUT immediately if:
- It's vague ("COOK SMART", "REAL FOOD", "KITCHEN VIBES")
- It could be for any brand
- It sounds like a brand brief, not a headline
- It combines concepts that don't naturally go together
- You wouldn't text it to a friend`;

// ─── Phase 3: Assign images ───

function buildImageAssignmentPrompt(): string {
  const imageDescriptions = IMAGE_ASSETS.map(
    (img) =>
      `• ${img.product} (${img.file_name}): ${img.model} in a ${img.kitchen}, dressed ${img.clothing}`
  ).join("\n");

  return `You are pairing headlines with photography for Hamilton Beach social ads. Each photo shows a person using a specific appliance.

Available photos:
${imageDescriptions}

MATCHING RULES:
1. The headline text should NOT CONTRADICT what's visible in the photo. This is the most important rule.
   - If the headline mentions blending, smoothies, or mixing → use a Blender or Personal Blender photo
   - If the headline mentions frying, crispy, or air frying → use an Air Fryer photo
   - If the headline mentions toast, toasting, or breakfast bread → use a Toaster photo
   - If the headline mentions coffee, espresso, or morning brew → use a Coffee Maker photo
   - If the headline mentions chopping, seasoning, or cooking generally → Air Fryer or Toaster work (NOT a blender)

2. If the headline is GENERIC (no specific food action — like "NOT BAD FOR A TUESDAY" or "ADULTHOOD SMELLS LIKE GARLIC"), any product works. Pick based on vibe:
   - Cozy/evening vibes → After Work or Weekend Casual clothing shots
   - Morning/energy vibes → Before Work or Pre Workout shots
   - Social/hosting vibes → any that feel warm and inviting

3. Spread photos evenly across the batch — no more than 3 headlines on the same product category.

4. When in doubt, pick the photo that would LOOK best as an ad with that headline over it.`;
}

// ─── JSON extraction ───

function extractJSON<T>(text: string): T {
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
    throw new Error("Could not parse response as JSON");
  }
}

// ─── Types ───

interface RawHeadline {
  Line1a: string;
  Line2a: string;
  Line3a: string;
}

interface CheckedHeadline {
  Line1a: string;
  Line2a: string;
  Line3a: string;
  status: "PASS" | "REWRITE" | "CUT";
}

interface ImageAssignment {
  index: number;
  product_match: string;
  clothing_context: string;
}

// ─── Main pipeline ───

export async function generateCopy(
  contextPackage: ContextPackage,
  numVersions: number,
  channel: string
): Promise<CopyRow[]> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // ── PHASE 1: Write headlines ──
  const overgenerate = numVersions + 4;

  const writeResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: buildWritingPrompt(contextPackage),
    messages: [
      {
        role: "user",
        content: `Write ${overgenerate} original headlines for Hamilton Beach "Yes You Can Chef" social static ads on ${channel}.

Mix across the patterns:
- A few wordplay/puns
- A few self-aware / honest humor
- A few specific life moments
- A few short confident ones
- EVERY headline MUST have all 3 lines filled (Line1a, Line2a, Line3a). No empty lines. Split short headlines across 3 lines.

Return ONLY a JSON array:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE (required, never empty)"
  }
]

${overgenerate} objects. No commentary.`,
      },
    ],
  });

  const writeText =
    writeResponse.content[0].type === "text"
      ? writeResponse.content[0].text
      : "";
  const rawHeadlines = extractJSON<RawHeadline[]>(writeText);

  // ── PHASE 2: CD Review ──
  const headlineList = rawHeadlines
    .map(
      (h, i) =>
        `${i + 1}. "${h.Line1a}" / "${h.Line2a}"${h.Line3a ? ` / "${h.Line3a}"` : ""}`
    )
    .join("\n");

  const checkResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: CD_REVIEW_SYSTEM,
    messages: [
      {
        role: "user",
        content: `Review these headlines. I need ${numVersions} strong ones for the final batch.

${headlineList}

For each: PASS, REWRITE (sharper), or CUT (replace entirely).

Return ONLY a JSON array:
[
  {
    "Line1a": "LINE",
    "Line2a": "LINE",
    "Line3a": "LINE (required, never empty)",
    "status": "PASS|REWRITE|CUT"
  }
]

${rawHeadlines.length} objects. Be tough but creative — replacements should have real personality.`,
      },
    ],
  });

  const checkText =
    checkResponse.content[0].type === "text"
      ? checkResponse.content[0].text
      : "";
  const checkedHeadlines = extractJSON<CheckedHeadline[]>(checkText);

  // Prioritize PASSes, then REWRITEs, then CUTs
  const prioritized = [...checkedHeadlines].sort((a, b) => {
    const order = { PASS: 3, REWRITE: 2, CUT: 1 };
    return (order[b.status] || 0) - (order[a.status] || 0);
  });

  const finalHeadlines: RawHeadline[] = prioritized
    .slice(0, numVersions)
    .map((h) => ({
      Line1a: h.Line1a,
      Line2a: h.Line2a,
      Line3a: h.Line3a,
    }));

  // ── PHASE 3: Assign images ──
  const products = IMAGE_ASSETS.map((img) => img.product).join(", ");
  const clothingOptions = [
    ...new Set(IMAGE_ASSETS.map((img) => img.clothing)),
  ].join(", ");

  const finalList = finalHeadlines
    .map(
      (h, i) =>
        `${i + 1}. "${h.Line1a}" / "${h.Line2a}"${h.Line3a ? ` / "${h.Line3a}"` : ""}`
    )
    .join("\n");

  const imageResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2000,
    system: buildImageAssignmentPrompt(),
    messages: [
      {
        role: "user",
        content: `Assign photos to these headlines:

${finalList}

Return ONLY a JSON array:
[
  { "index": 0, "product_match": "one of: ${products}", "clothing_context": "one of: ${clothingOptions}" }
]

0-based indexing. ${finalHeadlines.length} objects. Spread evenly across photos.`,
      },
    ],
  });

  const imageText =
    imageResponse.content[0].type === "text"
      ? imageResponse.content[0].text
      : "";
  const imageAssignments = extractJSON<ImageAssignment[]>(imageText);

  // ── Combine ──
  return finalHeadlines.map((headline, i) => {
    const assignment = imageAssignments.find((a) => a.index === i);
    return {
      Line1a: headline.Line1a,
      Line2a: headline.Line2a,
      Line3a: headline.Line3a,
      product_match: assignment?.product_match || "Coffee",
      clothing_context: assignment?.clothing_context || "Weekend at Home",
    };
  });
}
