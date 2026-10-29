'use client';

import CollectionPage from '../shared/CollectionPage';
import { bestBuysProducts } from '@/features/best-buys/data/products';

export default function BestBuysPage() {
  return (
    <CollectionPage
      title="Best Buys Under ₹10,000"
      productCount="150+ Products"
      products={bestBuysProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Deal Zone', href: '/collection/best-buys-under-10000' },
        { label: 'Best Buys Under ₹10,000', href: '/collection/best-buys-under-10000' }
      ]}
    />
  );
}
