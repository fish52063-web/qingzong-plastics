import Link from 'next/link';

interface ProductCardProps {
  name: string;
  slug: string;
  description: string;
  shortDesc: string;
  icon: string;
  image: string;
}

export default function ProductCard({ name, slug, description, shortDesc, icon, image }: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}/`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-6xl">
        {icon}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-1">
          {name}
        </h3>
        <p className="text-sm text-primary-600 mb-2">{shortDesc}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-4 text-sm font-medium text-primary-600 group-hover:text-primary-700 flex items-center gap-1">
          瞭解更多
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
