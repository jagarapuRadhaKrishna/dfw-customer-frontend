'use client';

import ApplicationError from '@/components/error/ApplicationError';

export default function Error({ error, reset }) {
  return <ApplicationError error={error} reset={reset} />;
}
