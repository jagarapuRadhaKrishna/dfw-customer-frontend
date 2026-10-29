'use client';

import CollectionPage from '../shared/CollectionPage';
import { coffeeTablesProducts } from '@/features/coffee-tables/data/products';

export default function CoffeeTablesPage() {
  return (
    <CollectionPage
      title="Coffee Tables"
      productCount="Buy Coffee Tables Online at Upto 70% Off"
      products={coffeeTablesProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Living Room', href: '/collection/coffee-tables' },
        { label: 'Coffee Tables', href: '/collection/coffee-tables' }
      ]}
    />
  );
}
