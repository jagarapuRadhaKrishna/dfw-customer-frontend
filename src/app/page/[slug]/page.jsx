import CollectionPage from '@/components/shared/CollectionPage';
import { clearanceSaleProducts } from '@/features/clearance-sale/data/products';
import { bestBuysProducts } from '@/features/best-buys/data/products';
import { decorOnSaleProducts } from '@/features/decor-on-sale/data/products';
import { generatePageMetadata } from '@/lib/metadata-generator';

export const dynamicParams = false;

function formatTitle(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export async function generateStaticParams() {
  return [
    { slug: 'new-terra-collection' },
    { slug: 'hdfc-instant-discount-tnc' },
    { slug: 'icici-bank-credit-card-emi-offer' },
    { slug: 'sbi-bank-offer-terms-conditions' },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const title = formatTitle(slug);
  return generatePageMetadata(
    title,
    `Explore the ${title} collection. Check product pages for current prices and availability.`,
    '/images/logo.png',
    `/page/${slug}`,
    { noIndex: true },
  );
}

export default function GenericInfoPage({ params }) {
  const { slug } = params;
  const title = formatTitle(slug);
  const products = [
    ...clearanceSaleProducts,
    ...bestBuysProducts,
    ...decorOnSaleProducts,
  ];

  return (
    <main className="info-dynamic-route">
      <CollectionPage
        title={title}
        productCount="Explore selected furniture and check product pages for current prices and availability."
        products={products}
        breadcrumbPath={[
          { label: 'Home', href: '/' },
          { label: 'Offers', href: `/page/${slug}` },
          { label: title, href: `/page/${slug}` },
        ]}
      />
    </main>
  );
}
