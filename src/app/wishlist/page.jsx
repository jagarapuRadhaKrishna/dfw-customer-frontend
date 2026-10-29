'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useShop } from '@/context/ShopContext';
import { useAuth } from '@/context/AuthContext';
import './wishlist.css';

function WishlistContent() {
  const router = useRouter();
  const { wishlist, removeFromWishlist, moveToCart } = useShop();
  const { isLoggedIn } = useAuth();

  // If user is not logged in, prompt them to log in or register
  if (!isLoggedIn) {
    return (
      <div className="wishlist-container">
        <div className="wishlist-auth-prompt">
          <div className="prompt-heart-icon">❤️</div>
          <h2>Please Log In</h2>
          <p>Login or create an account to view and save your favorite furniture pieces.</p>
          <div className="auth-prompt-buttons">
            <Link href="/login?redirect=/wishlist" className="btn-wishlist-login">
              Login to Account
            </Link>
            <Link href="/register?redirect=/wishlist" className="btn-wishlist-register">
              Register as a New User
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <span aria-current="page">My Wishlist</span>
      </nav>

      {/* Header */}
      <div className="wishlist-header">
        <div>
          <h1 className="wishlist-title">My Saved Items</h1>
          <p className="wishlist-count">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved in your wishlist
          </p>
        </div>
      </div>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <div className="wishlist-empty-state">
          <div className="empty-heart-icon">🤍</div>
          <h2>Your Wishlist is Empty</h2>
          <p>Explore our wide collection of furniture and decor to save your favorite designs.</p>
          <Link href="/collection/clearance-sale" className="btn-explore-furniture">
            Start Exploring Furniture
          </Link>
        </div>
      ) : (
        /* Wishlist Grid */
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id || item.href} className="wishlist-card">
              <button
                type="button"
                className="btn-remove-wishlist"
                onClick={() => removeFromWishlist(item.id || item.href)}
                aria-label={`Remove ${item.title} from wishlist`}
                title="Remove item"
              >
                ✕
              </button>

              <Link href={item.href || '#'} className="wishlist-image-wrap">
                {item.badge && (
                  <span className="wishlist-badge">{item.badge}</span>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  className="wishlist-image"
                  onError={(e) => (e.target.src = '/images/logo.png')}
                />
              </Link>

              <div className="wishlist-card-content">
                <Link href={item.href || '#'} className="wishlist-product-title">
                  <h3>{item.title}</h3>
                </Link>

                <div className="wishlist-pricing">
                  <span className="wishlist-sale-price">{item.salePrice}</span>
                  {item.mrp && <span className="wishlist-mrp">{item.mrp}</span>}
                </div>

                <div className="wishlist-offer-tag">
                  🏷️ Extra ₹1,000 Off with code <strong>FESTIVE1000</strong>
                </div>

                <div className="wishlist-actions">
                  <button
                    type="button"
                    className="btn-move-to-cart"
                    onClick={() => moveToCart(item)}
                  >
                    🛒 Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WishlistPage() {
  return (
    <Suspense fallback={<div className="wishlist-loading">Loading Wishlist...</div>}>
      <WishlistContent />
    </Suspense>
  );
}
