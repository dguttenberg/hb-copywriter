import Anthropic from "@anthropic-ai/sdk";
import { ContextPackage, CopyRow } from "./types";
import { IMAGE_ASSETS } from "./image-mapping";

// ─── Phase 1: Write headlines freely (NO product thinking) ───

function buildWritingPrompt(ctx: ContextPackage): string {
  return `You are a senior creative copywriter at an ad agency. You write headline copy for Hamilton Beach's "Yes You Can Chef" social campaign. Your output will be stamped into bold, variable-width stacked typography on 9x16 social static ads.

YOU ARE NOT A STRATEGIST. You are a WRITER. The strategic context below is your brief — absorb it, then FORGET the language it uses. Your job is to write headlines that a 27-year-old scrolling Instagram would stop for. Not headlines that sound like a creative brief read aloud.

═══════════════════════════════════════════
BRIEF (absorb this, then write AWAY from it)
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

Things to never do:
${ctx.do_not.map((d) => `- ${d}`).join("\n")}

═══════════════════════════════════════════
CREATIVE EXECUTION RULES (this is what matters)
═══════════════════════════════════════════

Each headline is 2–3 lines of bold stacked text (Line1a, Line2a, Line3a). These are NOT sentences. They are PUNCHES. They live on a phone screen in giant type over a photo of someone cooking.

THE RHYTHM:
- Line1a is the setup (short, pulls you in)
- Line2a is the turn (builds tension or redirects)
- Line3a is the payoff (the beat drops here — or leave empty for a 2-liner)
- The WEIGHT lands on the last line. That's the word that hits.

WHAT GOOD LOOKS LIKE:
- "YOUR FRIEND'S" / "FAVORITE" / "HAPPY HOUR" → specific, social, the payoff is an occasion
- "FRY EM'" / "COWBOY" → attitude, personality, two words and done
- "MAKE IT LOOK" / "OVER EASY" → wordplay, double meaning, effortless cool
- "PROTEIN SMOOTHIES" / "THAT DON'T" / "TASTE LIKE THE GYM" → specific, funny, relatable pain point
- "START THE" / "ANTI WAFFLE" / "WAFFLE CLUB" → playful contradiction, irreverent
- "YOUR FOOD" / "HAS NEVER" / "BEEN BETTER" → simple, confident, warm
- "YOUR PARTNER" / "IN PRESSING" → unexpected twist on a phrase
- "READY, SET" / "BLEND" → familiar phrase, recontextualized

WHAT BAD LOOKS LIKE (do NOT write these):
- "YOUR KITCHEN" / "IS ENOUGH" / "AS IT IS" → sounds like a therapist, not a brand
- "COOK WITH" / "CONFIDENCE" / "TODAY" → generic motivation poster
- "BUILT FOR" / "REAL KITCHENS" → restating the brief, not writing a headline
- "FIRST TIME" / "HOSTING" / "YOU GOT THIS" → the insight as headline (lazy)
- "AFFORDABLE" / "AND RELIABLE" → product claims, not creative
- "FOUR FEET" / "OF COUNTER" / "IS ENOUGH" → copying the strategy doc verbatim

THE DIFFERENCE: Good headlines make you FEEL something specific through a concrete image, moment, or turn of phrase. Bad headlines SAY what the brand wants you to feel. Show, don't tell. Be specific. A smoothie, not "nutrition." Tuesday dinner, not "everyday cooking." Your friend's reaction, not "social validation."

PRACTICAL RULES:
- ALL CAPS always
- 2–6 words per line max
- Total headline: 3–10 words
- Some can be 2-liners (Line3a = empty string "")
- Never end a line with "THE" or "A" — those go at the start of the next line
- Punctuation is rare. No periods. Occasional comma or apostrophe only.
- Contractions are good (DON'T, ISN'T, WON'T)

IMPORTANT: Do NOT think about specific products or appliances when writing. Write about the MOMENTS, FEELINGS, and OCCASIONS of cooking and eating. The imagery will be paired separately — your only job is the words.`;
}

// ─── Phase 2: Self-check for quality ───

const SELF_CHECK_SYSTEM = `You are a creative director reviewing headline copy for Hamilton Beach social ads. Your job is to QC a batch of headlines and fix any that don't work.

A headline FAILS if:
1. It doesn't make sense when read aloud as a standalone phrase
2. It combines two unrelated concepts awkwardly (e.g., coffee + gym, smoothie + toast)
3. It sounds like a brand strategy document, not an ad headline
4. It's generic enough to be for any brand ("COOK WITH CONFIDENCE")
5. The line breaks create an awkward reading rhythm
6. It accidentally implies something weird or unintentional

A headline PASSES if:
- A person scrolling Instagram would understand it instantly
- It makes them feel something specific (humor, craving, recognition, warmth)
- It sounds like something a witty friend would say, not a brand manager

For each headline, decide: PASS or REWRITE. If REWRITE, replace it with something that fixes the problem while keeping the same energy/variety as the batch.`;

// ─── Phase 3: Assign images based on copy vibe ───

function buildImageAssignmentPrompt(): string {
  const imageDescriptions = IMAGE_ASSETS.map(
    (img) =>
      `• ${img.product} (${img.file_name}): ${img.model} in a ${img.kitchen}, dressed ${img.clothing}`
  ).join("\n");

  return `You are a creative director pairing headlines with photography for social ads. Given a batch of headlines, assign each one to the most natural-feeling photo.

Available photos:
${imageDescriptions}

RULES:
- Match based on the VIBE and MOMENT the headline evokes, not literal product mentions
- A headline about morning energy could pair with Coffee OR Blender — pick what feels most natural
- A headline about hosting friends could pair with Airfryer (group cooking) or any product really
- Don't overthink it — if the headline is about a cozy moment, the "Weekend at Home" shots work
- If the headline has an energetic/active vibe, "Before a Workout" or "Leaving for Work" shots work
- Spread the photos across the batch — don't put all headlines on one image
- When in doubt, go with what LOOKS best as an ad, not what's most "correct"`;
}

// ─── JSON extraction (shared) ───

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

// ─── Main pipeline ───

interface RawHeadline {
  Line1a: string;
  Line2a: string;
  Line3a: string;
}

interface CheckedHeadline {
  Line1a: string;
  Line2a: string;
  Line3a: string;
  status: "PASS" | "REWRITE";
}

interface ImageAssignment {
  index: number;
  product_match: string;
  clothing_context: string;
}

export async function generateCopy(
  contextPackage: ContextPackage,
  numVersions: number,
  channel: string
): Promise<CopyRow[]> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  // ── PHASE 1: Write headlines freely ──
  const writingPrompt = buildWritingPrompt(contextPackage);

  const writeResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: writingPrompt,
    messages: [
      {
        role: "user",
        content: `Write ${numVersions} headlines for Hamilton Beach "Yes You Can Chef" social static ads on ${channel}.

VARIETY — across the batch:
- Mix entry points: some lead with the food, some with the moment, some with the person, some with attitude
- Mix register: some warm, some playful, some quietly funny, some confident
- Mix specificity: "THAT CHILI RECIPE YOU BOOKMARKED IN OCTOBER" vs "DINNER, HANDLED"
- At least 2 that use a clever turn of phrase or wordplay
- At least 2 that are just 2 lines (short and punchy, Line3a = "")
- At least 1 that leans into an honest limitation ("NOT GONNA WIN / A COOKING SHOW / BUT DINNER'S READY")

Return ONLY a JSON array:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE OR EMPTY STRING"
  }
]

Exactly ${numVersions} objects. No commentary. No product names in the output — just the headline text.`,
      },
    ],
  });

  const writeText =
    writeResponse.content[0].type === "text"
      ? writeResponse.content[0].text
      : "";
  const rawHeadlines = extractJSON<RawHeadline[]>(writeText);

  // ── PHASE 2: Self-check ──
  const headlineList = rawHeadlines
    .map(
      (h, i) =>
        `${i + 1}. "${h.Line1a}" / "${h.Line2a}"${h.Line3a ? ` / "${h.Line3a}"` : ""}`
    )
    .join("\n");

  const checkResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: SELF_CHECK_SYSTEM,
    messages: [
      {
        role: "user",
        content: `Review these ${rawHeadlines.length} headlines. For each one, return PASS with the original text or REWRITE with improved text.

${headlineList}

Return ONLY a JSON array:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE OR EMPTY STRING",
    "status": "PASS or REWRITE"
  }
]

Exactly ${rawHeadlines.length} objects. Preserve the order. Only rewrite the ones that truly need it — most should PASS.`,
      },
    ],
  });

  const checkText =
    checkResponse.content[0].type === "text"
      ? checkResponse.content[0].text
      : "";
  const checkedHeadlines = extractJSON<CheckedHeadline[]>(checkText);

  // Use checked versions (which include any rewrites)
  const finalHeadlines: RawHeadline[] = checkedHeadlines.map((h) => ({
    Line1a: h.Line1a,
    Line2a: h.Line2a,
    Line3a: h.Line3a,
  }));

  // ── PHASE 3: Assign images ──
  const imagePrompt = buildImageAssignmentPrompt();
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
    system: imagePrompt,
    messages: [
      {
        role: "user",
        content: `Assign photos to these ${finalHeadlines.length} headlines:

${finalList}

For each headline, pick the best product photo and clothing context.

Return ONLY a JSON array:
[
  {
    "index": 0,
    "product_match": "${products}",
    "clothing_context": "${clothingOptions}"
  }
]

Use 0-based indexing. Exactly ${finalHeadlines.length} objects. Spread across different photos — no more than ${Math.ceil(finalHeadlines.length / IMAGE_ASSETS.length) + 1} headlines per photo.`,
      },
    ],
  });

  const imageText =
    imageResponse.content[0].type === "text"
      ? imageResponse.content[0].text
      : "";
  const imageAssignments = extractJSON<ImageAssignment[]>(imageText);

  // ── Combine into final CopyRows ──
  const copyRows: CopyRow[] = finalHeadlines.map((headline, i) => {
    const assignment = imageAssignments.find((a) => a.index === i);
    return {
      Line1a: headline.Line1a,
      Line2a: headline.Line2a,
      Line3a: headline.Line3a,
      product_match: assignment?.product_match || "Coffee",
      clothing_context: assignment?.clothing_context || "Weekend at Home",
    };
  });

  return copyRows;
}
