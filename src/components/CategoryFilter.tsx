import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export type CategoryType = 'all' | 'economics' | 'politics' | 'technology' | 'business' | 'life';

interface CategoryFilterProps {
  currentCategory: CategoryType;
  onChange: (category: CategoryType) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ currentCategory, onChange }) => {
  const { t } = useLanguage();

  const categories: { key: CategoryType; label: string; icon: string }[] = [
    { key: 'all', label: t('catAll'), icon: '🌌' },
    { key: 'economics', label: t('catEconomics'), icon: '📈' },
    { key: 'politics', label: t('catPolitics'), icon: '⚖️' },
    { key: 'technology', label: t('catTechnology'), icon: '🛡️' },
    { key: 'business', label: t('catBusiness'), icon: '💼' },
    { key: 'life', label: t('catLife'), icon: '☕' }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
      margin: '0 auto 40px auto',
      padding: '0 20px',
      maxWidth: '800px'
    }}>
      {categories.map((cat) => {
        const isActive = currentCategory === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className="btn-neon filter-btn"
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: isActive 
                ? '1px solid rgba(129, 140, 248, 0.8)' 
                : '1px solid rgba(255, 255, 255, 0.08)',
              background: isActive 
                ? 'rgba(129, 140, 248, 0.25)' 
                : 'rgba(255, 255, 255, 0.02)',
              color: isActive ? '#ffffff' : 'var(--text-secondary)',
              boxShadow: isActive ? '0 0 20px rgba(129, 140, 248, 0.35)' : 'none',
              transform: isActive ? 'translateY(-1px)' : 'none',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
          >
            <span>{cat.icon}</span>
            <span style={{ fontWeight: isActive ? 600 : 400 }}>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};
