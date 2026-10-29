import React from 'react';
import Skeleton from './Skeleton';

export default function HomePageSkeleton() {
  return (
    <div className="home-skeleton-container" aria-label="Loading home page...">
      {/* Hero Banner skeleton */}
      <div className="home-skeleton-hero skeleton-shimmer" />

      {/* Shop By Category skeleton */}
      <div style={{ marginBottom: '32px' }}>
        <Skeleton width="200px" height="24px" style={{ margin: '0 auto 24px' }} />
        <div className="home-skeleton-categories">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="home-skeleton-category-item">
              <div className="home-skeleton-category-circle skeleton-shimmer" />
              <Skeleton width="70px" height="14px" />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Offers skeleton banner */}
      <div style={{ width: '100%', height: '140px', marginBottom: '36px' }} className="skeleton-shimmer" />

      {/* Product Showcase grid skeleton */}
      <div>
        <Skeleton width="220px" height="24px" style={{ marginBottom: '20px' }} />
        <div className="home-skeleton-products-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="home-skeleton-product-card">
              <div className="home-skeleton-product-image skeleton-shimmer" />
              <Skeleton width="80%" height="16px" />
              <Skeleton width="50%" height="14px" />
              <Skeleton width="40%" height="16px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
