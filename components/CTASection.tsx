import Link from 'next/link';
import { COMPANY_INFO } from '@/lib/constants';

export default function CTASection({
  title = '需要塑膠製品報價？',
  subtitle = '近50年製造經驗，工廠直營，品質穩定，交期準時。歡迎來電洽詢或填寫表單，我們將盡速為您服務。',
  variant = 'primary',
}: {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'dark';
}) {
  const bgClass = variant === 'dark'
    ? 'bg-industrial-800 text-white'
    : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white';

  return (
    <section className={`${bgClass} py-16`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {COMPANY_INFO.phoneDisplay}
          </a>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            線上諮詢
          </Link>
        </div>
      </div>
    </section>
  );
}
