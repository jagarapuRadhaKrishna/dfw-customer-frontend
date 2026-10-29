'use client';

import Link from 'next/link';
import ProductGrid from './ProductGrid';
import FilterBar from './FilterBar';
import '@/styles/new-arrivals.css';

export default function NewArrivalsPage() {
  return (
    <div className="new-arrivals-page">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-separator" aria-hidden="true">/</span>
        <span aria-current="page">New Arrivals</span>
      </nav>

      {/* Page Header */}
      <div className="new-arrivals-header">
        <div className="header-container">
          <h1 className="header-title">New Arrivals</h1>
          <p className="product-count">1129 Products</p>
        </div>
      </div>

      {/* Sticky Filter Bar - uses CSS sticky positioning */}
      <div className="sticky-filter-section">
        <FilterBar />
      </div>

      {/* Product Grid */}
      <ProductGrid />
    </div>
  );
}
