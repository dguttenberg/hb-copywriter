import Anthropic from "@anthropic-ai/sdk";
import { ContextPackage, CopyRow } from "./types";
import { IMAGE_ASSETS } from "./image-mapping";

function buildSystemPrompt(ctx: ContextPackage): string {
  const products = IMAGE_ASSETS.map((img) => img.product).join(", ");
  const clothingOptions = [
    ...new Set(IMAGE_ASSETS.map((img) => img.clothing)),
  ].join(", ");

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

IMAGE SELECTION:
For each headline, pick which product it best pairs with from: ${products}
Also pick a clothing/vibe context from: ${clothingOptions}`;
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

  const userPrompt = `Write ${numVersions} headlines for Hamilton Beach "Yes You Can Chef" social static ads on ${channel}.

VARIETY — across the batch:
- Mix entry points: some lead with the food, some with the moment, some with the person, some with attitude
- Mix register: some warm, some playful, some quietly funny, some confident
- Mix specificity: "THAT CHILI RECIPE YOU BOOKMARKED IN OCTOBER" vs "DINNER, HANDLED"
- At least 2 that use a clever turn of phrase or wordplay
- At least 2 that are just 2 lines (short and punchy, Line3a = "")
- At least 1 that leans into an honest limitation ("NOT GONNA WIN / A COOKING SHOW / BUT DINNER'S READY")
- Spread across products — don't cluster all on one appliance

Return ONLY a JSON array:
[
  {
    "Line1a": "FIRST LINE",
    "Line2a": "SECOND LINE",
    "Line3a": "THIRD LINE OR EMPTY STRING",
    "product_match": "Coffee|Toaster|Blender|Airfryer",
    "clothing_context": "Weekend at Home|Leaving for Work|Before a Workout"
  }
]

Exactly ${numVersions} objects. No commentary.`;

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
