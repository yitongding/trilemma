import type { FC } from 'react';
import { HelpCircle, Share2, Layers, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="glass-panel nav-container">
      {/* Logo Section */}
      <div className="nav-logo-container">
        <div className="nav-logo-badge">
          <Layers size={20} color="#ffffff" style={{ transform: 'rotate(45deg)' }} />
        </div>
        <div>
          <h1 className="gradient-text neon-glow-text nav-logo-title">
            {t('navTitle')}
          </h1>
          <p className="nav-logo-subtitle">
            {t('navSubtitle')}
          </p>
        </div>
      </div>

      {/* Navigation Actions Section */}
      <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href="#about" className="nav-link">
          <HelpCircle size={16} />
          <span className="nav-link-text">{t('navAbout')}</span>
        </a>

        {/* Sleek Language Switcher Button */}
        <button
          onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: 600,
            fontFamily: 'var(--font-geom)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'var(--transition-smooth)',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '1px solid rgba(129, 140, 248, 0.4)';
            e.currentTarget.style.boxShadow = '0 0 12px rgba(129, 140, 248, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'translateY(-0.5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.boxShadow = 'inset 0 1px 1px rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <Globe size={12} color="#a5b4fc" />
          <span style={{ letterSpacing: '0.5px' }}>{language === 'zh' ? 'EN' : '中文'}</span>
        </button>
        
        <button 
          className="btn-neon nav-btn"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: t('shareTitle'),
                text: t('shareText'),
                url: window.location.href
              }).catch(() => {});
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert(t('shareSuccess'));
            }
          }}
        >
          <Share2 size={14} />
          <span className="nav-btn-text">{t('navShare')}</span>
        </button>
      </div>
    </nav>
  );
};
