'use client';

import React, { useState } from 'react';
import ErrorLayout from './ErrorLayout';
import ErrorIllustration from './ErrorIllustration';

export default function OfflineError() {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    // Wait and check connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (navigator.onLine) {
      window.location.reload();
    } else {
      setIsRetrying(false);
    }
  };

  return (
    <ErrorLayout>
      <ErrorIllustration type="offline" />
      <h1 className="error-title">You're Offline</h1>
      <p className="error-description">
        Please check your internet connection.
      </p>
      <div className="error-actions">
        <button
          onClick={handleRetry}
          className="error-button error-button-primary"
          disabled={isRetrying}
        >
          {isRetrying ? (
            <>
              <span className="loading-spinner"></span>
              Checking...
            </>
          ) : (
            'Retry'
          )}
        </button>
      </div>
    </ErrorLayout>
  );
}
