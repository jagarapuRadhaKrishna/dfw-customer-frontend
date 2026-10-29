export default function ProductPrice({ salePrice, originalPrice, discount }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="price-section">
      <div className="price-container">
        <div className="price-display">
          <span className="sale-price">{formatPrice(salePrice)}</span>
          <span className="original-price">{formatPrice(originalPrice)}</span>
          <span className="discount-badge">{discount}% OFF</span>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="delivery-info">
        <div className="info-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 1v22m11-9H1m3-5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
            />
          </svg>
          <span>Free Delivery on orders above ₹5,000</span>
        </div>
        <div className="info-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4m0 0H1"
            />
          </svg>
          <span>Easy Returns within 30 days</span>
        </div>
      </div>

      {/* Availability */}
      <div className="availability">
        <span className="in-stock">✓ In Stock</span>
        <span className="items-left">(Only 5 items left)</span>
      </div>
    </div>
  );
}
