/**
 * Customer Enquiry Page
 * Unified form for product enquiries, rental inquiries, expert consultations, etc.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { generateContactPageSchema } from '@/lib/schema-generator';
import { createEnquiry, validateEnquiry, generateConfirmationMessage, ENQUIRY_TYPES } from '@/lib/enquiry-handler';
import { STATES, CITIES_BY_STATE } from '@/lib/business-config';
import { useSearchParams } from 'next/navigation';

export default function EnquiryPage() {
  const searchParams = useSearchParams();
  const prefilledCity = searchParams.get('city');
  const prefilledState = searchParams.get('state');

  const contactSchema = generateContactPageSchema();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: prefilledState || 'Andhra Pradesh',
    city: prefilledCity || '',
    serviceType: 'buy', // buy, rent, both
    product: '',
    notes: '',
    contactMethod: 'phone',
    agreeToContact: true,
    consentToMarketing: false,
  });

  const [cities, setCities] = useState(CITIES_BY_STATE[formData.state] || []);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [errors, setErrors] = useState({});

  // Update cities when state changes
  useEffect(() => {
    setCities(CITIES_BY_STATE[formData.state] || []);
  }, [formData.state]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validate
    const validation = validateEnquiry(formData);
    if (!validation.valid) {
      const errorMap = {};
      validation.errors.forEach(error => {
        if (error.includes('Name')) errorMap.name = error;
        if (error.includes('Phone')) errorMap.phone = error;
        if (error.includes('Email')) errorMap.email = error;
        if (error.includes('City')) errorMap.city = error;
      });
      setErrors(errorMap);
      return;
    }

    setSubmitting(true);

    try {
      // Determine enquiry type based on service
      let enquiryType = ENQUIRY_TYPES.PRODUCT_ENQUIRY;
      if (formData.serviceType === 'rent') enquiryType = ENQUIRY_TYPES.RENTAL_ENQUIRY;
      else if (formData.serviceType === 'both') enquiryType = ENQUIRY_TYPES.EXPERT_CONSULTATION;

      // Create enquiry object
      const enquiry = createEnquiry(formData, enquiryType);

      // Submit to API
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiry)
      });

      if (response.ok) {
        const result = await response.json();
        const msg = generateConfirmationMessage(enquiry);
        setConfirmation(msg);
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          state: 'Andhra Pradesh',
          city: '',
          serviceType: 'buy',
          product: '',
          notes: '',
          contactMethod: 'phone',
          agreeToContact: true,
          consentToMarketing: false,
        });
      } else {
        setErrors({ form: 'Failed to submit enquiry. Please try again.' });
      }
    } catch (error) {
      setErrors({ form: 'An error occurred. Please try again later.' });
      console.error('Enquiry submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Success Message
  if (submitted && confirmation) {
    return (
      <>
        {contactSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
          />
        )}

        <main style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            padding: '40px',
            backgroundColor: '#e8f5e9',
            borderRadius: '8px',
            border: '2px solid #4caf50'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>✓</div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#2e7d32' }}>
              {confirmation.title}
            </h1>
            <p style={{ fontSize: '16px', color: '#1b5e20', marginBottom: '30px', lineHeight: '1.6' }}>
              {confirmation.message}
            </p>
            <div style={{
              backgroundColor: '#f1f8e9',
              padding: '20px',
              borderRadius: '4px',
              marginBottom: '30px'
            }}>
              <p style={{ fontSize: '12px', color: '#558b2f', fontWeight: '600', marginBottom: '12px' }}>
                Reference ID: {confirmation.referenceId}
              </p>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#33691e', marginBottom: '12px' }}>
                Next Steps:
              </h3>
              <ul style={{ textAlign: 'left', fontSize: '14px', color: '#33691e', margin: 0, paddingLeft: '20px' }}>
                {confirmation.nextSteps.map((step, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>{step}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              style={{
                padding: '12px 24px',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              Submit Another Enquiry
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      {contactSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
      )}

      <main className="enquiry-page" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px', color: '#1a1a1a' }}>
            Need Help Choosing Furniture?
          </h1>
          <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>
            Submit an enquiry and our team will contact you to discuss your requirements, pricing, and available options.
          </p>
        </section>

        {/* Error Message */}
        {errors.form && (
          <div style={{
            padding: '16px',
            backgroundColor: '#ffebee',
            color: '#c62828',
            borderRadius: '4px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            {errors.form}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#f9f9f9',
          padding: '30px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          {/* Row 1: Name & Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#666' }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: `1px solid ${errors.name ? '#f44336' : '#ddd'}`,
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
                placeholder="John Doe"
              />
              {errors.name && <span style={{ color: '#f44336', fontSize: '12px' }}>{errors.name}</span>}
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#666' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: `1px solid ${errors.phone ? '#f44336' : '#ddd'}`,
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
                placeholder="+91 98765 43210"
              />
              {errors.phone && <span style={{ color: '#f44336', fontSize: '12px' }}>{errors.phone}</span>}
            </div>
          </div>

          {/* Row 2: Email */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#666' }}>
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: `1px solid ${errors.email ? '#f44336' : '#ddd'}`,
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
              placeholder="your.email@example.com"
            />
            {errors.email && <span style={{ color: '#f44336', fontSize: '12px' }}>{errors.email}</span>}
          </div>

          {/* Row 3: State & City */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#666' }}>
                State *
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                {STATES.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#666' }}>
                City *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: `1px solid ${errors.city ? '#f44336' : '#ddd'}`,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                <option value="">Select a city</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <span style={{ color: '#f44336', fontSize: '12px' }}>{errors.city}</span>}
            </div>
          </div>

          {/* Service Type */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: '#666' }}>
              What are you interested in?
            </label>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[
                { value: 'buy', label: 'Buy Furniture' },
                { value: 'rent', label: 'Rent Furniture' },
                { value: 'both', label: 'Both / Expert Advice' }
              ].map(option => (
                <label key={option.value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '14px' }}>
                  <input
                    type="radio"
                    name="serviceType"
                    value={option.value}
                    checked={formData.serviceType === option.value}
                    onChange={handleInputChange}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Product Interest */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#666' }}>
              Product of Interest (Optional)
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
              placeholder="e.g., Sofa, Bed, Wardrobe"
            />
          </div>

          {/* Contact Method */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: '#666' }}>
              Preferred Contact Method
            </label>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[
                { value: 'phone', label: 'Phone Call' },
                { value: 'email', label: 'Email' },
                { value: 'both', label: 'Both' }
              ].map(option => (
                <label key={option.value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '14px' }}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value={option.value}
                    checked={formData.contactMethod === option.value}
                    onChange={handleInputChange}
                    style={{ marginRight: '8px', cursor: 'pointer' }}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: '#666' }}>
              Additional Details (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
              placeholder="Tell us more about your furniture needs, budget, or specific requirements..."
            />
          </div>

          {/* Checkboxes */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer', fontSize: '13px', marginBottom: '12px' }}>
              <input
                type="checkbox"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleInputChange}
                style={{ marginRight: '8px', marginTop: '2px', cursor: 'pointer' }}
              />
              <span>I agree to be contacted by Divya Furniture World regarding my enquiry.</span>
            </label>

            <label style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer', fontSize: '13px' }}>
              <input
                type="checkbox"
                name="consentToMarketing"
                checked={formData.consentToMarketing}
                onChange={handleInputChange}
                style={{ marginRight: '8px', marginTop: '2px', cursor: 'pointer' }}
              />
              <span>I would like to receive promotional offers and updates from Divya Furniture World.</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: submitting ? '#ccc' : '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: submitting ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            {submitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>

        {/* Info */}
        <section style={{ marginTop: '40px', textAlign: 'center', fontSize: '13px', color: '#666' }}>
          <p>
            We'll contact you within 24 hours. Have questions? Call us or check our{' '}
            <a href="/#faq" style={{ color: '#ff6b35', textDecoration: 'none' }}>
              frequently asked questions
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}
