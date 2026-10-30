import { BUSINESS_CONFIG } from './business-config';
import { getServiceAvailability } from './location-data';
import { SITE_NAME, SITE_URL } from './site-config';

const DEFAULT_IMAGE = '/images/logo.png';

function truncate(text, length = 160) {
  if (!text) return '';
  if (text.length <= length) return text;
  return `${text.substring(0, length).trim()}...`;
}

function absoluteUrl(path) {
  return new URL(path || DEFAULT_IMAGE, SITE_URL).toString();
}

function createSocialMetadata(title, description, canonical, image, type = 'website') {
  return {
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      images: [{ url: absoluteUrl(image), alt: title }],
      siteName: SITE_NAME,
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function generateProductMetadata(product, options = {}) {
  if (!product) return {};

  const title = `${product.title} | Furniture`;
  const description = truncate(
    product.description || `Explore ${product.title} from ${SITE_NAME}. Contact us to check product and delivery availability.`,
  );
  const canonical = absoluteUrl(product.href || `/product/${product.slug}`);
  const image = product.image || DEFAULT_IMAGE;

  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    alternates: { canonical },
    ...createSocialMetadata(title, description, canonical, image, 'website'),
  };
}

export function generateCollectionMetadata(collection) {
  if (!collection) return {};

  const name = collection.name || collection.title || 'Furniture';
  const title = `${name} Furniture`;
  const description = truncate(
    collection.description || `Explore ${name.toLowerCase()} at ${SITE_NAME}. View available designs, prices, and product details.`,
  );
  const canonical = absoluteUrl(`/collection/${collection.slug}`);
  const image = collection.image || DEFAULT_IMAGE;

  return {
    title,
    description,
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    alternates: { canonical },
    ...createSocialMetadata(title, description, canonical, image),
  };
}

export function generatePageMetadata(title, description, image, url, options = {}) {
  const finalTitle = title || SITE_NAME;
  const finalDescription = truncate(description || `Discover furniture at ${SITE_NAME}.`);
  const canonical = absoluteUrl(url || '/');
  const finalImage = image || DEFAULT_IMAGE;

  return {
    title: finalTitle,
    description: finalDescription,
    robots: {
      index: !options.noIndex,
      follow: !options.noFollow,
      'max-image-preview': 'large',
    },
    alternates: { canonical },
    ...createSocialMetadata(
      finalTitle,
      finalDescription,
      canonical,
      finalImage,
      options.type || 'website',
    ),
  };
}

export function generateCategoryMetadata(categoryName) {
  const slug = categoryName.toLowerCase().replace(/\s+/g, '-');
  return generatePageMetadata(
    `${categoryName} Furniture`,
    `Explore ${categoryName.toLowerCase()} at ${SITE_NAME}. View available designs and product details.`,
    DEFAULT_IMAGE,
    `/collection/${slug}`,
  );
}

export function generate404Metadata() {
  return generatePageMetadata(
    'Page Not Found',
    'The requested page could not be found. Explore the furniture collection or return to the homepage.',
    DEFAULT_IMAGE,
    '/404',
    { noIndex: true },
  );
}

export function createJsonLdScript(schema) {
  if (!schema) return null;
  return JSON.stringify(schema);
}

export function generateRentalMetadata() {
  return generatePageMetadata(
    'Furniture Rental',
    `Ask about furniture rental availability in Bhimavaram and Hyderabad. Product availability, pricing, and terms vary by location; contact ${SITE_NAME} for details.`,
    DEFAULT_IMAGE,
    '/rental',
  );
}

export function generateLocationPageMetadata(city, state) {
  const availability = getServiceAvailability(city);
  const services = [];
  if (availability.delivery) services.push('delivery');
  if (availability.rental) services.push('rental');
  if (availability.homeDemo) services.push('home demos');

  const serviceDescription = services.length
    ? ` Ask about ${services.join(', ')} in the area.`
    : ' Contact us to ask about current service availability.';
  const title = `Furniture Availability in ${city}`;
  const description = truncate(
    `Explore furniture options for ${city}, ${state}.${serviceDescription}`,
  );
  const slug = city.toLowerCase().replace(/\s+/g, '-');

  return generatePageMetadata(
    title,
    description,
    DEFAULT_IMAGE,
    `/location/${slug}`,
    { noIndex: !availability.verified },
  );
}

export function generateLocationsHubMetadata() {
  return generatePageMetadata(
    'Check Furniture Service Availability',
    'Choose a city to enquire about furniture delivery, rental, and consultation availability. Service coverage varies by location.',
    DEFAULT_IMAGE,
    '/locations',
  );
}

export function generateEnquiryMetadata() {
  return generatePageMetadata(
    'Furniture Enquiry',
    'Contact Divya Furniture World about furniture, rentals, delivery availability, and product options.',
    DEFAULT_IMAGE,
    '/enquiry',
    { noIndex: true },
  );
}

export function generateCampaignMetadata(campaignName, campaignDescription) {
  const title = `${campaignName} Furniture Offers`;
  return generatePageMetadata(
    title,
    truncate(campaignDescription),
    DEFAULT_IMAGE,
    '/offers',
  );
}

export function generateHomeMetadata() {
  return generatePageMetadata(
    'Furniture for Every Room',
    'Explore furniture for every room, discover great deals, and find options to suit your home and budget.',
    DEFAULT_IMAGE,
    '/',
  );
}

export default {
  generateProductMetadata,
  generateCollectionMetadata,
  generatePageMetadata,
  generateHomeMetadata,
  generateRentalMetadata,
  generateLocationPageMetadata,
  generateLocationsHubMetadata,
  generateEnquiryMetadata,
  generateCampaignMetadata,
  generateCategoryMetadata,
  generate404Metadata,
  createJsonLdScript,
  BASE_URL: SITE_URL,
  BRAND_NAME: SITE_NAME,
  BUSINESS_CONFIG,
};
