'use client';

import ApplicationError from '@/components/error/ApplicationError';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <ApplicationError error={error} reset={reset} />
      </body>
    </html>
  );
}
