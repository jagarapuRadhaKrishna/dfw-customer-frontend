import CollectionPage from '@/components/shared/CollectionPage';
import { newArrivalProducts } from '@/features/newarrivals/data/products';
import { sofaProducts } from '@/features/sofas/data/products';
import { sofaCumBedProducts } from '@/features/sofa-cum-beds/data/products';
import { bedsProducts } from '@/features/beds/data/products';
import { bookshelvesProducts } from '@/features/bookshelves/data/products';
import { chestOfDrawersProducts } from '@/features/chest-of-drawers/data/products';
import { coffeeTablesProducts } from '@/features/coffee-tables/data/products';
import { diningTablesProducts } from '@/features/dining-tables/data/products';
import { loungeChairsProducts } from '@/features/lounge-chairs/data/products';
import { mattressesProducts } from '@/features/mattresses/data/products';
import { reclinersProducts } from '@/features/recliners/data/products';
import { shoeRacksProducts } from '@/features/shoe-racks/data/products';
import { sideboardsProducts } from '@/features/sideboards/data/products';
import { studyTablesProducts } from '@/features/study-tables/data/products';
import { tvUnitsProducts } from '@/features/tv-units/data/products';
import { wardrobesProducts } from '@/features/wardrobes/data/products';
import { bestBuysProducts } from '@/features/best-buys/data/products';
import { clearanceSaleProducts } from '@/features/clearance-sale/data/products';
import { decorOnSaleProducts } from '@/features/decor-on-sale/data/products';
import { generateBreadcrumbSchema } from '@/lib/schema-generator';
import { generatePageMetadata } from '@/lib/metadata-generator';

const allProducts = [
  ...newArrivalProducts,
  ...sofaProducts,
  ...sofaCumBedProducts,
  ...bedsProducts,
  ...bookshelvesProducts,
  ...chestOfDrawersProducts,
  ...coffeeTablesProducts,
  ...diningTablesProducts,
  ...loungeChairsProducts,
  ...mattressesProducts,
  ...reclinersProducts,
  ...shoeRacksProducts,
  ...sideboardsProducts,
  ...studyTablesProducts,
  ...tvUnitsProducts,
  ...wardrobesProducts,
  ...bestBuysProducts,
  ...clearanceSaleProducts,
  ...decorOnSaleProducts,
];

export const dynamicParams = false;

// Helper to format slug to title
function formatSlugTitle(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Collection configuration dictionary
function getCollectionConfig(slug) {
  const normalizedSlug = slug.toLowerCase();

  switch (normalizedSlug) {
    // Requirements: Toledo Collection
    case 'toledo':
    case 'toledo-collection': {
      const toledoItems = allProducts.filter((p) =>
        p.title.toLowerCase().includes('toledo')
      );
      return {
        title: 'Toledo Collection',
        productCount: `${toledoItems.length || 'Handcrafted'} Solid Wood Furniture Pieces`,
        products: toledoItems.length ? toledoItems : bedsProducts.slice(0, 6),
        category: 'Collections',
      };
    }

    // Requirements: Kitchens
    case 'kitchens':
    case 'modular-kitchens':
    case 'kitchen':
    case 'crockery-units': {
      const kitchenItems = allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes('kitchen') ||
          p.title.toLowerCase().includes('cabinet') ||
          p.title.toLowerCase().includes('crockery') ||
          p.title.toLowerCase().includes('sideboard')
      );
      return {
        title: normalizedSlug === 'crockery-units' ? 'Crockery Units' : 'Modular Kitchens & Storage',
        productCount: 'Furniture and storage options for kitchens and dining spaces',
        products: kitchenItems.length ? kitchenItems : sideboardsProducts,
        category: 'Kitchen & Dining',
      };
    }

    // Requirements: Non-Storage Beds
    case 'beds-without-storage':
    case 'non-storage-beds': {
      const nonStorageBeds = bedsProducts.filter(
        (p) =>
          p.title.toLowerCase().includes('without storage') ||
          !p.title.toLowerCase().includes('storage')
      );
      return {
        title: 'Non-Storage Beds',
        productCount: 'Explore bed designs without storage',
        products: nonStorageBeds.length ? nonStorageBeds : bedsProducts,
        category: 'Bedroom',
      };
    }

    // Requirements: Lift Chairs / Study Chairs
    case 'lift-chairs':
    case 'lift-chair':
    case 'study-chairs':
    case 'chairs': {
      const chairItems = [
        ...reclinersProducts.filter((p) =>
          p.title.toLowerCase().includes('motorized') ||
          p.title.toLowerCase().includes('seater')
        ),
        ...loungeChairsProducts,
      ];
      return {
        title: normalizedSlug.includes('lift') ? 'Lift Chairs' : 'Study Chairs & Seating',
        productCount: 'Ergonomic & Motorized Seating for Maximum Comfort',
        products: chairItems.length ? chairItems : reclinersProducts,
        category: 'Chairs',
      };
    }

    // Requirements: Explore All Styles / All Collections
    case 'explore-all-collection':
    case 'explore-all-styles':
    case 'all-collections': {
      return {
        title: 'Explore All Collections & Styles',
        productCount: 'Discover Premium Furniture Styles for Every Room',
        products: allProducts.filter((p) => p.badge).slice(0, 24),
        category: 'Collections',
      };
    }

    // Below-the-fold banners
    case 'hydraulic-beds-with-storage': {
      const storageBeds = bedsProducts.filter((p) =>
        p.title.toLowerCase().includes('storage')
      );
      return {
        title: 'Hydraulic Storage Beds',
        productCount: 'Explore beds with storage',
        products: storageBeds.length ? storageBeds : bedsProducts,
        category: 'Bedroom',
      };
    }

    case 'full-bedroom-range':
    case 'bedroom-furniture': {
      return {
        title: 'Full Bedroom Range',
        productCount: 'Complete Bedroom Sets, Beds, Wardrobes & Bedside Tables',
        products: [...bedsProducts, ...wardrobesProducts.slice(0, 6)],
        category: 'Bedroom',
      };
    }

    case 'urban-ladder-bestsellers':
    case 'bestsellers': {
      return {
        title: 'Bestselling Furniture',
        productCount: 'Most Loved & Top Rated Furniture Pieces',
        products: bestBuysProducts,
        category: 'Deal Zone',
      };
    }

    case 'top-picks-from-partner-brands':
    case 'partner-brands': {
      return {
        title: 'Top Picks from Partner Brands',
        productCount: 'Exclusive Designs from Verified Brands',
        products: [...bestBuysProducts, ...clearanceSaleProducts],
        category: 'Brands',
      };
    }

    case 'coffee-table': {
      return {
        title: 'Coffee Tables',
        productCount: 'Explore coffee tables for living rooms',
        products: coffeeTablesProducts,
        category: 'Living Room',
      };
    }

    case '3-seater-sofas': {
      const threeSeaters = sofaProducts.filter((p) =>
        p.title.toLowerCase().includes('3') || p.title.toLowerCase().includes('three')
      );
      return {
        title: '3 Seater Sofas',
        productCount: 'Explore three-seater sofa designs',
        products: threeSeaters.length ? threeSeaters : sofaProducts,
        category: 'Living Room',
      };
    }

    case 'dining-table-sets': {
      return {
        title: 'Dining Table Sets',
        productCount: 'Explore dining table sets',
        products: diningTablesProducts,
        category: 'Dining Room',
      };
    }

    case 'cabinets-and-sideboards': {
      return {
        title: 'Sideboards & Storage Cabinets',
        productCount: 'Buy Sideboards & Storage Cabinets Online',
        products: sideboardsProducts,
        category: 'Living Room',
      };
    }

    case 'bedside-tables': {
      const bedsideItems = allProducts.filter((p) =>
        p.title.toLowerCase().includes('bedside')
      );
      return {
        title: 'Bedside Tables',
        productCount: 'Explore bedside table options',
        products: bedsideItems.length ? bedsideItems : bedsProducts,
        category: 'Bedroom',
      };
    }

    case 'drink-and-c-table': {
      return {
        title: 'Drink & C Tables',
        productCount: 'Compact Side & End Tables for Living Rooms',
        products: coffeeTablesProducts,
        category: 'Living Room',
      };
    }

    case 'kids-room':
    case 'kids-furniture': {
      return {
        title: 'Kids Room Furniture',
        productCount: 'Study Desks, Storage & Beds for Kids',
        products: [...studyTablesProducts.slice(0, 6), ...bookshelvesProducts.slice(0, 6)],
        category: 'Kids Room',
      };
    }

    case 'balcony-and-outdoor':
    case 'outdoor-furniture': {
      return {
        title: 'Balcony & Outdoor Furniture',
        productCount: 'Chairs, Coffee Tables & Relaxing Outdoor Seating',
        products: loungeChairsProducts,
        category: 'Outdoor',
      };
    }

    case 'mirrors':
    case 'carpets':
    case 'wall-clocks':
    case 'wall-decors':
    case 'cushion-covers':
    case 'floor-lamps':
    case 'table-lamps':
    case 'hanging-lights':
    case 'serveware':
    case 'home-decor':
    case 'lamps':
    case 'dressing-tables': {
      return {
        title: formatSlugTitle(normalizedSlug),
        productCount: `Explore ${formatSlugTitle(normalizedSlug)} and related home décor`,
        products: decorOnSaleProducts,
        category: 'Home Décor',
      };
    }

    case '60-percent-off-deals': {
      return {
        title: 'Min 60% Off Deals',
        productCount: 'Highest Discount Furniture & Home Décor',
        products: clearanceSaleProducts,
        category: 'Deal Zone',
      };
    }

    case 'gifting': {
      return {
        title: 'Gifting Under 3K',
        productCount: 'Thoughtful Furniture & Home Décor Gifts',
        products: decorOnSaleProducts,
        category: 'Deal Zone',
      };
    }

    default: {
      return {
        title: formatSlugTitle(normalizedSlug),
        productCount: `Buy ${formatSlugTitle(normalizedSlug)} Online at Low Prices`,
        products: bestBuysProducts,
        category: 'Furniture',
      };
    }
  }
}

export async function generateStaticParams() {
  const slugs = [
    'toledo',
    'toledo-collection',
    'kitchens',
    'modular-kitchens',
    'beds-without-storage',
    'non-storage-beds',
    'lift-chairs',
    'study-chairs',
    'explore-all-collection',
    'explore-all-styles',
    'hydraulic-beds-with-storage',
    'full-bedroom-range',
    'urban-ladder-bestsellers',
    'top-picks-from-partner-brands',
    'coffee-table',
    '3-seater-sofas',
    'dining-table-sets',
    'cabinets-and-sideboards',
    'bedside-tables',
    'drink-and-c-table',
    'crockery-units',
    'kids-room',
    'balcony-and-outdoor',
    'mirrors',
    'carpets',
    'wall-clocks',
    'wall-decors',
    'floor-lamps',
    '60-percent-off-deals',
    'gifting',
  ];

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const config = getCollectionConfig(slug);

  return generatePageMetadata(
    `${config.title} Furniture`,
    `Explore ${config.title.toLowerCase()} at Divya Furniture World. ${config.productCount}.`,
    '/images/logo.png',
    `/collection/${slug}`,
  );
}

export default function DynamicCollectionPage({ params }) {
  const { slug } = params;
  const config = getCollectionConfig(slug);

  // Generate breadcrumb schema
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: config.category, href: `/collection/${slug}` },
    { label: config.title, href: `/collection/${slug}` },
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <main className="dynamic-collection-route">
      {/* Breadcrumb JSON-LD Schema */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      <CollectionPage
        title={config.title}
        productCount={config.productCount}
        products={config.products}
        breadcrumbPath={breadcrumbs}
      />
    </main>
  );
}
