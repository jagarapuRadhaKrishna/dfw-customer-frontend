'use client';

import CollectionPage from '../shared/CollectionPage';
import { clearanceSaleProducts } from '@/features/clearance-sale/data/products';

export default function ClearanceSalePage() {
  return (
    <CollectionPage
      title="Clearance Sale"
      productCount="140+ Options"
      products={clearanceSaleProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Deal Zone', href: '/collection/clearance-sale' },
        { label: 'Clearance Sale', href: '/collection/clearance-sale' }
      ]}
    />
  );
}
