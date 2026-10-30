'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ErrorLayout from './ErrorLayout';
import ErrorIllustration from './ErrorIllustration';

export default function ConnectionError() {
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    // Simulate retry with exponential backoff
    await new Promise(resolve => setTimeout(resolve, 2000));
    window.location.reload();
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <ErrorLayout>
      <ErrorIllustration type="connection" />
      <h1 className="error-title">Unable to Connect</h1>
      <p className="error-description">
        We're having trouble connecting to our servers. Please check your connection and try again.
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
              Retrying...
            </>
          ) : (
            'Retry Connection'
          )}
        </button>
        <button onClick={handleGoHome} className="error-button error-button-secondary">
          Go to Homepage
        </button>
      </div>
    </ErrorLayout>
  );
}
