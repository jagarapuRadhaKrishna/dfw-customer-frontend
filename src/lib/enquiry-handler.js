/**
 * Customer Enquiry Handler
 * Manages product enquiries, rental enquiries, location enquiries, and expert consultations
 */

/**
 * Enquiry types
 */
export const ENQUIRY_TYPES = {
  PRODUCT_ENQUIRY: 'product',
  RENTAL_ENQUIRY: 'rental',
  LOCATION_ENQUIRY: 'location',
  EXPERT_CONSULTATION: 'consultation',
  DELIVERY_ENQUIRY: 'delivery',
  CUSTOM_DESIGN: 'custom_design',
};

/**
 * Validate enquiry data
 */
export function validateEnquiry(data) {
  const errors = [];

  // Required fields
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!data.phone || data.phone.trim().length === 0) {
    errors.push('Phone number is required');
  } else if (!/^[0-9\+\-\s]{7,}$/.test(data.phone)) {
    errors.push('Please enter a valid phone number');
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!data.city || data.city.trim().length === 0) {
    errors.push('City is required');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Create enquiry object
 */
export function createEnquiry(data, type = ENQUIRY_TYPES.PRODUCT_ENQUIRY) {
  const validation = validateEnquiry(data);
  if (!validation.valid) {
    throw new Error(`Invalid enquiry: ${validation.errors.join(', ')}`);
  }

  return {
    id: `enquiry-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    type,
    timestamp: new Date().toISOString(),
    status: 'new',
    source: data.source || 'website',

    // Customer information
    customerName: data.name.trim(),
    customerPhone: data.phone.trim(),
    customerEmail: data.email ? data.email.trim() : null,
    customerCity: data.city.trim(),
    customerState: data.state || null,

    // Enquiry details
    productInterest: data.product || null,
    categoryInterest: data.category || null,
    additionalNotes: data.notes || null,

    // Service preferences
    serviceType: data.serviceType || 'buy', // buy, rent, both
    preferredContactMethod: data.contactMethod || 'phone', // phone, email, both

    // Consent
    agreeToContact: data.agreeToContact !== false,
    consentToMarketing: data.consentToMarketing === true,

    // Metadata
    formPage: data.formPage || '/',
    referrer: data.referrer || null,
  };
}

/**
 * Format enquiry for email notification
 */
export function formatEnquiryForEmail(enquiry) {
  const typeLabel = {
    [ENQUIRY_TYPES.PRODUCT_ENQUIRY]: 'Product Enquiry',
    [ENQUIRY_TYPES.RENTAL_ENQUIRY]: 'Rental Enquiry',
    [ENQUIRY_TYPES.LOCATION_ENQUIRY]: 'Location Enquiry',
    [ENQUIRY_TYPES.EXPERT_CONSULTATION]: 'Expert Consultation',
    [ENQUIRY_TYPES.DELIVERY_ENQUIRY]: 'Delivery Enquiry',
    [ENQUIRY_TYPES.CUSTOM_DESIGN]: 'Custom Design',
  };

  return `
Enquiry Type: ${typeLabel[enquiry.type]}
Date: ${new Date(enquiry.timestamp).toLocaleString()}

CUSTOMER INFORMATION
Name: ${enquiry.customerName}
Phone: ${enquiry.customerPhone}
Email: ${enquiry.customerEmail || 'Not provided'}
City: ${enquiry.customerCity}
State: ${enquiry.customerState || 'Not specified'}

ENQUIRY DETAILS
Product/Service Interest: ${enquiry.productInterest || enquiry.categoryInterest || 'Not specified'}
Service Type: ${enquiry.serviceType}
Preferred Contact: ${enquiry.preferredContactMethod}

NOTES
${enquiry.additionalNotes || 'No additional notes'}

CONSENT
Contact Permission: ${enquiry.agreeToContact ? 'Yes' : 'No'}
Marketing Consent: ${enquiry.consentToMarketing ? 'Yes' : 'No'}
  `.trim();
}

/**
 * Get enquiry summary for CRM
 */
export function getEnquirySummary(enquiry) {
  return {
    id: enquiry.id,
    date: new Date(enquiry.timestamp).toLocaleDateString('en-IN'),
    customer: enquiry.customerName,
    phone: enquiry.customerPhone,
    city: enquiry.customerCity,
    type: enquiry.type,
    status: enquiry.status,
    product: enquiry.productInterest,
  };
}

/**
 * Generate enquiry confirmation message
 */
export function generateConfirmationMessage(enquiry) {
  return {
    title: 'Enquiry Received',
    message: `Thank you ${enquiry.customerName}! We have received your enquiry. Our team will contact you at ${enquiry.customerPhone} within 24 hours to discuss your requirements.`,
    referenceId: enquiry.id,
    nextSteps: [
      'Check your phone for a call from our team',
      'Have your furniture preferences ready for discussion',
      'Ask about delivery, rental, or custom design options available in your area'
    ]
  };
}

/**
 * Enquiry template for product pages
 */
export function getProductEnquiryTemplate(product) {
  return {
    type: ENQUIRY_TYPES.PRODUCT_ENQUIRY,
    title: 'Interested in this product?',
    description: `Get expert advice on ${product.title} or place an order. Share your requirements and we'll be in touch.`,
    fields: ['name', 'phone', 'email', 'city', 'notes'],
    prefilledData: {
      product: product.title,
      productId: product.id,
      category: product.category,
    }
  };
}

/**
 * Enquiry template for rental pages
 */
export function getRentalEnquiryTemplate() {
  return {
    type: ENQUIRY_TYPES.RENTAL_ENQUIRY,
    title: 'Interested in renting?',
    description: 'Tell us about your furniture rental needs. Our team will provide details on availability, pricing, and terms in your area.',
    fields: ['name', 'phone', 'email', 'city', 'product', 'duration', 'notes'],
  };
}

/**
 * Enquiry template for location pages
 */
export function getLocationEnquiryTemplate(city) {
  return {
    type: ENQUIRY_TYPES.LOCATION_ENQUIRY,
    title: `Furniture in ${city}`,
    description: `Check furniture availability, delivery options, and rental services in ${city}. Submit your enquiry and our team will help.`,
    fields: ['name', 'phone', 'email', 'service', 'notes'],
    prefilledData: {
      city,
    }
  };
}

/**
 * Enquiry template for expert consultation
 */
export function getExpertConsultationTemplate() {
  return {
    type: ENQUIRY_TYPES.EXPERT_CONSULTATION,
    title: 'Book Expert Consultation',
    description: 'Need help choosing the right furniture? Book a free consultation with our experts. We bring samples and help you choose the perfect fit.',
    fields: ['name', 'phone', 'email', 'city', 'serviceType', 'notes'],
  };
}

/**
 * Send enquiry to backend/CRM
 * This is a placeholder - replace with actual API endpoint
 */
export async function submitEnquiry(enquiry) {
  try {
    // Replace with actual API endpoint
    const response = await fetch('/api/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiry),
    });

    if (!response.ok) {
      const error = new Error(`API error: ${response.statusText}`);
      error.status = response.status;
      error.response = response;
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    throw error;
  }
}

export default {
  createEnquiry,
  validateEnquiry,
  formatEnquiryForEmail,
  getEnquirySummary,
  generateConfirmationMessage,
  getProductEnquiryTemplate,
  getRentalEnquiryTemplate,
  getLocationEnquiryTemplate,
  getExpertConsultationTemplate,
  submitEnquiry,
  ENQUIRY_TYPES,
};
