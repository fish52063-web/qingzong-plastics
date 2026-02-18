import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '服務項目 - 製造・代工・印刷・批發・回收',
  description: `${COMPANY_INFO.shortName}提供塑膠製品製造、OEM代工、客製化印刷、批發供應、塑膠回收再製等一站式服務。近50年專業經驗，歡迎洽詢。`,
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '服務項目', url: '/services/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">服務項目</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            從原料到成品、從設計到交貨，慶宗塑膠提供一站式塑膠製品解決方案。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '服務項目' }]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold text-2xl mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-3">{s.name}</h2>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.keywords.map(kw => (
                    <span key={kw} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{kw}</span>
                  ))}
                </div>
                <span className="text-primary-600 font-medium group-hover:text-primary-700 flex items-center gap-1">
                  瞭解更多
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
