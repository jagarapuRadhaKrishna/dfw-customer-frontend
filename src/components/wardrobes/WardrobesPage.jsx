'use client';

import CollectionPage from '../shared/CollectionPage';
import { wardrobesProducts } from '@/features/wardrobes/data/products';

export default function WardrobesPage() {
  return (
    <CollectionPage
      title="Wardrobes"
      productCount="Buy Wardrobes Online at Upto 70% Off"
      products={wardrobesProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Bedroom', href: '/collection/wardrobes' },
        { label: 'Wardrobes', href: '/collection/wardrobes' }
      ]}
    />
  );
}
