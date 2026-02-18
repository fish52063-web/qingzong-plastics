import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '案例展示 - 客戶合作實績',
  description: `${COMPANY_INFO.shortName}客戶合作案例：食品業包裝、農業資材、物流包材、零售通路等多元產業合作實績。`,
  alternates: { canonical: '/cases/' },
};

const cases = [
  {
    title: '知名食品廠 — 客製化食品包裝袋',
    industry: '食品業',
    description: '為嘉義地區知名食品廠提供食品級PE袋，客製化尺寸及3色印刷，月供5噸。嚴格符合食品安全標準，品質穩定深獲客戶肯定。',
    products: ['食品級PE袋', '3色印刷', '客製尺寸'],
    result: '合作超過10年，客戶滿意度極高',
  },
  {
    title: '大型超市連鎖 — 背心袋批量供應',
    industry: '零售通路',
    description: '為南部多間超市提供HDPE背心袋，印刷店家LOGO。穩定供貨，準時配送，價格具競爭力。',
    products: ['HDPE背心袋', 'LOGO印刷', '定期配送'],
    result: '長期合作，每月穩定出貨',
  },
  {
    title: '農業合作社 — 農用覆蓋膜',
    industry: '農業',
    description: '供應嘉南地區農業合作社PE農業膜，用於溫室覆蓋及作物保護。抗UV材質，使用壽命長。',
    products: ['PE農業膜', '抗UV', '大面積覆蓋'],
    result: '有效延長使用壽命，降低更換頻率',
  },
  {
    title: '電商物流公司 — 快遞包裝袋',
    industry: '電商物流',
    description: '為電商物流提供客製化快遞袋，防水防撕裂，印刷品牌資訊。支援多種尺寸，日產能高。',
    products: ['快遞袋', '防水防撕', '多尺寸'],
    result: '日出貨量穩定，配合電商旺季加大產能',
  },
  {
    title: '建築材料行 — 安全網與保護膜',
    industry: '建築業',
    description: '提供建築工地用安全網及建材保護膜。安全網符合勞安規範，保護膜防刮防塵。',
    products: ['安全網', '保護膜', '大量供應'],
    result: '多個建案合作經驗，品質受肯定',
  },
  {
    title: '漁業公司 — 塑膠繩與漁網',
    industry: '漁業',
    description: '供應高強度PP塑膠繩及漁用網具材料。耐鹽水腐蝕，承重力強，適合海上作業。',
    products: ['PP塑膠繩', '漁用網材', '耐腐蝕'],
    result: '長期穩定供貨，品質可靠',
  },
];

export default function CasesPage() {
  return (
    <>
      <SchemaMarkup data={generateBreadcrumbSchema([
        { name: '首頁', url: '/' },
        { name: '案例展示', url: '/cases/' },
      ])} />

      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">案例展示</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            近50年來，慶宗塑膠服務過各行各業的客戶。以下是部分合作案例展示。
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbNav items={[{ label: '案例展示' }]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">{c.industry}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">{c.title}</h2>
                <p className="text-gray-600 mb-4">{c.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.products.map(p => (
                    <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{p}</span>
                  ))}
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                  <p className="text-sm text-green-700 font-medium">成果：{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="成為我們的下一個成功案例" subtitle="不論您的需求大小，我們都能為您提供專業的塑膠製品解決方案。" />
    </>
  );
}
