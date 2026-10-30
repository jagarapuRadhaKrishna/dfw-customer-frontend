'use client';

import React, { useState } from 'react';
import ErrorLayout from './ErrorLayout';
import ErrorIllustration from './ErrorIllustration';

export default function ApplicationError({ error, reset }) {
  const [isReloading, setIsReloading] = useState(false);

  const handleReload = async () => {
    setIsReloading(true);
    // Attempt to reset the error boundary
    if (reset) {
      reset();
    } else {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.reload();
    }
  };

  return (
    <ErrorLayout>
      <ErrorIllustration type="application" />
      <h1 className="error-title">Something Went Wrong</h1>
      <p className="error-description">
        An unexpected error occurred. Please try again.
      </p>
      <div className="error-actions">
        <button
          onClick={handleReload}
          className="error-button error-button-primary"
          disabled={isReloading}
        >
          {isReloading ? (
            <>
              <span className="loading-spinner"></span>
              Reloading...
            </>
          ) : (
            'Reload Page'
          )}
        </button>
      </div>
    </ErrorLayout>
  );
}
