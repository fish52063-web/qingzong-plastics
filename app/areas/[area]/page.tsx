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
    title: `${areaData.name}塑膠袋批發・塑膠製品供應 | ${COMPANY_INFO.shortName}`,
    description: `${COMPANY_INFO.shortName}${areaData.name}服務：塑膠袋批發、塑膠膜、塑膠繩網供應、客製化印刷、OEM代工。${areaData.description}`,
    alternates: { canonical: `/areas/${area}/` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const areaData = AREAS.find(a => a.slug === area);
  if (!areaData) notFound();

  const faqs = [
    { question: `${areaData.name}可以配送嗎？`, answer: `可以！${areaData.description}我們提供定期配送服務，達一定金額可免運費。歡迎來電詳詢。` },
    { question: `${areaData.name}的交貨時間？`, answer: `一般標準品3-5個工作天，客製品7-15天。${areaData.name}地區配送通常1-2天送達。` },
    { question: `${areaData.name}有業務服務嗎？`, answer: `有！我們有專人服務${areaData.name}地區客戶，可安排到府拜訪洽談。` },
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
          <h1 className="text-4xl font-bold mb-2">{areaData.name} — 塑膠製品供應服務</h1>
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
            <h2>{areaData.name}塑膠製品供應</h2>
            <p>
              慶宗塑膠為{areaData.name}地區客戶提供全系列塑膠製品供應服務。
              我們的工廠位於嘉義縣民雄鄉，交通便利，配送{areaData.name}快速方便。
              無論您是需要塑膠袋批發、塑膠膜供應、還是客製化印刷服務，我們都能滿足您的需求。
            </p>

            <h2>提供產品</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 mb-8">
            {PRODUCTS.map(p => (
              <Link key={p.slug} href={`/products/${p.slug}/`} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-primary-50 transition-colors group">
                <div className="text-3xl mb-2">{p.icon}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-primary-600">{p.name}</div>
              </Link>
            ))}
          </div>

          <div className="prose max-w-none">
            <h2>{areaData.name}服務優勢</h2>
            <ul>
              <li>專人服務：{areaData.name}地區有專屬業務人員，可到府拜訪洽談</li>
              <li>快速配送：標準品下單後1-2天配送到府</li>
              <li>彈性訂單：大小訂單皆可配合，量大享優惠</li>
              <li>售後保障：品質問題快速處理，讓您安心無虞</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">常見問答</h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection title={`${areaData.name}客戶專線`} subtitle={`歡迎${areaData.name}地區客戶來電洽詢，我們提供最優惠的價格及最快速的配送服務。`} />
    </>
  );
}
