'use client';

import CollectionPage from '../shared/CollectionPage';
import { bedsProducts } from '@/features/beds/data/products';

export default function BedsPage() {
  return (
    <CollectionPage
      title="Beds"
      productCount="Buy Beds Online at Upto 70% Off"
      products={bedsProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Bedroom', href: '/collection/beds' },
        { label: 'Beds', href: '/collection/beds' }
      ]}
    />
  );
}
