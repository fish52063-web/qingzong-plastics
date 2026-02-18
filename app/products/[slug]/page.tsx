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
    { question: '你們有哪些塑膠袋類型？', answer: '我們專營三大類型：背心袋（超市/市場用提袋）、洞口袋（打洞提手袋）、平口袋（無提手平口包裝袋）。各類型皆可客製尺寸。' },
    { question: '背心袋、洞口袋、平口袋有什麼差別？', answer: '背心袋有T恤型提手，最常見於超市和市場；洞口袋在袋口打洞作為提手，外觀較精美；平口袋無提手，適合食品、五金等包裝。' },
    { question: '最低訂購量是多少？', answer: '最低訂購量150公斤起，客製化印刷產品也是150公斤起訂。歡迎來電詳詢。' },
    { question: '交貨時間多久？', answer: '統一交貨時間為15-20天，依訂單數量可能有所調整。' },
    { question: '可以客製化印刷嗎？', answer: '可以！我們提供1-3色印刷或單色雙面印刷，可印製LOGO、品牌名稱等。請提供設計稿，150公斤起訂。' },
    { question: '食品級塑膠袋安全嗎？', answer: '我們的食品級塑膠袋使用符合FDA標準的食品級原料，可安心用於食品直接接觸。' },
  ],
  'custom-products': [
    { question: '印刷可以印幾色？', answer: '我們提供1-3色印刷或單色雙面印刷服務，可印製LOGO、品牌名稱、產品資訊等。' },
    { question: '客製化的最低訂購量？', answer: '客製化印刷產品最低150公斤起訂。' },
    { question: '交貨時間多久？', answer: '客製化產品統一交貨時間為15-20天。' },
    { question: '需要提供什麼格式的設計稿？', answer: '請提供AI或PDF格式設計稿，我們也可協助簡單排版。' },
  ],
};

const defaultFAQs = [
  { question: '最低訂購量是多少？', answer: '最低訂購量150公斤起，無論背心袋、洞口袋或平口袋皆同。' },
  { question: '交貨時間大約多久？', answer: '統一交貨時間為15-20天。' },
  { question: '可以提供樣品嗎？', answer: '可以，歡迎來電索取樣品。' },
];

const productContent: Record<string, string> = {
  'plastic-bags': `
    <h2>專營背心袋、洞口袋、平口袋</h2>
    <p>慶宗塑膠成立於1977年，近50年專業製造經驗，專營三大類型塑膠袋：背心袋、洞口袋、平口袋。採用優質PE/HDPE原料，工廠直營批發，品質穩定可靠。</p>

    <h2>背心袋（T恤袋／提袋）</h2>
    <p>背心袋是最常見的購物袋類型，因提手形狀似背心而得名。廣泛應用於超市、傳統市場、餐飲外帶、零售商店等場景。</p>
    <ul>
      <li>材質：HDPE（高密度聚乙烯），薄而堅韌，承重力佳</li>
      <li>特點：T恤型提手，方便提攜，容量大</li>
      <li>應用：超市購物袋、市場提袋、餐飲外帶袋、零售商店袋</li>
      <li>可客製：尺寸、厚度、顏色、印刷LOGO</li>
    </ul>

    <h2>洞口袋（打洞袋／沖孔袋）</h2>
    <p>洞口袋在袋口上方打洞作為提手，外觀較背心袋精美，適合品牌商店、服飾店、禮品店等注重形象的場所。</p>
    <ul>
      <li>材質：PE/HDPE，可選擇不同厚度</li>
      <li>特點：打洞提手，版面完整，適合大面積印刷</li>
      <li>應用：服飾店袋、禮品袋、品牌購物袋、展覽袋</li>
      <li>可客製：尺寸、孔型、印刷（1-3色或單色雙面）</li>
    </ul>

    <h2>平口袋（無提手袋）</h2>
    <p>平口袋無提手設計，結構簡單，成本較低，適合食品包裝、五金零件、工業用途等。</p>
    <ul>
      <li>材質：PE/HDPE/LDPE，依用途選擇</li>
      <li>特點：平口無提手，密封性佳，規格齊全</li>
      <li>應用：食品包裝袋、五金零件袋、工業內袋、農業包裝</li>
      <li>可客製：尺寸、厚度、印刷</li>
    </ul>

    <h2>訂購資訊</h2>
    <ul>
      <li><strong>最低訂購量</strong>：150公斤起</li>
      <li><strong>交貨時間</strong>：15-20天</li>
      <li><strong>印刷服務</strong>：1-3色印刷或單色雙面印刷，可印製LOGO、品牌名稱</li>
      <li><strong>客製規格</strong>：可依需求訂製尺寸、厚度、顏色</li>
    </ul>
  `,
  'custom-products': `
    <h2>客製化印刷服務</h2>
    <p>慶宗塑膠提供專業的塑膠袋客製化印刷服務，包含背心袋印刷、洞口袋印刷、平口袋印刷。從設計諮詢、打樣確認到量產交貨，專業團隊全程跟進。150公斤起訂，15-20天交貨。</p>

    <h2>印刷規格</h2>
    <ul>
      <li><strong>印刷色數</strong>：1-3色印刷，或單色雙面印刷</li>
      <li><strong>印刷方式</strong>：凸版印刷</li>
      <li><strong>可印內容</strong>：公司LOGO、品牌名稱、產品資訊、聯繫電話等</li>
      <li><strong>稿件格式</strong>：AI、PDF格式（我們也可協助簡單排版）</li>
    </ul>

    <h2>可印刷袋型</h2>
    <ul>
      <li><strong>背心袋印刷</strong>：超市、市場用提袋，印製品牌LOGO提升形象</li>
      <li><strong>洞口袋印刷</strong>：版面完整，大面積印刷效果佳，適合品牌商店</li>
      <li><strong>平口袋印刷</strong>：食品、五金包裝袋印刷</li>
    </ul>

    <h2>訂購資訊</h2>
    <ul>
      <li><strong>最低訂購量</strong>：150公斤起</li>
      <li><strong>交貨時間</strong>：15-20天</li>
      <li><strong>製版費</strong>：首次製版另計，下次訂購免收</li>
    </ul>

    <h2>合作流程</h2>
    <ol>
      <li>需求溝通 — 了解您的袋型、尺寸、印刷需求</li>
      <li>報價方案 — 提供詳細報價及生產時程</li>
      <li>打樣確認 — 製作樣品供您確認品質與顏色</li>
      <li>量產出貨 — 確認後安排生產，15-20天交貨</li>
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
