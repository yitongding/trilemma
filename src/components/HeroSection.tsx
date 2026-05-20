import type { FC } from 'react';
import { Sparkles, ShieldAlert } from 'lucide-react';

export const HeroSection: FC = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px 40px 20px',
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      {/* Absolute glowing orb in background */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: -1
      }} />

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '6px 16px',
        borderRadius: '30px',
        fontSize: '12px',
        fontWeight: 500,
        color: '#a5b4fc',
        letterSpacing: '1px',
        marginBottom: '24px',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)'
      }}>
        <Sparkles size={12} color="#818cf8" />
        探索各个领域的制衡艺术与物理定律
      </div>

      <h1 className="gradient-text neon-glow-text" style={{
        fontFamily: 'var(--font-geom)',
        fontSize: 'clamp(36px, 6vw, 64px)',
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: '-1px',
        marginBottom: '20px'
      }}>
        规则的边界：不可能三角
      </h1>

      <p style={{
        fontSize: 'clamp(15px, 2vw, 18px)',
        color: 'var(--text-secondary)',
        maxWidth: '700px',
        margin: '0 auto 32px auto',
        lineHeight: 1.7
      }}>
        “你无法拥有一切，必须做出抉择。” <br />
        在政治、经济、计算机与个人生活中，无数神奇的
        <span style={{ color: '#a5b4fc', fontWeight: 600 }}>【不可能三角】</span>
        无声地规定了人类行动的极限。点击下方的三角形顶点，探索抉择背后的真理与沉重代价。
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '12px 24px',
        fontSize: '14px',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-geom)',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          三选其二 (Pick Two)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          牺牲其一 (Sacrifice One)
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={14} color="#f59e0b" />
          系统守恒 (Conservation)
        </div>
      </div>
    </div>
  );
};
