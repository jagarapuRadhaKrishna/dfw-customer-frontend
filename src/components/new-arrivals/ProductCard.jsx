'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';

function ProductCard({ product }) {
  const { title, href, badge, salePrice, mrp, image } = product;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useShop();

  const inWishlist = isInWishlist(product.id || product.href);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id || product.href);
    } else {
      addToWishlist(product);
    }
  };

  // Calculate discount percentage
  const calculateDiscount = () => {
    if (!mrp || !salePrice) return null;
    const sale = parseInt(salePrice.replace(/[^0-9]/g, ''));
    const original = parseInt(mrp.replace(/[^0-9]/g, ''));
    if (original <= sale) return null;
    const discount = Math.round(((original - sale) / original) * 100);
    return discount > 0 ? `${discount}% OFF` : null;
  };

  const discount = calculateDiscount();

  return (
    <Link href={href} className="product-card" aria-label={`View ${title}`}>
      <div className="product-image-wrapper">
        <button
          className={`card-wishlist-btn ${inWishlist ? 'active' : ''}`}
          onClick={handleWishlistClick}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={inWishlist ? '#e74c3c' : 'rgba(255,255,255,0.7)'}
            stroke={inWishlist ? '#e74c3c' : '#304858'}
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            />
          </svg>
        </button>
        {badge && (
          <span
            className={`product-badge ${
              badge.toLowerCase() === 'bestseller' ? 'bestseller' :
              badge.toLowerCase() === 'clearance' ? 'clearance' :
              badge.toLowerCase() === 'sale' ? 'sale' :
              'new-arrival'
            }`}
            aria-label={badge}
          >
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/images/logo.png'; // Fallback image
          }}
        />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-pricing">
          <span className="sale-price">{salePrice}</span>
          {mrp && <span className="mrp">{mrp}</span>}
          {discount && <span className="discount">{discount}</span>}
        </div>
      </div>
    </Link>
  );
}

export default React.memo(ProductCard);
