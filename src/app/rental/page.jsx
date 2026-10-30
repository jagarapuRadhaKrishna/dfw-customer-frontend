/**
 * Furniture Rental Landing Page
 * Showcases rental options, eligible products, and rental enquiry process
 */

import { generateRentalMetadata } from '@/lib/metadata-generator';
import { generateRentalServiceSchema } from '@/lib/schema-generator';
import Link from 'next/link';

export const metadata = generateRentalMetadata();

export default function RentalPage() {
  const rentalServiceSchema = generateRentalServiceSchema();

  const rentalBenefits = [
    {
      icon: '💰',
      title: 'Enquire About Pricing',
      description: 'Contact our team for rental pricing and terms for your requirements.'
    },
    {
      icon: '🚚',
      title: 'Check Delivery Availability',
      description: 'Delivery arrangements depend on your location and selected product.'
    },
    {
      icon: '🤝',
      title: 'Expert Help',
      description: 'Our team can discuss furniture options for your needs.'
    },
    {
      icon: '📍',
      title: 'Selected Locations',
      description: 'Ask our team about rental availability in your area.'
    }
  ];

  const rentalEligibleProducts = [
    'Sofas & Seating',
    'Beds & Mattresses',
    'Wardrobes & Storage',
    'Dining Tables',
    'TV Units & Entertainment'
  ];

  const rentalProcess = [
    {
      step: 1,
      title: 'Share Your Needs',
      description: 'Tell us what furniture you need and your location.'
    },
    {
      step: 2,
      title: 'Get a Quote',
      description: 'Our team provides pricing and rental terms for your area.'
    },
    {
      step: 3,
      title: 'Confirm Arrangements',
      description: 'Discuss delivery availability and rental details with our team.'
    },
    {
      step: 4,
      title: 'Review the Terms',
      description: 'Review product availability, pricing, and terms before proceeding.'
    }
  ];

  return (
    <>
      {/* Rental Service Schema */}
      {rentalServiceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalServiceSchema) }}
        />
      )}

      <main className="rental-page" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Page Header */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
            Rent Quality Furniture
          </h1>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Ask about furniture rental options in your area. Availability, pricing, terms, and delivery arrangements depend on the product and location.
          </p>
        </section>

        {/* Rental Benefits */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center', color: '#1a1a1a' }}>
            Why Choose Furniture Rental?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {rentalBenefits.map((benefit, idx) => (
              <div key={idx} style={{
                padding: '30px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligible Products */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#1a1a1a' }}>
            Ask About Furniture Rental
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px'
          }}>
            {rentalEligibleProducts.map((product, idx) => (
              <div key={idx} style={{
                padding: '20px',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                textAlign: 'center',
                backgroundColor: '#fff'
              }}>
                <p style={{ fontSize: '16px', fontWeight: '500', color: '#1a1a1a', margin: 0 }}>
                  {product}
                </p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginTop: '20px' }}>
            These are enquiry categories only. Rental availability varies by product and location.
          </p>
        </section>

        {/* Rental Process */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '40px', textAlign: 'center', color: '#1a1a1a' }}>
            How Rental Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {rentalProcess.map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '0 auto 20px'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#1a1a1a' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#1a1a1a' }}>
            Rental Available In
          </h2>
          <div style={{
            backgroundColor: '#f0f8ff',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '16px', color: '#1a1a1a', marginBottom: '20px' }}>
              Currently offering furniture rentals in selected cities across:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {['Bhimavaram', 'Hyderabad'].map((city) => (
                <span key={city} style={{
                  padding: '8px 16px',
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {city}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '20px', marginBottom: 0 }}>
              Check availability in your city by{' '}
              <Link href="/locations" style={{ color: '#ff6b35', textDecoration: 'none', fontWeight: '500' }}>
                finding nearby hubs
              </Link>
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '50px 30px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Ready to Rent?
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Submit a rental enquiry to ask about current options, pricing, and terms for your location.
          </p>
          <Link href="/enquiry" style={{
            display: 'inline-block',
            padding: '14px 32px',
            backgroundColor: '#ff6b35',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: '600',
            fontSize: '16px'
          }}>
            Submit Rental Enquiry
          </Link>
        </section>

        {/* Disclaimer */}
        <section style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '4px',
          fontSize: '13px',
          color: '#666',
          lineHeight: '1.6'
        }}>
          <strong>Note:</strong> Furniture rental availability varies by product and location. Pricing, rental duration, deposits, delivery arrangements, and other terms are not published here; contact our team to confirm the details before proceeding.
        </section>
      </main>
    </>
  );
}
