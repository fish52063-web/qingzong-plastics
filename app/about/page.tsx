import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '關於我們 - 近50年塑膠製品製造專家',
  description: `${COMPANY_INFO.name}成立於1977年，位於嘉義縣民雄鄉。近50年專業塑膠製品製造經驗，自有工廠、完整生產線、嚴格品管，是您最值得信賴的塑膠製品夥伴。`,
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '關於我們', url: '/about/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">關於慶宗塑膠</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            創立於1977年，近半世紀的專業塑膠製品製造經驗，是台灣中南部值得信賴的塑膠製品夥伴。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '關於我們' }]} />

          <div className="prose max-w-none">
            <h2>公司簡介</h2>
            <p>
              慶宗塑膠有限公司（CHIN TZON Plastics Co., Ltd.）成立於1977年，位於嘉義縣民雄鄉。
              近50年來，我們專注於塑膠製品的製造與銷售，從一間小型工廠發展為擁有完整生產線的專業製造商。
            </p>
            <p>
              我們專營背心袋、洞口袋、平口袋的製造與批發，提供客製化印刷服務，
              服務客戶遍及嘉義、台南、高雄、雲林、彰化、台中等中南部地區，大量訂單更可配送全台。
            </p>

            <h2>企業理念</h2>
            <p>
              <strong>「品質第一、誠信經營、永續發展」</strong>是慶宗塑膠一貫的經營理念。
              我們堅持使用優質原料、嚴格品管流程、準時交貨承諾，贏得客戶長期的信賴與支持。
            </p>

            <h2>核心競爭力</h2>
            <ul>
              <li><strong>近50年製造經驗</strong>：累積豐富的技術經驗與產業知識，面對各種需求都能提供專業解決方案。</li>
              <li><strong>工廠直營</strong>：自有工廠生產，省去中間商成本，提供具競爭力的價格。</li>
              <li><strong>完整生產線</strong>：從原料到成品一條龍作業，品質掌控更精確。</li>
              <li><strong>客製化印刷</strong>：提供1-3色印刷或單色雙面印刷，可印製LOGO、品牌名稱。150公斤起訂。</li>
              <li><strong>專注核心</strong>：專營背心袋、洞口袋、平口袋三大品類，專業聚焦，品質更好。</li>
            </ul>

            <h2>公司資訊</h2>
            <table>
              <tbody>
                <tr><td><strong>公司名稱</strong></td><td>{COMPANY_INFO.name}</td></tr>
                <tr><td><strong>英文名稱</strong></td><td>{COMPANY_INFO.nameEn}</td></tr>
                <tr><td><strong>成立年份</strong></td><td>{COMPANY_INFO.established}年</td></tr>
                <tr><td><strong>負責人</strong></td><td>{COMPANY_INFO.representative}</td></tr>
                <tr><td><strong>資本額</strong></td><td>{COMPANY_INFO.capital}</td></tr>
                <tr><td><strong>工廠登記</strong></td><td>登記號 {COMPANY_INFO.registrationNo}</td></tr>
                <tr><td><strong>註冊商標</strong></td><td>{COMPANY_INFO.trademark}（第{COMPANY_INFO.trademarkNo}號，{COMPANY_INFO.trademarkYear}年）</td></tr>
                <tr><td><strong>地址</strong></td><td>{COMPANY_INFO.address}</td></tr>
                <tr><td><strong>電話</strong></td><td>{COMPANY_INFO.phoneDisplay}</td></tr>
                <tr><td><strong>營業時間</strong></td><td>週一至五 {COMPANY_INFO.businessHours.weekday}｜週六 {COMPANY_INFO.businessHours.saturday}</td></tr>
              </tbody>
            </table>

            <h2>發展歷程</h2>
            <ul>
              <li><strong>1977年</strong> — 慶宗塑膠有限公司創立於嘉義縣民雄鄉</li>
              <li><strong>1984年</strong> — 註冊「慶宗及圖 CHIN TZON」商標</li>
              <li><strong>1990年代</strong> — 擴大生產規模，增設吹膜機、製袋機</li>
              <li><strong>2000年代</strong> — 拓展中南部市場，建立經銷網絡</li>
              <li><strong>2010年代</strong> — 深耕背心袋、洞口袋、平口袋市場</li>
              <li><strong>2020年代</strong> — 持續提升產能與品質，擴大客製化印刷服務</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection title="歡迎與我們合作" subtitle="近50年專業經驗，值得您的信賴。歡迎來電洽詢，了解更多合作方案。" />
    </>
  );
}
