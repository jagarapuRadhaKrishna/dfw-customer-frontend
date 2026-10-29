'use client';

import CollectionPage from '../shared/CollectionPage';
import { sideboardsProducts } from '@/features/sideboards/data/products';

export default function SideboardsPage() {
  return (
    <CollectionPage
      title="Sideboards"
      productCount="Buy Sideboards Online at Upto 70% Off"
      products={sideboardsProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Storage', href: '/collection/sideboards' },
        { label: 'Sideboards', href: '/collection/sideboards' }
      ]}
    />
  );
}
