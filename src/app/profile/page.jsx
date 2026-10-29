'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useShop } from '@/context/ShopContext';
import './profile.css';

function ProfileContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') || 'profile';

  const { user, isLoggedIn, logout, updateProfile, addAddress, removeAddress } = useAuth();
  const { wishlistCount, totalCartCount } = useShop();

  const [activeTab, setActiveTab] = useState(initialTab);
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState('');

  // Form states for profile edit
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  // Form states for new address
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddrName, setNewAddrName] = useState('');
  const [newAddrType, setNewAddrType] = useState('Home');
  const [newAddrStreet, setNewAddrStreet] = useState('');
  const [newAddrCity, setNewAddrCity] = useState('');
  const [newAddrState, setNewAddrState] = useState('');
  const [newAddrPincode, setNewAddrPincode] = useState('');
  const [newAddrPhone, setNewAddrPhone] = useState('');

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [settingsNotice, setSettingsNotice] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setPhone(user.phone || '');
      setGender(user.gender || 'Not specified');
      setDob(user.dob || '');
    }
  }, [user]);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  // If not logged in, show access prompt
  if (!isLoggedIn) {
    return (
      <div className="profile-container">
        <div className="profile-auth-prompt">
          <div className="prompt-avatar">🔒</div>
          <h2>Please Sign In</h2>
          <p>You need to be logged in to view your profile, manage orders, and saved addresses.</p>
          <div className="prompt-actions">
            <Link href="/login?redirect=/profile" className="btn-primary-action">
              Login to Account
            </Link>
            <Link href="/register?redirect=/profile" className="btn-secondary-action">
              Register as New User
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleProfileSave = (e) => {
    e.preventDefault();
    updateProfile({ name, phone, gender, dob });
    setIsEditing(false);
    setSaveSuccess('Profile details updated successfully!');
    setTimeout(() => setSaveSuccess(''), 3000);
  };

  const handleAddAddressSubmit = (e) => {
    e.preventDefault();
    if (!newAddrName || !newAddrStreet || !newAddrCity || !newAddrPincode) {
      alert('Please fill all required address fields.');
      return;
    }

    addAddress({
      name: newAddrName,
      type: newAddrType,
      street: newAddrStreet,
      city: newAddrCity,
      state: newAddrState,
      pincode: newAddrPincode,
      phone: newAddrPhone || user.phone,
    });

    setShowAddAddress(false);
    setNewAddrName('');
    setNewAddrStreet('');
    setNewAddrCity('');
    setNewAddrState('');
    setNewAddrPincode('');
    setNewAddrPhone('');
    setSaveSuccess('Address added successfully!');
    setTimeout(() => setSaveSuccess(''), 3000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      alert('Please fill in both current and new password.');
      return;
    }
    setCurrentPassword('');
    setNewPassword('');
    setSettingsNotice('Password updated successfully!');
    setTimeout(() => setSettingsNotice(''), 3000);
  };

  return (
    <div className="profile-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <span aria-current="page">My Account</span>
      </nav>

      {/* Main Layout */}
      <div className="profile-layout">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="user-profile-header">
            <div className="avatar-circle">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="header-text">
              <h3>{user?.name}</h3>
              <p>{user?.email}</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            <button
              className={`nav-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <span className="tab-icon">👤</span> Profile Details
            </button>
            <button
              className={`nav-tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <span className="tab-icon">📦</span> My Orders
              <span className="tab-badge">{user?.orders?.length || 0}</span>
            </button>
            <button
              className={`nav-tab-btn ${activeTab === 'addresses' ? 'active' : ''}`}
              onClick={() => setActiveTab('addresses')}
            >
              <span className="tab-icon">📍</span> Saved Addresses
              <span className="tab-badge">{user?.addresses?.length || 0}</span>
            </button>
            <button
              className={`nav-tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="tab-icon">⚙️</span> Account Settings
            </button>

            <div className="sidebar-divider"></div>

            <Link href="/wishlist" className="nav-tab-btn link-btn">
              <span className="tab-icon">❤️</span> My Wishlist
              {wishlistCount > 0 && <span className="tab-badge red">{wishlistCount}</span>}
            </Link>
            <Link href="/cart" className="nav-tab-btn link-btn">
              <span className="tab-icon">🛒</span> Shopping Cart
              {totalCartCount > 0 && <span className="tab-badge blue">{totalCartCount}</span>}
            </Link>

            <div className="sidebar-divider"></div>

            <button
              className="nav-tab-btn logout-tab-btn"
              onClick={() => {
                logout();
                router.push('/');
              }}
            >
              <span className="tab-icon">🚪</span> Logout
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="profile-content-area">
          {saveSuccess && (
            <div className="success-banner">
              ✓ {saveSuccess}
            </div>
          )}

          {/* TAB 1: Profile Details */}
          {activeTab === 'profile' && (
            <div className="profile-section-card">
              <div className="card-header-bar">
                <div>
                  <h2>Personal Information</h2>
                  <p>View and update your personal details and contact info.</p>
                </div>
                {!isEditing && (
                  <button
                    type="button"
                    className="btn-edit-trigger"
                    onClick={() => setIsEditing(true)}
                  >
                    ✏️ Edit Profile
                  </button>
                )}
              </div>

              {!isEditing ? (
                <div className="profile-info-grid">
                  <div className="info-cell">
                    <span className="info-label">Full Name</span>
                    <span className="info-val">{user?.name}</span>
                  </div>
                  <div className="info-cell">
                    <span className="info-label">Email Address</span>
                    <span className="info-val">{user?.email}</span>
                  </div>
                  <div className="info-cell">
                    <span className="info-label">Phone Number</span>
                    <span className="info-val">{user?.phone || 'Not added'}</span>
                  </div>
                  <div className="info-cell">
                    <span className="info-label">Gender</span>
                    <span className="info-val">{user?.gender || 'Not specified'}</span>
                  </div>
                  <div className="info-cell">
                    <span className="info-label">Date of Birth</span>
                    <span className="info-val">{user?.dob || 'Not provided'}</span>
                  </div>
                  <div className="info-cell">
                    <span className="info-label">Account Status</span>
                    <span className="info-val active-status">● Verified Active</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleProfileSave} className="edit-profile-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="edit-name">Full Name *</label>
                      <input
                        id="edit-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="edit-phone">Phone Number</label>
                      <input
                        id="edit-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="edit-gender">Gender</label>
                      <select
                        id="edit-gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="Not specified">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="edit-dob">Date of Birth</label>
                      <input
                        id="edit-dob"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="edit-actions">
                    <button type="submit" className="btn-save-profile">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="btn-cancel-edit"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: My Orders */}
          {activeTab === 'orders' && (
            <div className="profile-section-card">
              <div className="card-header-bar">
                <div>
                  <h2>My Orders</h2>
                  <p>Check the status of your recent furniture deliveries and view invoices.</p>
                </div>
              </div>

              {(!user?.orders || user.orders.length === 0) ? (
                <div className="empty-tab-state">
                  <span className="empty-tab-icon">📦</span>
                  <h3>No Orders Placed Yet</h3>
                  <p>When you purchase items, your order history will appear here.</p>
                  <Link href="/collection/clearance-sale" className="btn-primary-action">
                    Explore Furniture Sale
                  </Link>
                </div>
              ) : (
                <div className="orders-list">
                  {user.orders.map((order) => (
                    <div key={order.id} className="order-item-card">
                      <div className="order-header">
                        <div className="order-meta">
                          <span className="order-id">Order {order.id}</span>
                          <span className="order-date">Placed on {order.date}</span>
                        </div>
                        <div className="order-status-badge delivered">
                          ● {order.status}
                        </div>
                      </div>

                      <div className="order-items-body">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="order-product-row">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="order-product-thumb"
                              onError={(e) => (e.target.src = '/images/logo.png')}
                            />
                            <div className="order-product-details">
                              <h4>{item.title}</h4>
                              <p>Qty: {item.quantity} | Total: {item.price}</p>
                            </div>
                            <div className="order-row-action">
                              <Link href="/collection/clearance-sale" className="btn-reorder">
                                Buy Again
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="order-footer">
                        <span className="order-total-label">Total Amount: <strong>{order.total}</strong></span>
                        <button
                          type="button"
                          className="btn-track-order"
                          onClick={() => alert(`Tracking information for Order ${order.id}: Delivered successfully.`)}
                        >
                          View Order Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Saved Addresses */}
          {activeTab === 'addresses' && (
            <div className="profile-section-card">
              <div className="card-header-bar">
                <div>
                  <h2>Saved Addresses</h2>
                  <p>Manage your delivery and billing addresses for faster checkout.</p>
                </div>
                {!showAddAddress && (
                  <button
                    type="button"
                    className="btn-add-address"
                    onClick={() => setShowAddAddress(true)}
                  >
                    + Add New Address
                  </button>
                )}
              </div>

              {showAddAddress && (
                <form onSubmit={handleAddAddressSubmit} className="add-address-form">
                  <h3>Add Delivery Address</h3>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Recipient Name *</label>
                      <input
                        type="text"
                        value={newAddrName}
                        onChange={(e) => setNewAddrName(e.target.value)}
                        placeholder="e.g. Divya Sharma"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label>Address Type</label>
                      <select value={newAddrType} onChange={(e) => setNewAddrType(e.target.value)}>
                        <option value="Home">Home</option>
                        <option value="Work">Work / Office</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Street Address, Building, Flat No. *</label>
                    <input
                      type="text"
                      value={newAddrStreet}
                      onChange={(e) => setNewAddrStreet(e.target.value)}
                      placeholder="e.g. 42, Palm Avenue, Koramangala"
                      required
                    />
                  </div>

                  <div className="form-row-3">
                    <div className="form-field">
                      <label>City *</label>
                      <input
                        type="text"
                        value={newAddrCity}
                        onChange={(e) => setNewAddrCity(e.target.value)}
                        placeholder="Bengaluru"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label>State</label>
                      <input
                        type="text"
                        value={newAddrState}
                        onChange={(e) => setNewAddrState(e.target.value)}
                        placeholder="Karnataka"
                      />
                    </div>
                    <div className="form-field">
                      <label>Pincode *</label>
                      <input
                        type="text"
                        value={newAddrPincode}
                        onChange={(e) => setNewAddrPincode(e.target.value)}
                        placeholder="560034"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Contact Phone</label>
                    <input
                      type="tel"
                      value={newAddrPhone}
                      onChange={(e) => setNewAddrPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="edit-actions">
                    <button type="submit" className="btn-save-profile">
                      Save Address
                    </button>
                    <button
                      type="button"
                      className="btn-cancel-edit"
                      onClick={() => setShowAddAddress(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {(!user?.addresses || user.addresses.length === 0) ? (
                <div className="empty-tab-state">
                  <span className="empty-tab-icon">📍</span>
                  <h3>No Addresses Saved</h3>
                  <p>Add your home or office address for seamless checkout.</p>
                </div>
              ) : (
                <div className="addresses-grid">
                  {user.addresses.map((addr) => (
                    <div key={addr.id} className="address-card">
                      <div className="address-card-header">
                        <span className="address-tag">{addr.type}</span>
                        {addr.isDefault && <span className="default-badge">Default</span>}
                      </div>
                      <h4 className="address-name">{addr.name}</h4>
                      <p className="address-street">{addr.street}</p>
                      <p className="address-city">
                        {addr.city}, {addr.state} - {addr.pincode}
                      </p>
                      <p className="address-phone">Phone: {addr.phone}</p>
                      <div className="address-actions">
                        <button
                          type="button"
                          className="btn-delete-addr"
                          onClick={() => removeAddress(addr.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: Account Settings */}
          {activeTab === 'settings' && (
            <div className="profile-section-card">
              <div className="card-header-bar">
                <div>
                  <h2>Account Settings</h2>
                  <p>Manage your account password and security preferences.</p>
                </div>
              </div>

              {settingsNotice && (
                <div className="success-banner">
                  ✓ {settingsNotice}
                </div>
              )}

              <form onSubmit={handlePasswordChange} className="settings-form">
                <h3>Change Password</h3>
                <div className="form-field">
                  <label>Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter your existing password"
                  />
                </div>
                <div className="form-field">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter your new secure password"
                  />
                </div>
                <button type="submit" className="btn-save-profile">
                  Update Password
                </button>
              </form>

              <div className="settings-divider"></div>

              <div className="danger-zone">
                <h3>Account Actions</h3>
                <p>Logging out will end your current session on this device.</p>
                <button
                  type="button"
                  className="btn-danger-logout"
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                >
                  Logout from Divya Furniture
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div className="profile-loading">Loading account details...</div>}>
      <ProfileContent />
    </Suspense>
  );
}
