'use client';

import styles from './BenefitsSection.module.css';

const benefits = [
  {
    id: 1,
    icon: '🎨',
    title: 'Contemporary Design',
    description: 'Modern aesthetic that blends style with functionality',
  },
  {
    id: 2,
    icon: '🌱',
    title: 'Eco-Friendly',
    description: 'Sustainable materials and responsible sourcing',
  },
  {
    id: 3,
    icon: '💪',
    title: 'Durable Quality',
    description: 'Built to last with premium materials and craftsmanship',
  },
  {
    id: 4,
    icon: '💰',
    title: 'Value for Money',
    description: 'Premium quality at competitive prices',
  },
  {
    id: 5,
    icon: '🚚',
    title: 'Free Delivery',
    description: 'Nationwide delivery and installation service',
  },
  {
    id: 6,
    icon: '⭐',
    title: 'Premium Support',
    description: 'Dedicated customer service and warranty',
  },
];

export default function AtmosBenefitsSection() {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Why Choose Atmos</h2>
        <p className={styles.subtitle}>Premium furniture collection with exceptional benefits</p>
      </div>

      <div className={styles.benefitsGrid}>
        {benefits.map((benefit) => (
          <div key={benefit.id} className={styles.benefitCard}>
            <div className={styles.iconWrapper}>{benefit.icon}</div>
            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
            <p className={styles.benefitDescription}>{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Ready to Transform Your Home?</h3>
        <p className={styles.ctaSubtitle}>Explore the Atmos Collection Today</p>
        <button className={styles.ctaButton}>Shop Now</button>
      </div>
    </section>
  );
}
