'use client';

import CollectionPage from '../shared/CollectionPage';
import { tvUnitsProducts } from '@/features/tv-units/data/products';

export default function TVUnitsPage() {
  return (
    <CollectionPage
      title="TV Units"
      productCount="Buy TV Units Online at Upto 70% Off"
      products={tvUnitsProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Living', href: '/collection/tv-units' },
        { label: 'TV Units', href: '/collection/tv-units' }
      ]}
    />
  );
}
