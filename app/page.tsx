"use client";

import { useState, useEffect, useCallback } from "react";

// ============================================================================
// PALETTE — matches Nucleus
// ============================================================================

const C = {
  bg: "#F7F5F0",
  green: "#2D6A2D",
  greenLight: "#E8F5E8",
  amber: "#D47A00",
  amberLight: "#FFF3E0",
  textPrimary: "#1A1A1A",
  textSecondary: "#555555",
  cardBg: "#FFFFFF",
  cardBorder: "#DDDDDD",
};

const CHANNELS = ["Instagram", "TikTok", "Facebook", "Pinterest", "YouTube"];

// ============================================================================
// LOADING PHASES
// ============================================================================

const PHASES = [
  "Calling Brand Nucleus...",
  "Activating brand knowledge...",
  "Classifying intent...",
  "Assembling context package...",
  "Generating headline copy...",
  "Selecting imagery...",
  "Building spreadsheet...",
  "Finalizing export...",
];

function useRotatingStatus(isActive: boolean) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!isActive) {
      setIndex(0);
      return;
    }
    const interval = setInterval(() => {
      setIndex((prev) => Math.min(prev + 1, PHASES.length - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isActive]);
  return PHASES[index];
}

// ============================================================================
// PREVIEW TABLE
// ============================================================================

interface CopyRow {
  Line1a: string;
  Line2a: string;
  Line3a: string;
  product_match: string;
  clothing_context: string;
}

function PreviewTable({ rows }: { rows: CopyRow[] }) {
  return (
    <div style={styles.tableWrap}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>#</th>
            <th style={styles.th}>Line 1</th>
            <th style={styles.th}>Line 2</th>
            <th style={styles.th}>Line 3</th>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Photo</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={i % 2 === 0 ? styles.trEven : styles.trOdd}>
              <td style={styles.td}>{i + 1}</td>
              <td style={{ ...styles.td, ...styles.tdCopy }}>{row.Line1a}</td>
              <td style={{ ...styles.td, ...styles.tdCopy }}>{row.Line2a}</td>
              <td style={{ ...styles.td, ...styles.tdCopy }}>{row.Line3a}</td>
              <td style={styles.td}>{row.product_match}</td>
              <td style={styles.td}>
                {i % 2 === 0 ? "block_green" : "block_black"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function CopywriterPage() {
  const [objective, setObjective] = useState("");
  const [numVersions, setNumVersions] = useState(10);
  const [channel, setChannel] = useState("Instagram");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [previewRows, setPreviewRows] = useState<CopyRow[] | null>(null);

  const status = useRotatingStatus(loading);

  const handleGenerate = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (loading || !objective.trim()) return;

      setLoading(true);
      setError(null);
      setDownloadUrl(null);
      setPreviewRows(null);

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

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);

        // Auto-download
        const a = document.createElement("a");
        a.href = url;
        a.download = `HB-CopyBatch-${new Date().toISOString().slice(0, 10)}.xlsx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Something went wrong";
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    [objective, numVersions, channel, notes, loading]
  );

  return (
    <div style={styles.page}>
      {/* ── TOP BAR ── */}
      <header style={styles.topBar}>
        <div style={styles.topBarInner}>
          <div style={styles.topBarLeft}>
            <span style={styles.brandName}>Hamilton Beach</span>
            <span style={styles.nucleusLabel}>Copywriter</span>
          </div>
          <div style={styles.lanePill}>
            <span style={styles.pill}>Yes You Can Chef</span>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <div style={styles.content}>
        {/* LEFT — INPUT */}
        <aside style={styles.leftPanel}>
          <h2 style={styles.sectionLabel}>BRIEF</h2>
          <div style={styles.inputCard}>
            <form onSubmit={handleGenerate} style={styles.form}>
              {/* Objective */}
              <div style={styles.field}>
                <label style={styles.label}>Objective</label>
                <textarea
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  placeholder="What are we trying to accomplish? e.g. 'Drive awareness for the air fryer among Zillennials who are meal prepping for the first time'"
                  rows={4}
                  style={styles.textarea}
                  disabled={loading}
                />
              </div>

              {/* Versions + Channel row */}
              <div style={styles.row}>
                <div style={{ ...styles.field, flex: 1 }}>
                  <label style={styles.label}>Versions</label>
                  <input
                    type="number"
                    value={numVersions}
                    onChange={(e) =>
                      setNumVersions(
                        Math.min(50, Math.max(1, Number(e.target.value)))
                      )
                    }
                    min={1}
                    max={50}
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
                      <option key={ch} value={ch}>
                        {ch}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div style={styles.field}>
                <label style={styles.label}>
                  Additional notes{" "}
                  <span style={styles.labelLight}>(optional)</span>
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Budget constraints, specific products to feature, tone adjustments..."
                  rows={2}
                  style={styles.textarea}
                  disabled={loading}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !objective.trim()}
                style={{
                  ...styles.submitButton,
                  opacity: loading || !objective.trim() ? 0.5 : 1,
                  cursor:
                    loading || !objective.trim() ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Generating..." : "Generate copy batch"}
              </button>
            </form>
          </div>

          {/* Download card */}
          {downloadUrl && !loading && (
            <div style={styles.downloadCard}>
              <div style={styles.checkmark}>&#10003;</div>
              <p style={styles.downloadText}>
                Batch generated — your file should have downloaded
                automatically.
              </p>
              <a href={downloadUrl} download style={styles.downloadLink}>
                Download again
              </a>
            </div>
          )}
        </aside>

        {/* RIGHT — OUTPUT */}
        <main style={styles.mainPanel}>
          <h2 style={styles.sectionLabel}>OUTPUT</h2>
          <div style={styles.outputCard}>
            {loading ? (
              <div style={styles.loadingState}>
                <div style={styles.loadingDots}>
                  <span style={styles.dot}>&#9679;</span>
                  <span style={{ ...styles.dot, animationDelay: "0.2s" }}>
                    &#9679;
                  </span>
                  <span style={{ ...styles.dot, animationDelay: "0.4s" }}>
                    &#9679;
                  </span>
                </div>
                <p style={styles.loadingText} key={status}>
                  {status}
                </p>
                <p style={styles.loadingSubtext}>
                  This takes 30–60 seconds. The Nucleus is assembling brand
                  context, then Claude generates {numVersions} headline
                  variations.
                </p>
              </div>
            ) : error ? (
              <div style={styles.errorState}>
                <p style={styles.errorText}>{error}</p>
                <button
                  onClick={() => setError(null)}
                  style={styles.retryButton}
                >
                  Dismiss
                </button>
              </div>
            ) : downloadUrl ? (
              <div>
                <div
                  style={{
                    ...styles.successBanner,
                    marginBottom: 20,
                  }}
                >
                  <span style={styles.successIcon}>&#10003;</span>
                  <span>
                    Generated {numVersions} headline variations — XLSX ready for
                    CreateTotally
                  </span>
                </div>
                <p style={styles.previewNote}>
                  Open the downloaded file to see the full output with image
                  assignments, color blocks, and all CreateTotally metadata.
                </p>
              </div>
            ) : (
              <div style={styles.emptyState}>
                <p style={styles.emptyTitle}>No batch generated yet</p>
                <p style={styles.emptyText}>
                  Fill in the brief and hit generate. The system will call the
                  Brand Nucleus for context, generate headline copy through
                  Claude, assign images from the asset library, and export an
                  XLSX file formatted for CreateTotally.
                </p>
                <div style={styles.flowDiagram}>
                  <span style={styles.flowStep}>Brief</span>
                  <span style={styles.flowArrow}>&#8594;</span>
                  <span style={styles.flowStep}>Nucleus</span>
                  <span style={styles.flowArrow}>&#8594;</span>
                  <span style={styles.flowStep}>Claude</span>
                  <span style={styles.flowArrow}>&#8594;</span>
                  <span style={styles.flowStep}>XLSX</span>
                </div>
              </div>
            )}
          </div>

          {/* Image asset reference */}
          <h2 style={{ ...styles.sectionLabel, marginTop: 24 }}>
            IMAGE LIBRARY
          </h2>
          <div style={styles.imageGrid}>
            {[
              {
                file: "david_coffee.jpg",
                label: "David — Coffee",
                sub: "Modern Kitchen · Weekend at Home",
              },
              {
                file: "mia_toaster.jpg",
                label: "Mia — Toaster",
                sub: "Bright Kitchen · Leaving for Work",
              },
              {
                file: "marcus_blender.jpg",
                label: "Marcus — Blender",
                sub: "Ecclectic Kitchen · Before a Workout",
              },
              {
                file: "ladies_airfryer.jpg",
                label: "Martha — Airfryer",
                sub: "Cozy Kitchen · Weekend at Home",
              },
            ].map((img) => (
              <div key={img.file} style={styles.imageCard}>
                <div style={styles.imagePlaceholder}>
                  <span style={styles.imageIcon}>&#128247;</span>
                </div>
                <p style={styles.imageLabel}>{img.label}</p>
                <p style={styles.imageSub}>{img.sub}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* KEYFRAMES */}
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
          border-color: ${C.green} !important;
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
    fontFamily: '-apple-system, "Segoe UI", Arial, Helvetica, sans-serif',
    background: C.bg,
    minHeight: "100vh",
    color: C.textPrimary,
  },

  // TOP BAR
  topBar: {
    background: C.green,
    padding: "0 32px",
    height: 56,
    display: "flex",
    alignItems: "center",
  },
  topBarInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: 1400,
    margin: "0 auto",
  },
  topBarLeft: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
  },
  brandName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "0.02em",
  },
  nucleusLabel: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    fontWeight: 400,
  },
  lanePill: {
    display: "flex",
    gap: 8,
  },
  pill: {
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    letterSpacing: "0.02em",
  },

  // LAYOUT
  content: {
    display: "flex",
    maxWidth: 1400,
    margin: "0 auto",
    padding: "24px 32px",
    gap: 28,
    minHeight: "calc(100vh - 56px)",
  },
  leftPanel: {
    width: "36%",
    minWidth: 340,
    flexShrink: 0,
  },
  mainPanel: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: 0,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: C.textSecondary,
    margin: "0 0 14px 0",
    textTransform: "uppercase" as const,
  },

  // INPUT CARD
  inputCard: {
    background: C.cardBg,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 6,
    padding: "20px 22px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
  },
  field: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
  },
  row: {
    display: "flex",
    gap: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: C.textPrimary,
  },
  labelLight: {
    fontWeight: 400,
    color: C.textSecondary,
  },
  textarea: {
    width: "100%",
    padding: "10px 12px",
    fontSize: 14,
    lineHeight: 1.55,
    fontFamily: "inherit",
    color: C.textPrimary,
    background: C.bg,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 4,
    resize: "vertical" as const,
    boxSizing: "border-box" as const,
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: 14,
    fontFamily: "inherit",
    color: C.textPrimary,
    background: C.bg,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 4,
    boxSizing: "border-box" as const,
  },
  select: {
    width: "100%",
    padding: "10px 12px",
    fontSize: 14,
    fontFamily: "inherit",
    color: C.textPrimary,
    background: C.bg,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 4,
    boxSizing: "border-box" as const,
    cursor: "pointer",
  },
  submitButton: {
    padding: "12px 24px",
    fontSize: 14,
    fontWeight: 600,
    background: C.green,
    color: "#fff",
    border: "none",
    borderRadius: 4,
    letterSpacing: "0.02em",
    marginTop: 4,
  },

  // DOWNLOAD
  downloadCard: {
    marginTop: 16,
    background: C.greenLight,
    border: `1px solid ${C.green}`,
    borderRadius: 6,
    padding: "18px 20px",
    textAlign: "center" as const,
  },
  checkmark: {
    fontSize: 28,
    color: C.green,
    marginBottom: 8,
  },
  downloadText: {
    fontSize: 13,
    color: C.green,
    margin: "0 0 10px 0",
    lineHeight: 1.5,
  },
  downloadLink: {
    fontSize: 13,
    fontWeight: 600,
    color: C.green,
    textDecoration: "underline",
  },

  // OUTPUT CARD
  outputCard: {
    background: C.cardBg,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 6,
    padding: "24px 26px",
    minHeight: 260,
  },

  // LOADING
  loadingState: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
    gap: 16,
    padding: "20px 0",
  },
  loadingDots: {
    display: "flex",
    gap: 6,
  },
  dot: {
    fontSize: 14,
    color: C.green,
    animation: "pulse 1.2s ease-in-out infinite",
  },
  loadingText: {
    fontSize: 14,
    fontWeight: 600,
    color: C.textPrimary,
    margin: 0,
    animation: "fadeIn 0.5s ease",
  },
  loadingSubtext: {
    fontSize: 12,
    color: C.textSecondary,
    margin: 0,
    textAlign: "center" as const,
    maxWidth: 400,
    lineHeight: 1.5,
  },

  // ERROR
  errorState: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 12,
    padding: "40px 0",
  },
  errorText: {
    fontSize: 14,
    color: "#c0392b",
    margin: 0,
    textAlign: "center" as const,
  },
  retryButton: {
    padding: "8px 20px",
    fontSize: 13,
    fontWeight: 600,
    background: "transparent",
    color: C.textSecondary,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 4,
    cursor: "pointer",
  },

  // SUCCESS
  successBanner: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 16px",
    background: C.greenLight,
    borderRadius: 4,
    fontSize: 13,
    fontWeight: 600,
    color: C.green,
  },
  successIcon: {
    fontSize: 16,
  },
  previewNote: {
    fontSize: 13,
    color: C.textSecondary,
    lineHeight: 1.5,
    margin: 0,
  },

  // EMPTY STATE
  emptyState: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
    gap: 12,
    padding: "20px 0",
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: C.textPrimary,
    margin: 0,
  },
  emptyText: {
    fontSize: 13,
    color: C.textSecondary,
    margin: 0,
    textAlign: "center" as const,
    maxWidth: 500,
    lineHeight: 1.55,
  },
  flowDiagram: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
  },
  flowStep: {
    fontSize: 11,
    fontWeight: 600,
    padding: "6px 14px",
    background: C.bg,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 4,
    color: C.textPrimary,
    letterSpacing: "0.04em",
  },
  flowArrow: {
    fontSize: 14,
    color: C.textSecondary,
  },

  // IMAGE LIBRARY
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 12,
  },
  imageCard: {
    background: C.cardBg,
    border: `1px solid ${C.cardBorder}`,
    borderRadius: 6,
    padding: 14,
    textAlign: "center" as const,
  },
  imagePlaceholder: {
    width: "100%",
    height: 80,
    background: C.bg,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  imageIcon: {
    fontSize: 24,
    opacity: 0.3,
  },
  imageLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: C.textPrimary,
    margin: "0 0 2px 0",
  },
  imageSub: {
    fontSize: 10,
    color: C.textSecondary,
    margin: 0,
    lineHeight: 1.4,
  },

  // TABLE (preview)
  tableWrap: {
    overflowX: "auto" as const,
    marginTop: 16,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: 12,
  },
  th: {
    textAlign: "left" as const,
    padding: "8px 10px",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: C.textSecondary,
    borderBottom: `2px solid ${C.cardBorder}`,
  },
  td: {
    padding: "8px 10px",
    borderBottom: `1px solid #EEE`,
    verticalAlign: "top" as const,
  },
  tdCopy: {
    fontWeight: 600,
    color: C.textPrimary,
  },
  trEven: {
    background: "#FAFAF8",
  },
  trOdd: {
    background: C.cardBg,
  },
};
