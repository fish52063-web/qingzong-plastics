import type { Metadata } from 'next';
import Link from 'next/link';
import { AREAS, COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '服務區域 - 全台背心袋・洞口袋・平口袋批發配送',
  description: `${COMPANY_INFO.shortName}服務全台各縣市：台北、新北、桃園、台中、台南、高雄等。背心袋、洞口袋、平口袋工廠直營批發，客製化印刷，150公斤起訂，配送全台。`,
  alternates: { canonical: '/areas/' },
};

export default function AreasPage() {
  const northAreas = AREAS.filter(a => ['taipei', 'new-taipei', 'keelung', 'taoyuan', 'hsinchu', 'miaoli'].includes(a.slug));
  const centralAreas = AREAS.filter(a => ['taichung', 'changhua', 'nantou', 'yunlin', 'chiayi'].includes(a.slug));
  const southAreas = AREAS.filter(a => ['tainan', 'kaohsiung', 'pingtung'].includes(a.slug));
  const eastAreas = AREAS.filter(a => ['yilan', 'hualien', 'taitung', 'penghu'].includes(a.slug));
  const nationwideArea = AREAS.filter(a => a.slug === 'nationwide');

  const sections = [
    { title: '北部地區', areas: northAreas },
    { title: '中部地區', areas: centralAreas },
    { title: '南部地區', areas: southAreas },
    { title: '東部及離島', areas: eastAreas },
    { title: '全台服務', areas: nationwideArea },
  ];

  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '服務區域', url: '/areas/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">服務區域 — 全台配送</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            工廠位於嘉義縣民雄鄉，背心袋、洞口袋、平口袋批發配送全台各縣市。150公斤起訂，15-20天交貨。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '服務區域' }]} />

          {sections.map(section => (
            <div key={section.title} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary-600 rounded-full" />
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.areas.map(a => (
                  <Link key={a.slug} href={`/areas/${a.slug}/`} className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2">{a.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{a.description}</p>
                    <span className="text-primary-600 text-sm font-medium group-hover:text-primary-700 flex items-center gap-1">
                      查看詳情
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="全台配送，歡迎洽詢" subtitle="背心袋、洞口袋、平口袋工廠直營批發，150公斤起訂，15-20天交貨，配送全台各縣市。" />
    </>
  );
}
