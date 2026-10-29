'use client';

import styles from './ProcessSection.module.css';

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Browse Collection',
    description: 'Explore our curated Atmos furniture collection across all room categories',
  },
  {
    id: 2,
    number: '02',
    title: 'Customize',
    description: 'Select colors, materials, and configurations that match your style',
  },
  {
    id: 3,
    number: '03',
    title: 'Place Order',
    description: 'Add items to cart and proceed with secure checkout',
  },
  {
    id: 4,
    number: '04',
    title: 'Enjoy',
    description: 'Receive and assemble your premium furniture at home',
  },
];

export default function AtmosProcessSection() {
  return (
    <section className={styles.processContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>How It Works</h2>
        <p className={styles.subtitle}>Simple steps to get your perfect Atmos furniture</p>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <div key={step.id} className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.number}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
            {index < steps.length - 1 && <div className={styles.connector}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
