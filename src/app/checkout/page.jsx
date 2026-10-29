'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import { useAuth } from '@/context/AuthContext';
import './checkout.css';

function CheckoutContent() {
  const router = useRouter();
  const { cart, clearCart, subtotal, totalDiscount, deliveryCharge, finalTotal } = useShop();
  const { user, isLoggedIn, updateProfile } = useAuth();

  const [selectedAddressId, setSelectedAddressId] = useState(
    user?.addresses?.[0]?.id || 'addr_default'
  );
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  // Address inputs if user has none
  const [guestName, setGuestName] = useState(user?.name || '');
  const [guestStreet, setGuestStreet] = useState(user?.addresses?.[0]?.street || '');
  const [guestCity, setGuestCity] = useState(user?.addresses?.[0]?.city || '');
  const [guestState, setGuestState] = useState(user?.addresses?.[0]?.state || '');
  const [guestPincode, setGuestPincode] = useState(user?.addresses?.[0]?.pincode || '');
  const [guestPhone, setGuestPhone] = useState(user?.phone || '');

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="checkout-container">
        <div className="checkout-empty-state">
          <span className="empty-icon">🛋️</span>
          <h2>Your Cart is Empty</h2>
          <p>Please add furniture products to your cart before proceeding to checkout.</p>
          <Link href="/collection/clearance-sale" className="btn-return-shop">
            Browse Festive Sale
          </Link>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!guestName || !guestStreet || !guestCity || !guestPincode) {
      alert('Please fill in your complete delivery address.');
      return;
    }

    setIsPlacingOrder(true);

    setTimeout(() => {
      const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      const newOrder = {
        id: orderId,
        date: new Date().toISOString().split('T')[0],
        status: 'Request submitted - confirmation required',
        total: `₹${finalTotal.toLocaleString('en-IN')}`,
        items: cart.map((item) => ({
          id: item.id || item.href,
          title: item.title,
          price: item.salePrice,
          quantity: item.quantity,
          image: item.image,
        })),
        deliveryAddress: {
          name: guestName,
          street: guestStreet,
          city: guestCity,
          state: guestState,
          pincode: guestPincode,
          phone: guestPhone,
        },
      };

      if (isLoggedIn && user) {
        const updatedOrders = [newOrder, ...(user.orders || [])];
        updateProfile({ orders: updatedOrders });
      }

      setOrderComplete(newOrder);
      clearCart();
      setIsPlacingOrder(false);
    }, 1500);
  };

  if (orderComplete) {
    return (
      <div className="checkout-container">
        <div className="order-success-card">
          <div className="success-icon">🎉</div>
          <h1>Order Request Submitted</h1>
          <p className="order-success-msg">
            This checkout records your order request in this browser only. No payment has been processed. Contact our team to confirm the order, delivery, and payment details.
          </p>

          <div className="order-summary-box">
            <div className="summary-field">
              <span>Order Number</span>
              <strong>{orderComplete.id}</strong>
            </div>
            <div className="summary-field">
              <span>Order Date</span>
              <strong>{orderComplete.date}</strong>
            </div>
            <div className="summary-field">
              <span>Product Subtotal</span>
              <strong>{orderComplete.total}</strong>
            </div>
            <div className="summary-field">
              <span>Payment Status</span>
              <strong>To be confirmed</strong>
            </div>
          </div>

          <div className="success-actions">
            <Link href="/profile?tab=orders" className="btn-view-orders">
              View Request
            </Link>
            <Link href="/" className="btn-back-home">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <Link href="/cart">Cart</Link>
        <span className="separator">/</span>
        <span aria-current="page">Checkout</span>
      </nav>

      <div className="checkout-header">
        <h1>Review Your Order</h1>
        <p>Enter your delivery details and submit an order request.</p>
      </div>

      <form onSubmit={handlePlaceOrder} className="checkout-layout">
        {/* Left Column: Delivery & Payment */}
        <div className="checkout-forms-section">
          {/* Step 1: Delivery Address */}
          <section className="checkout-card">
            <div className="card-step-title">
              <span className="step-num">1</span>
              <h2>Delivery Address</h2>
            </div>

            <div className="address-form-fields">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Recipient's Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Street Address, Building, House No. *</label>
                <input
                  type="text"
                  value={guestStreet}
                  onChange={(e) => setGuestStreet(e.target.value)}
                  placeholder="e.g. 42, Koramangala 4th Block"
                  required
                />
              </div>

              <div className="form-row-3">
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    value={guestCity}
                    onChange={(e) => setGuestCity(e.target.value)}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    value={guestState}
                    onChange={(e) => setGuestState(e.target.value)}
                    placeholder="State"
                  />
                </div>
                <div className="form-group">
                  <label>Pincode *</label>
                  <input
                    type="text"
                    value={guestPincode}
                    onChange={(e) => setGuestPincode(e.target.value)}
                    placeholder="PIN code"
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Step 2: Payment Options */}
          <section className="checkout-card">
            <div className="card-step-title">
              <span className="step-num">2</span>
              <h2>Payment Options</h2>
            </div>

            <p>
              Pay using the payment methods supported at checkout. Contact our team if you need help with payment options. No payment is processed through this checkout.
            </p>
          </section>
        </div>

        {/* Right Column: Order Review & Total */}
        <aside className="checkout-summary-sidebar">
          <div className="checkout-summary-card">
            <h3>Items in Order ({cart.length})</h3>

            <div className="checkout-items-preview">
              {cart.map((item) => (
                <div key={item.id || item.href} className="preview-item">
                  <img src={item.image} alt={item.title} onError={(e) => (e.target.src = '/images/logo.png')} />
                  <div className="preview-details">
                    <span className="preview-title">{item.title}</span>
                    <span className="preview-meta">Qty: {item.quantity} | {item.salePrice}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout-price-list">
              <div className="price-line">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {totalDiscount > 0 && (
                <div className="price-line discount">
                  <span>Savings</span>
                  <span>- ₹{totalDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="price-line">
                <span>Delivery</span>
                <span>{deliveryCharge ? `₹${deliveryCharge}` : 'To be confirmed'}</span>
              </div>
              <div className="price-line grand-total">
                <span>Product Subtotal</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn-place-order"
              disabled={isPlacingOrder}
            >
              {isPlacingOrder ? 'Submitting Request...' : `Submit Order Request (₹${finalTotal.toLocaleString('en-IN')})`}
            </button>

            <p className="checkout-guarantee">
              Delivery charges and service availability are confirmed for your location.
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="checkout-loading">Preparing checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
