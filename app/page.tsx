import Link from 'next/link';
import { COMPANY_INFO, PRODUCTS, SERVICES, AREAS, SEO_KEYWORDS } from '@/lib/constants';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateFAQSchema } from '@/lib/schema';

const homeFAQs = [
  { question: '慶宗塑膠的最低訂購量是多少？', answer: '背心袋、洞口袋、平口袋統一最低訂購量150公斤起，客製化印刷產品也是150公斤起訂。歡迎來電詳詢。' },
  { question: '可以客製化印刷LOGO嗎？', answer: '可以！我們提供1-3色印刷或單色雙面印刷服務，可印製公司LOGO、品牌名稱、產品資訊等。150公斤起訂，15-20天交貨。' },
  { question: '交貨時間大約多久？', answer: '統一交貨時間為15-20天，依訂單數量可能有所調整。歡迎來電洽詢。' },
  { question: '背心袋、洞口袋、平口袋有什麼差別？', answer: '背心袋有T恤型提手，最常見於超市和市場；洞口袋在袋口打洞作為提手，外觀較精美；平口袋無提手，適合食品、五金等包裝。' },
  { question: '服務範圍涵蓋哪些地區？', answer: '我們工廠位於嘉義，主要服務中南部地區（嘉義、台南、高雄、雲林、彰化、台中等）。大量訂單可配送全台，運費另計。' },
  { question: '是否提供免費樣品？', answer: '我們提供標準規格產品的免費樣品供您評估。客製化產品需收取少量打樣費用，下單後可折抵。' },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup data={generateFAQSchema(homeFAQs)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent-500 text-primary-900 px-4 py-1 rounded-full text-sm font-bold mb-6">
              創立於1977年 ・ 近50年製造經驗
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              背心袋・洞口袋・平口袋<br />
              <span className="text-accent-300">專業製造・工廠直營</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl leading-relaxed">
              慶宗塑膠專營背心袋、洞口袋、平口袋製造與批發。
              提供1-3色客製化印刷、OEM代工服務，150公斤起訂，15-20天交貨。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-400 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                立即來電 {COMPANY_INFO.phoneDisplay}
              </a>
              <Link
                href="/products/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                瀏覽產品
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-xl shadow-xl p-6 md:p-8">
            {[
              { num: '47+', label: '年製造經驗', icon: '🏭' },
              { num: '150kg', label: '最低起訂量', icon: '📦' },
              { num: '15-20', label: '天交貨', icon: '⏱️' },
              { num: '全台', label: '配送服務', icon: '🚚' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-primary-700">{stat.num}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50" id="products">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">產品中心</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              專營背心袋、洞口袋、平口袋，支援客製化印刷服務。150公斤起訂，15-20天交貨。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.map(p => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products/" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              查看全部產品
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">為什麼選擇慶宗塑膠？</h2>
            <p className="text-gray-600">近50年的專業製造經驗，是您最值得信賴的塑膠製品夥伴</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🏭', title: '工廠直營', desc: '自有工廠生產製造背心袋、洞口袋、平口袋，省去中間商加價，提供最具競爭力的價格。' },
              { icon: '⏱️', title: '近50年經驗', desc: '1977年創立至今，累積近半世紀塑膠袋製造專業。豐富經驗確保品質穩定，技術實力深厚。' },
              { icon: '🎯', title: '客製化印刷', desc: '提供1-3色印刷或單色雙面印刷，可印製LOGO、品牌名稱。150公斤起訂，滿足各種需求。' },
              { icon: '✅', title: '品質保證', desc: '嚴格品管流程，原料品質把關，確保每批背心袋、洞口袋、平口袋品質一致。' },
              { icon: '🚚', title: '準時交貨', desc: '完善的生產排程管理，統一15-20天交貨。工廠位於嘉義，服務全台中南部。' },
              { icon: '📋', title: 'OEM代工', desc: '接受品牌代工、大量訂單生產。背心袋代工、洞口袋代工、平口袋代工，品質穩定。' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">服務項目</h2>
            <p className="text-gray-600">一站式塑膠製品解決方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-bold text-xl mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">合作流程</h2>
            <p className="text-gray-600">簡單四步驟，輕鬆完成訂單</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '需求諮詢', desc: '來電或線上填寫需求，告知產品規格、數量、用途' },
              { step: '02', title: '報價打樣', desc: '依需求提供報價，可安排打樣確認品質' },
              { step: '03', title: '生產製造', desc: '確認訂單後安排生產，嚴格品管把關' },
              { step: '04', title: '出貨配送', desc: '準時出貨，提供完善物流配送服務' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">服務區域</h2>
            <p className="text-gray-600">工廠位於嘉義，服務涵蓋全台中南部，大量訂單可配送全台</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {AREAS.map(a => (
              <Link key={a.slug} href={`/areas/${a.slug}/`} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors">{a.name}</div>
                <div className="text-xs text-gray-500 mt-1">{a.description.slice(0, 12)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">常見問答</h2>
            <p className="text-gray-600">關於訂購、生產、交貨的常見問題</p>
          </div>
          <FAQAccordion faqs={homeFAQs} />
          <div className="text-center mt-8">
            <Link href="/faq/" className="text-primary-600 hover:text-primary-700 font-medium">
              查看更多問答 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* SEO Text */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-sm text-gray-500 leading-relaxed">
          <h2 className="text-lg font-bold text-gray-700 mb-3">慶宗塑膠 - 背心袋・洞口袋・平口袋專業製造工廠</h2>
          <p className="mb-3">
            慶宗塑膠有限公司（CHIN TZON Plastics Co., Ltd.）成立於1977年，位於嘉義縣民雄鄉，是台灣中南部專業的背心袋工廠、洞口袋工廠、平口袋工廠。
            近50年來，我們專注於背心袋、洞口袋、平口袋的製造與批發，提供客製化印刷服務，服務客戶遍及嘉義、台南、高雄、雲林、彰化、台中等地。
          </p>
          <p className="mb-3">
            我們提供背心袋批發、洞口袋批發、平口袋批發服務，最低150公斤起訂，15-20天交貨。
            同時承接OEM代工訂單，提供1-3色印刷或單色雙面印刷服務，可印製LOGO、品牌名稱。
            無論您是超市、市場、餐飲業者，還是需要品牌印刷袋的企業客戶，慶宗塑膠都能為您提供最優質的產品與服務。
          </p>
          <p>
            歡迎致電 {COMPANY_INFO.phoneDisplay} 洽詢，或填寫線上表單，我們將盡速為您報價服務。
            背心袋工廠直營、洞口袋批發、平口袋製造 — 選擇慶宗，就是選擇放心。
          </p>
        </div>
      </section>
    </>
  );
}
