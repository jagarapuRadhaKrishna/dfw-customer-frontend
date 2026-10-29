import React from 'react';

const DEFAULT_FEATURES = [
  {
    title: 'One Stop Shop',
    image: '/images/store/why-one-stop-shop.avif'
  },
  {
    title: 'Touch & Feel',
    image: '/images/store/why-touch-feel.avif'
  },
  {
    title: 'Talk To Our Experts',
    image: '/images/store/why-talk-to-experts.avif'
  },
  {
    title: 'Place Order Onsite',
    image: '/images/store/why-place-order.avif'
  }
];

export default function WhyVisitUs({
  title = 'Why Visit Us?',
  features = DEFAULT_FEATURES
}) {
  return (
    <div className="mobile desktop tablet wrapper-class">
      <div className="mt_Aq" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        <h2 className="tCnTt">{title}</h2>
        <div className="oev8E undefined">
          <div className="G5V3j undefined">
            <ul className="uUWZ7">
              {features.map((feature, index) => (
                <li key={feature.title || index} className="Fkwef">
                  <img className="wgmEI" src={feature.image} alt={feature.title} />
                  <p className="b1u2G">{feature.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
