/**
 * Festival and Promotional Management
 * Manages seasonal campaigns, festival offers, and promotional content
 * 
 * NOTE: Do not invent discount percentages, coupon codes, or offer dates.
 * All promotions must be based on actual business campaigns.
 */

/**
 * Active festival campaigns
 * Update based on actual running campaigns
 * Include: title, start date, end date, discount (if applicable), eligible products
 */
export const ACTIVE_CAMPAIGNS = [
  // Template for adding campaigns:
  // {
  //   id: 'diwali-2024',
  //   festivalId: 'diwali',
  //   name: 'Diwali Offers',
  //   title: 'Celebrate Diwali with Great Furniture Deals',
  //   description: 'Discover festive offers on selected furniture.',
  //   startDate: '2024-10-01',
  //   endDate: '2024-11-15',
  //   status: 'active', // active, upcoming, expired, archived
  //   discountType: 'flat', // flat, percentage, coupon, special
  //   discountValue: null, // Do not invent - leave null if not sourced from actual system
  //   eligibleCategories: ['sofas', 'beds', 'wardrobes'],
  //   bannerImage: '/images/banners/diwali-2024.jpg',
  //   landingPage: '/offers/diwali-2024',
  //   cta: 'Shop Diwali Offers',
  //   keywords: ['Diwali furniture deals', 'Festival offers'],
  // }
];

/**
 * Festival calendar for the year
 * Use these for creating marketing content and SEO opportunities
 */
export const FESTIVAL_CALENDAR = [
  {
    id: 'newyear',
    name: 'New Year',
    months: ['January'],
    message: 'Start the year fresh with new furniture'
  },
  {
    id: 'holi',
    name: 'Holi',
    months: ['February', 'March'],
    message: 'Celebrate the Festival of Colors with vibrant furniture choices'
  },
  {
    id: 'ugadi',
    name: 'Ugadi',
    months: ['March', 'April'],
    message: 'Welcome the new year with fresh furniture designs'
  },
  {
    id: 'eid',
    name: 'Eid',
    months: ['April'],
    message: 'Celebrate with comfortable, stylish furniture'
  },
  {
    id: 'dussehra',
    name: 'Dussehra',
    months: ['September', 'October'],
    message: 'Mark the victory of good over evil with beautiful home setups'
  },
  {
    id: 'diwali',
    name: 'Diwali',
    months: ['October', 'November'],
    message: 'Brighten your home with festive furniture offers'
  },
  {
    id: 'christmas',
    name: 'Christmas',
    months: ['November', 'December'],
    message: 'Create the perfect festive home setup'
  },
];

/**
 * Get active campaigns
 */
export function getActiveCampaigns() {
  const now = new Date();
  return ACTIVE_CAMPAIGNS.filter(campaign => {
    const start = new Date(campaign.startDate);
    const end = new Date(campaign.endDate);
    return now >= start && now <= end && campaign.status === 'active';
  });
}

/**
 * Get upcoming campaigns
 */
export function getUpcomingCampaigns() {
  const now = new Date();
  return ACTIVE_CAMPAIGNS.filter(campaign => {
    const start = new Date(campaign.startDate);
    return now < start && campaign.status === 'upcoming';
  });
}

/**
 * Get campaign by ID
 */
export function getCampaignById(campaignId) {
  return ACTIVE_CAMPAIGNS.find(c => c.id === campaignId);
}

/**
 * Get campaigns by festival ID
 */
export function getCampaignsByFestival(festivalId) {
  return ACTIVE_CAMPAIGNS.filter(c => c.festivalId === festivalId);
}

/**
 * Check if product is eligible for campaign discount
 */
export function isProductEligibleForCampaign(product, campaign) {
  if (!campaign || !product) return false;
  
  const productCategory = (product.category || product.subcategory || '').toLowerCase();
  return campaign.eligibleCategories.some(cat => 
    productCategory.includes(cat.toLowerCase())
  );
}

/**
 * Get applicable discounts for a product
 */
export function getApplicableDiscounts(product) {
  const activeCampaigns = getActiveCampaigns();
  return activeCampaigns.filter(campaign => 
    isProductEligibleForCampaign(product, campaign)
  );
}

/**
 * Promotional banner content
 */
export function getPromotionalBannerContent() {
  const activeCampaigns = getActiveCampaigns();
  if (activeCampaigns.length === 0) {
    return {
      show: false,
      type: 'default',
      title: 'Explore Our Collection',
      description: 'Discover quality furniture at great prices.',
      cta: 'Shop Now'
    };
  }

  const campaign = activeCampaigns[0]; // Show first active campaign
  return {
    show: true,
    type: 'campaign',
    title: campaign.title,
    description: campaign.description,
    cta: campaign.cta,
    link: campaign.landingPage,
    image: campaign.bannerImage
  };
}

/**
 * Festival SEO metadata
 */
export function generateFestivalMetadata(festivalId) {
  const festival = FESTIVAL_CALENDAR.find(f => f.id === festivalId);
  if (!festival) return null;

  return {
    title: `${festival.name} Furniture Deals & Offers | DIVYA FURNITURE WORLD`,
    description: `${festival.message}. Shop handpicked furniture for ${festival.name}. Exclusive offers on sofas, beds, wardrobes, and more.`,
    keywords: [
      `${festival.name} furniture deals`,
      `${festival.name} offers online`,
      `Buy furniture for ${festival.name}`,
      `${festival.name} sale`,
    ]
  };
}

/**
 * Campaign SEO metadata
 */
export function generateCampaignMetadata(campaign) {
  if (!campaign) return null;

  return {
    title: `${campaign.name} - Furniture Offers | DIVYA FURNITURE WORLD`,
    description: campaign.description,
    keywords: campaign.keywords || [],
    image: campaign.bannerImage,
  };
}

/**
 * Promotional schema for search engines
 */
export function generatePromotionSchema(campaign) {
  if (!campaign || !campaign.discountValue) return null;

  const startDate = new Date(campaign.startDate).toISOString();
  const endDate = new Date(campaign.endDate).toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": campaign.name,
    "description": campaign.description,
    "offerCount": campaign.eligibleCategories.length,
    "priceCurrency": "INR",
    "priceValidUntil": endDate,
    "availability": "https://schema.org/InStock",
    "url": `${SITE_URL}${campaign.landingPage}`,
    "validFrom": startDate,
    "validThrough": endDate,
  };
}

/**
 * Social media promotional content
 */
export function generateSocialContent(campaign) {
  if (!campaign) return null;

  return {
    facebook: {
      headline: campaign.title,
      description: campaign.description,
      cta: campaign.cta,
      image: campaign.bannerImage,
    },
    instagram: {
      caption: `${campaign.title} 🎉\n\n${campaign.description}\n\nShop now at the link in bio!`,
      image: campaign.bannerImage,
      hashtags: ['#DivyaFurniture', '#FurnitureDeals', `#${campaign.festivalId}`],
    },
    twitter: {
      text: `${campaign.title} - ${campaign.description} Shop now: ${campaign.landingPage}`,
    }
  };
}

/**
 * Newsletter promotional content
 */
export function generateNewsletterPromo(campaign) {
  if (!campaign) return null;

  return {
    subject: `${campaign.title} - Shop Now!`,
    preheader: campaign.description.substring(0, 50) + '...',
    headline: campaign.title,
    body: campaign.description,
    cta: campaign.cta,
    link: `${SITE_URL}${campaign.landingPage}`,
  };
}

export default {
  getActiveCampaigns,
  getUpcomingCampaigns,
  getCampaignById,
  getCampaignsByFestival,
  isProductEligibleForCampaign,
  getApplicableDiscounts,
  getPromotionalBannerContent,
  generateFestivalMetadata,
  generateCampaignMetadata,
  generatePromotionSchema,
  generateSocialContent,
  generateNewsletterPromo,
  ACTIVE_CAMPAIGNS,
  FESTIVAL_CALENDAR,
};
import { SITE_URL } from './site-config';
