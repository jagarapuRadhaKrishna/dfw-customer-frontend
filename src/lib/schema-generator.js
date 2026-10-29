import { SERVICE_AVAILABILITY } from './location-data';
import { SITE_NAME, SITE_URL } from './site-config';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

function absoluteUrl(path) {
  if (!path) return undefined;
  return new URL(path, SITE_URL).toString();
}

function parsePrice(value) {
  if (typeof value !== 'string' && typeof value !== 'number') return null;
  const parsed = Number(String(value).replace(/[^\d.]/g, ''));
  return Number.isFinite(parsed) && parsed > 0 ? parsed.toString() : null;
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl('/images/logo.png'),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function generateProductSchema(product) {
  if (!product) return null;

  const price = parsePrice(product.salePrice) || parsePrice(product.mrp);
  const image = product.image ? absoluteUrl(product.image) : undefined;
  const productUrl = absoluteUrl(product.href || `/product/${product.slug}`);
  const offer = price
    ? {
        '@type': 'Offer',
        url: productUrl,
        priceCurrency: 'INR',
        price,
        seller: { '@id': ORGANIZATION_ID },
        ...(typeof product.inStock === 'boolean'
          ? {
              availability: product.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            }
          : {}),
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    ...(product.description ? { description: product.description } : {}),
    ...(image ? { image: [image] } : {}),
    ...(product.id ? { sku: String(product.id) } : {}),
    ...(offer ? { offers: offer } : {}),
  };
}

export function generateBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}

export function generateLocalBusinessSchema(store) {
  if (!store?.name || !store?.address || !store?.city || !store?.state) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: store.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: store.address,
      addressLocality: store.city,
      addressRegion: store.state,
      ...(store.postalCode ? { postalCode: store.postalCode } : {}),
      addressCountry: 'IN',
    },
    ...(store.phone ? { telephone: store.phone } : {}),
    ...(store.id ? { url: absoluteUrl(`/stores/${store.id}`) } : {}),
  };
}

export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateRentalServiceSchema() {
  const areaServed = Object.entries(SERVICE_AVAILABILITY)
    .filter(([, availability]) => availability.rental && availability.verified)
    .map(([city, availability]) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: availability.state,
      },
    }));

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Furniture rental enquiry',
    provider: { '@id': ORGANIZATION_ID },
    url: absoluteUrl('/rental'),
    description:
      'Contact Divya Furniture World to check furniture rental availability, pricing, and terms for your product and location.',
    ...(areaServed.length ? { areaServed } : {}),
  };
}

export function generateLocationSchema(city, state, services = {}) {
  const availableServices = [
    services.delivery && 'Furniture delivery',
    services.rental && 'Furniture rental',
    services.homeDemo && 'Home demonstrations',
    services.expertConsultation && 'Furniture consultation',
  ].filter(Boolean);

  if (!availableServices.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Furniture services in ${city}`,
    serviceType: availableServices,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: state },
    },
    url: absoluteUrl(`/location/${city.toLowerCase().replace(/\s+/g, '-')}`),
  };
}

export function generatePromotionSchema(campaign) {
  if (
    !campaign?.name ||
    !campaign?.description ||
    !campaign?.discountValue ||
    !campaign?.startDate ||
    !campaign?.endDate
  ) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: campaign.name,
    description: campaign.description,
    url: absoluteUrl(campaign.landingPage || '/'),
    priceCurrency: 'INR',
    validFrom: campaign.startDate,
    validThrough: campaign.endDate,
  };
}

export function generateAggregateOfferSchema(products, title = 'Furniture Collection') {
  if (!products || products.length === 0) return null;

  const prices = products
    .map((product) => parsePrice(product.salePrice) || parsePrice(product.mrp))
    .filter(Boolean)
    .map(Number);

  if (prices.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    name: title,
    priceCurrency: 'INR',
    lowPrice: Math.min(...prices).toString(),
    highPrice: Math.max(...prices).toString(),
    offerCount: prices.length.toString(),
  };
}

export function generateCollectionSchema(collection) {
  if (!collection) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name || collection.title,
    description: collection.description || `Browse ${collection.name || collection.title}.`,
    url: absoluteUrl(`/collection/${collection.slug}`),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: collection.name || collection.title,
          item: absoluteUrl(`/collection/${collection.slug}`),
        },
      ],
    },
  };
}

export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${SITE_NAME}`,
    url: absoluteUrl('/enquiry'),
    mainEntity: { '@id': ORGANIZATION_ID },
  };
}

export default {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateProductSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateRentalServiceSchema,
  generateLocationSchema,
  generatePromotionSchema,
  generateAggregateOfferSchema,
  generateCollectionSchema,
  generateContactPageSchema,
  SITE_CONFIG: { name: SITE_NAME, url: SITE_URL, logo: absoluteUrl('/images/logo.png') },
};
