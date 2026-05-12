"use client";

import { useState, useEffect, useCallback } from "react";

// ============================================================================
// PALETTE — DonerColle Partners (DCP) brand identity
// ============================================================================

const C = {
  bg: "#E6E7E8",                      // Cool Grey — page background
  midnight: "#000531",                 // Midnight Blue — nav, dark areas, primary text
  violet: "#545DFF",                   // Aurora Violet — labels, focus, accents
  green: "#20FE8F",                    // Aurora Green — logo, CTAs, key neon accents
  greenAlpha: "rgba(32,254,143,0.12)", // Green tint for subtle fills
  ember: "#FF8371",                    // Sunset Ember — errors, warm accents
  white: "#FFFFFF",
  offwhite: "#F4F5F7",                 // Subtle input backgrounds
  textPrimary: "#000531",              // Midnight on light backgrounds
  textSecondary: "rgba(0,5,49,0.55)",  // Dimmed midnight
  cardBg: "#FFFFFF",
  cardBorder: "rgba(84,93,255,0.2)",   // Violet alpha border
};

const CHANNELS = ["Instagram", "TikTok", "Facebook", "Pinterest", "YouTube"];

// ============================================================================
// IMAGE ASSETS (mirror of server-side for the picker)
// ============================================================================

const IMAGE_LIBRARY = [
  { file_name: "Airfryer_Classic_AfterWork_Zillennial_Emma.jpg", product: "Air Fryer", model: "Emma", clothing: "After Work" },
  { file_name: "AirFryer_ModernKitchen_AfterWork_Alex_Zillennial.jpg", product: "Air Fryer", model: "Alex", clothing: "After Work" },
  { file_name: "Blender_PreWorkout_EcclecticKitchen_Mia_Zillennial.jpg", product: "Blender", model: "Mia", clothing: "Pre Workout" },
  { file_name: "Blender_WeekendCasual_SimpleKitcheN_Alex_Zillennial.jpg", product: "Blender", model: "Alex", clothing: "Before Work" },
  { file_name: "CofeeMaker_SimpleKitchen_BeforeWork_Marcus_Zillennial.jpg", product: "Coffee Maker", model: "Marcus", clothing: "Before Work" },
  { file_name: "CoffeeMaker_BeforeWork_CozyKitchen_Emma_Zillenial.jpg", product: "Coffee Maker", model: "Emma", clothing: "Before Work" },
  { file_name: "CoffeeMaker_EcclecticKitchen_PreWorkout_Taylor_GenX.jpg", product: "Coffee Maker", model: "Taylor", clothing: "Pre Workout" },
  { file_name: "PersonalBlender_ModernKitchen_BeforeWork_Taylor_GenX.jpg", product: "Personal Blender", model: "Taylor", clothing: "Before Work" },
  { file_name: "PersonalBlender_ModernKitchen_PreWorkout_Marcus_Zillennial.jpg", product: "Personal Blender", model: "Marcus", clothing: "Pre Workout" },
  { file_name: "PersonalBlender_RetroKitchen_WeekendCasual_Marcus_Zillennial.jpg", product: "Personal Blender", model: "Marcus", clothing: "Weekend Casual" },
  { file_name: "Toaster_BrightKitchen_WeekendCasual_Mia_Zillennial.jpg", product: "Toaster", model: "Mia", clothing: "Weekend Casual" },
  { file_name: "Toaster_CozyKitchen_PreWork_David_GenX.jpg", product: "Toaster", model: "David", clothing: "Before Work" },
];

// ============================================================================
// LOADING PHASES
// ============================================================================

const PHASES = [
  "Calling Brand Nucleus...",
  "Activating brand knowledge...",
  "Assembling context package...",
  "Copywriting agent generating headlines...",
  "Creative director reviewing batch...",
  "Assigning imagery...",
  "Preparing preview...",
];

function useRotatingStatus(isActive: boolean) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!isActive) { setIndex(0); return; }
    const interval = setInterval(() => {
      setIndex((prev) => Math.min(prev + 1, PHASES.length - 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isActive]);
  return PHASES[index];
}

// ============================================================================
// TYPES
// ============================================================================

interface OutputRow {
  Line1a: string;
  Line2a: string;
  Line3a: string;
  product_match: string;
  clothing_context: string;
  photo: string;
}

// ============================================================================
// IMAGE PICKER MODAL
// ============================================================================

function ImagePicker({
  current,
  onSelect,
  onClose,
}: {
  current: string;
  onSelect: (fileName: string) => void;
  onClose: () => void;
}) {
  // Group by product
  const products = [...new Set(IMAGE_LIBRARY.map((img) => img.product))];

  return (
    <div style={pickerStyles.overlay} onClick={onClose}>
      <div style={pickerStyles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={pickerStyles.header}>
          <span style={pickerStyles.title}>Select Image</span>
          <button onClick={onClose} style={pickerStyles.closeBtn}>&times;</button>
        </div>
        <div style={pickerStyles.body}>
          {products.map((product) => (
            <div key={product}>
              <p style={pickerStyles.groupLabel}>{product}</p>
              <div style={pickerStyles.grid}>
                {IMAGE_LIBRARY.filter((img) => img.product === product).map((img) => {
                  const isSelected = img.file_name === current;
                  return (
                    <button
                      key={img.file_name}
                      onClick={() => { onSelect(img.file_name); onClose(); }}
                      style={{
                        ...pickerStyles.thumb,
                        border: isSelected ? `2px solid ${C.green}` : `1px solid rgba(84,93,255,0.2)`,
                        background: isSelected ? C.greenAlpha : "rgba(255,255,255,0.05)",
                      }}
                    >
                      <div style={pickerStyles.thumbIcon}>
                        {product === "Air Fryer" ? "🍟" : product === "Blender" || product === "Personal Blender" ? "🥤" : product === "Coffee Maker" ? "☕" : "🍞"}
                      </div>
                      <span style={pickerStyles.thumbModel}>{img.model}</span>
                      <span style={pickerStyles.thumbClothing}>{img.clothing}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const pickerStyles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,5,49,0.7)", display: "flex",
    alignItems: "center", justifyContent: "center", zIndex: 1000,
  },
  modal: {
    background: C.midnight, borderRadius: 12, width: 560, maxHeight: "80vh",
    overflow: "hidden", display: "flex", flexDirection: "column",
    border: `1px solid ${C.cardBorder}`,
  },
  header: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 20px", borderBottom: `1px solid rgba(84,93,255,0.2)`,
  },
  title: { fontSize: 14, fontWeight: 700, color: C.white, fontFamily: '"DM Sans", sans-serif' },
  closeBtn: {
    background: "none", border: "none", fontSize: 22,
    color: "rgba(255,255,255,0.5)", cursor: "pointer", padding: 0, lineHeight: 1,
  },
  body: { padding: "16px 20px", overflowY: "auto" as const },
  groupLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: "0.14em",
    color: C.violet, textTransform: "uppercase" as const,
    margin: "12px 0 8px 0", fontFamily: '"DM Sans", sans-serif',
  },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 },
  thumb: {
    padding: 10, borderRadius: 8, cursor: "pointer",
    display: "flex", flexDirection: "column" as const,
    alignItems: "center", gap: 4, transition: "all 0.15s",
  },
  thumbIcon: { fontSize: 24 },
  thumbModel: { fontSize: 11, fontWeight: 600, color: C.white, fontFamily: '"DM Sans", sans-serif' },
  thumbClothing: { fontSize: 10, color: "rgba(255,255,255,0.5)", fontFamily: '"DM Sans", sans-serif' },
};

// ============================================================================
// EDITABLE ROW CARD
// ============================================================================

function RowCard({
  row,
  index,
  onUpdate,
}: {
  row: OutputRow;
  index: number;
  onUpdate: (updated: OutputRow) => void;
}) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const currentImage = IMAGE_LIBRARY.find((img) => img.file_name === row.photo);
  const productEmoji = currentImage?.product === "Air Fryer" ? "🍟"
    : currentImage?.product === "Blender" || currentImage?.product === "Personal Blender" ? "🥤"
    : currentImage?.product === "Coffee Maker" ? "☕" : "🍞";

  return (
    <>
      <div style={cardStyles.card}>
        <div style={cardStyles.number}>{index + 1}</div>

        {/* Copy section — editable */}
        <div style={cardStyles.copySection}>
          <input
            value={row.Line1a}
            onChange={(e) => onUpdate({ ...row, Line1a: e.target.value.toUpperCase() })}
            style={cardStyles.lineInput}
            placeholder="LINE 1"
          />
          <input
            value={row.Line2a}
            onChange={(e) => onUpdate({ ...row, Line2a: e.target.value.toUpperCase() })}
            style={cardStyles.lineInput}
            placeholder="LINE 2"
          />
          <input
            value={row.Line3a}
            onChange={(e) => onUpdate({ ...row, Line3a: e.target.value.toUpperCase() })}
            style={cardStyles.lineInput}
            placeholder="LINE 3"
          />
        </div>

        {/* Image section — clickable to change */}
        <button
          onClick={() => setPickerOpen(true)}
          style={cardStyles.imageButton}
          title="Click to change image"
        >
          <div style={cardStyles.imagePreview}>
            <span style={{ fontSize: 28 }}>{productEmoji}</span>
          </div>
          <div style={cardStyles.imageMeta}>
            <span style={cardStyles.imageProduct}>
              {currentImage?.product || row.product_match}
            </span>
            <span style={cardStyles.imageDetail}>
              {currentImage?.model || ""} · {currentImage?.clothing || row.clothing_context}
            </span>
            <span style={cardStyles.changeLink}>Change</span>
          </div>
        </button>
      </div>

      {pickerOpen && (
        <ImagePicker
          current={row.photo}
          onSelect={(fileName) => {
            const img = IMAGE_LIBRARY.find((i) => i.file_name === fileName);
            onUpdate({
              ...row,
              photo: fileName,
              product_match: img?.product || row.product_match,
              clothing_context: img?.clothing || row.clothing_context,
            });
          }}
          onClose={() => setPickerOpen(false)}
        />
      )}
    </>
  );
}

const cardStyles: Record<string, React.CSSProperties> = {
  card: {
    display: "flex", alignItems: "stretch", gap: 0,
    background: C.cardBg, border: `1px solid ${C.cardBorder}`,
    borderRadius: 8, overflow: "hidden",
  },
  number: {
    width: 36, display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 12, fontWeight: 700, color: C.violet,
    background: C.bg, borderRight: `1px solid ${C.cardBorder}`, flexShrink: 0,
    fontFamily: '"DM Sans", sans-serif',
  },
  copySection: {
    flex: 1, display: "flex", flexDirection: "column" as const,
    gap: 2, padding: "10px 14px",
  },
  lineInput: {
    width: "100%", border: "none", background: "transparent",
    fontSize: 14, fontWeight: 700, fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    color: C.textPrimary, padding: "3px 0", outline: "none",
    letterSpacing: "0.02em", textTransform: "uppercase" as const,
    boxSizing: "border-box" as const,
  },
  imageButton: {
    width: 160, display: "flex", flexDirection: "column" as const,
    alignItems: "center", justifyContent: "center", gap: 4,
    background: C.offwhite, border: "none", borderLeft: `1px solid ${C.cardBorder}`,
    cursor: "pointer", padding: "10px 12px", flexShrink: 0,
    transition: "background 0.15s",
  },
  imagePreview: {
    width: 48, height: 48, borderRadius: 8,
    background: C.cardBg, border: `1px solid ${C.cardBorder}`,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  imageMeta: {
    display: "flex", flexDirection: "column" as const,
    alignItems: "center", gap: 1,
  },
  imageProduct: { fontSize: 11, fontWeight: 600, color: C.textPrimary, fontFamily: '"DM Sans", sans-serif' },
  imageDetail: { fontSize: 10, color: C.textSecondary, fontFamily: '"DM Sans", sans-serif' },
  changeLink: { fontSize: 10, color: C.green, fontWeight: 700, marginTop: 2, fontFamily: '"DM Sans", sans-serif' },
};

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function CopywriterPage() {
  const [objective, setObjective] = useState("");
  const [numVersions, setNumVersions] = useState(10);
  const [channel, setChannel] = useState("Instagram");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<OutputRow[] | null>(null);

  const status = useRotatingStatus(loading);

  const handleGenerate = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || !objective.trim()) return;

    setLoading(true);
    setError(null);
    setRows(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          objective: objective.trim(),
          num_versions: numVersions,
          channel,
          additional_notes: notes.trim(),
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Request failed (${res.status})`);
      }

      const data = await res.json();
      setRows(data.rows);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [objective, numVersions, channel, notes, loading]);

  const handleExport = useCallback(async () => {
    if (!rows?.length || exporting) return;
    setExporting(true);

    try {
      const res = await fetch("/api/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rows }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Export failed (${res.status})`);
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `HB-CopyBatch-${new Date().toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Export failed");
    } finally {
      setExporting(false);
    }
  }, [rows, exporting]);

  const updateRow = useCallback((index: number, updated: OutputRow) => {
    setRows((prev) => {
      if (!prev) return prev;
      const next = [...prev];
      next[index] = updated;
      return next;
    });
  }, []);

  const removeRow = useCallback((index: number) => {
    setRows((prev) => prev ? prev.filter((_, i) => i !== index) : prev);
  }, []);

  return (
    <div style={styles.page}>
      <header style={styles.topBar}>
        <div style={styles.topBarInner}>
          <div style={styles.topBarLeft}>
            <div style={styles.dcpLogo}>
              <span style={styles.dcpMark}>DCP</span>
              <span style={styles.dcpWordmark}>Doner<br />Colle<br />Partners.</span>
            </div>
            <div style={styles.topBarSep} />
            <div style={styles.topBarContext}>
              <span style={styles.brandName}>Hamilton Beach</span>
              <span style={styles.nucleusLabel}>Copywriter</span>
            </div>
          </div>
          <div style={styles.lanePill}>
            <span style={styles.pill}>Yes You Can Chef</span>
          </div>
        </div>
      </header>

      <div style={styles.content}>
        {/* LEFT — BRIEF */}
        <aside style={styles.leftPanel}>
          <h2 style={styles.sectionLabel}>BRIEF</h2>
          <div style={styles.inputCard}>
            <form onSubmit={handleGenerate} style={styles.form}>
              <div style={styles.field}>
                <label style={styles.label}>Objective</label>
                <textarea
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  placeholder="What are we trying to accomplish?"
                  rows={4}
                  style={styles.textarea}
                  disabled={loading}
                />
              </div>

              <div style={styles.row}>
                <div style={{ ...styles.field, flex: 1 }}>
                  <label style={styles.label}>Versions</label>
                  <input
                    type="number"
                    value={numVersions}
                    onChange={(e) => setNumVersions(Math.min(50, Math.max(1, Number(e.target.value))))}
                    min={1} max={50}
                    style={styles.input}
                    disabled={loading}
                  />
                </div>
                <div style={{ ...styles.field, flex: 2 }}>
                  <label style={styles.label}>Channel</label>
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    style={styles.select}
                    disabled={loading}
                  >
                    {CHANNELS.map((ch) => (
                      <option key={ch} value={ch}>{ch}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.label}>
                  Additional notes <span style={styles.labelLight}>(optional)</span>
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specific products to feature, tone adjustments..."
                  rows={2}
                  style={styles.textarea}
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !objective.trim()}
                style={{
                  ...styles.submitButton,
                  opacity: loading || !objective.trim() ? 0.5 : 1,
                  cursor: loading || !objective.trim() ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Generating..." : "Generate copy batch"}
              </button>
            </form>
          </div>

          {/* Export button — shows when we have rows */}
          {rows && rows.length > 0 && !loading && (
            <div style={styles.exportCard}>
              <button
                onClick={handleExport}
                disabled={exporting}
                style={{
                  ...styles.exportButton,
                  opacity: exporting ? 0.6 : 1,
                }}
              >
                {exporting ? "Exporting..." : `Export ${rows.length} headlines to XLSX`}
              </button>
              <p style={styles.exportNote}>
                Formatted for CreateTotally with all metadata
              </p>
            </div>
          )}
        </aside>

        {/* RIGHT — OUTPUT */}
        <main style={styles.mainPanel}>
          {loading ? (
            <>
              <h2 style={styles.sectionLabel}>GENERATING</h2>
              <div style={styles.outputCard}>
                <div style={styles.loadingState}>
                  <div style={styles.loadingDots}>
                    <span style={styles.dot}>&#9679;</span>
                    <span style={{ ...styles.dot, animationDelay: "0.2s" }}>&#9679;</span>
                    <span style={{ ...styles.dot, animationDelay: "0.4s" }}>&#9679;</span>
                  </div>
                  <p style={styles.loadingText} key={status}>{status}</p>
                  <p style={styles.loadingSubtext}>
                    This takes 30–60 seconds.
                  </p>
                </div>
              </div>
            </>
          ) : error ? (
            <>
              <h2 style={styles.sectionLabel}>ERROR</h2>
              <div style={styles.outputCard}>
                <div style={styles.errorState}>
                  <p style={styles.errorText}>{error}</p>
                  <button onClick={() => setError(null)} style={styles.retryButton}>Dismiss</button>
                </div>
              </div>
            </>
          ) : rows && rows.length > 0 ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <h2 style={{ ...styles.sectionLabel, margin: 0 }}>
                  {rows.length} HEADLINES — EDIT BEFORE EXPORT
                </h2>
              </div>
              <div style={styles.rowList}>
                {rows.map((row, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <RowCard
                      row={row}
                      index={i}
                      onUpdate={(updated) => updateRow(i, updated)}
                    />
                    <button
                      onClick={() => removeRow(i)}
                      style={styles.removeBtn}
                      title="Remove this headline"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 style={styles.sectionLabel}>OUTPUT</h2>
              <div style={styles.outputCard}>
                <div style={styles.emptyState}>
                  <p style={styles.emptyTitle}>No batch generated yet</p>
                  <p style={styles.emptyText}>
                    Fill in the brief and hit generate. Headlines will appear here
                    for review — edit copy and swap images before exporting.
                  </p>
                  <div style={styles.flowDiagram}>
                    <span style={styles.flowStep}>Brief</span>
                    <span style={styles.flowArrow}>&#8594;</span>
                    <span style={styles.flowStep}>Nucleus</span>
                    <span style={styles.flowArrow}>&#8594;</span>
                    <span style={styles.flowStep}>Copywriter</span>
                    <span style={styles.flowArrow}>&#8594;</span>
                    <span style={styles.flowStep}>Review</span>
                    <span style={styles.flowArrow}>&#8594;</span>
                    <span style={styles.flowStep}>XLSX</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        textarea:focus, input:focus, select:focus {
          outline: none;
          border-color: ${C.violet} !important;
          box-shadow: 0 0 0 2px rgba(84,93,255,0.15);
        }
      `}</style>
    </div>
  );
}

// ============================================================================
// STYLES
// ============================================================================

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    background: C.bg, minHeight: "100vh", color: C.textPrimary,
  },
  topBar: {
    background: C.midnight, padding: "0 32px", height: 64,
    display: "flex", alignItems: "center",
    borderBottom: `1px solid rgba(32,254,143,0.12)`,
  },
  topBarInner: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    width: "100%", maxWidth: 1400, margin: "0 auto",
  },
  topBarLeft: { display: "flex", alignItems: "center", gap: 0 },
  dcpLogo: { display: "flex", alignItems: "center", gap: 12 },
  dcpMark: {
    fontFamily: '"DM Sans", sans-serif', fontWeight: 700, fontSize: 22,
    color: C.green, letterSpacing: "-0.03em", lineHeight: 1,
  },
  dcpWordmark: {
    fontFamily: '"DM Sans", sans-serif', fontWeight: 700, fontSize: 9,
    lineHeight: 1.25, color: C.white, textTransform: "uppercase" as const,
    letterSpacing: "0.04em", borderLeft: "1px solid rgba(255,255,255,0.2)",
    paddingLeft: 12,
  },
  topBarSep: {
    width: 1, height: 28, background: "rgba(255,255,255,0.15)", margin: "0 20px",
  },
  topBarContext: { display: "flex", alignItems: "baseline", gap: 10 },
  brandName: { color: "#fff", fontSize: 16, fontWeight: 700, letterSpacing: "0.02em" },
  nucleusLabel: { color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 400 },
  lanePill: { display: "flex", gap: 8 },
  pill: {
    fontSize: 11, fontWeight: 600, padding: "6px 16px", borderRadius: 40,
    background: "rgba(84,93,255,0.25)", color: "#fff", letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  content: {
    display: "flex", maxWidth: 1400, margin: "0 auto",
    padding: "24px 32px", gap: 28, minHeight: "calc(100vh - 64px)",
  },
  leftPanel: { width: "32%", minWidth: 320, flexShrink: 0 },
  mainPanel: { flex: 1, display: "flex", flexDirection: "column" as const, gap: 0 },
  sectionLabel: {
    fontSize: 11, fontWeight: 600, letterSpacing: "0.16em",
    color: C.violet, margin: "0 0 14px 0", textTransform: "uppercase" as const,
  },
  inputCard: {
    background: C.cardBg, border: `1px solid ${C.cardBorder}`,
    borderRadius: 12, padding: "20px 22px",
  },
  form: { display: "flex", flexDirection: "column" as const, gap: 16 },
  field: { display: "flex", flexDirection: "column" as const, gap: 6 },
  row: { display: "flex", gap: 14 },
  label: { fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: C.textPrimary },
  labelLight: { fontWeight: 400, color: C.textSecondary },
  textarea: {
    width: "100%", padding: "10px 12px", fontSize: 14, lineHeight: 1.55,
    fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    color: C.textPrimary, background: C.offwhite,
    border: `1px solid ${C.cardBorder}`, borderRadius: 6,
    resize: "vertical" as const, boxSizing: "border-box" as const,
  },
  input: {
    width: "100%", padding: "10px 12px", fontSize: 14,
    fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    color: C.textPrimary, background: C.offwhite, border: `1px solid ${C.cardBorder}`,
    borderRadius: 6, boxSizing: "border-box" as const,
  },
  select: {
    width: "100%", padding: "10px 12px", fontSize: 14,
    fontFamily: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
    color: C.textPrimary, background: C.offwhite, border: `1px solid ${C.cardBorder}`,
    borderRadius: 6, boxSizing: "border-box" as const, cursor: "pointer",
  },
  submitButton: {
    padding: "12px 28px", fontSize: 13, fontWeight: 700,
    background: C.green, color: C.midnight, border: "none",
    borderRadius: 40, letterSpacing: "0.08em", marginTop: 4,
    textTransform: "uppercase" as const, cursor: "pointer",
  },
  exportCard: {
    marginTop: 16, background: C.greenAlpha, border: `1px solid rgba(32,254,143,0.3)`,
    borderRadius: 12, padding: "16px 20px", textAlign: "center" as const,
  },
  exportButton: {
    width: "100%", padding: "12px 28px", fontSize: 13, fontWeight: 700,
    background: C.green, color: C.midnight, border: "none",
    borderRadius: 40, cursor: "pointer", letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
  exportNote: {
    fontSize: 11, color: C.violet, margin: "8px 0 0 0", fontWeight: 500,
    letterSpacing: "0.04em",
  },
  rowList: { display: "flex", flexDirection: "column" as const, gap: 8 },
  removeBtn: {
    position: "absolute" as const, top: -6, right: -6,
    width: 22, height: 22, borderRadius: "50%",
    background: C.ember, color: C.midnight, border: "none",
    fontSize: 14, lineHeight: 1, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 700,
  },
  outputCard: {
    background: C.midnight, border: `1px solid ${C.cardBorder}`,
    borderRadius: 12, padding: "24px 26px", minHeight: 260,
  },
  loadingState: {
    display: "flex", flexDirection: "column" as const,
    alignItems: "center", justifyContent: "center",
    minHeight: 200, gap: 16, padding: "20px 0",
  },
  loadingDots: { display: "flex", gap: 6 },
  dot: { fontSize: 14, color: C.green, animation: "pulse 1.2s ease-in-out infinite" },
  loadingText: {
    fontSize: 14, fontWeight: 600, color: C.white,
    margin: 0, animation: "fadeIn 0.5s ease",
    fontFamily: '"DM Sans", sans-serif',
  },
  loadingSubtext: {
    fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0,
    textAlign: "center" as const, maxWidth: 400, lineHeight: 1.5,
  },
  errorState: {
    display: "flex", flexDirection: "column" as const,
    alignItems: "center", gap: 12, padding: "40px 0",
  },
  errorText: { fontSize: 14, color: C.ember, margin: 0, textAlign: "center" as const },
  retryButton: {
    padding: "8px 24px", fontSize: 13, fontWeight: 600,
    background: "transparent", color: "rgba(255,255,255,0.6)",
    border: `1px solid rgba(84,93,255,0.4)`, borderRadius: 40, cursor: "pointer",
    letterSpacing: "0.06em", textTransform: "uppercase" as const,
  },
  emptyState: {
    display: "flex", flexDirection: "column" as const,
    alignItems: "center", justifyContent: "center",
    minHeight: 200, gap: 12, padding: "20px 0",
  },
  emptyTitle: { fontSize: 15, fontWeight: 700, color: C.white, margin: 0 },
  emptyText: {
    fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0,
    textAlign: "center" as const, maxWidth: 500, lineHeight: 1.55,
  },
  flowDiagram: { display: "flex", alignItems: "center", gap: 10, marginTop: 8 },
  flowStep: {
    fontSize: 11, fontWeight: 600, padding: "6px 14px",
    background: "rgba(84,93,255,0.15)", border: `1px solid rgba(84,93,255,0.3)`,
    borderRadius: 6, color: "rgba(255,255,255,0.8)", letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  },
  flowArrow: { fontSize: 14, color: "rgba(255,255,255,0.25)" },
};
