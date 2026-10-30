'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ErrorLayout from './ErrorLayout';
import ErrorIllustration from './ErrorIllustration';

export default function AccessDenied() {
  const router = useRouter();

  const handleReturn = () => {
    router.push('/');
  };

  return (
    <ErrorLayout>
      <ErrorIllustration type="accessDenied" />
      <h1 className="error-title">Access Restricted</h1>
      <p className="error-description">
        You don't have permission to access this page.
      </p>
      <div className="error-actions">
        <button onClick={handleReturn} className="error-button error-button-primary">
          Return to Homepage
        </button>
      </div>
    </ErrorLayout>
  );
}
