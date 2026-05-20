# Project Trilemma · 不可能三角物理馆

> 探索各个领域的规则约束与不可能三角

交互式 web 应用，展示政治、经济、科技与生活中无处不在的 **不可能三角 (Trilemma)** 悖论。通过点击三角形顶点切换制衡组合，直观理解"三选其二、牺牲其一"的系统守恒法则。

## 功能

- 四个分类：金融与经济、政治与全球化、硬核科技、趣味与生活
- 交互式三角可视化：点击顶点切换政策配对，实时显示权衡与代价
- 中英文双语（i18n）
- 响应式设计，玻璃拟态 UI

## 技术栈

- **React 19** + **TypeScript 6.0** + **Vite 8**
- 自定义 `LanguageContext` 实现 i18n（zh / en）
- 数据驱动 — 所有三角内容定义在 `src/data/trilemmas.ts`
- 样式：CSS 变量 + `.glass-panel` 玻璃效果
- 图标：`lucide-react`

## 本地开发

```bash
npm run dev      # 启动 Vite 开发服务器
npm run build    # tsc -b && vite build（类型检查 + 构建）
npm run lint     # ESLint
npm run preview  # 预览构建产物
```

## 部署

部署至 Cloudflare Pages（`functions/api/` 为 serverless functions，`public/_redirects` 处理 SPA 回退）。
