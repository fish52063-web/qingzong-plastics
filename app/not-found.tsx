import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">頁面不存在</h2>
        <p className="text-gray-500 mb-8">您所尋找的頁面可能已移除或不存在。</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            回到首頁
          </Link>
          <Link href="/products/" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            瀏覽產品
          </Link>
          <Link href="/contact/" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            聯繫我們
          </Link>
        </div>
      </div>
    </div>
  );
}
