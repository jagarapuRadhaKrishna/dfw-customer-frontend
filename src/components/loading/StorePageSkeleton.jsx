import React from 'react';
import Skeleton from './Skeleton';

export default function StorePageSkeleton() {
  return (
    <div className="store-skeleton-container" aria-label="Loading store details...">
      {/* Breadcrumb skeleton */}
      <div className="store-skeleton-breadcrumb">
        <Skeleton width="48px" height="14px" />
        <span style={{ color: '#ccc' }}>/</span>
        <Skeleton width="60px" height="14px" />
      </div>

      {/* Main Store Hero & Details skeleton */}
      <div className="store-skeleton-hero">
        <div className="store-skeleton-image skeleton-shimmer" />
        <div className="store-skeleton-info">
          <Skeleton width="70%" height="28px" borderRadius="6px" />
          <Skeleton width="90%" height="16px" />
          <Skeleton width="55%" height="16px" />
          <Skeleton width="40%" height="16px" />
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <Skeleton width="130px" height="42px" borderRadius="6px" />
            <Skeleton width="150px" height="42px" borderRadius="6px" />
          </div>
        </div>
      </div>

      {/* Promotional Banner skeleton */}
      <div className="store-skeleton-banner skeleton-shimmer" />

      {/* Other Stores section skeleton */}
      <div className="store-skeleton-section">
        <Skeleton width="240px" height="24px" className="store-skeleton-title" />
        <div className="store-skeleton-grid-2">
          {[1, 2].map((item) => (
            <div key={item} className="store-skeleton-card">
              <div className="store-skeleton-card-img skeleton-shimmer" />
              <Skeleton width="60%" height="18px" />
              <Skeleton width="90%" height="14px" />
              <Skeleton width="45%" height="14px" />
            </div>
          ))}
        </div>
      </div>

      {/* Why Visit Us section skeleton */}
      <div className="store-skeleton-section">
        <Skeleton width="180px" height="24px" className="store-skeleton-title" />
        <div className="store-skeleton-grid-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="store-skeleton-feature">
              <div className="store-skeleton-feature-icon skeleton-shimmer" />
              <Skeleton width="80%" height="16px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
