import type { Metadata } from 'next';
import { PRODUCTS, COMPANY_INFO } from '@/lib/constants';
import ProductCard from '@/components/ProductCard';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '產品中心 - 塑膠袋・塑膠膜・塑膠繩・塑膠網',
  description: `${COMPANY_INFO.shortName}產品中心：塑膠袋、塑膠膜、塑膠繩、塑膠網、塑膠線、塑膠再製原料、客製化產品。工廠直營批發，支援OEM代工及客製印刷。`,
  keywords: ['塑膠袋', '塑膠膜', '塑膠繩', '塑膠網', '塑膠袋批發', '塑膠袋工廠', 'PE袋', 'PP袋'],
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
            慶宗塑膠提供完整塑膠製品產品線，從塑膠袋、塑膠膜到塑膠繩網，滿足各行業包裝需求。所有產品工廠直營生產，品質穩定可靠。
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
