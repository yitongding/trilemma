import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import type { CategoryType } from './components/CategoryFilter';
import { TrilemmaCard } from './components/TrilemmaCard';
import { trilemmas } from './data/trilemmas';
import { BookOpen, Layers, ShieldCheck, Cpu } from 'lucide-react';

export default function App() {
  const [category, setCategory] = useState<CategoryType>('all');

  const filteredTrilemmas = trilemmas.filter(
    (t) => category === 'all' || t.category === category
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
              关于【不可能三角】理论
            </h3>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
            不可能三角（Trilemma）是博弈论与决策学中的一种重要模型。它表明，在一个由三个极具吸引力的要素构成的系统中，规则的物理制约决定了<strong>你必须且只能选择其中两个要素</strong>。
            企图将三个角全部占有的决策者（如追求“既要又要还要”的完美方案）往往会迎来系统崩溃或无效率的惨重恶果。
            在当今互联的世界中，理解不可能三角不仅能帮助我们分析宏观的全球经济形势，更能在编写分布式代码、管理研发项目、乃至在平衡睡眠、工作和生活等微观事务时，提供清醒明智的决策思维模式。
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
                规则与限制
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                系统中每一个角都有其成立的前提和条件。不可能三角并不是一种设计缺陷，而是一种深刻的宇宙自然守恒定律。
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
                决策权衡思辨
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                通过切换顶点的制衡组合，您可以直观体感各种博弈状态的此消彼长，从而在复杂的现实（金融、政治、生活）中训练清醒冷静的权衡思维。
              </p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.01)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <h4 style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Cpu size={16} color="#fbbf24" />
                边缘云分发
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                依托 Cloudflare Pages 全球智能分发，网站前端享有极低的静态载入时延与零计算耗费的绝对安全性。
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
          © 2026 Project Trilemma • 不可能三角物理馆 • Powered by React, Vite & Cloudflare Edge Pages
        </p>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
          “To restrict is to create. 限制，即是创造。”
        </p>
      </footer>
    </div>
  );
}
