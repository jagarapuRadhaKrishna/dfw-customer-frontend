import React from 'react';
import { Store } from '@/features/stores';

export const metadata = {
  title: 'Bhimavaram Store',
  description: 'Find Divya Furniture World in Bhimavaram, Andhra Pradesh, and enquire about products and service availability.',
  alternates: { canonical: 'https://divyafurnitureworld.com/stores' },
};

export default function StoresPage() {
  return <Store />;
}
