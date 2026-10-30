import { notFound } from 'next/navigation';
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
import ProductDetailPage from '@/components/product-detail/ProductDetailPage';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/schema-generator';
import { generateProductMetadata } from '@/lib/metadata-generator';

const productArrays = [
  newArrivalProducts,
  sofaProducts,
  sofaCumBedProducts,
  bedsProducts,
  bookshelvesProducts,
  chestOfDrawersProducts,
  coffeeTablesProducts,
  diningTablesProducts,
  loungeChairsProducts,
  mattressesProducts,
  reclinersProducts,
  shoeRacksProducts,
  sideboardsProducts,
  studyTablesProducts,
  tvUnitsProducts,
  wardrobesProducts,
  bestBuysProducts,
  clearanceSaleProducts,
  decorOnSaleProducts,
];

const allProducts = productArrays.flat();
const productCategoryLabels = [
  'New Arrivals',
  'Sofas',
  'Sofa Beds',
  'Beds',
  'Bookshelves',
  'Chest of Drawers',
  'Coffee Tables',
  'Dining Tables',
  'Lounge Chairs',
  'Mattresses',
  'Recliners',
  'Shoe Racks',
  'Sideboards',
  'Study Tables',
  'TV Units',
  'Wardrobes',
  'Best Buys',
  'Clearance',
  'Decor',
];
const productUrlsByTitle = new Map();

for (const product of allProducts) {
  if (!product?.title || !product?.href) continue;

  const urls = productUrlsByTitle.get(product.title) || new Set();
  urls.add(product.href);
  productUrlsByTitle.set(product.title, urls);
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = new Set(
    allProducts
      .map((product) => product?.href?.match(/^\/product\/([a-z0-9-]+)$/i)?.[1])
      .filter(Boolean),
  );

  return Array.from(slugs, (slug) => ({ slug }));
}

function findProduct(slug) {
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  return allProducts.find((product) => {
    const hrefSlug = (product.href || '').toLowerCase().replace(/^\/product\//, '');
    return (
      hrefSlug === decodedSlug ||
      (product.slug || '').toLowerCase() === decodedSlug ||
      String(product.id || '').toLowerCase() === decodedSlug
    );
  });
}

function getProductMetadata(product) {
  if ((productUrlsByTitle.get(product.title)?.size || 0) < 2) {
    return generateProductMetadata(product);
  }

  const categoryIndex = productArrays.findIndex((products) => products.includes(product));
  const category = productCategoryLabels[categoryIndex];
  return generateProductMetadata(product, { category });
}

export async function generateMetadata({ params }) {
  const product = findProduct(params?.slug || '');
  if (!product) notFound();
  return getProductMetadata(product);
}

export default function ProductPage({ params }) {
  const product = findProduct(params.slug);
  if (!product) notFound();

  const sourceArray = productArrays.find((products) => products.includes(product)) || [];
  const similarProducts = sourceArray
    .filter((item) => item !== product)
    .slice(0, 4);
  const recentlyViewed = allProducts
    .filter((item) => item !== product)
    .slice(0, 3);
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: product.title, href: product.href || `/product/${params.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema(product)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <ProductDetailPage
        product={product}
        similarProducts={similarProducts}
        recentlyViewed={recentlyViewed}
      />
    </>
  );
}
