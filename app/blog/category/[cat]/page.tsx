import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_CATEGORIES, COMPANY_INFO } from '@/lib/constants';
import { getPostsByCategory } from '@/lib/mdx';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return BLOG_CATEGORIES.map(c => ({ cat: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params;
  const category = BLOG_CATEGORIES.find(c => c.slug === cat);
  if (!category) return {};
  return {
    title: `${category.name} - 知識專欄`,
    description: `${COMPANY_INFO.shortName}${category.name}文章：${category.description}`,
    alternates: { canonical: `/blog/category/${cat}/` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const category = BLOG_CATEGORIES.find(c => c.slug === cat);
  if (!category) notFound();

  const posts = getPostsByCategory(cat);

  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '知識專欄', url: '/blog/' },
        { name: category.name, url: `/blog/category/${cat}/` },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-lg opacity-90">{category.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <BreadcrumbNav items={[
            { label: '知識專欄', href: '/blog/' },
            { label: category.name },
          ]} />

          <div className="flex flex-wrap gap-2 mb-8">
            <Link href="/blog/" className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors">
              全部文章
            </Link>
            {BLOG_CATEGORIES.map(c => (
              <Link key={c.slug} href={`/blog/category/${c.slug}/`} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${c.slug === cat ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'}`}>
                {c.name}
              </Link>
            ))}
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                    <span className="text-4xl text-primary-300">📄</span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-gray-400">{post.readingTime}</span>
                    <h2 className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 mt-1 mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-500 line-clamp-2">{post.description}</p>
                    <div className="text-xs text-gray-400 mt-3">{post.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <p>此分類目前沒有文章</p>
              <Link href="/blog/" className="text-primary-600 hover:text-primary-700 mt-2 inline-block">返回全部文章</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
