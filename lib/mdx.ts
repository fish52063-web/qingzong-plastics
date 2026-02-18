import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

const blogDir = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  keywords: string[];
  image?: string;
  readingTime: string;
}

export interface Post extends PostMeta {
  content: string;
  headings: { id: string; text: string; level: number }[];
}

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fff]+/g, '-')
      .replace(/^-|-$/g, '');
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(blogDir)) return [];
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx') || f.endsWith('.md'));
  const posts = files.map(file => {
    const slug = file.replace(/\.(mdx|md)$/, '');
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { data, content } = matter(raw);
    const stats = readingTime(content);
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || '2026-01-01',
      category: data.category || 'uncategorized',
      keywords: data.keywords || [],
      image: data.image || undefined,
      readingTime: stats.text.replace('read', '閱讀'),
    };
  });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const mdxPath = path.join(blogDir, `${slug}.mdx`);
  const mdPath = path.join(blogDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  const headings = extractHeadings(content);
  const processed = await remark().use(html, { sanitize: false }).process(content);

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || '2026-01-01',
    category: data.category || 'uncategorized',
    keywords: data.keywords || [],
    image: data.image || undefined,
    readingTime: stats.text.replace('read', '閱讀'),
    content: processed.toString(),
    headings,
  };
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(p => p.category === category);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map(p => p.category))];
}
