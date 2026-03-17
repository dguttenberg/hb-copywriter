import { NextResponse } from "next/server";
import { callNucleus } from "@/lib/nucleus-client";
import { generateCopy } from "@/lib/claude-client";
import { GeneratorInput } from "@/lib/types";
import { selectImage } from "@/lib/image-mapping";

export async function POST(request: Request) {
  try {
    const body: GeneratorInput = await request.json();

    if (!body.objective?.trim()) {
      return NextResponse.json(
        { error: "Objective is required" },
        { status: 400 }
      );
    }
    if (!body.channel?.trim()) {
      return NextResponse.json(
        { error: "Channel is required" },
        { status: 400 }
      );
    }
    const numVersions = Math.min(Math.max(body.num_versions || 10, 1), 50);

    // Step 1: Call Nucleus
    const nucleusResponse = await callNucleus(
      body.objective,
      body.channel,
      body.additional_notes || ""
    );

    // Step 2: Generate copy
    const copyRows = await generateCopy(
      nucleusResponse.context_package,
      numVersions,
      body.channel
    );

    // Step 3: Resolve image file names and return JSON
    const rows = copyRows.map((row) => ({
      Line1a: row.Line1a,
      Line2a: row.Line2a,
      Line3a: row.Line3a,
      product_match: row.product_match,
      clothing_context: row.clothing_context,
      photo: selectImage(row.product_match, row.clothing_context),
    }));

    return NextResponse.json({ rows });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Generate error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
