import CollectionPage from '@/components/shared/CollectionPage';
import { clearanceSaleProducts } from '@/features/clearance-sale/data/products';
import { bestBuysProducts } from '@/features/best-buys/data/products';
import { newArrivalProducts } from '@/features/newarrivals/data/products';
import { generatePageMetadata } from '@/lib/metadata-generator';

function formatTitle(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function generateStaticParams() {
  return [
    { slug: 'mega-furniture-sale' },
    { slug: 'dawn' },
    { slug: 'astra' },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const title = formatTitle(slug);
  return generatePageMetadata(
    title,
    `Explore furniture in the ${title} collection. Check product pages for current prices and availability.`,
    '/images/logo.png',
    `/sections/${slug}`,
    { noIndex: true },
  );
}

export default function SectionDynamicPage({ params }) {
  const { slug } = params;
  const title = formatTitle(slug);
  const products = [
    ...clearanceSaleProducts,
    ...bestBuysProducts,
    ...newArrivalProducts.slice(0, 6),
  ];

  return (
    <main className="section-dynamic-route">
      <CollectionPage
        title={title}
        productCount="Explore furniture from selected categories and check product pages for current prices."
        products={products}
        breadcrumbPath={[
          { label: 'Home', href: '/' },
          { label: 'Offers & Promotions', href: `/sections/${slug}` },
          { label: title, href: `/sections/${slug}` },
        ]}
      />
    </main>
  );
}
