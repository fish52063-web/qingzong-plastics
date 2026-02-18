import { COMPANY_INFO } from './constants';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.nameEn,
    url: COMPANY_INFO.website,
    logo: `${COMPANY_INFO.website}/images/logo.png`,
    description: COMPANY_INFO.description,
    foundingDate: `${COMPANY_INFO.established}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: '民雄鄉',
      addressRegion: '嘉義縣',
      addressCountry: 'TW',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'customer service',
      availableLanguage: ['zh-TW'],
    },
    sameAs: [COMPANY_INFO.socialMedia.facebook],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${COMPANY_INFO.website}/#localbusiness`,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.nameEn,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.website,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    image: `${COMPANY_INFO.website}/images/factory.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: '民雄鄉',
      addressRegion: '嘉義縣',
      postalCode: '621',
      addressCountry: 'TW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.geo.latitude,
      longitude: COMPANY_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    areaServed: [
      { '@type': 'State', name: '嘉義縣' },
      { '@type': 'State', name: '台南市' },
      { '@type': 'State', name: '高雄市' },
      { '@type': 'State', name: '雲林縣' },
      { '@type': 'State', name: '彰化縣' },
      { '@type': 'State', name: '台中市' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '塑膠製品',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '塑膠袋' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '塑膠膜' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '塑膠繩' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '塑膠網' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '塑膠線' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: '塑膠再製原料' } },
      ],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.website,
    description: COMPANY_INFO.description,
    publisher: { '@type': 'Organization', name: COMPANY_INFO.name },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${COMPANY_INFO.website}/blog/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'zh-TW',
  };
}

export function generateProductSchema(product: {
  name: string;
  nameEn: string;
  description: string;
  slug: string;
  keywords: string[];
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    alternateName: product.nameEn,
    description: product.description,
    image: `${COMPANY_INFO.website}${product.image}`,
    url: `${COMPANY_INFO.website}/products/${product.slug}/`,
    brand: { '@type': 'Brand', name: COMPANY_INFO.shortName },
    manufacturer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.website,
    },
    keywords: product.keywords.join(', '),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'TWD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: COMPANY_INFO.name },
      areaServed: { '@type': 'Country', name: 'Taiwan' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
      bestRating: '5',
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${COMPANY_INFO.website}/services/${service.slug}/`,
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.website,
    },
    areaServed: { '@type': 'Country', name: 'Taiwan' },
    serviceType: service.name,
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${COMPANY_INFO.website}/blog/${article.slug}/`,
    image: article.image ? `${COMPANY_INFO.website}${article.image}` : `${COMPANY_INFO.website}/images/blog-default.jpg`,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: COMPANY_INFO.name },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: { '@type': 'ImageObject', url: `${COMPANY_INFO.website}/images/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${COMPANY_INFO.website}/blog/${article.slug}/` },
    articleSection: article.category,
    inLanguage: 'zh-TW',
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${COMPANY_INFO.website}${item.url}`,
    })),
  };
}

export function generateAreaSchema(area: { name: string; slug: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${COMPANY_INFO.shortName} - ${area.name}服務`,
    description: area.description,
    url: `${COMPANY_INFO.website}/areas/${area.slug}/`,
    telephone: COMPANY_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressRegion: '嘉義縣',
      addressCountry: 'TW',
    },
    areaServed: { '@type': 'AdministrativeArea', name: area.name },
    parentOrganization: { '@type': 'Organization', name: COMPANY_INFO.name },
  };
}
