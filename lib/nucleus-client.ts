import { ContextPackage, NucleusResponse } from "./types";

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

  const res = await fetch(`${nucleusUrl}/api/nucleus`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(
      `Nucleus API error: ${err.detail || err.error || res.statusText}`
    );
  }

  return res.json();
}
