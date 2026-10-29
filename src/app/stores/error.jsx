'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function StoreError({ error, reset }) {
  useEffect(() => {
    console.error('Store page error:', error);
  }, [error]);

  return (
    <div className="mobile desktop tablet wrapper-class" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#000507', marginBottom: '16px' }}>
        Unable to load store information
      </h2>
      <p style={{ fontSize: '14px', color: '#678391', marginBottom: '24px' }}>
        We encountered an issue loading this page. Please try again or return to the home page.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        <button
          onClick={() => reset()}
          style={{
            padding: '10px 24px',
            backgroundColor: '#023047',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          Try Again
        </button>
        <Link
          href="/"
          style={{
            padding: '10px 24px',
            backgroundColor: '#fff',
            color: '#023047',
            border: '1px solid #023047',
            borderRadius: '4px',
            fontSize: '14px',
            textDecoration: 'none',
            fontWeight: 500
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
