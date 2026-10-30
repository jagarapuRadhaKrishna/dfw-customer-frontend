'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ErrorLayout from './ErrorLayout';
import ErrorIllustration from './ErrorIllustration';

export default function NotFoundError() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  const popularCategories = [
    { name: 'Sofas', href: '/collection/sofas' },
    { name: 'Beds', href: '/collection/beds' },
    { name: 'Dining', href: '/collection/dining-tables' },
    { name: 'Chairs', href: '/collection/chairs' },
    { name: 'Mattresses', href: '/collection/mattresses' },
  ];

  return (
    <ErrorLayout>
      <div className="error-code">404</div>
      <ErrorIllustration type="notFound" />
      <h1 className="error-title">Page Not Found</h1>
      <p className="error-description">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="error-actions">
        <button onClick={handleGoHome} className="error-button error-button-primary">
          Go Home
        </button>
        <button onClick={handleGoBack} className="error-button error-button-secondary">
          Go Back
        </button>
      </div>
      <div className="popular-categories">
        <p className="popular-categories-title">Popular Categories</p>
        <div className="popular-categories-list">
          {popularCategories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="popular-category-link"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </ErrorLayout>
  );
}
