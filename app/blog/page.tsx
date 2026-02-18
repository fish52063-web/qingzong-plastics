import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO, BLOG_CATEGORIES } from '@/lib/constants';
import { getAllPosts } from '@/lib/mdx';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '知識專欄 - 塑膠知識・包裝指南・產業動態',
  description: `${COMPANY_INFO.shortName}知識專欄：塑膠材質知識、包裝方案指南、產業動態、環保永續、產品應用等專業文章。`,
  alternates: { canonical: '/blog/' },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = BLOG_CATEGORIES;

  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '知識專欄', url: '/blog/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">知識專欄</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            塑膠知識、包裝指南、產業動態 — 幫助您做出更好的包裝決策
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '知識專欄' }]} />

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Link href="/blog/" className="bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
              全部文章
            </Link>
            {categories.map(cat => (
              <Link key={cat.slug} href={`/blog/category/${cat.slug}/`} className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors">
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Posts grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                    <span className="text-4xl text-primary-300">📄</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded">{post.category}</span>
                      <span className="text-xs text-gray-400">{post.readingTime}</span>
                    </div>
                    <h2 className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
                    <div className="text-xs text-gray-400 mt-3">{post.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg">文章即將上線，敬請期待！</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
