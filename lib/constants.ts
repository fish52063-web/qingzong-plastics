export const COMPANY_INFO = {
  name: '慶宗塑膠有限公司',
  nameEn: 'CHIN TZON Plastics Co., Ltd.',
  shortName: '慶宗塑膠',
  description: '慶宗塑膠有限公司成立於1977年，近50年專業塑膠袋製造經驗。專營背心袋、洞口袋、平口袋，提供客製化印刷、批發代工服務。最低150公斤起訂，15-20天交貨。',
  phone: '05-2211717',
  phoneDisplay: '05-221-1717',
  phoneHref: 'tel:+88652211717',
  address: '嘉義縣民雄鄉大崎村內埔仔7之1號',
  addressEn: 'No. 7-1, Neipuzi, Dacun Village, Minxiong Township, Chiayi County, Taiwan',
  representative: '陳素貞',
  established: 1977,
  capital: 'NT$1,610,000',
  registrationNo: '99655111',
  trademark: '慶宗及圖 CHIN TZON',
  trademarkNo: '00234983',
  trademarkYear: 1984,
  website: 'https://qingzong-plastics.vercel.app',
  email: 'info@chintzon.com.tw',
  line: '', // LINE ID 待填入
  lineUrl: '', // LINE 連結待填入
  mapUrl: 'https://maps.google.com/?q=嘉義縣民雄鄉大崎村內埔仔7之1號',
  geo: {
    latitude: 23.5539,
    longitude: 120.4285,
  },
  businessHours: {
    weekday: '08:00 - 17:30',
    saturday: '08:00 - 12:00',
    sunday: '休息',
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/慶宗塑膠',
  },
  moq: '150公斤起',
  deliveryTime: '15-20天',
  printColors: '1-3色 / 單色雙面印刷',
};

export const PRODUCTS = [
  {
    id: 'plastic-bags',
    name: '塑膠袋',
    nameEn: 'Plastic Bags',
    slug: 'plastic-bags',
    description: '各式PE/HDPE塑膠袋，專營背心袋、洞口袋、平口袋，適用超市、市場、餐飲、零售等各行業。工廠直營批發，150公斤起訂。',
    shortDesc: '背心袋・洞口袋・平口袋',
    icon: '🛍️',
    keywords: ['塑膠袋', '背心袋', '洞口袋', '平口袋', 'PE袋', 'HDPE袋', '塑膠袋批發', '塑膠袋工廠'],
    priceRange: '依規格報價',
    image: '/images/plastic-bags.jpg',
  },
  {
    id: 'custom-products',
    name: '客製化印刷',
    nameEn: 'Custom Printed Bags',
    slug: 'custom-products',
    description: '依客戶需求客製化生產塑膠袋，提供1-3色或單色雙面印刷，可印製LOGO、品牌名稱。最低150公斤起訂，15-20天交貨。',
    shortDesc: '1-3色印刷・單色雙面・LOGO訂製',
    icon: '🖨️',
    keywords: ['客製化塑膠袋', '塑膠袋印刷', '背心袋印刷', '塑膠袋LOGO', '客製印刷袋'],
    priceRange: '依需求報價',
    image: '/images/custom-products.jpg',
  },
];

export const SERVICES = [
  {
    id: 'manufacturing',
    name: '塑膠袋製造',
    slug: 'manufacturing',
    description: '擁有完整生產線，從原料調配、吹膜、製袋到成品包裝，一條龍生產背心袋、洞口袋、平口袋。',
    keywords: ['塑膠袋製造', '背心袋製造', '洞口袋工廠', '平口袋工廠'],
  },
  {
    id: 'oem',
    name: 'OEM代工服務',
    slug: 'oem-service',
    description: '接受品牌代工、大量訂單生產，嚴格品管確保品質一致。最低150公斤起訂。',
    keywords: ['塑膠袋代工', 'OEM代工', '背心袋代工', '塑膠袋OEM'],
  },
  {
    id: 'custom-printing',
    name: '客製化印刷',
    slug: 'custom-printing',
    description: '提供1-3色或單色雙面印刷服務，可印製LOGO、品牌名稱、產品資訊。',
    keywords: ['塑膠袋印刷', '客製化印刷', 'LOGO印刷', '背心袋印刷'],
  },
  {
    id: 'wholesale',
    name: '批發供應',
    slug: 'wholesale',
    description: '長期穩定供貨，量大優惠，服務全台各地經銷商及企業客戶。',
    keywords: ['塑膠袋批發', '背心袋批發', '洞口袋批發', '平口袋批發'],
  },
];

export const AREAS = [
  { id: 'chiayi', name: '嘉義縣市', slug: 'chiayi', description: '嘉義在地工廠，最快速的交貨與服務。' },
  { id: 'tainan', name: '台南市', slug: 'tainan', description: '服務台南地區，專人配送到府。' },
  { id: 'kaohsiung', name: '高雄市', slug: 'kaohsiung', description: '南部重要市場，穩定供貨。' },
  { id: 'pingtung', name: '屏東縣', slug: 'pingtung', description: '服務屏東農業及工業客戶。' },
  { id: 'yunlin', name: '雲林縣', slug: 'yunlin', description: '鄰近嘉義，快速供貨。' },
  { id: 'changhua', name: '彰化縣', slug: 'changhua', description: '中部地區重要客戶群。' },
  { id: 'taichung', name: '台中市', slug: 'taichung', description: '中部都會區，大量工業需求。' },
  { id: 'nantou', name: '南投縣', slug: 'nantou', description: '農業包裝需求，專業服務。' },
  { id: 'central-south', name: '中南部地區', slug: 'central-south', description: '全台中南部配送，物流完善。' },
  { id: 'nationwide', name: '全台服務', slug: 'nationwide', description: '大量訂單可配送全台，歡迎洽詢。' },
];

export const BLOG_CATEGORIES = [
  { id: 'plastic-knowledge', name: '塑膠袋知識', slug: 'plastic-knowledge', description: '塑膠袋材質、特性、應用知識' },
  { id: 'packaging-guide', name: '包裝指南', slug: 'packaging-guide', description: '包裝方案、材料選擇指南' },
  { id: 'industry-news', name: '產業動態', slug: 'industry-news', description: '塑膠袋產業趨勢與新聞' },
  { id: 'eco-friendly', name: '環保永續', slug: 'eco-friendly', description: '環保塑膠袋、循環經濟' },
  { id: 'product-application', name: '產品應用', slug: 'product-application', description: '各行業塑膠袋應用案例' },
  { id: 'food-packaging', name: '食品包裝', slug: 'food-packaging', description: '食品級塑膠袋、包裝法規' },
  { id: 'agriculture', name: '農業應用', slug: 'agriculture', description: '農業用塑膠袋' },
  { id: 'industrial', name: '工業應用', slug: 'industrial', description: '工業包裝袋、物流包材' },
  { id: 'custom-printing', name: '客製印刷', slug: 'custom-printing', description: '印刷技術、設計建議' },
  { id: 'company-news', name: '公司動態', slug: 'company-news', description: '慶宗塑膠最新消息' },
];

export const NAV_ITEMS = [
  { label: '首頁', href: '/' },
  { label: '關於我們', href: '/about/' },
  {
    label: '產品中心',
    href: '/products/',
    children: PRODUCTS.map(p => ({ label: p.name, href: `/products/${p.slug}/` })),
  },
  {
    label: '服務項目',
    href: '/services/',
    children: SERVICES.map(s => ({ label: s.name, href: `/services/${s.slug}/` })),
  },
  { label: '案例展示', href: '/cases/' },
  { label: '知識專欄', href: '/blog/' },
  { label: '服務區域', href: '/areas/' },
  { label: '常見問答', href: '/faq/' },
  { label: '聯繫我們', href: '/contact/' },
];

export const SEO_KEYWORDS = {
  tier1: [
    '背心袋', '洞口袋', '平口袋', '背心袋工廠', '洞口袋工廠', '平口袋工廠',
    '背心袋批發', '洞口袋批發', '平口袋批發', '塑膠袋工廠',
  ],
  tier2: [
    '塑膠袋批發', '客製化塑膠袋', '塑膠袋代工', '塑膠袋印刷', 'PE袋工廠',
    'HDPE背心袋', '背心袋印刷', '洞口袋印刷', '平口袋印刷', '市場背心袋',
    '超市塑膠袋', '餐飲塑膠袋', '背心袋製造', '洞口袋製造', '平口袋製造',
  ],
  tier3: [
    '嘉義塑膠袋工廠', '台南背心袋批發', '高雄塑膠袋批發', '南部塑膠袋代工',
    '背心袋價格', '洞口袋價格', '平口袋價格', '塑膠袋最低訂購量',
    '背心袋規格', '洞口袋規格', '平口袋規格', '塑膠袋廠商推薦',
    '背心袋尺寸', '洞口袋尺寸', '平口袋尺寸',
  ],
  tier4: [
    '背心袋推薦', '洞口袋推薦', '平口袋推薦', '塑膠袋', '包裝袋',
    '購物袋', '提袋', '市場袋', '塑膠袋工廠直銷', '台灣塑膠袋製造商',
  ],
};
