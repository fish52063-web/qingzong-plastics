import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, COMPANY_INFO, SERVICES } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateProductSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { getAllPosts } from '@/lib/mdx';

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} - ${product.shortDesc} | ${COMPANY_INFO.shortName}`,
    description: `${COMPANY_INFO.shortName}${product.name}：${product.description}工廠直營批發，客製化生產，歡迎洽詢報價。`,
    keywords: product.keywords,
    alternates: { canonical: `/products/${slug}/` },
    openGraph: {
      title: `${product.name} | ${COMPANY_INFO.shortName}`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

const productFAQs: Record<string, { question: string; answer: string }[]> = {
  'plastic-bags': [
    { question: '塑膠袋有哪些材質可選？', answer: '我們提供PE（聚乙烯）、PP（聚丙烯）、OPP（雙向拉伸聚丙烯）等材質。PE袋柔軟耐用適合食品包裝，PP袋硬挺透明適合展示包裝，OPP袋光澤度高適合禮品包裝。' },
    { question: '塑膠袋可以客製化尺寸嗎？', answer: '可以！我們可依客戶需求客製化任何尺寸，包含長度、寬度、厚度都可調整。最低訂購量約100公斤起，歡迎來電詳詢。' },
    { question: '塑膠袋印刷有什麼要求？', answer: '支援1-6色印刷，請提供AI或PDF格式設計稿。印刷最低訂購量約200公斤起，打樣時間約5-7天，量產約10-15天。' },
    { question: '食品級塑膠袋安全嗎？', answer: '我們的食品級塑膠袋使用符合FDA標準的食品級原料，可安心用於食品直接接觸。有需要可提供相關檢驗報告。' },
  ],
  'plastic-film': [
    { question: '塑膠膜有哪些種類？', answer: '我們生產PE膜（保鮮膜、包裝膜）、收縮膜（熱縮包裝）、拉伸膜（棧板包裝）、農業用膜（溫室膜、覆蓋膜）等。' },
    { question: '農業用膜的使用壽命多長？', answer: '一般農業覆蓋膜使用壽命約6-12個月，抗UV農業膜可達2-3年。依使用環境及膜的厚度而異。' },
    { question: '收縮膜的收縮比例是多少？', answer: '一般PE收縮膜收縮比例約40-60%，可依需求調整厚度及收縮溫度。' },
  ],
  'plastic-rope': [
    { question: '塑膠繩的承重能力如何？', answer: '依繩徑及材質不同，PP塑膠繩承重約50-500公斤不等。我們可依您的使用需求推薦合適的規格。' },
    { question: '塑膠繩適合哪些用途？', answer: '廣泛用於農業綁紮、漁業捕撈、物流包裝、建築工地、居家使用等。抗UV型適合戶外長期使用。' },
  ],
  'plastic-net': [
    { question: '防蟲網的網目大小怎麼選？', answer: '依目標害蟲大小選擇：16目可防大型昆蟲，32目可防小型飛蟲，50目以上可防蚜蟲。建議諮詢後選擇最適規格。' },
    { question: '遮陽網的遮光率有幾種？', answer: '一般提供50%、70%、90%三種遮光率。50%適合喜光作物，70%最常用，90%適合養殖或倉儲遮蔽。' },
  ],
};

const defaultFAQs = [
  { question: '這類產品的最低訂購量是多少？', answer: '一般最低訂購量約50-100公斤起，客製化產品最低約100-200公斤起。歡迎來電詳詢，我們會依您的需求提供最適合的方案。' },
  { question: '交貨時間大約多久？', answer: '標準品通常3-5個工作天可出貨，客製化產品依數量及複雜度約7-15個工作天。' },
  { question: '可以提供樣品嗎？', answer: '標準規格產品提供免費樣品。客製化產品收取少量打樣費，確認下單後可折抵。' },
];

const productContent: Record<string, string> = {
  'plastic-bags': `
    <h2>產品概述</h2>
    <p>慶宗塑膠提供全系列塑膠袋產品，包含背心袋、平口袋、夾鏈袋、食品袋、垃圾袋、快遞袋等。採用優質PE/PP/OPP原料，工廠直營生產，品質穩定。</p>

    <h2>產品類型</h2>
    <ul>
      <li><strong>背心袋（提袋）</strong>：超市、商店最常用的購物袋，可印刷品牌LOGO。</li>
      <li><strong>平口袋</strong>：適合食品、五金、電子零件包裝，規格齊全。</li>
      <li><strong>夾鏈袋</strong>：可重複封口，適合食品保鮮、小物件收納。</li>
      <li><strong>食品袋</strong>：符合食品安全標準，可直接接觸食品。</li>
      <li><strong>垃圾袋</strong>：家用/商用/工業用，各種厚度規格。</li>
      <li><strong>快遞袋</strong>：電商物流專用，防水防撕裂，可印刷。</li>
    </ul>

    <h2>材質選擇</h2>
    <p>我們提供多種材質選擇，滿足不同使用場景：</p>
    <ul>
      <li><strong>HDPE（高密度聚乙烯）</strong>：薄而堅韌，適合背心袋、垃圾袋。</li>
      <li><strong>LDPE（低密度聚乙烯）</strong>：柔軟透明，適合食品包裝、保護膜。</li>
      <li><strong>PP（聚丙烯）</strong>：硬挺透明，適合文件袋、展示包裝。</li>
      <li><strong>OPP（雙向拉伸聚丙烯）</strong>：高透明度、高光澤，適合禮品包裝。</li>
    </ul>

    <h2>客製化服務</h2>
    <p>我們提供完整的客製化服務：</p>
    <ul>
      <li>自訂尺寸（長/寬/厚度）</li>
      <li>選擇材質與顏色</li>
      <li>1-6色印刷（LOGO/品牌/產品資訊）</li>
      <li>特殊加工（打孔、封口方式、提把）</li>
    </ul>
  `,
  'plastic-film': `
    <h2>產品概述</h2>
    <p>慶宗塑膠提供各類塑膠膜產品，適用於工業包裝、農業覆蓋、食品保鮮等多種用途。採用優質原料，膜面均勻、透明度佳。</p>

    <h2>產品類型</h2>
    <ul>
      <li><strong>PE保鮮膜</strong>：食品級材質，保鮮效果好，安全無毒。</li>
      <li><strong>收縮膜</strong>：加熱後收縮包覆產品，適合瓶罐、盒裝商品包裝。</li>
      <li><strong>拉伸膜</strong>：高彈性、強附著力，適合棧板包裝、物流固定。</li>
      <li><strong>農業用膜</strong>：溫室覆蓋膜、地膜、遮雨膜，抗UV耐候。</li>
      <li><strong>工業保護膜</strong>：表面保護膜，保護金屬、玻璃、塑膠板材。</li>
    </ul>

    <h2>規格範圍</h2>
    <p>寬度：100mm - 6000mm | 厚度：0.01mm - 0.3mm | 長度：依需求訂製</p>

    <h2>應用領域</h2>
    <ul>
      <li>食品業：保鮮包裝、熱縮包裝</li>
      <li>農業：溫室覆蓋、作物保護、土壤覆蓋</li>
      <li>工業：棧板包裝、零件保護、建材覆蓋</li>
      <li>物流：運輸固定、防塵防潮</li>
    </ul>
  `,
  'plastic-rope': `
    <h2>產品概述</h2>
    <p>慶宗塑膠生產各式PP塑膠繩，從細線到粗繩，規格齊全。高強度、耐腐蝕、重量輕，廣泛應用於農業、漁業、物流等領域。</p>

    <h2>產品類型</h2>
    <ul>
      <li><strong>PP打包繩</strong>：物流包裝專用，強度高、不易斷。</li>
      <li><strong>綑綁繩</strong>：農業綑綁、建築固定，耐候性佳。</li>
      <li><strong>編織繩</strong>：多股編織，承重力強，適合吊掛固定。</li>
      <li><strong>撕裂繩</strong>：可沿纖維方向撕開，綁紮方便。</li>
    </ul>

    <h2>規格範圍</h2>
    <p>繩徑：1mm - 20mm | 捲裝重量：1kg - 50kg | 顏色：白/紅/藍/綠/黃等</p>
  `,
  'plastic-net': `
    <h2>產品概述</h2>
    <p>慶宗塑膠提供各種塑膠網產品，適用於農業防蟲、遮陽、防鳥、工地安全等用途。材質耐候、使用壽命長。</p>

    <h2>產品類型</h2>
    <ul>
      <li><strong>防蟲網</strong>：有效阻隔害蟲入侵，保護農作物，減少農藥使用。</li>
      <li><strong>遮陽網</strong>：調節光照強度，降低溫度，適合溫室及露天栽培。</li>
      <li><strong>防鳥網</strong>：保護果園、魚塭，防止鳥類啄食。</li>
      <li><strong>安全網</strong>：建築工地安全防護，符合勞安規範。</li>
    </ul>
  `,
  'plastic-line': `
    <h2>產品概述</h2>
    <p>慶宗塑膠生產各式塑膠線材，包含單絲線、編織線、綁紮線等，適用於農業、漁業及工業用途。</p>

    <h2>產品類型</h2>
    <ul>
      <li><strong>單絲線</strong>：高強度單根線材，適合編織、縫合。</li>
      <li><strong>綁紮線</strong>：農業植物支撐、綁紮固定。</li>
      <li><strong>編織線</strong>：多股編織，強度高，用途廣泛。</li>
    </ul>
  `,
  'recycled-materials': `
    <h2>產品概述</h2>
    <p>慶宗塑膠積極投入塑膠回收再製，提供高品質再生塑膠原料。響應循環經濟政策，減少塑膠廢棄物，為環境永續盡一份心力。</p>

    <h2>再生原料類型</h2>
    <ul>
      <li><strong>PE再生粒</strong>：回收PE製品再製成顆粒，可用於生產塑膠袋、管材等。</li>
      <li><strong>PP再生粒</strong>：回收PP製品再製，適合射出成型產品。</li>
      <li><strong>混合再生料</strong>：經分類處理的混合塑膠再生原料。</li>
    </ul>

    <h2>品質保證</h2>
    <p>所有再生原料經過嚴格的分揀、清洗、造粒製程，確保品質穩定。提供原料成分檢測報告，讓您安心使用。</p>
  `,
  'custom-products': `
    <h2>客製化服務</h2>
    <p>慶宗塑膠提供全方位客製化塑膠製品生產服務。從設計諮詢、打樣確認到量產交貨，專業團隊全程跟進。</p>

    <h2>服務內容</h2>
    <ul>
      <li><strong>客製尺寸</strong>：依您的需求製作特殊尺寸產品，精確符合使用需求。</li>
      <li><strong>印刷服務</strong>：1-6色印刷，支援LOGO、品牌文字、產品資訊、條碼等。</li>
      <li><strong>特殊材質</strong>：抗靜電、抗UV、食品級、可降解等特殊材質可選。</li>
      <li><strong>特殊加工</strong>：打孔、壓紋、封口方式、提把設計等。</li>
    </ul>

    <h2>合作流程</h2>
    <ol>
      <li>需求溝通 — 了解您的產品用途、規格、數量需求</li>
      <li>報價方案 — 提供詳細報價及生產時程</li>
      <li>打樣確認 — 製作樣品供您確認品質</li>
      <li>量產出貨 — 確認後安排生產，準時交貨</li>
    </ol>
  `,
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) notFound();

  const faqs = productFAQs[slug] || defaultFAQs;
  const content = productContent[slug] || `<h2>產品介紹</h2><p>${product.description}</p>`;

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(post => product.keywords.some(kw => post.title.includes(kw) || post.keywords.some(pk => pk.includes(kw))))
    .slice(0, 4);

  return (
    <>
      <SchemaMarkup data={[
        generateProductSchema(product),
        generateFAQSchema(faqs),
        generateBreadcrumbSchema([
          { name: '首頁', url: '/' },
          { name: '產品中心', url: '/products/' },
          { name: product.name, url: `/products/${slug}/` },
        ]),
      ]} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{product.icon}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg opacity-90">{product.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav items={[
            { label: '產品中心', href: '/products/' },
            { label: product.name },
          ]} />

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

          <div className="mt-12 bg-primary-50 rounded-xl p-6 border border-primary-100">
            <h2 className="text-xl font-bold text-primary-700 mb-2">產品關鍵字</h2>
            <div className="flex flex-wrap gap-2">
              {product.keywords.map(kw => (
                <span key={kw} className="bg-white text-primary-700 px-3 py-1 rounded-full text-sm border border-primary-200">{kw}</span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">常見問答</h2>
            <FAQAccordion faqs={faqs} />
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">相關文章</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPosts.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}/`} className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-medium text-gray-800 hover:text-primary-600 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{post.readingTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title={`需要${product.name}報價？`} subtitle="工廠直營，提供最具競爭力的價格。歡迎來電洽詢或線上填寫需求。" />
    </>
  );
}
