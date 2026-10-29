import Link from 'next/link';
import { generate404Metadata } from '@/lib/metadata-generator';

export const metadata = generate404Metadata();

export default function NotFound() {
  return (
    <main style={{ padding: '60px 20px', maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you requested could not be found.</p>
      <Link href="/">Return to Divya Furniture World</Link>
    </main>
  );
}
