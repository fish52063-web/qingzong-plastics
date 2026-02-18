import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

const allFAQs = [
  { category: '訂購相關', faqs: [
    { question: '最低訂購量是多少？', answer: '依產品類型不同：標準塑膠袋約50公斤起，客製化印刷產品約100-200公斤起。少量需求也歡迎詢問，我們會盡量配合。' },
    { question: '如何下訂單？', answer: '您可以來電（05-221-1717）、填寫線上表單、或直接到工廠洽談。確認規格及報價後即可下單生產。' },
    { question: '可以先看樣品嗎？', answer: '可以！標準規格產品免費提供樣品。客製化產品收取少量打樣費，確認下單後可折抵。' },
    { question: '付款方式有哪些？', answer: '支援現金、匯款、支票等付款方式。新客戶第一次合作建議貨到付款或先付款後出貨，建立信任後可談月結。' },
  ]},
  { category: '產品相關', faqs: [
    { question: '你們有哪些產品？', answer: '我們生產塑膠袋（背心袋、平口袋、夾鏈袋、食品袋等）、塑膠膜（PE膜、收縮膜、拉伸膜）、塑膠繩、塑膠網、塑膠線及再生原料。' },
    { question: '塑膠袋有食品級的嗎？', answer: '有！我們使用符合FDA標準的食品級原料生產食品袋，可安心直接接觸食品。需要時可提供相關檢驗報告。' },
    { question: 'PE袋和PP袋有什麼差別？', answer: 'PE袋柔軟有彈性，適合包裝較重的物品；PP袋硬挺透明，適合展示性包裝。PE耐低溫，PP耐高溫。依用途選擇最適材質。' },
    { question: '可以做環保材質的塑膠袋嗎？', answer: '我們提供可回收材質產品，並積極投入再生原料使用。關於生物可分解袋等新型環保材質，歡迎來電討論。' },
  ]},
  { category: '客製化與印刷', faqs: [
    { question: '可以客製化尺寸嗎？', answer: '可以！長度、寬度、厚度都可依需求訂製。請告知產品用途及所需規格，我們為您量身打造。' },
    { question: '印刷可以印幾色？', answer: '支援1-6色凸版印刷，可印製LOGO、品牌名稱、產品資訊、條碼等。請提供AI或PDF格式完稿。' },
    { question: '印刷的最低數量？', answer: '印刷最低約200公斤起（因需製版）。首次製版費約1,000-3,000元/色，量大時版費可分攤降低單位成本。' },
    { question: '沒有設計稿怎麼辦？', answer: '您只需提供LOGO或文字內容，我們可協助簡單排版。較複雜的設計建議委託專業設計師，我們也可推薦合作設計公司。' },
  ]},
  { category: '交期與配送', faqs: [
    { question: '標準品交期多久？', answer: '一般標準品3-5個工作天可出貨，庫存充足時更快。' },
    { question: '客製化產品交期多久？', answer: '客製化（含印刷）產品約7-15個工作天，依數量及複雜度而定。急單可另外洽詢加急費用。' },
    { question: '配送範圍？', answer: '主要服務嘉義、台南、高雄、雲林、彰化、台中等中南部地區，達一定金額可免費配送。大量訂單可配送全台，運費另計。' },
    { question: '可以到工廠自取嗎？', answer: '歡迎！工廠地址：嘉義縣民雄鄉大崎村內埔仔7之1號。自取享優惠，建議來前先電話確認。' },
  ]},
  { category: '品質與保證', faqs: [
    { question: '產品品質如何保證？', answer: '我們執行三階段品管：原料進料檢驗（確認原料品質）、製程中抽檢（確認規格正確）、成品出貨檢驗（確認外觀品質）。' },
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
