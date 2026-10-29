'use client';

import Link from 'next/link';
import styles from './Atmos.module.css';

export default function AtmosHero() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.ctaContainer}>
          <h2>Atmos Collection</h2>
          <p>
            Premium Furniture Curated for Every Room
          </p>
          <p>
            Transform your living spaces with our exclusive Atmos collection,
            featuring contemporary designs that blend style, comfort, and functionality.
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link href="#categories" className={styles.ctaButton}>
              Explore Rooms
            </Link>
            <Link href="#products" className={styles.ctaButton}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
