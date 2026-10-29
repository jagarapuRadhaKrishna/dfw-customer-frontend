export default function ProductCardSkeleton() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image-wrapper">
        <div className="skeleton-image shimmer" />
      </div>
      <div className="skeleton-info">
        <div className="skeleton-title shimmer" />
        <div className="skeleton-title shimmer" />
        <div className="skeleton-pricing">
          <div className="skeleton-price shimmer" />
          <div className="skeleton-mrp shimmer" />
        </div>
      </div>
    </div>
  );
}
