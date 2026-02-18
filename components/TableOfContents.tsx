'use client';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav className="bg-gray-50 rounded-lg p-5 mb-8 border border-gray-200">
      <h2 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider">文章目錄</h2>
      <ul className="space-y-1.5">
        {headings.map((h, i) => (
          <li key={i} style={{ paddingLeft: `${(h.level - 2) * 16}px` }}>
            <a
              href={`#${h.id}`}
              className="text-sm text-gray-600 hover:text-primary-600 transition-colors block py-0.5"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
