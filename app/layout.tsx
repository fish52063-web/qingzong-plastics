import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/schema';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.shortName} | 近50年專業塑膠製品製造 - 塑膠袋・塑膠膜・塑膠繩・塑膠網`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description: COMPANY_INFO.description,
  keywords: ['塑膠袋工廠', '塑膠袋批發', '客製化塑膠袋', '塑膠膜', '塑膠繩', '塑膠網', '嘉義塑膠工廠', '慶宗塑膠', 'PE袋', 'PP袋', '塑膠袋代工', '塑膠袋印刷'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(COMPANY_INFO.website),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: COMPANY_INFO.website,
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.shortName} | 近50年專業塑膠製品製造`,
    description: COMPANY_INFO.description,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: COMPANY_INFO.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.shortName} | 近50年專業塑膠製品製造`,
    description: COMPANY_INFO.description,
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  other: { 'google-site-verification': 'YOUR_VERIFICATION_CODE' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <SchemaMarkup data={[
          generateOrganizationSchema(),
          generateLocalBusinessSchema(),
          generateWebSiteSchema(),
        ]} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
