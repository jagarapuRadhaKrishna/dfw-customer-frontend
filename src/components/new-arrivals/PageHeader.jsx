import { PRODUCT_COUNT_LABEL } from '@/features/newarrivals/data/products';

export default function PageHeader() {
  return (
    <div className="new-arrivals-header">
      <div className="header-container">
        <h1 className="header-title">Explore Oasis Collection</h1>
        <span className="product-count">{PRODUCT_COUNT_LABEL}</span>
      </div>
    </div>
  );
}
