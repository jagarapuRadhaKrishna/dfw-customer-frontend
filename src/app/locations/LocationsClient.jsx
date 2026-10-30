/**
 * Locations Hub Page
 * Allows customers to find nearby service hubs and check service availability
 */

'use client';

import React, { useState } from 'react';
import { getAllServiceCities, getCitiesByState, getAllServiceStates, getServiceAvailability } from '@/lib/location-data';
import Link from 'next/link';

export default function LocationsPage() {
  const [selectedState, setSelectedState] = useState('Andhra Pradesh');
  const [selectedCity, setSelectedCity] = useState(null);
  const states = getAllServiceStates();
  const citiesInState = getCitiesByState(selectedState);

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity(null);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  const getSelectedCityAvailability = () => {
    if (!selectedCity) return null;
    return getServiceAvailability(selectedCity);
  };

  const availability = getSelectedCityAvailability();

  return (
    <main className="locations-page" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Page Header */}
      <section style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>
          Find Nearby Hubs
        </h1>
        <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Select a city to check furniture service availability. City listings do not necessarily represent physical branches.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px', alignItems: 'start' }}>
        {/* Sidebar - State & City Selection */}
        <aside style={{
          backgroundColor: '#f9f9f9',
          padding: '30px',
          borderRadius: '8px',
          height: 'fit-content',
          position: 'sticky',
          top: '20px'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a' }}>
            Select Your Location
          </h3>

          {/* State Selection */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: '#666' }}>
              STATE
            </label>
            <select
              value={selectedState}
              onChange={(e) => handleStateChange(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* City Selection */}
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: '#666' }}>
              CITY
            </label>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              {citiesInState.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px',
                    marginBottom: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: selectedCity === city ? '#ff6b35' : '#fff',
                    color: selectedCity === city ? 'white' : '#1a1a1a',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.2s ease',
                    fontWeight: selectedCity === city ? '600' : '500'
                  }}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - City Details & Services */}
        <section>
          {!selectedCity ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              color: '#666'
            }}>
              <p style={{ fontSize: '16px', margin: 0 }}>
                Select a city to view available services and location details.
              </p>
            </div>
          ) : (
            <div>
              {/* City Header */}
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#1a1a1a' }}>
                  {selectedCity}, {selectedState}
                </h2>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
                  {availability.verified ? 'Service availability verified' : 'Please enquire to confirm current availability'}
                </p>
              </div>

              {/* Services Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '40px'
              }}>
                {[
                  { key: 'delivery', icon: '🚚', title: 'Furniture Delivery', label: 'delivery' },
                  { key: 'rental', icon: '🛋️', title: 'Furniture Rental', label: 'rental' },
                  { key: 'homeDemo', icon: '📏', title: 'Home Demonstration', label: 'homeDemo' },
                  { key: 'consultation', icon: '👥', title: 'Expert Consultation', label: 'expertConsultation' }
                ].map((service) => (
                  <div
                    key={service.key}
                    style={{
                      padding: '20px',
                      borderRadius: '8px',
                      backgroundColor: availability.verified && availability[service.label] ? '#e8f5e9' : '#f5f5f5',
                      border: `2px solid ${availability.verified && availability[service.label] ? '#4caf50' : '#ddd'}`
                    }}
                  >
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: availability.verified && availability[service.label] ? '#2e7d32' : '#999',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      {availability.verified
                        ? availability[service.label] ? '✓ Available' : '○ Not Available'
                        : 'Check with our team'}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div style={{
                backgroundColor: '#f0f8ff',
                padding: '30px',
                borderRadius: '8px',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a' }}>
                  Get in Touch
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                  Submit an enquiry to learn more about services available in {selectedCity} or book a consultation.
                </p>
                <Link href={`/enquiry?city=${selectedCity}&state=${selectedState}`} style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  Submit Enquiry for {selectedCity}
                </Link>
              </div>

              {/* Location Page Link */}
              <div style={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>
                  Want more details about {selectedCity}?
                </p>
                <Link href={`/location/${selectedCity.toLowerCase().replace(/\s+/g, '-')}`} style={{
                  color: '#ff6b35',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '14px'
                }}>
                  View {selectedCity} Service Details →
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* All Cities Overview */}
      <section style={{ marginTop: '80px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center', color: '#1a1a1a' }}>
          Service Cities
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
          {getAllServiceCities().map((city) => (
            <Link
              key={city}
              href={`/location/${city.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                padding: '16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                textAlign: 'center',
                textDecoration: 'none',
                color: '#1a1a1a',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                backgroundColor: '#fff',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ff6b35';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#1a1a1a';
              }}
            >
              {city}
            </Link>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <section style={{
        backgroundColor: '#fff3e0',
        padding: '30px',
        borderRadius: '8px',
        marginTop: '60px'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#e65100' }}>
          ℹ️ Information
        </h3>
        <p style={{ fontSize: '14px', color: '#333', margin: 0, lineHeight: '1.6' }}>
          Service availability is subject to verification and may vary by location and season. For the most up-to-date information on services, delivery timelines, rental availability, and custom design options in your area, please submit an enquiry or contact our team directly.
        </p>
      </section>
    </main>
  );
}
