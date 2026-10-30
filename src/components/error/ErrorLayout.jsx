'use client';

import React from 'react';
import '@/styles/error-pages.css';

export default function ErrorLayout({ children }) {
  return (
    <div className="error-page">
      <div className="error-container">
        {children}
      </div>
    </div>
  );
}
