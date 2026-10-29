import { SITE_URL } from './site-config';

export const BASE_URL = SITE_URL;

export function cleanUrl(value) {
  if (!value) return '';

  const parsed = new URL(value, SITE_URL);
  let pathname = parsed.pathname.toLowerCase();
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  return parsed.origin === SITE_URL ? pathname : `${parsed.origin}${pathname}`;
}

function getSlug(value) {
  return cleanUrl(value).split('/').filter(Boolean).pop() || '';
}

export function getProductCanonical(productSlug) {
  if (!productSlug) return `${SITE_URL}/`;
  const slug = getSlug(productSlug);
  return `${SITE_URL}/product/${slug}`;
}

export function getCollectionCanonical(collectionSlug) {
  if (!collectionSlug) return `${SITE_URL}/`;
  return `${SITE_URL}/collection/${getSlug(collectionSlug)}`;
}

export function getCategoryCanonical(categoryName) {
  if (!categoryName) return `${SITE_URL}/`;
  const slug = categoryName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return `${SITE_URL}/collection/${slug}`;
}

export function getSectionCanonical(section) {
  if (!section) return `${SITE_URL}/`;
  return `${SITE_URL}/sections/${getSlug(section)}`;
}

export function getPageCanonical(pagePath) {
  if (!pagePath) return `${SITE_URL}/`;
  const path = cleanUrl(pagePath);
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getCanonical(type, identifier) {
  switch (type) {
    case 'product':
      return getProductCanonical(identifier);
    case 'collection':
      return getCollectionCanonical(identifier);
    case 'category':
      return getCategoryCanonical(identifier);
    case 'section':
      return getSectionCanonical(identifier);
    case 'page':
      return getPageCanonical(identifier);
    default:
      return `${SITE_URL}/`;
  }
}

export function isCanonical(url) {
  return cleanUrl(url) === url;
}

export function normalizeUrl(url) {
  return cleanUrl(url || '/');
}

export default {
  getProductCanonical,
  getCollectionCanonical,
  getCategoryCanonical,
  getSectionCanonical,
  getPageCanonical,
  getCanonical,
  isCanonical,
  normalizeUrl,
  cleanUrl,
  BASE_URL,
};
