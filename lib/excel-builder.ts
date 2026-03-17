import ExcelJS from "exceljs";
import { CopyRow } from "./types";
import { FIXED_VALUES } from "./constants";
import { selectImage } from "./image-mapping";

export async function buildExcelFile(rows: (CopyRow & { photo_override?: string })[]): Promise<Buffer> {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet("HB Social Static 9x16");

  // ── Column widths ──
  ws.getColumn(1).width = 25.125; // A - Placement / Creative Asset Id
  ws.getColumn(2).width = 12.5; // B - Format / Creative asset
  ws.getColumn(3).width = 12; // C - Start date
  ws.getColumn(4).width = 11; // D - Copy date (approx)
  ws.getColumn(5).width = 11; // E - Language
  ws.getColumn(6).width = 13.125; // F - Line1a
  ws.getColumn(7).width = 12.125; // G - Line2a
  ws.getColumn(8).width = 12.5; // H - Line3a
  ws.getColumn(9).width = 16.625; // I - logo_lockup
  ws.getColumn(10).width = 16; // J - color_block
  ws.getColumn(11).width = 18.5; // K - photo
  ws.getColumn(12).width = 23.125; // L
  ws.getColumn(13).width = 10; // M

  const fontNormal: Partial<ExcelJS.Font> = {
    name: "Arial",
    size: 10,
    color: { argb: "FF000000" },
  };
  const fontBold: Partial<ExcelJS.Font> = {
    name: "Arial",
    size: 10,
    bold: true,
    color: { argb: "FF000000" },
  };
  const fillYellow: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFFFF2CC" },
  };
  const fillGray: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFD9D9D9" },
  };
  const fillGreen: ExcelJS.Fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFDCE6CF" },
  };

  // ── Row 1: Tips ──
  ws.getRow(1).height = 87;
  const a1 = ws.getCell("A1");
  a1.value = "";
  a1.font = { ...fontBold };
  a1.fill = fillYellow;
  a1.alignment = { horizontal: "center" };

  ws.mergeCells("B1:M1");
  const b1 = ws.getCell("B1");
  b1.value =
    "Tips:\n- DO NOT MODIFY CREATIVE, CREATIVE ASSETS, AND COLUMN NAMES\n- If a cell is left blank in content customisation columns, the automation will use template default value\n- Please ensure to enter the correct Placement and Format data from (that database can users refer to?)\n- Please ensure to enter the correct DISPLAY NAMES from Asset manager under content customisation\n- If files are entered under \"Supporting_File\" column, make sure to impload them under \"Upload additional files (optional)\"";
  b1.font = fontNormal;
  b1.fill = fillYellow;
  b1.alignment = { horizontal: "left", wrapText: true };

  // ── Row 2: Creative Asset Id / Creative asset headers ──
  ws.getRow(2).height = 15.75;
  const a2 = ws.getCell("A2");
  a2.value = "Creative Asset Id";
  a2.font = fontBold;
  a2.fill = fillGray;
  const b2 = ws.getCell("B2");
  b2.value = "Creative asset";
  b2.font = fontBold;
  b2.fill = fillGray;
  for (let c = 3; c <= 13; c++) {
    const cell = ws.getCell(2, c);
    cell.value = "";
    cell.font = fontNormal;
    cell.fill = fillGray;
  }

  // ── Row 3: Creative Asset Id value ──
  ws.getRow(3).height = 15.75;
  ws.getCell("A3").value = FIXED_VALUES.creative_asset_id;
  ws.getCell("A3").font = fontNormal;
  ws.getCell("B3").value = FIXED_VALUES.creative_asset_name;
  ws.getCell("B3").font = fontNormal;
  for (let c = 3; c <= 13; c++) {
    ws.getCell(3, c).font = fontNormal;
    ws.getCell(3, c).value = "";
  }

  // ── Row 4: Section headers ──
  ws.getRow(4).height = 15.75;
  ws.mergeCells("A4:E4");
  const a4 = ws.getCell("A4");
  a4.value = "Content plan";
  a4.font = fontBold;
  a4.fill = fillGreen;
  ws.mergeCells("F4:M4");
  const f4 = ws.getCell("F4");
  f4.value = "Content customisation";
  f4.font = fontBold;
  f4.fill = fillGreen;

  // ── Row 5: Column headers ──
  ws.getRow(5).height = 15.75;
  const headers: Record<number, string> = {
    1: "Placement",
    2: "Format",
    3: "Start date",
    4: "Copy date",
    5: "Language",
    6: "Line1a",
    7: "Line2a",
    8: "Line3a",
    9: "logo_lockup",
    10: "color_block",
    11: "photo",
  };
  for (const [col, label] of Object.entries(headers)) {
    const cell = ws.getCell(5, Number(col));
    cell.value = label;
    cell.font = fontBold;
    cell.fill = fillGreen;
  }
  // L5, M5 empty but bold + filled
  for (const c of [12, 13]) {
    const cell = ws.getCell(5, c);
    cell.value = "";
    cell.font = fontBold;
    cell.fill = fillGreen;
  }

  // ── Data rows (6+) ──
  rows.forEach((row, idx) => {
    const rowNum = 6 + idx;
    ws.getRow(rowNum).height = 15.75;

    const colorBlock =
      FIXED_VALUES.color_blocks[idx % FIXED_VALUES.color_blocks.length];
    const photo = row.photo_override || selectImage(row.product_match, row.clothing_context);

    const dateVal = new Date(2026, 2, 18); // March 18, 2026

    const vals: [number, string | Date][] = [
      [1, FIXED_VALUES.placement],
      [2, FIXED_VALUES.format],
      [3, dateVal],
      [4, dateVal],
      [5, FIXED_VALUES.language],
      [6, row.Line1a],
      [7, row.Line2a],
      [8, row.Line3a || " "],  // Never leave blank — CreateTotally fills blanks with template defaults
      [9, FIXED_VALUES.logo_lockup],
      [10, colorBlock],
      [11, photo],
    ];

    vals.forEach(([col, val]) => {
      const cell = ws.getCell(rowNum, col as number);
      cell.value = val;
      cell.font = fontNormal;
      if (val instanceof Date) {
        cell.numFmt = "M/D/YY";
      }
    });
  });

  const buffer = await wb.xlsx.writeBuffer();
  return Buffer.from(buffer);
}
