import type { FC } from "react";
import type { Vertex, TradeOff } from "../../data/trilemmas";
import { ShieldCheck, Flame } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface TradeOffPanelProps {
  activeTradeOff?: TradeOff;
  sacrificedVertex?: Vertex;
}

export const TradeOffPanel: FC<TradeOffPanelProps> = ({
  activeTradeOff,
  sacrificedVertex,
}) => {
  const { language, t, localize } = useLanguage();

  if (!activeTradeOff || !sacrificedVertex) return null;

  return (
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
          {localize(activeTradeOff.name)}
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
          {localize(activeTradeOff.description)}
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
                <strong>【{localize(sacrificedVertex.name)}】</strong>。
                {localize(sacrificedVertex.details)}
              </>
            ) : (
              <>
                Must abandon{" "}
                <strong>"{localize(sacrificedVertex.name)}"</strong>.{" "}
                {localize(sacrificedVertex.details)}
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
            {localize(activeTradeOff.realWorldImpact)}
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
            {localize(activeTradeOff.example)}
          </p>
        </div>
      </div>
    </div>
  );
};
