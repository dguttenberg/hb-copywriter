import { NucleusResponse } from "./types";

const MAX_RETRIES = 3;

export async function callNucleus(
  objective: string,
  channel: string,
  additionalNotes: string
): Promise<NucleusResponse> {
  const nucleusUrl = process.env.NUCLEUS_ENDPOINT;
  if (!nucleusUrl) throw new Error("NUCLEUS_ENDPOINT not configured");

  const requestText = additionalNotes
    ? `${objective}. Additional context: ${additionalNotes}`
    : objective;

  const payload = {
    request_text: requestText,
    platform_lane: "yes_you_can_chef",
    output_type: "ad_copy_batch",
    audience: "Zillennial home cooks",
    channel: channel,
    sku: "Hamilton Beach",
  };

  let lastError = "";

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(`${nucleusUrl}/api/nucleus`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      return res.json();
    }

    // Parse the error
    const err = await res.json().catch(() => ({ error: res.statusText }));
    lastError = err.detail || err.error || res.statusText;

    // Retry on JSON parse failures (LLM flakiness) — not on 400s
    const isParseError =
      lastError.includes("JSON parse failed") ||
      lastError.includes("No valid JSON");

    if (isParseError && attempt < MAX_RETRIES) {
      console.log(
        `Nucleus JSON parse failed (attempt ${attempt}/${MAX_RETRIES}), retrying...`
      );
      continue;
    }

    break;
  }

  throw new Error(`Nucleus API error: ${lastError}`);
}
