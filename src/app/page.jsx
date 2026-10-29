import React from 'react';
import HeroBanner from '@/features/home/components/HeroBanner';
import ShopByCategory from '@/features/home/components/ShopByCategory';
import AdditionalOffers from '@/features/home/components/AdditionalOffers';
import ProductShowcase from '@/features/home/components/ProductShowcase';
import { generateHomeMetadata } from '@/lib/metadata-generator';

export const metadata = generateHomeMetadata();

export default function HomePage() {
  return (
    <main className="homepage-nav">
      <div className="RLsbz"></div>
      <h1 className="sr-only">Divya Furniture World - Furniture and Home Décor</h1>
      <div>
        <HeroBanner />
        <ShopByCategory />
        <AdditionalOffers />
        <ProductShowcase />
      </div>
    </main>
  );
}
