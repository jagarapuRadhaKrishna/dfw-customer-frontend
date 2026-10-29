'use client';

import CollectionPage from '../shared/CollectionPage';
import { loungeChairsProducts } from '@/features/lounge-chairs/data/products';

export default function LoungeChairsPage() {
  return (
    <CollectionPage
      title="Lounge Chairs"
      productCount="Buy Lounge Chairs Online at Upto 70% Off"
      products={loungeChairsProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Seating', href: '/collection/lounge-chairs' },
        { label: 'Lounge Chairs', href: '/collection/lounge-chairs' }
      ]}
    />
  );
}
