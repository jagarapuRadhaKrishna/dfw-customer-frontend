'use client';

import CollectionPage from '../shared/CollectionPage';
import { shoeRacksProducts } from '@/features/shoe-racks/data/products';

export default function ShoeRacksPage() {
  return (
    <CollectionPage
      title="Shoe Racks"
      productCount="Buy Shoe Racks Online at Upto 70% Off"
      products={shoeRacksProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Storage', href: '/collection/shoe-racks' },
        { label: 'Shoe Racks', href: '/collection/shoe-racks' }
      ]}
    />
  );
}
