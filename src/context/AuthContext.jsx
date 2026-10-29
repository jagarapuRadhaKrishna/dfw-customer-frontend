'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEMO_USER = {
  id: 'usr_001',
  name: 'Krishna',
  email: 'divyafurnitures.com',
  phone: '+91 9550897539',
  gender: 'male',
  dob: '2002-06-02',
  addresses: [
    {
      id: 'addr_1',
      name: 'Krishna',
      type: 'Home',
      street: '42, Palm Avenue, Koramangala 4th Block',
      city: 'Warangal',
      state: 'Telangana',
      pincode: '506002',
      phone: '+91 9550897539',
      isDefault: true,
    },
    {
      id: 'addr_2',
      name: 'Krishna (Office)',
      type: 'Work',
      street: 'Tower B, 5th Floor, Cyber Tech Park, Whitefield',
      city: 'Warangal',
      state: 'Telangana',
      pincode: '506002',
      phone: '+91 9550897539',
      isDefault: false,
    },
  ],
  orders: [
    {
      id: 'ORD-782910',
      date: '2026-10-18',
      status: 'Delivered',
      total: '₹34,999',
      items: [
        {
          id: 'p_sofa_1',
          title: 'Weston Half Leather 3 Seater Sofa in Camel Italian Leather',
          price: '₹34,999',
          quantity: 1,
          image: '/images/logo.png',
        },
      ],
    },
    {
      id: 'ORD-651204',
      date: '2026-09-02',
      status: 'Delivered',
      total: '₹18,499',
      items: [
        {
          id: 'p_dining_1',
          title: 'Arabia 4 Seater Solid Wood Dining Table in Teak Finish',
          price: '₹18,499',
          quantity: 1,
          image: '/images/logo.png',
        },
      ],
    },
  ],
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    type: 'login', // 'login' | 'wishlist' | 'cart' | 'register'
    redirectUrl: '',
  });

  // Initialize from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('divya_furniture_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error('Failed to load user from localStorage:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const openAuthModal = (type = 'login', redirectUrl = '') => {
    setAuthModal({
      isOpen: true,
      type,
      redirectUrl,
    });
  };

  const closeAuthModal = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false }));
  };

  // Save to localStorage when user changes
  const saveUser = (userData) => {
    setUser(userData);
    try {
      if (userData) {
        localStorage.setItem('divya_furniture_user', JSON.stringify(userData));
      } else {
        localStorage.removeItem('divya_furniture_user');
      }
    } catch (e) {
      console.error('Failed to save user to localStorage:', e);
    }
  };

  const loginWithMobile = async (phone, otp) => {
    const digits = (phone || '').replace(/\D/g, '');
    if (digits.length < 10) {
      throw new Error('Please enter a valid 10-digit mobile number.');
    }
    const cleanPhone = digits.slice(-10);
    const loggedInUser = {
      ...DEMO_USER,
      phone: `+91 ${cleanPhone}`,
      name: `User ${cleanPhone.slice(-4)}`,
      email: `user${cleanPhone.slice(-4)}@example.com`,
    };

    saveUser(loggedInUser);
    closeAuthModal();
    return loggedInUser;
  };

  const login = async (email, password) => {
    // Basic validation
    if (!email || !password) {
      throw new Error('Please provide both email and password.');
    }

    // Accept demo credentials or any valid-looking login
    const loggedInUser = {
      ...DEMO_USER,
      email: email.trim().toLowerCase(),
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').trim() || DEMO_USER.name,
    };

    saveUser(loggedInUser);
    closeAuthModal();
    return loggedInUser;
  };

  const register = async ({ name, email, phone, password }) => {
    if (!name || !email || !password) {
      throw new Error('Please fill in all required fields.');
    }

    const newUser = {
      id: 'usr_' + Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone || '+91 99999 00000',
      gender: 'Not specified',
      dob: '',
      addresses: [],
      orders: [],
    };

    saveUser(newUser);
    closeAuthModal();
    return newUser;
  };

  const logout = () => {
    saveUser(null);
  };

  const updateProfile = (updatedFields) => {
    if (!user) return;
    const updated = { ...user, ...updatedFields };
    saveUser(updated);
  };

  const addAddress = (newAddress) => {
    if (!user) return;
    const addressWithId = {
      ...newAddress,
      id: 'addr_' + Date.now(),
      isDefault: user.addresses?.length === 0,
    };
    const updatedAddresses = [...(user.addresses || []), addressWithId];
    updateProfile({ addresses: updatedAddresses });
  };

  const removeAddress = (addressId) => {
    if (!user) return;
    const updatedAddresses = (user.addresses || []).filter((a) => a.id !== addressId);
    updateProfile({ addresses: updatedAddresses });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        isLoading,
        authModal,
        openAuthModal,
        closeAuthModal,
        loginWithMobile,
        login,
        register,
        logout,
        updateProfile,
        addAddress,
        removeAddress,
        demoUser: DEMO_USER,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
