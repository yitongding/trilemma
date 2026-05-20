import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import type { CategoryType } from './components/CategoryFilter';
import { TrilemmaCard } from './components/TrilemmaCard';
import { trilemmas } from './data/trilemmas';
import { BookOpen, Layers, ShieldCheck, Compass } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [category, setCategory] = useState<CategoryType>('all');
  const { t } = useLanguage();

  const filteredTrilemmas = trilemmas.filter(
    (item) => category === 'all' || item.category === category
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <main style={{ flex: 1, padding: '0 20px 80px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        
        {/* Decorative background light rays */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1
        }} />

        {/* Hero Banner Section */}
        <HeroSection />

        {/* Categories Bar */}
        <CategoryFilter currentCategory={category} onChange={setCategory} />

        {/* Trilemmas Rendering Container */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '40px',
          marginTop: '20px'
        }}>
          {filteredTrilemmas.map((item) => (
            <TrilemmaCard key={item.id} trilemma={item} />
          ))}
        </div>

        {/* Interactive Deep-dive Footer Section */}
        <section 
          id="about" 
          className="glass-panel about-section"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <BookOpen size={22} color="#a5b4fc" />
            <h3 style={{
              fontFamily: 'var(--font-geom)',
              fontSize: '20px',
              fontWeight: 700,
              color: '#ffffff'
            }}>
              {t('aboutTitle')}
            </h3>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
            {t('aboutParagraph')}
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px' 
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Layers size={16} color="#818cf8" />
                {t('aboutCard1Title')}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                {t('aboutCard1Desc')}
              </p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={16} color="#10b981" />
                {t('aboutCard2Title')}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                {t('aboutCard2Desc')}
              </p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Compass size={16} color="#fbbf24" />
                {t('aboutCard3Title')}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                {t('aboutCard3Desc')}
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Page Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '30px 20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(5, 5, 8, 0.4)',
        marginTop: '60px'
      }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          {t('footerCopyright')}
        </p>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
          {t('footerQuote')}
        </p>
      </footer>
    </div>
  );
}
