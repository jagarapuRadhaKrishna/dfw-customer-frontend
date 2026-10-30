'use client';

import React, { useState } from 'react';
import ErrorLayout from './ErrorLayout';
import ErrorIllustration from './ErrorIllustration';

export default function ServerError({ statusCode = 500 }) {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    // Simulate retry with exponential backoff
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.reload();
  };

  return (
    <ErrorLayout>
      <ErrorIllustration type="server" />
      <div className="service-status">
        <span className="service-status-dot"></span>
        <span>Service Status: Temporarily Unavailable</span>
      </div>
      <h1 className="error-title">Service Temporarily Unavailable</h1>
      <p className="error-description">
        Our servers are temporarily unavailable. We're working to restore the service.
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
              Trying Again...
            </>
          ) : (
            'Try Again'
          )}
        </button>
      </div>
    </ErrorLayout>
  );
}
