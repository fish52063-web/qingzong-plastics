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

## 2026-02-19（下午）| 服務區域全台擴展 + SEO 全台關鍵字

### 完成項目

#### 1. 服務區域擴展至全台 19 個
- **北部（6）**: 台北市、新北市、基隆市、桃園市、新竹縣市、苗栗縣
- **中部（5）**: 台中市、彰化縣、南投縣、雲林縣、嘉義縣市（主場）
- **南部（3）**: 台南市、高雄市、屏東縣
- **東部離島（4）**: 宜蘭縣、花蓮縣、台東縣、澎湖縣
- **全台（1）**: 全台服務
- 區域頁面按北/中/南/東分區顯示
- 每個區域頁獨立 meta title/description/keywords，含地區+產品組合

#### 2. SEO 全台地區關鍵字（70+ 組新增）
- 新增 `tier3_regional` 關鍵字群
- 每個地區 × 產品組合，例如：
  - 高雄塑膠袋、高雄背心袋、高雄洞口袋、高雄平口袋、高雄印刷袋、高雄塑膠袋批發
  - 台北塑膠袋、台北背心袋、台北塑膠袋批發
  - 台中/台南/嘉義/桃園/新竹/彰化/雲林/屏東/宜蘭/花蓮/台東/基隆/澎湖 等全涵蓋
- 區域詳情頁 H1 格式：`{地區名}背心袋・洞口袋・平口袋批發`

#### 3. 產品中心頁修正
- 標題改為「背心袋・洞口袋・平口袋・客製化印刷」
- 描述移除所有舊產品（塑膠膜/繩/網/線/再製原料）
- meta keywords 更新

#### 4. 部署驗證
- Build 成功：123 頁面，0 錯誤
- `npx vercel --prod` 手動部署確認
- 首頁、產品頁、區域頁全部正常載入

### 修改檔案
- `lib/constants.ts` — AREAS 從 10→19，SEO_KEYWORDS 新增 tier3_regional
- `app/products/page.tsx` — metadata 更新
- `app/areas/page.tsx` — 全面重寫（分區顯示）
- `app/areas/[area]/page.tsx` — 全面重寫（聚焦背心袋/洞口袋/平口袋）
- `app/page.tsx` — 首頁區域顯示方式調整

---

## 2026-02-19（上午）| 重大產品修正 + LINE 預留 + SEO 聚焦

### 完成項目

#### 1. 產品精簡（7→2）
- **保留**：塑膠袋（背心袋・洞口袋・平口袋）、客製化印刷
- **移除**：塑膠膜、塑膠繩、塑膠網、塑膠線、塑膠再製原料
- 產品詳情頁內容全面重寫，聚焦三大袋型

#### 2. 規格統一
- 印刷：1-3色 或 單色雙面印刷（原為 1-6色）
- 最低訂購量：150公斤起
- 交貨時間：15-20天

#### 3. SEO 關鍵字聚焦
- 核心 SEO 目標：**統治背心袋、洞口袋、平口袋市場**
- 首頁 H1：「背心袋・洞口袋・平口袋 專業製造・工廠直營」
- SEO_KEYWORDS 4 個層級全面重寫
- 底部 SEO 文案重寫

#### 4. 服務頁更新
- 移除「回收再製」服務
- 保留 4 項：塑膠袋製造、OEM代工、客製化印刷、批發供應
- 所有服務頁內容更新為正確規格

#### 5. LINE 預留位
- Header 頂部標語
- Footer 聯繫資訊
- CTASection（LINE 綠色按鈕）
- 聯繫頁面
- 機制：`COMPANY_INFO.lineUrl` 有值時自動顯示，目前為空字串待填入

#### 6. 全站頁面更新
- 首頁：Hero 文案、統計數據、Why Choose Us、FAQ、SEO 文案
- 關於頁：公司簡介、核心競爭力、發展歷程
- FAQ 頁：5 大類全部更新為正確規格
- 聯繫頁：產品下拉選單更新（背心袋/洞口袋/平口袋/客製印刷/OEM/其他）

### 修改檔案（11 個）
- `lib/constants.ts` — 產品/服務/SEO 全面重寫
- `app/page.tsx` — 首頁
- `app/products/[slug]/page.tsx` — 產品詳情
- `app/services/[slug]/page.tsx` — 服務詳情（移除回收）
- `app/faq/page.tsx` — FAQ
- `app/about/page.tsx` — 關於
- `app/contact/page.tsx` — 聯繫（+LINE）
- `components/Header.tsx` — 頂部標語
- `components/Footer.tsx` — +LINE
- `components/CTASection.tsx` — +LINE 按鈕
- `WORK_LOG.md` — 工作日誌

---

## 2026-02-18 ~ 2026-02-19 | 網站完整建置與部署

### 完成項目

#### 1. 公司資料研究
- 從公開商業登記資料收集公司資訊
- 公司名稱、地址、電話、負責人（陳素貞）、資本額（NT$1,610,000）
- 工廠登記號：99655111
- 註冊商標：慶宗及圖 CHIN TZON（第00234983號，1984年）

#### 2. 專案建置
- Next.js 16.1.6 + Tailwind CSS 4 + TypeScript
- 手動初始化專案（避免 npm cache 權限問題）
- 安裝依賴：next, react, react-dom, gray-matter, remark, remark-html, reading-time

#### 3. 核心架構
- `lib/constants.ts` — 公司資訊、產品、服務、區域、部落格分類、SEO關鍵字
- `lib/schema.ts` — 8種 JSON-LD Schema 生成器
- `lib/mdx.ts` — MDX 文章解析器（frontmatter, headings, reading time）
- `app/layout.tsx` — 全站佈局 + Organization/LocalBusiness/WebSite Schema

#### 4. 組件開發（8個）
- Header（含手機漢堡選單 + 下拉子選單 + CTA）
- Footer（4欄：公司/產品/服務/區域 + 商標資訊）
- BreadcrumbNav, CTASection, FAQAccordion, ProductCard, TableOfContents, SchemaMarkup

#### 5. 頁面開發
- 首頁、產品中心、服務項目、關於我們、聯繫我們、FAQ、案例展示
- 產品詳情頁（generateStaticParams）
- 服務詳情頁（generateStaticParams）
- 區域詳情頁（generateStaticParams）
- 部落格系統（列表+分類+文章內頁）
- 75 篇 SEO 部落格文章（10 個分類）
- sitemap.xml + robots.txt + 404

#### 6. SEO 技術規格
- 每頁獨立 title + meta description + canonical URL
- Open Graph + Twitter Cards + hreflang zh-TW
- JSON-LD Schema Markup（7種類型）
- 麵包屑導航（含 BreadcrumbList Schema）
- FAQ Schema（首頁、產品頁、服務頁、區域頁、FAQ頁）
- 自動生成 sitemap.xml
- 響應式設計（Mobile First）

#### 7. 部署
- GitHub repo: fish52063-web/qingzong-plastics
- Vercel 部署成功

### 技術細節
- 主色：藍色系 #1565c0（工業感）
- 輔色：金色 #ffc107（專業感）
- 灰色系：industrial gray #212121-#f5f5f5

---

## 目前網站狀態

### 頁面統計
- **總頁面數**: 123
- **產品頁**: 2（塑膠袋、客製化印刷）
- **服務頁**: 4（製造、OEM代工、客製印刷、批發）
- **區域頁**: 19（全台各縣市）
- **部落格**: 75 篇
- **分類頁**: 10
- **其他**: 首頁、關於、聯繫、FAQ、案例、sitemap、robots、404

### SEO 關鍵字覆蓋
- **核心產品（14組）**: 背心袋/洞口袋/平口袋 × 工廠/批發/印刷
- **長尾產品（24組）**: 各種規格/價格/尺寸組合
- **全台地區（70+組）**: 台北/新北/桃園/台中/台南/高雄等 × 塑膠袋/背心袋/洞口袋/平口袋/印刷袋/批發
- **通用大字（12組）**: 塑膠袋/背心袋/購物袋推薦等

### 待辦事項
- [ ] 用戶提供 LINE ID 後填入 `lib/constants.ts`
- [ ] Google Search Console 提交 sitemap
- [ ] Google Analytics 4 設定
- [ ] Google Business Profile 建立與優化
- [ ] 自訂域名綁定（待購買）
- [ ] 用戶提供實際產品照片替換預設圖片
