'use client';

import { useState } from 'react';

export default function MoreProductDetails({ product }) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'care', label: 'Care Instructions' },
    { id: 'warranty', label: 'Warranty' },
    { id: 'returns', label: 'Returns' },
    { id: 'delivery', label: 'Delivery & Installation' },
  ];

  return (
    <div className="more-details-section">
      <h2 className="more-details-heading">More Product Details</h2>

      <div className="details-tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`details-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="details-tab-content">
        {activeTab === 'description' && (
          <div>
            <h4>About this Product</h4>
            <p>
              {product.description || `The ${product.title} is crafted with precision and care, combining contemporary design aesthetics with lasting durability. Featuring premium upholstery material over a solid wood frame, this piece brings both comfort and style to your living space.`}
            </p>
            <p>
              The cushions are filled with high-density foam for optimal support, while the fabric is treated for stain resistance. The tapered wooden legs add a mid-century modern touch, complementing a wide range of interior styles from minimalist to eclectic.
            </p>
            <p>
              Designed for everyday use, this sofa is rigorously tested to meet international quality standards. Whether you&#39;re entertaining guests or relaxing after a long day, this piece ensures unmatched comfort and elegance.
            </p>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="details-specs-grid">
            <div>
              <div className="spec-row">
                <span className="spec-label">Material</span>
                <span className="spec-value">Premium Bonded Leather / Fabric</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Frame Material</span>
                <span className="spec-value">Solid Sheesham Wood</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Upholstery</span>
                <span className="spec-value">High-density Foam</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Leg Material</span>
                <span className="spec-value">Solid Wood with Walnut Finish</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Seating Capacity</span>
                <span className="spec-value">3 Seater</span>
              </div>
            </div>
            <div>
              <div className="spec-row">
                <span className="spec-label">Width</span>
                <span className="spec-value">210 cm</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Depth</span>
                <span className="spec-value">88 cm</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Height</span>
                <span className="spec-value">82 cm</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Seat Height</span>
                <span className="spec-value">43 cm</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Weight</span>
                <span className="spec-value">52 kg</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'care' && (
          <div>
            <h4>Care Instructions</h4>
            <p>Vacuum your sofa regularly using a soft brush attachment to remove dust and debris. For spills, blot immediately with a clean, dry cloth — avoid rubbing to prevent spreading.</p>
            <p>Use a mild upholstery cleaner for spot cleaning. Avoid placing the sofa in direct sunlight to prevent fading. Rotate and fluff cushions periodically for even wear.</p>
          </div>
        )}

        {activeTab === 'warranty' && (
          <div>
            <h4>Warranty Information</h4>
            <p>This product comes with a comprehensive <strong>5-year warranty</strong> against manufacturing defects. The warranty covers the frame structure, springs, and foam cushioning.</p>
            <p>Upholstery fabric is covered for <strong>1 year</strong> against seam separation and colour fading under normal use conditions. Extended warranty options are available at checkout.</p>
          </div>
        )}

        {activeTab === 'returns' && (
          <div>
            <h4>Return Policy</h4>
            <p>We offer <strong>easy returns within 14 days</strong> of delivery. The product must be in its original condition, unused, and with all packaging intact.</p>
            <p>To initiate a return, contact our customer support team or use the self-service portal in your account. Refunds are processed within 5-7 business days after pickup.</p>
          </div>
        )}

        {activeTab === 'delivery' && (
          <div>
            <h4>Delivery & Installation</h4>
            <p><strong>Free delivery</strong> is available for orders above ₹5,000 to most pin codes across India. Standard delivery takes 7-14 business days depending on your location.</p>
            <p><strong>Free professional installation</strong> is included. Our trained technicians will assemble the product at your home and ensure everything is set up perfectly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
