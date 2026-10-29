'use client';

import CollectionPage from '../shared/CollectionPage';
import { reclinersProducts } from '@/features/recliners/data/products';

export default function ReclinersPage() {
  return (
    <CollectionPage
      title="Recliners"
      productCount="Buy Recliners Online at Upto 70% Off"
      products={reclinersProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Seating', href: '/collection/recliners' },
        { label: 'Recliners', href: '/collection/recliners' }
      ]}
    />
  );
}
