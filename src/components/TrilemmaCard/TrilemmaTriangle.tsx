import type { FC } from "react";
import type { Trilemma } from "../../data/trilemmas";
import { useLanguage } from "../../context/LanguageContext";

interface TrilemmaTriangleProps {
  trilemma: Trilemma;
  selectedIds: string[];
  onVertexClick: (id: string) => void;
}

export const TrilemmaTriangle: FC<TrilemmaTriangleProps> = ({
  trilemma,
  selectedIds,
  onVertexClick,
}) => {
  const { language, t, localize } = useLanguage();

  // SVG Coordinates for an equilateral triangle inside 400x350 box
  const coords: Record<
    string,
    { x: number; y: number; labelY: number; labelX: number }
  > = {
    [trilemma.vertices[0].id]: { x: 200, y: 60, labelY: 35, labelX: 200 }, // Top
    [trilemma.vertices[1].id]: { x: 330, y: 280, labelY: 310, labelX: 330 }, // Bottom Right
    [trilemma.vertices[2].id]: { x: 70, y: 280, labelY: 310, labelX: 70 }, // Bottom Left
  };

  const isSelected = (id: string) => selectedIds.includes(id);
  const isSacrificed = (id: string) => !selectedIds.includes(id);

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
          {trilemma.category === "business" && t("categoryBusiness")}
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
                onClick={() => onVertexClick(v.id)}
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
  );
};
