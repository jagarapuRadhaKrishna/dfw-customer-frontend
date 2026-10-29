'use client';

import CollectionPage from '../shared/CollectionPage';
import { decorOnSaleProducts } from '@/features/decor-on-sale/data/products';

export default function DecorOnSalePage() {
  return (
    <CollectionPage
      title="All Decor On Sale"
      productCount="200+ Products"
      products={decorOnSaleProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Deal Zone', href: '/collection/all-decor-on-sale' },
        { label: 'All Decor On Sale', href: '/collection/all-decor-on-sale' }
      ]}
    />
  );
}
