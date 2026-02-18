import Link from 'next/link';
import { COMPANY_INFO, PRODUCTS, SERVICES, AREAS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-industrial-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center font-bold text-lg">
                慶
              </div>
              <div>
                <div className="font-bold text-lg">{COMPANY_INFO.shortName}</div>
                <div className="text-xs text-gray-400">{COMPANY_INFO.nameEn}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              成立於{COMPANY_INFO.established}年，近50年專業塑膠製品製造經驗。
              工廠直營、品質穩定、交期準時。
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-gray-300">電話：</span>
                <a href={COMPANY_INFO.phoneHref} className="hover:text-primary-400">{COMPANY_INFO.phoneDisplay}</a>
              </p>
              <p>
                <span className="text-gray-300">地址：</span>
                {COMPANY_INFO.address}
              </p>
              <p>
                <span className="text-gray-300">營業時間：</span>
                週一至五 {COMPANY_INFO.businessHours.weekday}
              </p>
              {COMPANY_INFO.lineUrl && (
                <p>
                  <span className="text-gray-300">LINE：</span>
                  <a href={COMPANY_INFO.lineUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#06C755]">加入好友諮詢</a>
                </p>
              )}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">產品中心</h3>
            <ul className="space-y-2">
              {PRODUCTS.map(p => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}/`} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">服務項目</h3>
            <ul className="space-y-2">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-lg mb-3 mt-6">快速連結</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-sm text-gray-400 hover:text-primary-400">關於我們</Link></li>
              <li><Link href="/cases/" className="text-sm text-gray-400 hover:text-primary-400">案例展示</Link></li>
              <li><Link href="/blog/" className="text-sm text-gray-400 hover:text-primary-400">知識專欄</Link></li>
              <li><Link href="/faq/" className="text-sm text-gray-400 hover:text-primary-400">常見問答</Link></li>
              <li><Link href="/contact/" className="text-sm text-gray-400 hover:text-primary-400">聯繫我們</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">服務區域</h3>
            <ul className="space-y-2">
              {AREAS.slice(0, 8).map(a => (
                <li key={a.slug}>
                  <Link href={`/areas/${a.slug}/`} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            商標「{COMPANY_INFO.trademark}」註冊第 {COMPANY_INFO.trademarkNo} 號（{COMPANY_INFO.trademarkYear}年）
          </p>
        </div>
      </div>
    </footer>
  );
}
