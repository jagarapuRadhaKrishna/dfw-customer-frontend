'use client';

import CollectionPage from '../shared/CollectionPage';
import { diningTablesProducts } from '@/features/dining-tables/data/products';

export default function DiningTablesPage() {
  return (
    <CollectionPage
      title="Dining Tables"
      productCount="Buy Dining Tables Online at Upto 70% Off"
      products={diningTablesProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Dining', href: '/collection/dining-tables' },
        { label: 'Dining Tables', href: '/collection/dining-tables' }
      ]}
    />
  );
}
