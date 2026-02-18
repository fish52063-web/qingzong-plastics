import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COMPANY_INFO, BLOG_CATEGORIES } from '@/lib/constants';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import TableOfContents from '@/components/TableOfContents';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [COMPANY_INFO.name],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && (p.category === post.category || p.keywords.some(k => post.keywords.includes(k))))
    .slice(0, 4);

  const catName = BLOG_CATEGORIES.find(c => c.slug === post.category)?.name || post.category;

  return (
    <>
      <SchemaMarkup data={[
        generateArticleSchema(post),
        generateBreadcrumbSchema([
          { name: '首頁', url: '/' },
          { name: '知識專欄', url: '/blog/' },
          { name: catName, url: `/blog/category/${post.category}/` },
          { name: post.title, url: `/blog/${slug}/` },
        ]),
      ]} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <Link href={`/blog/category/${post.category}/`} className="bg-white/20 px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors">
              {catName}
            </Link>
            <span className="text-sm opacity-75">{post.date}</span>
            <span className="text-sm opacity-75">{post.readingTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav items={[
            { label: '知識專欄', href: '/blog/' },
            { label: catName, href: `/blog/category/${post.category}/` },
            { label: post.title },
          ]} />

          <TableOfContents headings={post.headings} />

          <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          {post.keywords.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.keywords.map(kw => (
                <span key={kw} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">{kw}</span>
              ))}
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">相關文章</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}/`} className="block bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors">
                    <h3 className="font-medium text-gray-800 hover:text-primary-600 line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{p.readingTime} | {p.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title="需要塑膠製品？" subtitle="慶宗塑膠提供全系列塑膠製品，工廠直營，歡迎洽詢報價。" />
    </>
  );
}
