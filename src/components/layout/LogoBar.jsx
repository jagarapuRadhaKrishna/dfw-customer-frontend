'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useShop } from '@/context/ShopContext';
import './LogoBar.css';

export default function LogoBar() {
  const router = useRouter();
  const { user, isLoggedIn, logout, openAuthModal } = useAuth();
  const { totalCartCount, wishlistCount } = useShop();

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      router.push('/wishlist');
    } else {
      openAuthModal('wishlist', '/wishlist');
    }
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      router.push('/cart');
    } else {
      openAuthModal('cart', '/cart');
    }
  };

  return (
    <>
      <div className="KllZJ">
        <div className="JB3oi">
          <div className="o7hHq">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
              <mask id="hamburger-icon_svg__a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }}>
                <path fill="#D9D9D9" d="M0 0h24v24H0z"></path>
              </mask>
              <g mask="url(#hamburger-icon_svg__a)">
                <path fill="#304858" d="M4.25 17.635a.73.73 0 0 1-.534-.216.73.73 0 0 1-.216-.535q0-.318.216-.534a.73.73 0 0 1 .534-.215h15.5q.318 0 .534.215a.73.73 0 0 1 .216.535q0 .319-.216.534a.73.73 0 0 1-.534.216zm0-4.885a.73.73 0 0 1-.534-.216A.73.73 0 0 1 3.5 12q0-.319.216-.534a.73.73 0 0 1 .534-.216h15.5q.318 0 .534.216A.73.73 0 0 1 20.5 12q0 .32-.216.535a.73.73 0 0 1-.534.215zm0-4.885a.73.73 0 0 1-.534-.215.73.73 0 0 1-.216-.535q0-.318.216-.534a.73.73 0 0 1 .534-.216h15.5q.318 0 .534.216a.73.73 0 0 1 .216.535q0 .318-.216.534a.73.73 0 0 1-.534.215z"></path>
              </g>
            </svg>
          </div>

          <div>
            <Link href="/" data-testid="header-logo" className="logo-container">
              <img
                src="/images/logo.png"
                className="vMDdy"
                alt="DIVYA FURNITURE WORLD Logo"
                loading="lazy"
              />
              <span className="logo-divider" aria-hidden="true"></span>
              <span className="brand-name">
                <span>DIVYA</span>
                <span>FURNITURE WORLD</span>
              </span>
            </Link>
          </div>

          <div className="HvXT8">
            <ul className="nIsd8">
              <li className="UlboM" data-testid="navigation-desktop-category-top-0">
                <Link href="/sections/business-furniture">Business Furniture</Link>
              </li>
              <li className="UlboM is-active" data-testid="navigation-desktop-category-top-1">
                <Link href="/sections/rental-services">Rental Services</Link>
              </li>
              <li className="UlboM" data-testid="navigation-desktop-category-top-2">
                <Link href="/sections/repair-services">Repair Services</Link>
              </li>
            </ul>
          </div>

          <div className="fMxzb wDPf1">
            <div className="hHN7o false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="DL4_q">
                <path fill="#7D7D7D" d="M11 18q2.9 0 4.95-2.042T18 11q0-2.9-2.05-4.95T11 4Q8.085 4 6.042 6.05 4 8.1 4 11q0 2.915 2.042 4.958Q8.084 18 11 18m0 1.5a8.3 8.3 0 0 1-3.315-.67 8.6 8.6 0 0 1-2.697-1.818 8.6 8.6 0 0 1-1.819-2.697A8.3 8.3 0 0 1 2.5 11q0-1.755.67-3.3a8.542 8.542 0 0 1 4.515-4.53A8.3 8.3 0 0 1 11 2.5q1.755 0 3.3.67a8.6 8.6 0 0 1 2.704 1.826A8.6 8.6 0 0 1 18.83 7.7q.669 1.545.669 3.3a8.2 8.2 0 0 1-.53 2.948 8.9 8.9 0 0 1-1.464 2.514l3.477 3.477a.67.67 0 0 1 .21.517.758.758 0 0 1-1.28.517l-3.467-3.452a8.7 8.7 0 0 1-2.513 1.457A8.3 8.3 0 0 1 11 19.5"></path>
              </svg>
              <div className="KdPL9">
                <p id="search-input-dynamic-help" className="sr-only">
                  Suggestions and links related to your search appear below this field and update as you type.
                </p>
                <input
                  type="text"
                  id="searchInput"
                  aria-describedby="search-input-dynamic-help"
                  autoComplete="off"
                  placeholder="Search furniture, decor, beds, sofas..."
                  title="Search"
                  className="cO_Ea"
                  defaultValue=""
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      router.push(`/collection/clearance-sale?search=${encodeURIComponent(e.target.value.trim())}`);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <ul className="wa6H6">
            {/* Store Locator */}
            <li className="dTPkp" data-testid="header-store-icon">
              <Link aria-label="View store" href="/stores" title="Stores">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path fill="#304858" d="M5.073 20.75q-.758 0-1.283-.525a1.75 1.75 0 0 1-.525-1.283v-7.988a3.03 3.03 0 0 1-.906-1.288q-.303-.791-.013-1.708l1.012-3.304q.2-.63.679-1.017.478-.387 1.144-.387h13.65q.665 0 1.136.37.472.368.687 1.015l1.03 3.323q.291.917-.012 1.703a3.3 3.3 0 0 1-.907 1.312v7.97q0 .756-.524 1.282-.525.525-1.283.525zm9.143-10.5q.819 0 1.231-.501t.338-1.076l-.608-3.923h-2.411V8.7q0 .63.426 1.09.427.46 1.024.46m-4.5 0q.69 0 1.12-.46t.43-1.09V4.75H8.854l-.608 3.962q-.08.532.335 1.035t1.134.503m-4.45 0q.555 0 .955-.387a1.7 1.7 0 0 0 .494-.975l.589-4.138H5.181a.42.42 0 0 0-.26.072.43.43 0 0 0-.144.216l-.962 3.254q-.198.645.187 1.301.385.657 1.263.657m13.5 0q.81 0 1.242-.637.43-.639.207-1.32l-1.011-3.274a.38.38 0 0 0-.144-.207.47.47 0 0 0-.26-.062h-2.073l.588 4.138q.095.586.495.975.4.387.956.387m-13.693 9h13.885a.3.3 0 0 0 .22-.087.3.3 0 0 0 .087-.22V11.66q-.163.06-.273.075-.109.014-.227.014a2.7 2.7 0 0 1-1.187-.244q-.513-.245-.993-.783-.421.47-.996.748a3 3 0 0 1-1.312.279 2.8 2.8 0 0 1-1.2-.264 3.8 3.8 0 0 1-1.062-.763 3.3 3.3 0 0 1-1.05.762 2.9 2.9 0 0 1-1.188.265q-.676 0-1.27-.245a2.7 2.7 0 0 1-1.042-.782q-.63.63-1.162.829t-1.038.198q-.117 0-.242-.014a.9.9 0 0 1-.258-.075v7.281a.3.3 0 0 0 .087.221.3.3 0 0 0 .221.087"></path>
                </svg>
              </Link>
            </li>

            {/* Profile / Account Icon & Dropdown */}
            <li className="header-nav-item profile-nav-wrapper" ref={profileRef}>
              <button
                type="button"
                aria-label={isLoggedIn ? `Account (${user?.name})` : 'Open account menu'}
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                className={`dTPkp header-icon-btn ${profileOpen ? 'active' : ''}`}
                data-testid="header-profile-icon"
                onClick={() => setProfileOpen((prev) => !prev)}
              >
                {isLoggedIn ? (
                  <span className="profile-user-avatar" title={user?.name}>
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path fill="#304858" d="M12 12.75q-1.37 0-2.31-.94T8.75 9.5t.94-2.31T12 6.25t2.31.94.94 2.31-.94 2.31-2.31.94m0 8.75a9.3 9.3 0 0 1-3.713-.744 9.5 9.5 0 0 1-3.016-2.027 9.5 9.5 0 0 1-2.027-3.016A9.3 9.3 0 0 1 2.5 12q0-1.98.744-3.713a9.5 9.5 0 0 1 2.027-3.016 9.5 9.5 0 0 1 3.016-2.027A9.3 9.3 0 0 1 12 2.5a9.3 9.3 0 0 1 3.713.744 9.5 9.5 0 0 1 3.016 2.027 9.5 9.5 0 0 1 2.027 3.016A9.3 9.3 0 0 1 21.5 12a9.3 9.3 0 0 1-.744 3.713 9.5 9.5 0 0 1-2.027 3.016 9.5 9.5 0 0 1-3.016 2.027A9.3 9.3 0 0 1 12 21.5m0-1.5q1.354 0 2.61-.436a7.4 7.4 0 0 0 2.232-1.218 7.6 7.6 0 0 0-2.203-1.175A8.1 8.1 0 0 0 12 16.75a8.2 8.2 0 0 0-2.644.416 7.3 7.3 0 0 0-2.198 1.18q.975.783 2.231 1.218Q10.646 20 12 20m0-8.75q.746 0 1.248-.502T13.75 9.5q0-.745-.502-1.248Q12.746 7.75 12 7.75q-.747 0-1.248.502-.502.502-.502 1.248 0 .745.502 1.248.501.502 1.248.502"></path>
                  </svg>
                )}
              </button>

              {/* Profile Dropdown Menu */}
              {profileOpen && (
                <div className="account-dropdown-menu" role="menu">
                  {!isLoggedIn ? (
                    <div className="account-guest-view">
                      <div className="dropdown-header">
                        <h4>Welcome to Divya Furniture</h4>
                        <p>To access your wishlist, orders, and customized recommendations:</p>
                      </div>

                      <div className="dropdown-actions">
                        <button
                          type="button"
                          className="btn-dropdown-primary"
                          onClick={() => {
                            setProfileOpen(false);
                            openAuthModal('login');
                          }}
                        >
                          Login
                        </button>
                        <button
                          type="button"
                          className="btn-dropdown-secondary"
                          onClick={() => {
                            setProfileOpen(false);
                            openAuthModal('register');
                          }}
                        >
                          Register as a New User
                        </button>
                      </div>

                      <div className="dropdown-benefits">
                        <div className="benefit-item">
                          <span className="benefit-icon">🚚</span>
                          <span>Track and manage your orders</span>
                        </div>
                        <div className="benefit-item">
                          <span className="benefit-icon">❤️</span>
                          <span>Access your saved wishlist</span>
                        </div>
                        <div className="benefit-item">
                          <span className="benefit-icon">🏷️</span>
                          <span>Exclusive member discounts</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="account-user-view">
                      <div className="user-info-card">
                        <div className="user-avatar-large">
                          {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div className="user-meta">
                          <span className="user-name">{user?.name}</span>
                          <span className="user-email">{user?.email}</span>
                        </div>
                      </div>

                      <ul className="user-links-list">
                        <li>
                          <Link href="/profile" onClick={() => setProfileOpen(false)}>
                            <span className="link-icon">👤</span> My Profile
                          </Link>
                        </li>
                        <li>
                          <Link href="/profile?tab=orders" onClick={() => setProfileOpen(false)}>
                            <span className="link-icon">📦</span> My Orders
                          </Link>
                        </li>
                        <li>
                          <Link href="/profile?tab=addresses" onClick={() => setProfileOpen(false)}>
                            <span className="link-icon">📍</span> Saved Addresses
                          </Link>
                        </li>
                        <li>
                          <Link href="/wishlist" onClick={() => setProfileOpen(false)}>
                            <span className="link-icon">❤️</span> My Wishlist
                            {wishlistCount > 0 && <span className="mini-badge">{wishlistCount}</span>}
                          </Link>
                        </li>
                        <li>
                          <Link href="/cart" onClick={() => setProfileOpen(false)}>
                            <span className="link-icon">🛒</span> Shopping Cart
                            {totalCartCount > 0 && <span className="mini-badge">{totalCartCount}</span>}
                          </Link>
                        </li>
                      </ul>

                      <div className="dropdown-footer">
                        <button
                          type="button"
                          className="btn-logout"
                          onClick={() => {
                            logout();
                            setProfileOpen(false);
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>

            {/* Wishlist Icon */}
            <li className="header-nav-item">
              <button
                type="button"
                aria-label={`View wishlist (${wishlistCount} items)`}
                className="dTPkp header-icon-btn relative-btn"
                data-testid="header-wishlist-icon"
                onClick={handleWishlistClick}
                title="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path fill="#304858" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"></path>
                </svg>
                {wishlistCount > 0 && (
                  <span className="header-counter-badge" aria-label={`${wishlistCount} items in wishlist`}>
                    {wishlistCount}
                  </span>
                )}
              </button>
            </li>

            {/* Shopping Cart Icon */}
            <li className="header-nav-item" data-testid="header-cart-icon">
              <button
                type="button"
                aria-label={`View cart (${totalCartCount} items)`}
                className="dTPkp header-icon-btn relative-btn"
                onClick={handleCartClick}
                title="Shopping Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path fill="#304858" d="M7.154 21.558q-.73 0-1.24-.51-.51-.511-.51-1.24 0-.73.51-1.24t1.24-.51q.729 0 1.24.51.51.51.51 1.24 0 .729-.51 1.24-.511.51-1.24.51m9.692 0q-.729 0-1.24-.51-.51-.511-.51-1.24 0-.73.51-1.24.511-.51 1.24-.51.73 0 1.24.51t.51 1.24q0 .729-.51 1.24-.51.51-1.24.51M6.016 5.75l2.534 5.308h6.817a.3.3 0 0 0 .154-.044.4.4 0 0 0 .116-.12l2.682-4.875q.058-.105.01-.187t-.164-.082zm-.72-1.5h13.885q.613 0 .928.522.315.523.03 1.066l-3.204 5.804a1.8 1.8 0 0 1-.651.674 1.7 1.7 0 0 1-.888.242H8.1l-1.158 2.115q-.077.115-.005.25.073.135.217.135h10.692q.32 0 .535.215a.73.73 0 0 1 .215.535.73.73 0 0 1-.215.534.73.73 0 0 1-.535.216H7.154q-1 0-1.503-.863-.503-.862-.036-1.722l1.427-2.565L3.404 3.75H2.25a.73.73 0 0 1-.535-.215A.73.73 0 0 1 1.5 3q0-.32.215-.535a.73.73 0 0 1 .535-.215h1.529a.9.9 0 0 1 .813.517z"></path>
                </svg>
                {totalCartCount > 0 && (
                  <span className="header-counter-badge" aria-label={`${totalCartCount} items in cart`}>
                    {totalCartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}
