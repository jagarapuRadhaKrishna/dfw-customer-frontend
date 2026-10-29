'use client';

import CollectionPage from '../shared/CollectionPage';
import { mattressesProducts } from '@/features/mattresses/data/products';

export default function MattressesPage() {
  return (
    <CollectionPage
      title="Mattresses"
      productCount="Buy Mattresses Online at Upto 70% Off"
      products={mattressesProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Bedroom', href: '/collection/mattresses' },
        { label: 'Mattresses', href: '/collection/mattresses' }
      ]}
    />
  );
}
