import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, COMPANY_INFO, PRODUCTS } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | ${COMPANY_INFO.shortName}`,
    description: `${COMPANY_INFO.shortName}${service.name}：${service.description}`,
    keywords: service.keywords,
    alternates: { canonical: `/services/${slug}/` },
  };
}

const serviceContent: Record<string, { content: string; faqs: { question: string; answer: string }[] }> = {
  'manufacturing': {
    content: `
      <h2>完整的塑膠製品生產線</h2>
      <p>慶宗塑膠擁有從原料採購、調配、吹膜/押出、製袋/裁切到成品包裝的完整生產線。近50年的製造經驗，確保每一個環節都達到最高品質標準。</p>
      <h2>生產能力</h2>
      <ul>
        <li>月產能：100噸以上</li>
        <li>設備：多條吹膜機、製袋機、印刷機、分條機</li>
        <li>品管：原料進料檢驗、製程中檢查、成品出貨檢驗</li>
        <li>認證：工廠登記證（登記號${COMPANY_INFO.registrationNo}）</li>
      </ul>
      <h2>產品範圍</h2>
      <p>涵蓋塑膠袋、塑膠膜、塑膠繩、塑膠網、塑膠線及再生原料等全系列產品。</p>
    `,
    faqs: [
      { question: '你們的工廠規模多大？', answer: '我們的工廠位於嘉義縣民雄鄉，擁有完整的生產設備，月產能100噸以上，可同時處理多條訂單。' },
      { question: '品質管控流程是什麼？', answer: '我們執行三階段品管：原料進料檢驗、製程中抽檢、成品出貨檢驗。確保每批產品品質一致。' },
    ],
  },
  'oem-service': {
    content: `
      <h2>專業OEM代工服務</h2>
      <p>慶宗塑膠提供專業的OEM/ODM代工服務，協助品牌商、貿易商、通路商生產客製化塑膠製品。嚴格品管、準時交貨、長期穩定合作。</p>
      <h2>代工優勢</h2>
      <ul>
        <li>彈性生產：小量多樣到大量穩定供貨皆可配合</li>
        <li>品質保證：嚴格品管流程，品質穩定一致</li>
        <li>價格優勢：工廠直營，減少中間環節成本</li>
        <li>保密承諾：保護客戶配方、設計等商業機密</li>
      </ul>
    `,
    faqs: [
      { question: 'OEM代工的最低訂購量？', answer: '一般最低100公斤起，依產品類型可能有所不同。我們彈性配合，歡迎洽詢。' },
      { question: '可以使用我的品牌包裝嗎？', answer: '當然可以！我們提供白牌代工，成品可使用您的品牌標籤、包裝設計。' },
    ],
  },
  'custom-printing': {
    content: `
      <h2>客製化印刷服務</h2>
      <p>慶宗塑膠提供專業的塑膠製品印刷服務，支援單色到多色印刷，幫助您的品牌在產品包裝上展現專業形象。</p>
      <h2>印刷規格</h2>
      <ul>
        <li>色數：1-6色印刷</li>
        <li>方式：凸版印刷</li>
        <li>內容：LOGO、品牌名稱、產品資訊、條碼、圖案等</li>
        <li>稿件格式：AI、PDF、CDR（需提供完稿）</li>
      </ul>
      <h2>印刷流程</h2>
      <ol>
        <li>提供設計稿件</li>
        <li>確認印刷規格及報價</li>
        <li>製作印刷版（首次製版另計）</li>
        <li>打樣確認顏色</li>
        <li>量產出貨</li>
      </ol>
    `,
    faqs: [
      { question: '印刷費用怎麼算？', answer: '印刷費用依色數、面積、數量而定。首次製版需另付版費（約1,000-3,000元/色），量大可享優惠。' },
      { question: '打樣要多久？', answer: '製版+打樣約5-7個工作天，確認後量產約7-10個工作天。' },
    ],
  },
  'wholesale': {
    content: `
      <h2>批發供應服務</h2>
      <p>慶宗塑膠提供長期穩定的塑膠製品批發供應服務，適合經銷商、批發商、企業用戶。量大優惠，定期配送。</p>
      <h2>批發優勢</h2>
      <ul>
        <li>價格優惠：量大折扣，長期合作更優惠</li>
        <li>穩定供貨：充足庫存，不斷貨</li>
        <li>快速出貨：標準品3-5天出貨</li>
        <li>配送服務：中南部免費配送（達一定金額）</li>
      </ul>
    `,
    faqs: [
      { question: '批發價格怎麼算？', answer: '依產品類型及訂購數量提供階梯式報價。一般500公斤以上享批發優惠，歡迎來電詢價。' },
      { question: '可以定期配送嗎？', answer: '可以！我們提供週配、雙週配、月配等定期配送方案，確保您的庫存充足。' },
    ],
  },
  'recycling': {
    content: `
      <h2>塑膠回收再製服務</h2>
      <p>慶宗塑膠響應環保政策及循環經濟理念，提供塑膠回收及再生原料製造服務。將廢棄塑膠轉化為有價值的再生原料，減少環境負擔。</p>
      <h2>回收流程</h2>
      <ol>
        <li>廢塑膠收集與分類</li>
        <li>清洗去污</li>
        <li>破碎造粒</li>
        <li>品質檢測</li>
        <li>包裝出貨</li>
      </ol>
      <h2>環保承諾</h2>
      <p>我們致力於減少塑膠廢棄物，推動塑膠資源化。再生原料的使用可降低碳排放，為地球環保盡一份心力。</p>
    `,
    faqs: [
      { question: '哪些塑膠可以回收？', answer: '我們主要回收PE、PP類塑膠製品，包含塑膠袋、塑膠膜、塑膠容器等。PVC及複合材質暫不收。' },
      { question: '再生原料品質如何？', answer: '經過嚴格的分揀、清洗、造粒製程，品質穩定。可提供檢測報告供參考。' },
    ],
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) notFound();

  const data = serviceContent[slug] || {
    content: `<h2>${service.name}</h2><p>${service.description}</p>`,
    faqs: [{ question: `${service.name}的費用？`, answer: '依需求及數量不同，歡迎來電洽詢。' }],
  };

  return (
    <>
      <SchemaMarkup data={[
        generateServiceSchema(service),
        generateFAQSchema(data.faqs),
        generateBreadcrumbSchema([
          { name: '首頁', url: '/' },
          { name: '服務項目', url: '/services/' },
          { name: service.name, url: `/services/${slug}/` },
        ]),
      ]} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{service.name}</h1>
          <p className="text-lg opacity-90">{service.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav items={[
            { label: '服務項目', href: '/services/' },
            { label: service.name },
          ]} />
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data.content }} />

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">常見問答</h2>
            <FAQAccordion faqs={data.faqs} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">相關產品</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {PRODUCTS.slice(0, 4).map(p => (
                <Link key={p.slug} href={`/products/${p.slug}/`} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 transition-colors group">
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <div className="text-sm font-medium text-gray-700 group-hover:text-primary-600">{p.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title={`需要${service.name}服務？`} />
    </>
  );
}
