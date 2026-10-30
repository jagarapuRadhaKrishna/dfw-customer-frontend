import React from 'react';
import { Store } from '@/features/stores';

export const metadata = {
  title: 'Store Locations and Service Areas',
  description: 'Enquire about furniture service availability. Physical branch details are listed only when verified.',
  alternates: { canonical: 'https://divyafurnitureworld.com/stores' },
  robots: { index: false, follow: true },
};

export default function StoresPage() {
  return <Store />;
}
