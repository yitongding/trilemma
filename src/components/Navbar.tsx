import type { FC } from 'react';
import { HelpCircle, Share2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="glass-panel nav-container">
      {/* Logo Section */}
      <div className="nav-logo-container">
        <div className="nav-logo-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
            <polygon points="12 2 22 19 2 19" />
            <line x1="12" y1="13" x2="12" y2="2" />
            <line x1="12" y1="13" x2="22" y2="19" />
            <line x1="12" y1="13" x2="2" y2="19" />
            <circle cx="12" cy="13" r="1.8" fill="#ffffff" stroke="none" />
          </svg>
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

        <a
          href="https://github.com/yitongding/trilemma"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
          title="GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
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
