# 慶宗塑膠網站 - 工作日誌

## 專案資訊
- **專案名稱**: 慶宗塑膠有限公司官方網站
- **技術棧**: Next.js 16 + Tailwind CSS 4 + MDX + Vercel
- **GitHub**: https://github.com/fish52063-web/qingzong-plastics
- **線上網址**: https://qingzong-plastics.vercel.app
- **公司**: 慶宗塑膠有限公司 (CHIN TZON Plastics Co., Ltd.)
- **地址**: 嘉義縣民雄鄉大崎村內埔仔7之1號
- **電話**: 05-221-1717
- **成立**: 1977年

---

## 2026-02-18 ~ 2026-02-19 | 網站完整建置與部署

### 完成項目

#### 1. 公司資料研究
- 從公開商業登記資料收集公司資訊
- 公司名稱、地址、電話、負責人（陳素貞）、資本額（NT$1,610,000）
- 工廠登記號：99655111
- 註冊商標：慶宗及圖 CHIN TZON（第00234983號，1984年）
- 產品線：塑膠袋、塑膠膜、塑膠繩、塑膠網、塑膠線、塑膠再製原料
- Facebook 照片因技術限制無法抓取，待用戶提供

#### 2. SEO 關鍵字研究（50 組高轉化精準關鍵字）
- **Tier 1 交易型（10組）**: 塑膠袋工廠、塑膠袋批發、塑膠袋代工、客製化塑膠袋、PE袋工廠、PP袋批發、HDPE袋批發、塑膠袋工廠直銷、嘉義塑膠袋工廠、南部塑膠袋代工
- **Tier 2A 產品型（15組）**: 塑膠袋、PE袋、PP袋、OPP袋、夾鏈袋批發、垃圾袋批發、背心袋工廠、LDPE袋、塑膠膜批發、農業用膜、地膜、塑膠網批發、PP繩批發、塑膠繩工廠、塑膠線批發
- **Tier 2B 應用型（10組）**: 食品包裝袋工廠、工業用塑膠袋、冷凍食品包裝袋、電商包裝袋、快遞袋批發、塑膠再生料批發、回收塑膠粒料、再生塑膠原料、五金零件袋、醫療用塑膠袋
- **Tier 2C 決策型（5組）**: 塑膠袋廠商推薦、塑膠袋廠商比較、台灣塑膠袋製造商、塑膠袋OEM、塑膠袋ODM
- **Tier 3 資訊型（10組）**: 塑膠袋種類、PE和PP差異、環保塑膠袋、生物可分解袋、塑膠袋印刷、塑膠袋印刷最低訂量、塑膠袋價格、塑膠袋規格尺寸、嘉義民雄工廠、台灣製塑膠袋

#### 3. 專案建置
- Next.js 16.1.6 + Tailwind CSS 4 + TypeScript
- 手動初始化專案（避免 npm cache 權限問題）
- 安裝依賴：next, react, react-dom, gray-matter, remark, remark-html, reading-time

#### 4. 核心架構
- `lib/constants.ts` — 公司資訊、7個產品、5個服務、10個區域、10個部落格分類、50組SEO關鍵字
- `lib/schema.ts` — 8種 JSON-LD Schema 生成器（Organization, LocalBusiness, WebSite, Product, Service, Article, FAQ, Breadcrumb, Area）
- `lib/mdx.ts` — MDX 文章解析器（frontmatter, headings, reading time）
- `app/layout.tsx` — 全站佈局 + Noto Sans TC 字型 + Organization/LocalBusiness/WebSite Schema

#### 5. 組件開發（8個）
- Header（含手機漢堡選單 + 下拉子選單 + CTA）
- Footer（4欄：公司/產品/服務/區域 + 商標資訊）
- BreadcrumbNav, CTASection, FAQAccordion, ProductCard, TableOfContents, SchemaMarkup

#### 6. 頁面開發（120頁）
- **首頁**: Hero + 統計數據 + 產品卡片 + 為什麼選擇慶宗 + 服務項目 + 合作流程 + 區域 + FAQ + CTA + SEO文案
- **7 個產品頁**: 塑膠袋/膜/繩/網/線/再生原料/客製化（每頁含 Product Schema + FAQ + 相關文章）
- **5 個服務頁**: 製造/OEM代工/客製印刷/批發/回收（每頁含 Service Schema + FAQ）
- **10 個區域頁**: 嘉義/台南/高雄/屏東/雲林/彰化/台中/南投/中南部/全台
- **75 篇部落格文章**: 10 個分類（塑膠知識/包裝指南/產業動態/環保永續/產品應用/食品包裝/農業/工業/客製印刷/公司動態）
- **10 個分類頁**
- **其他**: 關於我們、聯繫我們（含表單）、FAQ（5大類19題）、案例展示（6個案例）、404
- **技術頁**: sitemap.xml（自動含所有URL）、robots.txt

#### 7. SEO 技術規格
- 每頁獨立 title（含關鍵字） + meta description
- Canonical URL + Open Graph + Twitter Cards
- hreflang zh-TW
- JSON-LD Schema Markup（7種類型）
- 麵包屑導航（含 BreadcrumbList Schema）
- FAQ Schema（首頁、產品頁、服務頁、區域頁、FAQ頁）
- 自動生成 sitemap.xml（120+ URLs）
- next/image 自動圖片優化（WebP/AVIF）
- 響應式設計（Mobile First）

#### 8. 部署
- GitHub repo: fish52063-web/qingzong-plastics
- Vercel 部署成功：https://qingzong-plastics.vercel.app
- 120 頁 SSG 預渲染，build 23 秒，0 錯誤

### 待辦事項
- [ ] 用戶提供 Facebook 照片後整合到網站
- [ ] Google Search Console 提交 sitemap
- [ ] 自訂域名綁定（待購買）
- [ ] Google Analytics 4 設定
- [ ] Google Business Profile 建立與優化

### 技術細節
- Build: 120 pages, 0 errors, 23s on Vercel
- 主色：藍色系 #1565c0（工業感）
- 輔色：金色 #ffc107（專業感）
- 灰色系：industrial gray #212121-#f5f5f5
