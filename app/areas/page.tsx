import type { Metadata } from 'next';
import Link from 'next/link';
import { AREAS, COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '服務區域 - 嘉義・台南・高雄・雲林・彰化・台中',
  description: `${COMPANY_INFO.shortName}服務區域涵蓋嘉義、台南、高雄、雲林、彰化、台中等中南部地區。工廠位於嘉義民雄，大量訂單可配送全台。`,
  alternates: { canonical: '/areas/' },
};

export default function AreasPage() {
  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '服務區域', url: '/areas/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">服務區域</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            工廠位於嘉義縣民雄鄉，主要服務台灣中南部地區，大量訂單可配送全台。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '服務區域' }]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map(a => (
              <Link key={a.slug} href={`/areas/${a.slug}/`} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2">{a.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{a.description}</p>
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
      </section>

      <CTASection title="您所在的地區不在列表中？" subtitle="大量訂單可配送全台，歡迎來電洽詢配送服務。" />
    </>
  );
}
