/**
 * Business Configuration for Divya Furniture World
 * Defines verified business services, locations, and features
 */

export const BUSINESS_CONFIG = {
  name: 'DIVYA FURNITURE WORLD',
  shortName: 'Divya Furniture',
  tagline: 'Experience Furniture That Fits Your Home, Your Style, Your Budget',
  primaryLocation: {
    city: 'Bhimavaram',
    state: 'Andhra Pradesh',
    country: 'India'
  },

  // Services offered
  services: {
    furniture_sale: true,
    furniture_rental: true, // Subject to product and location availability
    home_demo: true, // Free home demo service
    custom_designs: true, // Custom furniture design service
    fast_delivery: true, // Delivery with installation
    expert_consultation: true, // Free expert assistance
  },

  // Service regions - target service areas
  serviceRegions: [
    { state: 'Andhra Pradesh', priority: 'primary' },
    { state: 'Telangana', priority: 'primary' },
    { state: 'Karnataka', priority: 'secondary' },
    { state: 'Tamil Nadu', priority: 'secondary' },
  ],

  // Target cities (verified service availability required)
  targetCities: [
    // Andhra Pradesh
    { name: 'Bhimavaram', state: 'Andhra Pradesh', type: 'primary' },
    { name: 'Palakollu', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Narasapur', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Visakhapatnam', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Nellore', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Kurnool', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Guntur', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Vizianagaram', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Srikakulam', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Annavaram', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Duvvada', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Anantapur', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Chittoor', state: 'Andhra Pradesh', type: 'service' },
    { name: 'Kadapa', state: 'Andhra Pradesh', type: 'service' },

    // Telangana
    { name: 'Hyderabad', state: 'Telangana', type: 'major' },
    { name: 'Warangal', state: 'Telangana', type: 'service' },

    // Karnataka
    { name: 'Bengaluru', state: 'Karnataka', type: 'major' },

    // Tamil Nadu
    { name: 'Chennai', state: 'Tamil Nadu', type: 'major' },
  ],

  // Festival calendar for promotions
  festivals: [
    { id: 'diwali', name: 'Diwali', keywords: ['Diwali', 'Festival of Lights'] },
    { id: 'sankranti', name: 'Sankranti', keywords: ['Sankranti', 'Makar Sankranti'] },
    { id: 'ugadi', name: 'Ugadi', keywords: ['Ugadi', 'Gudi Padwa'] },
    { id: 'dussehra', name: 'Dussehra', keywords: ['Dussehra', 'Navratri'] },
    { id: 'christmas', name: 'Christmas', keywords: ['Christmas', 'Holiday Season'] },
    { id: 'newyear', name: 'New Year', keywords: ['New Year'] },
    { id: 'eid', name: 'Eid', keywords: ['Eid', 'Ramadan'] },
    { id: 'holi', name: 'Holi', keywords: ['Holi', 'Spring Festival'] },
  ],

  // Marketing messages aligned with real services
  marketingMessages: {
    home: {
      headline: 'Quality Furniture at Great Prices',
      subheadline: 'Explore furniture for every room, discover great deals, and find options to suit your home and budget.',
      buttons: [
        { text: 'Shop Furniture', action: 'shop', href: '/collection/sofas' },
        { text: 'Explore Rental Options', action: 'rent', href: '/rental' },
        { text: 'Find Nearby Hubs', action: 'locations', href: '/locations' },
        { text: 'Contact Our Experts', action: 'contact', href: '/enquiry' },
      ]
    },
    features: [
      { icon: 'fast-delivery', title: 'Fast Delivery', description: 'Quick turnaround with clean, hassle-free installation by trained technicians.' },
      { icon: 'home-demo', title: 'Free Home Demo', description: 'We bring samples, take measurements, and help you pick the right furniture.' },
      { icon: 'custom-designs', title: 'Custom Designs', description: 'Furniture tailored to your exact layout, finish preference, and storage needs.' },
      { icon: 'premium-quality', title: 'Premium Quality', description: 'Built with trusted brands like Century Ply, Greenlam & Hettich for long-lasting durability.' },
    ],
  },

  // SEO Keywords mapped to real services
  seoKeywords: {
    affordable_prices: [
      'Affordable furniture in Bhimavaram',
      'Furniture deals in Bhimavaram',
      'Wooden furniture at affordable prices',
      'Budget-friendly furniture',
      'Furniture offers near me',
    ],
    rental: [
      'Furniture on rent in Bhimavaram',
      'Furniture rental in Bhimavaram',
      'Beds on rent',
      'Sofa on rent',
      'Furniture rental near me',
      'Affordable furniture rental in Hyderabad',
      'Furniture rental in Andhra Pradesh',
      'Furniture rental in Telangana',
    ],
    location_delivery: [
      'Furniture shop near me',
      'Furniture delivery in Bhimavaram',
      'Furniture stores in Hyderabad',
      'Furniture store in Visakhapatnam',
    ],
  },

  // Populate only after confirming the payment gateway's supported methods.
  paymentMethods: [],

  paymentMessage: 'Pay using the payment methods supported at checkout. Contact our team if you need help with payment options.',

  // Delivery information
  delivery: {
    enabled: true,
    message: 'Convenient furniture delivery to supported locations. Check availability for your area and contact our team for delivery details.',
    terms: 'Delivery and installation included where available. Contact us for your location.',
  },

  // Enquiry form
  enquiry: {
    title: 'Need Help Choosing the Right Furniture?',
    description: 'Place your order or submit an enquiry, and our team will contact you to discuss your requirements.',
    fields: [
      'name',
      'phone',
      'email',
      'city',
      'product_interest',
      'buy_or_rent',
      'additional_notes'
    ]
  },

  // Rental terms - MUST be verified with actual business
  rental: {
    disclaimer: 'Furniture rental availability varies by product, location, and service area. Please contact us for rental details, pricing, and terms.',
    termsNotAvailable: 'Rental terms including prices, security deposits, minimum periods, and policies are not publicly available. Contact us for details.',
  }
};

export const CITIES_BY_STATE = {
  'Andhra Pradesh': [
    'Bhimavaram',
    'Palakollu',
    'Narasapur',
    'Visakhapatnam',
    'Nellore',
    'Kurnool',
    'Guntur',
    'Vizianagaram',
    'Srikakulam',
    'Annavaram',
    'Duvvada',
    'Anantapur',
    'Chittoor',
    'Kadapa'
  ],
  'Telangana': [
    'Hyderabad',
    'Warangal'
  ],
  'Karnataka': [
    'Bengaluru'
  ],
  'Tamil Nadu': [
    'Chennai'
  ]
};

export const STATES = Object.keys(CITIES_BY_STATE);

export default BUSINESS_CONFIG;
