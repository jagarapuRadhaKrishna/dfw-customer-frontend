import React from 'react';
import styles from './Atmos.module.css';

export default function AtmosAbout() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.ctaContainer}>
          <h2>ABOUT ATMOS</h2>
          <p className={styles.aboutSubtitle}>REDEFINE YOUR LIVING SPACES WITH ARTISTRY AND COMFORT</p>
          
          <div className={styles.aboutText}>
            <p>
              Atmos is a curated collection of furniture designed to transform your home into a sanctuary of elegance and sophistication. 
              Each piece in the Atmos collection is meticulously crafted to blend modern aesthetics with timeless comfort, 
              creating spaces that inspire and rejuvenate.
            </p>
            <p>
              From the living room to the bedroom, dining area to the study, Atmos offers a complete range of furniture 
              that speaks to the discerning taste of those who appreciate quality, design, and functionality.
            </p>
          </div>

          <button className={styles.ctaButton}>EXPLORE ALL PRODUCTS</button>
        </div>
      </div>
    </section>
  );
}
