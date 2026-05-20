import { useState } from "react";
import type { FC } from "react";
import type { Trilemma, Vertex, TradeOff } from "../../data/trilemmas";
import { useLanguage } from "../../context/LanguageContext";
import { TrilemmaTriangle } from "./TrilemmaTriangle";
import { TradeOffPanel } from "./TradeOffPanel";
import { DimensionsPanel } from "./DimensionsPanel";

interface TrilemmaCardProps {
  trilemma: Trilemma;
}

export const TrilemmaCard: FC<TrilemmaCardProps> = ({ trilemma }) => {
  const { t } = useLanguage();

  // We manage the selection of vertices. Exactly two are selected.
  // We initialize it with the first two vertices.
  const [selectedIds, setSelectedIds] = useState<string[]>([
    trilemma.vertices[0].id,
    trilemma.vertices[1].id,
  ]);

  const [activeTab, setActiveTab] = useState<"tradeoff" | "dimensions">(
    "tradeoff",
  );

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

  return (
    <div className="glass-panel trilemma-card">
      {/* Left Column: Visual Interactive Triangle */}
      <TrilemmaTriangle
        trilemma={trilemma}
        selectedIds={selectedIds}
        onVertexClick={handleVertexClick}
      />

      {/* Right Column: Explanatory Context Side */}
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
          <TradeOffPanel
            activeTradeOff={activeTradeOff}
            sacrificedVertex={sacrificedVertex}
          />
        ) : (
          <DimensionsPanel
            vertices={trilemma.vertices}
            selectedIds={selectedIds}
          />
        )}
      </div>
    </div>
  );
};
