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
      <h2>完整的塑膠袋生產線</h2>
      <p>慶宗塑膠擁有從原料調配、吹膜、製袋到成品包裝的完整生產線。近50年的製造經驗，專注生產背心袋、洞口袋、平口袋，確保每一個環節都達到最高品質標準。</p>
      <h2>生產能力</h2>
      <ul>
        <li>設備：多條吹膜機、製袋機、印刷機</li>
        <li>產品：背心袋、洞口袋、平口袋</li>
        <li>品管：原料進料檢驗、製程中檢查、成品出貨檢驗</li>
        <li>認證：工廠登記證（登記號 99655111）</li>
      </ul>
      <h2>訂購資訊</h2>
      <p>最低訂購量150公斤起，統一交貨時間15-20天。</p>
    `,
    faqs: [
      { question: '你們的工廠規模多大？', answer: '我們的工廠位於嘉義縣民雄鄉，擁有完整的背心袋、洞口袋、平口袋生產設備，可同時處理多條訂單。' },
      { question: '品質管控流程是什麼？', answer: '我們執行三階段品管：原料進料檢驗、製程中抽檢、成品出貨檢驗。確保每批產品品質一致。' },
    ],
  },
  'oem-service': {
    content: `
      <h2>專業OEM代工服務</h2>
      <p>慶宗塑膠提供專業的背心袋代工、洞口袋代工、平口袋代工服務。協助品牌商、貿易商、通路商生產客製化塑膠袋。嚴格品管、準時交貨、長期穩定合作。</p>
      <h2>代工優勢</h2>
      <ul>
        <li>品質保證：嚴格品管流程，品質穩定一致</li>
        <li>價格優勢：工廠直營，減少中間環節成本</li>
        <li>客製印刷：1-3色印刷或單色雙面印刷，可印製LOGO</li>
        <li>保密承諾：保護客戶設計等商業機密</li>
      </ul>
      <h2>訂購資訊</h2>
      <p>最低訂購量150公斤起，統一交貨時間15-20天。</p>
    `,
    faqs: [
      { question: 'OEM代工的最低訂購量？', answer: '最低150公斤起訂，統一交貨時間15-20天。歡迎洽詢。' },
      { question: '可以使用我的品牌包裝嗎？', answer: '當然可以！我們提供白牌代工，可印製您的品牌LOGO、名稱，1-3色印刷或單色雙面印刷。' },
    ],
  },
  'custom-printing': {
    content: `
      <h2>客製化印刷服務</h2>
      <p>慶宗塑膠提供專業的塑膠袋印刷服務，包含背心袋印刷、洞口袋印刷、平口袋印刷。幫助您的品牌在產品包裝上展現專業形象。</p>
      <h2>印刷規格</h2>
      <ul>
        <li>色數：1-3色印刷，或單色雙面印刷</li>
        <li>方式：凸版印刷</li>
        <li>內容：LOGO、品牌名稱、產品資訊等</li>
        <li>稿件格式：AI、PDF（我們也可協助簡單排版）</li>
      </ul>
      <h2>印刷流程</h2>
      <ol>
        <li>提供設計稿件</li>
        <li>確認印刷規格及報價</li>
        <li>製作印刷版（首次製版另計）</li>
        <li>打樣確認顏色</li>
        <li>量產出貨（15-20天）</li>
      </ol>
    `,
    faqs: [
      { question: '印刷費用怎麼算？', answer: '印刷費用依色數、面積、數量而定。首次製版費另計，下次訂購免收。150公斤起訂。' },
      { question: '交貨要多久？', answer: '統一交貨時間15-20天，含製版、打樣、量產。' },
    ],
  },
  'wholesale': {
    content: `
      <h2>批發供應服務</h2>
      <p>慶宗塑膠提供長期穩定的背心袋批發、洞口袋批發、平口袋批發服務，適合經銷商、批發商、超市、市場等企業用戶。量大優惠，定期配送。</p>
      <h2>批發優勢</h2>
      <ul>
        <li>價格優惠：工廠直營，量大折扣，長期合作更優惠</li>
        <li>穩定供貨：充足庫存，不斷貨</li>
        <li>統一交貨：15-20天交貨</li>
        <li>配送服務：中南部配送，大量訂單可配送全台</li>
      </ul>
      <h2>訂購資訊</h2>
      <p>最低訂購量150公斤起，歡迎來電洽詢批發報價。</p>
    `,
    faqs: [
      { question: '批發價格怎麼算？', answer: '依產品類型及訂購數量提供報價。150公斤起訂，量越大越優惠。歡迎來電詢價。' },
      { question: '可以定期配送嗎？', answer: '可以！我們提供定期配送方案，確保您的背心袋、洞口袋、平口袋庫存充足。' },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PRODUCTS.map(p => (
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
