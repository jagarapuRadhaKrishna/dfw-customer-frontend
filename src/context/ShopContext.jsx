'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Helper to extract clean numerical price
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    if (typeof priceStr === 'number') return priceStr;
    const clean = priceStr.toString().replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
  };

  // Load from localStorage
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('divya_furniture_cart');
      const storedWishlist = localStorage.getItem('divya_furniture_wishlist');
      const storedCoupon = localStorage.getItem('divya_furniture_coupon');

      if (storedCart) {
        const parsed = JSON.parse(storedCart);
        const savedCart = Array.isArray(parsed)
          ? parsed.filter((item) => item?.id !== 'cart_sample_1')
          : [];
        setCart(savedCart);
        if (savedCart.length !== (Array.isArray(parsed) ? parsed.length : 0)) {
          localStorage.setItem('divya_furniture_cart', JSON.stringify(savedCart));
        }
      }

      if (storedWishlist) {
        const parsed = JSON.parse(storedWishlist);
        const savedWishlist = Array.isArray(parsed)
          ? parsed.filter((item) => !String(item?.id || '').startsWith('wl_sample_'))
          : [];
        setWishlist(savedWishlist);
        if (savedWishlist.length !== (Array.isArray(parsed) ? parsed.length : 0)) {
          localStorage.setItem('divya_furniture_wishlist', JSON.stringify(savedWishlist));
        }
      }

      if (storedCoupon) {
        localStorage.removeItem('divya_furniture_coupon');
      }
    } catch (e) {
      console.error('Error loading shop data from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync cart to localStorage
  const updateCartState = (newCart) => {
    setCart(newCart);
    try {
      localStorage.setItem('divya_furniture_cart', JSON.stringify(newCart));
    } catch (e) {
      console.error('Error saving cart to localStorage:', e);
    }
  };

  // Sync wishlist to localStorage
  const updateWishlistState = (newWishlist) => {
    setWishlist(newWishlist);
    try {
      localStorage.setItem('divya_furniture_wishlist', JSON.stringify(newWishlist));
    } catch (e) {
      console.error('Error saving wishlist to localStorage:', e);
    }
  };

  // Add to cart
  const addToCart = (product, quantity = 1, options = {}) => {
    const productId = product.id || product.href || product.title;
    const priceValue = parsePrice(product.salePrice);
    const mrpValue = parsePrice(product.mrp) || priceValue;

    const existingIndex = cart.findIndex((item) => (item.id || item.href) === productId);

    let updatedCart;
    if (existingIndex > -1) {
      updatedCart = cart.map((item, index) => {
        if (index === existingIndex) {
          const newQty = Math.min(10, item.quantity + quantity);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    } else {
      const newItem = {
        id: productId,
        title: product.title,
        href: product.href || `/product/${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        image: product.image || '/images/logo.png',
        salePrice: product.salePrice || `₹${priceValue.toLocaleString('en-IN')}`,
        mrp: product.mrp || `₹${mrpValue.toLocaleString('en-IN')}`,
        priceValue,
        mrpValue,
        quantity: Math.min(10, Math.max(1, quantity)),
        size: options.size || 'Standard',
        color: options.color || 'Default',
      };
      updatedCart = [...cart, newItem];
    }

    updateCartState(updatedCart);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    const updated = cart.filter((item) => (item.id || item.href) !== productId);
    updateCartState(updated);
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    const clampedQty = Math.min(10, newQuantity);
    const updated = cart.map((item) => {
      if ((item.id || item.href) === productId) {
        return { ...item, quantity: clampedQty };
      }
      return item;
    });
    updateCartState(updated);
  };

  // Clear entire cart
  const clearCart = () => {
    updateCartState([]);
    removeCoupon();
  };

  // Add to wishlist
  const addToWishlist = (product) => {
    const productId = product.id || product.href || product.title;
    if (wishlist.some((item) => (item.id || item.href) === productId)) return;

    const newItem = {
      id: productId,
      title: product.title,
      href: product.href || `/product/${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      image: product.image || '/images/logo.png',
      salePrice: product.salePrice,
      mrp: product.mrp,
      badge: product.badge || 'Saved',
    };

    updateWishlistState([...wishlist, newItem]);
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter((item) => (item.id || item.href) !== productId);
    updateWishlistState(updated);
  };

  // Move product from wishlist to cart
  const moveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id || product.href);
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => (item.id || item.href) === productId);
  };

  // Apply discount coupon
  const applyCoupon = () => {
    throw new Error('No active coupon codes are configured. Please contact our team about current offers.');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    try {
      localStorage.removeItem('divya_furniture_coupon');
    } catch (error) {
      console.error('Error removing coupon from local storage:', error);
    }
  };

  // Price calculations
  const subtotal = cart.reduce((acc, item) => {
    const price = item.priceValue || parsePrice(item.salePrice);
    return acc + price * item.quantity;
  }, 0);

  const mrpTotal = cart.reduce((acc, item) => {
    const mrp = item.mrpValue || parsePrice(item.mrp) || item.priceValue || parsePrice(item.salePrice);
    return acc + mrp * item.quantity;
  }, 0);

  const productDiscount = Math.max(0, mrpTotal - subtotal);
  const couponDiscount = appliedCoupon ? Math.min(subtotal, appliedCoupon.discount) : 0;
  const totalDiscount = productDiscount + couponDiscount;

  const deliveryCharge = 0;
  const finalTotal = Math.max(0, subtotal - couponDiscount + deliveryCharge);
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        totalCartCount,
        wishlistCount: wishlist.length,
        isLoaded,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        moveToCart,
        isInWishlist,
        applyCoupon,
        removeCoupon,
        appliedCoupon,
        subtotal,
        mrpTotal,
        productDiscount,
        couponDiscount,
        totalDiscount,
        deliveryCharge,
        finalTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
