import Anthropic from "@anthropic-ai/sdk";
import { ContextPackage, CopyRow } from "./types";
import { IMAGE_ASSETS } from "./image-mapping";

// ─── Phase 1: Write headlines with personality ───

function buildWritingPrompt(ctx: ContextPackage): string {
  return `You are a senior creative copywriter at an ad agency. You write headline copy for Hamilton Beach's "Yes You Can Chef" social campaign — bold, stacked text on 9x16 social static ads over photos of real people in real kitchens.

═══════════════════════════════════════════
YOUR BRIEF
═══════════════════════════════════════════

Objective: ${ctx.objective}

Who we're talking to: ${ctx.audience_context.who}
Their mindset: ${ctx.audience_context.mindset}
What they need to feel: ${ctx.audience_context.what_they_need}

Tone: ${ctx.tone_direction.register}
Sounds like: ${ctx.tone_direction.sounds_like}
Does NOT sound like: ${ctx.tone_direction.does_not_sound_like}

Copy rules:
${ctx.copy_rules.map((r, i) => `${i + 1}. ${r}`).join("\n")}

Voice calibration:
${ctx.voice_calibration}

Use cases to draw from: ${ctx.content_inputs.use_cases.join("; ")}

Never do:
${ctx.do_not.map((d) => `- ${d}`).join("\n")}

═══════════════════════════════════════════
THE WORK
═══════════════════════════════════════════

Here are the APPROVED headlines for this campaign. This is the quality bar. Study the ATTITUDE, the WORDPLAY, and the VOICE — then write NEW headlines at this level:

- "YOUR GO-TO'S" / "GO-TOS" → simple meal, featuring the appliance
- "YOU DID" / "WELLINGTON" → beef wellington image, aspirational but accessible
- "MAKE IT LOOK" / "OVER EASY" → wordplay (over easy eggs + effortless), big breakfast image
- "SO GOOD YOUR HAIR" / "MIGHT TURN BLUE" → unexpected, specialty latte image
- "FRY EM'" / "COWBOY" → two words, pure attitude, air fryer
- "IMPRESS" / "YOURSELF" → simple, warm, panini press
- "MEAL PREP" / "MVP" → three words, confident, familiar abbreviation
- "SOUP-ER" / "EASY" → pun, playful, dead simple
- "READY SET" / "BLEND" → familiar phrase, recontextualized
- "YOUR FRIEND'S" / "FAVORITE" / "HAPPY HOUR" → specific, social occasion
- "BE YOUR FRIENDS'" / "FAVORITE BARTENDER" → social, specific role
- "GLUTEN FREE PIZZA" / "FROM SCRATCH" → specific food moment, achievement
- "GLUTEN FREE" / "HAPPY BIRTHDAY" → specific, emotional, celebratory
- "YOUR PERSONAL" / "SOUS CHEF" → clever role metaphor
- "MAKE IT BETTER" / "AT HOME" → simple, confident
- "DINNER FOR THE WEEK" / "WITH ONE BUTTON" → specific benefit, effortless

WHAT MAKES THESE WORK:
- They're SHORT. Most are 2–4 words. "FRY EM' COWBOY" is two words and it's the best one.
- They use WORDPLAY and PUNS. "Over easy," "soup-er," "go-to's go-tos" — playful, not trying too hard.
- They reference SPECIFIC MOMENTS. "Happy birthday," "happy hour," "favorite bartender" — you can picture the exact scene.
- They're CONFIDENT without being loud. "Impress yourself," "MVP," "you did wellington."
- Some are ASPIRATIONAL but ACCESSIBLE. "You did wellington" says "you pulled off something fancy" without being intimidating.
- They never explain the product. The appliance is in the IMAGE, not the words.

DO NOT REUSE ANY OF THESE HEADLINES. Write completely original ones with the same energy.

FORMAT:
- Each headline is 2–3 lines (Line1a, Line2a, Line3a)
- Line3a can be empty for a punchy 2-liner
- ALL CAPS always
- 2–5 words per line
- Total: 4–8 words per headline
- The last line carries the weight — that's where the beat drops
- No periods. Rare punctuation. Contractions welcome.`;
}

// ─── Phase 2: Creative Director QC ───

const CD_REVIEW_SYSTEM = `You are creative directing Hamilton Beach "Yes You Can Chef" social ads. You're reviewing a batch of headlines against the approved quality bar.

THE QUALITY BAR — these headlines got approved by the creative team:
- "FRY EM' COWBOY"
- "MAKE IT LOOK OVER EASY"
- "SOUP-ER EASY"
- "READY SET BLEND"
- "YOUR FRIEND'S FAVORITE HAPPY HOUR"
- "MEAL PREP MVP"
- "GLUTEN FREE HAPPY BIRTHDAY"
- "YOU DID WELLINGTON"
- "IMPRESS YOURSELF"

What makes those work: WORDPLAY + BREVITY + SPECIFIC MOMENTS. They're playful. They're short. They sound like a person being clever, not a brand trying to be clever. Most are 2–4 words.

For each headline in the new batch, ask yourself:
"Would I put this next to 'FRY EM' COWBOY' and feel good about it?"

If YES → PASS
If CLOSE but needs a sharper word or a better beat → REWRITE it (keep the idea, punch up the execution)
If NO, it's flat/generic/meaningless → CUT it and replace with something that HAS attitude

Things that should get CUT immediately:
- Anything vague or empty ("COUNTS AS COOKING", "REAL MEAL", "DINNER MADE ITSELF")
- Anything that could be for literally any brand
- Anything that sounds like a strategy brief restated as a headline
- Anything where you can't picture a specific person or moment
- Forced concept mashups that don't naturally go together

When you REWRITE or replace a CUT, channel the same energy as the approved headlines — attitude, specificity, a turn of phrase that surprises.`;

// ─── Phase 3: Assign images ───

function buildImageAssignmentPrompt(): string {
  const imageDescriptions = IMAGE_ASSETS.map(
    (img) =>
      `• ${img.product} (${img.file_name}): ${img.model} in a ${img.kitchen}, dressed ${img.clothing}`
  ).join("\n");

  return `You are pairing headlines with photography for Hamilton Beach social ads.

Available photos:
${imageDescriptions}

Match based on vibe and moment, not literal product references. Spread photos evenly across the batch. When in doubt, go with what looks best as an ad.`;
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
  const overgenerate = numVersions + 4; // a few extra so the CD can cut

  const writeResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: buildWritingPrompt(contextPackage),
    messages: [
      {
        role: "user",
        content: `Write ${overgenerate} original headlines for Hamilton Beach "Yes You Can Chef" social static ads on ${channel}.

Mix it up:
- Some that twist a familiar phrase or saying
- Some that are quietly funny or self-aware
- Some that are confident and warm
- Some that are just 2 lines — short and punchy (Line3a = "")
- All should have specific, concrete language — not vague vibes

Return ONLY a JSON array:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE OR EMPTY STRING"
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
    "Line3a": "LINE OR EMPTY",
    "status": "PASS|REWRITE|CUT"
  }
]

${rawHeadlines.length} objects. Be tough but creative — if you cut something, the replacement should have real attitude.`,
      },
    ],
  });

  const checkText =
    checkResponse.content[0].type === "text"
      ? checkResponse.content[0].text
      : "";
  const checkedHeadlines = extractJSON<CheckedHeadline[]>(checkText);

  // Prioritize PASSes, then REWRITEs, then CUTs — take what we need
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
