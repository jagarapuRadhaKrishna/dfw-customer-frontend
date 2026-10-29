'use client';

import CollectionPage from '../shared/CollectionPage';
import { studyTablesProducts } from '@/features/study-tables/data/products';

export default function StudyTablesPage() {
  return (
    <CollectionPage
      title="Study Tables"
      productCount="Buy Study Tables Online at Upto 70% Off"
      products={studyTablesProducts}
      breadcrumbPath={[
        { label: 'Home', href: '/' },
        { label: 'Office', href: '/collection/study-tables' },
        { label: 'Study Tables', href: '/collection/study-tables' }
      ]}
    />
  );
}
