import type { FC } from 'react';
import { HelpCircle, Share2, Layers } from 'lucide-react';

export const Navbar: FC = () => {
  return (
    <nav className="glass-panel nav-container">
      {/* Logo Section */}
      <div className="nav-logo-container">
        <div className="nav-logo-badge">
          <Layers size={20} color="#ffffff" style={{ transform: 'rotate(45deg)' }} />
        </div>
        <div>
          <h1 className="gradient-text neon-glow-text nav-logo-title">
            TRILEMMA
          </h1>
          <p className="nav-logo-subtitle">
            不可能三角物理馆
          </p>
        </div>
      </div>

      {/* Navigation Actions Section */}
      <div className="nav-actions">
        <a href="#about" className="nav-link">
          <HelpCircle size={16} />
          <span className="nav-link-text">关于三角</span>
        </a>
        
        <button 
          className="btn-neon nav-btn"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Project Trilemma 不可能三角集合站',
                text: '探索各个领域的规则约束与不可能三角！',
                url: window.location.href
              }).catch(() => {});
            } else {
              navigator.clipboard.writeText(window.location.href);
              alert('🔗 链接已复制到剪贴板，快去分享给朋友吧！');
            }
          }}
        >
          <Share2 size={14} />
          <span className="nav-btn-text">分享物理馆</span>
        </button>
      </div>
    </nav>
  );
};
