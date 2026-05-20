import type { FC } from 'react';
import { Sparkles, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection: FC = () => {
  const { t } = useLanguage();

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
        {t('heroBadge')}
      </div>

      <h1 className="gradient-text neon-glow-text" style={{
        fontFamily: 'var(--font-geom)',
        fontSize: 'clamp(36px, 6vw, 64px)',
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: '-1px',
        marginBottom: '20px'
      }}>
        {t('heroTitle')}
      </h1>

      <p style={{
        fontSize: 'clamp(15px, 2vw, 18px)',
        color: 'var(--text-secondary)',
        maxWidth: '700px',
        margin: '0 auto 32px auto',
        lineHeight: 1.7
      }}>
        {t('heroSubtitle1')} <br />
        {t('heroSubtitle2')}
        <span style={{ color: '#a5b4fc', fontWeight: 600 }}>{t('heroSubtitle3')}</span>
        {t('heroSubtitle4')}
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
          {t('heroPickTwo')}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          {t('heroSacrificeOne')}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldAlert size={14} color="#f59e0b" />
          {t('heroConservation')}
        </div>
      </div>
    </div>
  );
};
