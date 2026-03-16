import Anthropic from "@anthropic-ai/sdk";
import { ContextPackage, CopyRow } from "./types";
import { IMAGE_ASSETS } from "./image-mapping";

// ─── Phase 1: Write headlines freely (NO product thinking) ───

function buildWritingPrompt(ctx: ContextPackage): string {
  return `You are a senior creative copywriter at an ad agency. You write headline copy for Hamilton Beach's "Yes You Can Chef" social campaign. Your output will be stamped into bold, variable-width stacked typography on 9x16 social static ads — meaning a PHONE SCREEN, in GIANT TYPE, over a photo.

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

Each headline is 2–3 lines of bold stacked text (Line1a, Line2a, Line3a). These will be rendered in HUGE BOLD TYPE on a phone screen. Less is more. The fewer the words, the bigger each word prints, the harder it hits.

THE RHYTHM:
- Line1a is the setup (short, pulls you in)
- Line2a is the turn or the payoff
- Line3a is optional — the kicker, or leave empty for a tight 2-liner
- The WEIGHT lands on the last line. That's the word that sticks.

THE VISUAL TEST — imagine your headline rendered at maximum size on a 9x16 phone screen:
- 2–3 words per line = HUGE type, punchy, dominant. This is the sweet spot.
- 4 words per line = still good, fills the space well.
- 5+ words per line = type shrinks, gets cramped, loses impact. Avoid.
- The best ads in this format have 3–6 TOTAL words. Think billboard, not sentence.

WHAT THE ENERGY SHOULD FEEL LIKE:
These examples show the ENERGY and BREVITY to aim for. Do NOT reuse these — write your own:
- Two words that reframe an everyday moment → attitude, done
- A familiar phrase twisted into something new → recognition + surprise
- A specific food moment everyone knows → instant relatability
- A playful contradiction → makes you smile, makes you think
- Quiet confidence about something simple → warmth without trying

WHAT TO AVOID:
- Anything that sounds like a therapist, a motivational poster, or a brand deck
- Restating the brief in headline form ("BUILT FOR REAL KITCHENS")
- Product claims pretending to be creative ("AFFORDABLE AND RELIABLE")
- Cramming a whole thought into three dense lines — if it needs that many words, the idea isn't sharp enough
- Combining two unrelated concepts to seem clever (e.g., mixing gym/workout language with cooking — these worlds don't naturally overlap and it reads as forced)
- Lines that only work if you already know the brand strategy

THE KEY INSIGHT: The best headlines in this format are SHORT. A 2-word line printed at 80pt hits harder than a 6-word line printed at 30pt. When in doubt, cut words. If the idea needs 8+ words, find a sharper version of the idea.

PRACTICAL RULES:
- ALL CAPS always
- 2–4 words per line ideal, 5 max, 6 absolute ceiling
- Total headline: 3–7 words is the sweet spot. Never exceed 10.
- At least half the batch should be 5 words or fewer total
- Never end a line with "THE" or "A" — those go at the start of the next line
- Punctuation is rare. No periods. Occasional comma or apostrophe only.
- Contractions are good (DON'T, ISN'T, WON'T)

IMPORTANT: Do NOT think about specific products or appliances when writing. Write about the MOMENTS, FEELINGS, and OCCASIONS of cooking and eating. The imagery will be paired separately — your only job is the words.`;
}

// ─── Phase 2: Creative Director review ───

const CD_REVIEW_SYSTEM = `You are a creative director at a top agency. You're reviewing headline copy for Hamilton Beach 9x16 social static ads — bold stacked text over a photo on a phone screen.

You've been doing this for 15 years. You have strong opinions. You know what works in this format and you're not afraid to kill a headline.

YOUR REVIEW PROCESS — for each headline, run these checks:

1. THE SCROLL TEST: Would someone scrolling Instagram at 11pm actually stop for this? Not "would they understand it" — would they STOP? If it's just fine, it fails. Fine doesn't stop a scroll.

2. THE READ-ALOUD TEST: Say it out loud. Does it flow naturally, or do you stumble? Headlines that trip on their own rhythm are dead. Watch for:
   - Awkward word combos that sound unnatural spoken aloud
   - Concepts that don't belong in the same sentence (gym + coffee, punishment + cooking)
   - Lines that only make sense if you squint and fill in the gaps

3. THE VISUAL TEST: This goes on a phone in giant bold type. Close your eyes and see it:
   - If total words > 7, the type shrinks and it looks like a paragraph, not a headline. REWRITE shorter.
   - If any single line is 5+ words, it'll be tiny. REWRITE tighter.
   - Does it have visual rhythm? A 2-word line next to a 4-word line creates interesting contrast. Three 4-word lines is monotonous.

4. THE ORIGINALITY TEST: Have you seen this exact construction before? Does it feel like it was generated from a template? Common clichés to kill:
   - "[noun] THAT DOESN'T TASTE LIKE [place]" — overused construction
   - "[verb] IT, [result]" — feels formulaic after the second one
   - "NOT GONNA [modest claim] BUT [humble payoff]" — one per batch max, it's a good device but repeatable
   - Anything with "THE GYM" in a cooking ad — these worlds don't mix

5. THE BRAND FIT TEST: Does this feel like it could be a Hamilton Beach ad, or could it be for literally anything? It should feel rooted in cooking/kitchen culture without being generic about it.

SCORING:
- PASS: Genuinely strong. You'd present this to the client.
- REWRITE: The idea has something but the execution isn't there. Fix it — make it shorter, sharper, more specific. Your rewrite should be 3–6 words total if possible.
- CUT: It's beyond saving. Replace with something completely new and short — 3–5 words, punchy, different energy than what's already in the batch.

IMPORTANT: You should REWRITE or CUT at least 20-30% of the batch. If you're passing everything, you're not being critical enough. Be the CD who makes the work better, not the one who rubber-stamps everything.

When you REWRITE or CUT, your replacements should be SHORTER than the original. Brevity is the whole game in this format.`;

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
  status: "PASS" | "REWRITE" | "CUT";
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

  // Ask for extra headlines so the CD has room to cut
  const overgenerate = Math.ceil(numVersions * 1.4);

  const writeResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: writingPrompt,
    messages: [
      {
        role: "user",
        content: `Write ${overgenerate} headlines for Hamilton Beach "Yes You Can Chef" social static ads on ${channel}.

VARIETY — across the batch:
- Mix entry points: some lead with the food, some with the moment, some with the person, some with attitude
- Mix register: some warm, some playful, some quietly funny, some confident
- At least a third should be tight 2-liners (Line3a = "")
- Aim for 3–6 total words per headline. A few can go to 7–8 if the idea demands it, but those are the exception.

Return ONLY a JSON array:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE OR EMPTY STRING"
  }
]

Exactly ${overgenerate} objects. No commentary. No product names. Just the headline text.`,
      },
    ],
  });

  const writeText =
    writeResponse.content[0].type === "text"
      ? writeResponse.content[0].text
      : "";
  const rawHeadlines = extractJSON<RawHeadline[]>(writeText);

  // ── PHASE 2: Creative Director review ──
  const headlineList = rawHeadlines
    .map((h, i) => {
      const words = `${h.Line1a} ${h.Line2a} ${h.Line3a}`.trim().split(/\s+/).length;
      return `${i + 1}. "${h.Line1a}" / "${h.Line2a}"${h.Line3a ? ` / "${h.Line3a}"` : ""} [${words} words]`;
    })
    .join("\n");

  const checkResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4000,
    system: CD_REVIEW_SYSTEM,
    messages: [
      {
        role: "user",
        content: `Review these ${rawHeadlines.length} headlines for Hamilton Beach "Yes You Can Chef" social ads. I need exactly ${numVersions} strong ones for the final batch.

${headlineList}

For each headline: PASS it, REWRITE it (shorter and sharper), or CUT it and replace with something new (3–5 words).

Return ONLY a JSON array:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE OR EMPTY STRING",
    "status": "PASS|REWRITE|CUT"
  }
]

Exactly ${rawHeadlines.length} objects. Preserve the order. Be tough — this work represents the brand.

After the array, do NOT add commentary.`,
      },
    ],
  });

  const checkText =
    checkResponse.content[0].type === "text"
      ? checkResponse.content[0].text
      : "";
  const checkedHeadlines = extractJSON<CheckedHeadline[]>(checkText);

  // Take the best ones — prioritize PASSes, then REWRITEs, then CUTs
  // Also enforce a hard word count limit
  const scored = checkedHeadlines.map((h) => {
    const totalWords = `${h.Line1a} ${h.Line2a} ${h.Line3a}`.trim().split(/\s+/).length;
    const statusScore = h.status === "PASS" ? 3 : h.status === "REWRITE" ? 2 : 1;
    const lengthPenalty = totalWords > 7 ? -1 : totalWords <= 5 ? 1 : 0;
    return { ...h, score: statusScore + lengthPenalty, totalWords };
  });

  // Sort by score descending, take what we need
  scored.sort((a, b) => b.score - a.score);
  const finalHeadlines: RawHeadline[] = scored
    .slice(0, numVersions)
    .map((h) => ({
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
    "product_match": "one of: ${products}",
    "clothing_context": "one of: ${clothingOptions}"
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
