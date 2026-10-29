'use client';

import CollectionPage from '../shared/CollectionPage';
import { sofaCumBedProducts } from '@/features/sofa-cum-beds/data/products';

export default function SofaCumBedsPage() {
  return (
    <CollectionPage
      title="Sofa Cum Beds"
      productCount="Buy Sofa Cum Beds Online at Upto 70% Off"
      products={sofaCumBedProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Sofas & Recliners', href: '/collection/sofa-cum-beds' },
        { label: 'Sofa Cum Beds', href: '/collection/sofa-cum-beds' }
      ]}
    />
  );
}
