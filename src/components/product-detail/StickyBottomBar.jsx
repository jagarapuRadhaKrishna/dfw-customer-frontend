'use client';

export default function StickyBottomBar({
  product,
  selectedCapacity,
  quantity,
  totalPrice,
  addedToCart,
  onAddToCart,
}) {
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalPrice);

  const thumbnail = product.image || '/images/sofa-main.jpg';

  return (
    <aside className="sticky-bottom-bar" aria-label="Quick purchase bar">
      <div className="sbb-container">
        {/* Left: Thumbnail + Title + Variant & Quantity */}
        <div className="sbb-left">
          <div className="sbb-thumb-wrapper">
            <img src={thumbnail} alt={product.title} className="sbb-thumb" />
          </div>
          <div className="sbb-info">
            <h3 className="sbb-title" title={product.title}>
              {product.title}
            </h3>
            <div className="sbb-meta">
              <span className="sbb-meta-item">
                <span className="sbb-meta-label">Seating Capacity:</span>{' '}
                <strong className="sbb-meta-val">{selectedCapacity}</strong>
              </span>
              <span className="sbb-meta-item">
                <span className="sbb-meta-label">Qty :</span>{' '}
                <strong className="sbb-meta-val">{quantity}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Total Price + Add to Cart Button */}
        <div className="sbb-right">
          <div className="sbb-price-block">
            <span className="sbb-price-label">Total price</span>
            <span className="sbb-price-value">{formattedPrice}</span>
          </div>
          <button
            type="button"
            className={`sbb-add-cart-btn ${addedToCart ? 'added' : ''}`}
            onClick={onAddToCart}
            aria-label="Add product to cart"
          >
            {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </aside>
  );
}
