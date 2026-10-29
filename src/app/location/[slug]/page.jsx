/**
 * Dynamic Location Page
 * Shows furniture availability, delivery options, and rental services in a specific city
 */

import { generateLocationPageMetadata } from '@/lib/metadata-generator';
import { generateLocationSchema } from '@/lib/schema-generator';
import { getServiceAvailability, SERVICE_AVAILABILITY } from '@/lib/location-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Generate params for all service locations
  return Object.keys(SERVICE_AVAILABILITY).map((city) => ({
    slug: city.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }) {
  const cityName = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const availability = getServiceAvailability(cityName);
  if (!availability.state) notFound();
  return generateLocationPageMetadata(cityName, availability.state);
}

export default function LocationPage({ params }) {
  const cityName = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const availability = getServiceAvailability(cityName);

  if (!availability.state) notFound();

  const locationSchema = availability.verified
    ? generateLocationSchema(cityName, availability.state, availability)
    : null;

  return (
    <>
      {locationSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
        />
      )}

      <main className="location-page" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <section style={{ marginBottom: '50px' }}>
          <Link href="/locations" style={{ color: '#ff6b35', textDecoration: 'none', fontSize: '14px', marginBottom: '20px', display: 'inline-block' }}>
            ← Back to Locations
          </Link>

          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#1a1a1a' }}>
            Furniture in {cityName}, {availability.state}
          </h1>
          <p style={{ fontSize: '18px', color: '#666', margin: 0 }}>
            Explore furniture options and contact us to confirm current service availability in your area.
          </p>
        </section>

        {/* Services Overview */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          {[
            {
              key: 'delivery',
              icon: '🚚',
              title: 'Furniture Delivery',
              description: 'Ask about delivery availability for your area.',
              available: availability.delivery
            },
            {
              key: 'rental',
              icon: '🛋️',
              title: 'Furniture Rental',
              description: 'Rental availability and terms depend on the product and location.',
              available: availability.rental
            },
            {
              key: 'homeDemo',
              icon: '📏',
              title: 'Home Demonstration',
              description: 'Contact us to ask whether a home demonstration is available.',
              available: availability.homeDemo
            },
            {
              key: 'consultation',
              icon: '👥',
              title: 'Furniture Consultation',
              description: 'Ask our team for assistance with your furniture enquiry.',
              available: availability.expertConsultation
            }
          ].map((service) => (
            <div
              key={service.key}
              style={{
                padding: '25px',
                borderRadius: '8px',
                backgroundColor: service.available ? '#e8f5e9' : '#f5f5f5',
                border: `2px solid ${service.available ? '#4caf50' : '#ddd'}`,
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px', margin: 0 }}>
                {service.description}
              </p>
              <span style={{
                display: 'inline-block',
                fontSize: '13px',
                fontWeight: '600',
                color: service.available ? '#2e7d32' : '#999'
              }}>
                {service.available ? '✓ Available' : '○ Not Available'}
              </span>
            </div>
          ))}
        </section>

        {/* Why Choose Us */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', color: '#1a1a1a' }}>
            Why Choose DIVYA FURNITURE WORLD?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {[
              {
                title: 'Affordable Prices',
                description: 'Explore current product prices and available furniture options.'
              },
              {
                title: 'Expert Support',
                description: 'Contact the team with questions about products and service availability.'
              }
            ].map((feature, idx) => (
              <div key={idx} style={{
                padding: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                borderLeft: '4px solid #ff6b35'
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', color: '#1a1a1a' }}>
            Furniture Categories Available
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '15px'
          }}>
            {[
              'Sofas & Seating',
              'Beds & Mattresses',
              'Wardrobes & Storage',
              'Dining Tables & Chairs',
              'TV Units',
              'Coffee Tables',
              'Study Tables',
              'Shoe Racks',
              'Bookshelves',
              'Recliners',
              'Sideboards',
              'Lounge Chairs'
            ].map((category) => (
              <div key={category} style={{
                padding: '16px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '500',
                color: '#1a1a1a',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#ff6b35';
                e.target.style.backgroundColor = '#fff3e0';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#ddd';
                e.target.style.backgroundColor = '#fff';
              }}>
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '50px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Ready to Transform Your Home?
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Contact our team to discuss your furniture needs and ask about service availability in {cityName}.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <Link href={`/enquiry?city=${cityName}&state=${availability.state}`} style={{
              padding: '14px 32px',
              backgroundColor: '#ff6b35',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '16px',
              display: 'inline-block'
            }}>
              Submit Enquiry
            </Link>
            <Link href="/rental" style={{
              padding: '14px 32px',
              backgroundColor: '#666',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '16px',
              display: 'inline-block'
            }}>
              Explore Rentals
            </Link>
          </div>
        </section>

        {/* Info Box */}
        <section style={{
          backgroundColor: '#f5f5f5',
          padding: '25px',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#666',
          lineHeight: '1.6'
        }}>
          <p style={{ margin: 0 }}>
            <strong>Service Information:</strong> Availability of furniture, delivery services, rental options, and custom design services in {cityName} is subject to verification and may vary based on current inventory and location-specific capabilities. For the most up-to-date information and to confirm specific services or furniture availability, please submit an enquiry or contact our team directly.
          </p>
        </section>
      </main>
    </>
  );
}
