'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';

export default function ProductActions({ quantity, onQuantityChange, product }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();

  const inWishlist = isInWishlist(product.id || product.href);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/cart');
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id || product.href);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-actions">
      {/* Quantity Selector */}
      <div className="quantity-section">
        <label className="quantity-label">Quantity:</label>
        <div className="quantity-selector">
          <button
            className="qty-btn"
            onClick={() => onQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val)) onQuantityChange(val);
            }}
            min="1"
            max="10"
            className="qty-input"
          />
          <button
            className="qty-btn"
            onClick={() => onQuantityChange(quantity + 1)}
            disabled={quantity >= 10}
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          className={`btn btn-add-to-cart ${addedToCart ? 'success' : ''}`}
          onClick={handleAddToCart}
        >
          {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
        <button className="btn btn-buy-now" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>

      {/* Additional Actions */}
      <div className="additional-actions">
        <button
          className={`action-link wishlist-toggle-btn ${inWishlist ? 'active-wishlist' : ''}`}
          onClick={handleToggleWishlist}
          style={{ color: inWishlist ? '#e74c3c' : 'inherit' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={inWishlist ? '#e74c3c' : 'none'}
            stroke={inWishlist ? '#e74c3c' : 'currentColor'}
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            />
          </svg>
          {inWishlist ? 'Wishlisted' : 'Add to Wishlist'}
        </button>
        <button className="action-link">
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
              d="M3.172 5.172a4 4 0 015.656 0L12 6.343m0 0l3.172-3.171a4 4 0 115.656 5.656L12 12m0 0l3.172 3.172a4 4 0 11-5.656 5.656L12 12m0 0L8.828 8.828a4 4 0 00-5.656 0"
            />
          </svg>
          Compare
        </button>
        <button className="action-link">
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
              d="M8.684 13.342C9.344 15.623 11.276 17 13.5 17c2.5 0 4.5-2.015 4.5-4.5S16 8 13.5 8m0 0H7m6.5 0v6.5"
            />
          </svg>
          Share
        </button>
      </div>
    </div>
  );
}
