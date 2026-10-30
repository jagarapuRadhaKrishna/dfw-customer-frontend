/**
 * Repair Services Page
 * Placeholder for furniture repair and maintenance services
 */

import Link from 'next/link';

export default function RepairServicesPage() {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
          Repair Services
        </h1>
        <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Expert furniture repair and maintenance services to restore your furniture.
        </p>
      </section>

      <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#1a1a1a' }}>
          Coming Soon
        </h2>
        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
          Our repair services are being curated for you. Check back soon!
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#ff6b35',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: '600'
        }}>
          Return to Home
        </Link>
      </section>
    </main>
  );
}
