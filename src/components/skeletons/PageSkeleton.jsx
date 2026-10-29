import PageHeaderSkeleton from './PageHeaderSkeleton';
import ProductGridSkeleton from './ProductGridSkeleton';

export default function PageSkeleton() {
  return (
    <div className="skeleton-page">
      <PageHeaderSkeleton />
      <div className="skeleton-filter-bar">
        <div className="skeleton-filter shimmer" />
        <div className="skeleton-filter shimmer" />
        <div className="skeleton-filter shimmer" />
        <div className="skeleton-filter shimmer" />
      </div>
      <ProductGridSkeleton count={8} />
    </div>
  );
}
