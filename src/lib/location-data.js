import { SITE_URL } from './site-config';

/**
 * Location Data and Hub Management
 * Manages verified service locations and nearby hub discovery
 * 
 * NOTE: Do not create fake addresses, phone numbers, or branch details.
 * Only add locations that are verified by the business.
 */

/**
 * Verified service hubs and branches
 * Update only with confirmed business locations
 */
export const VERIFIED_HUBS = {
  // Primary hub - confirmed
  'bhimavaram': {
    id: 'hub-bhimavaram',
    name: 'Bhimavaram Hub',
    city: 'Bhimavaram',
    state: 'Andhra Pradesh',
    country: 'India',
    type: 'primary',
    services: ['buy', 'rent', 'demo', 'consultation'],
    verified: true,
    // Address, phone, and hours should be fetched from actual business data
    // Do not invent details
  },
};

/**
 * Service availability by city
 * Indicates where delivery, rental, and other services are available
 * Update based on verified business capability
 */
export const SERVICE_AVAILABILITY = {
  'Bhimavaram': {
    state: 'Andhra Pradesh',
    delivery: true,
    rental: true,
    homeDemo: true,
    expertConsultation: true,
    verified: true,
  },
  'Palakollu': {
    state: 'Andhra Pradesh',
    delivery: true,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: true,
  },
  'Narasapur': {
    state: 'Andhra Pradesh',
    delivery: true,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: true,
  },
  'Hyderabad': {
    state: 'Telangana',
    delivery: true,
    rental: true,
    homeDemo: true,
    expertConsultation: true,
    verified: true,
  },
  'Warangal': {
    state: 'Telangana',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false, // Needs verification
  },
  'Visakhapatnam': {
    state: 'Andhra Pradesh',
    delivery: true,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: true,
  },
  'Bengaluru': {
    state: 'Karnataka',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false, // Needs verification
  },
  'Chennai': {
    state: 'Tamil Nadu',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false, // Needs verification
  },
  'Nellore': {
    state: 'Andhra Pradesh',
    delivery: true,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: true,
  },
  'Kurnool': {
    state: 'Andhra Pradesh',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false,
  },
  'Guntur': {
    state: 'Andhra Pradesh',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false,
  },
  'Vizianagaram': {
    state: 'Andhra Pradesh',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false,
  },
  'Srikakulam': {
    state: 'Andhra Pradesh',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false,
  },
  'Anantapur': {
    state: 'Andhra Pradesh',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false,
  },
  'Chittoor': {
    state: 'Andhra Pradesh',
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false,
  },
};

/**
 * Get service availability for a specific city
 */
export function getServiceAvailability(city) {
  return SERVICE_AVAILABILITY[city] || {
    delivery: false,
    rental: false,
    homeDemo: false,
    expertConsultation: true,
    verified: false,
  };
}

/**
 * Find other confirmed service hubs in the same state.
 */
export function getNearbyLocations(city, maxResults = 5) {
  const cityData = SERVICE_AVAILABILITY[city];
  if (!cityData) return [];

  const nearbyInState = Object.values(VERIFIED_HUBS)
    .filter((hub) => hub.state === cityData.state && hub.city !== city)
    .slice(0, maxResults);

  return nearbyInState;
}

/**
 * Get all available service cities
 */
export function getAllServiceCities() {
  return Object.keys(SERVICE_AVAILABILITY).sort();
}

/**
 * Get cities by state
 */
export function getCitiesByState(state) {
  return Object.entries(SERVICE_AVAILABILITY)
    .filter(([_, data]) => data.state === state)
    .map(([city, _]) => city)
    .sort();
}

/**
 * Get all service states
 */
export function getAllServiceStates() {
  const states = new Set(
    Object.values(SERVICE_AVAILABILITY).map(data => data.state)
  );
  return Array.from(states).sort();
}

/**
 * Location SEO metadata
 */
export function generateLocationMetadata(city) {
  const availability = getServiceAvailability(city);
  const state = availability.state;

  return {
    title: `Furniture Service Availability in ${city} | DIVYA FURNITURE WORLD`,
    description: `Explore furniture options in ${city}${state ? `, ${state}` : ''}. Contact us to confirm delivery, rental, and consultation availability.`,
    keywords: [
      `Furniture in ${city}`,
      `Furniture shop in ${city}`,
      `Buy furniture in ${city}`,
      availability.rental ? `Rent furniture in ${city}` : null,
      availability.delivery ? `Furniture delivery in ${city}` : null,
      `Furniture store in ${state}`,
    ].filter(Boolean),
  };
}

/**
 * Location inquiry model
 */
export function createLocationEnquiry(data) {
  return {
    id: `location-${Date.now()}`,
    type: 'location_inquiry',
    timestamp: new Date().toISOString(),
    customerName: data.name || '',
    customerPhone: data.phone || '',
    customerEmail: data.email || '',
    enquiredCity: data.city || '',
    enquiredState: data.state || '',
    serviceInterest: data.service || 'general', // buy, rent, demo, consultation
    additionalNotes: data.notes || '',
    status: 'new',
  };
}

/**
 * Local business schema for location pages
 */
export function generateLocationSchema(city) {
  const hub = VERIFIED_HUBS[city.toLowerCase()];
  if (!hub?.address || !hub?.phone || !hub?.postalCode) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: hub.name,
    url: `${SITE_URL}/location/${city.toLowerCase().replace(/\s+/g, '-')}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hub.address,
      addressLocality: hub.city,
      addressRegion: hub.state,
      postalCode: hub.postalCode,
      addressCountry: 'IN',
    },
    telephone: hub.phone,
  };
}

export default {
  getServiceAvailability,
  getNearbyLocations,
  getAllServiceCities,
  getCitiesByState,
  getAllServiceStates,
  generateLocationMetadata,
  createLocationEnquiry,
  generateLocationSchema,
  SERVICE_AVAILABILITY,
  VERIFIED_HUBS,
};
