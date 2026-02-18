import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AREAS, PRODUCTS, COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateAreaSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';

export function generateStaticParams() {
  return AREAS.map(a => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const areaData = AREAS.find(a => a.slug === area);
  if (!areaData) return {};
  return {
    title: `${areaData.name}背心袋・洞口袋・平口袋批發 | ${COMPANY_INFO.shortName}`,
    description: `${COMPANY_INFO.shortName}${areaData.name}服務：背心袋批發、洞口袋批發、平口袋批發、塑膠袋印刷、客製化印刷袋。${areaData.description}150公斤起訂，15-20天交貨。`,
    keywords: [
      `${areaData.name}塑膠袋`, `${areaData.name}背心袋`, `${areaData.name}洞口袋`,
      `${areaData.name}平口袋`, `${areaData.name}印刷袋`, `${areaData.name}塑膠袋批發`,
    ],
    alternates: { canonical: `/areas/${area}/` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const areaData = AREAS.find(a => a.slug === area);
  if (!areaData) notFound();

  const faqs = [
    { question: `${areaData.name}可以配送背心袋嗎？`, answer: `可以！我們提供${areaData.name}地區背心袋、洞口袋、平口袋批發配送服務。150公斤起訂，15-20天交貨。` },
    { question: `${areaData.name}塑膠袋印刷服務？`, answer: `我們提供1-3色印刷或單色雙面印刷，可印製LOGO、品牌名稱。${areaData.name}地區皆可配送，150公斤起訂。` },
    { question: `${areaData.name}最低訂購量多少？`, answer: `背心袋、洞口袋、平口袋統一最低訂購量150公斤起，${areaData.name}地區歡迎來電洽詢。` },
    { question: `${areaData.name}有專人服務嗎？`, answer: `有！我們提供${areaData.name}地區專人服務，歡迎來電 ${COMPANY_INFO.phoneDisplay} 洽詢。` },
  ];

  return (
    <>
      <SchemaMarkup data={[
        generateAreaSchema(areaData),
        generateFAQSchema(faqs),
        generateBreadcrumbSchema([
          { name: '首頁', url: '/' },
          { name: '服務區域', url: '/areas/' },
          { name: areaData.name, url: `/areas/${area}/` },
        ]),
      ]} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{areaData.name}背心袋・洞口袋・平口袋批發</h1>
          <p className="text-lg opacity-90">{areaData.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav items={[
            { label: '服務區域', href: '/areas/' },
            { label: areaData.name },
          ]} />

          <div className="prose max-w-none">
            <h2>{areaData.name}塑膠袋批發供應</h2>
            <p>
              慶宗塑膠為{areaData.name}地區客戶提供背心袋、洞口袋、平口袋批發配送服務。
              工廠位於嘉義縣民雄鄉，近50年專業製造經驗，工廠直營價格最優惠。
              {areaData.name}地區客戶可享穩定供貨、準時配送的專業服務。
            </p>

            <h2>{areaData.name}可供應產品</h2>
            <ul>
              <li><strong>背心袋</strong>：超市、市場、餐飲外帶最常用，{areaData.name}地區大量批發配送</li>
              <li><strong>洞口袋</strong>：打洞提手袋，適合品牌商店、服飾店、禮品店</li>
              <li><strong>平口袋</strong>：無提手包裝袋，適合食品、五金、工業包裝</li>
              <li><strong>客製化印刷袋</strong>：1-3色印刷或單色雙面印刷，可印LOGO、品牌名稱</li>
            </ul>

            <h2>{areaData.name}訂購資訊</h2>
            <ul>
              <li><strong>最低訂購量</strong>：150公斤起</li>
              <li><strong>交貨時間</strong>：15-20天</li>
              <li><strong>印刷服務</strong>：1-3色 / 單色雙面印刷</li>
              <li><strong>配送方式</strong>：物流配送到府</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-8">
            {PRODUCTS.map(p => (
              <Link key={p.slug} href={`/products/${p.slug}/`} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 transition-colors group">
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-primary-600">{p.name}</div>
                <div className="text-xs text-gray-500 mt-1">{p.shortDesc}</div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">常見問答</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection title={`${areaData.name}客戶專線`} subtitle={`歡迎${areaData.name}地區客戶來電洽詢背心袋、洞口袋、平口袋批發報價。150公斤起訂，15-20天交貨。`} />
    </>
  );
}
