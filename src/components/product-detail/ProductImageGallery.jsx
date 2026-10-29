'use client';

import { useState } from 'react';

export default function ProductImageGallery({ product }) {
  const mainImg = product.image || '/images/sofa-main.jpg';
  
  // Generate thumbnail variations (in production these would be different angles)
  const thumbnails = [
    mainImg,
    mainImg,
    mainImg,
    mainImg,
    mainImg,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="product-gallery">
      {/* Vertical thumbnails on the left */}
      <div className="product-thumbnails">
        {thumbnails.map((thumb, i) => (
          <button
            key={i}
            className={`product-thumbnail ${selectedIndex === i ? 'active' : ''}`}
            onClick={() => setSelectedIndex(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={thumb} alt={`${product.title} view ${i + 1}`} />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="product-main-image-wrapper">
        <img
          className="product-main-image"
          src={thumbnails[selectedIndex]}
          alt={product.title}
        />

        {/* Image action overlays */}
        <div className="image-actions">
          <button className="img-action-btn" title="Add to Wishlist" aria-label="Add to Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className="img-action-btn" title="Share" aria-label="Share product">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
