import { NextResponse } from "next/server";
import { callNucleus } from "@/lib/nucleus-client";
import { generateCopy } from "@/lib/claude-client";
import { buildExcelFile } from "@/lib/excel-builder";
import { GeneratorInput } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body: GeneratorInput = await request.json();

    // Validate
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

    // Step 2: Generate copy with Claude
    const copyRows = await generateCopy(
      nucleusResponse.context_package,
      numVersions,
      body.channel
    );

    // Step 3: Build XLSX
    const xlsxBuffer = await buildExcelFile(copyRows);

    // Step 4: Return file
    const timestamp = new Date().toISOString().slice(0, 10);
    return new Response(new Uint8Array(xlsxBuffer), {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="HB-CopyBatch-${timestamp}.xlsx"`,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Generate error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
