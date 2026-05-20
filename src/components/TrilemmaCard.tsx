import { useState } from "react";
import type { FC } from "react";
import type { Trilemma, Vertex, TradeOff } from "../data/trilemmas";
import { ShieldCheck, Flame } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface TrilemmaCardProps {
  trilemma: Trilemma;
}

export const TrilemmaCard: FC<TrilemmaCardProps> = ({ trilemma }) => {
  const { language, t, localize } = useLanguage();

  // We manage the selection of vertices. Exactly two are selected.
  // We initialize it with the first two vertices.
  const [selectedIds, setSelectedIds] = useState<string[]>([
    trilemma.vertices[0].id,
    trilemma.vertices[1].id,
  ]);

  const [activeTab, setActiveTab] = useState<"tradeoff" | "dimensions">(
    "tradeoff",
  );

  // SVG Coordinates for an equilateral triangle inside 400x350 box
  const coords: Record<
    string,
    { x: number; y: number; labelY: number; labelX: number }
  > = {
    [trilemma.vertices[0].id]: { x: 200, y: 60, labelY: 35, labelX: 200 }, // Top
    [trilemma.vertices[1].id]: { x: 330, y: 280, labelY: 310, labelX: 330 }, // Bottom Right
    [trilemma.vertices[2].id]: { x: 70, y: 280, labelY: 310, labelX: 70 }, // Bottom Left
  };

  // Center is at 200, 195

  // Handle vertex click
  const handleVertexClick = (id: string) => {
    if (selectedIds.includes(id)) {
      // 点击已选中的顶点 -> 取消选中该顶点（使其成为牺牲项）
      // 保持另一个已选顶点，并将之前处于牺牲状态的顶点设为选中
      const remaining = selectedIds.filter((x) => x !== id)[0];
      const previouslySacrificed = trilemma.vertices.find(
        (v) => !selectedIds.includes(v.id),
      )!.id;
      setSelectedIds([remaining, previouslySacrificed]);
    } else {
      // 点击未选中的牺牲项 -> 激活该项
      // 采用 FIFO 队列：移除最旧的选中项，并加入当前激活项
      setSelectedIds([selectedIds[1], id]);
    }
  };

  const isSelected = (id: string) => selectedIds.includes(id);
  const isSacrificed = (id: string) => !selectedIds.includes(id);

  // Get active combination details
  const activeTradeOff = trilemma.tradeOffs.find(
    (t) =>
      (t.selectedVertices[0] === selectedIds[0] &&
        t.selectedVertices[1] === selectedIds[1]) ||
      (t.selectedVertices[0] === selectedIds[1] &&
        t.selectedVertices[1] === selectedIds[0]),
  ) as TradeOff;

  const sacrificedVertex = trilemma.vertices.find((v) =>
    isSacrificed(v.id),
  ) as Vertex;

  // Generate crack lines for the sacrificed vertex
  const getCrackPath = (sacId: string) => {
    if (sacId === trilemma.vertices[0].id) {
      // Top vertex cracked from center
      return "M 200 195 L 195 160 L 205 130 L 193 95 L 200 60";
    } else if (sacId === trilemma.vertices[1].id) {
      // Bottom Right vertex cracked from center
      return "M 200 195 L 225 210 L 240 235 L 285 245 L 330 280";
    } else {
      // Bottom Left vertex cracked from center
      return "M 200 195 L 175 210 L 160 235 L 115 245 L 70 280";
    }
  };

  return (
    <div className="glass-panel trilemma-card">
      {/* Visual Triangle Side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.01)",
          padding: "16px",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.02)",
        }}
      >
        {/* Card Header information */}
        <div style={{ width: "100%", textAlign: "left", marginBottom: "16px" }}>
          <span
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              color: `hsl(${trilemma.vertices[0].colorHue}, 80%, 65%)`,
              fontWeight: 600,
              background: `rgba(${trilemma.vertices[0].colorHue === 150 ? "16, 185, 129" : "129, 140, 248"}, 0.08)`,
              padding: "4px 10px",
              borderRadius: "20px",
              border: `1px solid rgba(${trilemma.vertices[0].colorHue === 150 ? "16, 185, 129" : "129, 140, 248"}, 0.15)`,
            }}
          >
            {trilemma.category === "economics" && t("categoryEconomics")}
            {trilemma.category === "politics" && t("categoryPolitics")}
            {trilemma.category === "technology" && t("categoryTechnology")}
            {trilemma.category === "life" && t("categoryLife")}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-geom)",
              fontSize: "24px",
              fontWeight: 700,
              color: "#ffffff",
              marginTop: "10px",
            }}
          >
            {localize(trilemma.name)}
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              fontFamily: "var(--font-geom)",
              marginTop: "2px",
            }}
          >
            {localize(trilemma.tagline)}
          </p>
        </div>

        {/* SVG Core Triangle */}
        <div className="tri-svg-container">
          <svg className="tri-svg" viewBox="0 0 400 350">
            {/* Glow Filters */}
            <defs>
              <filter
                id="glow-green"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Edge AB */}
            <line
              x1={coords[trilemma.vertices[0].id].x}
              y1={coords[trilemma.vertices[0].id].y}
              x2={coords[trilemma.vertices[1].id].x}
              y2={coords[trilemma.vertices[1].id].y}
              className={`tri-edge ${isSelected(trilemma.vertices[0].id) && isSelected(trilemma.vertices[1].id) ? "active" : ""}`}
              style={{
                color: `hsl(${trilemma.vertices[0].colorHue}, 90%, 55%)`,
              }}
            />

            {/* Edge BC */}
            <line
              x1={coords[trilemma.vertices[1].id].x}
              y1={coords[trilemma.vertices[1].id].y}
              x2={coords[trilemma.vertices[2].id].x}
              y2={coords[trilemma.vertices[2].id].y}
              className={`tri-edge ${isSelected(trilemma.vertices[1].id) && isSelected(trilemma.vertices[2].id) ? "active" : ""}`}
              style={{
                color: `hsl(${trilemma.vertices[1].colorHue}, 90%, 55%)`,
              }}
            />

            {/* Edge CA */}
            <line
              x1={coords[trilemma.vertices[2].id].x}
              y1={coords[trilemma.vertices[2].id].y}
              x2={coords[trilemma.vertices[0].id].x}
              y2={coords[trilemma.vertices[0].id].y}
              className={`tri-edge ${isSelected(trilemma.vertices[2].id) && isSelected(trilemma.vertices[0].id) ? "active" : ""}`}
              style={{
                color: `hsl(${trilemma.vertices[2].colorHue}, 90%, 55%)`,
              }}
            />

            {/* Cracked effect lines pointing to the sacrificed vertex */}
            {trilemma.vertices.map((v) => {
              if (isSacrificed(v.id)) {
                return (
                  <path
                    key={`crack-${v.id}`}
                    d={getCrackPath(v.id)}
                    className="crack-line"
                    fill="none"
                  />
                );
              }
              return null;
            })}

            {/* Dynamic Interactive Nodes */}
            {trilemma.vertices.map((v) => {
              const coord = coords[v.id];
              const selected = isSelected(v.id);
              const sacrificed = isSacrificed(v.id);
              const color = `hsl(${v.colorHue}, 95%, 55%)`;

              return (
                <g
                  key={v.id}
                  className={`tri-node ${selected ? "selected" : ""} ${sacrificed ? "sacrificed" : ""}`}
                  onClick={() => handleVertexClick(v.id)}
                  style={{ color }}
                >
                  {/* Glowing Pulse Ring for Selected Nodes */}
                  {selected && (
                    <circle
                      cx={coord.x}
                      cy={coord.y}
                      r={24}
                      className="pulse-ring"
                      fill="none"
                      stroke={color}
                      strokeWidth="2px"
                    />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={selected ? 14 : 11}
                    className="tri-node-circle"
                  />

                  {/* Little central dot for aesthetic */}
                  <circle
                    cx={coord.x}
                    cy={coord.y}
                    r={4}
                    fill={
                      selected
                        ? "#ffffff"
                        : sacrificed
                          ? "#ef4444"
                          : "rgba(255, 255, 255, 0.4)"
                    }
                  />

                  {/* Red indicator cross over the sacrificed node */}
                  {sacrificed && (
                    <g transform={`translate(${coord.x}, ${coord.y})`}>
                      <line
                        x1="-6"
                        y1="-6"
                        x2="6"
                        y2="6"
                        stroke="#ef4444"
                        strokeWidth="2.5px"
                      />
                      <line
                        x1="6"
                        y1="-6"
                        x2="-6"
                        y2="6"
                        stroke="#ef4444"
                        strokeWidth="2.5px"
                      />
                    </g>
                  )}

                  {/* Label Title */}
                  <text x={coord.labelX} y={coord.labelY} className="tri-label">
                    {localize(v.name)}
                  </text>

                  {/* Label Sub-Title (Alternative Language for dual-language learning!) */}
                  {language === "zh" && (
                    <text
                      x={coord.labelX}
                      y={
                        v.id === trilemma.vertices[0].id
                          ? coord.labelY - 18
                          : coord.labelY + 12
                      }
                      fill="var(--text-muted)"
                      fontSize="9px"
                      textAnchor="middle"
                      pointerEvents="none"
                      style={{ opacity: sacrificed ? 0.3 : 0.7 }}
                    >
                      {v.name.en}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            textAlign: "center",
            background: "rgba(255,255,255,0.02)",
            padding: "8px 16px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.04)",
            width: "100%",
          }}
        >
          {t("cardTip")}
        </p>
      </div>

      {/* Explanatory Context Side */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Tab Switcher Segmented Control */}
        <div
          style={{
            display: "flex",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "12px",
            padding: "4px",
            gap: "4px",
          }}
        >
          <button
            onClick={() => setActiveTab("tradeoff")}
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              background:
                activeTab === "tradeoff"
                  ? "rgba(255, 255, 255, 0.08)"
                  : "transparent",
              color:
                activeTab === "tradeoff" ? "#ffffff" : "var(--text-secondary)",
              fontFamily: "var(--font-geom)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "var(--transition-smooth)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {t("cardTabTradeoff")}
          </button>
          <button
            onClick={() => setActiveTab("dimensions")}
            style={{
              flex: 1,
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              background:
                activeTab === "dimensions"
                  ? "rgba(255, 255, 255, 0.08)"
                  : "transparent",
              color:
                activeTab === "dimensions"
                  ? "#ffffff"
                  : "var(--text-secondary)",
              fontFamily: "var(--font-geom)",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "var(--transition-smooth)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {t("cardTabDimensions")}
          </button>
        </div>

        {activeTab === "tradeoff" ? (
          /* Real-time Dynamic Balance Details */
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--text-secondary)",
                  fontSize: "13px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                <ShieldCheck size={16} color="#10b981" />
                <span>{t("cardActivePair")}</span>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginTop: "8px",
                  marginBottom: "12px",
                  lineHeight: 1.4,
                }}
              >
                {localize(activeTradeOff?.name)}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  background: "rgba(255,255,255,0.02)",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #818cf8",
                  marginBottom: "20px",
                }}
              >
                {localize(activeTradeOff?.description)}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "14px",
              }}
            >
              {/* Box 1: 被迫做出的牺牲 */}
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.02)",
                  border: "1px solid rgba(239, 68, 68, 0.1)",
                  borderLeft: "3px solid #ef4444",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  gridColumn: "1 / -1",
                }}
              >
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#ef4444",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "6px",
                  }}
                >
                  <Flame size={14} />
                  {t("cardSacrificedTitle")}
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {language === "zh" ? (
                    <>
                      必须放弃
                      <strong>【{localize(sacrificedVertex?.name)}】</strong>。
                      {localize(sacrificedVertex?.details)}
                    </>
                  ) : (
                    <>
                      Must abandon{" "}
                      <strong>【{localize(sacrificedVertex?.name)}】</strong>.{" "}
                      {localize(sacrificedVertex?.details)}
                    </>
                  )}
                </p>
              </div>

              {/* Box 2: 现实代价与深度分析 */}
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.02)",
                  border: "1px solid rgba(16, 185, 129, 0.1)",
                  borderLeft: "3px solid #10b981",
                  borderRadius: "12px",
                  padding: "14px 16px",
                }}
              >
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#10b981",
                    marginBottom: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {t("cardRealWorldImpact")}
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {localize(activeTradeOff?.realWorldImpact)}
                </p>
              </div>

              {/* Box 3: 经典现实案例 */}
              <div
                style={{
                  background: "rgba(245, 158, 11, 0.02)",
                  border: "1px solid rgba(245, 158, 11, 0.1)",
                  borderLeft: "3px solid #f59e0b",
                  borderRadius: "12px",
                  padding: "14px 16px",
                }}
              >
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#f59e0b",
                    marginBottom: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {t("cardClassicExample")}
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                  }}
                >
                  {localize(activeTradeOff?.example)}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Dimension Deep-dive Breakdown list */
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {trilemma.vertices.map((v) => {
                const isCurrentlySelected = isSelected(v.id);
                const isCurrentlySacrificed = isSacrificed(v.id);
                const color = `hsl(${v.colorHue}, 90%, 60%)`;

                return (
                  <div
                    key={v.id}
                    style={{
                      background: isCurrentlySacrificed
                        ? "rgba(239, 68, 68, 0.01)"
                        : "rgba(255, 255, 255, 0.01)",
                      border: isCurrentlySacrificed
                        ? "1px solid rgba(239, 68, 68, 0.08)"
                        : "1px solid rgba(255, 255, 255, 0.03)",
                      borderLeft: `4px solid ${isCurrentlySacrificed ? "#ef4444" : color}`,
                      borderRadius: "12px",
                      padding: "14px 16px",
                      opacity: isCurrentlySacrificed ? 0.8 : 1,
                      transition: "var(--transition-smooth)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "8px",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#ffffff",
                          }}
                        >
                          {localize(v.name)}
                        </h4>
                        {language === "zh" && (
                          <span
                            style={{
                              fontSize: "10px",
                              color: "var(--text-muted)",
                              fontFamily: "var(--font-geom)",
                            }}
                          >
                            {v.name.en}
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          padding: "2px 8px",
                          borderRadius: "10px",
                          fontWeight: 600,
                          fontFamily: "var(--font-geom)",
                          background: isCurrentlySelected
                            ? "rgba(16, 185, 129, 0.08)"
                            : "rgba(239, 68, 68, 0.08)",
                          color: isCurrentlySelected ? "#10b981" : "#ef4444",
                          border: isCurrentlySelected
                            ? "1px solid rgba(16, 185, 129, 0.15)"
                            : "1px solid rgba(239, 68, 68, 0.15)",
                        }}
                      >
                        {isCurrentlySelected
                          ? t("cardActive")
                          : t("cardSacrificedBadge")}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                        marginBottom: "4px",
                      }}
                    >
                      {localize(v.description)}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      {localize(v.details)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
