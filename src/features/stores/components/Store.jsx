import React from 'react';
import '../styles/store.css';
import StoreBreadcrumb from './StoreBreadcrumb';
import StoreDetails from './StoreDetails';
import StorePromotionalBanner from './StorePromotionalBanner';
import NearbyStores from './NearbyStores';
import WhyVisitUs from './WhyVisitUs';

export default function Store() {
  return (
    <main className="store-page-root">
      <StoreBreadcrumb currentStore="Stores" />
      <StoreDetails />
      <StorePromotionalBanner />
      <NearbyStores />
      <WhyVisitUs />
      <div className="mobile desktop tablet wrapper-class"></div>
    </main>
  );
}
