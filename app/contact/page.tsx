import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '聯繫我們 - 免費諮詢報價',
  description: `聯繫${COMPANY_INFO.shortName}：電話 ${COMPANY_INFO.phoneDisplay}，地址 ${COMPANY_INFO.address}。提供免費諮詢報價，歡迎洽詢。`,
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '聯繫我們', url: '/contact/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">聯繫我們</h1>
          <p className="text-lg opacity-90">歡迎來電或填寫表單，我們將盡速為您服務</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '聯繫我們' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">聯繫方式</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">電話</h3>
                    <a href={COMPANY_INFO.phoneHref} className="text-primary-600 text-lg font-medium hover:text-primary-700">{COMPANY_INFO.phoneDisplay}</a>
                    <p className="text-sm text-gray-500 mt-1">週一至五 {COMPANY_INFO.businessHours.weekday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">地址</h3>
                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                    <a href={COMPANY_INFO.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:text-primary-700 mt-1 inline-block">
                      在 Google Maps 上查看 →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">營業時間</h3>
                    <p className="text-gray-600">週一至五：{COMPANY_INFO.businessHours.weekday}</p>
                    <p className="text-gray-600">週六：{COMPANY_INFO.businessHours.saturday}</p>
                    <p className="text-gray-600">週日：{COMPANY_INFO.businessHours.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Facebook</h3>
                    <a href={COMPANY_INFO.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      慶宗塑膠 Facebook 專頁
                    </a>
                  </div>
                </div>

                {COMPANY_INFO.lineUrl && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#06C755] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.349 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">LINE</h3>
                      <a href={COMPANY_INFO.lineUrl} target="_blank" rel="noopener noreferrer" className="text-[#06C755] hover:text-[#05a847] font-medium">
                        加入 LINE 好友諮詢
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 h-64">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(COMPANY_INFO.address)}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="慶宗塑膠位置"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">線上諮詢</h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-600 mb-6">填寫以下表單，我們將於 1 個工作天內回覆您。</p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">公司名稱</label>
                      <input type="text" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="您的公司名稱" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">聯繫人 *</label>
                      <input type="text" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="您的姓名" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">電話 *</label>
                      <input type="tel" required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="您的電話" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="您的Email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">需要的產品/服務 *</label>
                    <select required className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="">請選擇</option>
                      <option value="vest-bag">背心袋</option>
                      <option value="hole-bag">洞口袋</option>
                      <option value="flat-bag">平口袋</option>
                      <option value="custom-print">客製化印刷</option>
                      <option value="oem">OEM代工</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">需求說明 *</label>
                    <textarea required rows={5} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="請描述您需要的產品規格、數量、用途等資訊..." />
                  </div>
                  <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors">
                    送出諮詢
                  </button>
                  <p className="text-xs text-gray-500 text-center">送出即表示同意我們與您聯繫討論需求</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
