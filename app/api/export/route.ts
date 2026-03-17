import { NextResponse } from "next/server";
import { buildExcelFile } from "@/lib/excel-builder";
import { CopyRow } from "@/lib/types";

interface ExportRow {
  Line1a: string;
  Line2a: string;
  Line3a: string;
  product_match: string;
  clothing_context: string;
  photo: string; // already resolved file name
}

export async function POST(request: Request) {
  try {
    const body: { rows: ExportRow[] } = await request.json();

    if (!body.rows?.length) {
      return NextResponse.json(
        { error: "No rows to export" },
        { status: 400 }
      );
    }

    // Convert to CopyRows — photo is already resolved, pass it through
    const copyRows: (CopyRow & { photo_override?: string })[] = body.rows.map(
      (r) => ({
        Line1a: r.Line1a,
        Line2a: r.Line2a,
        Line3a: r.Line3a,
        product_match: r.product_match,
        clothing_context: r.clothing_context,
        photo_override: r.photo,
      })
    );

    const xlsxBuffer = await buildExcelFile(copyRows);

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
    console.error("Export error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
