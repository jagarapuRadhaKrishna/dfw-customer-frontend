'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import ProductCard from '../new-arrivals/ProductCard';
import FilterBar from '../new-arrivals/FilterBar';
import PageSkeleton from '../skeletons/PageSkeleton';
import '@/styles/new-arrivals.css';

export default function CollectionPage({
  title,
  productCount,
  products,
  breadcrumbPath = [{ label: 'Home', href: '/' }],
  showFilterBar = true,
  className = 'new-arrivals-page',
  isLoading = false,
}) {
  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <div className={`${className} page-transition-up`}>
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        {breadcrumbPath.map((item, index) => (
          <React.Fragment key={item.href || index}>
            {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
            {index === breadcrumbPath.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Page Header */}
      <div className="new-arrivals-header">
        <div className="header-container">
          <h1 className="header-title">{title}</h1>
          <p className="product-count">{productCount}</p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      {showFilterBar && (
        <div className="sticky-filter-section">
          <FilterBar />
        </div>
      )}

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={`${product.href}-${index}`} className="stagger-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
