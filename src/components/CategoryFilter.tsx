import React from 'react';

export type CategoryType = 'all' | 'economics' | 'politics' | 'technology' | 'life';

interface CategoryFilterProps {
  currentCategory: CategoryType;
  onChange: (category: CategoryType) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ currentCategory, onChange }) => {
  const categories: { key: CategoryType; label: string; icon: string }[] = [
    { key: 'all', label: '全部三角', icon: '🌌' },
    { key: 'economics', label: '金融与经济', icon: '📈' },
    { key: 'politics', label: '政治与全球化', icon: '⚖️' },
    { key: 'technology', label: '硬核科技', icon: '🛡️' },
    { key: 'life', label: '趣味与生活', icon: '☕' }
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
