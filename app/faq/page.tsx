import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

const allFAQs = [
  { category: '訂購相關', faqs: [
    { question: '最低訂購量是多少？', answer: '背心袋、洞口袋、平口袋統一最低訂購量150公斤起，客製化印刷產品也是150公斤起訂。' },
    { question: '如何下訂單？', answer: '您可以來電（05-221-1717）、填寫線上表單、或直接到工廠洽談。確認規格及報價後即可下單生產。' },
    { question: '可以先看樣品嗎？', answer: '可以！標準規格產品免費提供樣品。客製化產品收取少量打樣費，確認下單後可折抵。' },
    { question: '付款方式有哪些？', answer: '支援現金、匯款、支票等付款方式。新客戶第一次合作建議貨到付款或先付款後出貨，建立信任後可談月結。' },
  ]},
  { category: '產品相關', faqs: [
    { question: '你們有哪些產品？', answer: '我們專營三大類型塑膠袋：背心袋（超市/市場用提袋）、洞口袋（打洞提手袋）、平口袋（無提手包裝袋）。各類型皆可客製尺寸與印刷。' },
    { question: '背心袋、洞口袋、平口袋有什麼差別？', answer: '背心袋有T恤型提手，最常見於超市和市場；洞口袋在袋口打洞作為提手，外觀較精美，適合品牌商店；平口袋無提手，適合食品、五金等包裝。' },
    { question: '塑膠袋有食品級的嗎？', answer: '有！我們使用符合FDA標準的食品級原料生產食品袋，可安心直接接觸食品。需要時可提供相關檢驗報告。' },
    { question: '背心袋和洞口袋哪個比較適合我？', answer: '背心袋適合超市、市場、餐飲外帶等大量使用場景，成本較低；洞口袋適合服飾店、禮品店等注重品牌形象的場所，版面完整適合印刷。' },
  ]},
  { category: '客製化與印刷', faqs: [
    { question: '可以客製化尺寸嗎？', answer: '可以！背心袋、洞口袋、平口袋的長度、寬度、厚度都可依需求訂製。請告知產品用途及所需規格。' },
    { question: '印刷可以印幾色？', answer: '我們提供1-3色印刷或單色雙面印刷，可印製LOGO、品牌名稱、產品資訊等。請提供AI或PDF格式設計稿。' },
    { question: '印刷的最低數量？', answer: '客製化印刷產品最低150公斤起訂。首次製版費另計，下次訂購免收。' },
    { question: '沒有設計稿怎麼辦？', answer: '您只需提供LOGO或文字內容，我們可協助簡單排版。較複雜的設計建議委託專業設計師。' },
  ]},
  { category: '交期與配送', faqs: [
    { question: '交貨時間多久？', answer: '統一交貨時間為15-20天，依訂單數量可能有所調整。' },
    { question: '配送範圍？', answer: '主要服務嘉義、台南、高雄、雲林、彰化、台中等中南部地區，達一定金額可免費配送。大量訂單可配送全台，運費另計。' },
    { question: '可以到工廠自取嗎？', answer: '歡迎！工廠地址：嘉義縣民雄鄉大崎村內埔仔7之1號。自取享優惠，建議來前先電話確認。' },
  ]},
  { category: '品質與保證', faqs: [
    { question: '產品品質如何保證？', answer: '我們執行三階段品管：原料進料檢驗（確認原料品質）、製程中抽檢（確認規格正確）、成品出貨檢驗（確認外觀品質）。近50年信譽保證。' },
    { question: '收到貨品質有問題怎麼辦？', answer: '如有品質問題請於收貨後3天內通知，我們會安排退換貨或補貨。近50年信譽保證，請安心訂購。' },
    { question: '你們有什麼認證？', answer: `我們擁有合法工廠登記（登記號${COMPANY_INFO.registrationNo}）及註冊商標（${COMPANY_INFO.trademark}，第${COMPANY_INFO.trademarkNo}號）。` },
  ]},
];

const flatFAQs = allFAQs.flatMap(cat => cat.faqs);

export const metadata: Metadata = {
  title: '常見問答 FAQ - 訂購・產品・印刷・配送',
  description: `${COMPANY_INFO.shortName}常見問答：關於塑膠袋訂購、產品材質、客製化印刷、交期配送、品質保證等問題解答。`,
  alternates: { canonical: '/faq/' },
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup data={[
        generateFAQSchema(flatFAQs),
        generateBreadcrumbSchema([
          { name: '首頁', url: '/' },
          { name: '常見問答', url: '/faq/' },
        ]),
      ]} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">常見問答 FAQ</h1>
          <p className="text-lg opacity-90">關於訂購、產品、印刷、配送的常見問題</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '常見問答' }]} />
          {allFAQs.map((cat, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm font-bold">{i + 1}</span>
                {cat.category}
              </h2>
              <FAQAccordion faqs={cat.faqs} />
            </div>
          ))}
        </div>
      </section>

      <CTASection title="還有其他問題？" subtitle="歡迎直接來電洽詢，我們的專業團隊將為您詳細解答。" />
    </>
  );
}
