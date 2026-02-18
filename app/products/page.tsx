import type { Metadata } from 'next';
import { PRODUCTS, COMPANY_INFO } from '@/lib/constants';
import ProductCard from '@/components/ProductCard';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '產品中心 - 背心袋・洞口袋・平口袋・客製化印刷',
  description: `${COMPANY_INFO.shortName}產品中心：專營背心袋、洞口袋、平口袋製造批發，提供1-3色客製化印刷。工廠直營，150公斤起訂，15-20天交貨。`,
  keywords: ['背心袋', '洞口袋', '平口袋', '塑膠袋批發', '塑膠袋工廠', '背心袋批發', '印刷袋', '客製化塑膠袋'],
  alternates: { canonical: '/products/' },
};

export default function ProductsPage() {
  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '產品中心', url: '/products/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">產品中心</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            慶宗塑膠專營背心袋、洞口袋、平口袋製造與批發，提供1-3色客製化印刷服務。工廠直營，150公斤起訂，15-20天交貨。
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '產品中心' }]} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map(p => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="找不到需要的產品？" subtitle="我們可依您的需求客製化生產，歡迎來電洽詢。" />
    </>
  );
}
