'use client';

import React, { useState, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import { useAuth } from '@/context/AuthContext';
import { newArrivalProducts } from '@/features/newarrivals/data/products';
import { bestBuysProducts } from '@/features/best-buys/data/products';
import './cart.css';

function FestiveTagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4773B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
  );
}

// Offers are only displayed when the business has configured a current campaign.
const OFFERS_LIST = [];
const APPLICABLE_COUPONS = [];

// New Arrivals products matching reference carousel
const NEW_ARRIVALS_PRODUCTS = newArrivalProducts.slice(0, 5);
const YOU_MAY_ALSO_LIKE = bestBuysProducts.slice(0, 5);

function CartContent() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    mrpTotal,
    totalDiscount,
    deliveryCharge,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useShop();

  const { isLoggedIn, openAuthModal } = useAuth();

  // Pincode Delivery state
  const [pincode, setPincode] = useState('');
  const [isEditingPin, setIsEditingPin] = useState(true);
  const [tempPin, setTempPin] = useState('');
  const [pinMessage, setPinMessage] = useState({
    type: 'info',
    text: 'Enter your PIN code and contact our team to confirm delivery availability.',
  });

  // Coupon Drawer / Modal state
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Share Notification state
  const [shareToast, setShareToast] = useState('');

  // Carousel refs for smooth horizontal scrolling
  const newArrivalsTrackRef = useRef(null);
  const youMayLikeTrackRef = useRef(null);

  const scrollTrack = (ref, distance = 300) => {
    if (ref.current) {
      ref.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  // Pincode validation handler
  const handlePincodeSubmit = (e) => {
    e.preventDefault();
    const cleanPin = tempPin.trim();
    if (!/^\d{6}$/.test(cleanPin)) {
      setPinMessage({ type: 'error', text: 'Please enter a valid 6-digit Indian PIN code' });
      return;
    }
    setPincode(cleanPin);
    setIsEditingPin(false);
    setPinMessage({
      type: 'info',
      text: `Delivery availability for ${cleanPin} needs confirmation. Submit an enquiry for details.`,
    });
  };

  const handleLocateMe = () => {
    setPinMessage({
      type: 'info',
      text: 'Automatic delivery lookup is not available. Enter your PIN code or submit an enquiry.',
    });
  };

  // Coupon application handler
  const handleApplyCoupon = (codeToApply) => {
    setCouponError('');
    setCouponSuccess('');
    const code = codeToApply || couponInput;
    try {
      const res = applyCoupon(code);
      setCouponSuccess(`Coupon ${res.code} applied successfully!`);
      setCouponInput('');
      setTimeout(() => setShowCouponModal(false), 800);
    } catch (err) {
      setCouponError(err.message || 'No active coupon codes are configured.');
    }
  };

  // Checkout navigation
  const handleProceedToBuy = () => {
    if (!isLoggedIn) {
      openAuthModal('cart', '/checkout');
    } else {
      router.push('/checkout');
    }
  };

  // Share cart handler
  const handleShareCart = async () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Divya Furniture World Cart',
          text: 'Check out my furniture selections from Divya Furniture World.',
          url: currentUrl,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setShareToast('Cart link copied to clipboard!');
      setTimeout(() => setShareToast(''), 3000);
    }
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const displayMRP = mrpTotal;
  const displaySubtotal = subtotal;
  const displayDiscount = totalDiscount;
  const displayPayable = finalTotal;
  const displaySavings = totalDiscount;

  return (
    <div className="ul-cart-page-wrapper">
      <div className="ul-cart-main-container">
        {/* 1. Breadcrumb Navigation: Home / Cart */}
        <nav className="ul-breadcrumb-bar" aria-label="Breadcrumb">
          <Link href="/" className="ul-breadcrumb-link">
            Home
          </Link>
          <span className="ul-breadcrumb-separator">/</span>
          <span className="ul-breadcrumb-active">Cart</span>
        </nav>

        {/* Share Toast Notification */}
        {shareToast && (
          <div className="ul-share-toast" role="status">
            <span>✓ {shareToast}</span>
          </div>
        )}

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="ul-cart-empty-view">
            <div className="ul-cart-empty-illustration">🛒</div>
            <h2 className="ul-empty-heading">Your Cart is Currently Empty</h2>
            <p className="ul-empty-subtext">
              Looks like you haven’t added any furniture or décor items to your cart yet. Browse the available collections to find something for your home.
            </p>
            <div className="ul-empty-actions-row">
              <Link href="/collection/clearance-sale" className="ul-btn-empty-primary">
                Explore Clearance Sale
              </Link>
              <Link href="/collection/new-arrivals" className="ul-btn-empty-secondary">
                View New Arrivals
              </Link>
            </div>
          </div>
        ) : (
          /* 2. Main Cart Layout: 70% Left Section & 30% Right Sidebar */
          <div className="ul-cart-grid-layout">
            {/* Left Section (Approx 70% width) */}
            <main className="ul-cart-left-column">
              {/* Delivery Location Section */}
              <section className="ul-cart-card ul-delivery-card" aria-labelledby="delivery-time-heading">
                <div className="ul-delivery-card-header">
                  <div>
                    <h2 id="delivery-time-heading" className="ul-card-title">
                      Check Delivery Availability
                    </h2>
                    <p className="ul-card-subtext">
                      Enter your PIN to enquire about delivery availability
                    </p>
                  </div>

                  <div className="ul-delivery-actions">
                    {isEditingPin ? (
                      <form onSubmit={handlePincodeSubmit} className="ul-pin-edit-form">
                        <input
                          type="text"
                          maxLength={6}
                          value={tempPin}
                          onChange={(e) => setTempPin(e.target.value.replace(/\D/g, ''))}
                          placeholder="6-digit PIN"
                          className="ul-pin-input-field"
                          autoFocus
                        />
                        <button type="submit" className="ul-btn-pin-apply">
                          Apply
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setTempPin(pincode);
                            setIsEditingPin(false);
                          }}
                          className="ul-btn-pin-cancel"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <div className="ul-pin-display-box">
                        <span className="ul-pin-code-text">                        {pincode || 'PIN not entered'}</span>
                        <button
                          type="button"
                          onClick={() => setIsEditingPin(true)}
                          className="ul-btn-change-pin"
                        >
                          Change
                        </button>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={handleLocateMe}
                      className="ul-btn-locate"
                      title="Ask about delivery availability"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                      </svg>
                      <span>Ask</span>
                    </button>
                  </div>
                </div>

                {pinMessage && (
                  <div className={`ul-pin-message ${pinMessage.type}`}>
                    <span>{pinMessage.text}</span>
                    <Link href="/enquiry" className="ul-btn-change-pin">
                      Submit an enquiry
                    </Link>
                  </div>
                )}
              </section>

              {/* Available Offers Section */}
              <section className="ul-cart-card ul-offers-card" aria-labelledby="offers-heading">
                <div className="ul-offers-header">
                  <div className="ul-offers-title-group">
                    <div className="ul-offer-icon-circle">
                      <FestiveTagIcon />
                    </div>
                    <div>
                      <h2 id="offers-heading" className="ul-card-title">
                        Current Offers
                      </h2>
                      <span className="ul-offers-badge">
                        {OFFERS_LIST.length ? `${OFFERS_LIST.length} active offers` : 'No active offers'}
                      </span>
                    </div>
                  </div>

                </div>

                <div className="ul-offers-horizontal-track">
                  {OFFERS_LIST.map((offer) => (
                    <div
                      key={offer.id}
                      className="ul-offer-tile"
                      onClick={() => handleApplyCoupon(offer.code)}
                      title={`Click to copy or apply code: ${offer.code}`}
                    >
                      <div className="ul-offer-tile-top">
                        <div className="ul-offer-bank-logo">{offer.icon}</div>
                        <span className="ul-offer-bank-name">{offer.bank}</span>
                      </div>
                      <p className="ul-offer-tile-desc">{offer.text}</p>
                    </div>
                  ))}
                  {!OFFERS_LIST.length && (
                    <p className="ul-offer-tile-desc">
                      No current promotional offers are configured. Check back or contact our team.
                    </p>
                  )}
                </div>
              </section>

              {/* Your Cart Section */}
              <section className="ul-cart-card ul-items-card" aria-labelledby="your-cart-heading">
                <div className="ul-items-section-header">
                  <h2 id="your-cart-heading" className="ul-card-title ul-items-count-heading">
                    Your Cart <span className="ul-items-count">({totalCartItems} {totalCartItems === 1 ? 'Item' : 'Items'})</span>
                  </h2>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="ul-btn-clear-cart"
                  >
                    Clear Cart
                  </button>
                </div>

                <div className="ul-cart-products-list">
                  {cart.map((item) => {
                    const itemId = item.id || item.href || item.title;
                    const inWish = isInWishlist(itemId);

                    return (
                      <article key={itemId} className="ul-product-row">
                        <div className="ul-product-main-block">
                          {/* Left: Product Image */}
                          <Link href={item.href || '#'} className="ul-product-image-container">
                            <img
                              src={item.image || '/images/new-arrivals/products/24-paloma-8-seater-pluto-spanish-ceramic-dining-table-9002930-9119073.avif'}
                              alt={item.title}
                              className="ul-product-image"
                              onError={(e) => {
                                e.target.src = '/images/new-arrivals/products/24-paloma-8-seater-pluto-spanish-ceramic-dining-table-9002930-9119073.avif';
                              }}
                            />
                          </Link>

                          {/* Right: Product Details & Controls */}
                          <div className="ul-product-content">
                            {/* Top row: Title and Wishlist Heart */}
                            <div className="ul-product-header-row">
                              <Link href={item.href || '#'} className="ul-product-title-link">
                                <h3 className="ul-product-title">{item.title}</h3>
                              </Link>
                              <button
                                type="button"
                                className={`ul-btn-wishlist-action ${inWish ? 'active' : ''}`}
                                onClick={() => {
                                  if (inWish) {
                                    removeFromWishlist(itemId);
                                  } else {
                                    addToWishlist(item);
                                  }
                                }}
                                title={inWish ? 'Remove from Wishlist' : 'Save to Wishlist'}
                                aria-label="Toggle wishlist"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill={inWish ? '#F4773B' : 'none'}
                                  stroke={inWish ? '#F4773B' : '#6B7280'}
                                  strokeWidth="1.8"
                                >
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                              </button>
                            </div>

                            {/* Second row: Brand and Trash delete icon */}
                            <div className="ul-product-brand-row">
                              <button
                                type="button"
                                className="ul-btn-remove-trash"
                                onClick={() => removeFromCart(itemId)}
                                title="Remove item from cart"
                                aria-label="Remove item"
                              >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="3 6 5 6 21 6"></polyline>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                  <line x1="10" y1="11" x2="10" y2="17"></line>
                                  <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                              </button>
                            </div>

                            {/* Third row: Finish & Variant details */}
                            <div className="ul-product-variants-row">
                              <span className="ul-variant-pill">
                                FINISH NAME: {item.finish || item.color || 'PLUTO SPANISH CERAMIC'}
                              </span>
                            </div>

                            {/* Fourth row: Price block */}
                            <div className="ul-product-price-row">
                              <span className="ul-price-current">{item.salePrice || '₹99,999'}</span>
                              <span className="ul-price-mrp">{item.mrp || '₹1,99,999'}</span>
                              <span className="ul-price-discount-tag">
                                (50% OFF)
                              </span>
                            </div>

                            {/* Fifth row: Boxed Quantity Stepper */}
                            <div className="ul-product-qty-stepper-row">
                              <div className="ul-qty-stepper-box">
                                <button
                                  type="button"
                                  className="ul-qty-btn"
                                  onClick={() => updateQuantity(itemId, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                                <span className="ul-qty-number">
                                  {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
                                </span>
                                <button
                                  type="button"
                                  className="ul-qty-btn"
                                  onClick={() => updateQuantity(itemId, item.quantity + 1)}
                                  disabled={item.quantity >= 10}
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Delivery Date & Cancellation Policy bar */}
                        <div className="ul-product-footer-bar">
                          <div className="ul-delivery-date-tag">
                            <span className="ul-icon-truck">🚚</span>
                            {item.deliveryDate && <span>Estimated delivery: {item.deliveryDate}</span>}
                          </div>
                          <div className="ul-cancellation-tag">
                            <span className="ul-icon-refresh">🔄</span>
                            {item.cancellationPolicy && <span>{item.cancellationPolicy}</span>}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </main>

            {/* Right Sidebar (Approx 30% width) */}
            <aside className="ul-cart-right-sidebar">
              {/* Coupons & Rewards Section */}
              <div
                className="ul-cart-card ul-coupons-rewards-card"
                onClick={() => setShowCouponModal(true)}
                role="button"
                tabIndex={0}
                aria-label="Open coupons and rewards"
              >
                <div className="ul-coupon-badge-circle">
                  <span>%</span>
                </div>
                <div className="ul-coupon-card-text">
                  <h3 className="ul-coupon-card-heading">Apply Coupon</h3>
                  <span className="ul-coupon-count-text">
                        {APPLICABLE_COUPONS.length} active coupons
                      </span>
                </div>
                <span className="ul-chevron-arrow">›</span>
              </div>

              {/* Applied Coupon Pill if active */}
              {appliedCoupon && (
                <div className="ul-applied-coupon-pill">
                  <div className="ul-applied-coupon-info">
                    <span className="ul-pill-icon">🎉</span>
                    <div>
                      <strong>{appliedCoupon.code}</strong>
                      <span className="ul-applied-desc">(-₹{appliedCoupon.discount.toLocaleString('en-IN')})</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCoupon();
                    }}
                    className="ul-btn-remove-coupon"
                    aria-label="Remove coupon"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Price Summary Section */}
              <div className="ul-cart-card ul-price-summary-card">
                <h2 className="ul-summary-title">
                  Price Summary <span className="ul-summary-items-count">({totalCartItems} {totalCartItems === 1 ? 'Item' : 'Items'})</span>
                </h2>

                <div className="ul-summary-rows-group">
                  <div className="ul-summary-row">
                    <span className="ul-row-label">Total MRP</span>
                    <span className="ul-row-value">₹{displayMRP.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="ul-summary-row ul-discount-row">
                    <span className="ul-row-label">Discount</span>
                    <span className="ul-row-value ul-discount-value">-₹{displayDiscount.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="ul-summary-row">
                    <span className="ul-row-label">Subtotal</span>
                    <span className="ul-row-value">₹{displaySubtotal.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="ul-summary-row">
                    <span className="ul-row-label">Delivery Charge</span>
                    <span className="ul-row-value">
                      {deliveryCharge ? `₹${deliveryCharge.toLocaleString('en-IN')}` : 'To be confirmed'}
                    </span>
                  </div>

                  <div className="ul-summary-divider"></div>

                  <div className="ul-summary-row ul-payable-row">
                    <span className="ul-payable-label">Product Total</span>
                    <span className="ul-payable-value">₹{displayPayable.toLocaleString('en-IN')}.00</span>
                  </div>
                </div>
                <p className="ul-summary-note">Delivery charges and availability are confirmed for your location.</p>

                {/* Green Savings Notification */}
                {displaySavings > 0 && (
                  <div className="ul-savings-notification-box">
                    <span>Product savings: ₹{displaySavings.toLocaleString('en-IN')}.00</span>
                  </div>
                )}

                {/* Full-Width Orange Proceed to Buy / Login Button */}
                <button
                  type="button"
                  className="ul-btn-proceed-buy"
                  onClick={handleProceedToBuy}
                >
                  {isLoggedIn ? 'PROCEED TO BUY' : 'LOGIN'}
                </button>
              </div>

              {/* Share Your Cart Section */}
              <div className="ul-cart-card ul-share-cart-card">
                <div className="ul-share-left">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  <span className="ul-share-label">Share your cart</span>
                </div>
                <button
                  type="button"
                  onClick={handleShareCart}
                  className="ul-btn-share-action"
                >
                  Share
                </button>
              </div>
            </aside>
          </div>
        )}

        <section className="ul-emi-promo-banner" aria-label="Payment information">
          <div className="ul-emi-banner-content">
            <h2 className="ul-emi-banner-title">Payment Options</h2>
            <p>
              Payment methods are confirmed at checkout. Contact our team if you need help with payment options.
            </p>
          </div>
        </section>

        {/* 4. New Arrivals Product Carousel */}
        <section className="ul-products-carousel-section" aria-labelledby="new-arrivals-heading">
          <div className="ul-section-header-row">
            <h2 id="new-arrivals-heading" className="ul-section-carousel-title">
              New Arrivals, Curated for Every Corner
            </h2>
            <Link href="/collection/new-arrivals" className="ul-view-all-link">
              View All
            </Link>
          </div>

          <div className="ul-carousel-relative-container">
            <div className="ul-products-carousel-track" ref={newArrivalsTrackRef}>
              {NEW_ARRIVALS_PRODUCTS.map((prod) => (
                <div key={prod.id} className="ul-product-carousel-card">
                  <Link href={prod.href} className="ul-card-image-wrap">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="ul-card-img"
                    />
                  </Link>
                  <div className="ul-card-info">
                    <Link href={prod.href} className="ul-card-title-link">
                      <h3 className="ul-card-title">{prod.title}</h3>
                    </Link>
                    <div className="ul-card-price-row">
                      <span className="ul-card-sale-price">{prod.salePrice}</span>
                      <span className="ul-card-mrp-price">{prod.mrp}</span>
                      <span className="ul-card-discount-tag">{prod.discount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="ul-carousel-nav-arrow-right"
              onClick={() => scrollTrack(newArrivalsTrackRef, 270)}
              aria-label="Next New Arrivals"
            >
              ›
            </button>
          </div>
        </section>

        {/* 5. You May Also Like Product Carousel */}
        <section className="ul-products-carousel-section" aria-labelledby="you-may-like-heading">
          <div className="ul-section-header-row">
            <h2 id="you-may-like-heading" className="ul-section-carousel-title">
              You May Also Like
            </h2>
            <Link href="/collection/bookshelves" className="ul-view-all-link">
              View All
            </Link>
          </div>

          <div className="ul-carousel-relative-container">
            <div className="ul-products-carousel-track" ref={youMayLikeTrackRef}>
              {YOU_MAY_ALSO_LIKE.map((prod) => (
                <div key={prod.id} className="ul-product-carousel-card">
                  <Link href={prod.href} className="ul-card-image-wrap">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="ul-card-img"
                    />
                  </Link>
                  <div className="ul-card-info">
                    <Link href={prod.href} className="ul-card-title-link">
                      <h3 className="ul-card-title">{prod.title}</h3>
                    </Link>
                    <div className="ul-card-price-row">
                      <span className="ul-card-sale-price">{prod.salePrice}</span>
                      <span className="ul-card-mrp-price">{prod.mrp}</span>
                      <span className="ul-card-discount-tag">{prod.discount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="ul-carousel-nav-arrow-right"
              onClick={() => scrollTrack(youMayLikeTrackRef, 270)}
              aria-label="Next Recommendations"
            >
              ›
            </button>
          </div>
        </section>

        {/* 6. Bottom Promotional Banners */}
        {/* Banner 1: Clearance Sale */}
        <section className="ul-clearance-banner-card" aria-label="Clearance Sale Promotion">
          <div className="ul-clearance-banner-grid">
            <div className="ul-clearance-media">
              <img
                src="/images/clearance-desk-banner.jpg"
                alt="Clearance Sale Modern Study Desk Setup"
                className="ul-clearance-img"
              />
            </div>
            <div className="ul-clearance-content">
              <h2 className="ul-clearance-heading">CLEARANCE SALE</h2>
              <p className="ul-clearance-sub">Explore furniture and home options from our current collection.</p>
              <Link href="/collection/clearance-sale" className="ul-btn-shop-now">
                SHOP NOW
              </Link>
            </div>
          </div>
        </section>

        {/* Banner 2: 50+ Stores Across India */}
        <section className="ul-stores-banner-card" aria-label="Explore Stores Near You">
          <div className="ul-stores-banner-grid">
            <div className="ul-stores-content-side">
              <span className="ul-stores-pill-badge">Bhimavaram</span>
              <h2 className="ul-stores-heading">Check service availability</h2>
              <p className="ul-stores-subtext">Choose your city to enquire about available services.</p>
            </div>
            <div className="ul-stores-media-side">
              <img
                src="/images/store-interior-banner.jpg"
                alt="Divya Furniture World store interior"
                className="ul-stores-img"
              />
              <Link href="/sections/stores" className="ul-stores-circle-btn" aria-label="View stores">
                →
              </Link>
            </div>
          </div>
        </section>

        {/* Banner 3: Book a Free Design Consultation */}
        <section className="ul-consultation-banner-card" aria-label="Free Home Interior Design Consultation">
          <div className="ul-consultation-banner-grid">
            <div className="ul-consultation-text-side">
              <h2 className="ul-consultation-heading">
                Need help choosing furniture?
              </h2>
              <p className="ul-consultation-sub">Contact our team with your enquiry.</p>
              <Link href="/enquiry" className="ul-btn-consultation">
                <span>Contact Our Team</span>
                <span className="ul-consultation-arrow-circle">➔</span>
              </Link>
            </div>
            <div className="ul-consultation-media-side">
              <img
                src="/images/consultation-kitchen-banner.jpg"
                alt="Luxury Modular Kitchen Interior Consultation"
                className="ul-consultation-img"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Floating Orange Consultation / Help Widget Button on Right */}
      <div className="ul-floating-widget-wrap">
        <Link href="/enquiry" className="ul-floating-orange-btn" title="Contact our team">
          <span>💬</span>
        </Link>
      </div>

      {/* Coupons & Rewards Modal Drawer */}
      {showCouponModal && (
        <div className="ul-coupon-modal-backdrop" onClick={() => setShowCouponModal(false)}>
          <div className="ul-coupon-modal-panel" onClick={(e) => e.stopPropagation()}>
            <div className="ul-coupon-modal-header">
              <h3>Coupons & Offers</h3>
              <button
                type="button"
                className="ul-btn-modal-close"
                onClick={() => setShowCouponModal(false)}
                aria-label="Close coupons"
              >
                ✕
              </button>
            </div>

            <div className="ul-coupon-modal-body">
              {APPLICABLE_COUPONS.length > 0 ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleApplyCoupon();
                  }}
                  className="ul-coupon-input-form"
                >
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    className="ul-coupon-text-field"
                  />
                  <button type="submit" className="ul-btn-coupon-submit">
                    APPLY
                  </button>
                </form>
              ) : (
                <p>No active coupon codes are configured at this time.</p>
              )}

              {couponError && <p className="ul-coupon-alert error">⚠️ {couponError}</p>}
              {couponSuccess && <p className="ul-coupon-alert success">✓ {couponSuccess}</p>}

              <h4 className="ul-available-coupons-title">Current Coupons</h4>
              <div className="ul-coupons-list">
                {APPLICABLE_COUPONS.map((c) => (
                  <div key={c.code} className="ul-coupon-item-tile">
                    <div className="ul-coupon-item-info">
                      <div className="ul-coupon-code-tag">{c.code}</div>
                      <strong className="ul-coupon-discount-text">{c.discountText}</strong>
                      <span className="ul-coupon-min-order">{c.minOrder}</span>
                      <p className="ul-coupon-desc">{c.desc}</p>
                    </div>
                    <button
                      type="button"
                      className="ul-btn-tile-apply"
                      onClick={() => handleApplyCoupon(c.code)}
                    >
                      APPLY
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense fallback={<div className="ul-cart-loading">Loading Cart...</div>}>
      <CartContent />
    </Suspense>
  );
}
