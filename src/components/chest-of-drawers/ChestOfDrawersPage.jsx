'use client';

import CollectionPage from '../shared/CollectionPage';
import { chestOfDrawersProducts } from '@/features/chest-of-drawers/data/products';

export default function ChestOfDrawersPage() {
  return (
    <CollectionPage
      title="Chest of Drawers"
      productCount="Buy Chest of Drawers Online at Upto 70% Off"
      products={chestOfDrawersProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Chest of Drawers', href: '/collection/chest-of-drawers' },
        { label: 'Chest of Drawers', href: '/collection/chest-of-drawers' }
      ]}
    />
  );
}
