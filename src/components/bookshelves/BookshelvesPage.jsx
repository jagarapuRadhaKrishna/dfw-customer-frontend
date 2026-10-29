'use client';

import CollectionPage from '../shared/CollectionPage';
import { bookshelvesProducts } from '@/features/bookshelves/data/products';

export default function BookshelvesPage() {
  return (
    <CollectionPage
      title="Bookshelves & Storage"
      productCount="Buy Bookshelves Online at Upto 70% Off"
      products={bookshelvesProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Bookshelves', href: '/collection/bookshelves' },
        { label: 'Bookshelves & Storage', href: '/collection/bookshelves' }
      ]}
    />
  );
}
