'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';

// Sofa sizes matching Divya Furniture World
const SOFA_SIZES = [
  {
    name: '1 Seater',
    label: '1 Seater',
    priceMultiplier: 0.55,
    dimensions: '98 cm (W) x 91 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '28.5 kg',
  },
  {
    name: '2 Seater',
    label: '2 Seater',
    priceMultiplier: 0.8,
    dimensions: '153 cm (W) x 91 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '42.0 kg',
  },
  {
    name: '3 Seater',
    label: '3 Seater',
    priceMultiplier: 1.0,
    dimensions: '208 cm (W) x 91 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '55.5 kg',
  },
  {
    name: '3 Seater + Lounger (Left Hand Facing)',
    label: '3 Seater + Lounger (Left Hand Facing)',
    priceMultiplier: 1.38,
    dimensions: '275 cm (W) x 165 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '76.0 kg',
  },
  {
    name: '3 Seater + Lounger (Right Hand Facing)',
    label: '3 Seater + Lounger (Right Hand Facing)',
    priceMultiplier: 1.38,
    dimensions: '275 cm (W) x 165 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '76.0 kg',
  },
];

const BED_SIZES = [
  {
    name: 'King Size',
    label: 'King Size (78 x 72 in)',
    priceMultiplier: 1.15,
    dimensions: '205 cm (W) x 195 cm (D) x 110 cm (H)',
    seatHeight: '45 cm',
    weight: '68 kg',
  },
  {
    name: 'Queen Size',
    label: 'Queen Size (78 x 60 in)',
    priceMultiplier: 1.0,
    dimensions: '205 cm (W) x 165 cm (D) x 110 cm (H)',
    seatHeight: '45 cm',
    weight: '58 kg',
  },
  {
    name: 'Single Size',
    label: 'Single Size (78 x 36 in)',
    priceMultiplier: 0.65,
    dimensions: '205 cm (W) x 105 cm (D) x 110 cm (H)',
    seatHeight: '45 cm',
    weight: '38 kg',
  },
];

const DINING_SIZES = [
  {
    name: '4 Seater',
    label: '4 Seater',
    priceMultiplier: 0.8,
    dimensions: '115 cm (W) x 75 cm (D) x 75 cm (H)',
    seatHeight: '45 cm',
    weight: '35 kg',
  },
  {
    name: '6 Seater',
    label: '6 Seater',
    priceMultiplier: 1.0,
    dimensions: '150 cm (W) x 90 cm (D) x 75 cm (H)',
    seatHeight: '45 cm',
    weight: '48 kg',
  },
  {
    name: '8 Seater',
    label: '8 Seater',
    priceMultiplier: 1.35,
    dimensions: '210 cm (W) x 100 cm (D) x 75 cm (H)',
    seatHeight: '45 cm',
    weight: '65 kg',
  },
];

export default function ProductInformation({
  product,
  selectedColor,
  setSelectedColor,
  selectedCapacity,
  setSelectedCapacity,
  quantity,
  setQuantity,
  currentPrice,
  currentMrp,
  discount,
  currentSizeData,
  addedToCart,
  onAddToCart,
}) {
  const [pincode, setPincode] = useState('');
  const [availabilityMsg, setAvailabilityMsg] = useState('');
  const router = useRouter();

  // Helper to get applicable sizes based on product title/category
  const isBed = (product.title || '').toLowerCase().includes('bed');
  const isDining = (product.title || '').toLowerCase().includes('dining');
  const sizesList = isBed ? BED_SIZES : isDining ? DINING_SIZES : SOFA_SIZES;

  const colours = [
    { name: 'Beige', hex: '#d4c5a9' },
    { name: 'Blue', hex: '#4a6b82' },
    { name: 'Rust', hex: '#c4623f' },
    { name: 'Olive', hex: '#6b7c3e' },
    { name: 'Charcoal', hex: '#404040' },
  ];

  const offers = [
    { title: 'Bank Offer', desc: '10% off on HDFC Bank Credit Cards, up to ₹1,500' },
    { title: 'EMI Offer', desc: 'No Cost EMI starts from ₹4,167/month' },
    { title: 'Partner Offer', desc: 'Get GST Invoice & save up to 28% on business purchases' },
    { title: 'Combo Offer', desc: 'Buy 2 or more items, get extra 5% off' },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  const handleQuantityChange = (val) => {
    if (val >= 1 && val <= 10) {
      setQuantity(val);
    }
  };

  const handleCheckAvailability = () => {
    if (pincode.length === 6) {
      setAvailabilityMsg('available');
    } else {
      setAvailabilityMsg('invalid');
    }
  };

  const handleBuyNow = () => {
    onAddToCart();
    router.push('/cart');
  };

  return (
    <div className="product-info">
      {/* 1. Title */}
      <h1 className="pi-title">{product.title}</h1>

      {/* 2. Brand + Rating Row */}
      <div className="pi-brand-rating">
        <span className="pi-brand">By {product.brand || 'Divya Furniture World'}</span>
        <span className="pi-rating-badge">
          {product.rating || 4.7}
          <svg viewBox="0 0 12 12" fill="currentColor">
            <polygon points="6,0 7.9,3.8 12,4.4 9,7.4 9.7,11.5 6,9.5 2.3,11.5 3,7.4 0,4.4 4.1,3.8" />
          </svg>
        </span>
        <span className="pi-review-count">({product.reviewCount || 245} Reviews)</span>
      </div>

      <div className="pi-divider" />

      {/* 3. Colour Selection */}
      <div className="pi-option-group">
        <div className="pi-section-label">
          Colours: <span className="pi-selected-value">{selectedColor}</span>
        </div>
        <div className="pi-colour-options">
          {colours.map((c) => (
            <button
              key={c.name}
              type="button"
              className={`colour-swatch-btn ${selectedColor === c.name ? 'active' : ''}`}
              onClick={() => setSelectedColor(c.name)}
              title={c.name}
              aria-label={`Select ${c.name} colour`}
            >
              <span className="colour-swatch-inner" style={{ background: c.hex }} />
              <span className="colour-swatch-name">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Seating Capacity / Sizes Selection */}
      <div className="pi-option-group">
        <div className="pi-section-label">
          {isBed ? 'Size' : isDining ? 'Table Size' : 'Seating Capacity'}:{' '}
          <span className="pi-selected-value">{selectedCapacity}</span>
        </div>
        <div className="pi-capacity-options">
          {sizesList.map((size) => (
            <button
              key={size.name}
              type="button"
              className={`capacity-btn ${selectedCapacity === size.name ? 'active' : ''}`}
              onClick={() => setSelectedCapacity(size.name)}
            >
              {size.label}
            </button>
          ))}
        </div>

        {/* Selected size dimensions preview indicator */}
        {currentSizeData && (
          <div className="pi-size-dimension-badge">
            <span className="dim-icon">📐</span>
            <span className="dim-text">
              <strong>Dimensions:</strong> {currentSizeData.dimensions} &bull;{' '}
              <strong>Seat Height:</strong> {currentSizeData.seatHeight}
            </span>
          </div>
        )}
      </div>

      <div className="pi-divider" />

      {/* 5. Today's Deal Price */}
      <div className="pi-price-section">
        <div className="pi-deal-label">Today&apos;s Deal Price</div>
        <div className="pi-price-block">
          <span className="pi-sale-price">{formatPrice(currentPrice)}</span>
          <span className="pi-mrp">{formatPrice(currentMrp)}</span>
          <span className="pi-discount">{discount}% OFF</span>
        </div>
        <div className="pi-tax-note">
          Inclusive of all taxes &bull; Free Shipping &bull; 10-day replacement
        </div>
      </div>

      {/* 6. Available Offers Slider */}
      <div className="pi-offers-section">
        <div className="pi-section-label">Available Offers</div>
        <div className="pi-offers-scroll">
          {offers.map((offer, i) => (
            <div key={i} className="pi-offer-card">
              <div className="pi-offer-tag">
                <span className="offer-bullet">🏷</span>
                <strong>{offer.title}</strong>
              </div>
              <span className="offer-desc">{offer.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Quantity Selector */}
      <div className="pi-qty-row">
        <span className="pi-qty-label">Quantity:</span>
        <div className="pi-qty-selector">
          <button
            type="button"
            className="pi-qty-btn"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            className="pi-qty-input"
            type="number"
            value={quantity}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              if (!isNaN(v)) handleQuantityChange(v);
            }}
            min="1"
            max="10"
            aria-label="Current quantity"
          />
          <button
            type="button"
            className="pi-qty-btn"
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 10}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* 8. Delivery & Installation PIN code check */}
      <div className="pi-option-group">
        <div className="pi-section-label">Check Delivery &amp; Installation</div>
        <div className="pi-pincode-row">
          <input
            className="pi-pincode-input"
            type="text"
            placeholder="Enter 6-digit PIN code"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value.replace(/\D/g, '').slice(0, 6));
              setAvailabilityMsg('');
            }}
            maxLength={6}
          />
          <button
            type="button"
            className="pi-pincode-btn"
            onClick={handleCheckAvailability}
          >
            Check
          </button>
        </div>
        {availabilityMsg === 'available' && (
          <div className="pi-availability-msg available">
            ✓ Delivery &amp; free installation available to {pincode} within 3-5 business days.
          </div>
        )}
        {availabilityMsg === 'invalid' && (
          <div className="pi-availability-msg">
            Please enter a valid 6-digit PIN code.
          </div>
        )}
      </div>

      {/* 9. Advisory Alert Notice (matching Divya Furniture World) */}
      <div className="pi-advisory-banner">
        <span className="advisory-icon">⚠️</span>
        <span>
          Delivery timeline may get extended slightly due to high seasonal demand in select pin codes.
        </span>
      </div>

      {/* 10. Product Highlights Specification Table (matching Divya Furniture World) */}
      <div className="pi-option-group">
        <div className="pi-section-label">Product Highlights</div>
        <div className="pi-specs-table">
          <div className="spec-row">
            <span className="spec-label">Primary Material / Type</span>
            <span className="spec-val">{product.material || 'Premium Fabric'}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Seating Capacity / Variant</span>
            <span className="spec-val">{selectedCapacity}</span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Dimensions (W x D x H)</span>
            <span className="spec-val">
              {currentSizeData ? currentSizeData.dimensions : '208 cm x 91 cm x 93 cm'}
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Seat Height</span>
            <span className="spec-val">
              {currentSizeData ? currentSizeData.seatHeight : '48 cm'}
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Weight</span>
            <span className="spec-val">
              {currentSizeData ? currentSizeData.weight : '55.5 kg'}
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-label">Warranty</span>
            <span className="spec-val">36 Months</span>
          </div>
        </div>
      </div>

      {/* 11. 4 Value Proposition Badges */}
      <div className="pi-value-badges">
        <div className="value-badge-item">
          <span className="vb-icon">🛡️</span>
          <div className="vb-text">
            <strong>36 Months</strong>
            <span>Warranty</span>
          </div>
        </div>
        <div className="value-badge-item">
          <span className="vb-icon">🔧</span>
          <div className="vb-text">
            <strong>Free Assembly</strong>
            <span>&amp; Installation</span>
          </div>
        </div>
        <div className="value-badge-item">
          <span className="vb-icon">🔄</span>
          <div className="vb-text">
            <strong>Easy</strong>
            <span>Returns</span>
          </div>
        </div>
        <div className="value-badge-item">
          <span className="vb-icon">🏅</span>
          <div className="vb-text">
            <strong>100% Genuine</strong>
            <span>Products</span>
          </div>
        </div>
      </div>

      <div className="pi-divider" />

      {/* 12. Main Action Buttons */}
      <div className="pi-action-buttons">
        <button
          type="button"
          className={`btn-add-cart ${addedToCart ? 'success' : ''}`}
          onClick={onAddToCart}
        >
          {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
        <button type="button" className="btn-buy-now" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

