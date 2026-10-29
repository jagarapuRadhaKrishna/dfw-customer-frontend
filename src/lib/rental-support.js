/**
 * Rental Support Module
 * Manages product rental eligibility, availability by location, and rental enquiries
 * 
 * NOTE: Monthly prices, deposit amounts, minimum rental periods, and policies
 * are NOT defined here. They must be sourced from the actual business system.
 * This module only manages eligibility and enquiry routing.
 */

/**
 * Define which product categories support rentals
 * Update based on actual business offerings
 */
export const RENTAL_ELIGIBLE_CATEGORIES = [
  'sofas',
  'beds',
  'wardrobes',
  'dining-tables',
  'tv-units',
  'study-tables',
];

/**
 * Check if a product is eligible for rental based on category
 */
export function isProductEligibleForRental(product) {
  return product?.rentalAvailable === true;
}

/**
 * Rental availability by location
 * Update based on actual service capabilities in each location
 */
export const RENTAL_AVAILABILITY_BY_LOCATION = {
  'Bhimavaram': { available: true, verified: true },
  'Hyderabad': { available: true, verified: true },
  'Visakhapatnam': { available: false, verified: true }, // Example: not available yet
  'Bengaluru': { available: false, verified: false }, // Needs verification
  // Add other cities as needed
};

/**
 * Get rental availability for a specific city
 */
export function getRentalAvailability(city) {
  if (!city) return { available: false, verified: false };
  return RENTAL_AVAILABILITY_BY_LOCATION[city] || { available: false, verified: false };
}

/**
 * Rental enquiry template
 * Stores enquiry data for processing by business team
 */
export function createRentalEnquiry(data) {
  return {
    id: `rental-${Date.now()}`,
    type: 'rental',
    timestamp: new Date().toISOString(),
    customerName: data.name || '',
    customerPhone: data.phone || '',
    customerEmail: data.email || '',
    preferredCity: data.city || '',
    productInterest: data.product || '',
    rentalDuration: data.duration || 'not_specified', // e.g., '3_months', '6_months', 'flexible'
    additionalNotes: data.notes || '',
    status: 'new',
    // Rental-specific fields
    requiresDelivery: data.delivery !== false,
    preferredFinish: data.finish || '',
  };
}

/**
 * Rental SEO metadata builder
 */
export function generateRentalMetadata(category) {
  const rentalKeywords = {
    sofas: 'Sofa on rent',
    beds: 'Beds on rent',
    wardrobes: 'Wardrobe on rent',
    'dining-tables': 'Dining table on rent',
    'tv-units': 'TV unit on rent',
    general: 'Furniture rental',
  };

  return {
    title: `${rentalKeywords[category] || rentalKeywords.general} - DIVYA FURNITURE WORLD`,
    description: `Ask about ${category} furniture rental availability in Bhimavaram and Hyderabad. Product availability, pricing, and terms vary by location.`,
    keywords: [
      `${rentalKeywords[category] || rentalKeywords.general} in Bhimavaram`,
      `${rentalKeywords[category] || rentalKeywords.general} near me`,
      `Affordable ${category} rental`,
      `Furniture rental service`,
    ]
  };
}

/**
 * Rental inquiry schema for structured data
 */
export function generateRentalServiceSchema() {
  const serviceAreas = Object.entries(RENTAL_AVAILABILITY_BY_LOCATION)
    .filter(([, availability]) => availability.available && availability.verified)
    .map(([city]) => city);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Furniture Rental",
    "provider": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "description": "Contact Divya Furniture World to check rental availability, pricing, and terms for a product and location.",
    ...(serviceAreas.length ? { "areaServed": serviceAreas } : {})
  };
}

/**
 * Product rental status for display
 * Returns both buy and rent options if applicable
 */
export function getProductServiceOptions(product) {
  const isRentalEligible = isProductEligibleForRental(product);
  
  return {
    canBuy: true, // All products can be bought
    canRent: isRentalEligible,
    rentalEligibleCategory: isRentalEligible ? (product.category || product.subcategory) : null,
  };
}

export default {
  isProductEligibleForRental,
  getRentalAvailability,
  createRentalEnquiry,
  generateRentalMetadata,
  generateRentalServiceSchema,
  getProductServiceOptions,
  RENTAL_ELIGIBLE_CATEGORIES,
};
import { SITE_NAME, SITE_URL } from './site-config';
