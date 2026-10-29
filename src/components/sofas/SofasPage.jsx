'use client';

import CollectionPage from '../shared/CollectionPage';
import { sofaProducts } from '@/features/sofas/data/products';

export default function SofasPage() {
  return (
    <CollectionPage
      title="Sofa Sets"
      productCount="Buy Sofa Sets Online at Upto 70% Off"
      products={sofaProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Sofas & Recliners', href: '/collection/sofas' },
        { label: 'Sofa Sets', href: '/collection/sofas' }
      ]}
    />
  );
}
