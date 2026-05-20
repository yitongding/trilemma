import type { FC } from "react";
import type { Vertex } from "../../data/trilemmas";
import { useLanguage } from "../../context/LanguageContext";

interface DimensionsPanelProps {
  vertices: Vertex[];
  selectedIds: string[];
}

export const DimensionsPanel: FC<DimensionsPanelProps> = ({
  vertices,
  selectedIds,
}) => {
  const { language, t, localize } = useLanguage();

  const isSelected = (id: string) => selectedIds.includes(id);
  const isSacrificed = (id: string) => !selectedIds.includes(id);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {vertices.map((v) => {
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
  );
};
